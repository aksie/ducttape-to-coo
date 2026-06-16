---
contributor: stefanverkerk
process: legal (4.1 Governance · 4.5 Internal & Labour · 4.6 Privacy & IP)
stage: early-revenue through growth (example company set to Series A/B)
date: 2026-06-16
source_note: Trailhead legal working session — a live "legal scan" of an example company (Series A/B, ~70/50 split, non-regulated) walked end-to-end in questionnaire order. Held in Dutch, summarised in English. Approved for pipeline use; company names removed. Contains both "What good looks like" lessons (wiki content) and "Tool / wording note" items (diagnostic / processes.json changes — not wiki content).
interviewee: Trailhead legal advisor

---

# Legal scan — what good looks like, domain by domain

*A practitioner contribution for the Duct Tape to COO wiki. Based on a Trailhead legal working session in June 2026 that walked a live "legal scan" of an example non-regulated company (set to Series A/B, ~70/50 founder split) end-to-end. It follows the questionnaire order. For each item there is a **What good looks like** block (the lesson for the wiki) and, where relevant, a **Tool / wording note** (a change to the diagnostic, not wiki content). Items where the audio was ambiguous are marked **[verify]**.*

---

## 1. Corporate governance

### Articles of association up to date and correctly filed with KvK?

**What good looks like:** "Up to date" should mean the articles **reflect the current governance situation and how things actually work in practice** — not just how they're written.

**Tool / wording note:** Drop "correctly" — it implies the respondent must judge what's *correct*, whereas the point is simply whether the articles are filed/deposited. Suggested rephrase: *"…up to date (do they reflect the current governance situation?)"*.

### Annual accounts formally adopted and correctly filed with KvK?

**What good looks like:** Accounts are properly *adopted* per shareholders' **resolution** and filed on time. At minimum the CFO should know the filing status.

**Why it matters:** Late filing → **director liability**. Add a wiki note: late/incorrect filing of annual accounts triggers director liability.

**Anti-pattern (real case):** a director/shareholder emailing the others *"accounts are ready, filing Thursday, assume approval unless I hear otherwise."* The shareholders' resolution adopting the annual accounts should be signed by all shareholders, and the annual accounts should be signed by the Board of Directors.

### Material (board) decisions documented?

**What good looks like:** Board decisions and the company's *direction* are documented (minutes, or at least an action list). In a "bad weather" scenario this is what a trustee looks back on: did you set course and act in time? Examples raised — closing Germany in time to protect Dutch employees' interests; who does/doesn't get paid; whether to keep hiring.

**The hard distinction:** what's a real *board decision* vs. just something discussed ("a good idea" vs. "we are doing it"). Clear for listed companies, fuzzy for the average company.

**Rough scale signal:** no firm number, but ~50 people / €3M revenue floated as the point where you're too big to keep it all in your head. Create minutes of board/management meetings (an agenda with a couple of bullets per discussion point is sufficient).

**Tool / wording note:** "material decision" may confuse; people recognise "reserved/reserve matters" more readily. Consider reframing toward **board minutes**. TODO: clearly separate *board decisions* from *reserved matters* (they sometimes overlap).

### Board decisions requiring approval from another body / third party?

**What good looks like:** This is effectively the **reserved matters** question.

**Tool / wording note:** Use the term *"reserved matters"* explicitly — it resonates.

### If so, is this approval documented?

*(No separate discussion beyond the above.)*

### Roles and accountabilities of organisational bodies clearly documented?

**What good looks like:** Roles of the board, supervisory board (RvC), works council (usually absent at this stage) — the company's organs — are documented.

**Tool / wording note:** "organs of the company / vennootschap" is jargon. Plain-language it and add examples.

**Context:** one-tier vs two-tier is hard to explain to Anglo-Saxon investors. While founders run things, governance is a mishmash; real governance kicks in once an investor comes aboard — e.g. the investor must approve next year's budget, so even with a majority you effectively need their consent (they'll withhold budget approval until they like the plan).

