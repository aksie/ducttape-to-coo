# Trail — Offboarding / First hires (3.4)

**Corpus:** `corpus_health-people-ops-first-hires-offboarding.md`  
**Atoms:** atom-225 through atom-249 (25 extracted)  
**Synthesis note:** No prior stage entry (foundation is `future`). Risk-based timing for voluntary vs involuntary departures merged into c-009. EU/NL labor-law steps (final pay, notice period) intentionally omitted — jurisdiction-specific; flag for local HR counsel.

---

### c-001: Written checklist with DRIs
- Section: what_good_looks_like
- Supporting atoms: atom-225
- Primary source: src-056, src-057
- Synthesis notes: OpenOrg DRI structure + tinyteam phased checklist

### c-002: Knowledge transfer starts on notice
- Section: what_good_looks_like
- Supporting atoms: atom-226
- Primary source: src-057, src-056
- Synthesis notes: Merged "don't compress into last day" from multiple sources

### c-003: Master access list
- Section: what_good_looks_like
- Supporting atoms: atom-227
- Primary source: src-051

### c-004: Password manager not spreadsheets
- Section: what_good_looks_like
- Supporting atoms: atom-228
- Primary source: src-052

### c-005: Neutral exit interview
- Section: what_good_looks_like
- Supporting atoms: atom-229
- Primary source: src-056, src-057
- Flags: src-057 sells_hr_software — triangulated with HN

### c-006: Write checklist + live-test revocation
- Section: what_to_do
- Supporting atoms: atom-227, atom-242
- Why-source: atom-242 (untested checklist = founder panic)
- Primary source: src-051, src-055

### c-007: Day 1 notice — transition owner + IT notify
- Section: what_to_do
- Supporting atoms: atom-232, atom-233
- Primary source: src-057, src-053

### c-008: Knowledge transfer during notice
- Section: what_to_do
- Supporting atoms: atom-226, atom-247
- Why-source: atom-248 (tacit knowledge highest value)
- Primary source: src-054, src-056

### c-009: Revocation order and risk-based timing
- Section: what_to_do
- Supporting atoms: atom-230, atom-231, atom-235, atom-244
- Why-source: atom-230 (involuntary = within hour), atom-244 (voluntary may allow handover window)
- Primary source: src-050, src-052, src-051, src-055
- Synthesis notes: Presents tension explicitly — not one-size-fits-all lockout speed

### c-010: Separate exit interview and closure
- Section: what_to_do
- Supporting atoms: atom-236
- Primary source: src-056

### c-011: Remote equipment shipping label
- Section: what_to_do
- Supporting atoms: atom-234
- Primary source: src-056, src-055
- Synthesis notes: HN Ask HN laid-off equipment thread (33939467) cited in src-055 corpus

### c-012: HR→IT handoff failure
- Section: warning_signs
- Warning category: output_quality
- Supporting atoms: atom-238
- Primary source: src-053

### c-013: Shared admin creds not rotated
- Section: warning_signs
- Warning category: output_quality
- Supporting atoms: atom-239
- Primary source: src-052, src-053

### c-014: Skipped exit interviews
- Section: warning_signs
- Warning category: output_quality
- Supporting atoms: atom-240
- Primary source: src-056
- Flags: src-056 sells_people_ops_advisory — pattern confirmed by tinyteam

### c-015: Personal credential copies
- Section: warning_signs
- Warning category: output_quality
- Supporting atoms: atom-241
- Primary source: src-054

### c-016: Never live-tested checklist
- Section: warning_signs
- Warning category: founder_time
- Supporting atoms: atom-242
- Primary source: src-055

### c-017: Last-day-only offboarding
- Section: warning_signs
- Warning category: process_entry
- Supporting atoms: atom-237
- Primary source: src-057, processes.json 3.4

### c-018: Evolves to early-revenue full loop
- Section: evolution
- Supporting atoms: atom-243
- Primary source: src-056, processes.json 3.4

### c-019: Evolves to growth/scaled automation
- Section: evolution
- Supporting atoms: atom-244, atom-245
- Primary source: src-055, src-051, processes.json 3.4
- Synthesis notes: Combined growth day-1 trigger + scaled HR automation into one claim

### c-020: Google Workspace + password manager
- Section: tools
- Supporting atoms: atom-246
- Primary source: src-051, src-052

### c-021: Knowledge-transfer template
- Section: tools
- Supporting atoms: atom-247
- Primary source: src-056
- Flags: src-056 sells_people_ops_advisory — template structure only

---

## Dropped atoms

| Atom | Reason |
|---|---|
| atom-249 | Merged why-reasoning into c-009 explanation (consistent lockout protects both sides) — not promoted as standalone claim |
| — | No atoms dropped for vendor-only support; all vendor atoms triangulated with HN |

## Phase 3 handoff

Open `cd wiki-pipeline && python3 server.py` → http://localhost:8765 — loads this `draft.md` + `trail.md`. All 18 claims will appear as **pending** until reviewed. `approval.md` auto-creates on first visit.
