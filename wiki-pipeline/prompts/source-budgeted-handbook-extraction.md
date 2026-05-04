# Source-Budgeted Handbook Extraction Prompt

Use this prompt when a company handbook is being mined for operational wiki atoms. The goal is to extract a small number of high-signal claims from the best page or chapter for a process, not to turn every process into a sprawling research project.

## What this is

Company handbooks can be unusually valuable because they show how operators actually document work. They are also dangerous for scope: a single topic may be mentioned across dozens of pages, issue links, historical commits, and adjacent policies.

This prompt keeps extraction bounded. For each process, find the canonical page or chapter that contains most of the operational model. Use supporting pages only when they are directly linked from the canonical page and add a missing mechanism, tool, or phase boundary.

## Target

- Process: `{PROCESS_NAME}`
- Phase or era: `{PHASE_OR_ERA}`
- Company handbook: `{HANDBOOK_NAME}`
- Target wiki cell: `{PROCESS_SLUG}/{PHASE_SLUG}`

## Source budget

Default budget per process/phase:

- 1 canonical page or chapter
- 0-2 supporting pages maximum
- 4-8 atoms total
- 1 source file for the bundle, unless the supporting page is substantial enough to deserve its own source file

Do not collect every page that mentions the topic. The extraction should answer: "What does this company appear to treat as the core operating model for this process?"

## Source selection

### Step 1: Find the canonical page

Look for the page that contains 70-90% of the topic:

- It has the process title or closest handbook-native equivalent.
- It explains the cadence, owner, workflow, tool, or policy.
- Other pages link to it or defer to it.
- It is operational, not merely philosophical or promotional.

If no single page exists, choose the smallest coherent chapter/section that contains the operational model.

### Step 2: Decide whether supporting pages are allowed

Use a supporting page only if one of these is true:

- The canonical page explicitly links to it as the implementation mechanism.
- The canonical page names a tool or workflow that is explained elsewhere.
- The supporting page clarifies a phase boundary or major evolution that the canonical page only hints at.

Reject supporting pages that merely repeat, decorate, or expand the same idea.

### Step 3: Longitudinal mode is opt-in

Do not inspect git history by default. Use longitudinal extraction only when the requested insight is about how the process evolved over time.

When longitudinal mode is enabled:

- Keep the same source budget per era.
- Prefer the same canonical page/path across eras.
- If the page did not exist yet, use the smallest predecessor section.
- Produce one source file per era.
- Extract fewer atoms per era, usually 2-5.
- Prioritize `evolution` atoms over static restatements.

## Source file requirements

Create a source file in `wiki-pipeline/sources/`.

Add these metadata fields in addition to the standard schema when relevant:

```yaml
source_scope: canonical_page          # canonical_page | source_bundle | longitudinal_case_study
extraction_mode: source_budgeted      # source_budgeted | era_comparison
canonical_url: ""
supporting_urls: []
era: 1
era_label: ""
maps_to_wiki_phase: ""
```

The body should include:

- `## Summary` — 2-4 neutral sentences.
- `## Canonical source decision` — why this page/chapter was selected and what was deliberately excluded.
- `## Notable claims` — the source's own claims, without editorializing.
- `## What changed since previous era` — only in longitudinal mode; skip for the first era.
- `## Distinctive quote` — direct quote under 15 words.

## Atom extraction

Extract only high-signal atoms. Prefer claims that would change what a founder/operator does.

Good atom types:

- `target_state`: what good looks like.
- `action`: what to set up or do.
- `warning_sign`: how you know the process is behind.
- `evolution`: what changes at the next phase or era.
- `tool_resource`: named tooling, template, or workflow.
- `why`: mechanism or reasoning.

Write atoms in second person. Keep the claim usable outside the source context, but preserve the condition that made it true.

## Candidate claims

Create or update:

`wiki-pipeline/entries/{process-slug}/{phase-slug}/candidate-claims.md`

This is not a synthesized entry. It is an audit-friendly parking lot for claims that may later be promoted into a wiki draft.

For each candidate claim, include:

- Section
- Supporting atoms
- Candidate claim
- Synthesis notes, including source limitations

## Corpus health

For source-budgeted handbook extraction, include a concise disclosure note:

- This is a single-company handbook source.
- The strength is practitioner specificity and internal operating detail.
- The weakness is lack of cross-company validation.
- Claims should be triangulated before becoming general wiki guidance.

## Stop conditions

Stop and ask before extracting atoms if:

