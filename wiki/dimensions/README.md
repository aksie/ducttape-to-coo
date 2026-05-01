# Scoring dimensions

Every process in this framework is scored on five dimensions, each on a 0–4 scale. The dimensions are independent — a process can be highly automated but owned by nobody, or well-documented but unreliable.

## The five dimensions

### Reliability — Is it working?
Does the process produce consistent outcomes, or does it fail silently?

| Score | What it means |
|---|---|
| 0 | Frequent failures. Often doesn't work or gets forgotten. |
| 1 | Inconsistent. Works sometimes, depends on who's doing it. |
| 2 | Mostly reliable. Works but requires vigilance. |
| 3 | Reliable. Consistently good outcomes, rare issues. |
| 4 | Optimized. Proactively improved, metrics tracked, exceeds expectations. |

---

### Ownership — Who owns it?
Is there a named, accountable person responsible for this process?

| Score | What it means |
|---|---|
| 0 | No owner. Falls through cracks or the CEO does it. |
| 1 | Ad hoc owner. Whoever remembers or cares does it. |
| 2 | Named owner. Someone is responsible but it's not their main job. |
| 3 | Dedicated owner. Someone owns this as part of their role. |
| 4 | Team or function. Multiple people with clear RACI, backup coverage. |

---

### Documentation — Is it written down?
Can someone new follow the process without asking someone?

| Score | What it means |
|---|---|
| 0 | Nonexistent. No process, people don't know what to do. |
| 1 | Tribal knowledge. Process exists in someone's head. |
| 2 | Partial and not updated. Something is written but incomplete or stale. |
| 3 | Written and current. Documented well enough for someone new to follow. |
| 4 | Accessible and maintained. Easy to find, people actually use it, updated when the process changes. |

---

### Automation — Is it automated?
Is the process running on tools and workflows, or on manual effort?

| Score | What it means |
|---|---|
| 0 | Manual. Everything improvised, email-based, or purely manual. |
| 1 | Spreadsheet reliance. Using generic tools (Excel, Google Sheets). |
| 2 | Dedicated software. Using a purpose-built tool for this process. |
| 3 | Connected systems. Tools integrated, workflows partially automated. |
| 4 | Self-service automation. Highly automated, minimal manual intervention, exception-based. |

---

### Scalability — Can it handle growth?
Will this process break when you double in size?

| Score | What it means |
|---|---|
| 0 | Will break immediately. Can't handle current load. |
| 1 | At capacity. Works now but can't handle growth. |
| 2 | Room to grow. Can handle some more volume without changes. |
| 3 | Designed to scale. Can handle 2–10x with minor tweaks. |
| 4 | Built for scale. Designed for 10x+ growth, modular and flexible. |

---

## How to use dimensions in the wiki

When writing a process page, the **What good looks like** section implicitly reflects a target score on each dimension for that stage. You don't need to score explicitly in the wiki — the diagnostic tool does that. But it's useful to write with the dimensions in mind: is the guidance you're giving reliability-focused, ownership-focused, or automation-focused?

For the agent: dimensions are retrievable from this page. When a user asks "how do I improve ownership of X process?", the agent should retrieve this page + the relevant process page and respond to the ownership dimension specifically.
