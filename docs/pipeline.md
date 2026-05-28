# Wiki Pipeline — Architecture & Operations

## Overview

The wiki pipeline extracts practitioner knowledge from sources (handbooks, blog posts, talks) and synthesizes it into wiki entries organized by **process** (strategic-ops, financial-ops, people-ops, etc.) and **phase** (foundation, first-hires, early-scale, growth, scaled).

```
Sources → Atoms → Draft + Trail → Approval → Published Wiki
 (Phase 1)   (Phase 1)   (Phase 2)    (Phase 3)    (Phase 4)

Optional intermediate: Candidate Claims (handbook extraction only, between Phase 1 and Phase 2)
```

---

## File Types

| File | Location | Purpose |
|------|----------|---------|
| **Source** | `sources/src-NNN.md` | Raw source material with metadata (URL, type, bias signals, summary) |
| **Atom** | `atoms/atom-NNN.md` | Smallest meaningful unit — one extracted claim from a source |
| **Corpus Health** | `corpus_health.md` | Source mix analysis (practitioner vs vendor %, time span, findings) |
| **Candidate Claims** | `entries/{process}/{phase}/candidate-claims.md` | Parking lot for claims before full synthesis (optional) |
| **Draft** | `entries/{process}/{phase}/draft.md` | Synthesized wiki entry with `<!-- claim-id: c-NNN -->` markers |
| **Trail** | `entries/{process}/{phase}/trail.md` | Audit trail: each claim mapped to its supporting atoms |
| **Approval** | `entries/{process}/{phase}/approval.md` | Review decisions per claim (approve/reject/edit + flags) |
| **Published Wiki** | `wiki/processes/{category}/{process}--{phase}.md` | Final published page |

---

## Process & Phase Structure

### Processes
`strategic-ops`, `financial-ops`, `people-ops`, `legal-ops`, `revenue-ops`

### Phases
| Phase | Company Size |
|-------|-------------|
| `foundation` | 1–5 people |
| `first-hires` | 2–10 people |
| `early-scale` | ~25 people |
| `growth` | ~50–150 people |
| `scaled` | 150+ people |

### Directory Layout
```
wiki-pipeline/entries/
├── strategic-ops/
│   ├── foundation/
│   │   ├── candidate-claims.md
│   │   ├── draft.md
│   │   ├── trail.md
│   │   └── approval.md
│   ├── first-hires/
│   ├── early-scale/
│   ├── growth/
│   └── scaled/
├── financial-ops/
│   └── foundation/
└── people-ops/
    └── first-hires/
```

---

## Pipeline Phases

### Phase 1: Discovery & Atom Extraction

**Prompt:** `prompts/phase-1-discovery-and-extraction.md`
**Input:** Process name + Phase name
**Output:** `sources/src-NNN.md` files (5–10 sources) + `atoms/atom-NNN.md` + `corpus_health-{process}-{phase}.md`

Sources are tiered:
- **Tier 1:** Practitioner-led (founder blogs, operator handbooks, post-mortems)
- **Tier 2:** Reference material (academic papers, industry reports)
- **Tier 3:** Vendor content (with bias flags)

Also produces a `corpus_health.md` analyzing the source mix. Discovery, bias checking, and atom extraction run in a single prompt pass.

**Atoms output:** `atoms/atom-NNN.md`

Each atom contains one claim with:
- `id`: Sequential with source suffix (e.g. `atom-067-gitlab`)
- `source_id`: Which source it came from
- `type`: `target_state`, `action`, `warning_sign`, `evolution`, `tool_resource`, `why`
- `process` / `phase`: Which cell it belongs to
- `confidence`, `why_quality`: Quality indicators
- `practitioner_first_person`: Boolean, weighted higher in synthesis
- `bias_flags`: Any vendor or geographic bias

**Special variant:** `prompts/source-budgeted-handbook-extraction.md` for mining company handbooks (e.g. GitLab). This can produce atoms across multiple phases in one pass.

### Optional step: Candidate Claims (handbook extraction only)

**File:** `entries/{process}/{phase}/candidate-claims.md`

Used when extracting from handbooks — creates a structured parking lot of candidate claims with supporting atoms before full synthesis. Frontmatter includes `status: candidate`.

### Phase 2: Synthesis

**Prompt:** `prompts/phase-2-synthesis.md`
**Input:** All atoms for one `{process}/{phase}` cell (from Phase 1)
**Output:** `draft.md` + `trail.md`

