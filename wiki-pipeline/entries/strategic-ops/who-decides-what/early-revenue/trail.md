---
entry: strategic-ops/who-decides-what/early-revenue
process_id: "1.4"
phase: early-revenue
primary_source: src-063
batch_addendum: src-070
last_updated: 2026-08-10
---

# Trail — Who Decides What / Early revenue (1.4)

**Backfill note (2026-08-10).** This entry was created *after* its page was published, which is the
reverse of the normal order. `wiki/processes/strategic/1.4--early-revenue.md` was written directly on
the wiki (reinforced in `f7e884e`), reworded by the readability pass at 16:30 and edited again at
17:05; it was the only published 1.4 stage with no pipeline entry behind it. Open question 5 of
`docs/proposals/1.4-readability-pass.md` asked whether to backfill; this is that backfill, mapped
against the 17:05 text.

**Method — mapping, not extraction.** The page was reworded, never changed in substance, so no claim
here is newly derived. For each published bullet the mapping ran in this order:

1. Read the bullet's own `<!-- sources: ... -->` comment. Those comments are treated as correct and
   are the primary evidence for attribution.
2. Trace that attribution to a real record — an atom in `wiki-pipeline/atoms/`, or a claim already
   approved in the `first-hires/`, `growth/` or `scaled/` entry of this same subprocess.
3. Where the bullet is a reworded expression of a claim that already exists at another stage, the
   `Equivalent claim` field names that claim ID. A claim can legitimately appear at more than one
   stage; recording the shared origin is the point of this file, not minting a parallel lineage.
4. Where nothing could be traced, the claim says so in `Origin not established` and is listed again
   at the bottom of this file. No atom ID and no source was invented to close a gap.

**Fields used below.** `Supporting atoms` lists only atom IDs that genuinely support the claim, so
the approval tool resolves them. `Equivalent claim` is not parsed by the tool — it is the record of
the shared origin. `Attribution strings` records the non-`src-NNN` parts of a bullet's source
comment (bibliography entries cited through src-063, or `data/processes.json`), which are real but
are not pipeline records.

**Claim IDs run in page order**, top to bottom, and were assigned in this backfill. Nothing outside
this entry referenced them before now.

**Phase note.** Claims c-001 to c-006 publish above the first `##`, as the principles preamble and
the carry-forward paragraph. They therefore have no section header in front of them and
`server.py` reports their section as empty. `Section:` below records where they actually sit.

---

## The 17:05 edit — what changed on the page

Two changes, both applied before this mapping was written, so the trail describes the page as it now
stands rather than as the readability pass left it.

**1. The consult-then-decide principle was rewritten and moved to position 2.** Its new text also
states that power and responsibility travel together. The preamble still holds five items and
principle 1 is unchanged — the maintainer's instruction was explicit that accountability-and-
authority is a different idea at its core, so it was neither dropped nor tightened. The effect on
the order:

| Position now | Idea | Position at 16:30 |
|---|---|---|
| 1 | Accountability and authority travel together | 1 — verbatim, untouched |
| 2 | Consult, then decide — and power and responsibility travel together | 4 — rewritten |
| 3 | Decide who decides before you need it | 2 |
| 4 | A decision you can walk back deserves less process | 3 |
| 5 | Formalise only when the informal version breaks | 5 |

No source comment moved. The rewritten principle 2 keeps `src-063 (synthesis), src-070
(serial-ceo)`, which already covered both halves of what it now says: src-063 for the consult duty
(atom-306) and src-070 for accountability paired with authority (atom-424, atom-435). Because
principle 1 stays on the page, nothing was orphaned — c-001 and c-002 deliberately share part of one
src-070 lineage, and both are recorded below.

**2. The ABC decision map now credits its origin.** The three buckets are step 3 of the Ascent
Incubator founders'-agreement guide, written by Andres Perea. That article is cited through
`src-063`'s Track C bibliography and has no `src-NNN` file of its own, so the credit is recorded as
an attribution string, exactly as first-hires c-007 already records `Ascent ABC`. See "ABC decision
map — origin" at the end of this file for the evidence.

---

## Principles preamble — c-001 to c-005

