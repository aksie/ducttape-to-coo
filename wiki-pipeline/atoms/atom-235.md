---
id: atom-235
source_id: src-051
type: action
process: people-ops
phase: first-hires
applies_to_stages: [early-revenue, growth, scaled]
sub_variant_signals: []
confidence: high
practitioner_first_person: false
bias_flags: []
why_quality: high
extracted_by: "llm:cursor-agent"
extracted_date: 2026-06-03
unverified: false
---

## Claim

You should disable the employee's Google Workspace (or primary identity provider) account first — before manually revoking individual SaaS logins — so SSO-connected services cascade off automatically.

## Source quote or paraphrase

HN security thread: unified login via Google Workspace OIDC/SAML means one disable removes access to many downstream apps; without SSO you chase accounts one by one.

## Why

At first hires you cannot afford a half-day revocation sprint per departure. Identity-provider-first cuts the checklist in half for any app enrolled in SSO.