### Documented board calendar and governance rhythm?

**What good looks like:** There is a documented board calendar and a fixed governance rhythm — recurring meetings and a reporting cadence — with ad hoc meetings only when necessary.

### Conflict of interest policy for board members?

**What good looks like:** A conflict-of-interest policy exists.

### Can the current governance structure handle another level of scale? (future-proof)

**What good looks like:** Typical path — start with an advisory board (RvA); at Series A/B you likely already have a supervisory board (RvC) and governance professionalised *on paper* — the test is whether it's actually arranged **in practice**. Crucially: internally, **who may do/sign what**.

**TODO + likely new question — the authority matrix:** an overview of who is responsible for what and who may sign what.

- Levels with thresholds, usually **area of responsibility + a monetary amount** (e.g. a marketing director signs within their marketing budget up to an amount; above that, escalate; larger budgets may come with a power of attorney).
- The framework must be **approved by board (or shareholder) resolution**.
- **Internal vs external:** even with internal arrangement, a counterparty or the KvK may require a registered (statutory) director to co-sign. Registering a power of attorney (volmacht) with the KvK gives **third-party effect (derdenwerking)**; without it, it's internal only — though *apparent authority* may still let a third party rely on a representative (with risk of hassle).
- **Why it emerges:** statutory directors are solely authorised by default; eventually everything piles on them and they blind-sign. A signing policy spreads responsibility and makes signers feel accountable. Watch both founder types: those who say *"just sign it for me"* (not allowed) and those who keep all control but sign without reading (no real control either).
- **DD angle (a real client case):** if a next round's DD asks "why is everything signed by an officer who isn't a statutory director?", the data room should show the resolution/matrix authorising it.

**TODO — split the governance questions into:** (a) generic governance of RvC/RvA/board (do you have them, combined or not?) and (b) whether **internal authority** is in order.

**Pilot example:** a client moving from board-only to establishing a supervisory board so the board are the operators (and can sign), instead of the supervisor having to sign contracts — which makes the org faster.

### Foreign entities? If so, was legal/tax advice obtained?

*(No separate discussion beyond the question itself.)*

---

## 2. Financing arrangements

### Bank facilities? / Collateral, security (pledge / mortgage)?

**What good looks like:** Separate from the funding (shareholder) structure, but relevant because **obligations flow from financing** — notification/reporting obligations to banks, and covenants (mandatory reporting if you drop below certain values).

**TODO out of this:** check loan terms for what must be reported and when; put recurring reports in the calendar (responsibility of finance).

**Note:** usually reasonably well handled, and this sits more with finance than legal — but legal should know what's in there. Add a wiki note on *why* mapping this matters.

---

## 3. Employment

### Standardized employment agreements in place?

**What good looks like:** Standardised contracts, and crucially **reviewed by a lawyer** at least once, then revisited periodically (yearly is enough). Reasons: some clauses aren't enforceable in all contract types (e.g. a non-compete), and — most often — **IP assignment by employees isn't properly safeguarded**.

**Strong recommendation:** have one employment contract checked early. The key early hires all sit on the *first* (often flawed) contract and are hard to move to stricter terms later because of the personal relationship. *(Drawn from direct scale-up experience.)*

**Tool / wording note:** if "yes," a follow-up should appear (*"reviewed by lawyers?"*) — this branching wasn't firing in the demo and needs fixing.

### Work (a lot) with freelancers? / Lawyer-reviewed templates (wet DBA)?

**What good looks like:**

