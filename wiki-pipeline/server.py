#!/usr/bin/env python3
"""
Wiki Pipeline Approval Server
==============================
Minimal HTTP server for the wiki content approval tool.
No external dependencies — Python 3 stdlib only.

Run:
    python3 wiki-pipeline/server.py

Serves at: http://localhost:8765

Endpoints:
    GET  /                              → approval-tool.html
    GET  /api/entries                   → list all entries with approval status summary
    GET  /api/entry/{process}/{phase}   → full entry data (draft, trail, approval, atoms, sources)
    POST /api/approve                   → write a claim decision to approval.md

The server reads/writes markdown files directly from the wiki-pipeline/
directory. No database. All state lives in the markdown files.
"""

import http.server
import json
import os
import re
import socketserver
from datetime import date
from urllib.parse import urlparse, parse_qs

# ── Configuration ──────────────────────────────────────────────────────────────

PORT = 8765
# Resolve the wiki-pipeline/ directory relative to this script's location
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
SOURCES_DIR = os.path.join(BASE_DIR, "sources")
ATOMS_DIR = os.path.join(BASE_DIR, "atoms")
ENTRIES_DIR = os.path.join(BASE_DIR, "entries")
TOOL_HTML = os.path.join(BASE_DIR, "approval-tool.html")


# ── Frontmatter parser ─────────────────────────────────────────────────────────

def parse_frontmatter(text):
    """
    Parse YAML frontmatter from a markdown string.
    Returns (frontmatter_dict, body_string).
    Only handles the subset of YAML used in this pipeline:
    - scalar values (string, bool, int)
    - lists (block style with - items)
    Does not handle nested dicts.
    """
    fm = {}
    body = text

    match = re.match(r'^---\n(.*?)\n---\n?(.*)', text, re.DOTALL)
    if not match:
        return fm, body

    raw_fm = match.group(1)
    body = match.group(2)

    current_key = None
    for line in raw_fm.split('\n'):
        # List item
        if line.startswith('  - ') or line.startswith('- '):
            item = line.lstrip().lstrip('- ').strip()
            # Strip inline comments
            item = re.sub(r'\s+#.*$', '', item).strip()
            if current_key is not None:
                if not isinstance(fm.get(current_key), list):
                    fm[current_key] = []
                fm[current_key].append(item)
            continue

        # Key: value
        kv = re.match(r'^(\w+):\s*(.*)', line)
        if not kv:
            continue
        key = kv.group(1)
        val = kv.group(2).strip()

        # Strip inline comments
        val = re.sub(r'\s+#.*$', '', val).strip()

        # Quoted string
        if (val.startswith('"') and val.endswith('"')) or \
           (val.startswith("'") and val.endswith("'")):
            val = val[1:-1]
        # Bool
        elif val.lower() == 'true':
            val = True
        elif val.lower() == 'false':
            val = False
        # Null / empty list start
        elif val == '' or val == '[]':
            val = []
        # Int
        elif val.isdigit():
            val = int(val)

        fm[key] = val
        current_key = key

    return fm, body.lstrip('\n')


def read_file(path):
    """Read a file and return its content, or None if it doesn't exist."""
    if not os.path.exists(path):
        return None
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()


def write_file(path, content):
    """Write content to a file, creating directories as needed."""
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)


# ── Entry discovery ────────────────────────────────────────────────────────────

def list_entries():
    """
    Walk entries/ and return a list of dicts:
    { process, phase, claim_count, approved, pending, rejected }
    """
    entries = []
    if not os.path.exists(ENTRIES_DIR):
        return entries

    for process in sorted(os.listdir(ENTRIES_DIR)):
        process_dir = os.path.join(ENTRIES_DIR, process)
        if not os.path.isdir(process_dir):
            continue
        for phase in sorted(os.listdir(process_dir)):
            phase_dir = os.path.join(process_dir, phase)
            if not os.path.isdir(phase_dir):
                continue

            draft_path = os.path.join(phase_dir, "draft.md")
            approval_path = os.path.join(phase_dir, "approval.md")

            draft_text = read_file(draft_path)
            approval_text = read_file(approval_path)

            claim_count = 0
            approved = 0
            rejected = 0
            pending = 0

            if draft_text:
                fm, _ = parse_frontmatter(draft_text)
                claim_count = fm.get('claim_count', 0)

            if approval_text:
                statuses = re.findall(r'^- Status:\s*(\w+)', approval_text, re.MULTILINE)
                for s in statuses:
                    if s in ('approved', 'approved_with_edit'):
                        approved += 1
                    elif s == 'rejected':
                        rejected += 1
                    else:
                        pending += 1

            entries.append({
                "process": process,
                "phase": phase,
                "claim_count": claim_count,
                "approved": approved,
                "rejected": rejected,
                "pending": pending,
            })

    return entries


