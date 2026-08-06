---
title: "Director vs shareholder decisions"
category: "legal-and-other-ops"
type: "cross-cutting"
related_processes: ["4.1", "1.2b", "1.4"]
typical_stage: "first-hires"
last_updated: "2026-08-06 13:20:00 +0200"
---

# Director vs shareholder decisions

> Companion to [4.1 Governance & Corporate](4.1--growth.md) and [1.4 Who Decides What](../strategic/1.4--first-hires.md). Two layers that look alike but are not the same: **operating** decision rights among founders/team (1.4), and **corporate** decision rights — what directors (*bestuur*) may decide vs what needs shareholders (*AVA*) under the articles and SHA.

> This note goes one step deeper than the stage pages: what each item looks like as an artifact, where it lives, and the distinctions that trip founders up. Not legal advice — use [Capital Waters](https://capitalwaters.nl/investment-documents/) (or your lawyer's pack) as the document base, and get counsel before signing.

## Two moments, same muscle

| When | What changes |
|---|---|
| **2+ founders, SHA or solid founder terms** (often before external investors) | Articles + founder SHA already split director vs shareholder decisions. Internalise that list; document material board decisions; do not treat shareholder matters as "we agreed on Slack." |
| **Priced round** (investor SHA / reserved matters) | Same machinery + investor consent rights, board rhythm, CoI policy, and DD that tests whether paper matches practice. |

[1.4 Who Decides What](../strategic/1.4--first-hires.md) owns the operating map (ABC buckets, founder approval list). Keep that list **aligned** with what the articles/SHA already require legally — especially Bucket C (equity, fundraising, pivots, and related-party deals).

---

## 0. Before investors — director vs shareholder (Dutch BV)

In a Dutch BV, **day-to-day sits with the directors**. Some acts need **shareholders** (general meeting / *AVA*) — by law, by the articles, and/or by a founder shareholders' agreement. That split exists as soon as there is more than one shareholder and written terms, not only after a VC joins.

**Typical shareholder / multi-founder territory** (illustrative — your articles + SHA control; counsel confirms):

- Share issues, transfers, and changes to the cap table
- Amending the articles of association
- Major structural moves (merger, sale of substantially all assets, liquidation)
- Appointing / dismissing directors (often)
- **Director remuneration** — salary, bonuses, management fees
- **Loans** to or from a founder, director, or someone close to them
- **Other non-arms-length agreements** — any deal between the company and a founder/director (or an entity they control or are related to): consulting via a personal BV, renting from a founder-owned property, IP licensed from a side company, preferential supplier terms, etc.

These last three are easy to miss: founders treat them as "ops" or "we all know," while the docs (and a later buyer or trustee) treat them as **related-party / conflicted** decisions that need proper shareholder (or board + abstention) process and a paper trail.

**What good looks like as artifacts**

| Artifact | Lives in | Good enough |
|---|---|---|
| Current articles + founder SHA | [Company Ops Registry](../../../templates/rendered/company-ops-registry.html) `01-corporate/incorporation/` and `01-corporate/shareholders/` | Signed PDFs; one current version each |
| One-pager: "director decides / shareholders decide" | `01-corporate/board/` or next to your [1.4 approval list](../strategic/1.4--first-hires.md) | Plain language pulled from articles + SHA — not a second invented matrix |
| Resolutions / consents when used | `01-corporate/board/` | Especially for pay, loans, and related-party contracts — filed with the agreement |

**Link to 1.4.** Your operating Bucket C (unanimous / founder OK) should include everything the SHA already reserves to shareholders. If 1.4 says "domain owner decides" but the SHA says "shareholder resolution," the SHA wins — update the operating list.

**Common failure.** A founder BV invoices the company, or a director salary changes, with only a Slack thumbs-up — no resolution, no conflict declaration, nothing in `01-corporate/`.

---

## 1. Articles of association that match reality

**What "up to date" means.** Not "filed at the KvK once." The articles should describe how decisions are actually taken today — board composition, who may represent the company, quorum, share classes if they exist. If practice drifted (an officer who always signs, an informal two-tier setup, a share class that was never reflected), the next data room will surface the gap.

**What good looks like as artifacts**

| Artifact | Lives in | Good enough |
|---|---|---|
| Current articles (deed + any amendments) | `01-corporate/incorporation/` | One current PDF; older versions archived, not mixed in |
| KvK extract that matches the articles | same folder | Extract date recent enough that DD will not ask "is this still true?" |
| Short note of known drifts (if any) | same folder or `01-corporate/board/` | One page: "practice vs articles — counsel to fix before next round" |

**Common failure.** Founders treat articles as a deposit receipt. Practice changed after the first hire or the first investor director joined; nobody updated the paper.

---

## 2. Material board decisions documented

**Why this matters from the start.** With two founders who are also directors, "we decided" is still a board decision when it binds the company. Writing it down is not bureaucracy for investors — it is how you show, later, that you set course and acted in time.

**The hard distinction.** A *decision* ("we are doing it") is not the same as a *discussion* ("good idea"). Listed companies draw that line for you; early companies blur it. In a bad-weather scenario (insolvency, dispute, DD), a trustee or buyer looks for whether you set course and acted in time — closing a loss-making market, who gets paid, whether to keep hiring.

**What good looks like as artifacts**

| Artifact | Lives in | Good enough |
|---|---|---|
| Board / management minutes (or agenda + action list) | `01-corporate/board/` | Recurring meetings: agenda with a few bullets per point; decisions labelled as decisions; owners + dates on actions |
| Resolutions for formal acts | same | Share issues, director appointments, annual accounts adoption, director pay, related-party approvals — signed PDFs |

**Lightweight is fine.** An agenda with a couple of bullets per discussion point is enough at this stage — bureaucracy is not the point; a recoverable record is.

**Rough scale signal** (from the Trailhead scan, not a hard rule): around ~50 people / ~€3M revenue you are too big to keep material direction only in founders' heads.

---

## 3. Reserved matters — known, and approvals recorded

**Two layers of "needs someone else's OK":**

1. **Shareholder matters** (section 0) — already true with a founder SHA / articles.
2. **Investor reserved matters** — after a priced round, the SHA typically adds consent rights for a named investor or class (budget, new debt, M&A, option pool, etc.). Even with a share majority you may need that consent; they can withhold budget approval until they like the plan.

**Separate from board minutes.** Board decisions and reserved / shareholder matters sometimes overlap, but they are not the same list. Minutes show the board acted; the approval trail shows the *required* shareholder or investor consent was obtained.

**What good looks like as artifacts**

| Artifact | Lives in | Good enough |
|---|---|---|
| Current SHA (and side letters) | `01-corporate/shareholders/` | Signed PDF; know which schedule lists reserved matters |
| One-page reserved-matters / shareholder-matters extract | same or `01-corporate/board/` | Plain-language list — what needs consent, from whom, how (written / meeting) |
| Approval trail when used | `01-corporate/board/` | Email consent, written resolution, or minute entry — filed with the decision it unlocked |

**Typical investor-era categories** (illustrative — your SHA controls): annual budget / business plan; issuing shares or options beyond an agreed pool; material M&A or asset sales; related-party deals; taking on material debt; changing the business; hiring/firing C-level or changing founder terms. Start from [Capital Waters](https://capitalwaters.nl/investment-documents/) or counsel's pack; do not invent the list from memory.

**Common failure.** Acting on a reserved item because "the co-founder / investor already said yes on a call," with nothing in the file.

---

## 4. Company bodies — documented and real in practice

**Bodies that may exist.** Board (*bestuur*), supervisory board (RvC), advisory board (RvA), works council (OR) where the threshold applies. Anglo-Saxon investors often struggle with one-tier vs two-tier language — document roles in plain terms: who operates, who supervises, who advises, who must consent.

**Typical path.** Start with an advisory board (RvA); by Series A/B you often have an RvC and governance that looks professional *on paper*. The test is whether meetings happen, minutes exist, and required consents are obtained — not whether the SHA mentions an RvC.

**Internal half of the same problem.** Paper organs fail if *internal* authority is a mess: statutory directors still blind-signing everything. Pair this with the [4.1 Growth](4.1--growth.md) authority matrix + KvK-registered *volmacht* where you need third-party effect. A useful pattern from the Trailhead scan: move to a structure where operators can sign day-to-day contracts without every signature needing the supervisor.

**What good looks like as artifacts**

| Artifact | Lives in | Good enough |
|---|---|---|
| Board / RvC / RvA charter or short role note | `01-corporate/board/` | Who sits where, meeting cadence, what each body decides vs advises |
| Director appointments | same | Resolutions + KvK filings aligned |
| Authority / signing matrix | `02-finance/bank-and-signatories/` and/or `01-corporate/board/` | Thresholds by role + amount; resolution approving it; volmacht registered if needed externally |

---

## 5. Board calendar, governance rhythm, conflict-of-interest policy

**Rhythm over heroics.** Recurring meetings and a reporting cadence keep governance proactive. Ad hoc meetings only when something cannot wait — not as the default operating mode.

**What good looks like as artifacts**

| Artifact | Lives in | Good enough |
|---|---|---|
| Annual board calendar | `01-corporate/board/` | Dated slots for board/RvC meetings, AGM, annual accounts adoption, budget approval window |
| Reporting pack cadence | links to [1.2b Investor Reporting](../strategic/1.2b--first-hires.md) | Monthly update + board pack timing that matches information rights (when you have them) |
| Conflict-of-interest policy | `01-corporate/board/` | Short policy: when to declare, how to record, when to abstain — founder–company deals, director pay, loans, and investor–portfolio overlaps |

**CoI before the awkward case.** Related-party deals are normal early (founder BV, family landlord, director loan). Undocumented conflicts become disputes — and DD items — later.

---

## Quick self-check

**Multi-founder / pre-investor**

1. Can you point to the articles + SHA clauses that say what directors vs shareholders decide?
2. Are director pay, loans, and other founder–company deals on that list — and filed when used?
3. Does your [1.4](../strategic/1.4--first-hires.md) Bucket C match that legal list?

**Priced-round / pre–data room**

4. Can a stranger find current articles, SHA, and last 12 months of board minutes in `01-corporate/` without asking you?
5. Can you point to the reserved-matters list and one real example where consent was filed?
6. Is there a CoI policy, and has anyone actually declared under it?
7. Does the signing matrix explain every signature a DD lawyer will see on material contracts?

If any answer is no, fix the artifact before polishing the narrative. Disorganisation itself prices risk.

---

## Tools & resources

- **[4.1 Governance & Corporate — Growth](4.1--growth.md)** — stage page for the priced-round baseline.
- **[4.1 — Foundation](4.1--foundation.md)** — founding docs, light co-founder paper, Capital Waters starters.
- **[1.4 Who Decides What — First Hires](../strategic/1.4--first-hires.md)** — operating ABC map; keep Bucket C aligned with this note.
- **[Company Ops Registry](../../../templates/rendered/company-ops-registry.html)** — folder layout for corporate, board, and shareholder files.
- **[Due diligence checklist](../../../templates/rendered/due-diligence.html)** — what buyers/investors typically request under §01 Corporate.
- **[Capital Waters](https://capitalwaters.nl/investment-documents/)** — open-source NL SHA / subscription / resolution templates (comply-or-explain); get counsel before signing.
- **[Shareholder & Investor Reporting — First Hires](../strategic/1.2b--first-hires.md)** — monthly update cadence that feeds the board pack.
- **[The first legal hire](first-legal-hire.md)** — when in-house legal arrives without burning out.

## Sources

- [Legal scan walkthrough — practitioner contribution](../../../wiki-pipeline/contributions/legal--legal-scan-walkthrough.md) · [pipeline record](../../../wiki-pipeline/sources/src-061.md) · human_experience (Trailhead legal) · no bias signals

---

## Attribution & disclaimer

The Legal part of the Diagnosis and Wiki/Knowledgebase is based on [Trailhead's Legal Scan](https://www.trailheadlegal.nl/) and made with input from Marije van Akkerveeken.

*This is provided for general informational purposes only. It is not legal advice, does not create any advisor–client relationship, and is no substitute for tailored advice from a qualified lawyer or civil-law notary. Use at your own risk.*
