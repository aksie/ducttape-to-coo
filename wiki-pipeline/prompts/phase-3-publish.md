# Phase 3: Publish Prompt

This is the prompt for producing the final wiki page from approved claims. It runs after the approval tool has been used to review every claim in the draft. It reads the draft, approval decisions, trail, atoms, and sources, then produces a complete wiki page ready to write to the wiki stub path.

---

## The prompt

Read the following files:
- `wiki-pipeline/entries/{process}/{phase}/draft.md`
- `wiki-pipeline/entries/{process}/{phase}/approval.md`
- `wiki-pipeline/entries/{process}/{phase}/trail.md`
- All atom files referenced in trail.md (`wiki-pipeline/atoms/atom-*.md`)
- All source files referenced by those atoms (`wiki-pipeline/sources/src-*.md`)
- The existing wiki stub: `wiki/processes/{category}/{process-id}--{phase}.md`

Produce a complete wiki page by applying the approval decisions:

### Claim handling

- **approved**: include as-is from draft.md
- **approved_with_edit**: use the `edited_claim_text` from approval.md
- **rejected**: omit entirely
- **pending**: omit

### Flag handling (on approved claims)

- **vendor_biased**: soften prescriptive language slightly; do not remove
- **conditional**: add a brief qualifier using the reviewer notes
- **too_generic**: keep but place last in its section, softer framing
- **missing_why**: find the Why section of the claim's why-source atom (see trail.md) and incorporate the reasoning as a new sentence appended inline to the claim — do not add a separate heading, just weave it into the prose naturally
- **needs_practitioner_check**: add `<!-- needs practitioner check -->` after the claim

### Human insights in reviewer notes

If a claim's `reviewer_notes` starts with `human-insight:`, the text after that prefix is a practitioner insight from the reviewer, not a sourced claim. Handle it as follows:

1. Append it as a new sentence to the published claim text (after the edited claim text if `approved_with_edit`, after the original if just `approved`)
2. Add the sourced-claim source comment first (for the original claim text), then immediately after add a second source comment for the human-insight:
   `<!-- sources: human:{reviewed_by} | flags: unverified -->`
   Both comments appear after the full paragraph, one per line.
3. Add a Practitioner contributions subsection inside `## Sources`:
   ```
   ### Practitioner contributions
   - **{Reviewed by name}** — direct experience. "{the human-insight text verbatim}"
   ```

If multiple claims have human-insights, collect them all into one subsection.

### Practitioner rewrites in reviewer notes

If a claim's `reviewer_notes` starts with `human-rewrite:`, the reviewer has substantially rewritten the claim by integrating their practitioner experience with the original source insight. The `edited_claim_text` contains the full rewritten claim (status will be `approved_with_edit`). Handle it as follows:

1. Use the `edited_claim_text` as the published claim (the full integrated rewrite)
2. Add the source comment for the original atom's source (preserving provenance of the original insight)
3. Add a second source comment: `<!-- sources: human:{reviewed_by} | flags: practitioner_rewrite -->`
4. Add the reviewer to the Practitioner contributions subsection inside `## Sources`:
   ```
   ### Practitioner contributions
   - **{Reviewed by name}** — practitioner rewrite. "{the human-rewrite text from reviewer_notes}"
   ```

The `human-rewrite:` text describes what was changed — it is not the published text itself. The published text comes from `edited_claim_text`.

If multiple claims have human-insights or human-rewrites, collect them all into one `### Practitioner contributions` subsection.

### Source comments

After every claim paragraph or bullet point, add an HTML comment on its own line:

```
<!-- sources: src-NNN (publication, bias_signal_if_any) | flags: flag1, flag2 -->
```

Use the atom → `source_id` mapping from the trail and atom files.
For claims with no pipeline source: `<!-- sources: human:username | flags: unverified -->`
Omit the flags portion if there are no flags.
When a claim has both a pipeline source and a human-insight, output two comment lines — one for the pipeline source, one for the human contribution.

### Sources section

At the end of the page, add a `## Sources` section listing every source referenced, one per line in this format:

```
- [Title](URL) · [pipeline record](../../../wiki-pipeline/sources/src-NNN.md) · type · bias: signal1, signal2
```

Write "no bias signals" if `bias_signals` is empty.
If any human-insights were present, add a `### Practitioner contributions` subsection as described above.

### Structure

- Use the standard 5-section format with context variants if `sensitivity != none`
- Keep the frontmatter from the existing stub, updating `last_updated` to today
- Remove all `<!-- claim-id: -->` markers from the output
- Write in plain, direct language. Not consultant-speak.
- Target: 300–500 words of prose. Prioritise the most concrete claims if over length.

### Output

Output the complete file contents, ready to write to the wiki stub path.