- You cannot fetch the canonical page or predecessor section.
- The canonical page is mostly inaccessible or moved behind an internal handbook.
- The selected page turns out to be mostly adjacent to the process rather than central to it.
- Longitudinal history shows the topic moved to an internal-only page and the public snapshot no longer contains enough operational detail.

Stop after the first era or first source bundle when testing a new process, so the user can review whether the format and source budget feel right.

## GitLab-specific playbook: Company-Level Planning & Goals

Use this section when extracting GitLab handbook material for the Duct Tape to COO process `Company-Level Planning & Goals`.

The important lesson from the first test run: the modern `Cadence` page is not old enough for early-stage phases. It is useful for growth/scaled phases, but the predecessor material lives in earlier pages:

- 2015: monolithic team handbook.
- 2016: public strategy page.
- 2017: public OKRs page.
- 2019: CEO cadence page.
- 2021+: company cadence page.

Do not force the same URL across all eras. Prefer the smallest predecessor source that contains the planning operating model for that era.

### Era map

#### Era 1 — 2015: Monolithic handbook strategy reference

- Wiki phase: `foundation`
- GitLab context: small / pre-Series B
- Source type: predecessor section inside monolithic handbook
- Canonical URL:
  `https://gitlab.com/gitlab-com/www-gitlab-com/-/raw/2d2ced8f79da96fe981a3a6f6cf5918fa2dd992a/source/team-handbook/index.html`
- What to extract:
  - Strategy exists as a linked document team members are expected to read and contribute to.
  - Planning is mostly operating norms: prioritize consciously, pick issues from milestones, keep promises, do not make external promises without internal agreement.
  - Decision-making is lightweight: consensus does not scale, give relevant people a chance to respond, then make a call.
- Distinctive signals:
  - "Our strategy is detailed in the GitLab Strategy document"
  - "Make a conscious effort to prioritize your work"
  - "Consensus doesn't scale"
- Source-budget note:
  Use only the `General` and `Workflow` sections unless another section directly mentions planning/goals.

#### Era 2 — 2016: Public strategy page

- Wiki phase: `first-hires`
- GitLab context: post-seed / pre-Series B to Series B-ish operating buildout
- Source type: canonical strategy page
- Canonical URL:
  `https://gitlab.com/gitlab-com/www-gitlab-com/-/raw/0d9d20aa92a/source/strategy/index.html.md`
- File path:
  `source/strategy/index.html.md`
- First observed add commit:
  `0d9d20aa92a` — 2016-04-07, "Add the new site"
- What to extract:
  - Strategy is public and structured into Why, Mission, Goals, Sequence, Constraints, Assumptions, and functional 2016 goals.
  - Goals include company-level outcomes, product direction, independence, and culture.
  - Constraints are explicit: founder control, independence/IPO path, low burn, values, speed, life balance.
  - Functional goals exist for Technology, Revenue, Marketing, Finance, Operations, Production Engineering, and Partnerships.
- Distinctive signals:
  - "Mission"
  - "Goals"
  - "Constraints"
  - "Publish our processes and plans in the handbook or link from there"
- Source-budget note:
  This page is dense enough to stand alone. Do not also extract from all linked Google Docs or direction pages unless the user asks for a deeper case study.

#### Era 3 — 2017: Public OKRs page

- Wiki phase: `early-scale`
- GitLab context: Series B era, more layers and functional ownership
- Source type: canonical OKR page
- Canonical URL:
  `https://gitlab.com/gitlab-com/www-gitlab-com/-/raw/123414ebefc/source/okrs/index.html.md`
- File path:
  `source/okrs/index.html.md`
- First observed add commit:
  `123414ebefc` — 2017-05-25, "Add OKRs page."
- What to extract:
  - OKRs cascade through organization layers.
  - Every layer has an objective similar to the key results above it.
  - OKRs are owner-prefixed.
  - The match between a lower-level key result and the higher-level key result does not need to be perfect.
  - Company OKRs include concrete quarterly objectives such as incremental ACV, pipeline coverage, product reliability, and usage.
- Distinctive signals:
  - "Every layer in the organization has an objective"
  - "OKRs are prefaced with the owner"
  - "The match ... doesn't have to be perfect"
- Source-budget note:
  Extract the instructions and one or two representative company-level examples. Do not extract the full OKR tree.

#### Era 4 — 2019: CEO cadence page

- Wiki phase: `growth`
- GitLab context: late private / IPO ramp
- Source type: predecessor cadence page
- Canonical URL:
  `https://gitlab.com/gitlab-com/www-gitlab-com/-/raw/d98c7a139d0/source/handbook/ceo/cadence/index.html.md`
