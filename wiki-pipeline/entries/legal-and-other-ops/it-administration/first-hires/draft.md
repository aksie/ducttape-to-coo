---
process: it-administration
subprocess: it-administration
process_id: "4.3"
phase: first-hires
last_updated: 2026-08-20
claim_count: 22
---

# IT Administration & User Support — First Hires (2–10 people)

> At 2–10 people, user-facing IT is still manual — but "manual" is not "optional." Set up identity, a password manager, MFA, device basics, and a one-page new-hire checklist before improvisation becomes the process.

## What good looks like at this phase

<!-- claim-id: c-001 -->
- **Google Workspace or Microsoft 365 is your identity provider**, with a **team password manager** (1Password, Bitwarden, Proton Pass, or similar) — per-person vault access, not shared spreadsheets or Slack-stored passwords.
  <!-- sources: src-074 (Moral Fabric, human:moral-fabric), src-051 (hacker_news) -->

<!-- claim-id: c-002 -->
- **SSO is enabled where available; otherwise MFA/2FA is on for every business account.**
  If a password leaks, this is what stops someone getting in.
  <!-- sources: src-074 (Moral Fabric, human:moral-fabric) -->

<!-- claim-id: c-003 -->
- **Every work device runs a supported OS with automatic updates**, screen lock (about five minutes), **disk encryption** (FileVault / BitLocker), and active endpoint protection.
  <!-- sources: src-074 (Moral Fabric, human:moral-fabric) -->

<!-- claim-id: c-004 -->
- **You maintain a master list of every tool and account each person can access** — updated when someone joins and revoked on leave the same day, not remembered ad hoc.
  <!-- sources: src-074 (Moral Fabric, human:moral-fabric), src-051 (hacker_news) -->

<!-- claim-id: c-005 -->
- **Each employee has signed your information security policy** — you retain a record that expectations were read and understood.
  <!-- sources: src-074 (Moral Fabric, human:moral-fabric) -->

<!-- claim-id: c-006 -->
- **New-hire IT setup is a written one-page checklist**, linked from [3.3 onboarding](../../../wiki/processes/people/3.3--first-hires.md) — not rebuilt from memory each hire.
  <!-- sources: src-074 (Moral Fabric, human:moral-fabric) -->

## What you actually need to do

<!-- claim-id: c-007 -->
1. **Before hire #2: set up identity provider, password manager, and MFA/SSO on core tools.**
   The second hire is the last easy moment before access sprawl.
   <!-- sources: src-074 (Moral Fabric, human:moral-fabric) -->

<!-- claim-id: c-008 -->
2. **Run the one-off device checklist on every laptop and phone used for work** — supported OS, auto-updates, lock, encryption, endpoint protection, and 30-day recycle-bin auto-delete.
   <!-- sources: src-074 (Moral Fabric, human:moral-fabric) -->

<!-- claim-id: c-009 -->
3. **Migrate passwords into the password manager and delete saved passwords from browsers and other stores.**
   Use import/export once rather than retyping ad hoc.
   <!-- sources: src-074 (Moral Fabric, human:moral-fabric), src-052 (hacker_news) -->

<!-- claim-id: c-010 -->
4. **Publish the new-hire IT setup one-pager** (accounts, groups, MFA, laptop, password-manager access) and link it from onboarding.
   <!-- sources: src-074 (Moral Fabric, human:moral-fabric) -->

<!-- claim-id: c-011 -->
5. **Have each employee complete the one-off security checklist and sign the information security policy in their first week.**
   <!-- sources: src-074 (Moral Fabric, human:moral-fabric) -->

<!-- claim-id: c-012 -->
6. **Update the master access list on every join and trigger same-day access removal on every leave** per your [3.4 offboarding](../../../wiki/processes/people/3.4--first-hires.md) checklist.
   <!-- sources: src-074 (Moral Fabric, human:moral-fabric), src-051 (hacker_news) -->

## Warning signs you're behind

### Output quality

<!-- claim-id: c-013 -->
- **Passwords still live in browsers, shared documents, or chat instead of the password manager.**
  Those copies survive offboarding and leak in screenshots or forwarded threads.
  <!-- sources: src-074 (Moral Fabric, human:moral-fabric) -->

<!-- claim-id: c-014 -->
- **Business accounts lack SSO or MFA — a single guessed password is enough to get in.**
  <!-- sources: src-074 (Moral Fabric, human:moral-fabric) -->

<!-- claim-id: c-015 -->
- **Work devices lack disk encryption or run an unsupported operating system.**
  A lost laptop without encryption is a data-incident risk — in NL/EU often AVG-relevant.
  <!-- sources: src-074 (Moral Fabric, human:moral-fabric) -->

### Founder / key-person time

<!-- claim-id: c-016 -->
- **New hires wait several days for email, tools, or MFA because IT setup lives in one person's head.**
  <!-- sources: src-074 (Moral Fabric, human:moral-fabric) -->

### Process entry

<!-- claim-id: c-017 -->
- **No one has signed an information security policy — there is no agreed baseline for devices, passwords, or data handling.**
  <!-- sources: src-074 (Moral Fabric, human:moral-fabric) -->

## How this evolves next

<!-- claim-id: c-018 -->
At **early revenue**, add **monthly device hygiene** (downloads, desktop, recycle bin, patch verification) when not fully automated — see [4.3 at Early Revenue](../../../wiki/processes/legal/4.3--early-revenue.md).

<!-- claim-id: c-019 -->
At **early revenue**, run **quarterly MFA/access reviews** and password-manager security reports; **re-read the security policy and refresh phishing awareness yearly.**
  <!-- sources: src-074 (Moral Fabric, human:moral-fabric) -->

## Tools & resources

<!-- claim-id: c-020 -->
- **Team password manager** (1Password, Bitwarden, Proton Pass, or similar) with per-person vaults.
  <!-- sources: src-074 (Moral Fabric, human:moral-fabric), src-052 (hacker_news) -->

<!-- claim-id: c-021 -->
- **[Moral Fabric — IT security checklist for employees](https://help.moralfabric.org/p/2FWCKzNlxXsT7j/IT-security-checklist-for-employees)** — one-off and recurring template for each team member.
  <!-- sources: src-074 (Moral Fabric, human:moral-fabric) -->

<!-- claim-id: c-022 -->
- **Google Security Checkup** and **[Google's phishing quiz](https://phishingquiz.withgoogle.com/)** for annual awareness refresh (especially with Google Workspace).
  <!-- sources: src-074 (Moral Fabric, human:moral-fabric) -->
