# Wiki Pipeline

This directory contains the content pipeline for the Duct Tape to COO wiki. It is where source research is collected, claims are extracted, entries are synthesised, and content is reviewed before going into the wiki.

---

## How it works

```
sources/          ← one file per article, post, or interview
atoms/            ← individual extracted claims from sources
entries/          ← synthesised wiki entries
  {process}/
    {phase}/
      draft.md    ← the synthesised wiki page with claim markers
      trail.md    ← which atoms support which claims (audit trail)
      approval.md ← review decisions per claim
```

The pipeline keeps source research and editorial decisions separate from the published wiki. Every claim in a wiki entry can be traced back to the atoms and sources that support it.

---

## Running the approval tool

The approval tool is a local web app for reviewing claims one by one.

**Prerequisites:** Python 3 (stdlib only, no pip install needed)

```bash
python3 wiki-pipeline/server.py
```

Open: http://localhost:8765

> Note: if you're also running the static site server (`python3 -m http.server 8000`), that's fine — they use different ports and don't conflict.

---

## Adding a new source

1. Find the next available ID: look at the highest `src-NNN` in `sources/`
2. Create `sources/src-NNN.md` using the frontmatter template in `schema.md`
3. Fill in the `## Summary` and `## Notable claims` sections
4. Set `reviewed_by` and `review_date`

---

## Contributing an insight directly (human atoms)

If you have operational experience and want to contribute something you know — without going through the full source research process — this is the fastest path.

**Option 1 — Open a GitHub Issue**
Use the [Contribute an operational insight](../../issues/new?template=atom-contribution.md) issue template. Fill in what you can. A maintainer will convert it into an atom file and add it to the pipeline.

**Option 2 — Submit a file directly (via PR)**
1. Copy `atoms/_human-template.md` to `atoms/atom-NNN.md` (next available number)
2. Fill in the frontmatter — set `extracted_by: "human:your-github-username"`
3. Set `unverified: true` if you don't have a source URL
4. Fill in the Claim, Source/context, and Why sections
5. Open a pull request

Human-contributed atoms are weighted more heavily than LLM-extracted atoms during synthesis. The `why` section is the most valuable part — include it if you can.

---

## Extracting atoms from sources (LLM or manual)

1. Read the source carefully (or use an LLM extraction prompt — see below)
2. For each distinct claim worth extracting, create `atoms/atom-NNN.md`
3. One atom = one insight. Don't combine multiple claims into one atom
4. Fill in `type`, `process`, `phase`, `confidence`, and `practitioner_first_person` accurately
5. Set `extracted_by: "llm:model-slug"` if an LLM did the extraction, `"human:username"` if you did
6. Flag `bias_flags` honestly — atoms with bias flags are not discarded, just flagged for reviewers

**Atom types:**
- `target_state` — what good looks like
- `action` — a specific thing to do
- `warning_sign` — a red flag
- `evolution` — how this changes at the next phase
- `tool_resource` — a tool, template, or resource
- `why` — the reasoning behind another claim

**LLM source discovery prompt (Phase 0 — finding sources for a new entry)**

Use this prompt with an LLM that has web access to find and evaluate sources before extracting atoms. Run once per process × phase combination.

```
You are finding high-quality sources for a startup operations wiki.

TARGET:
  Process: [e.g. Financial Operations]
  Phase:   [e.g. Early Scale — 11 to 25 people]

Search the following sources for content relevant to [process] at [phase]:

1. Hacker News "Ask HN" threads with 100+ points — search news.ycombinator.com
2. r/startups and r/Entrepreneur posts with 200+ upvotes — search reddit.com
3. GitLab Handbook — handbook.gitlab.com/handbook/
   (Note: GitLab content is written for large orgs — flag with sub_variant_signals: [headcount]
   and only use for Growth/Scaled phase unless content explicitly addresses smaller teams)
4. First Round Review — review.firstround.com
5. Lenny's Newsletter — lennysnewsletter.com
6. SaaStr (for revenue/sales processes) — saastr.com
7. Stripe Atlas guides (for legal/financial setup) — stripe.com/atlas/guides
8. Paul Graham essays (for early-stage processes) — paulgraham.com
9. Sequoia / a16z blog posts — sequoiacap.com, a16z.com

For each source found, evaluate:
- Is it relevant to [process] at [phase] specifically, or is it too generic?
- Is the author speaking from direct experience (practitioner) or giving general advice?
- Does it contain any of: what good looks like, concrete actions, warning signs
  that the process is broken, how it evolves at the next stage, tool recommendations?
- What commercial interests does the source have, if any?

Output a prioritised list of 5-10 URLs with:
- URL
- Title
- Source type (practitioner_blog | vc_firm | advisory_firm | hn | reddit | etc.)
- One sentence on why it's relevant
- Any bias signals to flag
- Recommended atom types likely extractable (target_state | action | warning_sign | evolution | tool_resource)

Skip sources that are purely generic management advice, not stage-specific,
or only relevant to companies much larger or smaller than [phase].
```

