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

<!-- 3–5 sentences. Concrete and specific to this stage. Not generic best practice. -->
<!-- Source: stageFocus field in processes.json for this process + stage. -->

## What you actually need to do

<!-- Numbered list of 3–6 specific, literal actions. Not aspirational. -->
<!-- Bad: "Establish a communication cadence" -->
<!-- Good: "Hold a 30-min weekly team sync every Monday. Share: what I did, what I'm doing, blockers." -->

1.
2.
3.

## Warning signs you're behind

<!-- 2–4 red flags that tell you this process is broken or missing at this stage. -->
<!-- These should sting a little — they should be recognizable to someone who IS behind. -->

- 
- 

## How this evolves next

<!-- 1–2 sentences on what changes at the next stage. Keeps the page self-contained. -->
<!-- Don't repeat the next stage's full guidance — just hint at the direction. -->

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

<!-- CONTRIBUTOR NOTES (delete before publishing) -->
<!--
Filename convention: [process-id]--[stage].md
Example: 2.1--first-hires.md

The frontmatter is the agent's contract — fill it in accurately.
The sections are prompts — write in plain language, not consultant-speak.
Variants section: only include if sensitivity != "none". Check processes.json.
Target length: 300–500 words total. If you're going longer, split into variants.
-->
