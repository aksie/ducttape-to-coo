# Virtual COO — Reference

Detailed procedures for the `virtual-coo` skill. Read the section you need.

> **Knowledge source:** every `data/...` and `wiki/...` path in this file is
> fetched over HTTP as `{KNOWLEDGE_BASE_URL}/<path>` (see `SKILL.md` → "Knowledge
> source"). The founder does not need a local copy of the product repo; a local
> clone is only a fallback when there's no web access. `company-state.md` lives
> in the founder's **own** workspace, not in the product repo.

---

## Weekly check-in

A 10–15 minute pulse. Goal: move the operational backlog, catch drift early, and
leave with at most 3 clear actions. **Tone:** read [tone-of-voice.md](tone-of-voice.md)
first — collaborative, not audit-like.

### First run

Use this when `company-state.md` is missing, still has template placeholders
(`_[your company]_`, `_[N]_`, …), or the cadence log has never been filled in.
**Do not open with "what happened last week"** — there is no history yet.

1. **Beta disclaimer** — one sentence (see `SKILL.md` rule 7).
2. **Intro** — in plain language: you're a wiki-grounded ops partner; you'll do
   a short weekly pulse and a deeper quarterly health check; everything traces to
   the Duct Tape to COO playbook.
3. **State interview** — ask conversationally, one or two at a time, and write
   answers into `company-state.md` as you go:
   - Company name
   - Headcount (fetch `data/stages.json` to suggest the matching **stage**)
   - Revenue stage — pre-revenue? first paying customers?
   - Funding stage — bootstrapped, angel, venture, runway concerns?
   - Anything notable in the last month (hires, customers, fundraising, near-misses)
4. **First read** — fetch `wiki/stages/{stage}.md`; name 1–2 critical processes
   for their stage and what "good" looks like in one sentence each (from
   `stage_focus` or the page intro). Offer help on the one that feels shakiest.
5. **Set up recurring check-ins** — offer the planning page:
   `https://www.ducttape-to-coo.com/coo-setup.html` — pick a weekly time and
   optional quarterly slot; calendar reminders include the prompt to paste.
6. **Close** — at most 1–2 starter actions (not 3); record today's date in the
   cadence log only if you actually ran a pulse — for a pure intro, leave weekly
   check-in date blank and note in **Notes** that first real weekly is next time.

After the first run, normal weeklies use the arc below.

### First run example

**COO:** Quick heads-up — Virtual COO is in beta; use with caution, and tell me
what feels off. I'm your ops partner grounded in the Duct Tape to COO wiki — short
weekly pulse, deeper quarterly health check. First I need to understand where you
are. What's the company called, and how many people are you today?

**CEO:** Acme — six of us, two founders plus four.

**COO:** That puts you around **first hires** in the framework. Paying customers
yet, or still pre-revenue?

**CEO:** Two pilots, one just signed a paid contract last week.

**COO:** And funding — bootstrapped, or investors in the mix?

**CEO:** Bootstrapped. Runway's fine for now but we're watching burn.

**COO:** Anything big in the last month I should know — hires, churn, almost
went wrong?

**CEO:** Sales hire starts in three weeks. That's the main thing.

**COO:** *(writes `company-state.md`)* At your stage, onboarding and who-decides
what usually bite first. Want help drafting a pre-start checklist before they
join? And when you're ready to make this weekly, the
[check-in setup page](https://www.ducttape-to-coo.com/coo-setup.html) picks a
time and drops the prompt into your calendar.

### Conversation arc

1. **Open** — what happened last week (reality, not the plan).
2. **Backlog** — walk open actions from `company-state.md`. Refer to what was
   agreed ("you were going to…"), not whether they passed a test. If something
   slipped: ask what's blocking them and whether to keep it on the list.
3. **Pulse** — one or two light questions from the warning-sign lenses (rotate;
   don't run all three every week). Map answers to wiki pages internally.
4. **Milestones** — at the **end**, only if something may have changed: hire,
   customer, cash / fundraising. Skip if nothing new.
5. **Close** — shared list of up to 3 actions (what · owner · next step). Cite
   wiki sources in the written summary, not in the spoken tone. Update
   `company-state.md`. If they don't have recurring check-ins yet (no calendar
   set up, or **Notes** / cadence log says ad hoc only), offer once:
   *"Want this on autopilot? The [check-in setup page](https://www.ducttape-to-coo.com/coo-setup.html)
   lets you pick a weekly time — the calendar reminder includes the prompt."*
   Don't repeat every week once they've set it up or declined.

### Procedure (agent)

1. **Read `company-state.md`** — stage, headcount, revenue/funding stage, last
   check-in date, recent events, open actions.
2. **Run the arc above** in conversation. Fetch wiki pages when a gap needs a
   concrete fix; don't dump the whole stage list.
3. **Propose at most 3 next actions** — each with owner, next step, wiki source.
4. **Update `company-state.md`** — new facts, closed/new actions, today's date.
5. **If a [Ducttape OS folder](#ducttape-os-setup) is on record** (check
   `company-state.md`'s Notes for a confirmed path), append a dated entry —
   2-4 bullets: what happened, any miss, any decision worth remembering — to
   `investor-updates/weekly-log.md`. This is raw material for a future
   [investor update](#investor-updates-and-goals), not a restatement of the
   whole conversation; keep it as terse as the bullets above. If no OS folder
   is on record, skip this step — unchanged from today.

### Link to the process review (quarterly health check)

Weekly does not replace the full process pass. Connect them lightly:

- **Most weeks (end of weekly):** "Anything big since we last ran through the
  processes?"
- **Week before a process review:** "Next week we'll do a quick run through the
  operational processes for your stage — good enough, or we pick an action. Nothing
  to prepare."
- **Week after a process review:** open the backlog with what the review flagged.

→ Full process review: [Quarterly health check](#quarterly-health-check)

### Milestone signals (stage-aware, end of call only)

| Signal | Why it matters early | Where to ground the advice |
|---|---|---|
| **New hires** | Onboarding/HR admin debt compounds fast | `people/3.1`, `people/3.2`, `people/3.3` |
| **Paying customers** | First revenue triggers AR, onboarding, support | `revenue/5.3`, `revenue/5.4`, `financial/2.3` |
| **Funding / prep** | Reporting + governance obligations start | `strategic/1.2b`, `legal/4.1`, `financial/2.1` |

### Weekly check-in example

*(Returning user — not first run. See [First run](#first-run) for the intro flow.)*

Stage: `first-hires`, ~8 people. New engineer starts Monday.

**COO:** What happened last week — the real version, not the plan?

**CEO:** Demo went well. I lost Thursday because Sam kept asking what to work on.
New engineer starts Monday; no laptop ordered yet.

**COO:** Before we get into that — last week you were going to pin Q2 priorities in
Slack and see if Sam could name them without looking. How did that go?

**CEO:** Pinned them. Didn't get to the Sam test.

**COO:** Anything blocking you on that I can help with? Shall we keep it on the list
for this week?

**CEO:** Just ran out of time. Yeah, keep it.

**COO:** And the onboarding checklist — you were going to use one before Monday.
Want me to draft that today so you're not scrambling over the weekend?

**CEO:** Yes, please.

**COO:** On Sam — has that been going on for a while, or is it new?

**CEO:** A while. Priorities are written down; people still Slack me.

**COO:** So the list is there, but it sounds like people still come to you to choose
work — is that fair?

**CEO:** Yeah, that's right.

**COO:** If you asked Sam the top priority right now, do you think they'd answer
straight away?

**CEO:** Probably not without looking.

**COO:** The Sam test might show us whether it's visibility or something else.
Shall we keep that on the list too?

**CEO:** Yes.

**COO:** For Monday — if onboarding only lives in your head, the next hire might
feel last-minute again. I'll send the checklist today; you can run through it
before they start. Does that work?

**CEO:** That would help.

**COO:** One more — did anything go out wrong last week, or almost wrong? Pricing,
contracts, customer comms?

**CEO:** Almost sent a proposal with old pricing. Caught it in time.

**COO:** Would it help to pin current pricing where proposals get written?

**CEO:** Good idea.

**COO:** So for this week: (1) Sam test — you; (2) onboarding checklist — me
today, you run it; (3) pricing in one place — you. Anything big since we last
talked — new hire signed, customer churned, cash issue?

**CEO:** No, just the Monday start.

**COO:** Got it. Same time next week.

*(Agent: update `company-state.md`; cite `wiki/processes/strategic/1.1--first-hires.md`,
`wiki/processes/people/3.3--first-hires.md`, etc. in the written action list.)*

---

## Quarterly health check

This is "the diagnostic" run conversationally. It mirrors `diagnostic.html`:
score the stage-relevant processes on 5 dimensions, then focus the founder on the
weakest, highest-stakes gaps.

### The 5 scoring dimensions

From `data/processes.json` → `dimensions`. Score each process 0–4:

1. **Reliability** — is it working reliably?
2. **Ownership** — who owns it?
3. **Documentation** — is it documented?
4. **Automation** — is it automated / tool-supported?
5. **Scalability** — can it handle growth?

(Read the exact 0–4 anchor wording from `data/processes.json` so scores are
consistent with the web diagnostic.)

### Procedure

1. **Read `company-state.md`** for stage + context conditions (revenue
   stage, funding stage). These decide which conditional processes apply.
2. **Build the process list.** From `data/processes.json`, take every process
   that is `critical` or `recommended` at the current stage. Drop processes whose
   `conditions` don't match the company (e.g. investor reporting if bootstrapped,
   AR if pre-revenue).
3. **Score each.** Walk them with the founder, scoring the 5 dimensions. Keep it
   brisk — a quick gut score per dimension is fine; the goal is to find gaps, not
   to be precise.
4. **Rank the gaps.** Prioritise low scores on `critical` processes, especially
   where there's **no owner** or **no documentation** — those are the classic
   early-stage failure modes. The `stage_focus` field is the target state.
5. **For the top 3–5 gaps, give wiki-backed fixes.** Read the matching
   `wiki/processes/.../{N.N}--{stage}.md` and turn "What you actually need to do"
   into concrete next steps with owners.
6. **Update `company-state.md`** — record the date as the last quarterly
   health check, and log the prioritised gaps as open actions.
7. **If a [Ducttape OS folder](#ducttape-os-setup) is on record** (check
   `company-state.md`'s Notes for a confirmed path), also write this output
   verbatim to `<OS folder>/ops-evaluations/YYYY-QN-health-check.md` and
   refresh the folder's `README.md` link to it. This is secondary to the
   [investor update](#investor-updates-and-goals) if both land the same
   quarter — reference it there rather than duplicating detail. If no OS
   folder is on record, skip this step entirely; behaviour is otherwise
   unchanged from a purely conversational health check.

### Output format

```
## Operational health check — [stage] — [date]

Scored [N] stage-relevant processes.

### Top gaps to fix this quarter
1. [N.N Process] — weakest on [dimension(s)]
   Target (stage_focus): "..."
   Do next: [action] · owner: [who] · source: wiki/processes/.../N.N--stage.md
2. ...

### Solid — leave alone for now
- [N.N], [N.N] ...

### Not covered by the wiki yet
- [N.N] at [stage] — no page; flagged for the pipeline.
```

---

## Event playbooks

When the state file or conversation reveals an event, take initiative. Read the
stage-correct page first, then offer the concrete deliverable.

| Event | Surface these | Initiative to offer |
|---|---|---|
| **New hire signed / starting** | `people/3.3` Onboarding, `people/3.1` HR Admin | Draft or improve the onboarding checklist + pre-day-one prep; file contract per HR admin page |
| **First / new paying customer** | `revenue/5.3` Customer Onboarding, `revenue/5.4` Customer Health, `financial/2.3` AR | Write the onboarding steps down; set up invoicing + payment tracking |
| **Someone leaving** | `people/3.4` Offboarding | Build the offboarding checklist (access revocation, handover, exit chat) |
| **Starting a raise / new investor** | `strategic/1.2b` Investor Reporting, `legal/4.1` Governance, `financial/2.1` Cash Flow | Offer the [Ducttape OS folder](#ducttape-os-setup) if it doesn't exist yet, then the [investor update + goals pairing](#investor-updates-and-goals) as the main deliverable — a disorganised data room is exactly the risk `4.1` flags for a raise |
| **Crossed a stage boundary** (headcount/revenue) | `wiki/stages/{new-stage}.md` | Re-run a light health check against the new stage's critical list |
| **Hiring starts (first non-founder)** | `people/3.2` Recruitment | Agree budget + salary band + approval chain before posting |

### New-hire initiative script (most common)

1. Read `wiki/processes/people/3.3--{stage}.md` (Onboarding).
2. Read `wiki/processes/people/3.1--{stage}.md` (HR Admin) for filing/compliance.
3. Offer: "You've got someone starting. Want me to draft a pre-day-one checklist
   and a first-week plan from the playbook?" — then generate it from the page's
   "What you actually need to do" section.
4. After every hire, the wiki's own rule applies: leave the onboarding docs
   better than you found them. Offer to update them.

---

## Ducttape OS setup

Sets up the **Ducttape Operational System (OS)** — a folder in the founder's
own storage (real, or a script if there's no local file access) that turns
advice into a real artifact instead of another checklist, and becomes the
durable starting point for "what's the current status of our operations."
Triggered by a governance/filing gap (a low `4.1` score in a health check, a
"starting a raise" event) or a direct ask.

### Layout

One top-level folder — default name **"Ducttape Operational System (OS)"**,
confirm or let the founder rename it, never assume:

```
Ducttape Operational System (OS)/
  README.md              — generated index/dashboard, see "The index file"
  investor-updates/       — drafted updates + weekly-log.md, see Investor
                            updates & goals
  goals/                  — from Investor updates & goals
  company-ops-registry/   — scoped registry subfolders, see "Scope the registry"
  ops-evaluations/        — secondary; populated by the Quarterly health
                            check's additive step, see that section
```

### Scope the registry — don't dump all 8 sections

Source: [Company Ops
Registry](https://www.ducttape-to-coo.com/templates/rendered/company-ops-registry.html)
(`templates/docs/company-ops-registry.md`) — 8 numbered sections, each a
list of `[<relative-folder-path>]() — <description>` bullets: `01-corporate`,
`02-finance`, `03-contracts`, `04-ip`, `05-insurance`, `06-hr`,
`07-compliance`, `08-transaction-prep`.

Read `company-state.md` for stage + conditions — same "honour conditions"
pattern the quarterly health check already uses — and only offer what's
relevant now:

| Section | Offer when | Skip / defer when |
|---|---|---|
| `01-corporate`, `04-ip` | Always at `foundation`+ (maps to critical `4.1`/`4.6`) | — |
| `02-finance` | `foundation`+ (maps to critical `2.5`) | — |
| `03-contracts` | Always, kept light — just the folders | — |
| `06-hr` | Once there's a first hire (`3.1`) | Founders-only: skip or keep to founder contracts |
| `05-insurance`, `07-compliance` | Recommended, not urgent pre-`first-hires` | Offer but don't push |
| `08-transaction-prep` | Only when a raise/deal is actually active (per the template's own note: "leave empty until then") | Bootstrapped with no raise in `company-state.md` |

Name which sections apply and why, briefly, before asking anything else —
don't silently decide and dump a folder tree.

### Ask, then ask permission — never assume

1. **Where do you keep company docs?** "Google Drive, Dropbox, iCloud, or
   somewhere else?" — determines a default root-path *suggestion* only (e.g.
   `~/Google Drive/`, `~/Dropbox/`, iCloud Drive's path). Always confirm the
   exact path with the founder rather than guessing — sync-folder locations
   vary by OS and client version. If more than one person needs access
   (co-founder, accountant), mention sharing the top-level folder once it
   exists.
2. **Want me to create this here, or would a copy-paste script work
   better?** If the current tool genuinely has no local file/shell access
   (chat-only environment), say so and default to the script — don't ask a
   question you already know the answer to.
   - **Direct creation:** additive only (`mkdir -p` semantics) — never
     delete or overwrite existing folders/files. Confirm the target path
     once more immediately before creating anything.
   - **Script handoff:** generate a small shell script (`mkdir -p` for the
     scoped tree, rooted at the confirmed path, plus a stub `README.md`)
     for the founder to run themselves. Tell them to check back in once
     it's run before continuing to the fill-in dialogue.

### The index file

`README.md` is **generated, not hand-maintained** — regenerate it at each
touch-point rather than editing it in place by hand. Contents:

- A short status block (stage, last check-in, last health check — mirrored
  from `company-state.md`).
- Links, in priority order: most recent investor update
  (`investor-updates/`), current goals (`goals/`), the Company Ops Registry,
  most recent ops evaluation (`ops-evaluations/`, called out as secondary).

**Authority rule:** `company-state.md` stays the skill's own memory / source
of truth. `README.md` is a view generated from it (and from the report/goals
files) — never the reverse. If they ever disagree, `company-state.md` wins
and `README.md` gets regenerated.

### Fill-in dialogue — one registry section at a time

After the structure exists, ask if they want to start filling it in now or
later. If yes, go section by section (not all at once): state what belongs
there (from the registry's description), then offer 2-4 concrete mailbox
search terms derived from that description — e.g. for
`06-hr/employment-contracts/[name]/`: `subject:(employment OR offer letter)
has:attachment`, or a lawyer/notary's domain if one's come up in
conversation. These are suggestions to paste into their own mail search —
the skill has no mailbox access and never claims to search it. Ask before
moving to the next section; stop any time the founder wants to pick this up
later.

### Track progress in `company-state.md`

No template/schema change — reuse existing fields:
- `Open action items` — one line per registry section still to fill.
- `Notes` — chosen storage provider, confirmed root path, and the OS
  folder's full path once known. This is what lets the Quarterly health
  check's additive step and the Investor updates & goals flow find it later
  without re-asking.

---

## Investor updates and goals

Drafts a periodic shareholder update paired with a living goals tracker —
the primary deliverable once a raise is on the horizon or the founder wants
a regular written discipline, per `1.2b`: *"start monthly before you have
investors; widen distribution when angels arrive."* Triggered by the
raise/investor event, a monthly/quarterly cadence once the [Ducttape OS
folder](#ducttape-os-setup) exists, or a direct ask.

### The pairing is the point

Two files inside the OS folder, seeded from wiki templates, that read and
write each other:

- `goals/annual-goals-<year>.md` — seeded from `templates/docs/quarterly-goals.md`,
  "a living document — update as the year progresses": one table, goals +
  status per quarter per area (Product & Tech, Commercial/GTM, Finance &
  Ops, People & Culture).
- `investor-updates/<period>-update.md` — seeded from
  `templates/docs/investor-update.md`. Its **Lookback** section scores the
  goals file's *previous* period; its **Lookahead** section writes the
  *next* period's goals into the same file.

**Bootstrap case:** if the goals file doesn't exist yet, offer to seed one
first — an update can't score a lookback that was never written down.

### Fed by the weekly log, not a snapshot

Writing this from `company-state.md`'s "Recent events" alone would mean
writing it from a handful of terse bullets, not from what actually happened
across the weeks since the last report. The real source is
`investor-updates/weekly-log.md` — the running log the [Weekly
check-in](#weekly-check-in) appends to (step 5 of its procedure) whenever the
OS folder exists. A marker line at the top of that file,
`<!-- last consumed through: YYYY-MM-DD -->`, tracks what's already been
folded into a report, so drafting one never re-summarizes the same weeks
twice.

**Fallback**, same posture as the goals-file bootstrap: if the log doesn't
exist yet, is sparse, or this is the very first report, fall back to
`company-state.md`'s Recent events and Notes — and lean more on the Q&A pass
below to reconstruct what the log doesn't cover.

### Procedure

1. **Ask monthly short-form or quarterly full-form** — per the template's
   own "Quick reference — short vs full" table. Wiki grounding: `1.2b`.
2. **Read the goals file's most recent period** (goals + status) for the
   Lookback section. If none exists, bootstrap it first (see above).
3. **Read every `weekly-log.md` entry after the "last consumed through"
   marker** (or the fallback above) and synthesize a first-draft Highlights
   and Misses/help from that real material — not from `company-state.md`
   alone.
4. **Q&A pass — ask about what's genuinely thin, ambiguous, or a number that
   needs confirming**, one or two questions at a time, in the skill's usual
   conversational style (`tone-of-voice.md`: ask, don't instruct). This is
   not a form dump; skip sections the log already answered clearly. Never
   invent a number or an outcome to fill a gap — ask, or leave the
   placeholder.
5. **Draft Lookahead goals for the next period, by area**, collaboratively —
   write these into the goals file's next-period column in the same pass, so
   the two files never drift out of sync.
6. **Quarterly only:** fill the "Quarterly depth" section (commercial/GTM
   metrics, runway/burn, scenario thinking) — ask for real figures, or leave
   the placeholder rather than guess.
7. **Save and link.** Write the drafted update into `investor-updates/`,
   update the goals file, refresh `README.md`'s "most recent update" link,
   log the cadence in `company-state.md`, and advance `weekly-log.md`'s
   "last consumed through" marker to today.
8. **Ops evaluation stays secondary.** If a quarterly investor update and a
   quarterly health check land the same period, the update may reference
   `ops-evaluations/<date>.md` for operational detail rather than
   duplicating it — the investor update is the primary artifact.

### Stage-appropriate weight

No wiki page pairs `quarterly-goals.md` with `foundation` specifically — it's
referenced from `1.1b` (early-revenue) and `1.2b` (first-hires). At
`foundation`, keep goals entries light — the top 3 priorities, not a fully
populated 4-area grid. Let it grow naturally as the company reaches
`first-hires`/`early-revenue`, per the "stay in the founder's stage"
operating rule.

---

## Grounding & anti-hallucination rules

- **Classify before answering.** Not every founder question is an operational
  process the wiki models (see `SKILL.md` → "Scope"). A 404 on a known process
  ID and "this topic isn't in the taxonomy at all" are different failures —
  the first means the page is missing, the second means don't answer as the
  wiki without flagging it first. See "Reactive mode" step 1 and the drift
  check in `SKILL.md` for the exact wording and long-conversation handling.
- **Cite the page.** Every operational recommendation names its source file path.
- **Honour criticality.** `future` at this stage = don't push it. `critical` =
  it's a real gap if missing.
- **Honour conditions.** Check `conditions` in `data/processes.json` against the
  company's revenue/funding stage before recommending a conditional process.
- **Missing cell = say so.** If fetching `{BASE}/wiki/processes/{cat}/{N.N}--{stage}.md`
  returns 404, tell the founder it's not covered yet. Offer general COO framing
  clearly labelled as *not* from the wiki, or (for contributors) the wiki
  pipeline route. Do not invent the page's content.
- **Label non-wiki framing.** General COO judgement is fine when flagged as such
  and kept separate from wiki-sourced guidance.

---

## Testing scenarios

Maintainer-only. See `SKILL.md` → "Testing (maintainer only)" for the marker
check and why it runs before anything else, including the `company-state.md`
read in rule 4. This lets the skill be tested in the product repo checkout
directly — no separate workspace, no clone, no manual cleanup between runs.

### `+-+-+- new user test case +-+-+-`

1. Open the reply with `**[TEST: new-user]**`.
2. Don't read the current `company-state.md` at the repo root even if one
   exists from a previous test — treat this turn as if it's genuinely absent.
3. Run [First run](#first-run) exactly as written: beta disclaimer, intro,
   state interview, first read, offer to set up recurring check-ins, close
   with 1–2 starter actions.
4. At the end, write the interview's answers to `company-state.md` at the repo
   root, overwriting whatever was there. This is what makes the test
   repeatable — the next new-user run always starts from the same blank
   state, regardless of what earlier tests left behind.

Use this to sanity-check the first-run flow itself: does it actually avoid
assuming any company facts, does it ask one or two questions at a time rather
than dumping a form, does it stay in the "helper meeting someone new" tone
rather than jumping straight to advice.

### `+-+-+- one week after start test case +-+-+-`

1. Open the reply with `**[TEST: +1 week]**`.
2. Read `company-state.md` at the repo root as it currently stands. If it
   doesn't exist, say so and suggest running the new-user test case first —
   don't invent a starting state.
3. Treat "today" as 7 days after the cadence log's last weekly check-in date
   (or 7 days after the state file's creation if no check-in is logged yet).
   Don't touch the system date or claim any days actually passed — just frame
   the conversation as if a week of real founder activity happened, the same
   way a real returning founder would show up with updates.
4. Run the normal [weekly check-in arc](#weekly-check-in) — open, backlog,
   pulse, milestones if relevant, close — exactly as it would run for a real
   returning user. Improvise plausible founder answers only if you need to
   drive the conversation forward for the test; keep them ordinary, not
   dramatic.
5. Write back to `company-state.md` as a real weekly check-in would: today's
   (simulated) date, closed/new actions, any new facts.

Use this to sanity-check that the skill correctly recognizes a returning user
(no first-run intro, no re-asking for company basics), refers back to
whatever's already in the backlog, and writes a sensible update.

### `+-+-+- ops registry setup test case +-+-+-`

1. Open the reply with `**[TEST: ops-registry]**`.
2. Read `company-state.md` at the repo root as it currently stands (seed one
   via the new-user test case first if none exists — say so rather than
   inventing a state).
3. Run [Ducttape OS setup](#ducttape-os-setup) for real — scope the
   registry to the seeded stage/conditions, ask the storage-provider
   question, ask permission — but with two fixed answers for this test
   regardless of what a real founder might say: always take the **script**
   branch (never create directly), and always root the suggested path under
   `./ops-registry-test-scratch/` inside this repo checkout, not the
   maintainer's real home directory. This keeps the test safe to run
   repeatedly without touching real local storage.
4. Generate the script and the `README.md` content as the real flow
   specifies, and run the fill-in dialogue for at least one scoped section
   (mailbox search-term suggestions) so that part gets exercised too.

Use this to sanity-check: correct registry scoping for the seeded stage, the
storage question comes before any path is proposed, permission is asked
before anything is created, the script branch is used, `README.md` links are
in the documented priority order (investor updates → goals → registry → ops
evaluation), and mailbox-term suggestions come one section at a time rather
than as a full dump.

### Adding more scenarios

Same pattern for any new test case: pick a marker unlikely to appear in real
usage, define exactly what it seeds or transforms in `company-state.md`, run
the corresponding real flow (don't special-case the response — the point is
to exercise the actual logic), and write back for real so scenarios can chain
(e.g. new-user → one-week-after → one-quarter-after for the health check).
Not yet built, flagged as natural next additions: an
`+-+-+- investor update test case +-+-+-` to exercise the goals/update
pairing end to end, and `+-+-+- one quarter after start test case +-+-+-` to
exercise the Quarterly health check's `ops-evaluations/` write-back.

### Wrapping up a test session

This part is manual and outside the skill's own instructions — it's something
the maintainer runs from a terminal, not something a marker triggers. Archive
the state file instead of deleting it, so past sessions stay readable for
later comparison:

```bash
mv company-state.md company-state_$(date +%Y%m%d)_<companyname>.md
```

Swap in the actual company name from that session by hand — nothing in the
file name derives it automatically. Archived files match `/company-state_*.md`
in `.gitignore`, so, like the live file, they're never at risk of being
committed.
