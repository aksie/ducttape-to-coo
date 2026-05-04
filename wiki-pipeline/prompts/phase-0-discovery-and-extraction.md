# Phase 0: Discovery and Atom Extraction Prompt

This is the prompt for the discovery and atom extraction phase of the Duct Tape to COO wiki pipeline. It runs *before* synthesis and approval (Layer 1+2). Given a target cell (Process × Phase), it finds high-quality sources and extracts structured atoms ready for the synthesis step.

This prompt has been updated based on lessons learned from manual pipeline runs on two cells. The "Pipeline lessons" section at the bottom of this file documents *why* the prompt is structured the way it is — read it before modifying the prompt.

---

## The prompt

You are finding high-quality sources for a startup operations wiki.

**TARGET:**
- Process: `{PROCESS_NAME}`
- Phase: `{PHASE_NAME}` — `{PHASE_DESCRIPTION}` (e.g., "First Hires — 2 to 10 people")

### Step 1: Source discovery

Search the following sources, **in this priority order**, for content relevant to `{PROCESS_NAME}` at `{PHASE_NAME}`:

**Tier 1 — Practitioner content (search these first, weight highest):**
1. Hacker News "Ask HN" threads with substantive comments — search news.ycombinator.com and hn.algolia.com
2. r/startups, r/Entrepreneur, r/smallbusiness, r/SaaS posts where founders/operators describe their own experience
3. Substack and personal blogs by named operators (search for "how we" + process name + stage)
4. Podcast transcripts where operators describe specific decisions (The Operators, Lenny's Podcast back catalog)
5. First-person LinkedIn long-form posts from named ops practitioners

**Tier 2 — Reference content (use to confirm or fill gaps from Tier 1):**
6. First Round Review — review.firstround.com
7. Lenny's Newsletter — lennysnewsletter.com
8. SaaStr (for revenue/sales processes) — saastr.com
9. Stripe Atlas guides (for legal/financial setup) — stripe.com/atlas/guides
10. Paul Graham essays (for early-stage processes) — paulgraham.com
11. Sequoia / a16z blog posts — sequoiacap.com, a16z.com
12. GitLab Handbook — handbook.gitlab.com/handbook/ (only for Growth/Scaled phase unless content explicitly addresses smaller teams; flag with `sub_variant_signals: [headcount]`)

**Tier 3 — Vendor and advisory content (only sweep AFTER finding at least 2 Tier 1 sources):**
13. Fractional CFO / advisory firm blogs (Kruze, ScaleUp Finance, Preferred CFO, etc.)
14. SaaS vendor blogs (Ramp, Brex, Spendesk, Expensify, Gusto, etc.)
15. Bank / payments provider content (JPM, Capital One, Stripe blog)

**Why this order:** practitioner content has dramatically higher value per token than vendor content. A single HN comment from a practitioner often produces more useful atoms — and better "why" explanations — than ten vendor blog posts. See "Pipeline lessons" below.

### Step 2: Bias check on the corpus

After your initial source list is assembled, evaluate the corpus as a whole:

- What % of sources are commercial entities with direct interest in pushing the same conclusion?
- Are the top results dominated by a single product category (e.g., "all results are corporate card vendors")?
- Is there geographic homogeneity? (e.g., all US-focused)
- Is there a missing perspective? (e.g., bootstrapped vs VC-backed, services vs SaaS)

**If the corpus is >60% commercial sources pushing the same conclusion**, run an adversarial second pass:
- Search for negative experience: "regret using X," "mistakes we made with Y," "switched away from Z"
- Search for the dissent terms: complaints, lessons, what-not-to-do
- Search HN/Reddit specifically for criticism of the dominant approach

The goal is not balance for its own sake — it's to surface failure modes and edge cases that vendor-aligned sources systematically omit.

### Step 3: Source evaluation

For each source found, evaluate:
- Is it relevant to `{PROCESS_NAME}` at `{PHASE_NAME}` specifically, or is it too generic?
- Is the author speaking from direct experience (practitioner) or giving general advice?
- Does it contain any of: what good looks like, concrete actions, warning signs that the process is broken, how it evolves at the next stage, tool recommendations?
- What commercial interests does the source have, if any?
- What is the why-quality? (high = mechanism + consequence with specifics; low = tautological/marketing)

Output a prioritised list of 5–10 URLs with:
- URL
- Title
- Source type (`practitioner_blog` | `practitioner_comment` | `vc_firm` | `advisory_firm` | `vendor_blog` | `hn` | `reddit` | etc.)
- One sentence on why it's relevant
- Any bias signals to flag
- Recommended atom types likely extractable (`target_state` | `action` | `warning_sign` | `evolution` | `tool_resource`)

Skip sources that are purely generic management advice, not stage-specific, or only relevant to companies much larger or smaller than `{PHASE_NAME}`.

### Step 4: Corpus health summary

Before extraction, produce a `corpus_health.md` summary for this cell:

```yaml
---
entry: {process}/{phase}
last_updated: {date}
---

## Source mix

- Total sources: N
- Practitioner-led: N (X%)
- Vendor / commercial-interest: N (X%)
- Advisory firm / VC: N (X%)
- News / academic: N (X%)

## Geographic mix

- US: N
- EU/NL: N
- Global/Unknown: N

## Bias flags raised

- {bias_flag}: N atoms (to be filled after extraction)

## Disclosure status

- Should this entry render an "About this entry's sources" disclaimer? {yes/no}
- Reason: {e.g., practitioner-led ratio below 30% threshold; corpus dominated by single vendor category}
```

### Step 5: Atom extraction

For each URL, fetch the content (use `web_fetch` if you have access to it; otherwise note that the content needs to be fetched manually) and run extraction.

Extract every distinct operational claim as a separate atom. For each atom, output a markdown file using this frontmatter structure:

```yaml
---
id: atom-NNN
source_id: {to be assigned}
type: {target_state | action | warning_sign | evolution | tool_resource | why}
process: {process_slug}
phase: {phase_slug}
sub_variant_signals: []
confidence: {high | medium | low}
practitioner_first_person: {true if the author speaks from direct experience}
bias_flags: {list any commercial interest signals}
why_quality: {high | medium | low | absent}
extracted_by: "llm:claude-opus-4-7"
extracted_date: {YYYY-MM-DD}
unverified: false
---

## Claim

{1-2 sentences, second person}

## Source quote or paraphrase

{paraphrase the underlying material — do NOT verbatim quote more than 15 words}

## Why (inferred from source if not explicit)

{the reasoning — extracted or inferred from mechanism, consequences, examples}
```

### Extraction rules

- One atom per distinct claim. Do not combine.
- Write claims in second person ("you should...", "at this stage, you...").
- Actively look for content that maps to each of the 5 wiki sections:
  1. **What good looks like** — descriptions of a well-functioning process
  2. **What you actually need to do** — concrete actions, steps, cadences
  3. **Warning signs you're behind** — red flags, failure modes, things that break, signs that the process is missing or broken
  4. **How this evolves next** — what changes at the next growth stage
  5. **Tools & resources** — specific tools, templates, or further reading
- **Warning signs are especially valuable and often under-extracted.** Look for phrases like "we learned the hard way," "the mistake we made," "what breaks when," "signs that X is missing," "red flags."
- If the author is clearly speaking from direct experience, set `practitioner_first_person: true`.
- Flag `bias_flags` if the source has a commercial interest in the claim being true.

### Why-quality scoring

Each atom must have a `why_quality` value:

- **high**: concrete mechanism + consequence, often with numbers or specific examples (e.g., "missing a $2k expense costs you $1k at 50% marginal tax rate")
- **medium**: plausible reasoning given, but generic
- **low**: tautological or marketing-style ("manage expenses well, because well-managed expenses are good")
- **absent**: no why provided and no basis for inference

The Why section is critical — always try hard to capture it. If the source does not explicitly state "because X," infer the reasoning from the author's argument, described consequences, mechanisms, or examples. Ask: what problem does this solve? What happens if you don't do it? What mechanism makes it work? Only leave Why blank (and `why_quality: absent`) if the source gives zero basis for reasoning, not just because there's no explicit "because" statement.

### Vendor source handling

When extracting from Tier 3 (vendor/advisory) sources:

- Always populate `bias_flags` with the specific commercial interest (e.g., `sells_corporate_cards`, `sells_fractional_cfo_services`, `sells_expense_management_software`)
- A claim made *only* by sources with commercial interest in that claim being true should not be promoted to the wiki, even if multiple vendor sources agree. Three Ramp blog posts saying "you need a corporate card" is one source, not three.
- If a claim is supported only by vendor sources, flag it for the synthesis step with `vendor_only_support: true` in the trail.
- Vendor sources rarely have high-quality "why" — default `why_quality: low` unless the source explicitly explains mechanism and consequence with specifics.

### Output

For the cell `{PROCESS_NAME}` x `{PHASE_NAME}`, produce:

1. A prioritised source list (Step 3 output)
2. A `corpus_health.md` file (Step 4 output)
3. A set of atom markdown files in `/atoms/` (Step 5 output)

These outputs feed into the synthesis and approval pipeline (Layer 1+2 of the build).

---

## Pipeline lessons (why this prompt is structured this way)

These findings come from manually testing the extraction pipeline on two cells: Financial Ops @ Early Scale and AP & Expense Management @ First Hires. They directly shape the prompt above.

### 1. Bias is a search-stage problem, not just an atom-stage problem

For some processes — especially anything that maps to a SaaS vendor category like expense management, payroll, CRM, or project management — the top-N search results are dominated by commercial entities pushing the same conclusion. Atom-level bias flagging is necessary but not sufficient; the corpus itself can be uniformly biased.

**Implication:** the prompt does corpus-level bias evaluation in Step 2, with adversarial re-search if the corpus is >60% commercial sources. It also produces an explicit `corpus_health.md` so the synthesis and approval steps can act on the source mix.

### 2. Vendor-source atoms need triangulation rules, not just flags

A claim made *only* by sources with commercial interest in that claim being true should not be promoted to the wiki, even if multiple vendor sources agree. Three Ramp blog posts saying "you need a corporate card" is one source, not three.

**Implication:** the prompt's "Vendor source handling" section makes this rule explicit. The `vendor_only_support` trail field surfaces it to the synthesis step.

### 3. Practitioner content has dramatically higher value per token

A single HN comment from a practitioner (e.g., patio11 on startup accounting) often produces more useful atoms — and better "why" explanations — than ten vendor blog posts. Practitioner sources should be preferred as primary, with vendor content used only to confirm or fill gaps.

**Implication:** the source priority is now explicitly tiered. Tier 3 (vendor) is only swept after at least 2 Tier 1 sources are found.

### 4. Some cells have irreducible source bias

Categories invented by vendors (expense management, sales enablement, customer success tooling) will always have biased corpora. The wiki should be honest about this rather than pretending neutrality.

**Implication:** `corpus_health.md` includes a `disclosure_status` field. Entries with low practitioner ratio render an "About this entry's sources" disclaimer when published.

### 5. "Why" quality varies by source type

Practitioner sources tend to give concrete why explanations (mechanism, consequence, numbers). Vendor sources tend to give tautological why ("manage expenses well -> because well-managed expenses are good"). Inferred why-from-vendor is low-confidence by default.

**Implication:** atoms have a `why_quality` field. Vendor sources default to `why_quality: low` unless they demonstrably explain mechanism and consequence with specifics.

### 6. Some cells will be sparse — that's a finding, not a failure

"AP & Expense Management at First Hires (2-10 people)" returned almost no useful practitioner content because at that stage, the process barely exists as a distinct concern. Most articles about AP/expense management implicitly target 20+ person companies.

**Implication:** sparse cells are a *finding* about the matrix, not a failure of the pipeline. The synthesis step should be willing to produce shorter entries (or even "this process doesn't meaningfully exist yet at this stage" notes) rather than padding with low-quality vendor content.

---

## Cell-specific notes

When running this prompt for a specific cell, append cell-specific guidance here. For example:

### Financial Ops @ Early Scale
- Tier 1 sources should include practitioner CFO reflections (e.g., FM Magazine "What I learned" series)
- Vendor bias risk: high (fractional CFO firms dominate)
- Geographic risk: US-centric; explicitly search for EU/NL content on BTW, agio, Box 2

### AP & Expense Management @ First Hires
- Expect sparse practitioner content; consider whether this cell should be merged with a parent process
- Vendor bias risk: extreme (corporate card vendors dominate)
- Adversarial re-search highly likely needed