The preamble is the five durable principles of `docs/proposals/1.4-readability-pass.md` section B,
with principle 4 rewritten and promoted on 2026-08-10 at 17:05. Every 1.4 page opens with these
five, and every one is a generalisation of claims that were already approved elsewhere. The
`scaled/` entry's trail records the same set under its own readability-pass section; the mapping
below agrees with it and adds the early-revenue atoms where the practitioner stated the principle at
this stage specifically.

### c-001: Accountability and authority travel together
- Section: principles_preamble (page principle 1)
- Supporting atoms: atom-435, atom-424
- Primary source: src-070 (serial CEO practitioner)
- Equivalent claim: first-hires c-020 (`atom-424`); scaled preamble principle 1 (carried from first-hires c-020)
- Why-source: atom-424 (the root failure when responsibility and decision rights are split)
- Synthesis notes: atom-435 is the early-revenue statement of the same principle — "accountability and authority sit with the same person or team once you're past the one-room phase" — and had not been used by any entry before this backfill. It is the reason this page can carry the principle in its own right rather than only as a carry-forward from first-hires. Kept verbatim through the 17:05 edit: c-002 now mentions the same pairing, but this claim is the standalone statement of it and the maintainer ruled the two ideas distinct.

### c-002: Consult, then decide — and power and responsibility travel together
- Section: principles_preamble (page principle 2)
- Supporting atoms: atom-306, atom-461, atom-424
- Primary source: src-063 (synthesis) + src-070 (serial CEO practitioner)
- Equivalent claim: first-hires c-003, first-hires c-004 (`atom-306`) — the consult duty and the consult → decide → commit close; growth c-013 (`atom-461`) — "who did you check with?" coaching; first-hires c-020 (`atom-424`) for the power-and-responsibility clause, which is also this page's c-001; scaled preamble principle 4
- Synthesis notes: rewritten at 17:05 from "Consult, then decide — don't decide by committee." The added clause states that the named person then has the power to decide, which is the src-070 accountability-requires-authority material rather than anything new — atom-424 is therefore listed here as well as on c-001. That overlap is deliberate and was the maintainer's call. atom-461 is the growth-phase consult atom; no early-revenue consult atom exists, which is why the src-070 half of the source comment resolves to growth-phase records.

### c-003: Decide who decides before you need it
- Section: principles_preamble (page principle 3)
- Supporting atoms: atom-306
- Primary source: src-063 (synthesis)
- Equivalent claim: first-hires c-007, first-hires c-009; scaled preamble principle 2
- Synthesis notes: the "agree the map before the fork" spine of src-063 — write the ABC map and answer Grove's six questions before you need them. Same mapping the first-hires trail records for its own principle 2 and the scaled trail records for principle 2. Moved from position 2 to 3 at 17:05; text unchanged.

### c-004: A decision you can walk back deserves less process than one you can't
- Section: principles_preamble (page principle 4)
- Supporting atoms: atom-306, atom-437
- Primary source: src-063 (synthesis) + src-070 (serial CEO practitioner)
- Equivalent claim: first-hires c-008 (`atom-306`); growth c-006, growth c-012 (`atom-453`, `atom-460`); scaled preamble principle 3
- Synthesis notes: the sentence that replaced the Type 1 / Type 2 labels wiki-wide. atom-437 is the early-revenue half — reversible calls sit with the domain owner — and is the same atom that supports c-009 and c-013 on this page. The dual `src-063 (synthesis), src-070 (serial-ceo)` comment matches the dual lineage exactly. Moved from position 3 to 4 at 17:05; text unchanged.

### c-005: Formalise only when the informal version visibly breaks
- Section: principles_preamble (page principle 5)
- Supporting atoms: atom-430, atom-432, atom-425
- Primary source: src-070 (serial CEO practitioner)
- Equivalent claim: first-hires c-022, first-hires c-023 (`atom-430`, `atom-432`); growth c-017 (`atom-466`); scaled preamble principle 5
- Why-source: atom-425 (principles from these frameworks are useful; the full systems become theatre)
- Synthesis notes: all supporting atoms are phase `first-hires` or `growth` — src-070 stated this principle at the stages either side of early revenue, never at early revenue itself. That is a phase mismatch, not a missing origin: the principle is durable by design and the page carries it as a preamble line rather than as stage-specific content.

