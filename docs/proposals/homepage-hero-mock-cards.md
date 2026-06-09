# Homepage hero — mock card copy proposals

Proposal for the three floating cards in the homepage hero (`index.html`, `.hero-visual`). Not implemented yet — pick a set (or mix options) and apply to the mock cards.

## Context

The three cards should read as a **mini story**:

| Card | Job | What “striking” looks like |
|------|-----|----------------------------|
| **1 — Gap** | Sting | A *behavior* founders recognize in 2 seconds — not “low maturity on X” |
| **2 — Stage** | “This tool gets my context” | Shows scope changes with size, not just a bar chart |
| **3 — Good** | Hope / contrast | Same *type* of process as card 1, or a clear counterexample — proves the framework names “good” |

Strong one-liners often hit one diagnostic dimension without naming it:

- **Ownership:** “Still in the founder’s head”
- **Documentation:** “Last updated 8 months ago”
- **Reliability:** “Works until someone’s on holiday”
- **Scalability:** “Breaks every time we hire”

**Current copy (live):**

- Card 1 — *Process gap:* Cash Flow Management · 1.2/4 — “No rolling forecast. Founder checks bank balance weekly.”
- Card 2 — *Your stage — First Hires:* “12 processes in scope · 8 applicable now · 4 optional” + bar chart
- Card 3 — *Looking good:* Planning & Goals · 3.4/4 — “Weekly syncs, clear Q goals. Well-calibrated for an 8-person team.”

Cash flow + planning are fine but a bit generic. The proposals below use **specific behaviors** aligned with real processes in `data/processes.json` and patterns from [A Starting Point](../../blog/posts/a-starting-point.md).

---

## Recommended set (12-person, First Hires)

Coherent narrative: ops are cracking under growth, but one area is already working. Matches the “all-rounder who hit the ceiling” moment (~15 people).

### Card 1 — Process gap

**Recruitment & Hiring** · **1.0 / 4**

> Last hire was “great vibe.” No scorecard. Reference check skipped because you needed them Monday.

*Why:* Universal, slightly embarrassing, clearly fixable. Ties to the all-rounder pattern.

### Card 2 — Your stage — First Hires

**18 processes in scope**

> 11 applicable now · 3 flagged as gaps · Payroll & hiring just became non-optional

*Why:* Replaces abstract bars with **count + consequence** — “scope grew because you grew.”

*(Note: verify exact counts against `processes.json` for the chosen stage before implementing.)*

### Card 3 — Looking good

**Planning & Goals** · **3.6 / 4**

> Three Q priorities on the wall. 15-minute Monday check-in. Team can name them without opening Notion.

*Why:* Concrete “good” — not “weekly syncs” alone. Aligns with stage_focus / wiki tone for planning.

---

## Alternative gaps (card 1)

Pick one that fits the audience you want the hero to speak to.

### Legal · 0.8 / 4 — *investor / diligence angle*

> Cap table in three places. Pre-incorporation code still owned by a founder — not the company.

### Cash Flow · 1.2 / 4 — *runway anxiety* (closest to current)

> Payroll Friday. Runway? “I checked the bank Tuesday.” No rolling forecast.

### Internal Communication about Strategy · 1.4 / 4 — *team friction*

> Roadmap changed in a founder 1:1. Rest of the team found out in Slack.

### Process Documentation · 0.9 / 4 — *duct-tape founder*

> Onboarding is “shadow Sarah for a week.” Sarah is drowning.

### Customer contracts / AR · 1.1 / 4 — *revenue-stage hero*

> Invoices in a spreadsheet. AR over 60 days — founder chases by WhatsApp.

---

## Alternative “looking good” cards (card 3)

Pair with a gap in a **different** domain so the story isn’t “everything is broken” or “everything is fine.”

| If gap is… | Strong “good” card |
|------------|-------------------|
| Recruitment | **Legal (foundation)** · 3.2/4 — “Single `/Legal/` folder. Cap table current. IP assigned at incorporation.” |
| Cash Flow | **Planning & Goals** · 3.4/4 — (recommended set above) |
| Strategy comms | **Internal Communication** · 3.5/4 — “Weekly 30-min sync: priorities, blockers, decisions. Strategy doc linked in calendar invite.” |
| Documentation | **Cash Flow** · 3.8/4 — “13-week rolling forecast. Alert at 9-month runway. Payroll dated in the model.” |

---

## Card 2 — alternatives to the bar chart

The stage card is the most underused. Options beyond counts + stakes:

1. **Counts + stakes** (recommended above)
2. **Named critical processes**  
   > First Hires · **Critical now:** Hiring, Payroll, Cash Flow, Legal filing
3. **Founder-pattern hook** (strongest tie to “A Starting Point”)  
   > 12 people · You’re still the owner on 9 of 11 applicable processes
4. **Before/after scope**  
   > Foundation: 6 in scope → **You: 18 in scope** (8 new since last stage)

---

## Founder archetype sets

If the hero should speak to one pattern explicitly:

### All-rounder who hit the ceiling (~12–15 people)

- Gap: Recruitment (recommended set) or Process Documentation
- Stage: option 3 (founder still owns most processes)
- Good: Planning & Goals (recommended set)

### Visionary who duct-taped ops

- Gap: Process Documentation or Internal Communication about Strategy
- Stage: “8 applicable · 4 gaps · Notion wiki last touched in Q2”
- Good: Cash Flow or Legal (something unexpectedly solid)

### Pre-revenue / Foundation (smaller hero context)

- Gap: Legal — “Building with a co-founder. Nothing on paper about equity or IP.”
- Stage: “~6 critical at founding · Legal, cap table, filing structure”
- Good: Planning & Goals — lighter bar: “One shared doc: what we’re building this quarter.”

---

## Implementation notes

- Process names and scores should match labels in `data/processes.json` / diagnostic UI.
- Scores (e.g. 1.0 / 4) are illustrative for the mock — they don’t need to match a real assessment output.
- Card 2 numbers should be checked against stage logic in `js/app.js` when implementing.
- After copy is chosen: edit `index.html` `.hero-visual` section only; no diagnostic data changes required.

---

## Suggested default if changing one thing

1. Card 1: **Recruitment** gap (or keep **Cash Flow** with sharper copy).
2. Card 2: **“11 applicable · 3 gaps”** + one stakes line — drop or simplify bars.
3. Card 3: **Planning** line with “three priorities on the wall.”
