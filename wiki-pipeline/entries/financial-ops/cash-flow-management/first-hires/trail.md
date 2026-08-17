---
entry: financial-ops/cash-flow-management/first-hires
process_id: "2.1"
phase: first-hires
primary_sources: src-065, src-067, src-068, src-072, src-073, src-005
last_updated: 2026-08-10
---

# Trail — Cash Flow Management / First Hires (2.1)

**Synthesis note:** New draft (Mode A) from Phase 1 extraction batch 2026-08-10. Atoms `atom-537`–`559` plus reuse `atom-411`, `414`, `422`. No prior-stage pipeline entry for carry-forward (foundation wiki exists but was not pipeline-synthesised). **Deliberate split from 2.2:** triggers, P&L structure, IFTTT list stay in `financial-planning-budgeting/first-hires/`; this entry owns Cash tab, runway math, cadence, payroll timing, team visibility. Cross-refs: **2.2** (sheet + triggers), **2.4** (categories for variance), **3.1** / **4.5** (NL payroll timing).

**Corpus health:** `wiki-pipeline/corpus_health-financial-ops-first-hires-cash-flow-management.md`

---

### c-001: Cash tab aligned with main P&L
- Section: what_good_looks_like
- Supporting atoms: atom-537, atom-543
- Primary source: src-065
- Synthesis notes: Merged target_state + tool_resource; cross-ref 2.2 for sheet ownership.

### c-002: 3–6 month forward cash view
- Section: what_good_looks_like
- Supporting atoms: atom-539
- Primary source: src-065

### c-003: Runway known + sub-6mo named response
- Section: what_good_looks_like
- Supporting atoms: atom-540
- Primary source: src-065
- Cross-ref: 2.2 trigger list for response actions (not duplicated here).

### c-004: Zero-revenue survival assumption
- Section: what_good_looks_like
- Supporting atoms: atom-550
- Primary source: src-068
- Synthesis notes: VC source; triangulated with src-065 downside / zero-revenue theme in 2.2 c-014. Not vendor-only.

### c-005: Cash visible beyond CEO
- Section: what_good_looks_like
- Supporting atoms: atom-556, atom-555
- Primary source: src-073
- Synthesis notes: Inverts 2.2 warning c-015 (CEO-only numbers) from cash-visibility angle; HN + practitioner alignment.

### c-006: Build Cash tab
- Section: what_to_do
- Supporting atoms: atom-537, atom-543
- Primary source: src-065
- Cross-ref: 2.2 for main tab and People tab.

### c-007: True monthly burn
- Section: what_to_do
- Supporting atoms: atom-544
- Why-source: atom-548 (payroll compounds monthly)
- Primary source: src-067

### c-008: Runway before/after every hire
- Section: what_to_do
- Supporting atoms: atom-546, atom-541
- Primary source: src-065, src-067
- Synthesis notes: Merged practitioner + under30ceo table into one numbered step.

### c-009: Monthly update; weekly when tight
- Section: what_to_do
- Supporting atoms: atom-538, atom-557
- Primary source: src-065, src-005
- Synthesis notes: 18-month threshold from HN; "cash lumpy" from practitioner weekly-when-tight.

### c-010: Payroll timing with accountant
- Section: what_to_do
- Supporting atoms: atom-559, atom-422
- Primary source: src-065
- Cross-ref: 3.1, 4.5 for NL detail (not duplicated).

### c-011: Execute sub-6mo trigger from 2.2
- Section: what_to_do
- Supporting atoms: atom-540
- Primary source: src-065
- Synthesis notes: Action lives here; trigger table content stays in 2.2 — link only.

### c-012: Share cash/burn/runway with team
- Section: what_to_do
- Supporting atoms: atom-555
- Primary source: src-073
- Synthesis notes: Separate from c-005 (target) — explicit action for ~7–10 headcount.

### c-013: Burn unknown ±20%
- Section: warning_signs / output_quality
- Warning category: output_quality
- Supporting atoms: atom-558
- Primary source: src-005

### c-014: Debt line in runway
- Section: warning_signs / output_quality
- Warning category: output_quality
- Supporting atoms: atom-411, atom-551
- Primary source: src-065, src-068
- Synthesis notes: atom-411 deferred from 2.2 trail; Hayes triangulation.

### c-015: Hire without runway modeling
- Section: warning_signs / output_quality
- Warning category: output_quality
- Supporting atoms: atom-547
- Primary source: src-067

### c-016: Can't answer hire cash impact in a day
- Section: warning_signs / output_quality
- Warning category: output_quality
- Supporting atoms: atom-414
- Primary source: src-065
- Synthesis notes: Reused from src-065 batch; was 2.2 c-016 — placed here as cash-specific warning.

### c-017: Bad hire burns 2–3 months runway
- Section: warning_signs / founder_time
- Warning category: founder_time
- Supporting atoms: atom-553
- Why-source: atom-554 (wrong hire worse than no hire when runway short)
- Primary source: src-072

### c-018: CEO-only cash numbers
- Section: warning_signs / founder_time
- Warning category: founder_time
- Supporting atoms: atom-413 (src-065), atom-556 (inverse signal)
- Primary source: src-065, src-073
- Synthesis notes: atom-413 from original 2.2 extraction — cash visibility framing for 2.1.

### c-019: Think you know burn but can't state it
- Section: warning_signs / process_entry
- Warning category: process_entry
- Supporting atoms: atom-545
- Primary source: src-067

### c-020: Early revenue — rolling 12-month forecast
- Section: evolution
- Supporting atoms: atom-542
- Primary source: src-065

### c-021: Google Sheet (same as 2.2)
- Section: tools
- Supporting atoms: atom-543
- Primary source: src-065

### c-022: Accountant for payroll timing
- Section: tools
- Supporting atoms: atom-422, atom-559
- Primary source: src-065

---

## Dropped atoms

| Atom | Reason |
|---|---|
| atom-548 | Incorporated as why-source in c-007 (payroll compounds) — not standalone claim |
| atom-554 | Incorporated as why-source in c-017 — not standalone claim |
| atom-549 | Post-raise 18-month plan — merged into Phase 4 context variant for venture-backed; optional addendum if reviewer wants as action claim |
| atom-552 | Share cash plan with investors — deferred to context variant / 1.2b cross-ref; c-012 covers internal team share |
| atom-410 | Optimistic revenue in base case — owned by **2.2** c-014, not duplicated |
| atom-405 | Fundraise prep trigger row — owned by **2.2** c-008, referenced via c-003/c-011 |
| atom-406, atom-407 | Trigger list co-write / nasty shock — **2.2** only |
| atom-393–402, atom-408–409, atom-412, atom-415–416 | Financial planning / IFTTT — **2.2** synthesis |
| src-066 | Milestone-linked hiring — registered for **2.2** addendum, not extracted for 2.1 |

## Phase 4 notes (for publisher)

- **Context variants** (from stub + dropped VC atoms): bootstrapped → weekly cadence critical, debt N/A; venture-backed → exclude debt from runway (c-014), post-raise 18-month plan (atom-549), share plan with investors (atom-552).
- **`stage_focus` candidate:** "Keep a Cash tab updated monthly — weekly when runway is tight. Model runway before every hire."
- **Foundation carry:** foundation wiki already points here; no pipeline carry-forward table needed.
