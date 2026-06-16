# Virtual COO — Setup

How to add the **virtual-coo** skill to your AI tool of choice. Web version:
[ducttape-to-coo.com/skill-setup.html](https://www.ducttape-to-coo.com/skill-setup.html).
Recurring check-ins: [coo-setup.html](https://www.ducttape-to-coo.com/coo-setup.html).

> **Beta** — please test, use with caution. Feedback welcome.

The skill is instructions only — at runtime it fetches the Duct Tape to COO
knowledge base (wiki pages, process data) over HTTP. You don't need a local copy
of this repo; your AI tool needs web access (or a local clone as fallback).

## Quick start

1. **Get the skill files**

   ```bash
   git clone https://github.com/aksie/ducttape-to-coo.git
   cp -r ducttape-to-coo/.cursor/skills/virtual-coo ~/.cursor/skills/
   ```

   Project-scoped: copy to `.cursor/skills/virtual-coo/` inside your company repo.
   Browse on GitHub: [.cursor/skills/virtual-coo](https://github.com/aksie/ducttape-to-coo/tree/main/.cursor/skills/virtual-coo)

2. **Open a project** in Cursor (or your tool) — any folder or repo you work in
   day to day. Say: *"Be my virtual COO."*

   First time: intro + questions about stage, headcount, revenue, and funding —
   then the COO creates `company-state.md` in your workspace. No manual copy
   needed. When you want a weekly rhythm, the COO can point you to
   [coo-setup.html](https://www.ducttape-to-coo.com/coo-setup.html) — in the
   first conversation or a later one. Template for reference:
   [docs/company-state.md](https://github.com/aksie/ducttape-to-coo/blob/main/docs/company-state.md)

## Skill files

| File | Link |
|---|---|
| `SKILL.md` | [view](https://github.com/aksie/ducttape-to-coo/blob/main/.cursor/skills/virtual-coo/SKILL.md) |
| `reference.md` | [view](https://github.com/aksie/ducttape-to-coo/blob/main/.cursor/skills/virtual-coo/reference.md) |
| `tone-of-voice.md` | [view](https://github.com/aksie/ducttape-to-coo/blob/main/.cursor/skills/virtual-coo/tone-of-voice.md) |
| `prompts/` | [folder](https://github.com/aksie/ducttape-to-coo/tree/main/.cursor/skills/virtual-coo/prompts) |
| `company-state` template | [view](https://github.com/aksie/ducttape-to-coo/blob/main/docs/company-state.md) |

## Install per tool

### Cursor
Copy `virtual-coo/` to `~/.cursor/skills/virtual-coo/` for every project, or to
`.cursor/skills/virtual-coo/` inside one repo. Cursor discovers it automatically
— open a project and ask *"be my virtual COO"*.

### Claude Code
Copy the folder to `.claude/skills/virtual-coo/` in your project, or to
`~/.claude/skills/virtual-coo/` for all projects — the folder name must match
`name:` in `SKILL.md`. Invoke with `/virtual-coo`, or let Claude pick it up from
the skill description.

### OpenCode
Copy the folder to `.claude/skills/virtual-coo/` — OpenCode reads that path
natively. Or wire the skill as a command, an agent, or paste it into `AGENTS.md`.

### Hermes Agent / OpenClaw
Drop `virtual-coo/` into their skills directory (e.g. `~/.hermes/skills/virtual-coo/`).
Both use the same `SKILL.md` format — invoke from chat on CLI or a channel like
Telegram or Slack.

### Generic (Cline, Continue, Aider, API)
- Paste `SKILL.md` (+ `reference.md` when needed) into rules / system prompt.
- Give file access to `company-state.md` and web access to the knowledge base.

## Knowledge source

Default: `https://raw.githubusercontent.com/aksie/ducttape-to-coo/main`

Offline: keep a local clone — the skill falls back to disk.

## First run

Say *"Be my virtual COO."* The COO introduces itself, interviews you on company
state, writes `company-state.md`, and gives a light read for your stage. After
that: ops questions, *"weekly check-in"*, or calendar prompts from
[coo-setup.html](https://www.ducttape-to-coo.com/coo-setup.html).
