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
├── content-map.html                                        # visual content coverage map
├── blog/
│   ├── posts/drafts/*.md   # WIP drafts — never built; commit freely
│   ├── posts/*.md          # PUBLISHED — triggers build on commit
│   ├── _template.html      # HTML shell (placeholders: {{post_title}} etc.)
│   ├── build.py            # generates blog/*.html from posts/*.md
│   ├── *.html              # generated — do not edit by hand
│   └── index.html          # generated — lists all posts from frontmatter
├── css/, js/                                               # shared styles + app logic
├── data/
│   ├── processes.json      # 33 processes, stageFocus, primary_axis, conditions, variants
│   └── stages.json         # stage definitions (headcount ranges, revenue, funding)
├── docs/
│   ├── proposals/          # undecided / not-yet-implemented proposals
│   │   ├── 1.2b-variants.md
│   │   └── deploy-hetzner-coolify.md
│   ├── pipeline.md         # wiki pipeline architecture reference
│   └── session-YYYY-MM-DD.md  # session summaries
├── wiki/
│   ├── processes/          # 130 published pages: {category}/{N.N}--{phase}.md
│   ├── stages/             # stage portal pages
│   ├── dimensions/         # scoring dimension reference
│   └── sync.py             # syncs stage_focus: frontmatter → data/processes.json
└── wiki-pipeline/          # content production toolchain (not public-facing)
    ├── server.py           # approval tool (stdlib only, port 8765)
    ├── approval-tool.html  # single-file UI, no frameworks
    ├── schema.md           # canonical format spec for all pipeline files
    ├── prompts/            # LLM prompts for each pipeline phase
    ├── sources/src-NNN.md
    ├── atoms/atom-NNN.md
    └── entries/{process}/{phase}/{draft,trail,approval}.md
```

## Wiki pipeline — what it is and when to use it

`wiki-pipeline/` is the content production toolchain for wiki pages. It is **not** part of the public site. Its output is the markdown files in `wiki/processes/`.

**The two entry points:**

| Starting point | Use this prompt |
|---|---|
| External source (handbook, blog post, talk) | `prompts/phase-0-discovery-and-extraction.md` → `phase-2-synthesis.md` → `phase-3-publish.md` |
| Practitioner experience (your own or someone's) | `prompts/practitioner-to-pipeline.md` (reverse workflow: write the page first, backfill the pipeline) |

**The production flow (source-first):**
1. **Phase 0+1** — `phase-0-discovery-and-extraction.md`: read a source, extract atoms (knowledge units) into `wiki-pipeline/atoms/`, record the source in `wiki-pipeline/sources/`
2. **Phase 2** — `phase-2-synthesis.md`: synthesize atoms into a `draft.md` + `trail.md` in `wiki-pipeline/entries/{process}/{phase}/`
3. **Approval** — run `wiki-pipeline/server.py` (port 8765), review each claim in the browser UI, write decisions to `approval.md`
4. **Phase 3** — `phase-3-publish.md`: apply approval decisions, produce the final page, write it to `wiki/processes/{category}/{N.N}--{phase}.md`
5. **Post-publish** — add `stage_focus:` to the page's frontmatter and commit; the pre-commit hook syncs it to `processes.json`

**When to skip the pipeline:**
For short stubs or one-sentence entries, it is fine to edit `wiki/processes/` directly. Use the pipeline when you have a real source (external or practitioner) and want claims to be traceable.

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

## Wiki publish workflow

After writing a completed wiki page to `wiki/processes/{category}/{N.N}--{stage}.md`:

1. Add a `stage_focus:` field to the page's YAML frontmatter (1–2 sentences, actionable, diagnostic-nudge style — not a copy of the wiki intro).
2. Commit the wiki file. The **pre-commit hook** runs `wiki/sync.py --apply --quiet` automatically and stages `data/processes.json` if it changed.
3. If you want to preview what would change before committing: `python3 wiki/sync.py` (dry-run, no writes).

### `stage_focus:` field format

```yaml
---
process_id: "1.1"
stage: "foundation"
...
stage_focus: "Pick 3–5 quarterly priorities with the whole team. Put them somewhere impossible to miss and run a 15-minute weekly check."
---
```

Rules:
- 1–2 sentences. Imperative, specific, actionable.
- Written for the **diagnostic "For your stage:" nudge** — not an intro paragraph.
- Must be a single YAML scalar (no line breaks). Use a quoted string if it contains colons.
- **Only add it when the wiki page has real content.** Leave it out of stubs and one-sentence entries — `processes.json` keeps its existing value for those.

### wiki/sync.py

```bash
python3 wiki/sync.py             # dry-run: print what would change
python3 wiki/sync.py --apply     # write changes to processes.json
```

- Skips any wiki file that doesn't have `stage_focus:` in its frontmatter.
- Safe to run at any time — non-destructive for cells without the field.
- The pre-commit hook runs this automatically; you only need to run it manually if you're debugging or updating outside a commit.

## Blog post workflow

**Drafts vs published:**
- `blog/posts/drafts/*.md` — work in progress; never built; commit freely
- `blog/posts/*.md` (root of posts/) — published; build triggers automatically on commit

**To draft a new post:** create it in `blog/posts/drafts/`. Commit as often as you like — nothing is built or published.

**To publish:** move the file to `blog/posts/` and commit. The pre-commit hook runs `blog/build.py` automatically and stages the generated HTML in the same commit.

**To edit a published post:** edit `blog/posts/<slug>.md` and commit. Hook rebuilds automatically.

**Manual build** (if needed outside a commit): `python3 blog/build.py`

Required Python packages (one-time): `pip install markdown python-frontmatter`

**Never hand-edit `blog/*.html`** — changes will be overwritten on the next build.

## Known gotchas

- **Wiki sync is automatic via pre-commit hook** — adding `stage_focus:` to a wiki file's frontmatter and committing is enough; the hook patches `processes.json` and re-stages it. Run `python3 wiki/sync.py` manually to preview.
- **Blog build is automatic via pre-commit hook** — staging any `blog/posts/*.md` (not in `drafts/`) triggers `blog/build.py` and stages the generated HTML; run manually with `python3 blog/build.py` if needed outside a commit
- **`blog/posts/drafts/`** — files here are never built; move to `blog/posts/` to publish
- **No build step** — this is static HTML/JS, no npm, no compilation (except the blog)
- **No `.gitignore`** — repo tracks everything including `.DS_Store`
- **`.nojekyll`** exists — GitHub Pages Jekyll is disabled intentionally
- **`approval.md` auto-creation** in `server.py` sets `last_updated` but doesn't update it after subsequent saves
- **Stub detection** in `wiki.html`: pages with only template content are dimmed (opacity 0.8), pages with content are highlighted
- **`wiki-pipeline/entries/` may appear empty** — entry dirs use process slugs like `strategic-ops/`, not `strategic/`

## References

- Full pipeline schema: `wiki-pipeline/schema.md`
- Pipeline architecture overview: `docs/pipeline.md`
- Practitioner reverse workflow: `wiki-pipeline/prompts/practitioner-to-pipeline.md`
- Session summaries: `docs/session-YYYY-MM-DD.md`
- Wiki page template: `wiki/processes/_template.md`
- Proposals (undecided): `docs/proposals/`