**LLM extraction prompt (Phase 1 — per source)**

Use this prompt with any LLM that has web access, passing one source URL at a time:

```
Read the content at [URL].

Extract every distinct operational claim as a separate atom.
For each atom, output a markdown file using this frontmatter structure:

  id: atom-NNN
  source_id: [to be assigned]
  type: [target_state | action | warning_sign | evolution | tool_resource | why]
  process: [financial-ops | strategic-ops | people-ops | legal-ops | revenue-ops]
  phase: [foundation | first-hires | early-scale | growth | scaled]
  sub_variant_signals: []
  confidence: [high | medium | low]
  practitioner_first_person: [true if the author speaks from direct experience]
  bias_flags: [list any commercial interest signals]
  extracted_by: "llm:claude-sonnet-4-6"
  extracted_date: [today]
  unverified: false

Then the body:
  ## Claim
  ## Source quote or paraphrase
  ## Why (if explicit in source)

Rules:
- One atom per distinct claim. Do not combine.
- Write claims in second person ("you should...", "at this stage, you...").
- Actively look for content that maps to each of the 5 wiki sections:
    1. What good looks like — descriptions of a well-functioning process
    2. What you actually need to do — concrete actions, steps, cadences
    3. Warning signs you're behind — red flags, failure modes, things that
       break, signs the process is missing or broken
    4. How this evolves next — what changes at the next growth stage
    5. Tools & resources — specific tools, templates, or further reading
- Warning signs are especially valuable and often under-extracted. Look
  for phrases like "we learned the hard way", "the mistake we made",
  "what breaks when", "signs that X is missing", "red flags".
- If the author is clearly speaking from direct experience, set practitioner_first_person: true.
- Flag bias_signals if the source has a commercial interest in the claim being true.
- If the source does not explain why something is true, leave the Why section blank.
```

**LLM synthesis prompt (Phase 2 — per process × phase)**

Once you have atoms extracted, use this prompt to synthesise a draft entry:

```
Here are [N] atoms for [process] / [phase].

Synthesise a draft wiki entry using this 5-section structure:
1. What good looks like at this phase
   — target_state atoms: what a well-functioning process looks like
2. What you actually need to do
   — action atoms: specific, concrete steps (numbered list)
3. Warning signs you're behind
   — warning_sign atoms: red flags, failure modes, things that break
     when this process is missing or broken
4. How this evolves next
   — evolution atoms: what changes at the next growth phase
5. Tools & resources
   — tool_resource atoms: tools, templates, further reading

Rules:
- Add <!-- claim-id: c-NNN --> before each distinct claim (start from c-001).
- For each claim, note in a comment which atom IDs support it.
- If the only support for a claim comes from atoms with bias_flags, note that explicitly.
- Prefer atoms with practitioner_first_person: true as primary sources.
- Do not include claims supported only by a single vendor-biased atom.
- If you have no atoms for a section, leave the section with a placeholder
  comment rather than inventing content.
- Output the draft.md and a trail.md mapping each claim to its supporting atoms.
```

**LLM publish prompt (Phase 3 — applying approvals to produce the wiki page)**

Once approval.md has been reviewed, use this prompt to produce the final wiki page:

```
Read the following files:
- wiki-pipeline/entries/[process]/[phase]/draft.md
- wiki-pipeline/entries/[process]/[phase]/approval.md
- wiki-pipeline/entries/[process]/[phase]/trail.md
- All atom files referenced in trail.md (wiki-pipeline/atoms/atom-*.md)
- All source files referenced by those atoms (wiki-pipeline/sources/src-*.md)
- The existing wiki stub: wiki/processes/[category]/[process-id]--[phase].md

Produce a complete wiki page by applying the approval decisions:

CLAIM HANDLING:
- approved: include as-is from draft.md
- approved_with_edit: use the edited_claim_text from approval.md
- rejected: omit entirely
- pending: omit

FLAG HANDLING (on approved claims):
- vendor_biased: soften prescriptive language slightly; do not remove
- conditional: add a brief qualifier using the reviewer notes
- too_generic: keep but place last in its section, softer framing
- missing_why: find the Why section of the claim's why-source atom (see trail.md)
  and incorporate the reasoning as a new sentence appended inline to the claim —
  do not add a separate heading, just weave it into the prose naturally
- needs_practitioner_check: add <!-- needs practitioner check --> after the claim

HUMAN INSIGHTS IN REVIEWER NOTES:
If a claim's reviewer_notes starts with "human-insight:", the text after that
prefix is a practitioner insight from the reviewer, not a sourced claim.
Handle it as follows:
1. Append it as a new sentence to the published claim text (after the edited
   claim text if approved_with_edit, after the original if just approved)
2. Add the sourced-claim source comment first (for the original claim text),
   then immediately after add a second source comment for the human-insight:
   <!-- sources: human:[reviewed_by] | flags: unverified -->
   Both comments appear after the full paragraph, one per line.
3. Add a Practitioner contributions subsection inside ## Sources:
   ### Practitioner contributions
   - **[Reviewed by name]** — direct experience. "[the human-insight text verbatim]"
If multiple claims have human-insights, collect them all into one subsection.

SOURCE COMMENTS:
After every claim paragraph or bullet point, add an HTML comment on its own line:
  <!-- sources: src-NNN (publication, bias_signal_if_any) | flags: flag1, flag2 -->
Use the atom → source_id mapping from the trail and atom files.
For claims with no pipeline source: <!-- sources: human:username | flags: unverified -->
Omit the flags portion if there are no flags.
When a claim has both a pipeline source and a human-insight, output two comment
lines — one for the pipeline source, one for the human contribution.

SOURCES SECTION:
At the end of the page, add a ## Sources section listing every source referenced,
one per line in this format:
  - [Title](URL) · [pipeline record](../../../wiki-pipeline/sources/src-NNN.md) · type · bias: signal1, signal2
  Write "no bias signals" if bias_signals is empty.
If any human-insights were present, add a ### Practitioner contributions subsection
as described above.

STRUCTURE:
- Use the standard 5-section format with context variants if sensitivity != none
- Keep the frontmatter from the existing stub, updating last_updated to today
- Remove all <!-- claim-id: --> markers from the output
- Write in plain, direct language. Not consultant-speak.
- Target: 300-500 words of prose. Prioritise the most concrete claims if over length.

Output the complete file contents, ready to write to the wiki stub path.
```


---

## Proposing a draft entry

1. Create `entries/{process}/{phase}/`
2. Write `draft.md` — use the 5-section structure (see `schema.md`)
3. Add `<!-- claim-id: c-NNN -->` before each distinct claim
4. Write `trail.md` — map each claim to its supporting atoms
5. Create `approval.md` with `Status: pending` for each claim (copy from schema.md template)
6. Open a pull request with all four file types

---

## Reviewing claims (approval tool)

1. Run `python3 wiki-pipeline/server.py`
2. Open http://localhost:8765
3. Select an entry from the dropdown
4. For each claim:
   - Read the claim text
   - Check the supporting atoms and their source metadata
   - Make a decision using the action buttons (or keyboard shortcuts 1-9)
   - Add notes if useful
   - Click "Save decision" (or press Enter)
5. The tool auto-advances to the next pending claim

**Keyboard shortcuts:**
| Key | Action |
|---|---|
| `1` | Set status: Approve |
| `2` | Set status: Approve with edit |
| `9` | Set status: Reject |
| `3` | Toggle flag: Too generic |
| `4` | Toggle flag: Conditional |
| `5` | Toggle flag: Vendor biased |
| `6` | Toggle flag: Geographically biased |
| `7` | Toggle flag: Needs practitioner check |
| `8` | Toggle flag: Missing why |
| `J` | Next claim |
| `K` | Previous claim |
| `Enter` | Save & advance |

Status and flags are independent — you can approve a claim and flag it as vendor-biased at the same time.

---

## Schema reference

See `schema.md` for the full specification of all file formats, field values, and conventions.

---

## Directory structure

```
wiki-pipeline/
├── README.md           ← this file
├── schema.md           ← full format specification
├── server.py           ← approval tool server (Python 3, stdlib only)
├── approval-tool.html  ← approval tool UI (single file, no frameworks)
├── sources/            ← one .md per source
│   ├── src-001.md
│   └── ...
├── atoms/              ← one .md per extracted claim
│   ├── _human-template.md  ← template for human-contributed atoms
│   ├── atom-001.md
│   └── ...
└── entries/
    └── financial-ops/
        └── early-scale/
            ├── draft.md
            ├── trail.md
            └── approval.md
```