# ── Entry data loader ──────────────────────────────────────────────────────────

def load_entry(process, phase):
    """
    Load all data for a single entry:
    - draft claims (parsed from draft.md)
    - trail mappings (parsed from trail.md)
    - approval statuses (parsed from approval.md)
    - atoms referenced in the trail
    - source metadata for those atoms
    """
    phase_dir = os.path.join(ENTRIES_DIR, process, phase)
    if not os.path.exists(phase_dir):
        return None

    # ── Draft: extract claims ──────────────────────────────────────────────────
    draft_text = read_file(os.path.join(phase_dir, "draft.md"))
    if not draft_text:
        return None

    draft_fm, draft_body = parse_frontmatter(draft_text)

    # Parse claims: find <!-- claim-id: c-NNN --> markers and the text after them
    claims = {}
    # Match marker + following non-empty content up to next marker or end
    pattern = re.compile(
        r'<!--\s*claim-id:\s*(c-\d+)\s*-->\s*\n(.*?)(?=\n<!--\s*claim-id:|$)',
        re.DOTALL
    )
    for m in pattern.finditer(draft_body):
        claim_id = m.group(1)
        raw = m.group(2).strip()
        # Take just the first non-empty paragraph/line as the claim text
        first_block = raw.split('\n\n')[0].strip()
        # Strip markdown list numbering if present
        first_block = re.sub(r'^\d+\.\s+', '', first_block)
        claims[claim_id] = first_block

    # Determine section for each claim by finding what section header precedes it
    section_map = {}
    section_patterns = [
        ('what_good_looks_like', r'## What good looks like'),
        ('what_to_do',           r'## What you actually need to do'),
        ('warning_signs',        r'## Warning signs'),
        ('evolution',            r'## How this evolves'),
        ('tools_resources',      r'## Tools'),
    ]
    # Walk the body and assign section to each claim id in order
    current_section = None
    for line in draft_body.split('\n'):
        for slug, pattern_str in section_patterns:
            if re.match(pattern_str, line):
                current_section = slug
        m = re.match(r'<!--\s*claim-id:\s*(c-\d+)\s*-->', line)
        if m:
            section_map[m.group(1)] = current_section

    # ── Trail: load atom → claim mappings ─────────────────────────────────────
    trail_text = read_file(os.path.join(phase_dir, "trail.md"))
    trail_map = {}  # claim_id → { supporting_atoms, rejected_atoms, why_source, synthesis_notes }

    if trail_text:
        _, trail_body = parse_frontmatter(trail_text)
        # Split on ### c-NNN: headers
        claim_blocks = re.split(r'###\s+(c-\d+):', trail_body)
        # claim_blocks: [preamble, id, body, id, body, ...]
        it = iter(claim_blocks[1:])
        for cid, cbody in zip(it, it):
            cid = cid.strip()
            supporting = re.search(r'- Supporting atoms:\s*(.*)', cbody)
            rejected   = re.search(r'- Rejected atoms.*?:\s*(.*)', cbody)
            why        = re.search(r'- Why-source:\s*(.*)', cbody)
            synthesis  = re.search(r'- Synthesis notes:\s*(.*)', cbody)

            def extract_atom_ids(s):
                if not s:
                    return []
                raw = s.group(1).strip()
                if raw.lower() in ('none', ''):
                    return []
                return [a.strip() for a in re.findall(r'atom-\d+', raw)]

            trail_map[cid] = {
                "supporting_atoms": extract_atom_ids(supporting),
                "rejected_atoms":   extract_atom_ids(rejected),
                "why_source":       why.group(1).strip() if why else "",
                "synthesis_notes":  synthesis.group(1).strip() if synthesis else "",
            }

    # ── Approval: load statuses ────────────────────────────────────────────────
    approval_text = read_file(os.path.join(phase_dir, "approval.md"))
    approval_map = {}  # claim_id → { status, rejection_reason, reviewer_notes, edited_claim_text }

    if approval_text:
        _, approval_body = parse_frontmatter(approval_text)
        claim_blocks = re.split(r'###\s+(c-\d+)', approval_body)
        it = iter(claim_blocks[1:])
        for cid, cbody in zip(it, it):
            cid = cid.strip()
            status   = re.search(r'- Status:\s*(\S+)', cbody)
            reason   = re.search(r'- Rejection reason:\s*(.*)', cbody)
            notes    = re.search(r'- Reviewer notes:\s*"(.*?)"', cbody)
            reviewed = re.search(r'- Reviewed by:\s*"?(.*?)"?$', cbody, re.MULTILINE)
            rev_date = re.search(r'- Reviewed date:\s*(.*)', cbody)
            edited   = re.search(r'- Edited claim text:\s*(.*)', cbody)

            def clean(m, default=''):
                if not m:
                    return default
                v = m.group(1).strip().strip('"')
                return '' if v.lower() == 'null' else v

            approval_map[cid] = {
                "status":            clean(status, 'pending'),
                "rejection_reason":  clean(reason),
                "reviewer_notes":    clean(notes),
                "reviewed_by":       clean(reviewed),
                "reviewed_date":     clean(rev_date),
                "edited_claim_text": clean(edited),
            }

    # ── Atoms: load referenced atoms ──────────────────────────────────────────
    # Collect all atom IDs referenced in the trail
    all_atom_ids = set()
    for v in trail_map.values():
        all_atom_ids.update(v["supporting_atoms"])
        all_atom_ids.update(v["rejected_atoms"])

    atoms = {}
    source_ids_needed = set()
    for atom_id in all_atom_ids:
        atom_path = os.path.join(ATOMS_DIR, f"{atom_id}.md")
        atom_text = read_file(atom_path)
        if not atom_text:
            continue
        atom_fm, atom_body = parse_frontmatter(atom_text)
        claim_m = re.search(r'## Claim\n+(.*?)(?=\n## |\Z)', atom_body, re.DOTALL)
        atoms[atom_id] = {
            **atom_fm,
            "claim_text": claim_m.group(1).strip() if claim_m else "",
        }
        if atom_fm.get("source_id"):
            source_ids_needed.add(atom_fm["source_id"])

    # ── Sources: load referenced sources ──────────────────────────────────────
    sources = {}
    for src_id in source_ids_needed:
        src_path = os.path.join(SOURCES_DIR, f"{src_id}.md")
        src_text = read_file(src_path)
        if not src_text:
            continue
        src_fm, _ = parse_frontmatter(src_text)
        sources[src_id] = src_fm

    # ── Assemble final claim list ──────────────────────────────────────────────
    claim_list = []
    for cid, text in sorted(claims.items(), key=lambda x: int(x[0].split('-')[1])):
        trail = trail_map.get(cid, {})
        approval = approval_map.get(cid, {"status": "pending"})

        # Enrich supporting atoms with source metadata
        enriched_atoms = []
        for aid in trail.get("supporting_atoms", []):
            atom = atoms.get(aid, {})
            src_id = atom.get("source_id", "")
            source = sources.get(src_id, {})
            enriched_atoms.append({
                "id":                    aid,
                "claim_text":            atom.get("claim_text", ""),
                "type":                  atom.get("type", ""),
                "confidence":            atom.get("confidence", ""),
                "practitioner_first_person": atom.get("practitioner_first_person", False),
                "bias_flags":            atom.get("bias_flags", []),
                "source_id":             src_id,
                "source_title":          source.get("title", ""),
                "source_type":           source.get("type", ""),
                "source_bias_signals":   source.get("bias_signals", []),
                "source_geographic_focus": source.get("geographic_focus", ""),
                "is_rejected":           aid in trail.get("rejected_atoms", []),
                "is_why_source":         aid in trail.get("why_source", ""),
            })

        claim_list.append({
            "id":              cid,
            "text":            text,
            "section":         section_map.get(cid, ""),
            "trail":           trail,
            "approval":        approval,
            "atoms":           enriched_atoms,
        })

    return {
        "process":     process,
        "phase":       phase,
        "draft_fm":    draft_fm,
        "claims":      claim_list,
    }