- More relevant now under freelance legislation (**wet DBA**).
- **IP doesn't transfer by default** → make it explicit.
- Given enforcement risk on **false self-employment (schijnzelfstandigheid)**, include an **indemnity** so liability can be passed to the freelancer, and draft so that on paper it genuinely reads as a freelancer, not an employee. (Doesn't solve everything.)
- **Employers of record:** Remote viewed as solid (incl. Dutch payroll); mainly for remote/abroad and quickly too expensive for a whole Dutch workforce.

**Addition to add:** store any side/different terms as **addenda alongside the employment contracts**, so a DD reconciles (e.g. report shows €90k but contracts only sum to €75k).

**Common failure:** template correctly updated (e.g. 7 months → 1 year) but the **salary no longer matches** what's actually paid. At scale, move to an HRIS with per-employee files.

**Cross-domain lesson:** good, logical **folder structure / filing** — most acute for employment, but applies to every domain (incl. commercial contracts).

---

## 4. Commercial contracts

### Material client contracts based on lawyer-reviewed templates? / Material commercial contracts reviewed by counsel before signing?

**What good looks like:** Material client contracts run off lawyer-reviewed templates, and material commercial contracts (suppliers, leases, IT service providers) are reviewed by legal counsel *before* signing — not patched up afterwards.

### Process to identify when a contract deviates from standard and requires legal review?

**What good looks like:** A trigger, so non-standard contracts — exceeding a monetary threshold and/or of strategic value — get reviewed.

**Tool / wording note:** use **change-of-control clauses** as the worked example — widely understood. Value isn't necessarily renegotiating (you often have no choice) but **knowing which important contracts contain it** and consciously deciding to sign.

### Central contract register (active agreements, parties, expiry dates)?

**What good looks like:** A register tracking **parties, expiry date, change of control, etc.**

**Tooling (open question):** dissatisfaction with Legisway / Wolters Kluwer (legacy); OneTrust mentioned; **SAGA** noted as upcoming. Action: poll the GC community for the current best option (see asides).

---

## 5. Intellectual property

### Value / competitive position dependent on proprietary IP?

**What good looks like:** You have a clear view of whether your value rests on proprietary IP (brand, design, software, invention, trade secret) — because that answer determines how much of the rest of this section actually matters for you.

### Patents, trademarks, copyrights, trade secrets registered?

**What good looks like:**

- **Patents** are usually low-value unless something is truly specific/groundbreaking; expensive, and question what you're actually protecting. *(A participant's own side-project app: a peer's checklist asked about patents — verdict: probably not worth it.)*
- General steer (both noted they're not IP experts): usually better to spend time/money building a great product than locking things down — **unless your USP heavily depends on it**, in which case look closely — and it may be **brand/trademark** rather than patent.
- **Trademarks do matter:** copycats appear (seen first-hand at a prior company); registering your mark has real value and shows well in DDs. Not protecting an easily-copied brand is a **red flag in DD**.

### Registrations still valid?

**What good looks like:** Where IP is registered, the registrations are current and have not lapsed.

### Develop software in-house?

**What good looks like:**

- If built from scratch, protect it and register where possible.
- **Structure angle:** consider a **separate software BV** for an easy carve-out — this affects legal structure and contracts.
- If building for clients: license it; decide what IP you keep vs. transfers; protect your IP in client contracts.
- This is a **flag → an architecture/roadmap point**, not something the tool resolves (not IP experts).

**Tool note:** outcome should feed the roadmap (e.g. "you indicated in-house" → check A, B, C are properly arranged).

---

## 6. Privacy & AI

### Process sensitive personal data? / Privacy & cookie policy up to date, public, reviewed?

**What good looks like:** You know whether you process (sensitive) personal data (health, financial, biometric), and your privacy and cookie policies are up to date, publicly available and legally reviewed.

### Security measures to protect personal data?

**What good looks like:**

- Copy-pasting someone else's terms is **not enough** — you need internal measures so not everyone can access all data.
- Inadequate protection risks an **AP (Autoriteit Persoonsgegevens) fine** plus reputational damage; weight depends on data sensitivity (a platform holding health data = critical; selling bikes = less so).
- Context: complaints to the AP are rising (NOS article); NL is less privacy-alert than e.g. Germany, where you must have this in order.
- **Two sides:** systems in order (back door closed) — more a CISO than legal job — **plus awareness training** (most big leaks are human error). Cyber insurance almost always *requires* awareness training. Mantra: **back door closed + awareness at the front = lowest chance of real trouble**; at minimum, having a story helps.

**Tool note:** consider adding the **awareness-training** angle (currently not in).

### Data processing agreements with third parties?

**What good looks like:** Wherever third parties process personal data on your behalf, you have a data processing agreement in place with each of them.

### Rules/policies on use of AI?

**What good looks like:** e.g. the obvious-but-often-ignored bare minimum: **don't upload customer/employee databases into AI tools** (possibly acceptable on a paid enterprise account, but treat sharing with external AI as a potential data leak); ideally you have an AI governance policy stating how and when to use AI.

### Develop or deploy high-risk AI systems?

**What good looks like:** If yes, expert advice must be obtained, since the **AI Act** contains strict rules on the use of high-risk AI systems. Example: a recruitment tool that auto-screens CVs before a human is involved can be **high-risk under the AI Act** (discrimination risk) → much stricter rules.

**Tool note:** a "yes" (or building one yourself) should be a **trigger to consult an expert**.

---

## 7. Insurance & litigation

### Company insured?

**What good looks like:** Think **D&O / director liability**, professional & business liability, and — depending on size and activity — **cyber**.

### Material pending litigation?

**What good looks like:** Hard to tie to an amount; a single high-stakes settlement agreement (VSO) can be material.

**Tool / wording note:** consider **dropping "material"** — just ask "is there any litigation running?" and triage from there.

---


## Caveats

- **Context:** NL/EU; example company set to Series A/B, 
**non-regulated**. Regulated industries (fintech, healthcare) are explicitly out of scope for a general scan — those need dedicated regulatory experts.
- **Nature of the scan:** a starting point for a conversation, not a verdict — the nuance comes from filling it in *with* the CEO/CFO and sensing their risk appetite.
- **Not legal advice:** practitioner synthesis for the wiki from a Trailhead legal working session.

---

## Phase 1b extraction note (2026-06-16)

**Source:** `wiki-pipeline/sources/src-061.md`
**Atoms:** 33 extracted (`atom-266` through `atom-298`), all `extracted_by: human:trailhead-legal` (elevated weight). Knowledge attributed to Trailhead legal; filed via stefanverkerk.

| Type | Count |
|------|-------|
| target_state | 16 |
| action | 11 |
| warning_sign | 5 |
| evolution | 1 |
| tool_resource | 1 |

**Atom → wiki cell routing (for Phase 2):**

| Cell | Atoms |
|------|-------|
| **4.1 Governance & corporate** (incl. financing, commercial, insurance/litigation) | atom-266 → atom-277 (governance + financing), atom-286 → atom-288 (commercial), atom-297 → atom-298 (insurance/litigation) |
| **4.5 Internal & Labour** | atom-278 → atom-285 (employment + freelancers + EOR) |
| **4.6 Privacy & IP** | atom-289 → atom-291 (IP), atom-292 → atom-296 (privacy & AI) |

**Strong coverage:** governance discipline (board minutes, reserved matters, the authority/signing matrix + KvK derdenwerking), employment-contract hygiene (lawyer review, employee IP assignment, addenda reconciliation), commercial triggers/registers, IP posture (trademark over patent), privacy controls (access controls + awareness training, DPAs, AI Act high-risk triggers).

**Sparse / thin:** foundation-stage detail (this is a Series A/B scan — most claims land at growth, with employment/privacy basics pulled back to first-hires/early-revenue); sector-specific compliance (out of scope — non-regulated example); deep finance covenants (sits with financial-ops).

**Not extracted as atoms (by design):** the "Tool / wording note" items throughout are diagnostic/`processes.json` changes (drop "correctly", use "reserved matters", fix the yes→"reviewed by lawyers?" branching, the new authority-matrix question, drop "material" on litigation, add the awareness-training angle). These belong in the diagnostic backlog, not the wiki claim set.

**Generalisability limits:** NL/EU throughout (BV, KvK, wet DBA, AP, AI Act); example company is non-regulated Series A/B. Cross-links to existing wiki work: signing authority (4.1), salary addenda (3.1).
