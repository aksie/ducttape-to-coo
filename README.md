# Duct Tape to COO

Open-source operational maturity framework for founding teams — initiated by [@aksie](https://github.com/aksie) ([Stefan Verkerk](https://www.linkedin.com/in/stefanverkerk/)).

🚀 **Live**: [aksie.github.io/ducttape-to-coo](https://aksie.github.io/ducttape-to-coo) · [About the initiative](https://aksie.github.io/ducttape-to-coo/about.html)

---

## What is this — and what we're building

**Live today:** a stage-based framework — diagnostic, wiki, blog, templates, and a Virtual COO agent skill (beta) — so founding teams can see where ops are strong, where they're duct-taped, and what to fix first for *their* size and context.

**Building next:** deeper wiki coverage, sharper agent check-ins, and automations — toward an open-source, context-aware **fractional COO** that answers "what should we do about [this process] right now?" with operator judgment, not generic advice.

Most startups run on duct tape longer than they should. This project helps founders and operators:
- **Identify** which processes matter at your stage (from a handful at founding to 30+ as you scale — not all at once)
- **Assess** maturity across reliability, ownership, documentation, automation, and scalability
- **Prioritize** what to fix now vs. later, using team size, revenue, and funding context
- **Track** progress as the company grows

Stage-based means guidance for five founders pre-revenue differs from a 40-person Series B company — written for where you are, not a 500-person playbook.

---

## Why open source?

We believe operational knowledge shouldn't be locked behind expensive consultants or available only to well-funded companies.

Keeping this open source means:
- **Startups without funds** can access the same framework as well-resourced ones
- **Non-profits and social enterprises** can use and adapt it freely
- **The community** can contribute knowledge back — improving guidance for everyone
- **The model stays honest** — no incentive to gate features or add paywalls

If this becomes an AI-powered tool, the core will stay open source. We may explore voluntary contributions or pricing for commercial users at some point — but the framework, the knowledge base, and the tool will always be free for individuals, non-profits, and early-stage startups without the means to pay. The goal is access, not lock-in.

---

## What's here now

- **Diagnostic** — self-assessment calibrated to your stage; scope grows with you (roughly six critical areas at founding, 30+ applicable at scale)
- **Wiki** — operational knowledge by process and stage (130 pages, content growing via a source-traceable pipeline)
- **Blog** — deep dives with more opinion and "why" than the wiki
- **Templates** — copy-ready ops structures (filing, diligence, planning)
- **Roadmap** — visual stage-by-stage map of what matters when
- **Data model** — `processes.json` and `stages.json` with primary axis and sensitivity fields, ready for context-aware retrieval

---

## Quick start

### Use it online
[aksie.github.io/ducttape-to-coo](https://aksie.github.io/ducttape-to-coo)

### Run locally

```bash
git clone https://github.com/aksie/ducttape-to-coo.git
cd ducttape-to-coo
python3 -m http.server 8000
# open http://localhost:8000
```

> A local server is required — the app loads JSON via `fetch()` and won't work opened directly as a file.

---

## Project structure

```
ducttape-to-coo/
├── index.html              # Overview / landing page
├── about.html              # Initiative background, team, open-source rationale
├── diagnostic.html         # Self-assessment tool
├── roadmap.html            # Stage-by-stage visual roadmap
├── wiki.html               # Wiki reader (markdown rendered in browser)
├── css/styles.css          # Shared styles
├── js/app.js               # Diagnostic application logic
├── data/
│   ├── processes.json      # Stage-scoped process catalog with mappings, guidance, and context axes
│   └── stages.json         # Stage definitions, employee ranges, revenue and funding sequences
├── templates/
│   ├── index.html          # Template library (grouped by wiki process)
│   └── docs/               # Markdown sources for copy-ready ops structures
├── blog/
│   ├── posts/              # Published posts (markdown → static HTML via build.py)
│   │   └── drafts/         # WIP drafts — never built, commit freely
│   ├── build.py            # Generates blog/*.html from posts/*.md
│   └── index.html          # Generated post index
├── wiki/
│   ├── stages/             # Stage portal pages (human entry point)
│   ├── processes/          # 130 atomic process × stage pages (agent retrieval units)
│   └── dimensions/         # Scoring dimension reference
└── wiki-pipeline/
    ├── schema.md           # Full format specification for the content pipeline
    ├── server.py           # Approval tool server (Python 3, stdlib only, port 8765)
    ├── approval-tool.html  # Claim review UI (single file, no frameworks)
    ├── prompts/            # LLM and human prompts for each pipeline phase (1–4)
    ├── sources/            # Source research files (one per article/post/interview)
    ├── atoms/              # Extracted claims from sources (one per insight)
    └── entries/            # Synthesised wiki entries with audit trail and approval status
```

---

## Contributing

Contributions are welcome — especially wiki content and source research.

**What's most needed right now:**
- Your learnings as an operator in processes that you are specialised in. For example: what is needed as a bare minimum for legal aspects in the phase of first hires. 
     - Add these as Wiki page content — see `wiki/processes/_template.md` for the template
     - Add individual lessons from external blogposts, AKA source research and atom extraction via the pipeline (see `wiki-pipeline/README.md`)
     - Refinements to stage-specific guidance in `data/processes.json`
     - Or just reach out to me to add you knowledge in a format that suits you. 
- Bug reports and UX feedback via GitHub Issues

**To contribute wiki content directly:**
1. Fork the repo, create a branch
2. Pick any stub file in `wiki/processes/` and fill in the sections
3. Open a pull request

**To contribute via the research pipeline:**
1. Add a source file to `wiki-pipeline/sources/`
2. Extract atoms to `wiki-pipeline/atoms/`
3. Propose a draft entry or update an existing one
4. Run the approval tool: `python3 wiki-pipeline/server.py` → http://localhost:8765
5. Open a pull request with sources, atoms, draft, trail, and approval files

You don't need to be a developer to contribute — if you can edit a text file, you can contribute. See `wiki-pipeline/README.md` for the full contributor workflow.

---

## Roadmap

### Foundation (live)
- [x] Diagnostic tool — self-assessment across 33 processes and 5 stages, with context selectors for team size, revenue, and funding
- [x] Diagnostic tool refined across 5 real organisations — calibrated process selection, stage logic, and scoring based on actual use
- [x] Wiki — 130 scaffolded pages with reader and hash routing
- [x] Content pipeline — 4-phase workflow (extraction → synthesis → human review → publish) producing source-traceable, claim-level wiki entries
- [x] Blog — static posts built from markdown
- [x] Data model — `primary_axis` and `sensitivity` fields per process, ready for context-aware retrieval

### In progress
- [ ] Extracting operational knowledge from practitioner sources into wiki entries, process by process and stage by stage — guided by structured prompts in the repo and run with LLMs that have web access
- [x] Virtual COO agent skill (beta) — weekly check-ins, quarterly diagnostic, ops Q&A grounded in the wiki over HTTP; still refining coverage and tone

### Planned
- [ ] Context-aware guidance variants for the 7 sensitivity processes
- [ ] Virtual COO out of beta — harden check-ins, event-driven automations, and context-aware retrieval (headcount + revenue + funding stage)

---

## License

[GNU Affero General Public License v3.0 (AGPLv3)](https://www.gnu.org/licenses/agpl-3.0.html)

Free to use, adapt, and run. If you run a modified version as a service, you must publish the source code. That's intentional — this stays open.

---

## Team

**Main curator:** [@aksie](https://github.com/aksie) — [Stefan Verkerk](https://www.linkedin.com/in/stefanverkerk/)

Wiki and blog content draws on practitioner interviews and contributions from operators in Stefan's network. The framework is inspired by Scaling Up / Rockefeller Habits and years of hands-on ops work in growing startups.
