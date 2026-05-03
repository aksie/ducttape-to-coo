# Wiki Pipeline Schema

This document defines the file formats and conventions for the wiki content pipeline. It is the reference for contributors adding new entries, and for anyone extending the pipeline to new processes or phases.

---

## Overview

The pipeline has four layers:

```
sources/          ← raw source files (one per article/interview/post)
atoms/            ← extracted claims from sources (one per insight)
entries/{process}/{phase}/
  draft.md        ← synthesized wiki entry with embedded claim markers
  trail.md        ← claim → atom mapping (editorial audit trail)
  approval.md     ← per-claim review decisions
```

A **source** is a URL with metadata about its type and bias signals.
An **atom** is a single extracted insight from a source — the smallest meaningful unit of content.
An **entry draft** synthesizes multiple atoms into a readable wiki page, with each claim marked for review.
The **trail** records which atoms support each claim and why editorial decisions were made.
The **approval** file records the review outcome for each claim.

---

## Source files

**Location:** `wiki-pipeline/sources/src-NNN.md`

**Frontmatter fields:**

| Field | Type | Required | Notes |
|---|---|---|---|
| `id` | string | yes | `src-NNN` format, sequential |
| `url` | string | yes | Full URL of the source |
| `title` | string | yes | Title of the article/post/episode |
| `publication` | string | yes | Slug of the publication or site |
| `type` | enum | yes | See type values below |
| `author` | string | no | Author name if known, empty string if not |
| `date_accessed` | date | yes | ISO 8601: `YYYY-MM-DD` |
| `geographic_focus` | enum | yes | `us`, `eu`, `nl`, `global`, `unknown` |
| `bias_signals` | list | no | See bias signal values below |
| `reviewed_by` | string | yes | GitHub username of reviewer |
| `review_date` | date | yes | ISO 8601 |

**Type values:**
- `advisory_firm` — consulting firm, fractional service provider
- `practitioner_blog` — written by someone reflecting on their own operational experience
- `vc_firm` — venture capital firm publishing advice
- `accounting_firm` — accounting or finance services firm
- `news` — journalism, not opinion
- `podcast_transcript` — transcript of a podcast episode
- `interview` — structured interview with a practitioner
- `reddit` — Reddit thread
- `hn` — Hacker News thread
- `other`

**Bias signal values:**
- `sells_fractional_cfo_services` — source sells the service they're recommending
- `sells_software` — source sells software mentioned in the content
- `vc_portfolio_interest` — VC firm with portfolio companies in the space
- `accounting_firm_interest` — accounting firm recommending accounting services
- `us_centric` — advice assumes US legal/tax context without stating it
- `eu_centric` — advice assumes EU context without stating it
- `series_a_plus_bias` — advice implicitly assumes venture-backed context

**Body sections:**

```markdown
## Summary
2-3 sentence neutral summary of what the source covers and its main argument.

## Notable claims
- Bulleted list of the source's main claims, in the source's own framing.
- Do not editorialize here — capture what the source says, not whether it's right.
```

**Example:**

```markdown
---
id: src-001
url: https://getexact.com/startup-cfo/
title: "CFO for Startups: When to Hire and What to Budget"
publication: getexact
type: advisory_firm
author: ""
date_accessed: 2026-05-03
geographic_focus: us
bias_signals:
  - sells_fractional_cfo_services
  - accounting_firm_interest
reviewed_by: aksie
review_date: 2026-05-03
---

## Summary
Getexact argues that most startups wait too long to hire financial leadership,
and outlines when a fractional CFO makes sense vs. a full-time hire.

## Notable claims
- A fractional CFO becomes valuable around $1M ARR or pre-Series A
- Full-time CFO hire typically justified at Series B or $10M+ ARR
- Cash flow modelling should be in place before fundraising begins
```

---

## Atom files

**Location:** `wiki-pipeline/atoms/atom-NNN.md`

**Frontmatter fields:**

