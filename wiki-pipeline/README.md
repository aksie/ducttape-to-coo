# Wiki Pipeline

This directory contains the content pipeline for the Duct Tape to COO wiki. It is where source research is collected, claims are extracted, entries are synthesised, and content is reviewed before going into the wiki.

---

## How it works

```
sources/          ← one file per article, post, or interview
atoms/            ← individual extracted claims from sources
entries/          ← synthesised wiki entries
  {process}/
    {phase}/
      draft.md    ← the synthesised wiki page with claim markers
      trail.md    ← which atoms support which claims (audit trail)
      approval.md ← review decisions per claim
```

The pipeline keeps source research and editorial decisions separate from the published wiki. Every claim in a wiki entry can be traced back to the atoms and sources that support it.

---

## Running the approval tool

The approval tool is a local web app for reviewing claims one by one.

**Prerequisites:** Python 3 (stdlib only, no pip install needed)

```bash
python3 wiki-pipeline/server.py
```

Open: http://localhost:8765

> Note: if you're also running the static site server (`python3 -m http.server 8000`), that's fine — they use different ports and don't conflict.

---

## Adding a new source

1. Find the next available ID: look at the highest `src-NNN` in `sources/`
2. Create `sources/src-NNN.md` using the frontmatter template in `schema.md`
3. Fill in the `## Summary` and `## Notable claims` sections
4. Set `reviewed_by` and `review_date`

---

## Extracting atoms

1. Read the source carefully
2. For each distinct claim worth extracting, create `atoms/atom-NNN.md`
3. One atom = one insight. Don't combine multiple claims into one atom
4. Fill in `type`, `process`, `phase`, `confidence`, and `practitioner_first_person` accurately
5. Flag `bias_flags` honestly — atoms with bias flags are not discarded, just flagged for reviewers

**Atom types:**
- `target_state` — what good looks like
- `action` — a specific thing to do
- `warning_sign` — a red flag
- `evolution` — how this changes at the next phase
- `tool_resource` — a tool, template, or resource
- `why` — the reasoning behind another claim

---

## Proposing a draft entry

1. Create `entries/{process}/{phase}/`
2. Write `draft.md` — use the 5-section structure (see `schema.md`)
3. Add `<!-- claim-id: c-NNN -->` before each distinct claim
4. Write `trail.md` — map each claim to its supporting atoms
5. Create `approval.md` with `Status: pending` for each claim (copy from schema.md template)
6. Open a pull request with all four file types

---

## Reviewing claims (approval tool)

1. Run `python3 wiki-pipeline/server.py`
2. Open http://localhost:8765
3. Select an entry from the dropdown
4. For each claim:
   - Read the claim text
   - Check the supporting atoms and their source metadata
   - Make a decision using the action buttons (or keyboard shortcuts 1-9)
   - Add notes if useful
   - Click "Save decision" (or press Enter)
5. The tool auto-advances to the next pending claim

**Keyboard shortcuts:**
| Key | Action |
|---|---|
| `1` | Approve |
| `2` | Approve with edit |
| `3` | Too generic |
| `4` | Conditional |
| `5` | Vendor biased |
| `6` | Geographically biased |
| `7` | Needs practitioner check |
| `8` | Missing why |
| `9` | Reject (wrong) |
| `J` | Next claim |
| `K` | Previous claim |
| `Enter` | Save & advance |

---

## Schema reference

See `schema.md` for the full specification of all file formats, field values, and conventions.

---

## Directory structure

```
wiki-pipeline/
├── README.md           ← this file
├── schema.md           ← full format specification
├── server.py           ← approval tool server (Python 3, stdlib only)
├── approval-tool.html  ← approval tool UI (single file, no frameworks)
├── sources/            ← one .md per source
│   ├── src-001.md
│   └── ...
├── atoms/              ← one .md per extracted claim
│   ├── atom-001.md
│   └── ...
└── entries/
    └── financial-ops/
        └── early-scale/
            ├── draft.md
            ├── trail.md
            └── approval.md
```
