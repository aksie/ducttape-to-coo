# Project map — zoom out

_Saved 2026-05-14, lightly corrected after a closer look at the wiki state. The destination is an AI-powered fractional COO plus an open-source resource. The blog posts are the entry surface that make the rest legible._

---

## Where we are today (snapshot)

- **Diagnostic tool** — works end-to-end. Filtering by funding/revenue stage works. Variant-aware content for `1.2b` shipped (resolver + first variant set on `main`). Other sensitive processes still use uniform content across funding stages.
- **Wiki** — 130 process × stage cells total. Roughly:
    - ~5 real hand-crafted entries (`1.1--foundation`, `1.1--first-hires`, `2.2--early-revenue`, `2.4--first-hires`, `3.3--first-hires`).
    - ~50 scaffolded skeletons (frontmatter + seeded `stageFocus` + empty sections waiting for content).
    - ~70 minimal stubs.
    - So content density is ≈5%. Format is validated, pipeline produces structured drafts at scale — the bottleneck is **words on the page**.
- **Wiki ↔ diagnostic convergence** — wiki skeletons already have a `## Context variants` block per funding stage. That's the same model as the diagnostic's `variants[]` in `processes.json`. Long-term these can share a content source.
- **Roadmap, homepage, deploy** — all live on GitHub Pages.
- **Blog / AI layer / open-source positioning** — not started.

---

## Where the "A Starting Point" blog post sits in the framework

The blog post is not a single cell. It's a cross-section: a specific pattern of broken processes at a specific cluster of stages.

```
                          Foundation    First Hires   Early Rev    Growth      Scaled
                          (0-1)         (2-10)        (11-25)      (26-50)     (51+)
──────────────────────────────────────────────────────────────────────────────────────
STRATEGIC OPS
1.4 Who Decides What        .             .             ◐            ●           .
1.5 Organizational Design   .             .             ◐            ●           .
1.7 Process Documentation   .             ◐             ●            ●           .
1.8 Cross-Team Coord        .             .             ◐            ●           .

FINANCIAL OPS
2.3 AR / Invoicing          .             ●             ●            ◐           .

PEOPLE OPS
3.1 HR Admin / Payroll      .             ●             ●            ◐           .
3.3 Onboarding              .             ●             ●            ◐           .
3.4 Offboarding             .             ◐             ●            ●           .

LEGAL & OTHER
4.1 Legal / Contracts       .             ●             ●            ◐           .
4.4 Vendor & Procurement    .             ◐             ●            ●           .

Legend: ●  primary (the blog post lands directly here)
        ◐  secondary (related but not the core symptom)
        .  not part of this entry point
```

**Hot zone:** first-hires → early-revenue → growth, exactly the ~15 to ~35 people range described in the blog post.

**Pattern:** symptoms cluster at the *start* of processes (procurement, "how do we do this here"), the *end* of processes (payroll, contracts, offboarding, invoicing), and at the *founder-as-bottleneck mid-step*.

Other blog posts will light up different cross-sections of the same grid:
- "Hired a chief of staff but they're stuck" → different processes, same stages.
- "Investor reporting is breaking" → 1.2b, 2.2, 1.6.
- "Founder is the bottleneck on every decision" → 1.4, 1.5, 1.7.

---

## Todo list by workstream

North star: AI-powered fractional COO + open-source resource. Per workstream, only what's actually next.

### A. Editorial (the entry surface)

#### Already published
- [x] **"A Starting Point"** (`blog/a-starting-point.html`) — the two founder patterns and where processes break (start / end / mitosis). Entry-point post.
- [x] **"The Gap Where Friction Lives"** (`blog/the-gap-where-friction-lives.html`) — Greiner / Turner / McKeown / PAEI mapped to operational maturity stages. The theoretical backbone.

#### Polish pass (do before sharing widely)
- [ ] "A Starting Point" — reads slightly rough in the middle section. The three callout blocks (start/end/middle) are good but the transition into them feels abrupt. Consider adding one sentence before the first pattern block.
- [ ] "The Gap Where Friction Lives" — solid, but the closing "What this means in practice" section is a bit listy. Consider tightening to one or two punchy paragraphs.
- [ ] Both posts — add a byline / author name once you decide how you want to be named on the site.

