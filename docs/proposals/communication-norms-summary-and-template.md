# Communication norms (1.3) — decisions, schools, scope

**Process:** Operational Internal Communication Norms · **Sources:** `src-042`–`src-047` · **Pipeline:** granular atoms `atom-192`–`217` kept as substrate; **wiki feedstock:** `src-047` + super-atom `atom-218` only.

**Conclusion:** Don’t compete with Basecamp/GitLab/Vohra on depth. Wiki = **what to decide at your stage** + **which school you’re in** + thin middle-ground defaults. Template in §4 for teams that want more.

---

## Pipeline: redo atoms?

**No.** Keep `atom-192`–`217` for traceability.

**Yes — add synthesis layer:**

| Artifact | Role |
|----------|------|
| `src-047` | Research note — decisions by stage, schools, embedded source map |
| `atom-218` | Super-atom — Phase 2 input for thin wiki (≤7 bullets) |
| This doc | Human-readable proposal + optional team template |

Phase 2 should **not** synthesize 26 granular claims into the wiki.

---

## Path to the wiki (pipeline visible)

```
src-042–046  →  atom-192–217 (substrate, optional audit)
                    ↓
              src-047 + atom-218 (synthesis)
                    ↓
     entries/strategic-ops/communication-norms/first-hires/
       draft.md   ← 12 claims (c-001–c-012)
       trail.md   ← claim → atom/source map; notes substrate atoms
       approval.md ← Phase 3 decisions (pending until reviewed)
                    ↓
     wiki/processes/strategic/1.3--first-hires.md  (Phase 4 publish)
```

**What readers see on the published page**

- `<!-- sources: src-NNN … -->` on every bullet (like legal 4.1 pages)
- **`## Sources`** with links to `wiki-pipeline/sources/src-*.md` pipeline records
- **Pipeline entry link** in Sources — `draft.md` / `trail.md` / `approval.md` for full audit
- **Proposal doc** linked from Tools (depth template, not duplicated in wiki)

**Your step now:** run Phase 3 if you want formal sign-off on each claim:

```bash
cd wiki-pipeline && python3 server.py
# → http://localhost:8765 — open strategic-ops/communication-norms/first-hires
```

Approve claims → re-sync wiki from `draft.md` + `approval.md` (Phase 4) or edit published page to match decisions. After `stage_focus` is set, commit wiki file — pre-commit hook syncs `processes.json`.

---

## Headcount: is there agreement?

**No magic number.** Sources use fuzzy bands and **triggers**:

| Signal | Implication |
|--------|-------------|
| Co-located founding circle, everyone in the loop | **One-liners** enough |
| Remote and/or hire #2+ outside founding context | **Channel list + owners** |
| CS → eng / cross-team handoffs | **Written guidelines + escalation** |
| ~8–10 per working channel (one HN comment) | Split project channels — not a universal rule |

Aligns with `stages.json`: foundation 0–1, first hires 2–10, early revenue 11–25, growth 26–50.

---

## What to decide at each stage (and the schools)

For each decision: **School A** · **School B** · **Middle ground** (wiki default).

### Foundation (0–1) — wiki usually skipped (`future`)

| Decide | School A | School B | Middle |
|--------|----------|----------|--------|
| Do we need comms rules at all? | Yes — one channel from day one | Oral until it hurts | **One-liner:** one channel; urgent = call/DM; else channel; same-day if you can |

---

### First hires (2–10) — thin wiki

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

### Early revenue (11–25) — norms become critical

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

Decide full comms architecture — **point to external references**; don’t duplicate in this wiki.

---

## Cross-cutting schools (reference)

**What to communicate**

- **Agree:** chat ≠ memory; email for external; meetings are exceptions.
- **Split:** Slack-forward vs evergreen-first; public-default vs psych-safety-first; async vs some sync.
- **Middle:** tiered channels with jobs; codify within ~48h.

**How much to write**

- **Agree:** some norms > none; not everything; coach > police.
- **Split:** handbook camp vs organic camp; when to start writing.
- **Middle:** minimum written set — channel list, what leaves Slack, response times, sensitive vs public.

---

## Recommended wiki scope

| Stage | Max bullets | Content |
|-------|-------------|---------|
| Foundation | 0 | Rely on `stage_focus` nudge only |
| First hires | 5–7 | Decisions table condensed + middle-ground defaults + link to this proposal for template |
| Early revenue | 7 | Add escalation + incident lane + light artifact rule |
| Growth+ | 7 | Playbook pointer; don’t expand past `stageFocus` |

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

---

## Source trail

| id | Use |
|----|-----|
| src-047 | Synthesis — primary for Phase 2 |
| atom-218 | Super-atom — wiki feedstock |
| atom-192–217 | Substrate — do not bulk-synthesize |
| src-042–046 | Original practitioner sources |
| `processes.json` 1.3 | `stage_focus` nudges |
