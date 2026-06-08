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

## Contributing practitioner experience

If you've built or managed a process at a startup, your direct experience is the most valuable kind of input — better than most published sources.

**No GitHub or technical knowledge needed.** See [`contributions/HOW-TO-CONTRIBUTE.md`](contributions/HOW-TO-CONTRIBUTE.md) for plain-English options including email/DM.

**For a full experience contribution** (everything you know about a process at a given stage):
- Open a [Practitioner experience](../../issues/new?template=practitioner-experience.md) GitHub issue, or
- Fill in [`contributions/_template.md`](contributions/_template.md) and send the file to a maintainer

A maintainer runs [`prompts/phase-1b-practitioner-extraction.md`](prompts/phase-1b-practitioner-extraction.md) to convert your text into source + atom files. You don't touch the pipeline at all.

**For a single insight** (one thing you know):
Use the [Contribute an operational insight](../../issues/new?template=atom-contribution.md) issue template.

Human-contributed atoms are weighted more heavily than LLM-extracted atoms during synthesis. The `why` section — the mechanism and reasoning behind a claim — is the most valuable part.

---

## Extracting atoms from sources (LLM or manual)

1. Read the source carefully (or use an LLM extraction prompt — see below)
2. For each distinct claim worth extracting, create `atoms/atom-NNN.md`
3. One atom = one insight. Don't combine multiple claims into one atom
4. Fill in `type`, `process`, `phase`, `confidence`, and `practitioner_first_person` accurately
5. Set `extracted_by: "llm:model-slug"` if an LLM did the extraction, `"human:username"` if you did
6. Flag `bias_flags` honestly — atoms with bias flags are not discarded, just flagged for reviewers

**Atom types:**
- `target_state` — what good looks like
- `action` — a specific thing to do
- `warning_sign` — a red flag
- `evolution` — how this changes at the next phase
- `tool_resource` — a tool, template, or resource
- `why` — the reasoning behind another claim

**Phase 1: Source discovery and atom extraction**

The discovery and extraction prompt lives in [`prompts/phase-1-discovery-and-extraction.md`](prompts/phase-1-discovery-and-extraction.md). Run it with an LLM that has web access (e.g. Claude via claude.ai), once per process × phase cell. It covers source discovery, corpus bias checking, and atom extraction in a single pass.

**Phase 2: Synthesis to Reviewable Proposals**

The Phase 2 prompt lives in [`prompts/phase-2-synthesis-to-reviewable-proposals.md`](prompts/phase-2-synthesis-to-reviewable-proposals.md). Run it with the atoms for a given process × phase cell to produce **`draft.md` + `trail.md`** — the only outputs the approval tool reads. When supplementing an already-approved entry, append new claims (addendum mode); `candidate-claims.md` is an optional audit record, not a substitute for `draft.md`.

**Phase 3: Human review**

See [`prompts/phase-3-human-review.md`](prompts/phase-3-human-review.md) for a full guide on using the approval tool. In short: run `python3 wiki-pipeline/server.py`, open http://localhost:8765, and work through each claim.

**Phase 4: Publish**

The publish prompt lives in [`prompts/phase-4-publish.md`](prompts/phase-4-publish.md). Run it after the approval tool has been used to review every claim. It reads the draft, approvals, trail, atoms, and sources to produce the final wiki page.


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
| `1` | Set status: Approve |
| `2` | Set status: Approve with edit |
| `9` | Set status: Reject |
| `3` | Toggle flag: Too generic |
| `4` | Toggle flag: Conditional |
| `5` | Toggle flag: Vendor biased |
| `6` | Toggle flag: Geographically biased |
| `7` | Toggle flag: Needs practitioner check |
| `8` | Toggle flag: Missing why |
| `J` | Next claim |
| `K` | Previous claim |
| `Enter` | Save & advance |

Status and flags are independent — you can approve a claim and flag it as vendor-biased at the same time.

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
├── prompts/            ← LLM and human prompts for each pipeline phase
│   ├── phase-1-discovery-and-extraction.md
│   ├── phase-1b-practitioner-extraction.md
│   ├── phase-2-synthesis-to-reviewable-proposals.md
│   ├── phase-3-human-review.md
│   └── phase-4-publish.md
├── contributions/      ← raw practitioner knowledge drops (pre-pipeline)
│   ├── HOW-TO-CONTRIBUTE.md  ← plain-English guide for non-GitHub contributors
│   └── _template.md          ← fillable template
├── sources/            ← one .md per source
│   ├── src-001.md
│   └── ...
├── atoms/              ← one .md per extracted claim
│   ├── _human-template.md  ← template for human-contributed atoms
│   ├── atom-001.md
│   └── ...
└── entries/
    └── financial-ops/
        └── early-scale/
            ├── draft.md
            ├── trail.md
            └── approval.md
```