#### Core "why this exists" posts (not written yet)
- [ ] **Origin story** — why you built this. What you kept seeing as a COO that made you think "there has to be a better way to hand this knowledge over." The personal version of the framework's origin.
- [ ] **What this aims to achieve** — the vision post. Open-source operational knowledge. Fractional COO that scales. Why a framework beats a consultant. Where this is going.
- [ ] **The most common fixable things** — referenced in "A Starting Point" as "a topic for another post." The patterns you see again and again that are actually easy to resolve once named. Should link directly to specific diagnostic processes.

#### Learnings posts (from your own experience)
- [ ] Your most pressing operational lessons — the ones you wish someone had told you or your clients earlier. Format TBD: could be a listicle, could be individual essays, could be one post per maturity stage.
- [ ] Consider: one post per "entry pattern" in the grid above (all-rounder, visionary, chief-of-staff-stuck, etc.) — each post maps to a cross-section and links to the relevant wiki cells.

#### Infrastructure (before scaling editorial)
- [ ] `blog/` landing page already exists. Add it to the site nav on all pages — done.
- [ ] Connect each blog post to a process × stage cross-section, so readers can click through to the relevant diagnostic questions (needs wiki density first).

### B. Diagnostic tool (the self-service surface)
- [x] **Resolver + variants schema (done, on `main`).** Processes can now show different `stageFocus` per funding/revenue/headcount via a `variants[]` array. `1.2b — Shareholder & Investor Reporting` is the validation case.
- [ ] Sweep the other sensitivity hotspots with variants: `1.4 Who Decides What`, `2.2 Financial Reporting`, `2.3 AR / Invoicing`, `4.1 Legal`, plus most of the `5.x` Revenue Ops category.
- [ ] Result page that points to relevant blog post + wiki entry for the top 3 weak spots.
- [ ] Quick "do you need a COO?" mode — a 10-question short version mapping to the entry-point pattern in the blog post.

### C. Wiki content (the depth surface)
- [x] Format validated end-to-end with 5 hand-crafted entries.
- [x] Pipeline produces structured 71-line skeletons (frontmatter, `stageFocus`, empty sections) for the rest.
- [ ] **Pick one column or row of the grid and fill the empty sections in.** Suggested column: `first-hires` (where the most blog-post hotspots already live). Suggested row: `1.1 Company-Level Planning` (already half-done, finish `early-revenue` / `growth` / `scaled`).
- [ ] Decide what "shippable" means for a wiki entry — a checklist on the `_template.md` would help reviewers (mine and contributors').
- [ ] Connect the diagnostic's `variants[]` to the wiki's `## Context variants` section, so they share a source of truth (later — not before more content exists).

### D. AI fractional COO (the destination)
- [ ] Define what v1 actually does: probably a chat that has read the blog posts + wiki + processes.json + stages.json, can run the diagnostic with someone, and can recommend reading.
- [ ] Decide whether v1 is hosted in the repo (open-source prompts + content) or a separate app — this decision affects everything else.

### E. Open source positioning (the resource)
- [ ] Rewrite the README so a stranger lands and understands: what this is, who it's for, how to use it, how to contribute.
- [ ] License clarity (likely CC for content + MIT for code, or similar).
- [ ] Contribution model — defer until a stranger could actually contribute usefully.

---

## Suggested next concrete step

The bottleneck is **content density, not tooling**. Format and pipeline are already solved; what's missing is filled-in cells.

**Next:** pick one column of the grid (likely `first-hires`, since the blog post lands there) and fill the empty sections in those skeleton wiki entries. In parallel, write the next blog post pointing at those entries. That's enough to:

- Validate the entry-point narrative with a real reader.
- Get content density past 5% in a coherent, linkable slice.
- Give the future AI layer a real region of the grid to reason over.

After that: sweep the diagnostic's other variant hotspots while content keeps growing. Don't try to do both in parallel at the same depth — the wiki is the slower, higher-leverage track.
