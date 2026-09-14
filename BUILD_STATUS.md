# Build Status — Lingua Verna App

Live tracker. Update this file (don't just report in chat) whenever a piece finishes,
so progress survives context resets / new sessions. Contract lives in CONTRACT.md.

## Phase 1 — Content extraction (PDF -> markdown)
- [x] Lesson 4 (Week 4) -> extracted/lesson-04-week4.md
- [x] Lesson 5 (Week 5) -> extracted/lesson-05-week5.md
- [x] Lesson 6 (Week 6) -> extracted/lesson-06-week6.md
- [x] Lesson 7 (Week 7) -> extracted/lesson-07-week7.md
- [x] Lesson 8 (Week 8) -> extracted/lesson-08-week8.md
- [x] Lesson 9 (Week 9) -> extracted/lesson-09-week9.md
- [x] Lesson 10 (Week 10) -> extracted/lesson-10-week10.md

**Phase 1 complete.**

## Phase 2 — Contract
- [x] CONTRACT.md written (lesson/item/dialogue shapes, module signatures)

## Phase 3 — Lesson data conversion (markdown -> JS, per CONTRACT.md schema)
- [x] Lesson 4 -> js/data/lesson-04.js (114 items: 21v/38p/8g/47s, dialogues: []; note: 47 reading-exercise sentence items set direction:"ar->en" since English was reconstructed, not sourced)
- [x] Lesson 5 -> js/data/lesson-05.js (75 items: 28v/33p/14s, 0 grammar/0 dialogues — grammar folded into vocab grammarNotes; verified on disk)
- [x] Lesson 6 -> js/data/lesson-06.js (94 items: 25v/20g/23p/26s, dialogues: []; verified on disk — Bonus Exercise N/S paragraphs decomposed into 12 per-sentence items)

**Phase 3 complete. All 7 lesson data files verified on disk against CONTRACT.md.**
- [x] Lesson 7 -> js/data/lesson-07.js (71 items: 21v/29p/14g/7s, dialogues: [])
- [x] Lesson 8 -> js/data/lesson-08.js (84 items: 22v/2p/15g/45s, dialogues: []; verified on disk after fix — adjective agreement split into 12 individual per-form grammar items instead of 4 combined strings)
- [x] Lesson 9 -> js/data/lesson-09.js (93 items: 31v/17g/10p/35s + 4 dialogues; verified on disk — Southern fi-/humme/í7na canonical, dedup'd cheatsheet/phrase-table overlap without dropping distinct content)
- [x] Lesson 10 -> js/data/lesson-10.js (123 items: 26v/13g/50p/34s + 4 dialogues; note: Dad/Brother exception has a 3rd dialect tier, Lebanese, distinct from North — South canonical, Lebanese+North in altRomanizations)

(Plan: 7 parallel agents, one per lesson, each converting its own extracted/*.md
into a single JS module conforming exactly to CONTRACT.md's Lesson/Item/Dialogue shape.
Independent — no shared state between them.)

## Phase 4 — Core logic modules (built directly, not agent-split — tightly coupled, kept in one hand for contract consistency)
- [x] SRS module (js/srs.js) — Leitner boxes 1-6 w/ increasing localStorage-backed intervals, weight = wrongCount*2 + tier bonus + hours-overdue bonus, per CONTRACT.md
- [x] Fuzzy-matching module (js/matcher.js) — strict pass (case/punct/elongation-insensitive) then loose pass (vowel-folding + length-scaled Levenshtein), checks romanization + altRomanizations
- [x] Audio module (js/audio.js) — SpeechSynthesis wrapper, ar-* voice preference, feature-detected no-op fallback
- [x] UI module (js/ui.js + index.html) — home/lesson-grid, dialogue viewer (CI before drill for 9-10), drill/quiz runner, English-side judging (judgeEnglish, separate from matcher.js which is romanization-only per contract)

## Phase 5 — Integration & test
- [x] Wired all modules + all 7 lesson data files into index.html (vanilla script tags, no build step)
- [x] Automated test (jsdom, driving the real index.html via `JSDOM.fromURL` against a local http server, not just unit-testing modules in isolation):
  - Study mode: lesson 9 shows all dialogues (CI) before "Drill this lesson" appears
  - Drill mode: lessons 4-8, answered 5 live questions with canonical answers, all judged correct
  - Quiz mode: mixed-lesson quiz starts, shows per-question lesson tag
  - Fuzzy matching: accepted a real Northern altRomanization (l7-v-001 "ghírfe") against Southern-canonical item
  - SRS: after one wrong + one right result, only the wrong item remained in the due queue (deferred correct item excluded)
- [x] Playwright MCP tool was broken in this environment (unrelated auth/config error: "Incompatible auth server: does not support dynamic client registration") — could not drive a real Chrome instance via that tool. Opened the app in actual Google Chrome via `open -a "Google Chrome"` for manual visual confirmation, and used jsdom loading the real served index.html (not a mock) for the automated interaction test above.
- [x] Bug found & fixed during testing: `judgeEnglish` in js/ui.js originally split English glosses on both "/" and "," to support alternate answers (e.g. "nice/pretty"), but full sentence-type items also use commas as real punctuation (e.g. "Do you have a dog? Yes, I have a dog, and I have a cat."), which fragmented the correct answer and caused false negatives. Fixed: only split on "," for non-sentence items; sentence items only split on "/", plus the untouched full string is always included as a candidate. Re-ran the test suite after the fix — all pass.

**Phases 4 and 5 complete. App is fully built, wired, and smoke-tested against a live server.**

## Next action
None outstanding from the original build plan. Optional open item: confirm with user whether Lesson 4's 47 reconstructed Reading Exercise items should be direction "both" instead of "ar->en" (currently left as-is, non-blocking).