### c-006: Carry-forward paragraph — ABC map, named decider with a duty to consult, one visible approval list
- Section: carry_forward_paragraph
- Supporting atoms: atom-306
- Primary source: src-063 (synthesis)
- Attribution strings: `Ascent ABC (Andres Perea)` — the Ascent Incubator founders'-agreement guide, cited through src-063's Track C bibliography; added to the source comment at 17:05 when the page started crediting the map
- Equivalent claim: first-hires c-007 (ABC map + one-page approval list — its comment already carried `Ascent ABC`), first-hires c-003 (named decider + consult duty), first-hires c-002 (visible founder approval list)
- Synthesis notes: the src-063 attribution is the one today's readability pass established and wrote into the page's own `## Sources` note — all three mechanics sit under src-063 via atom-306 in the first-hires trail. Before that pass these were three bullets in a non-standard `## What still applies from earlier stages` section carrying **no source comments at all**. The 17:05 edit added the external credit and a link to the underlying article; the src-063 attribution is unchanged, because the wiki's ABC map is src-063's adaptation of Ascent's buckets rather than a copy of them. Per open question 2 of the readability pass, one combined comment for three folded claims is still an unresolved convention.

---

## What good looks like at this stage — c-007 to c-010

### c-007: Named decision owner per area + written escalation thresholds
- Section: what_good_looks_like
- Supporting atoms: atom-306
- Primary source: src-063 (synthesis)
- Attribution strings: `processes.json 1.4 stageFocus` — the `1.4 / early-revenue` stage focus in `data/processes.json`, a real record but not a pipeline atom
- Equivalent claim: first-hires c-016 — "At early revenue, name a decision owner per area and add escalation thresholds"
- Synthesis notes: this is the stage-native statement of what first-hires c-016 predicts. src-063's own Evolution line reads "Early-revenue: named owner per area + escalation thresholds", and atom-306 carries `applies_to_stages: [early-revenue, growth]`, so the super-atom legitimately reaches this stage.

### c-008: Founders give input; the area owner decides, and can decide against dissent
- Section: what_good_looks_like
- Supporting atoms: atom-306, atom-434
- Primary source: src-063 (synthesis) + src-070 (serial CEO practitioner)
- Attribution strings: `HSG seed article` — a Track A bibliography URL cited through src-063, not a separate source file; it travels with first-hires c-016, whose comment carries the same string
- Equivalent claim: first-hires c-016 (the "founders give input, area owner decides" half); growth c-007 (`atom-454`) — the executive version of closing against dissent
- Synthesis notes: the readability pass merged the old good-looks-like bullets 2 and 4 into this one bullet, and both halves are recorded here rather than as two claims — the page has one bullet, so this entry has one claim. atom-434 supplies the script *"I hear you, but I'm deciding — it's my responsibility."* Growth c-007 softens the same close to "I've been heard"; same idea, two stages, two phrasings. This is the stage-specific mechanic that principles c-001 and c-002 state in the abstract.

### c-009: Decisions the area owner can walk back stay with the area owner
- Section: what_good_looks_like
- Supporting atoms: atom-437
- Primary source: src-070 (serial CEO practitioner)
- Equivalent claim: growth c-006 (`atom-453`) — the growth-stage "two decision paths"; also narrows this page's own principle 4 (c-004)
- Synthesis notes: the €30k reversible-spend example is the page's, carried from the pre-pass version. The pass replaced "Reversible decisions" with "Decisions the area owner can walk back" — wording only.

### c-010: Roles built to push against each other sit on different people
- Section: what_good_looks_like
- Supporting atoms: atom-442
- Primary source: src-070 (serial CEO practitioner)
- Equivalent claim: growth c-008 (`atom-455`) — the CEO/CFO version; growth c-015 (`atom-463`) — the warning mirror
- Synthesis notes: shortened to one sentence plus a link to growth by the readability pass, per its section D item 4. "P vs Q" was spelled out as pricing versus volume marketing. This is one of the three ideas the pass deliberately keeps long at one stage and short at the others (open question 4).

