---
entry: strategic/shareholder-reporting/early-revenue
process: "1.2b Shareholder & Investor Reporting"
process_id: "1.2b"
phase: early-revenue
topic_focus: "board and founder role clarity — what a board is actually there to do, and where that goes wrong"
last_updated: 2026-09-15
extraction_complete: true
---

## Source mix

- Total sources registered: 11 (src-087–097)
- Practitioner-led (type `hn` or `practitioner_blog`): 9 of 11 (82%) — HN threads ×3 (src-087, 089, 090), first-person practitioner blogs ×6 (src-088, 091, 092, 093, 094, 097)
- VC firm / advisory (type `vc_firm`): 2 of 11 (18%) — src-095 (NFX), src-096 (Forbes/Kjartan Rist)
- Vendor / commercial-interest (selling a board-related product): 0 registered
- News / academic: 0 (TechCrunch guest piece src-094 is practitioner-authored, counted as practitioner_blog)

**Investor-perspective concentration within the practitioner tier:** of the 9 practitioner-tagged sources, 5 are written by working VCs in first person (src-088 Jerry Neumann, src-091 David Paul, src-092 Rishi Taparia, plus the 2 formal `vc_firm` sources). Only src-093 (operator/board member, not a fund), src-094 (ex-CEO), and src-097 (founder company blog) are unambiguously founder/operator-side, alongside the three HN threads (mixed commenters, generally founder-leaning). **This is a real skew** even though it's not "vendor bias" in the usual sense — see Disclosure status below.

## Geographic mix

- US: 8 (src-088, 091, 092, 093, 094, 095, 096, 097)
- Global/Unknown: 3 (src-087, 089, 090 — HN threads, commenter locations not identifiable)
- EU/NL: 0

## Bias flags raised

- `vc_industry_veteran`: 3 atoms (atom-642, 643, 644) — src-088, a 25-year VC writing critically about board power dynamics
- `vc_investor_self_interest`: 7 atoms (atom-650–656) — src-091, src-092, both working VCs
- `vc_portfolio_interest`: 7 atoms (atom-665–671) — src-095 (NFX), src-096 (Forbes/Rist)
- No vendor bias flags — no source in this corpus sells a board-related product (cap table tools, board-management software) or has direct financial interest in a specific tool recommendation

## Adversarial pass

A separate second-pass adversarial search was not run as a distinct step, because the topic brief itself (board-founder role ambiguity, the "more control" reflex under underperformance) is inherently a critical/dissenting angle — initial discovery queries were written to surface dysfunction and disagreement directly (e.g. "boards are dangerous to founder/CEOs," "founders feel like they work for the board," "board reacts to missing numbers more control"), rather than starting from a positive/vendor framing and needing to counter it. The resulting corpus is naturally adversarial toward the "boards are simply good for founders" narrative: src-087/088/089 argue boards pose real, underestimated risk to founder-CEOs; src-094's author resigned from board seats over dysfunction; src-091 is a VC's self-critical account of his own bad past behavior. No single vendor-pushed narrative dominates the corpus, so the >60% commercial-interest threshold for a formal adversarial resweep was not met by vendor-interest sources specifically (0% vendor), even though investor-perspective concentration is separately worth flagging (see above).

## Disclosure status

- Should this entry render an "About this entry's sources" disclaimer? **Yes**
- Reason: (1) Investor-perspective concentration — even setting aside the two formally-tagged `vc_firm` sources, 3 of the remaining 9 "practitioner" sources are written by working VCs in first person; genuinely founder-authored first-person accounts (src-094, src-097, plus HN commenters) are a minority of the corpus even though they carry real weight in the atoms extracted. (2) Geographic gap — corpus is entirely US-focused or geography-unknown (HN); no EU/NL source addresses board governance conventions (e.g. one-tier vs. two-tier boards, `raad van commissarissen` norms, Dutch shareholder-agreement practice), which the existing `1.2b--early-revenue.md` page and `data/processes.json` variants already flag as relevant to this process. Synthesis (Phase 2) should lean on the founder-side atoms (src-094, src-097, HN-derived) when stating claims about how founders *should* experience the board relationship, and should flag investor-authored claims about "the right way to run a board" as one-sided where no founder-side atom corroborates them.

## Content-fetch note

`WebFetch` and direct `curl` access to `news.ycombinator.com`, `*.substack.com`, `forbes.com`, `nfx.com`, `reactionwheel.net`, `techcrunch.com` and `thejuicehq.com` were all blocked by this environment's egress policy (organization policy denial, not a transient failure — confirmed via the agent-proxy status endpoint). All source evaluation and atom extraction in this run was done from `WebSearch`-synthesized content (which itself fetches and summarizes the underlying pages server-side) rather than full raw-text fetches. Claims are paraphrased conservatively and confidence/why_quality are capped at `medium` where the underlying search synthesis was thin; atoms with concrete, specific, repeated numeric or mechanism detail (e.g. "3 days, preferably 7," "90% accuracy," the LP-pressure-cascade mechanism) were given `high` confidence. A human reviewer with working fetch access may want to spot-check the higher-confidence atoms against full source text before Phase 2 synthesis.