# ── Approval writer ────────────────────────────────────────────────────────────

def write_approval(process, phase, claim_id, status, rejection_reason,
                   reviewer_notes, edited_claim_text, reviewed_by):
    """
    Update a single claim's approval status in approval.md.
    Rewrites only the block for claim_id; leaves all others untouched.
    """
    approval_path = os.path.join(ENTRIES_DIR, process, phase, "approval.md")
    text = read_file(approval_path)
    if not text:
        return False, "approval.md not found"

    today = date.today().isoformat()
    reviewed_by_str = reviewed_by or ""

    # Build the replacement block
    new_block = f"""### {claim_id}
- Status: {status}
- Rejection reason: {rejection_reason or 'null'}
- Reviewer notes: "{reviewer_notes or ''}"
- Reviewed by: "{reviewed_by_str}"
- Reviewed date: {today}
- Edited claim text: {edited_claim_text if edited_claim_text else 'null'}"""

    # Replace the existing block for this claim_id
    pattern = re.compile(
        r'(### ' + re.escape(claim_id) + r'\n)(.*?)(?=\n### c-|\Z)',
        re.DOTALL
    )

    if not pattern.search(text):
        return False, f"claim {claim_id} not found in approval.md"

    new_text = pattern.sub(new_block + '\n', text)
    write_file(approval_path, new_text)
    return True, "ok"