---

## What you actually need to do — c-011 to c-015

### c-011: Write one page — named owner per area + escalation thresholds
- Section: what_to_do
- Supporting atoms: atom-306
- Primary source: src-063 (synthesis)
- Attribution strings: `reStruggle ~15–25` — a Track A/B bibliography URL cited through src-063 ("formalise at 15–25 people"), not a separate source file
- Equivalent claim: first-hires c-007 (the same artefact one stage earlier — one page, approval list, ABC map); first-hires c-016
- Synthesis notes: the action form of c-007. atom-439 (src-070, "when you put something on paper, name who decides — and mean it") says the same thing and is *not* claimed by this bullet's source comment, which cites src-063 only. It is left unclaimed rather than added, so the trail does not attribute more than the page does — see "Atoms available at this stage but not on the page" below.

### c-012: Run meetings with founder input and an area-owner decision; codify within 48h
- Section: what_to_do
- Supporting atoms: atom-306
- Primary source: src-063 (synthesis)
- Equivalent claim: first-hires c-003, first-hires c-004 (consult → decide → commit); first-hires c-010 (codify within ~48 hours per 1.3)
- Origin not established: the `src-064 (anonymous-practitioner)` half of this bullet's source comment. src-064's atoms are atom-368 to atom-372, and none of them covers gathering dissent in the room or the 48-hour codification rule. The nearest is atom-370 / growth c-002 — "return a debate outside your domain to the domain owner" — which is adjacent but is not what this bullet says. Recorded as unresolved rather than mapped to atom-370.
- Synthesis notes: the src-063 half is solid and covers the whole bullet on its own. This is the meeting-level mechanic behind principle c-002.

### c-013: Mark which decisions are cheap to reverse and which are hard to undo
- Section: what_to_do
- Supporting atoms: atom-306, atom-437
- Primary source: src-063 (synthesis) + src-070 (serial CEO practitioner)
- Equivalent claim: growth c-012 (`atom-460`) — write down per role what counts as a valid block on the calls you can't walk back; growth c-006 (`atom-453`); narrows this page's principle 4 (c-004)
- Synthesis notes: the readability pass cut the one-way / two-way door metaphor and the "becomes explicit Type 1 / Type 2 at growth" forward reference, and moved the worked examples here from the deleted good-looks-like bullet 5. Same claim, plain wording. The reversibility idea inside src-063 comes from its HSG Track A entry.

### c-014: Assign missions, not permanent identity
- Section: what_to_do
- Supporting atoms: atom-443
- Primary source: src-070 (serial CEO practitioner)
- Equivalent claim: growth c-011 (`atom-459`, why-source `atom-426`) — the long version with the three pre-role checks
- Synthesis notes: kept as the short version here on purpose (readability pass section D item 6). Untouched by both passes.

### c-015: Formalise at the trigger, and add one page rather than an imported rulebook
- Section: what_to_do
- Supporting atoms: atom-306, atom-432, atom-425
- Primary source: src-063 (synthesis) + src-070 (serial CEO practitioner)
- Attribution strings: `reStruggle ~15–25` — as in c-011, the formalisation-trigger citation inside src-063
- Equivalent claim: first-hires c-023 (`atom-432`) and growth c-017 (`atom-466`) — the standalone premature-framework warnings that this clause replaces at this stage; narrows this page's principle 5 (c-005)
- Why-source: atom-425 (principles from these frameworks are useful; the full systems become theatre)
- Synthesis notes: the readability pass folded early revenue's standalone `### Process entry` warning ("Premature RACI, Holacracy, or heavy project methodology", commented `src-070 (serial-ceo), src-063 (synthesis)`) into this action as a clause, and kept the standalone warnings at first-hires and growth. The RACI gloss was added here because this is the only use of the acronym on the page. No early-revenue atom states the premature-framework warning — atom-432 is phase `first-hires` and atom-466 is phase `growth` — so the atoms carry the right source but not the right phase.

---

## Warning signs you're behind — c-016 to c-018

