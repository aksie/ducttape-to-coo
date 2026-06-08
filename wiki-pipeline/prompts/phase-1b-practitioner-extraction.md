# Phase 1b: Practitioner Extraction Prompt

This prompt processes a raw practitioner contribution from `wiki-pipeline/contributions/` into pipeline-ready source and atom files. It is a variant of Phase 1 for human knowledge rather than web sources.

**When to use:** a contributor has submitted a text file (via issue, PR, or message) containing their direct operational experience. You have converted it to a file in `wiki-pipeline/contributions/`. Run this prompt to turn it into atoms that feed Phase 2.

**Before starting:** read the contribution file fully. Note the contributor name, process, and stage from the frontmatter (or infer from the content if missing).

---

## The prompt

Read the contribution file at `wiki-pipeline/contributions/{filename}`.

### Step 1: Create the source file

Write `wiki-pipeline/sources/src-NNN.md` (check `sources/` for next available number):

```yaml
---
id: src-NNN
title: "{Process} at {Stage} — Practitioner experience ({contributor name})"
source_type: human_experience
url: ""
author: "{contributor name}"
date: {date from frontmatter, or today's date}
tags: [{process-slug}, {stage-slug}]
bias_signals: []
summary: "{1-2 sentence summary of what this contribution covers}"
---

## Summary

{2-4 sentence summary of the contributor's experience and what makes it valuable.
Note the company context if provided: size, industry, funding type.}

## Notable claims

{Bullet list of the 5-10 strongest claims in the contribution, before full atom extraction.}
```

### Step 2: Extract atoms

For every distinct operational claim in the contribution, create one atom file in `wiki-pipeline/atoms/atom-NNN.md` (continue from the highest existing atom number).

Use the standard atom frontmatter:

```yaml
---
id: atom-NNN
source_id: src-NNN
type: {target_state | action | warning_sign | evolution | tool_resource | why}
warning_category: {output_quality | founder_time | process_entry}  # only when type: warning_sign
process: {process-slug}
phase: {phase-slug}
sub_variant_signals: []
confidence: {high | medium | low}
practitioner_first_person: true
bias_flags: []
why_quality: {high | medium | low | absent}
extracted_by: "human:{contributor-name}"
extracted_date: {YYYY-MM-DD}
unverified: false
---

## Claim

{1-2 sentences, second person ("at this stage, you should...", "watch for...")}

## Source quote or paraphrase

{paraphrase the contributor's words — do NOT verbatim quote more than 15 words}

## Why (inferred or stated)

{the reasoning — what breaks without this, what mechanism makes it work}
```

### Extraction rules

- **Set `practitioner_first_person: true`** for all atoms from human contributions.
- **Set `confidence: high`** for claims the contributor describes from direct experience. Use `medium` for things they've observed at other companies, `low` for things they're uncertain about.
- **Set `extracted_by: "human:{contributor-name}"`** — this gives the atoms elevated weight (1.2×) in synthesis.
- **Set `why_quality: high`** when the contributor explains the mechanism or consequence, even if informal. Practitioner "why" is usually high quality.
- **Map the contribution sections to atom types:**
  - "What does good look like" → `target_state`
  - "What should you actually do" → `action`
  - "What breaks or goes wrong" → `warning_sign`
  - "How does this change as you grow" → `evolution`
  - "Tools and resources" → `tool_resource`
- **Don't combine claims.** One atom per distinct claim, even if the contributor wrote them together.
- **Warning signs are especially valuable** — extract these carefully and assign a `warning_category`.
- **If the contribution is unstructured** (free text, not following the template), read through it and identify claims by meaning, not by where they appear in the text.

### Step 3: Corpus health note

After extraction, append a note to the contribution file (or produce a short summary) noting:
- How many atoms were extracted
- Which sections had strong coverage and which were sparse
- Whether the contributor's context (company size, geography, funding type) limits generalisability

This feeds into the corpus_health.md if this cell's entry is later assembled from multiple sources.

### Output

1. `wiki-pipeline/sources/src-NNN.md` — one source file
2. `wiki-pipeline/atoms/atom-NNN.md` to `atom-MMM.md` — one file per extracted claim

These feed directly into Phase 2 (synthesis to reviewable proposals), alongside any atoms extracted via Phase 1 from web sources.

---

## Notes on quality

Practitioner contributions typically have:
- **High why-quality** — contributors explain the mechanism from experience, not theory
- **Strong warning sign coverage** — people remember what broke better than what worked
- **Geographic and context specificity** — note any NL-specific, VC-specific, or bootstrapped-specific claims in `sub_variant_signals`
- **No bias signals** — unlike vendor content, practitioners don't have a product to sell

If a contributor was uncertain about something or flagged a caveat, note it in `unverified: true` on that specific atom — don't suppress the claim, just flag it.
