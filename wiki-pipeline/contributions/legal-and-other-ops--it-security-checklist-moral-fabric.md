---
type: licensed-external-source
status: approved for pipeline use
source_url: https://help.moralfabric.org/p/2FWCKzNlxXsT7j/IT-security-checklist-for-employees
rights: use granted to Duct Tape to COO wiki (stefanverkerk)
license_note: Attribute to Moral Fabric on published wiki pages; not legal advice.
maps_to:
  process_id: "4.3"
  process_name: IT Administration & User Support
  phase: first-hires
contributor: Moral Fabric
filed_by: stefanverkerk
date: 2026-08-20
---

# IT security checklist for employees — Moral Fabric

*Licensed external checklist used as the primary source for **4.3 IT Administration @ first-hires**. Synthesised into startup ops language; recurring (monthly/quarterly/yearly) items map mainly to early-revenue evolution.*

## What good looks like at this phase

- **Google Workspace or Microsoft 365 is your identity provider**, with a **team password manager** (1Password, Bitwarden, Proton Pass, or similar) — per-person vault access, not shared spreadsheets or Slack-stored passwords.
- **SSO (preferred) or MFA/2FA on every business account** — if a password leaks, this is what stops access.
- **Every work device runs a supported OS with automatic updates**, screen lock (≈5 minutes), **disk encryption** (FileVault / BitLocker), and active endpoint protection (Defender on Windows; add Malwarebytes/Bitdefender on Mac if needed).
- **A master list of who has access to what** — updated when someone joins; revocation tied to [3.4 offboarding](../../../wiki/processes/people/3.4--first-hires.md), not remembered ad hoc.
- **Each employee has signed your information security policy** — you have a record that expectations were read and understood.
- **New-hire IT setup is a one-page checklist**, not rebuilt from memory each hire.

## What you actually need to do

1. **Before hire #2:** set up identity provider, password manager, and MFA/SSO on core tools.
2. **On every work laptop/phone:** run the one-off device checklist — supported OS, auto-updates, lock, encryption, endpoint protection, recycle-bin auto-delete (30 days).
3. **Migrate passwords** into the password manager; delete saved passwords from browsers, docs, and old stores.
4. **Publish a new-hire IT setup one-pager** (accounts, groups, MFA, laptop, password manager access) and link it from [3.3 onboarding](../../../wiki/processes/people/3.3--first-hires.md).
5. **Maintain the master access list** — update on join; same-day revoke on leave (see 3.4).
6. **Collect a signed information security policy** from each employee at start.

## Warning signs you're behind

### Output quality

- Passwords still live in browsers, email, or shared docs instead of the password manager.
- Business accounts lack SSO/MFA — a single stolen password is enough to get in.
- Work devices lack disk encryption or run an unsupported OS — a lost laptop is a data-incident risk (AVG-relevant in NL/EU).

### Founder / key-person time

- New hires wait days for basic access because setup lives in one person's head.

### Process entry

- No signed information security policy — nobody agreed to a baseline; audits and insurers will ask.

## How this evolves next

At **early revenue**, add Moral Fabric's **recurring** rhythm: monthly local-file hygiene and patch checks (if not automated), quarterly MFA/access and password-manager security reports, annual policy re-read and phishing refresh — see [4.3 at early revenue](../../../wiki/processes/legal/4.3--early-revenue.md).

## Tools & resources

- [Moral Fabric — IT security checklist for employees](https://help.moralfabric.org/p/2FWCKzNlxXsT7j/IT-security-checklist-for-employees) (employee one-off + recurring template)
- Team password manager; Google Security Checkup; [Google phishing quiz](https://phishingquiz.withgoogle.com/)

## Pipeline record

- Source: `src-074`
- Atoms: `atom-560` … `atom-582`
- Entry: `wiki-pipeline/entries/legal-and-other-ops/it-administration/first-hires/`
