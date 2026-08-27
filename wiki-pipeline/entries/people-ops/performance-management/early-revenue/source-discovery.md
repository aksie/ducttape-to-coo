# Source discovery — Performance Management / Early revenue (3.5)

**Target:** Performance Management × Early Revenue (~11–25 people)  
**Run date:** 2026-08-24  
**Prompt:** `wiki-pipeline/prompts/phase-1-discovery-and-extraction.md`

---

## Step 1: Source discovery (prioritised list)

| Priority | URL | Title | Type | Why relevant | Bias | Likely atom types |
|---|---|---|---|---|---|---|
| 1 | [HN 13130547](https://news.ycombinator.com/item?id=13130547) | Ask HN: performance appraisal at startup | hn | ~20-person OKRs + 1:1s; metrics ≠ rating; review timing | none | target_state, action, warning_sign |
| 1 | [HN 16441555](https://news.ycombinator.com/item?id=16441555) | Ask HN: feedback within your team | hn | 15–25 needs schedule + notes; expand feedback loop | none | target_state, action, evolution |
| 1 | [HN 14908913](https://news.ycombinator.com/item?id=14908913) | Ask HN: performance reviews | hn | Quarterly check-ins; no surprise; continue/stop/start | none | target_state, action, warning_sign |
| 2 | [First Round — Power of performance reviews](https://review.firstround.com/the-power-of-performance-reviews-use-this-system-to-become-a-better-manager/) | Manager framework (Airbnb) | practitioner_blog | Monthly career coaching ≠ weekly 1:1; growth spreadsheet | vc_portfolio_interest | target_state, action, tool_resource |
| Reuse | [src-010](../sources/src-010.md) | OKRs Actually Work (Angus Davis) | practitioner_blog | OKRs decoupled from perf/comp — already atom-027 | none | action (reuse) |
| Skip | HR SaaS blogs (Taito, Talstack, Juicebox) | vendor_blog | sells_software — excluded |
| Skip | Molly Graham Substack | practitioner_blog | Strong but deferred — growth-stage 50+ Facebook-style cycles; revisit for 3.5 @ growth |

---

## Step 2: Bias check

- Registered corpus: **100% practitioner** (HN + First Round essay)
- Raw search dominated by HR software vendors — **not swept** for v1
- US-centric examples; EU/NL labor law on review documentation not covered — flag in Phase 2

---

## Step 3–5: Registered sources + atoms

| Source | Atoms |
|---|---|
| src-075 | atom-583 … atom-587 |
| src-076 | atom-588 … atom-591 |
| src-077 | atom-592 … atom-595 |
| src-078 | atom-596 … atom-600 |
| src-010 (reuse) | atom-027 — OKR/comp decoupling |
| **Addendum** [src-079](../../sources/src-079.md) | atom-601 … atom-603 — weekly 1-on-1 standing agenda + feedback log (stefanverkerk, 2026-08-24) |
| **Expansion** [src-080](../../sources/src-080.md) | atom-604 … atom-609, atom-625 — OpenOrg quarterly rhythm, manual-first, SBI, calibration |
| **Expansion** [src-081](../../sources/src-081.md) | atom-610 … atom-618 — Hoff Digital ~20-person review framework |
| **Expansion** [src-082](../../sources/src-082.md) | atom-619 … atom-624 — SignalFire Quarterly Sit-Down (QSD) template |

**Corpus health:** [`corpus_health-people-ops-early-revenue-performance-management.md`](../../corpus_health-people-ops-early-revenue-performance-management.md)

**Phase 2:** `draft.md` + `trail.md` — **22 claims** (c-001 … c-022) pending synthesis of expansion atoms (604–625); merge don't duplicate no-surprise / quarterly rhythm claims

---

## Phase 1 addendum — source expansion (2026-08-24)

**Trigger:** Corpus still feels thin after first pass; search for **templates** then **posts that explain how to use them** at ~11–25 people.

### Template → post chains (recommended register)

| Template / format | Explainer post | Type | Why register | Bias |
|---|---|---|---|---|
| Quarterly check-in (self-reflection + manager input + 45 min conversation) | [OpenOrg — Performance management process](https://www.openorg.fyi/post/performance-management-process) | operator_guide | Same publisher as offboarding src-056; explicit “zero surprises,” kill annual review, run manually in Notion/Docs one quarter before HRIS | none |
| Self-review prompts + manager prep + two-week review window | [Hoff Digital — 20-person startup engineers](https://www.hoffdigital.com/blog/performance-reviews-for-startup-engineers) | practitioner_blog | Named operator; exact headcount band; comp-drift warning; 3-month follow-up on growth areas | none |
| QSD one-page form (accomplishments, goals, strengths, dev areas, manager support) | [SignalFire — Quarterly Sit-Down (QSD)](https://www.signalfire.com/blog/quarterly-sit-down-qsd) | vc_firm | Concrete 15–20 min prep template; swap forms at meeting, discuss misalignment | vc_portfolio_interest |
| Continue / stop / start | Already in **src-077** (HN); optional meta: [Stop Start Continue template](https://projectmanagementformula.com/stop-start-continue-template/) | generic_blog | Explains framework for 1:1s/reviews — low stage specificity; **defer** unless we need a tool_resource cite |
| First Round Google Doc + growth spreadsheet | Already **src-078** + **src-010** | — | Lenny republish is duplicate of Cordova — skip |

### Additional HN / threads evaluated

| URL | Verdict |
|---|---|
| [HN 427564](https://news.ycombinator.com/item?id=427564) — “Do you do individual performance reviews?” | **Skip** — only 3 comments; thin vs existing src-075–077 |
| [First Round — AltSchool rebuilt Google reviews](https://review.firstround.com/altschools-ceo-rebuilt-googles-performance-review-system-to-work-for-startups-here-it-is/) | **Defer to 3.5 @ growth** — formal system from day one; useful warning on “loosey-goosey then hire over star” but heavier than early-revenue default |
| [Adku 2011 peer reviews at 3 people](http://blog.adku.com/2011/01/peer-reviews-in-4-month-old-3-person.html) | **Skip** — first-hires scale, not early-revenue |

### Deliberately excluded (vendor / template SEO)

Taito.ai, TalentHR, Teemzo, PerformSpark, StartupKit, Lattice-alternatives roundups — sell software or compare enterprise tools; no new practitioner signal beyond what HN threads already say.

### Recommended next extraction (priority order)

1. ~~**src-080** — OpenOrg~~ ✅ extracted atom-604–609, atom-625
2. ~~**src-081** — Hoff Digital~~ ✅ extracted atom-610–618
3. ~~**src-082** — SignalFire QSD~~ ✅ extracted atom-619–624

**Next:** Phase 2 synthesis — merge into `draft.md` + `trail.md` (avoid duplicating c-002, c-009, c-020, c-021)
