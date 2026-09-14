# Module Contract — Lingua Verna App

This is the fixed interface every module builds against. Do not deviate without
updating this file first (and BUILD_STATUS.md).

## Lesson data shape (one object per lesson, array of 7)

```js
{
  id: 4,                      // = week number, 4-10
  title: "People & Adjectives; Colors & Clothes",
  tier: "reinforcement",      // "reinforcement" for 4-8, "new" for 9-10
  sections: [                 // human-readable grouping, mirrors extracted .md headers
    { heading: "Vocab — People & Adjectives", note: "" }
  ],
  items: [ /* Item[] — see below, ALL drillable content flattened here */ ],
  dialogues: [ /* Dialogue[] — see below, for comprehensible-input teaching in 9-10 */ ]
}
```

## Item (single drillable unit — vocab, phrase, or sentence)

```js
{
  id: "l4-v-001",             // unique, stable: l<lessonId>-<type letter>-<3digit idx>
  lessonId: 4,
  type: "vocab",              // "vocab" | "phrase" | "grammar" | "sentence"
  arabic: "طَوِيل",
  romanization: "Tawiil",     // CANONICAL — Southern form where N/S differ
  altRomanizations: [],       // accepted variants: Northern forms, spelling variants, etc.
  english: "tall",
  direction: "both",          // "en->ar" | "ar->en" | "both" — which direction it can be drilled
  grammarNote: null           // optional short string, for FonF call-outs (e.g. IDafa, "3ala" contraction)
}
```

Type letters for id generation: v=vocab, p=phrase, g=grammar-example, s=sentence (cheatsheet/dialogue line).

## Dialogue (for teaching new material in lessons 9-10 via comprehensible input)

```js
{
  id: "l9-d-001",
  lessonId: 9,
  lines: [
    { speaker: "A", arabic: "...", romanization: "...", english: "..." },
    { speaker: "B", arabic: "...", romanization: "...", english: "..." }
  ],
  relatedItemIds: ["l9-v-004", "l9-g-002"]  // items this dialogue introduces, for CI-before-drill sequencing
}
```

## Matching module — `judge(userInput: string, item: Item) -> Verdict`

```js
{
  correct: true,
  matchedAgainst: "Tawiil",   // which of romanization/altRomanizations it matched
  canonicalRomanization: "Tawiil",
  arabic: "طَوِيل"
}
```
Matching operates on romanization only (3/7-numeral system), case-insensitive, tolerant of
elongated vowels and common letter substitutions. Always returns canonical + arabic for feedback
display regardless of correct/incorrect.

## SRS module — localStorage-backed, keyed by item.id

```js
// stored per item id:
{ box: 1, dueAt: <timestamp>, wrongCount: 0, correctStreak: 0, lastSeen: <timestamp> }
```

`srs.recordResult(itemId, correct: boolean)` — updates box/dueAt per Leitner logic.
`srs.getDueQueue(allItems: Item[]) -> Item[]` — returns items due, sorted by priority weight:
  `weight = wrongCount*2 + (tier === "new" ? 3 : 0) + overdueBonus`

## UI module

Calls `judge()` for answer checking, `srs.recordResult()` after each answer,
`srs.getDueQueue()` to build quiz-mode queues. Study mode for lessons 9-10 shows
`dialogues` before drilling their `relatedItemIds`.

## Audio module

`speak(arabicOrRomanizationText: string)` — thin Web Speech API (SpeechSynthesis) wrapper,
feature-detected, no-op fallback if unsupported.
