window.LingoMatcher = (function () {
  // Vowel-equivalence groups: Levantine romanization varies a lot on short vowels
  // (kifak/kifek, shuuz/shooz) — fold each group to one representative letter for
  // the loose comparison pass. "3" and "7" are phonemic markers, never folded.
  const VOWEL_FOLD = { a: "a", e: "a", i: "o", o: "o", u: "o" };

  function stripAndLower(s) {
    return String(s || "")
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, ""); // strip latin diacritics if any slip in
  }

  // Removes everything except letters and the 3/7 phonemic digits; drops spaces,
  // punctuation, hyphens, apostrophes (glottal-stop marker) and stray "2"s (a glottal
  // marker some learners still type out of habit — see CONTRACT.md numeral rule).
  function basicNormalize(s) {
    return stripAndLower(s)
      .replace(/[^a-z37]/g, "");
  }

  // Collapses runs of the same letter to one (elongated vowels: kiifak -> kifak,
  // shuuz -> shuz). Left as a separate step so strict mode can skip it if ever needed.
  function collapseRuns(s) {
    return s.replace(/([a-z])\1+/g, "$1");
  }

  function foldVowels(s) {
    let out = "";
    for (let i = 0; i < s.length; i++) {
      const c = s[i];
      out += VOWEL_FOLD[c] || c;
    }
    return out;
  }

  function normalizeStrict(s) {
    return collapseRuns(basicNormalize(s));
  }

  function normalizeLoose(s) {
    return foldVowels(normalizeStrict(s));
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
        dp[j] = Math.min(
          dp[j] + 1,
          dp[j - 1] + 1,
          prev + (a[i - 1] === b[j - 1] ? 0 : 1)
        );
        prev = tmp;
      }
    }
    return dp[n];
  }

  function editThreshold(len) {
    if (len <= 3) return 0;
    if (len <= 6) return 1;
    return 2;
  }

  // Returns true if userNorm matches targetNorm within a length-scaled edit distance.
  function fuzzyEquals(userNorm, targetNorm) {
    if (userNorm === targetNorm) return true;
    const threshold = editThreshold(Math.max(userNorm.length, targetNorm.length));
    if (threshold === 0) return false;
    return levenshtein(userNorm, targetNorm) <= threshold;
  }

  function candidates(item) {
    const list = [item.romanization].concat(item.altRomanizations || []);
    return list.filter(Boolean);
  }

  function judge(userInput, item) {
    const userStrict = normalizeStrict(userInput);
    const userLoose = normalizeLoose(userInput);
    const opts = candidates(item);

    let matched = null;

    // Pass 1: strict (case/punctuation/elongation-insensitive, exact letters otherwise)
    for (const cand of opts) {
      if (normalizeStrict(cand) === userStrict) {
        matched = cand;
        break;
      }
    }

    // Pass 2: loose (+ vowel folding + small edit-distance tolerance)
    if (!matched) {
      for (const cand of opts) {
        const candLoose = normalizeLoose(cand);
        if (fuzzyEquals(userLoose, candLoose)) {
          matched = cand;
          break;
        }
      }
    }

    return {
      correct: !!matched,
      matchedAgainst: matched,
      canonicalRomanization: item.romanization,
      arabic: item.arabic
    };
  }

  return {
    judge: judge,
    // exposed for testing/debugging
    _normalizeStrict: normalizeStrict,
    _normalizeLoose: normalizeLoose,
    _levenshtein: levenshtein
  };
})();
