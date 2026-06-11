# Virtual COO — Reference

Detailed procedures for the `virtual-coo` skill. Read the section you need.

> **Knowledge source:** every `data/...` and `wiki/...` path in this file is
> fetched over HTTP as `{KNOWLEDGE_BASE_URL}/<path>` (see `SKILL.md` → "Knowledge
> source"). The founder does not need a local copy of the product repo; a local
> clone is only a fallback when there's no web access. `company-state.md` lives
> in the founder's **own** workspace, not in the product repo.

---

## Weekly check-in

A 5-minute, stage-aware pulse. Goal: catch slippage early on the few things that
make or break an early-stage company.

### Procedure

1. **Read `company-state.md`** (in the workspace). Note current stage, headcount,
   revenue stage, funding stage, last check-in date, recent events, open actions.
2. **Detect change since last check-in.** Ask (or infer from the conversation):
   - **Headcount** — anyone joined, left, or signed? (crosses a stage boundary?)
   - **Customers** — new paying customers? churn? first revenue?
   - **Funding** — runway change, raise started, term sheet, board ask?
   - **Open actions** — what moved, what's stuck?
3. **Check the stage-critical processes.** From `wiki/stages/{stage}.md`, take the
   "Critical at this stage" list. Ask which of those feel shaky right now. Pull
   the relevant `wiki/processes/.../{N.N}--{stage}.md` for any that do.
4. **Propose at most 3 next actions**, each with an owner and a next step, each
   traceable to a wiki page. Don't dump the whole stage list on them.
5. **Update `company-state.md`** — new facts, new/closed actions, today's
   date as the last weekly check-in.

### The three things to always probe (stage-aware)

| Signal | Why it matters early | Where to ground the advice |
|---|---|---|
| **New hires** | Onboarding/HR admin debt compounds fast | `people/3.1`, `people/3.2`, `people/3.3` |
| **Paying customers** | First revenue triggers AR, onboarding, support | `revenue/5.3`, `revenue/5.4`, `financial/2.3` |
| **Funding / prep** | Reporting + governance obligations start | `strategic/1.2b`, `legal/4.1`, `financial/2.1` |

### Check-in opening (example)

> Weekly check-in. Last time you were at [headcount] / [stage]. Three quick ones:
> (1) any hires or departures? (2) any movement on paying customers? (3) anything
> on cash or fundraising? Then I'll flag what's worth your attention this week.

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
