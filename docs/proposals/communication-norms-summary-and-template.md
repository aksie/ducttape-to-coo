# Communication norms (1.3) — decisions by stage

Stage decision tables and an optional team template. The published wiki ([First Hires](https://aksie.github.io/ducttape-to-coo/wiki.html#1.3--first-hires), [Early Revenue](https://aksie.github.io/ducttape-to-coo/wiki.html#1.3--early-revenue)) condenses this into short actionable pages — use this doc when you want the full decision map or a fill-in template.

---

## What to decide at each stage (and the schools)

Practitioners disagree on channel mix, how much to write down, and how interrupt-driven chat should be — **schools** are those recurring camps; each table shows two common positions and a **middle ground** default that works for many teams at that stage (not a single right answer).

The wiki pages on this site stay short on purpose: there is no one agreed best way, and a long channel-by-channel manual would not add much beyond what Basecamp, GitLab, and operator essays already cover well. This doc only summarizes the schools so you can see the tradeoffs in one place.

What matters is not which school you pick — it is that you **make an explicit choice** and **communicate it** to the team (spoken rules, one-pager, or escalation table — pick what fits your stage).

For each decision: **School A** · **School B** · **Middle ground**.

### Foundation (0–1) — one-liners are enough

| Decide | School A | School B | Middle |
|--------|----------|----------|--------|
| Do we need comms rules at all? | Yes — one channel from day one | Oral until it hurts | **One-liner:** one channel; urgent = call/DM; else channel; same-day if you can |

---

### First hires (2–10) — agree a few decisions; one-pager when remote or cross-role

*Not a channel manual — pick defaults (below), coach three rules, and write one page only when spoken norms stop scaling.*

| Decide | School A | School B | Middle |
|--------|----------|----------|--------|
| **Channel list** | Named `#channels` with jobs early | One `#general` until noisy | **3–5 channels** when CS/eng split or remote (`#general`, `#bugs`, …) |
| **Slack’s role** | Primary internal coordination | Sparingly; wiki/email default | **Movement in chat; memory in wiki/tickets** |
| **Public vs DM** | Public for all ops | DM-first; public feels unsafe | **Public default; DM for sensitive; post consensus back** |
| **What leaves chat** | Everything important codified | Only big decisions | **Decisions + anything needed in 3 months → wiki/ticket** |
| **Response time** | Semi-sync (~hours) | Strict async (days) | **~3 working hours when @-tagged; batch untagged** |
| **How much written** | One-page handbook, required reading | Coach after mistakes | **One page if remote or ≥3 non-founders; else 3 rules aloud** |
| **Enforcement** | Policy | Culture only | **3 non-negotiables; coach the rest** |

**Triggers for more than one-liners:** remote, non-founder hires, customer-facing roles.

**Defer:** full artifact map, OKR channel rules (process `1.1`), on-call matrix.

---

### Early revenue (11–25) — written guidelines and escalation paths

| Decide | School A | School B | Middle |
|--------|----------|----------|--------|
| **Written guidelines** | Full playbook now | Still oral + coach | **One-page + escalation table** |
| **Cross-team paths** | Ticket-only | Slack @eng | **Named path** (e.g. CS → `#bugs` → ticket) |
| **Incidents** | `@channel` liberally | No @channel ever | **Fast lane channel; @channel = prod down / security only** |
| **Email** | Internal email for formal | Slack only internal | **External + formal announce; link to authoritative doc** |
| **Artifact map** | Every topic typed | Ad hoc | **Light table:** decisions, scope, incidents — chat notifies, X owns record |

**Schools break here:** organic-only teams lose handoffs without written escalation.

---

### Growth (26–50)

| Decide | School A | School B | Middle |
|--------|----------|----------|--------|
| **Playbook depth** | GitLab-scale handbook | Keep one living page | **Living doc + SLAs by urgency + quarterly review** |
| **Interrupts** | Everyone monitors Slack | Rotations / `#support-` | **Rotation + SLA for interrupt queues** |
| **Tooling** | Integrated stack | Best-effort links | **Chat ↔ tickets ↔ wiki linked** |

---

### Scaled (51+)

Decide full comms architecture — **point to external references** (e.g. GitLab handbook); don’t duplicate that depth here.

---

## §4 — Optional team template (first hires)

*Fill in tools. Rows marked (inference) glue process `1.1`.*

### Channel list

| Channel | Purpose | Don’t use for |
|---------|---------|---------------|
| `#general` | Company-wide updates | Long debates |
| `#customer-questions` | CS asks (≤4h) | Eng deep dives |
| `#bugs` | Escalations (≤2h) | Root-cause docs (→ ticket) |
| `#announce` | Link to official news | Discussion |
| `fun-*` | Social | Operations |

### Artifact map (minimal)

| Topic | Notify in | System of record |
|-------|-----------|------------------|
| Team priorities / week focus | `#team-*` or check-in | Wiki or team doc |
| Design / tech decision | Slack + deadline | Doc or repo markdown |
| Bug / customer issue | `#bugs` | Ticket |
| Policy change | `#announce` | Handbook page |
| Incident | `#incidents` | Postmortem + ticket |
| HR / comp | DM | HR system |

### Three non-negotiables

1. Chat for movement; wiki/docs/tickets for memory.
2. Decided in Slack → codify within 48h.
3. Public for ops; DM for sensitive.

### Response starting point

- @-tagged Slack: ~3 working hours · Email (formal): ~1 working day · Emergency: call — sparingly
