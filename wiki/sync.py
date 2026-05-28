#!/usr/bin/env python3
"""
wiki/sync.py — sync stage_focus frontmatter → processes.json
=============================================================

Reads every wiki/processes/**/*.md that has a `stage_focus:` field in its
YAML frontmatter, then patches the corresponding entry in data/processes.json.

Files without `stage_focus:` are silently skipped — processes.json keeps
its existing value for those cells (safe to run at any time, even when most
wiki entries are stubs).

Usage:
    python3 wiki/sync.py            # dry-run: print what would change
    python3 wiki/sync.py --apply    # write changes to processes.json
    python3 wiki/sync.py --apply --quiet   # apply without output (for hooks)

File naming convention:
    wiki/processes/{category}/{process_id}--{stage}.md
    e.g. wiki/processes/strategic/1.1--foundation.md
         → process_id = "1.1", stage = "foundation"
"""

import argparse
import json
import os
import re
import sys
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
WIKI_DIR = REPO_ROOT / "wiki" / "processes"
PROCESSES_JSON = REPO_ROOT / "data" / "processes.json"


# ── Frontmatter parser ────────────────────────────────────────────────────────

def parse_stage_focus(path: Path) -> str | None:
    """
    Read a wiki markdown file and return the value of `stage_focus:` from its
    YAML frontmatter, or None if the field is absent.

    Handles both single-line and quoted values:
        stage_focus: "One sentence here."
        stage_focus: One sentence here.
    """
    text = path.read_text(encoding="utf-8")
    match = re.match(r"^---\n(.*?)\n---", text, re.DOTALL)
    if not match:
        return None
    frontmatter = match.group(1)

    # Match: stage_focus: "quoted value" or stage_focus: unquoted value
    field_match = re.search(
        r'^stage_focus:\s*"(.+?)"\s*$|^stage_focus:\s*(.+?)\s*$',
        frontmatter,
        re.MULTILINE,
    )
    if not field_match:
        return None

    value = field_match.group(1) or field_match.group(2)
    return value.strip() if value else None


# ── Wiki file scanner ─────────────────────────────────────────────────────────

def scan_wiki() -> dict[tuple[str, str], str]:
    """
    Walk wiki/processes/ and collect all (process_id, stage) → stage_focus
    pairs where stage_focus is present.
    """
    updates: dict[tuple[str, str], str] = {}
    pattern = re.compile(r"^([\d.]+[ab]?)--(.+)\.md$")

    for md_file in sorted(WIKI_DIR.rglob("*.md")):
        if md_file.name == "_template.md":
            continue
        m = pattern.match(md_file.name)
        if not m:
            continue
        process_id, stage = m.group(1), m.group(2)
        value = parse_stage_focus(md_file)
        if value:
            updates[(process_id, stage)] = value

    return updates


# ── processes.json patcher ────────────────────────────────────────────────────

def apply_updates(
    updates: dict[tuple[str, str], str],
    quiet: bool = False,
) -> int:
    """
    Load processes.json, apply updates in-place, write back.
    Returns the number of cells changed.
    """
    with open(PROCESSES_JSON, encoding="utf-8") as f:
        data = json.load(f)

    changed = 0
    for process in data["processes"]:
        pid = process["id"]
        for stage, new_text in updates.items():
            p_id, p_stage = stage
            if p_id != pid:
                continue
            old_text = process.get("stageFocus", {}).get(p_stage)
            if old_text == new_text:
                continue
            if "stageFocus" not in process:
                process["stageFocus"] = {}
            process["stageFocus"][p_stage] = new_text
            changed += 1
            if not quiet:
                print(f"  updated  {pid} / {p_stage}")
                if old_text:
                    print(f"    was: {old_text[:80]}{'…' if len(old_text) > 80 else ''}")
                print(f"    now: {new_text[:80]}{'…' if len(new_text) > 80 else ''}")

    with open(PROCESSES_JSON, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
        f.write("\n")

    return changed


# ── Dry-run reporter ──────────────────────────────────────────────────────────

def dry_run(updates: dict[tuple[str, str], str]) -> None:
    with open(PROCESSES_JSON, encoding="utf-8") as f:
        data = json.load(f)

    index: dict[str, dict] = {p["id"]: p for p in data["processes"]}
    would_change = 0

    for (pid, stage), new_text in sorted(updates.items()):
        proc = index.get(pid)
        if not proc:
            print(f"  WARNING: {pid} not found in processes.json")
            continue
        old_text = proc.get("stageFocus", {}).get(stage)
        if old_text == new_text:
            print(f"  unchanged  {pid} / {stage}")
        else:
            would_change += 1
            print(f"  would update  {pid} / {stage}")
            if old_text:
                print(f"    was: {old_text[:80]}{'…' if len(old_text) > 80 else ''}")
            print(f"    now: {new_text[:80]}{'…' if len(new_text) > 80 else ''}")

    print()
    if would_change:
        print(f"{would_change} cell(s) would be updated. Run with --apply to write.")
    else:
        print("Nothing to update.")


# ── Entry point ───────────────────────────────────────────────────────────────

def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--apply", action="store_true", help="Write changes to processes.json (default: dry-run)")
    parser.add_argument("--quiet", action="store_true", help="Suppress output (useful for git hooks)")
    args = parser.parse_args()

    updates = scan_wiki()

    if not updates:
        if not args.quiet:
            print("No wiki files with stage_focus: found. Nothing to sync.")
        sys.exit(0)

    if not args.quiet:
        print(f"Found {len(updates)} stage_focus field(s) in wiki files.\n")

    if args.apply:
        changed = apply_updates(updates, quiet=args.quiet)
        if not args.quiet:
            print(f"\n{changed} cell(s) updated in processes.json.")
    else:
        dry_run(updates)


if __name__ == "__main__":
    main()