# ── HTTP handler ───────────────────────────────────────────────────────────────

class Handler(http.server.BaseHTTPRequestHandler):

    def log_message(self, format, *args):
        # Suppress default access log noise; only log errors
        pass

    def send_json(self, data, status=200):
        body = json.dumps(data, ensure_ascii=False, indent=2).encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Content-Length', len(body))
        self.send_header('Access-Control-Allow-Origin', '*')
        self.end_headers()
        self.wfile.write(body)

    def send_html(self, path, status=200):
        text = read_file(path)
        if not text:
            self.send_error(404, "File not found")
            return
        body = text.encode('utf-8')
        self.send_response(status)
        self.send_header('Content-Type', 'text/html; charset=utf-8')
        self.send_header('Content-Length', len(body))
        self.end_headers()
        self.wfile.write(body)

    def send_error_json(self, status, message):
        self.send_json({"error": message}, status)

    def do_OPTIONS(self):
        # Handle CORS preflight
        self.send_response(204)
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        self.end_headers()

    def do_GET(self):
        parsed = urlparse(self.path)
        path = parsed.path.rstrip('/')

        # Root → serve the tool HTML
        if path in ('', '/'):
            self.send_html(TOOL_HTML)
            return

        # GET /api/entries
        if path == '/api/entries':
            self.send_json(list_entries())
            return

        # GET /api/entry/{process}/{phase}
        m = re.match(r'^/api/entry/([^/]+)/([^/]+)$', path)
        if m:
            process, phase = m.group(1), m.group(2)
            data = load_entry(process, phase)
            if data is None:
                self.send_error_json(404, f"Entry {process}/{phase} not found")
            else:
                self.send_json(data)
            return

        self.send_error_json(404, "Not found")

    def do_POST(self):
        parsed = urlparse(self.path)
        path = parsed.path.rstrip('/')

        # POST /api/approve
        if path == '/api/approve':
            length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(length)
            try:
                payload = json.loads(body.decode('utf-8'))
            except json.JSONDecodeError:
                self.send_error_json(400, "Invalid JSON")
                return

            process          = payload.get('process', '').strip()
            phase            = payload.get('phase', '').strip()
            claim_id         = payload.get('claim_id', '').strip()
            status           = payload.get('status', '').strip()
            rejection_reason = payload.get('rejection_reason', None)
            reviewer_notes   = payload.get('reviewer_notes', '')
            edited_text      = payload.get('edited_claim_text', None)
            reviewed_by      = payload.get('reviewed_by', '')

            if not all([process, phase, claim_id, status]):
                self.send_error_json(400, "Missing required fields: process, phase, claim_id, status")
                return

            valid_statuses = {'approved', 'approved_with_edit', 'rejected', 'pending'}
            if status not in valid_statuses:
                self.send_error_json(400, f"Invalid status. Must be one of: {valid_statuses}")
                return

            ok, msg = write_approval(
                process, phase, claim_id, status,
                rejection_reason, reviewer_notes, edited_text, reviewed_by
            )
            if ok:
                self.send_json({"ok": True, "claim_id": claim_id, "status": status})
            else:
                self.send_error_json(500, msg)
            return

        self.send_error_json(404, "Not found")


# ── Entry point ────────────────────────────────────────────────────────────────

def main():
    # Try the configured port; fail clearly if it's in use
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            httpd.allow_reuse_address = True
            print(f"Wiki pipeline approval tool running at http://localhost:{PORT}")
            print(f"Serving from: {BASE_DIR}")
            print("Press Ctrl+C to stop.")
            httpd.serve_forever()
    except OSError as e:
        if 'Address already in use' in str(e):
            print(f"Error: port {PORT} is already in use.")
            print("If you're running the static site server on port 8000, that's fine — "
                  "this server uses a different port.")
            print(f"Kill the process using port {PORT} and try again, or change PORT in server.py.")
        else:
            raise


if __name__ == '__main__':
    main()
