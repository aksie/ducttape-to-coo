# Company state

The `virtual-coo` skill's memory. It reads this file before every check-in,
health check, or event response, and updates it afterwards. Fill in the
placeholders below for your company. Keep it short and current — this is a
working file, not a document.

> Template note: this is a template with placeholder values. **Copy it into your
> own project workspace as `company-state.md`** (not into the Duct Tape to COO
> product repo) and replace the placeholders with your real context. The skill
> reads and updates that copy over time.

## Context

| Field | Value |
|---|---|
| Company name | _[your company]_ |
| Current stage | _foundation / first-hires / early-revenue / growth / scaled_ |
| Headcount | _[N]_ |
| Revenue stage | _pre-revenue / early-customers / scaling-low-complexity / enterprise-or-mixed / multi-model_ |
| Funding stage | _bootstrapped / angel-fff / venture-early / venture-growth / public_ |

(Stage definitions live in `data/stages.json`. The current stage is usually
driven by headcount; revenue and funding stages gate the conditional processes.)

## Cadence log

| Event | Last done |
|---|---|
| Weekly check-in | _[YYYY-MM-DD]_ |
| Quarterly health check | _[YYYY-MM-DD]_ |

## Recent events

Newest first. The skill watches these to take initiative (e.g. a new hire →
onboarding templates).

- _[YYYY-MM-DD] — e.g. "Signed first sales hire, starts in 3 weeks"_

## Open action items

From check-ins and health checks. Each: action · owner · source wiki page.

- [ ] _[action]_ · owner: _[who]_ · source: _wiki/processes/.../N.N--stage.md_

## Foundation basics (minimal ops spine)

Filled in on the **first conversation**; updated when a pillar moves. Status:
`not started` | `partial` | `done`.

| Pillar | Wiki | Status | Notes |
|---|---|---|---|
| Goals (1.1) | `strategic/1.1--{stage}.md` | _not started_ | |
| Roles linked to goals (1.4 / 4.1) | `strategic/1.4--{stage}.md`, `legal/4.1--foundation.md` | _not started_ | |
| Monthly reporting (1.2b) | `strategic/1.2b--{stage}.md` | _not started_ | |
| Company filing / ops registry (4.1) | `legal/4.1--foundation.md` | _not started_ | Ducttape OS path: _[optional]_ |

## Notes

_Anything else the COO should remember about how this company operates._
