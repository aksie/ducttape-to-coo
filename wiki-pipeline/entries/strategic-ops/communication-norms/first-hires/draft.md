---
process: strategic-ops
subprocess: communication-norms
process_id: "1.3"
phase: first-hires
last_updated: 2026-06-03
claim_count: 14
synthesis_mode: thin_wiki
primary_source: src-047
---

# Operational Internal Communication Norms — First Hires (2–10 people)

> At first hires, communication norms are **decisions**, not a channel manual. Agree the minimum that prevents chaos — then coach it. Go deeper only when remote work, cross-role handoffs, or hire #2+ outside the founding context force it.

## What good looks like at this phase

<!-- claim-id: c-001 -->
- **You have a channel list with one-line jobs** — e.g. `#general`, `#customer-questions`, `#bugs` when CS and engineering split — and everyone knows which channel to use for what. Social chat stays separate from operational channels.
  <!-- sources: src-047 (synthesis), processes.json 1.3 stageFocus -->

<!-- claim-id: c-002 -->
- **Chat coordinates; something else remembers.** Slack (or equivalent) is for movement and quick questions; decisions, scope, and how-tos that must survive three months live in wiki, tickets, or repo docs. Announced in chat, authoritative in the record.
  <!-- sources: src-047 (synthesis), src-042, src-046, atom-218 -->

<!-- claim-id: c-003 -->
- **Written depth matches team complexity.** Co-located founding circle can run on a few spoken rules. Remote teams or ≥3 non-founders get a **one-page norms doc** (required reading for new hires): channel jobs, what must leave chat, response expectations, sensitive vs public.
  <!-- sources: src-047 (synthesis), atom-218 -->

## What you actually need to do

<!-- claim-id: c-004 -->
1. **Decide five things explicitly.** Practitioners disagree on how much to use Slack versus wiki/email, and on how prescriptive written norms should be — what works depends on context, not a single right answer. **Chat-forward** tends to fit remote teams that need fast same-group coordination; **evergreen-first** tends to fit teams protecting deep work or recovering from “Slack as the only system of record.” It can be summarized as: **use chat for movement and docs/tickets for memory**; keep norms spoken when a co-located founding circle shares everything, write a one-pager when remote work or cross-role handoffs appear. Then pick **your** defaults on: channel list; public vs DM; what must leave chat; response when @-tagged (~3 working hours is a common starting point); coach vs light policy.
   <!-- sources: src-047 (synthesis), atom-218 -->

<!-- claim-id: c-005 -->
2. **Adopt three non-negotiables** and coach everything else: (1) chat for movement, wiki/docs/tickets for memory; (2) if decided in Slack, codify within ~48h; (3) operational work public by default — DMs for HR, comp, credentials, delicate deals; post consensus back to a channel when safe.
   <!-- sources: src-047 (synthesis), src-042, src-045, atom-218 -->

<!-- claim-id: c-006 -->
3. **Name owners and basic SLAs** when customer-facing roles exist — e.g. bugs flagged by CS responded in ~2 hours, customer questions in ~4 hours (`processes.json` defaults). Route through `#bugs` / `#customer-questions`, not ad-hoc DMs to engineers.
   <!-- sources: processes.json 1.3 stageFocus -->

<!-- claim-id: c-007 -->
4. **Use the optional artifact template** when you write the one-pager — not a GitLab-scale handbook. See [communication norms proposal](../../../docs/proposals/communication-norms-summary-and-template.md#4--optional-team-template-first-hires) for a fill-in channel and artifact map.
   <!-- sources: src-047 (synthesis), editorial -->

<!-- claim-id: c-013 -->
5. **When CS and engineering fight about mentions or channels**, make it a norm decision — not a morale lecture. Bring both leads together for one short session: name each complaint plainly (engineers: "@-mentions in random channels, we never get deep work done"; CS: "mentions go unanswered, customers suffer"), then agree a **shared path** — which channel or ticket type, when @-tags are fair game, what response window both sides accept. Write it in one paragraph and post where both teams look. There is no universal right answer; the failure mode is leaving it unresolved.
   <!-- sources: src-049, atom-224 -->

## Warning signs you're behind

### Process entry

<!-- claim-id: c-008 -->
- **New hires learn ops only through DMs and tribal knowledge** — no channel list, no written “what lives where,” same questions every month.
  <!-- sources: atom-205, src-047 -->

### Founder / key-person time

<!-- claim-id: c-009 -->
- **Slack is your only system of record** or **instant reply is the norm** — the team treats chat as memory, or founders/engineers cannot batch deep work. Often the same dysfunction.
  <!-- sources: atom-202, atom-203, atom-204, src-042 -->

### Output quality

<!-- claim-id: c-014 -->
- **CS and engineering are at war over how to use chat** — engineers say CS @-mentions them in random channels and deep work never happens; CS says engineers ignore mentions and customers wait. Both can be true. You cannot prescribe one channel map for every company, but you are behind if the two teams have not agreed on a handoff path they can both operate under.
  <!-- sources: src-049, atom-223 -->

## How this evolves next

<!-- claim-id: c-010 -->
At **early revenue** (11–25 people), written **channel guidelines** and **cross-team escalation** (e.g. CS → engineering) become critical — organic-only norms break on handoffs. Add a light artifact map (decisions, scope, incidents: chat notifies, X owns the record) and an incident fast lane. Full playbook waits until growth.
  <!-- sources: src-047 (synthesis), processes.json 1.3 stageFocus early-revenue -->

## Tools & resources

<!-- claim-id: c-011 -->
- **[Communication norms — decisions, schools, template](../../../docs/proposals/communication-norms-summary-and-template.md)** — stage decision tables and optional one-pager template (repo proposal, not external).
  <!-- sources: src-047 (synthesis) -->

<!-- claim-id: c-012 -->
- **[The 37signals Guide to Internal Communication](https://basecamp.com/guides/how-we-communicate)** — async-first principles, spatial context, check-ins (external reference for depth).
  <!-- sources: src-044 -->
