# Automation draft — virtual COO cadence

**Status: DRAFT for review. Nothing has been created in Cursor.**

A skill is reactive — it loads when invoked, it does not run itself on a clock.
To make the weekly check-in and quarterly health check actually fire, pair the
`virtual-coo` skill with two scheduled Cursor Automations. The drafts below are
ready to hand to the `automate` skill (or to create manually in the Automations
editor) once you've reviewed them.

> Prerequisite: commit the skill files and `docs/company-state.md` first. A
> scheduled automation checks out the repo and should reference committed files,
> not your uncommitted working tree.

---

## Automation 1 — Weekly check-in

| Field | Value |
|---|---|
| Name | Virtual COO — weekly check-in |
| Description | Runs the stage-aware weekly founder pulse from the virtual-coo skill. |
| Trigger | On a schedule (cron) |
| Schedule (plain) | Every Monday at 09:00 |
| Cron | `0 9 * * 1` |
| Tools | None beyond default agent (reads repo files; can post to Slack if you want it delivered there) |
| Repo / branch | this repo / default branch |

**Prompt:**

```
Run the weekly check-in from the virtual-coo skill (.cursor/skills/virtual-coo/SKILL.md).
Read docs/company-state.md for current context, detect what changed since the last
check-in (new hires, paying customers, funding/runway), check the stage-critical
processes from wiki/stages/{stage}.md, and propose at most 3 next actions — each
with an owner, a next step, and the wiki page it came from. Ground everything in
the wiki; if something isn't covered, say so. Update docs/company-state.md when done.
```

---

## Automation 2 — Quarterly health check

| Field | Value |
|---|---|
| Name | Virtual COO — quarterly health check |
| Description | Runs the operational diagnostic from the virtual-coo skill each quarter. |
| Trigger | On a schedule (cron) |
| Schedule (plain) | First day of Jan, Apr, Jul, Oct at 09:00 |
| Cron | `0 9 1 1,4,7,10 *` |
| Tools | None beyond default agent (reads repo files) |
| Repo / branch | this repo / default branch |

**Prompt:**

```
Run the quarterly operational health check from the virtual-coo skill
(.cursor/skills/virtual-coo/SKILL.md, see reference.md#quarterly-health-check).
Read docs/company-state.md for stage + revenue/funding context. Score every
process that is critical or recommended at the current stage on the 5 dimensions
in data/processes.json (skip conditional processes that don't apply). Rank the
gaps, and for the top 3-5 give wiki-backed fixes with owners. Flag any stage cells
the wiki doesn't cover yet. Update docs/company-state.md with the date and the
prioritised gaps as open actions.
```

---

## To finish (when you're ready)

1. Review and commit the skill files + `docs/company-state.md`.
2. Open the Cursor Automations editor (Agents Window) — or run the `automate`
   skill — and create the two automations above.
3. Decide delivery: leave results in chat, or add a Slack action to post the
   check-in to a channel.
4. Adjust the times/timezone to your preference (the crons above assume the
   server's local time; confirm in the editor).
