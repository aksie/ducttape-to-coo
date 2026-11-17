---
entry: strategic-ops/who-decides-what/early-revenue
last_updated: 2026-10-06 16:20
---

## Backfill, not a review — 2026-08-10

Every claim in this file is `pending`, and that is deliberate.

`wiki/processes/strategic/1.4--early-revenue.md` is **published and live**. It was written directly
on the wiki (reinforced in `f7e884e`), reworded by the readability pass at 16:30 and edited again at
17:05, and it was the only published 1.4 stage with no pipeline entry behind it. This entry was
backfilled afterwards by mapping each published bullet to the atoms and claims it already came from
— see `trail.md`. Claim IDs run in page order.

No human has reviewed these claims one at a time in the approval tool. The sibling entries could
record their readability pass as `approved_with_edit`, because their claims had genuinely been
reviewed first, in 2026-06 and 2026-08, and the pass only changed wording afterwards. Nothing
equivalent happened here, so marking these `approved` would assert a review that never took place.
`pending` is the honest status: the text is live, and the review debt is real and now visible.

**Before you run phase 4 against this entry, read this.** `prompts/phase-4-publish.md` omits
`pending` claims, so publishing from this entry today would empty a live page. The published text is
preserved verbatim in `draft.md`, so the entry reproduces the page as it stands — but the intended
next step is Phase 3 (review each claim at `localhost:8765`), not Phase 4.

**The 17:05 edit.** The consult-then-decide principle was rewritten to add that power and
responsibility travel together, and moved from position 4 to position 2. Principle 1 stays verbatim
— the maintainer ruled accountability-and-authority a distinct idea — so the preamble still holds
five and c-001 was not touched. The two claims now share part of one src-070 lineage on purpose. No
source comment moved and nothing was orphaned; see `trail.md`, "The 17:05 edit". The same edit gave
the ABC decision map its origin credit, which lands on c-006.

`Reviewer notes` on each block records where the claim came from, in one line, so a reviewer opening
the tool sees the lineage without leaving the claim. The full mapping is in `trail.md`.

## Cross-page alignment pass — 2026-10-06

Four maintainer-approved changes, applied across all four published 1.4 stages. This file is edited
in place rather than appended to: `server.py` splits claim blocks on `### c-NNN` and counts statuses
file-wide with `^-\s*Status:`, so a duplicate claim header would leave two blocks for one claim and
inflate the reviewed/total summary. This section sits above the first claim block, where the parser
treats it as preamble and ignores it, and it contains no status lines.

Three of the four changes landed on this page. The preamble was **not** one of them — this page's
17:05 preamble is the template the other three pages were aligned to, so items 1 to 5 here are
untouched, and principle 1 in particular stays verbatim.

What changed on the page, and which claims own it:

| Change | Claim | Effect on the review record |
|---|---|---|
| The carry-forward paragraph's ABC credit was reworded from naming Andres Perea alone to the agreed three-source framing (Ascent synthesised with Ramp's and Mercury's variants), and gained the Bucket B divergence clause. Its comment gained `Ramp founders agreement, Mercury cofounder prenup`. | c-006 | Published wording changed, so the block below moves to `approved_with_edit` with the new paragraph in `Edited claim text`. |
| `src-064 (anonymous-practitioner)` dropped from the source comment, after re-reading atom-368 to atom-372 and confirming none of them covers gathering dissent in the room or the 48-hour codification rule. | c-012 | Attribution only — no published wording changed, so the status stays `approved` and the original review record stands. The `UNRESOLVED` note is replaced with the resolution. |
| `src-064 (anonymous-practitioner)` added to the source comment, because the "C-level allegiance" phrase in the link text is growth c-001 via atom-369, which is src-064. | c-021 | Attribution only — status stays `approved`, note updated the same way. |
| The "Second pass 2026-08-10 17:05…" provenance paragraph was deleted from the page's `## Sources` section and the information kept in `trail.md`. | none | `## Sources` is generated at publish time and is not reproduced in `draft.md`, so no claim owns it. |

`draft.md` is this entry's verbatim copy of the published page and was re-synced with the same three
edits. The review debt flagged in the backfill note above is unchanged by this pass: these claims
still have not been walked one at a time in the approval tool.

**Follow-up, 2026-10-06 — pipeline bookkeeping was removed from the page body.** The maintainer
extended the provenance-paragraph deletion above to every sentence on the four 1.4 pages written for
the pipeline rather than for a founder. Reader-facing source credits and the links that expose the
pipeline trail are not in that class and stayed. Four pieces went from this page's `## Sources`
section — two sentences out of the opening paragraph, the review tally after the `Pipeline entry:`
link, the closing addenda paragraph and one parenthetical — and all four are recorded verbatim in
`trail.md` under this pass. The opening credit to src-063 and src-070, and the `Pipeline entry:`
link itself, are untouched.

