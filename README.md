# Duct Tape to COO

An open-source operational maturity framework for startups — and the foundation for something more ambitious.

🚀 **Live**: [aksie.github.io/ducttape-to-coo](https://aksie.github.io/ducttape-to-coo)

---

## What is this?

Most startups run on duct tape longer than they should. Founders know things are breaking but don't know what to fix first, what good looks like at their size, or how to explain the gap to a board or investor.

This tool helps startup founders and operators:
- **Identify** which operational processes matter at your current stage
- **Assess** maturity across 5 dimensions: reliability, ownership, documentation, automation, scalability
- **Prioritize** what to fix now vs. later — based on your team size, revenue stage, and funding context
- **Track** progress as you grow

The framework is stage-based: the guidance for a 5-person pre-revenue team is different from a 40-person Series B company. Advice is specific to where you are, not written for a 500-person org.

---

## Where this is going

The diagnostic tool is step one. The longer-term ambition is an **AI-powered fractional COO** — a tool that can answer the question "what should I be doing about [process] right now, given my stage and context?" with the knowledge and judgment of an experienced operator.

That means:
- A structured **wiki** of operational knowledge, organized by process and stage, that an agent can retrieve from precisely
- A **skill layer** that lets AI assistants use the framework as a knowledge base
- **Context-aware guidance** that adapts to your revenue model, funding stage, and team structure — not just headcount

We're building the knowledge base and data model now. The AI layer comes next.

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

- **Diagnostic** — self-assessment across 28+ processes and 5 growth stages
- **Roadmap** — visual stage-by-stage map of what matters when
- **Wiki** — scaffolded knowledge base (130 process × stage pages, content being added)
- **Data model** — processes.json and stages.json with primary axis and sensitivity fields, ready for context-aware retrieval

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
├── diagnostic.html         # Self-assessment tool
├── roadmap.html            # Stage-by-stage visual roadmap
├── wiki.html               # Wiki reader (markdown rendered in browser)
├── css/styles.css          # Shared styles
├── js/app.js               # Diagnostic application logic
├── data/
│   ├── processes.json      # 28+ processes with stage mappings, guidance, and context axes
│   └── stages.json         # Stage definitions, employee ranges, revenue and funding sequences
└── wiki/
    ├── stages/             # Stage portal pages (human entry point)
    ├── processes/          # 130 atomic process × stage pages (agent retrieval units)
    └── dimensions/         # Scoring dimension reference
```

---

## Contributing

Contributions are welcome — especially wiki content. Each process × stage page is a standalone markdown file. Pick one, fill it in, open a pull request.

**What's most needed right now:**
- Wiki page content — see `wiki/processes/_template.md` for the template
- Refinements to stage-specific guidance in `data/processes.json`
- Bug reports and UX feedback via GitHub Issues

**To contribute:**
1. Fork the repo
2. Create a branch
3. Make your change
4. Open a pull request

You don't need to be a developer to contribute wiki content — if you can edit a text file, you can contribute.

---

## Roadmap

### Done
- [x] Stage-based process filtering with 5-dimension scoring
- [x] Context selectors: team size, revenue stage, funding stage
- [x] Stage-specific guidance per process
- [x] Visual roadmap page
- [x] Wiki scaffolding — 130 process × stage pages with template
- [x] Wiki reader with markdown rendering and hash routing
- [x] Data model extended with `primary_axis` and `sensitivity` fields per process

### In progress
- [ ] Wiki content — filling in the 130 scaffolded pages
- [ ] Context-aware guidance variants for the 7 sensitivity processes

### Planned
- [ ] AI skill layer — OpenCode/agent skill using the wiki as a knowledge base
- [ ] Context-aware retrieval — agent uses headcount + revenue + funding stage to retrieve the right variant
- [ ] Progress tracking over time
- [ ] Team collaboration features

---

## License

[GNU Affero General Public License v3.0 (AGPLv3)](https://www.gnu.org/licenses/agpl-3.0.html)

Free to use, adapt, and run. If you run a modified version as a service, you must publish the source code. That's intentional — this stays open.

---

## Credits

Created by [@aksie](https://github.com/aksie).

Inspired by the Scaling Up / Rockefeller Habits framework and years of operational work in growing startups.
