# Wiki Page → Pipeline Backfill

Use this when you've already edited or created a wiki page in `wiki/processes/` 
and need to backfill the pipeline (source → atoms → entry files) so the page 
is fully traceable.

## Overview

```
Wiki page already edited
        ↓
[1] Create human source (src-NNN) reflecting your experience
        ↓
[2] Create atoms (atom-NNN+) — one per claim in the page
        ↓
[3] Create entry files (draft + trail + approval)
        ↓
Page fully integrated into pipeline
```

## Prerequisites

- Wiki page exists at `wiki/processes/{category}/{process}--{phase}.md`
- Page follows the 5-section format (see `schema.md` for spec)
- You have the `last_edited` timestamp for the page

## Step 1: Create human source

Create `wiki-pipeline/sources/src-NNN.md` (check `sources/` for next available number):

```markdown
---
source_id: src-NNN
title: "{Process} at {Phase} — Practitioner Experience"
source_type: human_experience
author: stefan
date: {YYYY-MM-DD}
url: ""
tags: [{process}, {phase}, practitioner]
---

# {Process} at {Phase} — Practitioner Experience

{Write the experience/narrative that led to the wiki page content.
What did you learn? What worked? What didn't? This is the raw source
material that atoms will be extracted from.}
```

## Step 2: Create atoms

For **each claim** (bold bullet) in the wiki page, create an atom in 
`wiki-pipeline/atoms/atom-NNN.md` (check `atoms/` for next available number):

```markdown
---
atom_id: atom-NNN
source_id: src-NNN
claim_type: {target_state|action|warning_sign|evolution|tool_resource}
warning_category: {output_quality|founder_time|process_entry}  # only for warning_sign
extracted_by: human:stefan
weight: 1.2
date: {YYYY-MM-DD}
---

**{Bold claim}**

{2–4 line explanation, same as in the wiki page}
```

**Claim type mapping** (based on wiki section):
- `## What good looks like` → `target_state`
- `## What you actually need to do` → `action`
- `## Warning signs` → `warning_sign`
- `## How this evolves next` → `evolution`
- `## Tools & resources` → `tool_resource`

## Step 3: Create entry files

Create `wiki-pipeline/entries/{process}/{phase}/` (use process slugs: 
`strategic-ops`, `financial-ops`, `people-ops`, `legal-ops`, `revenue-ops`).

### 3a. `draft.md`

Copy the wiki page content, add `<!-- claim-id: c-NNN -->` above each 
claim and `<!-- sources: src-NNN -->` after each bullet:

```markdown
<!-- claim-id: c-001 -->
- **Bold claim** — explanation
  <!-- sources: src-NNN -->
```

Number claims sequentially per entry: `c-001`, `c-002`, etc.

### 3b. `trail.md`

Map each claim to its supporting atom(s):

```markdown
# Audit Trail

## c-001 — {Bold claim summary}
- atom-NNN: {how this atom supports the claim}

## c-002 — ...
```

### 3c. `approval.md`

Pre-approve all claims (practitioner-sourced, trusted):

```markdown
---
entry: {process}/{phase}
last_updated: {YYYY-MM-DD HH:MM:SS +0200}
---

# Approval — {Process} at {Phase}

## c-001 — {Bold claim summary}
- status: approved
- flags: []
- reviewer_notes: "Practitioner experience — pre-approved"

## c-002 — ...
```

## Step 4: Verify

1. Run `python3 -m http.server 8000` → check page renders in `wiki.html`
2. Run `cd wiki-pipeline && python3 server.py` → check entry appears at `:8765`
3. Confirm each `draft.md` claim has matching `trail.md` and `approval.md` entries
4. Confirm `last_edited` timestamp in wiki page matches `approval.md` `last_updated`

## Reference

- Full schema: `wiki-pipeline/schema.md`
- Detailed format examples: `wiki-pipeline/prompts/practitioner-to-pipeline.md`
- Process/phase slugs: see `AGENTS.md` → Pipeline conventions
