# Phase 2: Synthesis Prompt

This is the prompt for synthesising a draft wiki entry from extracted atoms. It runs after Phase 0+1 (discovery and extraction) and produces the `draft.md` and `trail.md` files that feed into the approval tool.

---

## The prompt

Here are [N] atoms for `{PROCESS_NAME}` / `{PHASE_NAME}`.

Synthesise a draft wiki entry using this 5-section structure:

1. **What good looks like at this phase**
   — `target_state` atoms: what a well-functioning process looks like
2. **What you actually need to do**
   — `action` atoms: specific, concrete steps (numbered list)
3. **Warning signs you're behind**
   — `warning_sign` atoms: red flags, failure modes, things that break when this process is missing or broken
4. **How this evolves next**
   — `evolution` atoms: what changes at the next growth phase
5. **Tools & resources**
   — `tool_resource` atoms: tools, templates, further reading

### Rules

- Add `<!-- claim-id: c-NNN -->` before each distinct claim (start from c-001).
- For each claim, note in a comment which atom IDs support it.
- If the only support for a claim comes from atoms with `bias_flags`, note that explicitly.
- Prefer atoms with `practitioner_first_person: true` as primary sources.
- Do not include claims supported only by a single vendor-biased atom.
- If you have no atoms for a section, leave the section with a placeholder comment rather than inventing content.
- Output the `draft.md` and a `trail.md` mapping each claim to its supporting atoms.

### Trail format

The `trail.md` should map each claim to its supporting atoms using this structure:

```markdown
### c-NNN: {short claim summary}
- Section: {what_good_looks_like | what_to_do | warning_signs | evolution | tools}
- Supporting atoms: {atom-NNN, atom-NNN}
- Rejected atoms (and why): {none | atom-NNN (reason)}
- Why-source: {atom-NNN (brief note on the why reasoning)}
- Synthesis notes: {any editorial decisions made during synthesis}
```
