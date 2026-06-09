---
process: strategic-ops
subprocess: communication-norms
process_id: "1.3"
phase: early-revenue
last_updated: 2026-06-03
claim_count: 16
synthesis_mode: thin_wiki
primary_source: src-047
backfill: published_wiki_2026-06-03
---

# Operational Internal Communication Norms — Early Revenue (11–25 people)

> At early revenue, communication norms must be **written and findable**. Cross-team handoffs (CS → engineering, sales → product, ops → everyone) multiply; the one-pager or spoken rules from first hires are no longer enough. Still not a GitLab-scale playbook — one living doc plus an escalation table.

## What good looks like at this phase

<!-- claim-id: c-001 -->
- **Channel guidelines are documented** — what goes in which channel, when to DM vs post publicly, and what must leave chat for wiki or tickets. New hires and managers in other functions can find it without asking in `#general`.
  <!-- sources: src-047 (synthesis), processes.json 1.3 stageFocus, atom-211 -->

<!-- claim-id: c-002 -->
- **Cross-team escalation paths are named with SLAs by type** — e.g. customer bug: CS posts in `#bugs` → ticket created → engineering acknowledges within agreed window. Not “DM whoever you know.”
  <!-- sources: src-047 (synthesis), src-049, processes.json 1.3 stageFocus -->

<!-- claim-id: c-003 -->
- **You have an incident fast lane** — one channel (or tag) for production-down / security issues, with explicit rules for when `@channel` is allowed. Day-to-day work stays out of it.
  <!-- sources: src-047 (synthesis), atom-211 -->

## What you actually need to do

<!-- claim-id: c-004 -->
1. **Upgrade your norms doc from first hires** — if norms were still oral or a thin one-pager, expand to **written channel guidelines** plus a one-table **escalation map**: who hands off to whom, through which channel or ticket type, and expected response by urgency (bug vs question vs incident).
   <!-- sources: src-047 (synthesis), atom-218, atom-211 -->

<!-- claim-id: c-005 -->
2. **Keep the three non-negotiables** from first hires and enforce them across teams: chat for movement, wiki/docs/tickets for memory; Slack decisions codified within ~48h; operational work public by default. Early revenue is where **cross-team** violations hurt — CS pinging engineers in random channels, or engineering treating `#bugs` as optional.
   <!-- sources: src-047 (synthesis), src-042, src-049 -->

<!-- claim-id: c-006 -->
3. **Document CS → engineering (and similar) handoffs explicitly** — ticket-first, channel-then-ticket, or another path you choose; the format matters less than everyone using the same one. If CS and engineering still disagree on mentions or channels, run the **joint norm session** described on [First Hires](../../../../../wiki/processes/strategic/1.3--first-hires.md) (what to do, item 5): both leads name each complaint, agree a shared path, then **capture that agreement in your escalation table** — not only in a Slack thread.
   <!-- sources: src-049, atom-224, src-047 -->

<!-- claim-id: c-007 -->
4. **Add a light artifact map** — for decisions, scope changes, and incidents: chat **notifies**, but name the system of record (ticket, doc, postmortem). Example: “decided in `#product` → decision log in Notion within 48h.”
   <!-- sources: src-047 (synthesis), docs/proposals communication-norms §4 -->

<!-- claim-id: c-008 -->
5. **Define the incident fast lane** — dedicated channel or workflow for prod-down / security; `@channel` only for that class of issue, not routine questions. Post-incident summary goes to the artifact map destination, not only Slack scroll.
   <!-- sources: src-047 (synthesis), atom-211 -->

<!-- claim-id: c-009 -->
6. **Clarify email’s job** — external customers and formal internal announcements (policy, reorg, compliance). Summarize in chat **with a link** to the authoritative doc or email; chat is not the record for those.
   <!-- sources: src-046, src-047 (synthesis) -->

## Warning signs you're behind

### Process entry

<!-- claim-id: c-010 -->
- **New hires and managers in other teams cannot find how to escalate** — they ask in `#general` or DM a founder because nothing written describes CS → eng, sales → product, or “what do I do when production is down.”
  <!-- sources: atom-205, src-047 -->

### Output quality

<!-- claim-id: c-011 -->
- **CS and engineering are at war over how to use chat** — engineers say CS @-mentions them in random channels and deep work never happens; CS says engineers ignore mentions and customers wait. Both can be true. At early revenue this usually means handoffs were never written down or the written path is ignored — you need an escalation table both teams agreed to, not a recurring morale fight.
  <!-- sources: src-049, atom-223 -->

<!-- claim-id: c-012 -->
- **Urgent customer or production issues land in random channels or DMs** — no consistent path, duplicate pings, or issues sit unseen while teams argue about where they should have been posted.
  <!-- sources: src-049, atom-223, src-047 -->

### Founder / key-person time

<!-- claim-id: c-013 -->
- **Everyone is expected to monitor every channel**, or `@channel` is used for non-emergencies — the org compensates for missing escalation design by making the whole company interruptible.
  <!-- sources: src-043, atom-203, src-047 -->

## How this evolves next

<!-- claim-id: c-014 -->
At **growth** (26–50 people), the living doc becomes a **communication playbook**: SLAs tiered by urgency, an escalation matrix with rotations for interrupt queues (e.g. weekly `#support-` owner), and a quarterly “what’s working” review. Integrate chat ↔ tickets ↔ wiki so links are habitual. Full architecture waits until scaled.
  <!-- sources: src-047 (synthesis), atom-208, processes.json 1.3 stageFocus growth -->

## Tools & resources

<!-- claim-id: c-015 -->
- **[Communication norms — decisions, schools, template](../../../../../docs/proposals/communication-norms-summary-and-template.md)** — early-revenue decision table (§ “Early revenue”) and optional one-pager / artifact map starter.
  <!-- sources: src-047 (synthesis) -->

<!-- claim-id: c-016 -->
- **[Channel Strategy (Antoine Buteau)](https://www.antoinebuteau.com/internal-communication-series-7-channel-strategy-what-belongs-in-slack-docs-email-meetings-dashboards-all-hands-and-1-1s/)** — what belongs in Slack vs docs vs email vs meetings (external depth).
  <!-- sources: src-046 -->
