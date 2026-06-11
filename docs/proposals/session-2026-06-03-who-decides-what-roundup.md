# Session roundup — 2026-06-03 (Who Decides What + wrap)

Tired-friendly summary of what landed today, what's only local, and the smallest sensible next steps.

---

## Wiki & framework content (today)

### Shipped to `main` (commit `39e809c`, pushed)

| File | What it is |
|------|------------|
| [who-decides-what-summary-and-direction.md](who-decides-what-summary-and-direction.md) | Full **1.4** direction doc: two layers (founder circle → team list), ABC buckets, consult→decide→commit, personal runway, sources, template, review prompts |
| [blog/posts/drafts/who-decides-when-founders-disagree.md](../../blog/posts/drafts/who-decides-when-founders-disagree.md) | Practitioner blog draft (fork / stall / trust / ABC / template) — **not published** (stays in `drafts/`) |

### Done earlier this week (same thread, already on `main`)

| Work | Commits (approx.) |
|------|-------------------|
| Legal split Route A (4.1 / 4.5 / 4.6 diagnostic) | `c98b8b4` |
| **3.2 Hiring approval chain** — pipeline + wiki first-hires + early-revenue | `e0e7a05`, `8157a5f`, `de01413` |

### Local only — not committed

| Path | Status |
|------|--------|
| `wiki-pipeline/entries/strategic-ops/who-decides-what/first-hires/source-discovery.md` | Phase 1 Step 1 complete; URLs Tracks A / B / B-fin / C |
| `.cursor/skills/virtual-coo/` | Virtual COO skill (prompts, setup HTML, checkins) — **separate track**, not in repo yet |
| `docs/company-state.md` | COO skill input — local |

### Wiki still stub

- [1.4 — First Hires](https://aksie.github.io/ducttape-to-coo/wiki.html#1.4--first-hires) — empty template; publish after pipeline Phases 2–4

---

## What we figured out (substance)

**1.4 @ first hires is not RACI.** It's:

1. **Founder circle** — AOR + personal runway + founder sync → ABC map among founders  
2. **Team-wide** — short list of what still needs founder OK (hiring → **3.2**, big spend, pivot)

**Disagreement:** **consult → decide → commit** (Advice process, DRI, Grove, RAPID). “Disagree and commit” is only the **close**, after the decider chased input.

**ABC buckets** (Ascent + Ramp + Mercury): A = domain owner + consult duty; B = discuss + CEO tie-break @ 50/50; C = unanimous (hire approval, equity, fundraise, pivot, large spend).

**Blog + proposal stay aligned** — edit either → mirror the other.

---

## Skills (virtual COO)

Not part of today's git commit. Lives under `.cursor/skills/virtual-coo/`:

- `SKILL.md` — agent instructions  
- `reference.md`, `coo-setup.html` — setup / reference  
- `prompts/weekly.txt`, `prompts/quarterly.txt` — check-in prompts  
- `automation-draft.md` — future scheduled run notes  
- `coo-checkins.ics` — calendar feed  

**When ready:** decide if `.cursor/` goes in repo or stays personal; if repo, add only skill files (not secrets); `docs/company-state.md` is the practitioner input file per `automation-draft.md`.

---

## Outreach todos (added 2026-06-03)

- **LinkedIn — “Nalden” post** — AI drafts in Nalden’s voice; meta joke that Stefan let AI write it as Nalden (see `ops-todo.md`)
- **Guest voices** — Trailhead + others: write about the framework and their contribution (wiki contribution or guest post)

---

## Easy actions (pick one when rested)

No urgency. Smallest wins first.

| # | Action | ~time |
|---|--------|-------|
| 1 | ~~**Commit** `source-discovery.md`~~ — done in follow-up commit | ✓ |
| 2 | **Read** proposal review prompts § end — tick defaults (ABC centerpiece, first hire = C, fold foundation into first-hires) | 10 min |
| 3 | **Pipeline resume** — ask agent: “Create `src-061` from proposal + corpus health, then Phase 2 draft for 1.4 first-hires” | 1 session |
| 4 | **Blog** — publish when happy: move `who-decides-when-founders-disagree.md` → `blog/posts/` (hook builds HTML on commit) | 5 min |
| 5 | **Virtual COO** — commit skill + `company-state.md` if you want it tracked, or leave local | optional |

**Do not do tonight:** full atom extraction of all 25 URLs, approval tool review, or `stage_focus` until draft exists.

---

## Pipeline resume cheat sheet

Neat path (same as **1.3** comms norms):

```
proposal (src-061 research_note)
  → ~8–12 selective src-062+ atoms
  → draft.md + trail.md  (strategic-ops/who-decides-what/first-hires/)
  → approval tool (port 8765)
  → wiki/processes/strategic/1.4--first-hires.md + stage_focus
```

Entry dir: `wiki-pipeline/entries/strategic-ops/who-decides-what/first-hires/`

Cross-refs in wiki (don't duplicate): **3.2** hiring, **1.3** codify decisions, **4.1** co-founder scenarios, **2.1** company runway.

---

## Defaults locked for pipeline (unless you change them)

- **ABC map** = centerpiece artefact  
- **First hire** = Bucket **C** (unanimous approval); 3.2 = process  
- **Foundation** founder-circle → fold into **1.4 first-hires** (no separate foundation page for now)  
- **Consult → decide → commit** = wiki default; Wistia = school row only  
- **Practitioner contribution** for 1.4 = optional later (not blocking)

---

## Links

- Proposal: [who-decides-what-summary-and-direction.md](who-decides-what-summary-and-direction.md)  
- Blog draft: [who-decides-when-founders-disagree.md](../../blog/posts/drafts/who-decides-when-founders-disagree.md)  
- Discovery (local): [source-discovery.md](../../wiki-pipeline/entries/strategic-ops/who-decides-what/first-hires/source-discovery.md)  
- Backlog: [ops-todo.md](../ops-todo.md)
