# Virtual COO — Setup

How to add the **virtual-coo** skill to your AI tool of choice. This covers the
skill/agent install only. Setting up the recurring weekly/quarterly check-ins is
separate — see the "Set up your check-ins" page (`coo-setup.html`) on the site.

## What it is

A virtual COO grounded in the Duct Tape to COO operations wiki. It reads the
knowledge base **over HTTP**, so you don't need a local copy of the product repo.

## What every setup needs

1. **The skill files** — the `virtual-coo/` folder (`SKILL.md`, `reference.md`,
   `tone-of-voice.md`, `prompts/`).
2. **A `company-state.md` in your own workspace** — copy the template from
   `docs/company-state.md`, fill it in, and keep it in *your* project (not in the
   product repo). This is the COO's memory.
3. **Web access** — so the skill can fetch the knowledge base
   (`KNOWLEDGE_BASE_URL`). No web access? Clone the repo and it falls back to
   reading the same files from disk.

## Install per tool

### Cursor
- Copy `virtual-coo/` to `.cursor/skills/virtual-coo/` (project, shared via your
  repo) or `~/.cursor/skills/virtual-coo/` (personal, all projects).
- Auto-discovered. Invoke by asking: "be my virtual COO", or any ops question.

### Claude Code
- Copy to `.claude/skills/virtual-coo/` (project) or `~/.claude/skills/virtual-coo/`
  (personal). The folder name must match the `name:` in `SKILL.md` — it does.
- Invoke with `/virtual-coo`, or let it trigger from the description.

### OpenCode
- OpenCode reads `.claude/skills` natively, so a `.claude/skills/virtual-coo/`
  folder works out of the box.
- Alternatively wire it as a command (`.opencode/command/virtual-coo.md`), an
  agent (`.opencode/agent/virtual-coo.md`), or add the skill text to `AGENTS.md`.

### Hermes Agent / OpenClaw
- Both use the same `SKILL.md` format. Drop the `virtual-coo/` folder into their
  skills directory (Hermes: `~/.hermes/skills/virtual-coo/`; OpenClaw: its skills
  folder, or publish/install via ClawHub).
- Invoke from chat — CLI or a messaging channel (Telegram, Slack, …).

### Generic (Cline, Continue, Aider, raw API / SDK)
- Paste the contents of `SKILL.md` (and `reference.md` when needed) into the
  tool's rules / system-prompt mechanism.
- Give it file access to your `company-state.md` and web access to the knowledge
  base.

## Configure the knowledge source

- Default `KNOWLEDGE_BASE_URL`:
  `https://raw.githubusercontent.com/aksie/ducttape-to-coo/main`
- To read from the public site instead, set it to `https://<your-domain>` (it
  serves the same paths). See `SKILL.md` → "Knowledge source".

## First run

> "Be my virtual COO. Here's my `company-state.md` — give me a read on where we
> stand and what needs attention."

After that, ask ops questions any time, or run a check-in on demand.
