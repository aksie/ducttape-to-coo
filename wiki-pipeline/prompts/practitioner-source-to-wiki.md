# Practitioner Source → Wiki Page (Forward Workflow)

Use this when you want to contribute operational experience using the standard 
pipeline flow: write a source → extract atoms → synthesize wiki page.

## Overview

```
[1] Write practitioner source (src-NNN)
    with all 4 wiki sections
        ↓
[2] Extract atoms (atom-NNN+) from the source
        ↓
[3] Synthesize draft.md + trail.md (Phase 2)
        ↓
[4] Review & approve claims (Phase 2½)
        ↓
[5] Publish to wiki/processes/ (Phase 3)
```

## Step 1: Write the practitioner source

Create `wiki-pipeline/sources/src-NNN.md` (check `sources/` for next number):

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

## What good looks like at this phase
{Write 3-7 bullets of what target state looks like.
Each bullet: bold claim + 2-4 line explanation.}

## What you actually need to do
{Write 3-7 actionable bullets.
Each bullet: bold claim + 2-4 line explanation.}

## Warning signs you're behind
### Output quality
{2-4 bullets — process output is wrong or risky}

### Founder time
{2-4 bullets — bottleneck person spending time on wrong things}

### Process entry
{2-4 bullets — people don't know how to participate}

## How this evolves next
{Write 2-4 bullets of how this changes at the next phase.
Each bullet: bold claim + 2-4 line explanation.}

## Tools & resources (optional)
{Any tools, templates, or resources you've used.}
```

**Rules:**
- Max 7 bullets per section (pipeline convention)
- Each bullet: **bold claim** + 2–4 line explanation
- Write in first person if describing your experience, or neutral third person for "what good looks like"

## Step 2: Extract atoms from the source

For **each bold claim** in the source, create an atom in 
`wiki-pipeline/atoms/atom-NNN.md` (check `atoms/` for next number):

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

{2–4 line explanation, same as in the source}
```

**Claim type mapping:**
- `## What good looks like` → `target_state`
- `## What you actually need to do` → `action`
- `## Warning signs` → `warning_sign`
- `## How this evolves next` → `evolution`
- `## Tools & resources` → `tool_resource`

**One atom per claim.** The `weight: 1.2` gives human insights elevated priority during synthesis.

## Step 3: Synthesize draft.md + trail.md (Phase 2)

Create `wiki-pipeline/entries/{process}/{phase}/` (use process slugs: 
`strategic-ops`, `financial-ops`, `people-ops`, `legal-ops`, `revenue-ops`).

### 3a. `draft.md`

Combine atoms into the 5-section wiki format. Add `<!-- claim-id: c-NNN -->` 
before each claim and `<!-- sources: src-NNN -->` after each bullet:

```markdown
# {Process Name} at {Phase}

*Last edited: {YYYY-MM-DD HH:MM:SS +0200}*

## What good looks like at this phase

<!-- claim-id: c-001 -->
- **{Bold claim}** — explanation
  <!-- sources: src-NNN -->

## What you actually need to do

<!-- claim-id: c-002 -->
- **{Bold claim}** — explanation
  <!-- sources: src-NNN -->

## Warning signs you're behind

### Output quality
<!-- claim-id: c-003 -->
- **{Bold claim}** — explanation
  <!-- sources: src-NNN -->

### Founder time
...

### Process entry
...

## How this evolves next

<!-- claim-id: c-NNN -->
- **{Bold claim}** — explanation
  <!-- sources: src-NNN -->

## Tools & resources

<!-- claim-id: c-NNN -->
- **{Bold claim}** — explanation
  <!-- sources: src-NNN -->
```

### 3b. `trail.md`

Audit trail — each claim mapped to its supporting atom(s):

```markdown
# Audit Trail

## c-001 — {Bold claim summary}
- atom-NNN: {how this atom supports the claim}

## c-002 — ...
```

## Step 4: Approve claims

1. Run `cd wiki-pipeline && python3 server.py`
2. Open http://localhost:8765
3. Select the entry from the dropdown
4. Review each claim (all should be pre-approved since human-sourced)
5. Save decisions

Alternatively, create `approval.md` directly:

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
```

## Step 5: Publish to wiki (Phase 3)

Copy `draft.md` to `wiki/processes/{category}/{process}--{phase}.md`:
- Remove `<!-- claim-id: c-NNN -->` markers
- Keep `<!-- sources: src-NNN -->` comments
- Ensure `last_edited` timestamp is set

Or use the Phase 3 publish prompt: `wiki-pipeline/prompts/phase-3-publish.md`

## Step 6: Verify

1. Run `python3 -m http.server 8000` → check page renders in `wiki.html`
2. Confirm entry appears in approval tool at `:8765`
3. Confirm all claims in `draft.md` have matching `trail.md` and `approval.md` entries

## Reference

- Full schema: `wiki-pipeline/schema.md`
- Phase 2 synthesis: `wiki-pipeline/prompts/phase-2-synthesis.md`
- Phase 3 publish: `wiki-pipeline/prompts/phase-3-publish.md`
- Process/phase slugs: see `AGENTS.md` → Pipeline conventions
