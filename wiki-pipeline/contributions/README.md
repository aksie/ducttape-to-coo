# Practitioner Contributions

This directory holds raw practitioner knowledge — interview notes, written reflections, or experience dumps — that feed into the wiki pipeline.

**You don't need to know the pipeline to contribute here.** Just write what you know in plain text. A maintainer (or LLM using the extraction prompt) will convert it into atoms and feed it through the pipeline.

---

## How to contribute

**Option 1 — GitHub issue (easiest, no file management)**
Open a [Practitioner experience](https://github.com/aksie/ducttape-to-coo/issues/new?template=practitioner-experience.md) issue. Fill in the form in your browser. Done.

**Option 2 — Drop a file here**
Copy `_template.md` from this directory, fill it in, and open a pull request. Or send the filled-in file to a maintainer — they'll add it.

**Option 3 — Just send a message**
Email or DM the maintainer with your thoughts in whatever format you like. They'll convert it into the right format.

---

## What makes a good contribution

- **Stage-specific**: what's true at 5 people is different from 50 people. The more specific to a company size, the more useful.
- **First-person**: "we did X and it broke because Y" is worth ten generic "best practices" bullets.
- **The why**: what's the mechanism? What breaks if you skip it? Why does it matter at this stage? This is the hardest part to find in published sources and the most valuable thing you can contribute.
- **Warning signs**: what are the red flags that this process is missing or broken? These are almost never in vendor content and extremely valuable.

You don't need all of these — even a partial contribution is useful. Write what you know and flag what you're uncertain about.

---

## Files in this directory

| File | What it is |
|------|------------|
| `legal-4.1--startup-milestones-interview.md` | Legal expert interview — earliest-stage legal ops (src-041) |
| `legal-4.1--filing-structure.md` | Practitioner DD / filing structure experience |
| `people-3.1--hr-filing.md` | HR filing from first hire |
| `financial-2.5--formal-filing.md` | Financial formal filing |
| `financial-2.1-2.2--scenario-planning-first-hires.md` | Scenario-style planning — blog-style source for wiki 2.1 / 2.2 @ first hires |
| `_template.md` | Copy this to start a new contribution |

## File naming

Name your file `{process}-{stage}-{your-name-or-initials}.md`, e.g.:
- `office-facilities-first-hires-sv.md`
- `financial-ops-early-scale-jane.md`
- `hiring-foundation-anon.md`

If you're not sure about the process or stage name, leave it as `unknown` — a maintainer will sort it.

## Same text as a blog post

Write the piece here first (essay flow is fine — Phase 1b and the wiki synthesis read this file). When you want a blog preview or publish:

1. Copy everything **below** the contribution YAML block (from the first `##` heading through `<!-- pipeline-only -->`, excluding maintainer notes after that marker).
2. Paste into `blog/posts/drafts/{slug}.md`.
3. Add **blog** frontmatter at the top (see any file in `blog/posts/drafts/` for title, subtitle, CTA, slug, etc.).
4. Preview: `python3 blog/build.py --preview-draft {slug}`
5. To publish: move the draft to `blog/posts/` and commit.

No sync machinery — copy when the blog version should change.