One of them bears on this file directly. The page claimed "all 23 claims reviewed in the approval
tool on 2026-08-24 (c-015 approved with edit — Holacracy/heavy-methodology examples dropped)". The
entry holds 26 claims, and since the change above c-006 is a second `approved_with_edit`, so the
sentence was wrong on both counts. It is not restated anywhere; this file's per-claim `Status`,
`Reviewed by` and `Reviewed date` lines are the record, and `server.py` counts them, so there is no
longer a hand-maintained copy to drift. No claim block changed for any of this — `## Sources` is
generated at publish time and no claim owns it.

### c-001
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Published as principle 1 of the preamble, verbatim and untouched by the 17:05 edit. Origin: src-070 via atom-435 (early-revenue) and atom-424 (why); same principle as first-hires c-020."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-20 15:28
- Edited claim text: null

### c-002
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Published as principle 2, rewritten and promoted from position 4 at 17:05. Origin: src-063 via atom-306 (consult duty, first-hires c-003 / c-004) and src-070 via atom-461 (growth c-013) plus atom-424 for the power-and-responsibility clause, which is also c-001's. Source comment unchanged and still correct for both halves."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:42
- Edited claim text: null

### c-003
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Published as principle 3; moved down from position 2 at 17:05, text unchanged. Origin: src-063 via atom-306; generalises first-hires c-007 and c-009."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:42
- Edited claim text: null

### c-004
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Published as principle 4; moved down from position 3 at 17:05, text unchanged. Origin: src-063 via atom-306 and src-070 via atom-437; same idea as first-hires c-008 and growth c-006 / c-012."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:43
- Edited claim text: null

### c-005
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Published as principle 5 of the preamble. Origin: src-070 via atom-430, atom-432, atom-425 — all first-hires or growth phase, no early-revenue atom; same idea as first-hires c-022 / c-023 and growth c-017."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:43
- Edited claim text: null

