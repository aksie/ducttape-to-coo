# Phase 3: Human Review

This is Phase 3 of 4. It is the only phase without an LLM prompt — it is a human process. The reviewer reads each proposed claim, checks the supporting evidence, and decides whether it earns a place in the published wiki entry.

**Input:** `draft.md` + `trail.md` (reviewable proposals produced in Phase 2)
**Tool:** the approval tool at `http://localhost:8765` (run `python3 wiki-pipeline/server.py`)
**Output:** `approval.md` — one decision per claim, written by the tool as you review

Phase 4 (publish) reads the approval decisions and drops anything rejected or still pending. Your job here is to act as the editorial filter between raw synthesis and what readers see.

---

## Starting the tool

```bash
python3 wiki-pipeline/server.py
```

Open [http://localhost:8765](http://localhost:8765), select the entry from the dropdown, and work through the claims one by one.

The tool auto-creates `approval.md` on first visit with all claims set to `pending`. You can stop and resume at any time — decisions are saved per claim as you go.

---

## What to check for each claim

For each claim, the tool shows you: the claim text, the supporting atoms, and the source metadata (publication, type, bias signals) behind each atom.

Ask yourself:

1. **Is this actually true at this stage?** The synthesis step filters by process and phase, but claims can still be too generic, too early, or too late for the target company size.
2. **Is the "why" present and convincing?** A claim without a reason is just an assertion. If the why is missing or weak, flag it — Phase 4 can soften or qualify it.
3. **Is the evidence practitioner-sourced or vendor-sourced?** Vendor-sourced claims aren't automatically wrong, but they need more scrutiny. Check whether the claim would exist without a commercial interest behind it.
4. **Is this something a founder at this stage would find surprising or useful?** Generic advice ("communicate clearly," "hire well") that any management book would give belongs in the reject pile.
5. **Do you know something the sources don't?** If you have direct operational experience that contradicts or significantly extends a claim, use a reviewer note (see below).

---

## Decision options

| Decision | When to use |
|---|---|
| **Approve** | Claim is accurate, useful, and well-supported. Publish as-is. |
| **Approve with edit** | Claim is worth keeping but the phrasing is off, too strong, or slightly wrong. Edit the text and approve. |
| **Reject** | Claim is too generic, unsupported, vendor-pushed, or wrong for this stage. |

Keyboard shortcuts: `1` = approve, `2` = approve with edit, `9` = reject, `Enter` = save & advance.

---

## Flags (independent of the approve/reject decision)

You can combine flags with any decision. Flags tell Phase 4 how to handle the claim in the final output.

| Flag | What Phase 4 does with it |
|---|---|
| `too_generic` | Keep but place last in section, softer framing |
| `vendor_biased` | Soften prescriptive language slightly |
| `geographically_biased` | Add geographic qualifier |
| `conditional` | Add a qualifier using your reviewer notes |
| `missing_why` | Find the why from the trail and weave it in |
| `needs_practitioner_check` | Add a `<!-- needs practitioner check -->` marker |

Keyboard shortcuts: `3`–`8` toggle each flag.

---

## Adding practitioner knowledge via reviewer notes

If you have direct operational experience relevant to a claim, add it in the reviewer notes field. Two prefixes activate special handling in Phase 4:

**`human-insight:`** — you want to *add* a sentence from your own experience to the published claim:
```
human-insight: We found that doing X before Y saved us two weeks at the 15-person mark.
```
Phase 4 appends this as a new sentence to the published claim, with your name attributed in the Sources section.

**`human-rewrite:`** — you want to *replace* the claim with your own version that integrates the source insight with your experience. Set the decision to `approve_with_edit`, write your version in the edit field, and describe what you changed in the reviewer notes:
```
human-rewrite: Rewrote to reflect that the timing depends on whether you have a bookkeeper vs. doing it yourself.
```
Phase 4 uses the edited text as the published claim and attributes both the original source and your contribution.

---

## When you're done

All claims should have a decision (approved, approved_with_edit, or rejected) — nothing should be left as `pending`. When done, proceed to Phase 4: run the publish prompt to assemble the final wiki page.

If you finish reviewing but aren't ready to publish yet (e.g., you want a second opinion on a few claims), leave those as `pending` — Phase 4 will omit them.
