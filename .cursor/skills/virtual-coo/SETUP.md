# Virtual COO — Setup

How to add the **virtual-coo** skill to your AI tool of choice. Web version:
[ducttape-to-coo.com/skill-setup.html](https://www.ducttape-to-coo.com/skill-setup.html).
Recurring check-ins: [coo-setup.html](https://www.ducttape-to-coo.com/coo-setup.html).

> **Beta** — please test, use with caution. Feedback welcome.

## Quick start

1. **Get the skill files**

   ```bash
   git clone https://github.com/aksie/ducttape-to-coo.git
   cp -r ducttape-to-coo/.cursor/skills/virtual-coo ~/.cursor/skills/
   ```

   Project-scoped: copy to `.cursor/skills/virtual-coo/` inside your company repo.
   Browse on GitHub: [.cursor/skills/virtual-coo](https://github.com/aksie/ducttape-to-coo/tree/main/.cursor/skills/virtual-coo)

2. **Add `company-state.md` to your company workspace** (not this repo)

   ```bash
   cp ducttape-to-coo/docs/company-state.md ~/path/to/your-company/company-state.md
   ```

   Template: [docs/company-state.md](https://github.com/aksie/ducttape-to-coo/blob/main/docs/company-state.md)

3. **Open your company project** in Cursor (or your tool). Say: *"Be my virtual COO."*

   First time? The skill runs an intro and asks about stage, headcount, revenue,
   and funding — then writes `company-state.md` for you.

4. **Optional** — recurring check-ins via [coo-setup.html](https://www.ducttape-to-coo.com/coo-setup.html)

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
- Copy `virtual-coo/` to `.cursor/skills/virtual-coo/` (project) or
  `~/.cursor/skills/virtual-coo/` (personal).
- Open your **company** workspace (where `company-state.md` lives). Ask:
  *"be my virtual COO"* or any ops question.

### Claude Code
- Copy to `.claude/skills/virtual-coo/` (project) or `~/.claude/skills/virtual-coo/`
  (personal). Folder name must match `name:` in `SKILL.md`.
- Invoke with `/virtual-coo`, or let it trigger from the description.

### OpenCode
- `.claude/skills/virtual-coo/` works natively.
- Or wire as command, agent, or paste into `AGENTS.md`.

### Hermes Agent / OpenClaw
- Drop `virtual-coo/` into their skills directory.

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
