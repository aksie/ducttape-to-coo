# Practitioner Experience → Pipeline (Reverse Workflow)

Use this when you have direct practitioner knowledge and want to create a wiki page, then backfill the pipeline so every page is fully traceable.

## Overview

```
Practitioner Experience
        ↓
[1] Write wiki page directly
        ↓
[2] Create human source (src-NNN)
        ↓
[3] Create atoms (atom-NNN) — one per claim
        ↓
[4] Create entry files (draft + trail + approval)
        ↓
Published page with full pipeline traceability
```

## Step 1: Write the wiki page

Create `wiki/processes/{category}/{process}--{phase}.md` following the standard 5-section format:

```markdown
# {Process Name} at {Phase}

*Last edited: {YYYY-MM-DD HH:MM:SS +0200}*

## What good looks like at this phase
- **Bold claim** — explanation of what target state looks like
- ...

## What you actually need to do
- **Bold claim** — explanation of the action
- ...

## Warning signs you're behind
### Output quality
- **Bold claim** — explanation
### Founder time
- **Bold claim** — explanation
### Process entry
- **Bold claim** — explanation

## How this evolves next
- **Bold claim** — explanation

## Tools & resources
- **Bold claim** — explanation
```

**Rules:**
- Max 7 bullets per section
- Each bullet: bold claim + 2–4 line indented explanation
- Add `last_edited` timestamp

## Step 2: Create a human source

Create `wiki-pipeline/sources/src-NNN.md` (use next available src number):

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

{Write a short narrative of your experience — what worked, what didn't,
key insights. This is the raw source material that atoms will be extracted from.}
```

## Step 3: Create atoms

For each claim in the wiki page, create an atom in `wiki-pipeline/atoms/atom-NNN.md` (use next available atom number):

```markdown
---
atom_id: atom-NNN
source_id: src-NNN
claim_type: {target_state|action|warning_sign|evolution|tool_resource}
warning_category: {output_quality|founder_time|process_entry}  # only for warning_sign
extracted_by: human:stefan
weight: 1.2  # human insights get elevated weight
date: {YYYY-MM-DD}
---

**{Bold claim}**

{2–4 line explanation, same as in the wiki page}
```

**One atom per claim.** The `claim_type` maps to the wiki section:
- `## What good looks like` → `target_state`
- `## What you actually need to do` → `action`
- `## Warning signs` → `warning_sign`
- `## How this evolves next` → `evolution`
- `## Tools & resources` → `tool_resource`

## Step 4: Create entry files

Create directory `wiki-pipeline/entries/{process}/{phase}/` and add three files:

### 4a. `draft.md`

Copy the wiki page content, but add `<!-- claim-id: c-NNN -->` markers above each bullet and `<!-- sources: src-NNN -->` at the end of each bullet:

```markdown
<!-- claim-id: c-001 -->
- **Bold claim** — explanation
  <!-- sources: src-NNN -->
```

Number claims sequentially: `c-001`, `c-002`, etc.

### 4b. `trail.md`

Audit trail — each claim mapped to its supporting atom(s):

```markdown
# Audit Trail

## c-001 — {Bold claim summary}
- atom-NNN: {explanation of how atom supports this claim}

## c-002 — ...
...
```

### 4c. `approval.md`

Since this is practitioner-sourced, pre-approve all claims:

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
...
```

## Step 5: Verify

1. Check the page renders in `wiki.html` (run `python3 -m http.server 8000`)
2. Check the entry shows up in the approval tool (run `cd wiki-pipeline && python3 server.py`)
3. Confirm all claims in `draft.md` have matching `trail.md` and `approval.md` entries

## Source numbering

Check `wiki-pipeline/sources/` for the next available `src-NNN` number.
Check `wiki-pipeline/atoms/` for the next available `atom-NNN` number.
