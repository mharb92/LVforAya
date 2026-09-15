window.LingoAudio = (function () {
  const supported = typeof window !== "undefined" && "speechSynthesis" in window;

  // Arabic voices are rarely installed for Levantine specifically; ar-* is the
  // closest browsers offer. Falls back to whatever default voice exists so
  // playback never hard-fails on machines without an Arabic voice pack.
  function pickVoice() {
    if (!supported) return null;
    const voices = window.speechSynthesis.getVoices();
    return voices.find(function (v) { return /^ar/i.test(v.lang); }) || null;
  }

  function speak(text) {
    if (!supported || !text) return false;
    try {
      window.speechSynthesis.cancel(); // don't stack utterances on rapid clicks
      const utter = new SpeechSynthesisUtterance(text);
      const voice = pickVoice();
      if (voice) {
        utter.voice = voice;
        utter.lang = voice.lang;
      } else {
        utter.lang = "ar";
      }
      utter.rate = 0.85;
      window.speechSynthesis.speak(utter);
      return true;
    } catch (e) {
      return false;
    }
  }

  return {
    isSupported: supported,
    speak: speak
  };
})();
