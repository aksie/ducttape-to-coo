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

## File naming

Name your file `{process}-{stage}-{your-name-or-initials}.md`, e.g.:
- `office-facilities-first-hires-sv.md`
- `financial-ops-early-scale-jane.md`
- `hiring-foundation-anon.md`

If you're not sure about the process or stage name, leave it as `unknown` — a maintainer will sort it.
