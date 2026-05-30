# Phase 2: Synthesis Prompt

This prompt synthesises extracted atoms into a structured set of claims (`draft.md`) and a supporting evidence trail (`trail.md`). These are the inputs to the Phase 3 approval tool, where a human reviews and accepts or rejects each claim. Only approved claims become part of the published wiki entry. Phase 2 is an intermediate step — it produces a *proposal*, not the entry itself.

**Before starting:**
1. Read all atom files for this cell from `wiki-pipeline/atoms/` (filter by `process:` and `phase:` in the frontmatter). Also include any atoms where `applies_to_stages` lists the current phase — these are standing obligations extracted at an earlier stage that remain valid here.
2. Determine the entry directory: look up the process `category` in `data/processes.json`, then write output to `wiki-pipeline/entries/{category}/{phase}/draft.md` and `trail.md`. Create the directory if it doesn't exist.
3. Check whether an `approval.md` already exists in that directory — if so, check with the author before overwriting a draft that may already be partially reviewed.
4. **Check for a prior stage.** The stage order is: `foundation → first-hires → early-revenue → growth → scaled`. If a prior stage entry exists at `wiki-pipeline/entries/{category}/{prior_stage}/` and contains both `approval.md` and `draft.md`, run the carry-forward review (see below) before synthesising new atoms. If no prior stage entry exists, skip this step.

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

### Draft format

The `draft.md` must begin with YAML frontmatter:

```yaml
---
process: {process-slug}
phase: {phase-slug}
last_updated: {YYYY-MM-DD}
claim_count: {total number of c-NNN claims in the draft}
---
```

Then a title line and intro blockquote:

```markdown
# {Process Name} — {Phase Label} ({headcount range})

> One or two sentences capturing the essential truth about this process at this stage. Should be memorable and stage-specific, not generic.
```

Then the five sections. Each claim is preceded by a `<!-- claim-id: c-NNN -->` marker. Sections 1, 3, 4, and 5 use **bullet list** format. Section 2 ("What you actually need to do") uses a **numbered list**.

**Sections 1, 3, 4, 5 — bullet format:**

```markdown
<!-- claim-id: c-NNN -->
- **Short claim sentence.** Explanation of why this matters or what it means in practice — 2–4 lines, enough to convey the reasoning but no more.
  <!-- sources: src-NNN (publication, bias flag if any) -->
```

**Section 2 — numbered list format:**

```markdown
<!-- claim-id: c-NNN -->
1. **Do the specific thing.** Explanation — why this step, what happens if you skip it, how to do it in practice.
   <!-- sources: src-NNN (publication) -->
```

Max **7 claims per section** (across all subcategories for warning signs). If you have more atoms than fit, pick the strongest (practitioner-sourced, highest why-quality) and note dropped atoms in the trail.

**`why` atoms** do not become standalone claims. Incorporate their reasoning as the explanation text inside other claims that they support.

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

### Carry-forward decisions

When pre-flight step 4 applies, review every approved claim from the prior stage's `draft.md`. Make one of four decisions per claim:

| Decision | When to use |
|---|---|
| **drop** | Not relevant at this stage — the problem is solved, the context has changed, or this stage's reader doesn't need it |
| **carry** | The obligation or recommendation is unchanged — include with light rewording to fit the current scale |
| **evolve** | The underlying point is the same but what "good" looks like or what to actually do has materially changed |
| **invert** | What was a warning sign becomes good practice at this stage, or vice versa (e.g. "avoid a long lease" at First Hires → "commit to a permanent space" at Early Revenue) |

**Rules for carry-forward decisions:**

- Do not auto-carry everything. Be deliberate — over-carrying creates repetition across stages that makes the wiki feel like copy-paste.
- **Standing legal obligations** (e.g. WVP milestones, hour registration, vertrouwenspersoon) almost always carry. Check whether thresholds, penalties, or requirements have evolved.
- **"What good looks like" claims** tend to carry or evolve — the target state often changes as the company grows.
- **"What you actually need to do" claims** often evolve — the *what* is the same, the *when*, *how*, or *who* is different at scale.
- **Warning signs** that result from a missing first-time setup become less prominent once that setup is expected to exist. They may drop, or shift from "you haven't done X yet" to "X has drifted and needs maintenance."

Carried and evolved claims are treated exactly like new claims in the draft — they get a `c-NNN` ID, a `<!-- claim-id: c-NNN -->` marker, and appear in the five-section structure. The lineage is recorded in the trail.

### Rules

- Add `<!-- claim-id: c-NNN -->` before each distinct claim (start from c-001).
- For each claim, note in a comment which atom IDs support it.
- If the only support for a claim comes from atoms with `bias_flags`, note that explicitly.
- Prefer atoms with `practitioner_first_person: true` as primary sources.
- Do not include claims supported only by a single vendor-biased atom.
- If you have no atoms for a section, leave the section with a placeholder comment rather than inventing content.
- Output the `draft.md` and a `trail.md` to `wiki-pipeline/entries/{category}/{phase}/`.
- At the end of `trail.md`, add a **Dropped atoms** section listing any atoms not used in the draft and the reason (e.g., merged into another claim, vendor-only support, weaker why-quality than the chosen atom).

### Trail format

The `trail.md` should map each claim to its supporting atoms using this structure:

```markdown
### c-NNN: {short claim summary}
- Section: {what_good_looks_like | what_to_do | warning_signs | evolution | tools}
- Warning category: {output_quality | founder_time | process_entry}  # only for warning_signs
- Supporting atoms: {atom-NNN, atom-NNN}
- Rejected atoms (and why): {none | atom-NNN (reason)}
- Why-source: {atom-NNN (brief note on the why reasoning)}
- Carried from: {none | prior_stage + prior claim ID + decision (carry | evolve | invert)}
- Synthesis notes: {any editorial decisions made during synthesis}
```

If a prior stage entry existed, add a `## Carry-forward from {prior_stage}` section at the top of `trail.md`, before the claim-by-claim mapping:

```markdown
## Carry-forward from {prior_stage}

| Prior claim | Decision | Reasoning | New claim |
|---|---|---|---|
| c-NNN: {summary} | carry / evolve / drop / invert | {one sentence} | c-NNN / dropped |
```
