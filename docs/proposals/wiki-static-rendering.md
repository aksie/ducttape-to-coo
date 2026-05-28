# Proposal: Static HTML Rendering for Wiki Pages

**Status:** Draft — not yet scheduled  
**Created:** 2026-05-28  
**Author:** Stefan Verkerk

---

## Background

The wiki currently renders markdown to HTML at runtime in the browser, using `marked.js` loaded via a local bundle (`js/marked.min.js`). This works well while content is sparse, but has three structural downsides:

1. **SEO is weak.** Search engines see only a blank `<div id="wiki-main">` — the actual content is injected after page load by JavaScript. For a resource site like this, crawlability matters.
2. **Render latency.** Every page visit fetches the markdown file, parses it, and injects HTML. With a fast connection it's imperceptible; on mobile or slow networks it's a visible flash.
3. **Two rendering pipelines.** The blog already has a proper static build (`blog/build.py`). Maintaining two patterns adds cognitive overhead.

## Current state (client-side, JS)

```
wiki/processes/<category>/<process>--<stage>.md
      │  (fetched on demand via fetch())
      ▼
marked.parse()          ← in-browser, every page visit
      │
      ▼
wiki.html injects HTML into <div id="wiki-main">
```

**Small fixes already applied (May 2026):**
- Replaced CDN `marked.js` with a pinned local bundle (`js/marked.min.js` v15.0.12).
- Hardened the frontmatter parser: uses `indexOf(':')` instead of `split(':')`, handles CRLF line endings, skips blank/comment lines.

These fixes remove the two most acute risks (CDN breakage, fragile value parsing) without changing the architecture.

## Proposed future state (static HTML)

```
wiki/processes/<category>/<process>--<stage>.md
      │  (at build time, triggered by pre-commit hook or CI)
      ▼
wiki/build.py           ← new script, mirrors blog/build.py
      │
      ▼
wiki/<category>/<process>--<stage>.html   ← committed to repo
      │
      ▼
GitHub Pages serves static HTML directly (no JS rendering needed)
```

`wiki.html` becomes a lightweight entry point / index that links to the static pages, retaining the current sidebar navigation.

## Implementation outline

### Phase 1 — Build script

Create `wiki/build.py` modelled on `blog/build.py`:

```python
# Rough pseudocode
for md_file in wiki/processes/**/*.md:
    fm, body = parse_frontmatter(md_file)
    html_body = markdown.markdown(body, extensions=['tables', 'fenced_code', 'toc'])
    rendered = WIKI_TEMPLATE.format(fm=fm, content=html_body)
    write to wiki/pages/<category>/<process>--<stage>.html
```

Template includes: breadcrumb, badges (priority / sensitivity), stage tags, GitHub edit link, `<meta>` description from `stage_focus`.

### Phase 2 — SEO metadata

For each generated page, inject:

```html
<title>{process_name} — {stage_label} | Ducttape to COO</title>
<meta name="description" content="{stage_focus}">
<link rel="canonical" href="https://aksie.github.io/ducttape-to-coo/wiki/pages/{slug}.html">
```

This gives Google something to index per process × stage combination.

### Phase 3 — Navigation wiring

Update `wiki.html` sidebar links to point at the static HTML files (`wiki/pages/...`) instead of fetching markdown. Keep the JS-rendered path as a graceful fallback for any entry that hasn't been built yet.

### Phase 4 — Pre-commit hook integration

Extend `.git/hooks/pre-commit` to run `wiki/build.py` when any `wiki/processes/**/*.md` file is staged (in addition to the existing `wiki/sync.py` run). Stage the generated HTML files automatically, same as the blog build.

## When to implement

Trigger when:
- **~25–30 complete wiki entries exist** (currently ~5). Below this threshold the SEO benefit doesn't justify the architectural complexity.
- Or when there is a concrete need for Google indexing (e.g. planning a content marketing push).

The small fixes applied in May 2026 give a stable, risk-free baseline in the meantime.

## Effort estimate

| Phase | Effort |
|---|---|
| Build script (`wiki/build.py`) | ~2 h |
| Template + SEO metadata | ~1 h |
| Navigation wiring in `wiki.html` | ~1 h |
| Pre-commit hook extension | ~30 min |
| Testing / debugging | ~1 h |
| **Total** | **~5–6 h** |

## Files affected

| File | Change |
|---|---|
| `wiki/build.py` | New — static build script |
| `wiki/pages/**/*.html` | New — generated output (gitignored or committed) |
| `wiki.html` | Update sidebar links; keep JS fallback |
| `.git/hooks/pre-commit` | Add `wiki/build.py` step |
| `AGENTS.md` | Document new workflow |