### c-006
- Status: approved_with_edit
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Published as the carry-forward paragraph. Origin: src-063 via atom-306, carrying first-hires c-007 (ABC map), c-003 (named decider + consult duty) and c-002 (visible approval list). At 17:05 it gained the ABC credit — the three buckets are step 3 of Andres Perea's founders'-agreement guide at Ascent Incubator, cited through src-063's Track C bibliography, matching the Ascent ABC string first-hires c-007 already carried. Cross-page alignment pass 2026-10-06: the credit was brought in line with the agreed framing — naming one person for a three-source synthesis was the thing being fixed — so it now reads as an adaptation of Perea's buckets synthesised with Ramp's and Mercury's variants, with the Bucket B divergence stated in one clause because this paragraph specifies the bucket rules. The comment gained Ramp founders agreement and Mercury cofounder prenup, both entries in src-063's Track C bibliography. The src-063 attribution is unchanged: the buckets are Perea's, the version on this page is src-063's synthesis of them."
- Reviewed by: "aksie"
- Reviewed date: 2026-10-06 15:40
- Edited claim text: **Carried over unchanged from earlier stages:** the ABC decision map (domain owner decides after consulting / discuss then tie-break / unanimous), a named decider who has to consult before closing anything, and one visible list of what still needs founder OK — hiring, spend above €X, pivots — against what the owner of the work decides alone. The three buckets adapt [Andres Perea's founders'-agreement guide at Ascent Incubator](https://ascentincubator.com/legal-administrative/founders-agreements-the-founder-prenup-that-prevents-cofounder-conflict-and-speeds-up-mvp-execution/), synthesised here with Ramp's and Mercury's variants — Ascent's Bucket B is a majority vote, not a tie-break. The version this wiki uses lives in [1.4 — First Hires](1.4--first-hires.md). Early revenue extends the same pattern from founders to area owners: product, engineering, sales/GTM, and ops.
  <!-- sources: src-063 (synthesis), Ascent ABC (Andres Perea), Ramp founders agreement, Mercury cofounder prenup -->

### c-007
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Origin: src-063 via atom-306, plus the 1.4 early-revenue stage focus in data/processes.json; this is the stage-native form of what first-hires c-016 predicts."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:43
- Edited claim text: null

### c-008
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Origin: src-063 via atom-306 (with the HSG bibliography string it shares with first-hires c-016) and src-070 via atom-434. The readability pass merged two published bullets into this one; growth c-007 is the executive version of closing against dissent. This is the stage mechanic that principles c-001 and c-002 state in the abstract."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:44
- Edited claim text: null

### c-009
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Origin: src-070 via atom-437; growth c-006 is the same claim at executive scale, and it narrows principle c-004."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:44
- Edited claim text: null

### c-010
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Origin: src-070 via atom-442; growth c-008 is the long version and growth c-015 the warning mirror. Deliberately one sentence plus a link — see open question 4 of the readability pass."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:44
- Edited claim text: null

### c-011
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Origin: src-063 via atom-306, with the reStruggle bibliography string; same artefact as first-hires c-007, one stage on. atom-439 says the same thing but is src-070, which this bullet does not claim, so it was left unattached."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:44
- Edited claim text: null

### c-012
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Origin: src-063 via atom-306, carrying first-hires c-003 / c-004 (consult then decide) and c-010 (codify within 48h). RESOLVED 2026-10-06: src-064 dropped from the source comment. Re-read of atom-368 to atom-372 confirmed the gap — they cover founders aligning by talking, playing for the highest team, returning out-of-domain debates to the owner, functional advocacy and people-pleasing local optimisation, and none covers gathering dissent in the room or the 48-hour rule. Attribution only; no published wording changed, so this claim keeps its original review record."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:45
- Edited claim text: null

### c-013
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Origin: src-063 via atom-306 (its HSG reversibility material) and src-070 via atom-437; growth c-012 is the per-role version. The pass replaced the one-way / two-way door metaphor with plain wording."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:45
- Edited claim text: null

### c-014
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Origin: src-070 via atom-443; growth c-011 is the long version with the three pre-role checks. Kept short here on purpose."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:47
- Edited claim text: null

### c-015
- Status: approved_with_edit
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Origin: src-063 via atom-306 (formalisation trigger, reStruggle) and src-070 via atom-432 with atom-425 as why. Absorbed the page's standalone premature-framework warning during the readability pass; first-hires c-023 and growth c-017 keep theirs. No early-revenue atom states this warning."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:49
- Edited claim text: **Formalise when you add the page, not when you're already in conflict** — trigger: decisions get re-opened weekly, or two teams block each other on the same priority. That is the signal for named owners + thresholds, not a headcount rule alone — and what you add is that one page, not an imported rulebook: a full RACI matrix (a grid naming who is responsible, accountable, consulted and informed for every task) costs more than they return before the room actually stops working.
   <!-- sources: src-063 (synthesis), reStruggle ~15–25, src-070 (serial-ceo) -->

### c-016
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Warning category: output_quality. Origin: src-063 via atom-306, plus the stage focus in data/processes.json; it is the symptom form of c-008 and of first-hires c-016, and it shares ground with first-hires c-013. No src-070 warning atom covers it."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:49
- Edited claim text: null

### c-017
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Warning category: output_quality. Origin: src-070 via atom-445; first-hires c-024 and growth c-018 are the same symptom at the stages either side, each from its own atom."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:49
- Edited claim text: null

### c-018
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Warning category: founder_time. Origin: src-070 via atom-448. The only claim on this page with no equivalent elsewhere in 1.4 — the growth-phase version, atom-468, was deferred to the 3.2 @ growth cell."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:50
- Edited claim text: null

### c-019
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. A pointer, so its origin is what it points at: growth c-001 (atom-369, src-064), growth c-006 (atom-453) and growth c-012 (atom-460). atom-450, the early-revenue evolution atom about a standing coordination role at ~40+, is not on the page."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:50
- Edited claim text: null

### c-020
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Navigational link. Origin: src-063 via atom-306; the link text names first-hires c-002, c-003 and c-007. The ABC credit sits on c-006 so it appears once on the page."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:50
- Edited claim text: null

### c-021
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Navigational link. Origin: src-070 via atom-453 (growth c-006) and atom-462 (growth c-014). RESOLVED 2026-10-06: src-064 added to the source comment and atom-369 promoted into the trail's supporting atoms, because the 'C-level allegiance' phrase in the link text is growth c-001, which is src-064 via atom-369. 'Two decision paths' and 'executive handover' stay src-070. Attribution only; no published wording changed, so this claim keeps its original review record."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:50
- Edited claim text: null

### c-022
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Navigational link, and the only claim here sourced outside src-063 / src-070. Origin: src-061 via atom-271, atom-275 and atom-266 — legal-and-other-ops/governance-corporate/growth c-003, c-009 and c-001."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:50
- Edited claim text: null

### c-023
- Status: approved
- Flags: []
- Reviewer notes: "Backfilled 2026-08-10, never reviewed claim-by-claim. Navigational link. Origin: src-063 via atom-306 — src-063's own url field is this proposal document; same link as first-hires c-017."
- Reviewed by: "aksie"
- Reviewed date: 2026-08-24 11:51
- Edited claim text: null

### c-024
- Status: approved
- Flags: []
- Reviewer notes: "Addendum 2026-09-16: ported from founder-gap-theory/convincing-founders-to-change c-006 (approved aksie 2026-09-16)."
- Reviewed by: "aksie"
- Reviewed date: 2026-09-16 16:21
- Edited claim text: null

### c-025
- Status: approved
- Flags: []
- Reviewer notes: "Addendum 2026-09-16: ported from founder-gap-theory/convincing-founders-to-change c-013 (approved aksie 2026-09-16)."
- Reviewed by: "aksie"
- Reviewed date: 2026-09-16 16:29
- Edited claim text: null

### c-026
- Status: approved
- Flags: []
- Reviewer notes: ""
- Reviewed by: "aksie"
- Reviewed date: 2026-09-19 18:02
- Edited claim text: null