| Field | Type | Required | Notes |
|---|---|---|---|
| `id` | string | yes | `atom-NNN` format, sequential |
| `source_id` | string | yes | Reference to `src-NNN` |
| `type` | enum | yes | See type values below |
| `process` | string | yes | Process category slug: `strategic_ops`, `financial_ops`, `people_ops`, `legal_ops`, `revenue_ops` |
| `phase` | string | yes | Phase slug: `foundation`, `first_hires`, `early_scale`, `growth`, `scaled` |
| `sub_variant_signals` | list | no | Dimensions this atom is sensitive to: `funding_stage`, `revenue_stage`, `headcount` |
| `confidence` | enum | yes | `high`, `medium`, `low` — how strongly the source asserts this |
| `practitioner_first_person` | bool | yes | `true` if the author is reflecting on their own direct experience |
| `bias_flags` | list | no | Concerns about this specific atom (subset of source bias_signals, or atom-specific) |
| `extracted_by` | string | yes | GitHub username |
| `extracted_date` | date | yes | ISO 8601 |

**Type values:**
- `target_state` — describes what good looks like
- `action` — a specific thing to do
- `warning_sign` — a red flag that things are behind
- `evolution` — describes how this changes at the next phase
- `tool_resource` — names a tool, template, or resource
- `why` — explains the reasoning behind a claim

**Body sections:**

```markdown
## Claim
1-2 sentence atom — the actual extracted insight, written in second person ("you").

## Source quote or paraphrase
The underlying material from the source. Paraphrase rather than verbatim quote
to avoid copyright issues, but stay close to the original meaning.

## Why (if explicit in source)
The reasoning the source gives for the claim. Leave blank if the source
asserts without explaining.
```

**Example:**

```markdown
---
id: atom-001
source_id: src-001
type: target_state
process: financial_ops
phase: early_scale
sub_variant_signals:
  - funding_stage
confidence: high
practitioner_first_person: false
bias_flags:
  - sells_fractional_cfo_services
extracted_by: aksie
extracted_date: 2026-05-03
---

## Claim
At early scale, you should have a rolling 12-month cash forecast that is
reviewed monthly and updated when material assumptions change.

## Source quote or paraphrase
Getexact argues that by the time a startup is generating meaningful revenue,
a static spreadsheet is no longer sufficient — you need a live model that
updates as actuals come in and surfaces variance against forecast.

## Why (if explicit in source)
Surprises in cash position at this stage are often fatal. A rolling forecast
gives you enough lead time to act on a problem before it becomes a crisis.
```

---

## Entry draft

**Location:** `wiki-pipeline/entries/{process}/{phase}/draft.md`

**Frontmatter fields:**

| Field | Type | Notes |
|---|---|---|
| `process` | string | Process category slug |
| `phase` | string | Phase slug |
| `last_updated` | date | ISO 8601 |
| `claim_count` | int | Total number of reviewable claims in this draft |

**Structure:**

The body follows the standard 5-section wiki format. Each discrete claim is marked with a hidden HTML comment immediately before it:

```markdown
<!-- claim-id: c-001 -->
Your cash forecast should be a rolling 12-month model reviewed monthly.
```

The claim marker applies to the sentence or bullet point immediately following it. In a numbered or bulleted list, each item that contains a distinct claim should have its own marker on the line above.

**Section headers (exact):**
1. `## What good looks like at this phase`
2. `## What you actually need to do`
3. `## Warning signs you're behind`
4. `## How this evolves next`
5. `## Tools & resources`

---

## Trail file

**Location:** `wiki-pipeline/entries/{process}/{phase}/trail.md`

Records the editorial decisions made when synthesizing atoms into the draft. This is the audit trail — it lets a reviewer understand why each claim was written the way it was.

**Frontmatter fields:**

| Field | Type | Notes |
|---|---|---|
| `entry` | string | `{process}/{phase}` |
| `last_updated` | date | ISO 8601 |

**Per-claim structure:**