- File path:
  `source/handbook/ceo/cadence/index.html.md`
- First observed add commit:
  `d98c7a139d0` — 2019-03-29, "Add cadence."
- What to extract:
  - Company planning is now framed as a set of cadences.
  - Cadence spans day, week, month, quarter, year, strategy, vision, and mission.
  - Quarter contains OKRs, board meeting, sales targets, and E-group offsite.
  - Year contains yearly plan and most of direction.
  - Longer horizons include strategy, vision, and mission.
- Distinctive signals:
  - "Everything in a company happens in a certain cadence"
  - "The timescale between periods are about 4x"
- Source-budget note:
  This is the bridge from goal-setting content to planning rhythm content. Keep atoms focused on cadence, not every listed event.

#### Era 5 — 2021 to 2024+: Company cadence page

- Wiki phase: `scaled`
- GitLab context: public-company operating system
- Source type: canonical cadence page
- Useful snapshots:
  - 2021 baseline:
    `https://gitlab.com/gitlab-com/content-sites/handbook/-/raw/609e0d5b/cadence/index.html.md`
  - 2023 hierarchy:
    `https://gitlab.com/gitlab-com/content-sites/handbook/-/raw/dd097683/cadence/index.html.md`
  - 2024 post-migration / update cadence:
    `https://gitlab.com/gitlab-com/content-sites/handbook/-/raw/31016e9b/content/handbook/company/cadence.md`
  - Current public page:
    `https://handbook.gitlab.com/handbook/company/cadence`
- What to extract:
  - 2021: planning as an operating calendar.
  - 2023: explicit hierarchy from purpose/mission/vision/strategy/yearlies/OKRs.
  - 2024+: review cadence: strategy annually, yearlies quarterly, OKRs monthly.
  - Evolution atom: calendar -> hierarchy -> maintenance rhythm.
- Distinctive signals:
  - "Items on this page are grouped into a cadence"
  - "OKRs are quarterly objectives"
  - "These reviews ensure that elements reflect current priorities"
- Source-budget note:
  If the user asks for one scaled-era source, use current `Cadence`. If the user asks for evolution, use the three snapshots above and extract mostly `evolution` atoms.

### Discovery method for missing GitLab predecessors

If an expected page is missing, use the Git history to identify predecessor paths before widening to web search.

Recommended method:

```shell
git clone --filter=blob:none --no-checkout https://gitlab.com/gitlab-com/www-gitlab-com.git /tmp/gitlab-www-history-check
git -C /tmp/gitlab-www-history-check log --all --diff-filter=A --date=short --format='%h %ad %s' -- source/strategy/index.html.md
git -C /tmp/gitlab-www-history-check log --all --diff-filter=A --date=short --format='%h %ad %s' -- source/okrs/index.html.md
git -C /tmp/gitlab-www-history-check log --all --diff-filter=A --date=short --format='%h %ad %s' -- source/handbook/ceo/cadence/index.html.md
```

To inspect yearly path availability:

```shell
for date in 2016-12-31 2017-12-31 2018-12-31 2019-12-31 2020-12-31; do
  rev=$(git -C /tmp/gitlab-www-history-check rev-list -n 1 --before="$date 23:59" master)
  echo "--- $date $rev"
  git -C /tmp/gitlab-www-history-check ls-tree -r --name-only "$rev" | rg -i '(^|/)(cadence|okrs?|strategy|yearlies|goals?)(/|\.|$)|company/(strategy|okrs?|yearlies|goals?)'
done
```

Use raw GitLab URLs for fetching content:

```text
https://gitlab.com/gitlab-com/www-gitlab-com/-/raw/{commit}/{path}
https://gitlab.com/gitlab-com/content-sites/handbook/-/raw/{commit}/{path}
```

### Expected longitudinal narrative

For Company-Level Planning & Goals, the likely high-signal evolution is:

1. `foundation`: strategy is a shared reference and daily prioritization is handled through founder/team norms.
2. `first-hires`: strategy becomes a public structured page with mission, goals, constraints, assumptions, and functional goals.
3. `early-scale`: OKRs appear to connect company goals to owners and layers.
4. `growth`: planning becomes a cadence system across week, month, quarter, year, strategy, vision, and mission.
5. `scaled`: cadence matures into an explicit hierarchy and maintenance rhythm, with review cycles to prevent stale planning artifacts.

This GitLab-specific section is a special longitudinal playbook. Do not generalize its era map to other companies.
