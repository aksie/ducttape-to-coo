---
entry: financial-ops/financial-planning-budgeting/first-hires
process_id: "2.2"
process_name: Financial Planning, Budgeting & Analysis
phase: first-hires
phase_description: First Hires — 2 to 10 people
last_updated: 2026-06-24
step: 1
status: discovery_complete
---

# Source discovery — 2.2 Financial Planning, Budgeting & Analysis @ First Hires

**Wiki stub:** [2.2--first-hires](https://aksie.github.io/ducttape-to-coo/wiki.html#2.2--first-hires)  
**`stageFocus` (processes.json):** Build a simple headcount and cost budget. Track actual spend monthly against what you expected. Know your runway to the nearest month. Review with co-founders monthly.

**Stage-fit lens:** At 2–10 people this is **not FP&A** — it is a **founder headcount + cost spreadsheet**, monthly actuals vs plan, and co-founder review. No department budget owners, quarterly reforecast, or board pack (early-revenue / growth). Process is **recommended**, not critical — but payroll mistakes here are company-ending.

**Distinction from 2.1:** **2.1** = cash in/out timing, runway, payroll calendar. **2.2** = planned spend (especially people), variance review, hiring plan linked to constraints. Heavy overlap in practice — wiki pages should cross-link, not duplicate.

**Practitioner input (Jun 2026 — not yet in pipeline):** Stefan/Nalden **scenario-style planning** — budget + bandwidth limits + **pre-agreed if/then actions** (e.g. hire dev when ARR > X; cut freelancers when runway < Y; use bank facility while racing to fundable milestone). **Not previously captured under "Nalden" in repo.** Closest existing artefacts:
- `templates/docs/investor-update.md` — "How we manage risk" + "Scenario thinking" bullets (investor-facing, not operating model)
- `data/processes.json` — "scenario planning" wording at **early-revenue+** for 2.1/2.2, not trigger rules @ first hires
- Medium **dynamic hiring plan** (`src-065` candidate) — milestone-linked hire dates in model

**Recommendation:** Capture Nalden framing as practitioner contribution or Phase 1b atoms with `needs_practitioner_check` — it is the distinctive ops insight vs generic "build a budget."

---

## Step 2 — Corpus bias check (preview)

| Risk | Assessment |
|------|------------|
| Vendor / commercial bias | **Very high** — headcount templates (Kinnect, Carta, Forecastr, Parallel, Fiscal Lion) dominate SEO. |
| Single-framework dominance | "Fully loaded cost = 1.25–1.3× salary" repeated everywhere — fine as mechanics, not as the page thesis. |
| Geographic homogeneity | US salary / benefits examples. NL: wet DBA freelancers, employer costs — light touch + **4.5** cross-ref. |
| Missing perspective | **Static annual budget** vs **trigger/milestone plan** — external sources split; practitioner input fills gap. |
| Sparse-cell risk | **Low** for "headcount tab + monthly review"; **high** for quality practitioner non-vendor voice. |

**Adversarial pass:** HN "don't hire before PMF"; budget vs actuals meaningless if categories wrong (`src-006` already).

**Disclosure preview:** Likely needs **vendor disclaimer** unless practitioner contribution added.

---

## Step 3 — Prioritised sources (register as `src-065`+ in Step 3)

### Tier 1 — Practitioner (weight highest)

| Priority | URL | Title | Type | Why relevant @ first hires | Bias signals | Likely atoms |
|----------|-----|-------|------|---------------------------|--------------|--------------|
| 1 | https://medium.com/startups-and-investment/improve-your-financial-model-with-a-dynamic-hiring-plan-923129f2c4a8 | Dynamic Hiring Plan (Medium) | practitioner_blog | Replace calendar hire dates with **MRR / funding milestones** — core "not static budget" pattern | none | `target_state`, `action`, `tool_resource` |
| 2 | https://www.glencoyne.com/guides/hiring-plan-funding-milestones | Milestone Driven Hiring Plans | practitioner_blog | Base/bull/bear cases tied to **same triggers**; board conversation framing | advisory_firm | `target_state`, `evolution` |
| 3 | https://www.glencoyne.com/guides/trigger-based-scenario-planning | Trigger Based Scenario Planning | practitioner_blog | Metric + threshold + **pre-approved action** (yellow/red runway) | advisory_firm | `action`, `target_state`, `warning_sign` |
| 4 | https://news.ycombinator.com/item?id=38291045 | Ask HN: finance processes wish earlier (`src-005`) | hn | Categories from day one; burn unknown — budget variance useless without hygiene | none | `warning_sign`, cross-ref **2.4** |
| 5 | https://news.ycombinator.com/item?id=25300311 | Ask HN: First 5 People at a Startup | hn | First hires driven by skill gaps; part-time admin/bookkeeping worth it early | hn | `action`, `why` |

### Tier 2 — Reference (confirm / fill gaps)

| Priority | URL | Title | Type | Why relevant @ first hires | Bias signals | Likely atoms |
|----------|-----|-------|------|---------------------------|--------------|--------------|
| 6 | https://www.fiscallion.io/blog/headcount-planning-for-startups | Headcount planning (Fiscal Lion) | advisory_firm | Monthly headcount model: start date, loaded cost, ramp; cites First Round / Notion CFO | sells_advisory | `action`, `target_state` |
| 7 | https://www.forecastr.co/blog/headcount-planning-protect-runway | Headcount planning protect runway | vendor_blog | Revenue-linked roles; monthly budget-vs-actual as **most important finance meeting** | sells_fp_a_software | `action`, `target_state` |
| 8 | https://review.firstround.com/heres-the-advice-i-give-all-of-our-first-time-founders/ | Hayes cash / spend plan | vc_firm | Post-close spend plan shared with investors — accountability for **plan vs reality** | vc_portfolio_interest | `action` |
| 9 | https://carta.com/learn/startups/compensation/headcount-planning/ | Headcount Planning Beyond the Budget (Carta) | vendor_blog | Headcount plan = who/when/why; equity in loaded cost; quarterly review cadence | sells_equity_software | `target_state`, `evolution` |
| 10 | https://getparallel.com/blog/model-headcount-and-hiring-plans-in-your-startup-financial-model | Parallel headcount modeling | vendor_blog | Ramp periods; April vs July hire = runway delta | sells_fp_a_software | `why`, defer heavy tooling |

### Tier 3 — Vendor / reuse

| Source | Use |
|--------|-----|
| `src-006` | First budget vs actuals review surfaces hidden drift — **warning_sign** |
| `src-002` | Separate headcount plan from cash model — **tool_resource** / structure |
| `templates/docs/investor-update.md` | Risk + scenario bullets — **evolution** toward 1.2b reporting, not duplicate as 2.2 body |
| Kinnect headcount template post | Tab structure (plan vs actual vs rolling) — mechanics only |

---

## Step 4 — Corpus health summary

| Metric | Estimate |
|--------|----------|
| Practitioner-led (incl. Medium + glencoyne) | ~40% without Stefan/Nalden contribution |
| Best external hook | **Dynamic / milestone hiring plan** + **trigger → action** frameworks |
| Gap | Nalden "bandwidth + if/then actions" — **capture as practitioner** |
| Overlap with 2.1 | Runway math, fully loaded hire cost — cross-link, single home for formulas |

**Synthesis priorities for Phase 2:**
1. Simple headcount + cost budget (founders only, monthly columns)
2. Fully loaded cost rule-of-thumb + runway-after-each-hire check
3. Monthly founder review: actual vs plan, variance = signal not shame
4. **Trigger rules** (milestones + runway bands + pre-agreed cuts/hires) — lead with practitioner if available, else Medium + glencoyne with `needs_practitioner_check`
5. Evolution → early-revenue: model used in management, not deck-only; scenario section in investor updates

**Cross-refs:** **2.1** (runway), **2.4** (categories, accountant), **1.4** (approval list for spend/hiring), **3.2** (offer within budget), **1.2b** (quarterly scenario depth in updates).

---

## Sources to register next (Step 3)

| New ID | URL | Notes |
|--------|-----|-------|
| `src-065` | Medium dynamic hiring plan | Shared with 2.1 discovery |
| `src-070` | glencoyne trigger-based scenario planning | Shared with 2.1 discovery |
| `src-071` | glencoyne milestone hiring plan | Base/bull/bear triggers |
| `src-072` | fiscallion headcount planning | Monthly model structure |
| `src-073` | forecastr headcount blog | Budget-vs-actual cadence quote |
| Reuse | `src-005`, `src-006`, `src-002` | Extend atoms |

**Practitioner contribution (recommended before Phase 2):** Short write-up of Nalden scenario-style planning (budget + bandwidth + if/then actions) → `contributions/financial-2.2--scenario-planning-first-hires.md` or fold into existing ops notes.
