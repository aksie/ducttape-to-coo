# Changelog — virtual-coo skill

Every notable change to this skill, **most recent first**. This is a running
record of everything shipped, not a "what changed since last time" note —
scroll down for history, not just the top entry.

Add an entry here as part of any PR that changes founder-facing behavior
(new capability, changed procedure, new test marker). Small internal
copyedits with no behavior change don't need one.

## 2026-07-27

- **Fix consistency issues from a full skill audit.** Corrected a stale
  rule-number cross-reference (beta disclaimer pointed at "rule 7", actually
  rule 8), made the `ops registry setup` test case actually create its
  scratch folder tree instead of only generating a script (so the
  `investor update` and `one quarter after start` test cases have real files
  to chain onto), added an explicit "verify the OS folder still exists
  before writing" rule to the three places that check for one, and noted
  the broader file-access option in `SETUP.md`.
  ([#7](https://github.com/aksie/ducttape-to-coo/pull/7))
- **Add the `one quarter after start` test marker.** Exercises the
  Quarterly Health Check's OS-folder report write-back end to end.
  ([#7](https://github.com/aksie/ducttape-to-coo/pull/7))
- **Add the `investor update` test marker.** Exercises the log-driven
  investor-update draft, the real Q&A pass, and the goals write-back end to
  end. ([#6](https://github.com/aksie/ducttape-to-coo/pull/6))
- **Feed investor updates from a running weekly log, not a thin snapshot.**
  Weekly check-in now appends to `investor-updates/weekly-log.md` whenever
  an OS folder exists; Investor updates & goals reads it and runs a real
  Q&A pass for genuine gaps instead of drafting from a handful of terse
  bullets in `company-state.md`.
  ([#5](https://github.com/aksie/ducttape-to-coo/pull/5))
- **Add Ducttape OS folder setup and Investor updates & goals capabilities.**
  The skill can now scaffold a real "Ducttape Operational System" folder
  (Company Ops Registry, investor updates, goals tracker, ops evaluations)
  instead of only giving advice, and draft periodic shareholder updates
  paired with a living quarterly goals tracker. Includes the first
  maintainer test marker (`ops registry setup`).
  ([#4](https://github.com/aksie/ducttape-to-coo/pull/4))

## 2026-07-25

- **Archive test-session state instead of deleting it.** Documents renaming
  `company-state.md` to a dated archive rather than deleting it after a
  test session, and gitignores the archive pattern.
  ([#3](https://github.com/aksie/ducttape-to-coo/pull/3))
- **Add maintainer test-case markers.** `new user test case` and
  `one week after start test case` — the skill can now be tested directly
  in this repo checkout, no clone/copy/cleanup needed between runs.
  ([#2](https://github.com/aksie/ducttape-to-coo/pull/2))
- **Add scope boundary and drift detection.** The skill now flags when a
  conversation moves outside what the wiki covers — both per-message and
  via a check for gradual drift across a longer conversation.
  ([#1](https://github.com/aksie/ducttape-to-coo/pull/1))