### c-016: Decisions get re-litigated because a founder wasn't in the meeting
- Section: warning_signs
- Warning category: output_quality
- Supporting atoms: atom-306
- Primary source: src-063 (synthesis)
- Attribution strings: `processes.json 1.4 stageFocus` — the stage focus states the target ("decisions don't re-open because a founder wasn't there"); this bullet is its negative
- Equivalent claim: first-hires c-016 (states the same rule as the target state); first-hires c-013 (`atom-306`) — the team waits for founder OK instead of acting
- Synthesis notes: the symptom form of c-008 on this page. No src-070 warning atom covers it — atom-444 to atom-449 are about cross-functional lament, coordination gaps, junior owners, hiring veto and stale spend approvals, none of which is this. The origin is src-063 via atom-306, which is what the bullet's comment claims.

### c-017: "But it used to work — why doesn't it now?"
- Section: warning_signs
- Warning category: output_quality
- Supporting atoms: atom-445
- Primary source: src-070 (serial CEO practitioner)
- Equivalent claim: first-hires c-024 (`atom-433`) — the inflection when it no longer fits in one room; growth c-018 (`atom-524`, `atom-452`) — every team locally right, shared outcome still wrong
- Synthesis notes: the early-revenue expression of a symptom that recurs at all three stages, each time from a different atom. Untouched by both passes.

### c-018: Founder still has effective veto on every hire after naming a hiring manager
- Section: warning_signs
- Warning category: founder_time
- Supporting atoms: atom-448
- Primary source: src-070 (serial CEO practitioner)
- Equivalent claim: none in 1.4 — atom-468 is the growth-phase version of this warning and the growth trail deliberately dropped it, deferring founder hiring veto to the 3.2 @ growth cell. atom-438 ("the hiring manager owns the hire; culture and potential inputs are scores, not veto") is the unused target-state mirror.
- Synthesis notes: stage-native, and the only claim on this page with no equivalent elsewhere in 1.4. The page links to 3.2 @ early revenue for the approval chain, which is where the mechanics live.

---

## How this evolves next — c-019

### c-019: At growth, executives sit in two teams at once and expensive decisions run a shared process
- Section: evolution
- Supporting atoms: atom-369, atom-453, atom-460
- Primary source: src-064 (anonymous chief-of-staff practitioner) + src-070 (serial CEO practitioner)
- Equivalent claim: growth c-001 (`atom-369`) — executives play for the company first; growth c-006 (`atom-453`) — two decision paths; growth c-012 (`atom-460`) — written per-role rules for what counts as a valid block
- Synthesis notes: a pointer, so its lineage is the growth claims it points at, and the dual `src-070, src-064` comment is correct for that pair. The readability pass rewrote it to drop "Type 1/2 and integrative objection" in favour of the plain wording the growth page now uses. atom-450, the early-revenue evolution atom ("at ~40+ you need a standing traffic-control role above functions"), is **not** represented on this page — see the unused-atoms note below.

---

## Tools & resources — c-020 to c-023

### c-020: Link — Who Decides What, First Hires
- Section: tools_resources
- Supporting atoms: atom-306
- Primary source: src-063 (synthesis)
- Equivalent claim: first-hires c-002, c-003, c-007 — the ABC map, founder approval list and consult → decide → commit that the link describes
- Synthesis notes: navigational; the descriptive text names first-hires claims rather than making a new one. The ABC credit sits on c-006 rather than here, so the attribution appears once on the page.

### c-021: Link — Who Decides What, Growth
- Section: tools_resources
- Supporting atoms: atom-453, atom-462
- Primary source: src-070 (serial CEO practitioner)
- Equivalent claim: growth c-006 ("two decision paths", `atom-453`), growth c-014 (executive handover, `atom-462`), growth c-001 (C-level allegiance, `atom-369`)
- Origin not established: the "C-level allegiance" half of the link text. Growth c-001 is **src-064**, but this bullet's comment claims src-070 only, so `atom-369` is named as the equivalent claim and deliberately left out of `Supporting atoms`. Either the comment should gain src-064 or the phrase should change — a maintainer call, not a backfill call.
- Synthesis notes: the pass reworded "Type 1/2" to "two decision paths" here to match the growth page.