```markdown
### c-001: [the claim text, verbatim from draft.md]
- Section: what_good_looks_like
- Supporting atoms: atom-001, atom-005, atom-012
- Rejected atoms (and why): atom-007 (vendor_biased — only source making this claim)
- Why-source: atom-005 (contained explicit reasoning, incorporated into draft)
- Synthesis notes: Three sources converged on this. Softened language from "must" to "should" to reflect that bootstrapped companies can defer.
```

**Section slug values** (for `Section:` field):
- `what_good_looks_like`
- `what_to_do`
- `warning_signs`
- `evolution`
- `tools_resources`

---

## Approval file

**Location:** `wiki-pipeline/entries/{process}/{phase}/approval.md`

Records the review decision for each claim. Written by the approval tool; can also be edited by hand.

**Frontmatter fields:**

| Field | Type | Notes |
|---|---|---|
| `entry` | string | `{process}/{phase}` |
| `last_updated` | date | ISO 8601 |

**Per-claim structure:**

```markdown
### c-001
- Status: pending
- Rejection reason: null
- Reviewer notes: ""
- Reviewed by: ""
- Reviewed date: null
- Edited claim text: null
```

**Status values:**
- `pending` — not yet reviewed
- `approved` — claim accepted as-is
- `approved_with_edit` — claim accepted with modified text (see `Edited claim text`)
- `rejected` — claim not accepted (see `Rejection reason`)

**Rejection reason values:**
- `null` — not rejected
- `too_generic` — claim is true but not specific enough to be useful
- `conditional` — claim is only true for a subset of companies; needs qualification
- `vendor_biased` — only vendor sources support this claim
- `geographically_biased` — claim assumes a specific legal or market context not stated
- `needs_practitioner_check` — no practitioner source; needs validation from someone with direct experience
- `missing_why` — claim may be true but the draft doesn't explain why; needs reasoning added
- `wrong` — claim is factually incorrect or contradicted by stronger sources

---

## File naming conventions

| File | Convention | Example |
|---|---|---|
| Source | `src-NNN.md` (zero-padded to 3 digits) | `src-001.md` |
| Atom | `atom-NNN.md` (zero-padded to 3 digits) | `atom-001.md` |
| Entry dir | `{process-slug}/{phase-slug}/` | `financial-ops/early-scale/` |
| Draft | always `draft.md` | `financial-ops/early-scale/draft.md` |
| Trail | always `trail.md` | `financial-ops/early-scale/trail.md` |
| Approval | always `approval.md` | `financial-ops/early-scale/approval.md` |

**Process slugs:** `strategic-ops`, `financial-ops`, `people-ops`, `legal-ops`, `revenue-ops`

**Phase slugs:** `foundation`, `first-hires`, `early-scale`, `growth`, `scaled`

---

## Adding a new entry: step by step

1. **Find sources.** Collect 5-10 URLs covering the process + phase. Create one `src-NNN.md` per source.
2. **Extract atoms.** Read each source and extract individual insights as `atom-NNN.md` files. Aim for one atom per distinct claim, not one per paragraph.
3. **Synthesize a draft.** Write `draft.md` using the 5-section structure. Add `<!-- claim-id: c-NNN -->` before each distinct claim.
4. **Write the trail.** For each claim in the draft, document which atoms support it in `trail.md`.
5. **Create the approval file.** Copy the approval template for each claim ID into `approval.md` with `Status: pending`.
6. **Run the approval tool.** `python3 wiki-pipeline/server.py` → open `localhost:8765`, review each claim.
7. **Open a pull request.** Include sources, atoms, draft, trail, and approval files. Reviewers can re-open any claim in the tool.

---

## Extending to a new process or phase

The schema is process/phase-agnostic. To add a new entry:
- Create `wiki-pipeline/entries/{process-slug}/{phase-slug}/`
- Follow steps 1-7 above
- The approval tool picks up all entries automatically from the directory structure
- No configuration files need updating
