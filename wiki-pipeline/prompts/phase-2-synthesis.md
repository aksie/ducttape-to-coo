# Phase 2: Synthesis Prompt

This is the prompt for synthesising a draft wiki entry from extracted atoms. It runs after Phase 0+1 (discovery and extraction) and produces the `draft.md` and `trail.md` files that feed into the approval tool.

---

## The prompt

Here are [N] atoms for `{PROCESS_NAME}` / `{PHASE_NAME}`.

Synthesise a draft wiki entry using this 5-section structure:

1. **What good looks like at this phase**
   — `target_state` atoms: what a well-functioning process looks like
2. **What you actually need to do**
   — `action` atoms: specific, concrete steps
3. **Warning signs you're behind**
   — `warning_sign` atoms: grouped by category (see below)
4. **How this evolves next**
   — `evolution` atoms: what changes at the next growth phase
5. **Tools & resources**
   — `tool_resource` atoms: tools, templates, further reading

### Bullet format (applies to all sections)

Every section uses the same bullet format. Max **7 bullets per section**.

```markdown
- **Short claim sentence.**
  Why this matters or what it means in practice. This explanation
  can be 2-4 lines — enough to convey the reasoning, but no more.
  <!-- sources: src-NNN (publication) -->
```

The bold sentence is the claim. The indented text below it is the explanation (the "why"). Keep the claim sentence short and scannable. The explanation can be longer and more nuanced.

If you have more atoms than fit in 7 bullets, pick the strongest (practitioner-sourced, highest why-quality) and drop the rest, noting the dropped atoms in the trail.

### Warning sign categories

Warning signs must be grouped under three subheadings:

```markdown
## Warning signs you're behind

### Output quality
<!-- The process output is wrong or risky -->

### Founder / key-person time
<!-- A bottleneck person is doing the wrong work -->

### Process entry
<!-- People don't know how to participate -->
```

Use the `warning_category` field from each warning_sign atom to place it. If a category has no warning signs, omit that subheading entirely. The max 7 bullets applies across all three categories combined.

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
- Warning category: {output_quality | founder_time | process_entry}  # only for warning_signs
- Supporting atoms: {atom-NNN, atom-NNN}
- Rejected atoms (and why): {none | atom-NNN (reason)}
- Why-source: {atom-NNN (brief note on the why reasoning)}
- Synthesis notes: {any editorial decisions made during synthesis}
```
