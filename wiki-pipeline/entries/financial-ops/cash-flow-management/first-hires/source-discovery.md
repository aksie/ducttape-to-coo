---
entry: financial-ops/cash-flow-management/first-hires
process_id: "2.1"
process_name: Cash Flow Management
phase: first-hires
phase_description: First Hires — 2 to 10 people
last_updated: 2026-06-24
step: 1
status: discovery_complete
---

# Source discovery — 2.1 Cash Flow Management @ First Hires

**Wiki stub:** [2.1--first-hires](https://aksie.github.io/ducttape-to-coo/wiki.html#2.1--first-hires)  
**`stageFocus` (processes.json):** Monthly cash flow forecast (3–6 months out). Track burn rate and runway. Alert when runway drops below 6 months. Plan for payroll timing.

**Stage-fit lens:** At 2–10 people, cash flow is **payroll timing + burn visibility**, not rolling 13-week treasury ops or department budget owners (those belong in early-revenue / growth). Deprioritise Series A board-pack and automated forecasting content unless it explicitly addresses sub-10 headcount.

**Repo overlap (reuse, don't re-extract blindly):**
- `wiki-pipeline/entries/financial-ops/first-hires/` — **2.4 Accounts Payable & Expense Management** (published adjacent hygiene: categories, accountant, reconcile)
- `wiki-pipeline/entries/financial-ops/early-scale/` — **early-revenue-ish** (13-week forecast, leadership visibility) — carry-forward with evolution, not copy-paste
- Atoms `atom-010` (weekly review if runway tight), `atom-064` (accountant for hire/tax questions) — cross-ref from 2.4 entry
- Sources `src-002`, `src-005`, `src-007` already registered — extend with first-hires-specific claims only

**Practitioner gap to flag at Phase 2:** User/Nalden-style **trigger-based planning** (if ARR > X → hire; if runway < Y → cut freelancers + draw facility) — **not in repo yet**; see 2.2 discovery + investor-update template partial overlap.

---

## Step 2 — Corpus bias check (preview)

| Risk | Assessment |
|------|------------|
| Vendor / commercial bias | **High** in raw search (Forecastr, Parallel, Finntree, Kruze, Culta). Tier 1 HN + First Round must lead; vendor posts only for specific mechanics (fully loaded cost multiplier, headcount tab structure). |
| Single-framework dominance | Many posts push "12-month runway rule" or MRR-covers-hire formulas as universal — need bootstrapped + pre-revenue dissent. |
| Geographic homogeneity | **US-heavy** payroll/tax examples. NL: payroll timing, sick-pay reserve (see `atom-117`), BTW — cross-ref **3.1** / **4.5** where relevant, not duplicated here. |
| Missing perspective | **Emotional hiring** vs runway math; **founder personal runway** vs company runway (cross-ref **1.4** / **4.1**). |
| Sparse-cell risk | **Low** for burn/runway basics; **medium** for first-hires-specific *cadence* (weekly vs monthly) and payroll calendar mechanics. |

**Adversarial pass:** HN threads on hiring before PMF, bad hire burning 2–3 months runway (`item?id=33334062`), overfunding / premature scale (`item?id=17920143`).

**Disclosure preview:** Mixed corpus — likely **short** vendor disclaimer unless practitioner ratio stays >50% after registration.

---

## Step 3 — Prioritised sources (register as `src-065`+ in Step 3)

### Tier 1 — Practitioner (weight highest)

| Priority | URL | Title | Type | Why relevant @ first hires | Bias signals | Likely atoms |
|----------|-----|-------|------|---------------------------|--------------|--------------|
| 1 | https://news.ycombinator.com/item?id=38291045 | Ask HN: What finance processes do you wish you'd set up earlier? | hn | Already `src-005` — extend: burn unknown until too late; weekly cash when tight | none | `action`, `warning_sign` |
| 2 | https://news.ycombinator.com/item?id=33334062 | Startup engineering hiring anti-patterns (2021) | hn | Bad hire = 2–3 months runway lost at 12-month runway — **cash consequence of hiring** | none | `warning_sign` (founder_time), `why` |
| 3 | https://news.ycombinator.com/item?id=32616270 | Ask HN: How much info should founders share with early employees? | hn | Operators share cash, runway, burn with small teams — **visibility norm** @ first hires | none | `target_state`, `action` |
| 4 | https://news.ycombinator.com/item?id=12757864 | Who Should a Startup Hire First? | hn | Hire only when business need clear; PMF stage = don't hire — **cash preservation** | none | `warning_sign`, `why` |
| 5 | https://medium.com/startups-and-investment/improve-your-financial-model-with-a-dynamic-hiring-plan-923129f2c4a8 | Improve Your Financial Model With A Dynamic Hiring Plan | practitioner_blog | **Milestone-triggered hiring** (MRR / funding gates) not calendar dates — closest published analogue to trigger budgeting | none | `action`, `tool_resource`, `target_state` |

### Tier 2 — Reference (confirm / fill gaps)

| Priority | URL | Title | Type | Why relevant @ first hires | Bias signals | Likely atoms |
|----------|-----|-------|------|---------------------------|--------------|--------------|
| 6 | https://review.firstround.com/heres-the-advice-i-give-all-of-our-first-time-founders/ | Here's the Advice I Give All of Our First Time Founders (Rob Hayes) | vc_firm | Post-raise **cash management plan**; zero-revenue assumption; don't count debt in runway | vc_portfolio_interest | `action`, `target_state`, `warning_sign` |
| 7 | https://review.firstround.com/navigating-new-waters-10-tips-for-first-time-founder-success/ | Navigating New Waters (Hayes cash plan) | vc_firm | Same cash-plan discipline; share plan with investors for accountability | vc_portfolio_interest | `action` |
| 8 | https://www.under30ceo.com/founder-understand-before-hiring/ | 4 numbers every founder must understand before hiring | practitioner_blog | Fully loaded cost, runway after hire table — literal first-hire math | none | `action`, `target_state`, `why` |
| 9 | https://kruzeconsulting.com/blog/build-a-rolling-cash-forecast/ | Build a Rolling Cash Forecast (Kruze) | advisory_firm | Headcount → payroll → forecast linkage; hiring slip realism | sells_fractional_cfo_services | `action`, `evolution` (defer 13-week to early-revenue) |
| 10 | https://www.forecastr.co/blog/headcount-planning-protect-runway | Headcount planning: protect your runway | vendor_blog | Fully loaded multiplier, hire month in model, push hires if revenue misses | sells_fp_a_software | `action`, `warning_sign` — use for mechanics only |

### Tier 3 — Vendor sweep (after Tier 1–2)

| URL | Title | Use for | Skip |
|-----|-------|---------|------|
| https://www.finntree.com/blog/small-business-finance/when-can-startup-afford-to-hire | When Can Your Startup Afford to Hire? | MRR-covers-hire framework, 30/60/90-day hire scenarios | Treat rules as **examples**, not law |
| https://culta.ai/blog/startup-payroll-budgeting-guide | Startup Payroll Budgeting | Payroll = 60–80% burn; runway impact formula | Heavy vendor SEO |
| https://www.glencoyne.com/guides/trigger-based-scenario-planning | Trigger Based Scenario Planning | Yellow/red runway alerts + **pre-approved actions** | UK/US advisory blog — good for trigger *structure* |
| https://trustnimbl.com/scenario-based-forecasting/ | Scenario-Based Forecasting (Nimbl) | Decision triggers, pause hires in downside | FP&A vendor |

---

## Step 4 — Corpus health summary

| Metric | Estimate |
|--------|----------|
| Tier 1 practitioner | ~5 strong |
| Tier 2 reference | ~5 |
| Tier 3 vendor | ~4 (mechanics only) |
| Commercial bias | Moderate — contain with HN + Hayes leading synthesis |
| Stage fit | Good for 2–10; watch for "Series A FP&A" creep |
| NL gap | Payroll timing, ziekteverzuim reserve — wiki cross-ref, not US tax detail |

**Recommended Phase 1b shortcut:** If Stefan/Nalden trigger-planning notes exist, add as **practitioner contribution** (`human:stefanverkerk` or anonymous) — fills the biggest gap external sources only approximate.

**Evolution note:** Early-revenue `stageFocus` already says "Rolling 12-month cash forecast… Scenario planning for hiring/spending" — first-hires page should **set up** monthly 3–6 month forecast + runway alert, not full scenario engine.

**Cross-refs for Phase 2:** **2.2** (headcount budget), **2.4** (expense hygiene), **1.4** (spend approval), **3.2** (offer fits budget / `atom-260`), **1.2b** (investor update runway section).

---

## Sources to register next (Step 3 file creation)

| New ID | URL | Notes |
|--------|-----|-------|
| `src-065` | Medium dynamic hiring plan | Milestone-linked hires |
| `src-066` | under30ceo 4 numbers before hiring | Runway-after-hire table |
| `src-067` | First Round Hayes cash management | Zero-revenue plan, debt exclusion |
| `src-068` | HN item?id=33334062 | Bad hire runway cost |
| `src-069` | HN item?id=32616270 | Share runway with team |
| `src-070` | glencoyne trigger-based scenario planning | Runway tier → pre-approved actions |
| Reuse | `src-005`, `src-002`, `src-007` | Extend atom set, new source file not needed |
