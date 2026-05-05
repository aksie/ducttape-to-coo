# AGENTS.md — Duct Tape to COO

High-signal facts for agents working in this repo. If it's obvious or generic, it's not here.

## Local servers (both often needed)

```bash
# Static site — required, app uses fetch() which won't work from file://
python3 -m http.server 8000
# → http://localhost:8000

# Pipeline approval tool — Python 3 stdlib only, no pip install needed
cd wiki-pipeline && python3 server.py
# → http://localhost:8765
```

## Repo structure that matters

```
├── index.html, diagnostic.html, roadmap.html, wiki.html   # app pages (static, no build)
├── css/, js/                                               # shared styles + app logic
├── data/
│   ├── processes.json      # 28+ processes, stage guidance, primary_axis, sensitivity
│   └── stages.json        # stage definitions (headcount ranges, revenue, funding)
├── wiki/
│   ├── processes/          # 130 published pages: {category}/{N.N}--{phase}.md
│   ├── stages/            # stage portal pages
│   └── dimensions/        # scoring dimension reference
└── wiki-pipeline/         # content pipeline (separate toolchain)
    ├── server.py          # approval tool (stdlib only, port 8765)
    ├── approval-tool.html # single-file UI, no frameworks
    ├── schema.md          # canonical format spec for all pipeline files
    ├── sources/src-NNN.md
    ├── atoms/atom-NNN.md
    └── entries/{process}/{phase}/{draft,trail,approval}.md
```

## Pipeline conventions (easy to get wrong)

- **Source IDs**: `src-NNN` (zero-padded, sequential) → check highest existing number first
- **Atom IDs**: `atom-NNN` (zero-padded, sequential) → independent counter from sources
- **Claim IDs**: `c-NNN` (resets per process/phase draft, not global)
- **Process slugs** (used in `entries/` dirs): `strategic-ops`, `financial-ops`, `people-ops`, `legal-ops`, `revenue-ops`
- **Phase slugs**: `foundation`, `first-hires`, `early-scale`, `growth`, `scaled`
- **Published wiki pages**: `wiki/processes/{category}/{N.N}--{phase}.md`
- **`extracted_by: human:username`** atoms get weight 1.2× (elevated vs LLM-extracted)
- **Max 7 bullets per section** in synthesized wiki pages
- **Warning signs** must use one of 3 categories: `output_quality`, `founder_time`, `process_entry`
- **`last_edited` timestamp format**: `YYYY-MM-DD HH:MM:SS +0200` (space-separated, not T-separated)

## Wiki page format (5 sections, in order)

1. `## What good looks like at this phase` — from `target_state` atoms
2. `## What you actually need to do` — from `action` atoms
3. `## Warning signs you're behind` — from `warning_sign` atoms (grouped by category)
4. `## How this evolves next` — from `evolution` atoms
5. `## Tools & resources` — from `tool_resource` atoms

Each bullet: **bold claim** + 2–4 line explanation + `<!-- sources: src-NNN -->`.
Each claim marked with `<!-- claim-id: c-NNN -->` in draft.md.

## Pipeline phases (see `wiki-pipeline/prompts/`)

| Phase | Prompt | Output |
|-------|--------|--------|
| 0+1 | `phase-0-discovery-and-extraction.md` | sources + atoms |
| 2 | `phase-2-synthesis.md` | draft.md + trail.md |
| 3 | `phase-3-publish.md` | published wiki page |
| — | `practitioner-to-pipeline.md` | reverse workflow: experience → page → backfill pipeline |

## Known gotchas

- **No build step** — this is static HTML/JS, no npm, no compilation
- **No `.gitignore`** — repo tracks everything including `.DS_Store`
- **`.nojekyll`** exists — GitHub Pages Jekyll is disabled intentionally
- **`approval.md` auto-creation** in `server.py` sets `last_updated` but doesn't update it after subsequent saves
- **Stub detection** in `wiki.html`: pages with only template content are dimmed (opacity 0.8), pages with content are highlighted
- **`wiki-pipeline/entries/` may appear empty** — entry dirs use process slugs like `strategic-ops/`, not `strategic/`

## References

- Full pipeline schema: `wiki-pipeline/schema.md`
- Pipeline overview: `wiki-pipeline/README.md`
- Practitioner reverse workflow: `wiki-pipeline/prompts/practitioner-to-pipeline.md`
- Session summaries: `docs/session-YYYY-MM-DD.md`
- Wiki page template: `wiki/processes/_template.md`
