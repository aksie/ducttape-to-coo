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
| **Starting a raise / new investor** | `strategic/1.2b` Investor Reporting, `legal/4.1` Governance, `financial/2.1` Cash Flow | Stand up the monthly investor update + board prep cadence for the stage |
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

## Grounding & anti-hallucination rules

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