### c-022: Link — Director vs shareholder decisions
- Section: tools_resources
- Supporting atoms: atom-271, atom-275, atom-266
- Primary source: src-061 (Trailhead legal scan walkthrough)
- Attribution strings: `companion note` — `wiki/processes/legal/director-and-shareholder-decisions.md`, the companion page added in `b2f62f5`
- Equivalent claim: legal-and-other-ops/governance-corporate/growth c-003 (reserved matters, `atom-271`), c-009 (internal authority matrix with thresholds, `atom-275`), c-001 (articles reflect practice, `atom-266`)
- Synthesis notes: the only claim on this page sourced outside src-063 / src-070. It is a cross-process guardrail — escalation thresholds must not conflict with what the articles and shareholders' agreement reserve to shareholders. The readability pass spelled out "articles/SHA" in full here.

### c-023: Link — Who decides what, proposal + template
- Section: tools_resources
- Supporting atoms: atom-306
- Primary source: src-063 (synthesis)
- Equivalent claim: first-hires c-017 — the same proposal-and-template link
- Synthesis notes: src-063's `url` field *is* this proposal document, so the link and the source are the same artefact.

---

## ABC decision map — origin

Established, with a named author and a live URL. The maintainer's placeholder credit — "as described
by Jansen and Derksen" — matches nothing anywhere in this repo or in the underlying sources, and was
not used.

**The three buckets come from step 3 of "Founders' Agreements: The 'Founder Prenup' That Prevents
Cofounder Conflict and Speeds Up MVP Execution", by Andres Perea, published on Ascent Incubator:**
`https://ascentincubator.com/legal-administrative/founders-agreements-the-founder-prenup-that-prevents-cofounder-conflict-and-speeds-up-mvp-execution/`

Evidence chain:

| Where | What it says |
|---|---|
| `docs/proposals/who-decides-what-summary-and-direction.md` line 257 | The ABC bucket model's sources, naming "[Ascent Incubator](…) (explicit A/B/C)" first, then Ramp, Mercury, Equity Matrix and HBS framing "cited via Ascent" |
| Same doc, lines 269, 285, 302 | Bucket A, B and C example rows quote Ascent directly — "day-to-day execution choices in their area", "pricing tests, feature prioritization, and small spend limits", "equity changes, fundraising, adding/removing a founder, large spending, and selling the company" |
| Same doc, lines 328, 331, 357 | The "Strict ABC" school, the quarterly review ("Ascent Step 7") and the Track C bibliography row "Ascent — Founder prenup / ABC buckets — **Bucket A/B/C** definitions + quarterly review" |
| `wiki/processes/strategic/1.4--first-hires.md` line 56 | The published ABC action already carried `<!-- sources: src-063 (synthesis), Ascent ABC, Ramp founders agreement -->` |
| The article itself, step 3 "Define decision rights (fast, clear, written)" | "Create 3 buckets: Bucket A — One founder can decide … Bucket B — Majority vote … Bucket C — Unanimous", with exactly the example sets the proposal quotes |
| The article byline, plus `ascentincubator.com/about` and `/faq` | Author **Andres Perea**, founder and CEO of Ascent Incubator (Innovation Ascent LLC, Boston MA) |

Two qualifications the credit is written to respect:

1. **The A/B/C naming is Ascent's; the surrounding framework is not.** The article credits Harvard
   Business School's "Founders' Agreements" note for its four building blocks (roles &
   responsibilities, rights, commitments, contingencies). The three-bucket split is Perea's own
   step 3, which is the part this wiki uses, so the credit names him and not HBS.
2. **The wiki's ABC map is an adaptation, not a copy.** Ascent's Bucket B is "majority vote"; this
   wiki's Bucket B is "discuss, then CEO tie-break at two founders", and the consult → decide →
   commit close inside Bucket A comes from the advice process, Grove and Coinbase's writing on
   directly responsible individuals, not from Ascent. That is why the carry-forward paragraph still
   carries `src-063 (synthesis)` as well as the Ascent credit: the buckets are Perea's, the version
   on these pages is src-063's synthesis of them.

