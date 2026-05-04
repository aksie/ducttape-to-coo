---
process_id: ""          # e.g. "2.1"
process_name: ""        # e.g. "Cash Flow Management"
stage: ""               # foundation | first-hires | early-revenue | growth | scaled
stage_label: ""         # e.g. "First Hires"
priority: ""            # critical | recommended | future
category: ""            # strategic | financial | people | legal | revenue
primary_axis: ""        # headcount | revenue_stage | funding_stage
sensitivity: ""         # none | headcount | revenue_stage | funding_stage
conditions: []          # e.g. ["has_customers"] — leave empty if always shown
last_updated: ""        # YYYY-MM-DD
---

# [Process Name] — [Stage Label]

> One sentence: what this process is and why it matters specifically at this stage.

## What good looks like at this stage

<!-- Max 7 bullets. Each bullet: short bold claim + explanation on a new line (2-4 lines). -->
<!-- After each bullet, add a source comment. -->

- **[Short claim sentence.]**
  [Why this matters / what it means in practice — 2-4 lines.]
  <!-- sources: src-NNN (publication) -->

## What you actually need to do

<!-- Max 7 bullets. Each bullet: short bold action + explanation on a new line (2-4 lines). -->
<!-- Not aspirational. Specific and literal. -->
<!-- Bad: "Establish a communication cadence" -->
<!-- Good: "Hold a 30-min weekly team sync every Monday." -->

- **[Short action sentence.]**
  [Why, how, or what specifically — 2-4 lines.]
  <!-- sources: src-NNN (publication) -->

## Warning signs you're behind

<!-- Max 7 bullets total across the three categories. -->
<!-- Each warning sign belongs to one of three categories: -->

### Output quality
<!-- The output of the process is wrong or risky (e.g., tax issues, incorrect reports). -->

- **[Short warning sentence.]**
  [Consequence or mechanism — 2-4 lines.]
  <!-- sources: src-NNN (publication) -->

### Founder / key-person time
<!-- A bottleneck person is spending time on the wrong things. -->

- **[Short warning sentence.]**
  [What they're doing instead, and why it's costly — 2-4 lines.]
  <!-- sources: src-NNN (publication) -->

### Process entry
<!-- People don't know how to start, submit, or participate in the process. -->

- **[Short warning sentence.]**
  [What's confusing and what breaks as a result — 2-4 lines.]
  <!-- sources: src-NNN (publication) -->

## How this evolves next

<!-- 1–2 sentences on what changes at the next stage. Keeps the page self-contained. -->
<!-- Don't repeat the next stage's full guidance — just hint at the direction. -->
<!-- sources: src-NNN (publication) -->

---

<!-- VARIANTS: Only include the section below if sensitivity != "none" for this process. -->
<!-- Delete entirely if sensitivity == "none". -->

## Context variants

<!-- Use labeled subsections for the dimension this process is sensitive to. -->
<!-- Only include variants where the advice meaningfully differs. -->

### If [variant condition A]

<!-- e.g. "If you're bootstrapped" / "If you have enterprise customers" -->

### If [variant condition B]

---

## Tools & resources

<!-- Optional. Lightweight. Tool names, template links, further reading. -->
<!-- Leave this section out entirely if you have nothing concrete to add. -->

---

## Sources

<!-- List all sources referenced in the inline comments above. -->
<!-- Format: - [Title](URL) · [pipeline record](../../../wiki-pipeline/sources/src-NNN.md) · type · bias signals -->
<!-- For hand-written pages without pipeline sources, list any URLs you drew from. -->
<!-- Leave this section empty if there are no external sources. -->

---

<!-- CONTRIBUTOR NOTES (delete before publishing) -->
<!--
Filename convention: [process-id]--[stage].md
Example: 2.1--first-hires.md

The frontmatter is the agent's contract — fill it in accurately.
The sections are prompts — write in plain language, not consultant-speak.
Variants section: only include if sensitivity != "none". Check processes.json.
Target length: 300–500 words total. If you're going longer, split into variants.

Source comments format (after each claim):
  <!-- sources: src-NNN (publication, bias_if_any) | flags: flag1, flag2 -->
For human-written claims: <!-- sources: human:username | flags: unverified -->
Flags to use: vendor_biased, too_generic, conditional, geographically_biased,
              needs_practitioner_check, missing_why, unverified
-->
