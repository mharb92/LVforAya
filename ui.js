window.LingoUI = (function () {
  const LESSON_KEYS = ["lesson04", "lesson05", "lesson06", "lesson07", "lesson08", "lesson09", "lesson10"];
  const QUIZ_SIZE = 20;

  let view; // #view container, set on init
  let statsBar;

  function getAllLessons() {
    return LESSON_KEYS.map(function (k) { return window.LingoData[k]; })
      .filter(Boolean)
      .sort(function (a, b) { return a.id - b.id; });
  }

  // Items carry lesson tier/title attached (not mutating the shared data module
  // objects) because srs.js's weight formula and the mixed-quiz view both need it.
  function getAllItemsFlat(lessons) {
    const out = [];
    lessons.forEach(function (lesson) {
      lesson.items.forEach(function (item) {
        out.push(Object.assign({}, item, { tier: lesson.tier, lessonTitle: lesson.title }));
      });
    });
    return out;
  }

  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = a[i]; a[i] = a[j]; a[j] = tmp;
    }
    return a;
  }

  function escapeHtml(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  // English-side judging (direction "ar->en"). CONTRACT.md scopes LingoMatcher to
  // romanization only, so translation-direction answers get their own light,
  // punctuation/parenthetical-tolerant compare here rather than in matcher.js.
  function normalizeEnglish(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/\([^)]*\)/g, "")
      .replace(/^to\s+/, "")
      .replace(/[^a-z0-9\s]/g, "")
      .replace(/\s+/g, " ")
      .trim();
  }

  function levenshtein(a, b) {
    const m = a.length, n = b.length;
    if (m === 0) return n;
    if (n === 0) return m;
    const dp = new Array(n + 1);
    for (let j = 0; j <= n; j++) dp[j] = j;
    for (let i = 1; i <= m; i++) {
      let prev = dp[0];
      dp[0] = i;
      for (let j = 1; j <= n; j++) {
        const tmp = dp[j];
        dp[j] = Math.min(dp[j] + 1, dp[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
        prev = tmp;
      }
    }
    return dp[n];
  }

  function judgeEnglish(userInput, item) {
    const userNorm = normalizeEnglish(userInput);
    // "/" is the data's alternate-gloss separator (e.g. "nice/pretty"). Commas are
    // ambiguous — used both as alternate separators ("nice, handsome") and as real
    // punctuation inside full sentence glosses ("no, I am sad") — so only split on
    // comma for non-sentence items, where every comma is a for-sure gloss separator.
    const slashParts = String(item.english || "").split("/");
    const rawParts = item.type === "sentence" ? slashParts : slashParts.flatMap(function (p) { return p.split(","); });
    const alternates = [normalizeEnglish(item.english)].concat(rawParts.map(normalizeEnglish)).filter(Boolean);
    let matched = null;
    for (const alt of alternates) {
      if (alt === userNorm) { matched = alt; break; }
      const threshold = alt.length <= 4 ? 0 : (alt.length <= 8 ? 1 : 2);
      if (levenshtein(userNorm, alt) <= threshold) { matched = alt; break; }
    }
    return {
      correct: !!matched,
      matchedAgainst: matched,
      canonicalRomanization: item.romanization,
      arabic: item.arabic
    };
  }

  function resolveDirection(item) {
    if (item.direction === "both") return Math.random() < 0.5 ? "en->ar" : "ar->en";
    return item.direction;
  }

  function itemsForIds(lesson, ids) {
    const set = new Set(ids);
    return lesson.items.filter(function (it) { return set.has(it.id); });
  }

  // --- rendering ---------------------------------------------------------

  function renderStats() {
    const lessons = getAllLessons();
    const items = getAllItemsFlat(lessons);
    const s = window.LingoSRS.stats(items);
    statsBar.innerHTML =
      '<span>' + s.seen + '/' + s.total + ' items studied</span>' +
      '<span>' + s.mastered + ' mastered</span>' +
      '<span>' + s.struggling + ' need work</span>';
  }

  function renderHome() {
    renderStats();
    const lessons = getAllLessons();
    const cards = lessons.map(function (l) {
      return '<div class="lesson-card" data-lesson-id="' + l.id + '">' +
        '<div class="lesson-num">Lesson ' + l.id + '</div>' +
        '<div class="lesson-title">' + escapeHtml(l.title) + '</div>' +
        '<div class="lesson-meta">' + l.items.length + ' items' + (l.dialogues.length ? ' &middot; ' + l.dialogues.length + ' dialogues' : '') + '</div>' +
        '<div class="lesson-actions">' +
        '<button class="btn" data-action="study" data-lesson-id="' + l.id + '">Study</button>' +
        '<button class="btn" data-action="drill" data-lesson-id="' + l.id + '">Drill</button>' +
        '</div></div>';
    }).join("");

    view.innerHTML =
      '<div class="quiz-cta">' +
      '<button class="btn btn-primary btn-big" id="start-quiz">Start Mixed Quiz (SRS-weighted)</button>' +
      '</div>' +
      '<div class="lesson-grid">' + cards + '</div>';

    view.querySelectorAll("[data-action]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        const lessonId = Number(btn.getAttribute("data-lesson-id"));
        const lesson = getAllLessons().find(function (l) { return l.id === lessonId; });
        if (btn.getAttribute("data-action") === "study") startStudy(lesson);
        else startDrillSession(lesson.items, "Lesson " + lesson.id + " Drill", renderHome);
      });
    });

    document.getElementById("start-quiz").addEventListener("click", startQuiz);
  }

  function startStudy(lesson) {
    if (!lesson.dialogues.length) {
      startDrillSession(lesson.items, "Lesson " + lesson.id + " Drill", renderHome);
      return;
    }
    renderDialogueViewer(lesson, 0);
  }

  function renderDialogueViewer(lesson, index) {
    const dlg = lesson.dialogues[index];
    const lines = dlg.lines.map(function (line) {
      return '<div class="dlg-line">' +
        '<span class="dlg-speaker">' + escapeHtml(line.speaker) + ':</span> ' +
        '<span class="dlg-arabic">' + escapeHtml(line.arabic) + '</span> ' +
        '<span class="dlg-roman">(' + escapeHtml(line.romanization) + ')</span>' +
        '<button class="btn-icon speak-btn" data-text="' + escapeHtml(line.arabic) + '">&#128266;</button>' +
        '<div class="dlg-english">' + escapeHtml(line.english) + '</div>' +
        '</div>';
    }).join("");

    const isLast = index === lesson.dialogues.length - 1;

    view.innerHTML =
      '<div class="session-header">Lesson ' + lesson.id + ' &mdash; Dialogue ' + (index + 1) + ' of ' + lesson.dialogues.length + '</div>' +
      '<div class="dialogue-card">' + lines + '</div>' +
      '<div class="session-actions">' +
      (isLast
        ? '<button class="btn btn-primary" id="drill-related">Drill this lesson</button>'
        : '<button class="btn btn-primary" id="next-dlg">Next dialogue</button>') +
      '<button class="btn" id="back-home">Back</button>' +
      '</div>';

    view.querySelectorAll(".speak-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { window.LingoAudio.speak(btn.getAttribute("data-text")); });
    });
    document.getElementById("back-home").addEventListener("click", renderHome);
    const nextBtn = document.getElementById("next-dlg");
    if (nextBtn) nextBtn.addEventListener("click", function () { renderDialogueViewer(lesson, index + 1); });
    const drillBtn = document.getElementById("drill-related");
    if (drillBtn) drillBtn.addEventListener("click", function () {
      const allRelatedIds = lesson.dialogues.reduce(function (acc, d) { return acc.concat(d.relatedItemIds); }, []);
      const uniqueIds = Array.from(new Set(allRelatedIds));
      const related = itemsForIds(lesson, uniqueIds);
      const rest = lesson.items.filter(function (it) { return uniqueIds.indexOf(it.id) === -1; });
      startDrillSession(related.concat(rest), "Lesson " + lesson.id + " Study Drill", renderHome);
    });
  }

  function startQuiz() {
    const lessons = getAllLessons();
    const items = getAllItemsFlat(lessons);
    const due = window.LingoSRS.getDueQueue(items);
    const pool = due.length ? due : shuffle(items);
    startDrillSession(pool.slice(0, QUIZ_SIZE), "Mixed Quiz", renderHome, true);
  }

  // Generic drill/quiz runner. `mixed` controls whether each question shows its
  // source lesson (quiz mode mixes lessons; single-lesson drills don't need it).
  function startDrillSession(items, title, onExit, mixed) {
    const questions = shuffle(items).map(function (item) {
      return { item: item, direction: resolveDirection(item) };
    });
    runQuestion(questions, 0, { correct: 0, total: questions.length }, title, onExit, mixed);
  }

  function runQuestion(questions, idx, tally, title, onExit, mixed) {
    if (idx >= questions.length) {
      renderSessionSummary(tally, title, onExit);
      return;
    }
    const q = questions[idx];
    const item = q.item;
    const askingArabic = q.direction === "en->ar"; // prompt English, expect Arabic/romanization

    const promptHtml = askingArabic
      ? '<div class="prompt-label">Translate to Arabic (romanization):</div><div class="prompt-main">' + escapeHtml(item.english) + '</div>'
      : '<div class="prompt-label">What does this mean?</div>' +
        '<div class="prompt-main">' + escapeHtml(item.arabic) + '</div>' +
        '<button class="btn-icon speak-btn" data-text="' + escapeHtml(item.arabic) + '">&#128266;</button>';

    view.innerHTML =
      '<div class="session-header">' + escapeHtml(title) + ' &mdash; ' + (idx + 1) + '/' + questions.length +
      (mixed ? '<span class="lesson-tag">' + escapeHtml(item.lessonTitle) + '</span>' : '') + '</div>' +
      '<div class="question-card">' + promptHtml +
      '<form id="answer-form" autocomplete="off">' +
      '<input type="text" id="answer-input" placeholder="Type your answer&hellip;" autofocus />' +
      '<button type="submit" class="btn btn-primary">Check</button>' +
      '</form>' +
      '<div id="feedback"></div>' +
      '</div>' +
      '<div class="session-actions"><button class="btn" id="quit-session">Quit</button></div>';

    view.querySelectorAll(".speak-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { window.LingoAudio.speak(btn.getAttribute("data-text")); });
    });
    document.getElementById("quit-session").addEventListener("click", function () { onExit(); });
    document.getElementById("answer-input").focus();

    document.getElementById("answer-form").addEventListener("submit", function (e) {
      e.preventDefault();
      const input = document.getElementById("answer-input");
      const userAnswer = input.value;
      if (!userAnswer.trim()) return;

      const verdict = askingArabic
        ? window.LingoMatcher.judge(userAnswer, item)
        : judgeEnglish(userAnswer, item);

      window.LingoSRS.recordResult(item.id, verdict.correct);
      if (verdict.correct) tally.correct += 1;

      input.disabled = true;
      document.querySelector("#answer-form button").disabled = true;

      const feedback = document.getElementById("feedback");
      feedback.className = verdict.correct ? "feedback correct" : "feedback incorrect";
      feedback.innerHTML =
        '<div class="feedback-verdict">' + (verdict.correct ? "Correct!" : "Not quite.") + '</div>' +
        (askingArabic
          ? '<div class="feedback-answer">' + escapeHtml(verdict.canonicalRomanization) + ' &mdash; ' + escapeHtml(verdict.arabic) + '</div>' +
            (item.altRomanizations && item.altRomanizations.length ? '<div class="feedback-alt">Also accepted: ' + escapeHtml(item.altRomanizations.join(", ")) + '</div>' : '')
          : '<div class="feedback-answer">' + escapeHtml(item.english) + '</div>') +
        (item.grammarNote ? '<div class="feedback-grammar">' + escapeHtml(item.grammarNote) + '</div>' : '') +
        '<button class="btn btn-primary" id="next-q">Next</button>';

      document.getElementById("next-q").addEventListener("click", function () {
        runQuestion(questions, idx + 1, tally, title, onExit, mixed);
      });
    });
  }

  function renderSessionSummary(tally, title, onExit) {
    const pct = tally.total ? Math.round((tally.correct / tally.total) * 100) : 0;
    view.innerHTML =
      '<div class="summary-card">' +
      '<div class="summary-title">' + escapeHtml(title) + ' complete</div>' +
      '<div class="summary-score">' + tally.correct + ' / ' + tally.total + ' (' + pct + '%)</div>' +
      '<button class="btn btn-primary" id="summary-home">Back to lessons</button>' +
      '</div>';
    document.getElementById("summary-home").addEventListener("click", onExit);
  }

  function init() {
    view = document.getElementById("view");
    statsBar = document.getElementById("stats-bar");
    renderHome();
  }

  return { init: init };
})();