**Link convention.** `interceptContentLinks()` in `wiki.html` returns early on any `href` starting
with `http`, so the external URL renders as an ordinary outbound link with no rewriting. Only
`docs/proposals/` and `wiki-pipeline/` paths get converted to GitHub blob URLs, and only bare `.md`
links become SPA hash navigation.

**Other pages that mention the map — not edited in this task.** `1.4--first-hires.md` action 3
(where the map is actually defined, and which already carries the `Ascent ABC` attribution string),
`1.4--growth.md` and `1.4--scaled.md` carry-forward paragraphs, plus `1.4--first-hires.md` and
`1.4--growth.md` Tools entries, `wiki/processes/legal/director-and-shareholder-decisions.md` and
`wiki/processes/people/3.6--foundation.md`. See the report for the recommended treatment.

---

## Origins that could not be established

Two, both partial. Neither invalidates its bullet — in both cases the rest of the source comment
holds — and neither was closed with an invented atom or source.

| Claim | What could not be traced | Detail |
|---|---|---|
| c-012 | the `src-064 (anonymous-practitioner)` half | src-064's atoms (atom-368 to atom-372) cover C-level allegiance, returning out-of-domain debates, functional advocacy and people-pleasing managers. None covers "gather dissent in the room, then the area owner states the decision" or the 48-hour codification rule, both of which are src-063 material (first-hires c-003, c-004, c-010). Either src-064 should be dropped from the comment, or the atom it refers to has not been extracted. |
| c-021 | the `src-070` attribution for "C-level allegiance" | That phrase describes growth c-001, which is src-064 (`atom-369`). The other two phrases in the link text — "two decision paths" and "executive handover" — are correctly src-070. The comment is under-attributed by one source. |

## Atoms available at this stage but not on the page

Recorded so the gap is visible, not as a proposal to add them. All are src-070, phase
`early-revenue`, and all were extracted before this backfill.

| Atom | Claim | Why it is not on the page |
|---|---|---|
| atom-436 | cross-functional teams for strategic change, functional ownership for business-as-usual | Org-design content; the page is about decision rights. Overlaps growth atom-520 to atom-522, which the growth trail also left unsynthesised. |
| atom-438 | the hiring manager owns the hire; culture and potential inputs are scores, not veto | Target-state mirror of c-018. The page states the warning and links to 3.2 @ early revenue for the mechanics. |
| atom-439 | when you put something on paper, name who decides — and mean it | Says what c-011 says; c-011's source comment claims src-063 only, so it was not attached. |
| atom-440 | before assigning a role, check whether the person can take the authority and what other hat they wear | The long version lives at growth c-011; the page keeps only the mission half (c-014). |
| atom-441 | pull cross-functional cells for strategic projects — clear goal, one lead, mutual domain trust | Same org-design territory as atom-436. |
| atom-444 | "we don't work cross-functionally anymore" on team days | Overlaps c-017; the page picked the sharper symptom. |
| atom-446 | one function asked to write a cross-cutting strategy it doesn't own end-to-end | Published at growth instead, inside c-010's merged action bullet. |
| atom-447 | junior people given self-management responsibility without the skills | The growth trail marked early revenue as the stronger home for this (its atom-525 row) and it still has no home. |
| atom-449 | a former founder or executive still approving spend without context | Founder-time warning; the page's warning section is at three bullets and this one never landed. |
| atom-450 | at ~40+, a standing coordination role above the functions | The only early-revenue `evolution` atom. The page's single evolution bullet points at the growth decision mechanics instead, and the coordination role is introduced on the growth page (c-005/c-010). |

`atom-471` to `atom-484` are src-070 early-revenue atoms for **1.1 planning**, not 1.4, and are out
of scope here.

## Not in this trail

- `## Sources` from the published page is not reproduced in `draft.md`; the sibling drafts do not
  carry it either, and it is generated at publish time.
- Source-discovery Tracks A–C behind src-063 stay bibliography, exactly as the first-hires trail
  records. The strings `HSG seed article`, `reStruggle ~15–25` and `Ascent ABC` are entries in those
  tracks, not source files, and were not promoted to `src-NNN` by this backfill.
