---
process: people-ops
subprocess: offboarding
process_id: "3.4"
phase: first-hires
last_updated: 2026-06-03
claim_count: 18
---

# Offboarding — First Hires (2–10 people)

> When someone leaves at 2–10 people, you need a one-page checklist — not improvisation on their last day. Revoke access, return equipment, transfer knowledge, and run a short exit interview. The security and knowledge gaps from a sloppy departure hurt disproportionately when the team is small.

## What good looks like at this phase

<!-- claim-id: c-001 -->
- **You have a written offboarding checklist with a named owner per workstream** — IT access, knowledge transfer, equipment, HR paperwork, team communication. The founder is not reconstructing the process from memory during an emotional departure.
  <!-- sources: src-056 (openorg.fyi), src-057 (tinyteam) -->

<!-- claim-id: c-002 -->
- **Knowledge transfer starts in the first days of notice, not on the last day.** Handover sessions, documentation, and access audit run across the notice period; last day is revoke-and-recover only.
  <!-- sources: src-057 (tinyteam), src-056 (openorg.fyi) -->

<!-- claim-id: c-003 -->
- **You maintain a master list of every tool and account each person can access** — updated when you onboard someone — so revocation does not depend on remembering services ad hoc.
  <!-- sources: src-051 (HN IT security checklist) -->

<!-- claim-id: c-004 -->
- **Team credentials live in a cloud password manager with per-person access** — not shared spreadsheets, Slack messages, or local vault files on Google Drive.
  <!-- sources: src-052 (HN password management) -->

<!-- claim-id: c-005 -->
- **Exit interviews use a consistent short question set, run by a neutral party** — founder, ops lead, or advisor — not by the departing employee's direct manager alone.
  <!-- sources: src-056 (openorg.fyi), src-057 (tinyteam) -->

## What you actually need to do

<!-- claim-id: c-006 -->
1. **Write the checklist and master access list before you need them.** Include every SaaS tool, cloud console, and shared credential collection. Live-test revocation on your own account once so you know what you forget and how long it takes.
   <!-- sources: src-051 (HN), src-055 (HN offboarding checklist test) -->

<!-- claim-id: c-007 -->
2. **On day one of notice: confirm last day, assign a transition owner, and notify whoever controls IT access.** Departure confirmation triggers IT the same day — never rely on an original contract end date if someone leaves early.
   <!-- sources: src-057 (tinyteam), src-053 (HN NCS cautionary tale) -->

<!-- claim-id: c-008 -->
3. **During notice: run knowledge-transfer sessions and have the departing employee fill a handover template** — daily tasks, key contacts, project status, open loops, system quirks. Tacit knowledge in people's heads is the highest-value thing to capture; access revocation alone does not replace it.
   <!-- sources: src-054 (HN Auth0 thread), src-056 (openorg.fyi), atom-248 -->

<!-- claim-id: c-009 -->
4. **On departure, revoke access in order: disable the identity provider (e.g. Google Workspace) first, remove the person from the password manager, then rotate every shared credential they could access.** For involuntary or high-privilege departures, do this within the hour of the termination conversation. For voluntary good-faith partings, you may allow a notice-period handover window — but revoke unilateral admin or production credentials immediately regardless.
   <!-- sources: src-050 (HN), src-052 (HN), src-055 (HN), src-051 (HN) -->

<!-- claim-id: c-010 -->
5. **Hold two separate conversations near departure:** a neutral exit interview for honest feedback (20 minutes, six questions is enough), and a manager-led closure conversation focused on appreciation — not combined into one awkward meeting.
   <!-- sources: src-056 (openorg.fyi) -->

<!-- claim-id: c-011 -->
6. **For remote teams, generate a prepaid shipping label for company equipment** — laptop, phone, security keys — and track return against your asset list.
   <!-- sources: src-056 (openorg.fyi), src-055 (HN equipment thread) -->

## Warning signs you're behind

### Output quality

<!-- claim-id: c-012 -->
- **Someone left early but IT still had their accounts set to expire on the original end date.** HR→IT handoff failed; retained credentials enabled harm weeks later. At first hires the fix is one checklist line: departure confirmed → IT notified same day.
  <!-- sources: src-053 (HN NCS case) -->

<!-- claim-id: c-013 -->
- **Your team uses shared admin logins or shared passwords that are not rotated when someone leaves.** Disabling a personal email account does not touch credentials the person already knew.
  <!-- sources: src-052 (HN), src-053 (HN) -->

<!-- claim-id: c-014 -->
- **You skip exit interviews because the departure feels amicable.** You lose the only unfiltered attrition feedback loop you have at this stage — patterns across multiple exits are where the actionable data lives.
  <!-- sources: src-056 (openorg.fyi) -->

<!-- claim-id: c-015 -->
- **You revoked company access but never rotated shared credentials the departing employee may have saved outside company systems.** Revocation stops company-controlled paths, not personal copies.
  <!-- sources: src-054 (HN Auth0 thread) -->

### Founder / key-person time

<!-- claim-id: c-016 -->
- **You have never live-tested your offboarding checklist.** Each real departure becomes a panicked scavenger hunt that pulls the founder out of the business for a day.
  <!-- sources: src-055 (HN) -->

### Process entry

<!-- claim-id: c-017 -->
- **You only think about offboarding on the employee's last day** — access, equipment, handover, and paperwork all at once. No checklist, no work started until the morning they leave.
  <!-- sources: src-057 (tinyteam), processes.json 3.4 stageFocus -->

## How this evolves next

<!-- claim-id: c-018 -->
- **At early revenue**, the checklist expands to formal HR paperwork, client handover communications, and a habit of feeding exit-interview themes back into how you hire and manage. Run the full checklist every time — exit insights should close the loop on retention.
  <!-- sources: src-056 (openorg.fyi), processes.json 3.4 stageFocus -->

<!-- claim-id: c-019 -->
- **At growth and scaled**, IT deprovisioning triggers on day one of notice (not last day only), with documented SLAs and eventually HR-system-triggered automated workflows. The checklist you wrote at first hires becomes encoded process — not reinvented per departure.
  <!-- sources: src-055 (HN), src-051 (HN), processes.json 3.4 stageFocus -->

## Tools & resources

<!-- claim-id: c-020 -->
- **Google Workspace (or equivalent) as identity provider + team password manager (1Password, Bitwarden, or similar).** Two disable actions — IDP off, remove from password manager — cover most first-hires offboarding without enterprise IAM.
  <!-- sources: src-051 (HN), src-052 (HN) -->

<!-- claim-id: c-021 -->
- **Knowledge-transfer template** — a Google Doc or Notion page with headings for daily tasks, key contacts, project status, open loops, and a short "state of the role" memo. Fill during notice period, not on last day.
  <!-- sources: src-056 (openorg.fyi) -->
