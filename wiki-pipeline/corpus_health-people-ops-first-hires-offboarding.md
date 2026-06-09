---
entry: people-ops/first-hires
process: "3.4 Offboarding"
last_updated: 2026-06-03
---

## Source mix

- Total sources: 8 (src-050 through src-057)
- Practitioner-led: 6 (75%) — 6 HN threads with first-person operator comments
- Vendor / commercial-interest: 1 (12.5%) — tinyteam HR software blog
- Advisory firm / operator guide: 1 (12.5%) — OpenOrg.fyi people ops content
- News / academic: 0

## Geographic mix

- US: 1 (tinyteam — US small-business framing)
- EU/NL: 0 registered (HN threads include European notice-period comments; no NL-specific labor-law sources)
- Global/Unknown: 7

## Bias flags raised

- sells_hr_software: src-057 — atoms triangulated against HN sources; vendor-only claims not promoted
- sells_people_ops_advisory: src-056 — structure/checklist atoms confirmed by practitioner threads
- us_centric: src-057 — final pay/COBRA framing skipped for wiki; access and KT atoms are global

## Adversarial re-search

Not triggered. Corpus is practitioner-led (75%). HN threads include failure-mode stories (NCS server deletion, Auth0 exfiltration near-misses) that surface what vendor checklists omit. Voluntary vs involuntary departure nuance present in src-054, src-055.

## Cell-specific finding

**Not a sparse cell for security and checklist principles** — abundant HN practitioner content on access revocation, password rotation, and broken HR→IT handoffs. **Stage fit:** first-hires is the right entry (`recommended` in processes.json); foundation is correctly `future` (no employees to offboard).

**Knowledge transfer vs security tension:** sources disagree on immediate lockout vs transition window — consensus is risk-based (involuntary/high-privilege = immediate; voluntary good-faith = notice-period handover). Phase 2 should present both without over-prescription.

**EU gap:** no registered NL/EU sources on notice periods, final pay timing, or arbeidsrecht constraints. Wiki should flag jurisdiction-specific HR steps as out-of-scope or stub for local counsel.

## Atoms extracted

- Total atoms: 25 (atom-225 through atom-249)
- By type: target_state 5, action 6, warning_sign 6, evolution 3, tool_resource 2, why 2
- By warning category: output_quality 4, founder_time 1, process_entry 1

## Disclosure status

- Should this entry render an "About this entry's sources" disclaimer? **No**
- Reason: Practitioner ratio 75%; vendor/advisory sources used for checklist structure only, triangulated with HN practitioner stories; security claims supported by independent operators
