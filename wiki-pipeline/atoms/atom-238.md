---
id: atom-238
source_id: src-053
type: warning_sign
warning_category: output_quality
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

If someone leaves early and IT still has their accounts set to expire on the original end date, you have a broken handoff between whoever confirmed the departure and whoever controls access.

## Source quote or paraphrase

NCS contractor case: HR did not notify IT of early termination; accounts remained valid; contractor deleted 180 VMs weeks later using retained admin credentials.

## Why

This failure mode does not require malice — it requires only a forgotten message. At first hires the fix is a checklist line: departure confirmed → IT notified same day.