#### Draft Structure (5 sections)
1. **What good looks like** — from `target_state` atoms
2. **What you actually need to do** — from `action` atoms
3. **Warning signs you're behind** — from `warning_sign` atoms, grouped by category
4. **How this evolves next** — from `evolution` atoms
5. **Tools & resources** — from `tool_resource` atoms

#### Rules
- Max **7 bullets per section** (combined across warning sign categories)
- Each bullet: **bold claim** + indented 2–4 line explanation + `<!-- sources: src-NNN -->`
- Each claim marked with `<!-- claim-id: c-NNN -->` starting from c-001
- Warning signs grouped under: `Output quality`, `Founder / key-person time`, `Process entry`
- Drop weakest atoms if over 7; note dropped atoms in trail

#### Trail Format
```markdown
### c-NNN: {short claim summary}
- Section: {what_good_looks_like | what_to_do | warning_signs | evolution | tools}
- Warning category: {output_quality | founder_time | process_entry}  # only for warnings
- Supporting atoms: atom-NNN, atom-NNN
- Rejected atoms (and why): none | atom-NNN (reason)
- Why-source: atom-NNN (brief note)
- Synthesis notes: {editorial decisions}
```

### Phase 3: Approval (human)

**Guide:** `prompts/phase-3-human-review.md`
**Tool:** `localhost:8765` (Python HTTP server, `server.py` + `approval-tool.html`)

**Required files:** `draft.md` + `trail.md`
**Auto-created:** `approval.md` — the server creates it on first visit if missing, with all claims set to `pending`.

**Reviewer actions per claim:**
- `approved` — use as-is
- `approved_with_edit` — use edited claim text
- `rejected` — omit from published page
- Add flags: `too_generic`, `vendor_biased`, `geographically_biased`, `conditional`, `unverified`, `missing_why`
- Add reviewer notes (supports `human-insight:` and `human-rewrite:` prefixes)

### Phase 4: Publish

**Prompt:** `prompts/phase-4-publish.md`
**Input:** `draft.md` + `approval.md` + `trail.md` + atoms + sources + wiki stub
**Output:** `wiki/processes/{category}/{process}--{phase}.md`

**Processing:**
- `approved` → include as-is
- `approved_with_edit` → use `edited_claim_text`
- `rejected` / `pending` → omit
- Apply flag handling (soften vendor-biased claims, qualify conditionals)
- `human-insight:` → append sentence, add source comment
- `human-rewrite:` → use edited text, dual source comments
- Build `## Sources` section at end

---

## ID Naming Convention

### Sources
Sequential with source suffix: `src-NNN.md` → `src-020-gitlab.md`
Frontmatter: `id: src-NNN-suffix`

### Atoms
Sequential with source suffix: `atom-NNN.md` → `atom-067-gitlab.md`
Frontmatter: `id: atom-NNN-suffix`, `source_id: src-NNN-suffix`

### Claims
Per draft, starting from `c-001`. Numbering restarts for each `{process}/{phase}` cell.

---

## Server Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Serve approval-tool.html |
| `/api/entries` | GET | List all entries with approval summary |
| `/api/entry/{process}/{phase}` | GET | Full entry data (draft, trail, approval, atoms, sources) |
| `/api/approve` | POST | Save a claim decision to approval.md |

The server is stateless — all state lives in markdown files. No database.

---

## Checklist: What You Need for Each Cell

| Stage | Files Needed | Created By |
|-------|-------------|------------|
| Sources exist | `sources/src-NNN.md` | Phase 1 prompt |
| Atoms exist | `atoms/atom-NNN.md` | Phase 1 prompt |
| Candidate claims (optional) | `entries/{p}/{ph}/candidate-claims.md` | Human or handbook extraction prompt |
| **Draft** | `entries/{p}/{ph}/draft.md` | Phase 2 prompt (LLM synthesis) |
| **Trail** | `entries/{p}/{ph}/trail.md` | Phase 2 prompt (produced with draft) |
| Approval | `entries/{p}/{ph}/approval.md` | Auto-created by server on first visit |
| Published | `wiki/processes/.../{p}--{ph}.md` | Phase 4 prompt |

**Missing Draft** → approval tool shows 0/0 claims; run Phase 2 synthesis.
**Missing Approval** → server auto-creates it on first visit.


---

## Running the Tools

```bash
# Approval tool (port 8765)
python3 wiki-pipeline/server.py

# Kill if port is in use
lsof -ti:8765 | xargs kill -9
```
