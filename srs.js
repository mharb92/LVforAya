window.LingoSRS = (function () {
  const STORAGE_KEY = "lingoverna_srs_v1";

  const BOX_INTERVALS_MS = {
    1: 0,                     // always due
    2: 6 * 60 * 60 * 1000,    // 6h
    3: 24 * 60 * 60 * 1000,   // 1 day
    4: 3 * 24 * 60 * 60 * 1000,   // 3 days
    5: 7 * 24 * 60 * 60 * 1000,   // 7 days
    6: 14 * 24 * 60 * 60 * 1000   // 14 days
  };
  const MAX_BOX = 6;

  function loadAll() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function saveAll(state) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      // localStorage unavailable (e.g. private mode) — fail silently, session-only progress
    }
  }

  function getRecord(itemId) {
    const state = loadAll();
    return state[itemId] || null;
  }

  function recordResult(itemId, correct) {
    const state = loadAll();
    const now = Date.now();
    const existing = state[itemId] || {
      box: 1,
      dueAt: now,
      wrongCount: 0,
      correctStreak: 0,
      lastSeen: now
    };

    let box = existing.box;
    let wrongCount = existing.wrongCount;
    let correctStreak = existing.correctStreak;

    if (correct) {
      box = Math.min(MAX_BOX, box + 1);
      correctStreak += 1;
    } else {
      box = 1;
      wrongCount += 1;
      correctStreak = 0;
    }

    const record = {
      box,
      dueAt: now + BOX_INTERVALS_MS[box],
      wrongCount,
      correctStreak,
      lastSeen: now
    };

    state[itemId] = record;
    saveAll(state);
    return record;
  }

  function getDueQueue(allItems) {
    const state = loadAll();
    const now = Date.now();

    const scored = allItems.map(function (item) {
      const rec = state[item.id];
      const isNew = !rec;
      const dueAt = isNew ? now : rec.dueAt;
      const wrongCount = isNew ? 0 : rec.wrongCount;
      const isDue = dueAt <= now;

      const tierBonus = item.tier === "new" ? 3 : 0;
      const overdueMs = Math.max(0, now - dueAt);
      const overdueBonus = overdueMs / (60 * 60 * 1000); // +1 weight per hour overdue
      const weight = wrongCount * 2 + tierBonus + overdueBonus + (isNew ? 1 : 0);

      return { item: item, isDue: isDue, weight: weight };
    });

    return scored
      .filter(function (s) { return s.isDue; })
      .sort(function (a, b) { return b.weight - a.weight; })
      .map(function (s) { return s.item; });
  }

  function resetAll() {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      // ignore
    }
  }

  function stats(allItems) {
    const state = loadAll();
    let seen = 0, mastered = 0, struggling = 0;
    allItems.forEach(function (item) {
      const rec = state[item.id];
      if (!rec) return;
      seen += 1;
      if (rec.box >= MAX_BOX) mastered += 1;
      if (rec.wrongCount >= 2) struggling += 1;
    });
    return { total: allItems.length, seen: seen, mastered: mastered, struggling: struggling };
  }

  return {
    recordResult: recordResult,
    getDueQueue: getDueQueue,
    getRecord: getRecord,
    resetAll: resetAll,
    stats: stats
  };
})();
