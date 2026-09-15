window.LingoData = window.LingoData || {};
window.LingoData.lesson05 = {
  id: 5,
  title: "Singular Pronouns & Describing People; Exchanging Pleasantries",
  tier: "reinforcement",
  sections: [
    { heading: "Vocab — Yes/No", note: "'aa' (Southern) is canonical for 'yes'; 'ee' (Northern, spelled اي) is the accepted alternate. 'no' normalized from source spelling 'la2' to 'la'' per project's 3/7-only numeral convention (apostrophe respelling, matching Week 4 precedent); 'laa' and 'la' are spelling variants seen in the source cheatsheet." },
    { heading: "Vocab — Pronouns", note: "'huwwa' (Southern) is canonical for 'he'; 'huwwe' is the Northern alternate; 'huuwa' is a spelling variant seen in the source cheatsheet. Phrase/sentence items below preserve whichever spelling the source used verbatim rather than forcing canonical form." },
    { heading: "Vocab — Person", note: "" },
    { heading: "Vocab — Describing People (Adjectives)", note: "Gendered adjective pairs; feminine typically adds -a/ة. 'mnii7/mnii7a' (good) has 'kwayyes/kwayse' as a Southern-dialect alternate, per source's explicit note." },
    { heading: "Example Phrases — Happy or Sad", note: "" },
    { heading: "Example Phrases — Describing People (Lesson 1)", note: "" },
    { heading: "Example Sentence Cheatsheet — Lesson 1", note: "Source gives romanization/English only for cheatsheet lines (no Arabic script); Arabic reconstructed here from the corresponding vocab/phrase entries above. Cheatsheet item 4 in 'Describing People' has an English gloss ('blue t-shirt') that conflicts with its own Arabic/romanization (khaDra = green) — recorded verbatim per source, not corrected, flagged as a likely source typo." },
    { heading: "Vocab — Structure", note: "'and' (و) is 'u-' before consonant-initial words, contracting to 'w-' before vowel-initial words like íl- (the); both forms stored as one vocab item." },
    { heading: "Vocab — Adjectives", note: "" },
    { heading: "Vocab — Participles", note: "Source used '2' for the glottal-stop qaf sound (2aa3ed, 2aa3de, waa2ef, waa2fe); respelled here with apostrophe (') per project's 3/7-only numeral convention, matching Week 4 precedent." },
    { heading: "Example Phrases — Using 'And'", note: "" },
    { heading: "Example Phrases — Describing People (Lesson 2)", note: "" },
    { heading: "Example Sentence Cheatsheet — Lesson 2", note: "Arabic reconstructed from corresponding vocab/phrase entries, same as Lesson 1 cheatsheet above." },
    { heading: "Conversation — Exchanging Pleasantries", note: "Gendered rows (e.g. kiifak/kiifek) split into separate masculine/feminine items, matching Week 4's convention. 'íl-7amdílla' (praise be to god) appears as its own row in two distinct response structures in the source (Response 1 and Response 2) and is captured as two separate items accordingly." },
    { heading: "Group Exercise", note: "New vocab word 'aw' (or) captured as its own item. The exercise's visual prompt sets and instruction bullets have no text pairs in the source (images only, for open-ended in-class production) and produce no drillable Items. 'Upset' appears as an adjective prompt in the exercise but has no dedicated vocab card in this lesson; per source's own extraction note it is treated as reinforcement of za3laan/za3laane (sad) rather than a new vocab item." }
  ],
  items: [
    // Vocab — Yes/No
    { id: "l5-v-001", lessonId: 5, type: "vocab", arabic: "اه", romanization: "aa", altRomanizations: ["ee"], english: "yes", direction: "both", grammarNote: "'aa' (Southern) is canonical for 'yes'; 'ee' (Northern, spelled اي) is the accepted alternate." },
    { id: "l5-v-002", lessonId: 5, type: "vocab", arabic: "الاء", romanization: "la'", altRomanizations: ["laa", "la"], english: "no", direction: "both", grammarNote: "Normalized from source spelling 'la2' per project's 3/7-only numeral convention (apostrophe respelling); 'laa' and 'la' are spelling variants seen in the source cheatsheet." },

    // Vocab — Pronouns
    { id: "l5-v-003", lessonId: 5, type: "vocab", arabic: "أنا", romanization: "ana", altRomanizations: [], english: "I", direction: "both", grammarNote: null },
    { id: "l5-v-004", lessonId: 5, type: "vocab", arabic: "إنت", romanization: "ínta", altRomanizations: [], english: "you (m)", direction: "both", grammarNote: null },
    { id: "l5-v-005", lessonId: 5, type: "vocab", arabic: "إنتي", romanization: "ínti", altRomanizations: [], english: "you (f)", direction: "both", grammarNote: null },
    { id: "l5-v-006", lessonId: 5, type: "vocab", arabic: "هُوّ", romanization: "huwwa", altRomanizations: ["huwwe", "huuwa"], english: "he", direction: "both", grammarNote: "'huwwa' (Southern) is canonical; 'huwwe' is the Northern alternate; 'huuwa' is a spelling variant seen in the source cheatsheet." },
    { id: "l5-v-007", lessonId: 5, type: "vocab", arabic: "هِيّ", romanization: "hiyye", altRomanizations: [], english: "she", direction: "both", grammarNote: null },

    // Vocab — Person
    { id: "l5-v-008", lessonId: 5, type: "vocab", arabic: "الَّشّب", romanization: "ísh-shabb", altRomanizations: [], english: "young man", direction: "both", grammarNote: "Sun-letter assimilation: íl- + shabb → ísh-shabb (ش is a sun letter)." },

    // Vocab — Describing People (Adjectives)
    { id: "l5-v-009", lessonId: 5, type: "vocab", arabic: "مَبْسُوط", romanization: "mabsuuT", altRomanizations: [], english: "happy (m)", direction: "both", grammarNote: "Adjectives agree in gender with the noun they describe; feminine typically adds -a/ة." },
    { id: "l5-v-010", lessonId: 5, type: "vocab", arabic: "مَبْسُوَطة", romanization: "mabsuuTa", altRomanizations: [], english: "happy (f)", direction: "both", grammarNote: null },
    { id: "l5-v-011", lessonId: 5, type: "vocab", arabic: "زَعْلان", romanization: "za3laan", altRomanizations: [], english: "sad (m)", direction: "both", grammarNote: null },
    { id: "l5-v-012", lessonId: 5, type: "vocab", arabic: "زَعْلانة", romanization: "za3laane", altRomanizations: [], english: "sad (f)", direction: "both", grammarNote: null },
    { id: "l5-v-013", lessonId: 5, type: "vocab", arabic: "مِنيح", romanization: "mnii7", altRomanizations: ["kwayyes"], english: "good (m)", direction: "both", grammarNote: "'kwayyes' (m) / 'kwayse' (f) is the Southern-dialect alternate for 'good'." },
    { id: "l5-v-014", lessonId: 5, type: "vocab", arabic: "مِنيَحة", romanization: "mnii7a", altRomanizations: ["kwayse"], english: "good (f)", direction: "both", grammarNote: null },
    { id: "l5-v-015", lessonId: 5, type: "vocab", arabic: "تَعْبان", romanization: "ta3baan", altRomanizations: [], english: "tired (m)", direction: "both", grammarNote: null },
    { id: "l5-v-016", lessonId: 5, type: "vocab", arabic: "تَعْبانة", romanization: "ta3baane", altRomanizations: [], english: "tired (f)", direction: "both", grammarNote: null },

    // Vocab — Structure
    { id: "l5-v-017", lessonId: 5, type: "vocab", arabic: "في", romanization: "fii", altRomanizations: [], english: "there is", direction: "both", grammarNote: null },
    { id: "l5-v-018", lessonId: 5, type: "vocab", arabic: "و", romanization: "u-", altRomanizations: ["w-"], english: "and", direction: "both", grammarNote: "'u-' is used before consonant-initial words; contracts to 'w-' before vowel-initial words like íl- (the)." },
    { id: "l5-v-019", lessonId: 5, type: "vocab", arabic: "شو", romanization: "shu", altRomanizations: [], english: "what", direction: "both", grammarNote: null },

    // Vocab — Adjectives
    { id: "l5-v-020", lessonId: 5, type: "vocab", arabic: "حِلو", romanization: "7ílu", altRomanizations: [], english: "nice, handsome (m)", direction: "both", grammarNote: null },
    { id: "l5-v-021", lessonId: 5, type: "vocab", arabic: "حِلوة", romanization: "7ílwe", altRomanizations: [], english: "nice, pretty (f)", direction: "both", grammarNote: null },

    // Vocab — Participles
    { id: "l5-v-022", lessonId: 5, type: "vocab", arabic: "قاعِد", romanization: "'aa3ed", altRomanizations: [], english: "sitting (m)", direction: "both", grammarNote: "Normalized from source spelling '2aa3ed' per project's 3/7-only numeral convention (apostrophe respelling)." },
    { id: "l5-v-023", lessonId: 5, type: "vocab", arabic: "قاعْدة", romanization: "'aa3de", altRomanizations: [], english: "sitting (f)", direction: "both", grammarNote: null },
    { id: "l5-v-024", lessonId: 5, type: "vocab", arabic: "واقِف", romanization: "waa'ef", altRomanizations: [], english: "standing (m)", direction: "both", grammarNote: null },
    { id: "l5-v-025", lessonId: 5, type: "vocab", arabic: "واقْفة", romanization: "waa'fe", altRomanizations: [], english: "standing (f)", direction: "both", grammarNote: null },
    { id: "l5-v-026", lessonId: 5, type: "vocab", arabic: "شايِف", romanization: "shaayef", altRomanizations: [], english: "seeing (m)", direction: "both", grammarNote: null },
    { id: "l5-v-027", lessonId: 5, type: "vocab", arabic: "شايْفة", romanization: "shaayfe", altRomanizations: [], english: "seeing (f)", direction: "both", grammarNote: null },

    // Group Exercise — new vocab
    { id: "l5-v-028", lessonId: 5, type: "vocab", arabic: "أو", romanization: "aw", altRomanizations: [], english: "or", direction: "both", grammarNote: null },

    // Example Phrases — Happy or Sad
    { id: "l5-p-001", lessonId: 5, type: "phrase", arabic: "إنت مَبسُوط؟", romanization: "ínte mabsuuT?", altRomanizations: [], english: "are you (m) happy?", direction: "both", grammarNote: null },
    { id: "l5-p-002", lessonId: 5, type: "phrase", arabic: "إنت زَعلان؟", romanization: "ínte za3laan?", altRomanizations: [], english: "are you (m) sad?", direction: "both", grammarNote: null },
    { id: "l5-p-003", lessonId: 5, type: "phrase", arabic: "اي أنا مَبسُوط", romanization: "ee/aa ana mabsuuT", altRomanizations: [], english: "yes I am happy", direction: "both", grammarNote: null },
    { id: "l5-p-004", lessonId: 5, type: "phrase", arabic: "اه أنا زَعلان", romanization: "aa ana za3laan", altRomanizations: [], english: "yes I am sad", direction: "both", grammarNote: null },
    { id: "l5-p-005", lessonId: 5, type: "phrase", arabic: "إنتي مَبسُوَطة؟", romanization: "ínti mabsuuTa?", altRomanizations: [], english: "are you (f) happy?", direction: "both", grammarNote: null },
    { id: "l5-p-006", lessonId: 5, type: "phrase", arabic: "إنتي زَعلانة؟", romanization: "ínti za3laane?", altRomanizations: [], english: "are you (f) sad?", direction: "both", grammarNote: null },
    { id: "l5-p-007", lessonId: 5, type: "phrase", arabic: "لاء أنا زَعلانة", romanization: "la' ana za3laane", altRomanizations: [], english: "no, I am sad", direction: "both", grammarNote: null },
    { id: "l5-p-008", lessonId: 5, type: "phrase", arabic: "لاء أنا مَبسُوَطة", romanization: "la' ana mabsuuTa", altRomanizations: [], english: "no, I am happy", direction: "both", grammarNote: null },

    // Example Phrases — Describing People (Lesson 1)
    { id: "l5-p-009", lessonId: 5, type: "phrase", arabic: "المَرَة مَبسُوَطة، هِيّ لابسة كَنزة خَضرَة.", romanization: "íl-mara mabsuuTa, hiyye laabse kanze khaDra.", altRomanizations: [], english: "The woman is happy, she is wearing a green t-shirt.", direction: "both", grammarNote: null },
    { id: "l5-p-010", lessonId: 5, type: "phrase", arabic: "الَّشب زَعلان. هُوّ لابس كَنزة زَرقَة.", romanization: "ísh-shabb za3laan. huwwe laabís kanze zar'a.", altRomanizations: [], english: "The young man is sad. He is wearing a blue t-shirt.", direction: "both", grammarNote: null },
    { id: "l5-p-011", lessonId: 5, type: "phrase", arabic: "البِنت زَعلانة؟ لاء هِيّ مِنيَحة.", romanization: "íl-bínt za3laane? la', híyye mnii7a.", altRomanizations: [], english: "Is the girl sad? No, she is good.", direction: "both", grammarNote: null },
    { id: "l5-p-012", lessonId: 5, type: "phrase", arabic: "الَّشب التَّعبان لابس كَنزة خَضرَة.", romanization: "ísh-shabb ít-ta3baan laabís kanze khaDra.", altRomanizations: [], english: "The tired young man is wearing a green t-shirt.", direction: "both", grammarNote: null },
    { id: "l5-p-013", lessonId: 5, type: "phrase", arabic: "الوَلَد المَبسُوط لابس كَنزة صَفرَة.", romanization: "íl-walad íl-mabsuuT laabís kanze Safra.", altRomanizations: [], english: "The happy boy is wearing a yellow t-shirt.", direction: "both", grammarNote: null },

    // Example Phrases — Using "And"
    { id: "l5-p-014", lessonId: 5, type: "phrase", arabic: "فِستان وَبَنطَلون و كَنزة", romanization: "fístaan u-banTaloon u-kanze", altRomanizations: [], english: "a dress and pants and a t-shirt", direction: "both", grammarNote: null },
    { id: "l5-p-015", lessonId: 5, type: "phrase", arabic: "الِفستان والبَنطَلون والكَنزة", romanization: "íl-fístaan wíl-banTaloon wíl-kanze", altRomanizations: [], english: "the dress and the pants and the t-shirt", direction: "both", grammarNote: "'w-' contraction of 'and' before vowel-initial íl- (the)." },

    // Example Phrases — Describing People (Lesson 2)
    { id: "l5-p-016", lessonId: 5, type: "phrase", arabic: "في زَلَمة طَوِيل. هُوّ لابِس بلُوزة خَضرَة وبَنطَلون أحمَر.", romanization: "fii zalame Tawiil. huwwe laabís bluuze khaDra u-banTaloon a7mar.", altRomanizations: [], english: "There is a tall man. He is wearing a green t-shirt and red pants.", direction: "both", grammarNote: null },
    { id: "l5-p-017", lessonId: 5, type: "phrase", arabic: "في وَلَد قَصِير. هُوّ واقِف ولابِس كَنزة.", romanization: "fii walad 'aSiir. huwwe waa'ef u-laabís kanze.", altRomanizations: [], english: "There is a short boy. He is standing and wearing a t-shirt.", direction: "both", grammarNote: null },
    { id: "l5-p-018", lessonId: 5, type: "phrase", arabic: "أنا شايِف المَرَة. هِيّ تَعبانة وزَعلانة.", romanization: "ana shaayef íl-mara. híyye ta3baane u-za3laane.", altRomanizations: [], english: "I see the woman. She is tired and sad.", direction: "both", grammarNote: null },
    { id: "l5-p-019", lessonId: 5, type: "phrase", arabic: "أنا شايِف شَب زَعلان. هُوّ قاعِد ولابِس كَنزة حَمرَة.", romanization: "ana shaayef shab za3laan. huwwe 'aa3ed u-laabís kanze 7amra.", altRomanizations: [], english: "I see a sad guy. He is sitting and wearing a red t-shirt.", direction: "both", grammarNote: null },
    { id: "l5-p-020", lessonId: 5, type: "phrase", arabic: "أنا شايفة البِنْت. هِيّ لابسة فُستان أزرَق حِلو.", romanization: "ana shaayfe íl-bínt. híyye laabse fustaan azra' 7ílu.", altRomanizations: [], english: "I (f) see the girl. She is wearing a nice blue dress.", direction: "both", grammarNote: null },

    // Conversation — How Are You?
    { id: "l5-p-021", lessonId: 5, type: "phrase", arabic: "كيفَك", romanization: "kiifak", altRomanizations: [], english: "how are you? (m)", direction: "both", grammarNote: "Masculine 'you': -ak suffix." },
    { id: "l5-p-022", lessonId: 5, type: "phrase", arabic: "كيفِك", romanization: "kiifek", altRomanizations: [], english: "how are you? (f)", direction: "both", grammarNote: "Feminine 'you': -ek suffix." },

    // Conversation — Response 1
    { id: "l5-p-023", lessonId: 5, type: "phrase", arabic: "أنا مِنيح", romanization: "ana mnii7", altRomanizations: [], english: "I'm good (m)", direction: "both", grammarNote: null },
    { id: "l5-p-024", lessonId: 5, type: "phrase", arabic: "أنا مِنيَحَة", romanization: "ana mnii7a", altRomanizations: [], english: "I'm good (f)", direction: "both", grammarNote: null },
    { id: "l5-p-025", lessonId: 5, type: "phrase", arabic: "الحَمدِلله", romanization: "íl-7amdílla", altRomanizations: [], english: "praise be to god", direction: "both", grammarNote: null },
    { id: "l5-p-026", lessonId: 5, type: "phrase", arabic: "وإنت كيفَك؟", romanization: "u-ínta kiifak?", altRomanizations: [], english: "and how are you? (m)", direction: "both", grammarNote: null },
    { id: "l5-p-027", lessonId: 5, type: "phrase", arabic: "وإنتي كيفِك؟", romanization: "u-ínti kiifek?", altRomanizations: [], english: "and how are you? (f)", direction: "both", grammarNote: null },

    // Conversation — Response 2 (Simplified)
    { id: "l5-p-028", lessonId: 5, type: "phrase", arabic: "كِل شي مِنيح", romanization: "kíl shi mnii7", altRomanizations: [], english: "everything's good", direction: "both", grammarNote: "كِل (kíl) = 'all,' شي (shi) = 'thing' → كِل شي (kíl shi) = 'everything.'" },
    { id: "l5-p-029", lessonId: 5, type: "phrase", arabic: "الحَمدِلله", romanization: "íl-7amdílla", altRomanizations: [], english: "praise be to god", direction: "both", grammarNote: null },
    { id: "l5-p-030", lessonId: 5, type: "phrase", arabic: "وإنت؟", romanization: "u-ínta?", altRomanizations: [], english: "and you? (m)", direction: "both", grammarNote: null },
    { id: "l5-p-031", lessonId: 5, type: "phrase", arabic: "وإنتي؟", romanization: "u-ínti?", altRomanizations: [], english: "and you? (f)", direction: "both", grammarNote: null },

    // Conversation — Example Exchanges
    { id: "l5-p-032", lessonId: 5, type: "phrase", arabic: "كيفِك؟ – أنا مْنيحَة الحَمدِلله، وإنتي كيفِك؟", romanization: "kiifek? — ana mnii7a íl-7amdílla, u-ínti kiifek?", altRomanizations: [], english: "How are you (f)? — I'm good, praise be to god, and how are you (f)?", direction: "both", grammarNote: null },
    { id: "l5-p-033", lessonId: 5, type: "phrase", arabic: "كيفَك؟ – كِل شي كَوَّيس، وإنت؟", romanization: "kiifak? — kíl shi kwayyes, u-ínta?", altRomanizations: [], english: "How are you (m)? — Everything's good, and you (m)?", direction: "both", grammarNote: "'kwayyes' (Southern) here as the alternate for 'good' in place of 'mnii7'." },

    // Example Sentence Cheatsheet — Lesson 1 (Happy or Sad); Arabic reconstructed from vocab/phrase entries above, source gives romanization/English only
    { id: "l5-s-001", lessonId: 5, type: "sentence", arabic: "إنت مَبسُوط؟ اي، أنا مَبسُوط.", romanization: "ínte mabSuut? / ee, ana mabsuuT. (N)", altRomanizations: [], english: "Are you (m) happy? Yes, I am happy.", direction: "both", grammarNote: null },
    { id: "l5-s-002", lessonId: 5, type: "sentence", arabic: "إنت زَعلان؟ اه، أنا زَعلان.", romanization: "ínte za3laan? / aa, ana za3laan. (S)", altRomanizations: [], english: "Are you (m) sad? Yes, I am sad.", direction: "both", grammarNote: null },
    { id: "l5-s-003", lessonId: 5, type: "sentence", arabic: "إنتي مَبسُوَطة؟ لا، أنا زَعلانة.", romanization: "ínti mabsuuTa? / laa, ana za3laane.", altRomanizations: [], english: "Are you (f) happy? No, I am sad.", direction: "both", grammarNote: null },
    { id: "l5-s-004", lessonId: 5, type: "sentence", arabic: "إنتي زَعلانة؟ لا، أنا مَبسُوَطة.", romanization: "ínti za3laane? / laa, ana mabsuuTa.", altRomanizations: [], english: "Are you (f) sad? No, I am happy.", direction: "both", grammarNote: null },

    // Example Sentence Cheatsheet — Lesson 1 (Describing People)
    { id: "l5-s-005", lessonId: 5, type: "sentence", arabic: "المَرَة مَبسُوَطة. هِيّ لابسة كَنزة خَضرَة.", romanization: "íl-mara mabsuuTa. hiyye laabse kanze khaDra. (N)", altRomanizations: [], english: "The woman is happy, she is wearing a green t-shirt.", direction: "both", grammarNote: null },
    { id: "l5-s-006", lessonId: 5, type: "sentence", arabic: "الَّشب زَعلان. هُوّ لابِس بلُوزة زَرقَة.", romanization: "ísh-shabb za3laan. huwwa laabís bluuze zar'a. (S)", altRomanizations: [], english: "The guy is sad. He is wearing a blue t-shirt.", direction: "both", grammarNote: null },
    { id: "l5-s-007", lessonId: 5, type: "sentence", arabic: "البِنت زَعلانة؟ لا، هِيّ مِنيَحة.", romanization: "íl-bínt za3laane? la, híyye mnii7a. (N)", altRomanizations: [], english: "The girl is sad? No, she is good.", direction: "both", grammarNote: null },
    { id: "l5-s-008", lessonId: 5, type: "sentence", arabic: "الَّشب تَعبان. لابِس كَنزة خَضرَة.", romanization: "ísh-shabb ta3baan. laabís kanze khaDra. (N)", altRomanizations: [], english: "The tired guy is wearing a blue t-shirt.", direction: "both", grammarNote: "Source English gloss says 'blue t-shirt' but Arabic/romanization says khaDra = green — recorded verbatim per source, likely a source typo, not corrected." },
    { id: "l5-s-009", lessonId: 5, type: "sentence", arabic: "الوَلَد المَبسُوط لابِس كَنزة صَفرَة.", romanization: "íl-walad íl-mabsuuT laabes kanze Safra. (N)", altRomanizations: [], english: "The happy boy is wearing a yellow t-shirt.", direction: "both", grammarNote: null },

    // Example Sentence Cheatsheet — Lesson 2
    { id: "l5-s-010", lessonId: 5, type: "sentence", arabic: "في زَلَمة طَوِيل. هُوّ لابِس بلُوزة خَضرَة و بَنطَلون أحمَر.", romanization: "fii zalame Tawiil. huuwa laabes bluuze khaDra u banTaloon a7mar. (S)", altRomanizations: [], english: "There is a tall man. He is wearing a green t-shirt and a red pants.", direction: "both", grammarNote: null },
    { id: "l5-s-011", lessonId: 5, type: "sentence", arabic: "في وَلَد قَصِير. هُوّ واقِف و لابِس كَنزة.", romanization: "fii walad 'aSiir. huwwe waa'ef u laabes kanze. (N)", altRomanizations: [], english: "There is a short boy. He is standing and wearing a t-shirt.", direction: "both", grammarNote: null },
    { id: "l5-s-012", lessonId: 5, type: "sentence", arabic: "أنا شايِف المَرَة. هِيّ تَعبانة و زَعلانة.", romanization: "ana shaayef íl-mara. híyye ta3baane u za3laane.", altRomanizations: [], english: "I see the woman. She is tired and sad.", direction: "both", grammarNote: null },
    { id: "l5-s-013", lessonId: 5, type: "sentence", arabic: "أنا شايِف شَب زَعلان. هُوّ قاعِد و لابِس كَنزة حَمرَة.", romanization: "ana shaayef shab za3laan. huwwe 'aa3ed u laabes kanze 7amra. (N)", altRomanizations: [], english: "I see a sad guy. He is sitting and wearing a red t-shirt.", direction: "both", grammarNote: null },
    { id: "l5-s-014", lessonId: 5, type: "sentence", arabic: "أنا شايفة البِنْت. هِيّ لابسة فُستان أزرَق حِلو.", romanization: "ana shaayfe íl-bínt. híyye laabse fustaan azra' 7ílu. (S)", altRomanizations: [], english: "I (f) see the girl. she is wearing a blue nice dress.", direction: "both", grammarNote: null }
  ],
  dialogues: []
};
