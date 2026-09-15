window.LingoData = window.LingoData || {};
window.LingoData.lesson09 = {
  id: 9,
  title: "Plurals; Where Do You Live?",
  tier: "new",
  sections: [
    { heading: "Grammar — Plural Pronouns", note: "Introduces the three plural personal pronouns (humme/hínne \"they\", íntu \"you plural\", í7na/ní7na \"we\"), extending the singular pronoun set from Lesson 5 (ana, ínta/ínti, huwwe/hiyye)." },
    { heading: "Vocab — Plural Pronouns", note: "" },
    { heading: "Vocab — Plural Nouns", note: "" },
    { heading: "Vocab — Participles (new bases + reused)", note: "New masculine-singular bases (raaje3, Taale3, naayem) plus reused waaqef/qaa3ed from Lesson 5, drilled here in plural form." },
    { heading: "Grammar — Participle Agreement (Masculine/Feminine/Plural)", note: "Core new grammar point of this lesson: participles now show three-way agreement — masc base, fem = base+e, plural (m&f) = base+iin — extending the two-way m/f agreement taught previously." },
    { heading: "Grammar — Participle Conjugation Table", note: "Full masculine/feminine/plural conjugations for laabes (wearing), shaayef (seeing), raaye7 (going), jaay (coming)." },
    { heading: "Example Sentences — Plural Pronouns & Participles", note: "Combines the Example Phrases tables and the Example Sentence Cheatsheet for Lesson 1, which are identical in content — deduplicated into one set of sentence items." },
    { heading: "Grammar — Location & Living Sentences; fi-/bi- Southern Preference", note: "Subject + participle (3aayesh/saaken, agreeing m/f/pl) + preposition + place-name structure, optionally extended with mín (\"from\") and ma3 (\"with\"). Southern Levantine uses fi- instead of bi- for \"in/at\", generalizing the fíl-beet/bíl-beet pattern from Lesson 6 to all locative \"in ___\" constructions." },
    { heading: "Vocab — Countries, Places, Cities, Living, Family, Structure", note: "" },
    { heading: "Example Sentences — Living & Location", note: "Combines the Example Phrases tables and the Example Sentence Cheatsheet for Lesson 2 (which reuses Lesson 1's cheatsheet section headers verbatim as a copy-paste artifact but contains Lesson 2's living/location content) — deduplicated into one set of sentence items." },
    { heading: "Conversation Group — Location Sentence-Building, Additional Vocab, Possessive/Idafa Bonus", note: "Country > state > city sentence-building templates, the explicit fi-/bi- Southern rule, muqaaTa3a (province), and ahíl/idafa possessive constructions for family origin." },
    { heading: "Group Exercise", note: "Build-your-own-sentence framework: pick 1) a subject (pronoun: íntu/ní7na-í7na/humme-hínne), 2) an action (a participle from the action list), and 3) an optional bonus ending (e.g. a destination). Visual/icon-based prompts with no text answer key in the source — represented here descriptively rather than as drillable Items; all action-list participles already appear as vocab/grammar items above." }
  ],
  items: [
    // ---- Vocab: Plural Pronouns ----
    { id: "l9-v-001", lessonId: 9, type: "vocab", arabic: "هُمّ", romanization: "humme", altRomanizations: ["hínne"], english: "they", direction: "both", grammarNote: "Southern-canonical humme (هُمّ); Northern alternate hínne (هِنّ) is the same pronoun, per the project's Southern-primary rule." },
    { id: "l9-v-002", lessonId: 9, type: "vocab", arabic: "إنتو", romanization: "íntu", altRomanizations: [], english: "you (plural)", direction: "both", grammarNote: "Single form covers both genders; source gives no Northern/Southern split for this pronoun." },
    { id: "l9-v-003", lessonId: 9, type: "vocab", arabic: "إحنا", romanization: "í7na", altRomanizations: ["ní7na"], english: "we", direction: "both", grammarNote: "Southern-canonical í7na (إحنا); Northern alternate ní7na (نِحنا), per the project's Southern-primary rule." },

    // ---- Vocab: Plural Nouns ----
    { id: "l9-v-004", lessonId: 9, type: "vocab", arabic: "شَباب", romanization: "shabaab", altRomanizations: [], english: "guys", direction: "both", grammarNote: null },
    { id: "l9-v-005", lessonId: 9, type: "vocab", arabic: "ناس", romanization: "naas", altRomanizations: [], english: "people", direction: "both", grammarNote: null },
    { id: "l9-v-006", lessonId: 9, type: "vocab", arabic: "بَنات", romanization: "banaat", altRomanizations: [], english: "girls", direction: "both", grammarNote: null },
    { id: "l9-v-007", lessonId: 9, type: "vocab", arabic: "ولاد", romanization: "wlaad", altRomanizations: [], english: "kids, boys", direction: "both", grammarNote: null },

    // ---- Vocab: Participles (masculine-singular bases) ----
    { id: "l9-v-008", lessonId: 9, type: "vocab", arabic: "راجِع", romanization: "raaje3", altRomanizations: [], english: "coming back", direction: "both", grammarNote: "Masculine-singular base; plural form raaj3iin appears in this lesson's example sentences (no feminine-singular form given in source)." },
    { id: "l9-v-009", lessonId: 9, type: "vocab", arabic: "طالِع", romanization: "Taale3", altRomanizations: [], english: "going out", direction: "both", grammarNote: "Masculine-singular base; plural form Taal3iin appears in this lesson's example sentences (no feminine-singular form given in source)." },
    { id: "l9-v-010", lessonId: 9, type: "vocab", arabic: "نايِم", romanization: "naayem", altRomanizations: [], english: "sleeping", direction: "both", grammarNote: "Masculine-singular base; plural form naaymiin appears in this lesson's example sentences (no feminine-singular form given in source)." },
    { id: "l9-v-011", lessonId: 9, type: "vocab", arabic: "واقِف", romanization: "waaqef", altRomanizations: [], english: "standing", direction: "both", grammarNote: "Introduced in Lesson 5; reused and actively drilled here in plural form (waa2fiin)." },
    { id: "l9-v-012", lessonId: 9, type: "vocab", arabic: "قاعِد", romanization: "qaa3ed", altRomanizations: [], english: "sitting", direction: "both", grammarNote: "Introduced in Lesson 5; reused and actively drilled here in plural form (2aa3diin)." },

    // ---- Vocab: Countries ----
    { id: "l9-v-013", lessonId: 9, type: "vocab", arabic: "سُوزيَة", romanization: "suurya", altRomanizations: [], english: "Syria", direction: "both", grammarNote: "Source Arabic spelling سُوزيَة is an unusual rendering (standard spelling is سوريا/سوريّة) — likely a source spelling irregularity/OCR artifact. Romanization \"suurya\" from the source's own caption is kept as canonical since it's the only spelling given." },
    { id: "l9-v-014", lessonId: 9, type: "vocab", arabic: "أمريكا", romanization: "amriika", altRomanizations: [], english: "USA", direction: "both", grammarNote: null },
    { id: "l9-v-015", lessonId: 9, type: "vocab", arabic: "لِبنان", romanization: "líbnaan", altRomanizations: [], english: "Lebanon", direction: "both", grammarNote: null },
    { id: "l9-v-016", lessonId: 9, type: "vocab", arabic: "الإمارات", romanization: "íl-imaaraat", altRomanizations: [], english: "UAE", direction: "both", grammarNote: null },
    { id: "l9-v-017", lessonId: 9, type: "vocab", arabic: "فَلَسطِين", romanization: "falasTiin", altRomanizations: [], english: "Palestine", direction: "both", grammarNote: null },
    { id: "l9-v-018", lessonId: 9, type: "vocab", arabic: "الأردُن", romanization: "íl-urdun", altRomanizations: [], english: "Jordan", direction: "both", grammarNote: null },

    // ---- Vocab: Places ----
    { id: "l9-v-019", lessonId: 9, type: "vocab", arabic: "بَلَد", romanization: "balad", altRomanizations: [], english: "country", direction: "both", grammarNote: "Part of the location hierarchy taught this lesson: balad (country) > wilaaye (state) > madiine (city)." },
    { id: "l9-v-020", lessonId: 9, type: "vocab", arabic: "وِلاية", romanization: "wilaaye", altRomanizations: [], english: "state", direction: "both", grammarNote: null },
    { id: "l9-v-021", lessonId: 9, type: "vocab", arabic: "مَدينة", romanization: "madiine", altRomanizations: [], english: "city", direction: "both", grammarNote: null },

    // ---- Vocab: Cities ----
    { id: "l9-v-022", lessonId: 9, type: "vocab", arabic: "الشّام", romanization: "ísh-shaam", altRomanizations: [], english: "Damascus", direction: "both", grammarNote: null },
    { id: "l9-v-023", lessonId: 9, type: "vocab", arabic: "رام الله", romanization: "raam-allah", altRomanizations: [], english: "Ramallah", direction: "both", grammarNote: null },
    { id: "l9-v-024", lessonId: 9, type: "vocab", arabic: "بيرُوت", romanization: "bayruut", altRomanizations: [], english: "Beirut", direction: "both", grammarNote: null },

    // ---- Vocab: Living ----
    { id: "l9-v-025", lessonId: 9, type: "vocab", arabic: "ساكِن", romanization: "saaken", altRomanizations: [], english: "living (specific)", direction: "both", grammarNote: "Participle — agrees m/f/pl per this lesson's agreement pattern (e.g. plural saakniin), same as 3aayesh." },
    { id: "l9-v-026", lessonId: 9, type: "vocab", arabic: "عايِش", romanization: "3aayesh", altRomanizations: [], english: "living (general)", direction: "both", grammarNote: "Participle — agrees m/f/pl per this lesson's agreement pattern (e.g. plural 3aayshiin), same as saaken." },

    // ---- Vocab: Family ----
    { id: "l9-v-027", lessonId: 9, type: "vocab", arabic: "أهِل", romanization: "ahíl", altRomanizations: [], english: "parents", direction: "both", grammarNote: "Combines with a possessive suffix or a following noun to form idafa chains, e.g. ahli \"my parents\", ahíl marti \"my wife's parents\" — same idafa/possessive pattern taught with objects/animals in Lesson 6 and rooms/furniture in Lesson 7, now applied to family relations." },
    { id: "l9-v-028", lessonId: 9, type: "vocab", arabic: "عيلة", romanization: "3eele", altRomanizations: [], english: "family", direction: "both", grammarNote: null },

    // ---- Vocab: Structure ----
    { id: "l9-v-029", lessonId: 9, type: "vocab", arabic: "مَع", romanization: "ma3", altRomanizations: [], english: "with", direction: "both", grammarNote: null },
    { id: "l9-v-030", lessonId: 9, type: "vocab", arabic: "أيْ", romanization: "ay", altRomanizations: [], english: "which", direction: "both", grammarNote: null },

    // ---- Vocab: Conversation Group additional ----
    { id: "l9-v-031", lessonId: 9, type: "vocab", arabic: "مُقاظَعَة", romanization: "muqaaTa3a", altRomanizations: [], english: "province", direction: "both", grammarNote: "New term introduced only in the Conversation Group's Additional Vocab box (not the main Lesson 2 vocab box), alongside balad/wilaaye/madiine as an additional location term." },

    // ---- Grammar: Participle Conjugation Table (masc/fem/plural agreement) ----
    { id: "l9-g-001", lessonId: 9, type: "grammar", arabic: "لابِس", romanization: "laabes", altRomanizations: [], english: "wearing (m)", direction: "both", grammarNote: "Masculine-singular base form of the participle agreement pattern: masc = base, fem = base+e, plural (m&f) = base+iin." },
    { id: "l9-g-002", lessonId: 9, type: "grammar", arabic: "لابْسة", romanization: "laabse", altRomanizations: [], english: "wearing (f)", direction: "both", grammarNote: "Feminine-singular = masculine base + -e (laabes -> laabse)." },
    { id: "l9-g-003", lessonId: 9, type: "grammar", arabic: "لابْسِين", romanization: "laabsiin", altRomanizations: [], english: "wearing (plural)", direction: "both", grammarNote: "Plural (m & f) = masculine base + -iin (laabes -> laabsiin)." },
    { id: "l9-g-004", lessonId: 9, type: "grammar", arabic: "شايِف", romanization: "shaayef", altRomanizations: [], english: "seeing (m)", direction: "both", grammarNote: "Masculine-singular base of the m/f/pl participle agreement pattern." },
    { id: "l9-g-005", lessonId: 9, type: "grammar", arabic: "شايْفة", romanization: "shaayfe", altRomanizations: [], english: "seeing (f)", direction: "both", grammarNote: "Feminine-singular = masculine base + -e (shaayef -> shaayfe)." },
    { id: "l9-g-006", lessonId: 9, type: "grammar", arabic: "شايْفِين", romanization: "shaayfiin", altRomanizations: [], english: "seeing (plural)", direction: "both", grammarNote: "Plural (m & f) = masculine base + -iin (shaayef -> shaayfiin)." },
    { id: "l9-g-007", lessonId: 9, type: "grammar", arabic: "رايِح", romanization: "raaye7", altRomanizations: [], english: "going (m)", direction: "both", grammarNote: "Masculine-singular base of the m/f/pl participle agreement pattern." },
    { id: "l9-g-008", lessonId: 9, type: "grammar", arabic: "رايْحَة", romanization: "raay7a", altRomanizations: [], english: "going (f)", direction: "both", grammarNote: "Feminine-singular form given as raay7a (base ending -7 takes -a here, per source spelling) rather than the usual -e pattern." },
    { id: "l9-g-009", lessonId: 9, type: "grammar", arabic: "رايْحِين", romanization: "raay7iin", altRomanizations: [], english: "going (plural)", direction: "both", grammarNote: "Plural (m & f) = masculine base + -iin (raaye7 -> raay7iin). A source example sentence misspelled this as رايجين; normalized here to راى7ين/raay7iin per the cheatsheet romanization and the verb root raaye7." },
    { id: "l9-g-010", lessonId: 9, type: "grammar", arabic: "جايْ", romanization: "jaay", altRomanizations: [], english: "coming (m)", direction: "both", grammarNote: "Masculine-singular base of the m/f/pl participle agreement pattern." },
    { id: "l9-g-011", lessonId: 9, type: "grammar", arabic: "جاية", romanization: "jaaye", altRomanizations: [], english: "coming (f)", direction: "both", grammarNote: "Feminine-singular = masculine base + -e (jaay -> jaaye)." },
    { id: "l9-g-012", lessonId: 9, type: "grammar", arabic: "جايِين", romanization: "jaayiin", altRomanizations: [], english: "coming (plural)", direction: "both", grammarNote: "Plural (m & f) = masculine base + -iin (jaay -> jaayiin)." },

    // ---- Grammar: additional plural-only participle forms (no formal table in source; drawn from example sentences) ----
    { id: "l9-g-013", lessonId: 9, type: "grammar", arabic: "راجِعِين", romanization: "raaj3iin", altRomanizations: [], english: "coming back (plural)", direction: "both", grammarNote: "Plural of raaje3 \"coming back\", following the base+iin pattern; appears in example sentences (e.g. lu-ulaad raaj3iin bi-baaS íl-madrase) — no dedicated table given in source since the feminine-singular form is not provided." },
    { id: "l9-g-014", lessonId: 9, type: "grammar", arabic: "طالِعِين", romanization: "Taal3iin", altRomanizations: [], english: "going out (plural)", direction: "both", grammarNote: "Plural of Taale3 \"going out\", following the base+iin pattern; appears in example sentences — no dedicated table given in source since the feminine-singular form is not provided." },
    { id: "l9-g-015", lessonId: 9, type: "grammar", arabic: "نايِمِين", romanization: "naaymiin", altRomanizations: [], english: "sleeping (plural)", direction: "both", grammarNote: "Plural of naayem \"sleeping\", following the base+iin pattern; appears in example sentences — no dedicated table given in source since the feminine-singular form is not provided." },
    { id: "l9-g-016", lessonId: 9, type: "grammar", arabic: "واقِفين", romanization: "waa2fiin", altRomanizations: [], english: "standing (plural)", direction: "both", grammarNote: "Plural of waaqef \"standing\" (introduced Lesson 5); appears in this lesson's example sentences and the Group Exercise action list." },
    { id: "l9-g-017", lessonId: 9, type: "grammar", arabic: "قاعدين", romanization: "2aa3diin", altRomanizations: [], english: "sitting (plural)", direction: "both", grammarNote: "Plural of qaa3ed \"sitting\" (introduced Lesson 5); appears in this lesson's example sentences and the Group Exercise action list." },

    // ---- Phrase: Location sentence-building templates (Conversation Group) ----
    { id: "l9-p-001", lessonId: 9, type: "phrase", arabic: "مِن وين إنتَ؟", romanization: "mín ween ínta?", altRomanizations: [], english: "Where are you from?", direction: "both", grammarNote: null },
    { id: "l9-p-002", lessonId: 9, type: "phrase", arabic: "أنا مِن ___", romanization: "ana mín ___", altRomanizations: [], english: "I'm from ___", direction: "both", grammarNote: null },
    { id: "l9-p-003", lessonId: 9, type: "phrase", arabic: "أنا مِن مَدينة ___", romanization: "ana mín madiinet ___", altRomanizations: [], english: "I'm from the city of ___", direction: "both", grammarNote: "madiinet is the idafa (construct-state) form of madiine used before a following place name." },
    { id: "l9-p-004", lessonId: 9, type: "phrase", arabic: "وين عايِش/ساكِن؟", romanization: "ween 3aayísh/saakín?", altRomanizations: [], english: "Where do you live?", direction: "both", grammarNote: "Either participle (3aayísh or saakín) works; both agree m/f/pl per this lesson's participle pattern." },
    { id: "l9-p-005", lessonId: 9, type: "phrase", arabic: "فِ___", romanization: "ana fi-___", altRomanizations: ["ana bi-___"], english: "I [live] in ___", direction: "both", grammarNote: "Source template prints the Northern form (ana bi-___); per this lesson's explicit Southern rule (\"use fi- instead of bi- for in/at\"), canonicalized here to the Southern fi- form, with bi- retained as the Northern-accepted alternate." },
    { id: "l9-p-006", lessonId: 9, type: "phrase", arabic: "أنا عايِش فِ___", romanization: "ana 3aayesh fi-___", altRomanizations: ["ana 3aayesh bi-___"], english: "I live in (city, country, etc)", direction: "both", grammarNote: "Source template prints the Northern form (ana 3aayesh bi-___); canonicalized here to Southern fi- per the lesson's explicit rule, with bi- as the Northern-accepted alternate." },

    // ---- Phrase: Bonus Possessive & Idafa ----
    { id: "l9-p-007", lessonId: 9, type: "phrase", arabic: "أهِل صاحْبي", romanization: "ahíl Saa7bi", altRomanizations: [], english: "my boyfriend's parents", direction: "both", grammarNote: "Idafa chain: ahíl \"parents\" + Saa7bi \"my boyfriend/friend (m)\"." },
    { id: "l9-p-008", lessonId: 9, type: "phrase", arabic: "أهِل مَرتي", romanization: "ahíl marti", altRomanizations: [], english: "my wife's parents", direction: "both", grammarNote: "Idafa chain: ahíl \"parents\" + marti \"my wife\"." },
    { id: "l9-p-009", lessonId: 9, type: "phrase", arabic: "عيلتي", romanization: "3eelti", altRomanizations: [], english: "my family", direction: "both", grammarNote: "3eele + possessive suffix -ti \"my\"." },
    { id: "l9-p-010", lessonId: 9, type: "phrase", arabic: "أهلي", romanization: "ahli", altRomanizations: [], english: "my parents", direction: "both", grammarNote: "ahíl + possessive suffix -i \"my\"." },

    // ---- Sentence: Lesson 1 — Plural Pronouns example sentences ----
    { id: "l9-s-001", lessonId: 9, type: "sentence", arabic: "وين إنتو؟ نِحنا بِالبيت.", romanization: "Ween íntu? ní7na bíl-beet.", altRomanizations: [], english: "Where are you (p)? We are at home.", direction: "both", grammarNote: "(N) — uses ní7na and bíl- (Northern forms); Southern-canonical would be í7na fíl-beet." },
    { id: "l9-s-002", lessonId: 9, type: "sentence", arabic: "هُمّ وين؟ هُمّ فِالمَدرَسة.", romanization: "humme ween? humme fíl-madrase.", altRomanizations: [], english: "Where are they? They are in school.", direction: "both", grammarNote: "(S) — uses humme and fíl- (Southern-canonical forms)." },
    { id: "l9-s-003", lessonId: 9, type: "sentence", arabic: "هِنّ جُوّا الغِرفة هنيك.", romanization: "hínne juwwa íl-ghírfe hniik.", altRomanizations: [], english: "They are inside the room over there.", direction: "both", grammarNote: "(N) — uses hínne (Northern alternate for \"they\")." },
    { id: "l9-s-004", lessonId: 9, type: "sentence", arabic: "إحنا هون، إنتو هناك.", romanization: "í7na hoon, u-íntu hnaak.", altRomanizations: [], english: "We are here, and you (p) are there.", direction: "both", grammarNote: "(S) — uses í7na (Southern-canonical for \"we\")." },

    // ---- Sentence: Lesson 1 — Plural Participles example sentences ----
    { id: "l9-s-005", lessonId: 9, type: "sentence", arabic: "هُمّ لابسِين أسوَد.", romanization: "humme laabsiin aswad.", altRomanizations: [], english: "They are wearing black.", direction: "both", grammarNote: "(S)" },
    { id: "l9-s-006", lessonId: 9, type: "sentence", arabic: "إنتو شايِفين الزَّلَمة ومَرتُه؟", romanization: "íntu shaayfiin íz-zalame, u-marto?", altRomanizations: [], english: "Are you (p) seeing the man and his wife?", direction: "both", grammarNote: "(N)" },
    { id: "l9-s-007", lessonId: 9, type: "sentence", arabic: "نِحنا رايحِين عالشِّغِل.", romanization: "ní7na raay7iin 3ash-shíghíl.", altRomanizations: [], english: "We are going to work.", direction: "both", grammarNote: "(N) — uses ní7na (Northern alternate for \"we\")." },
    { id: "l9-s-008", lessonId: 9, type: "sentence", arabic: "هُمّ واقِفين فِالمَطبَخ.", romanization: "humme waa2fiin fíl-maTbakh.", altRomanizations: [], english: "They are standing in the kitchen.", direction: "both", grammarNote: "(N)" },
    { id: "l9-s-009", lessonId: 9, type: "sentence", arabic: "إحنا جايِين مِن المَطعَم.", romanization: "í7na jaayiin mín íl-maT3am.", altRomanizations: [], english: "We are coming from the restaurant.", direction: "both", grammarNote: "(S)" },
    { id: "l9-s-010", lessonId: 9, type: "sentence", arabic: "هِنّ قاعدين بِالشُّقَّة.", romanization: "hínne 2aa3diin bísh-sha22a.", altRomanizations: [], english: "They are staying at the apartment.", direction: "both", grammarNote: "(N) — uses hínne and bísh- (Northern forms)." },

    // ---- Sentence: Lesson 1 — Additional Plural Sentences ----
    { id: "l9-s-011", lessonId: 9, type: "sentence", arabic: "الوَلاد قاعدين عالكَناباية فِغُرفِة القَعدة.", romanization: "lu-ulaad 2aa3diin 3al-kanabaaye fi-ghurfet íl-2a3de.", altRomanizations: [], english: "The kids are sitting on the sofa in the living room.", direction: "both", grammarNote: "(S)" },
    { id: "l9-s-012", lessonId: 9, type: "sentence", arabic: "الشَّباب رايحِين عالشِّغِل.", romanization: "ish-shabaab raay7iin 3ash-shíghíl.", altRomanizations: [], english: "The guys are going to work.", direction: "both", grammarNote: "(N)" },
    { id: "l9-s-013", lessonId: 9, type: "sentence", arabic: "الّناس جايِين لَهون؟", romanization: "ín-naas jaayiin la-hoon?", altRomanizations: [], english: "The people are coming here.", direction: "both", grammarNote: "(N)" },
    { id: "l9-s-014", lessonId: 9, type: "sentence", arabic: "البَنات لابِسين أحمَر و أبيَض.", romanization: "íl-banaat laabsiin a7mar u-abyaD.", altRomanizations: [], english: "The girls are wearing red and white.", direction: "both", grammarNote: "(N)" },

    // ---- Sentence: Lesson 1 — Final Examples ----
    { id: "l9-s-015", lessonId: 9, type: "sentence", arabic: "الوَلاد راجِعِين بِباص المَدرَسة.", romanization: "lu-ulaad raaj3iin bi-baaS íl-madrase.", altRomanizations: [], english: "The kids are coming back in the school bus.", direction: "both", grammarNote: "(S)" },
    { id: "l9-s-016", lessonId: 9, type: "sentence", arabic: "إنتو كيف جايِين لَهون؟ نِحنا جايِين بِالسَّيّارَة.", romanization: "intu kiif jaayiin la-hoon? ní7na jaayiin bís-sayyaara.", altRomanizations: [], english: "How are you (p) coming here? We are coming by car.", direction: "both", grammarNote: "(N)" },
    { id: "l9-s-017", lessonId: 9, type: "sentence", arabic: "لَوين طالِعين الّناس؟ طالِعِين عَمَطعَم.", romanization: "la-ween Taal3iin ín-naas? Taal3iin 3a-maT3am.", altRomanizations: [], english: "Where are the people going out to? They are going to a restaurant.", direction: "both", grammarNote: "(N)" },
    { id: "l9-s-018", lessonId: 9, type: "sentence", arabic: "وين البَنات؟ هِنّ نايِمِين عالصُّوفاية.", romanization: "ween íl-banaat? hínne naaymiin 3aS-Suufaaye.", altRomanizations: [], english: "Where are the girls? They are sleeping on the sofa.", direction: "both", grammarNote: "(S)" },
    { id: "l9-s-019", lessonId: 9, type: "sentence", arabic: "إنتو وين؟ إحنا طالِعِين مِن البيت.", romanization: "intu ween? í7na Taal3iin mín íl-beet.", altRomanizations: [], english: "Where are you (p)? We are going out of the house.", direction: "both", grammarNote: "(N)" },
    { id: "l9-s-020", lessonId: 9, type: "sentence", arabic: "وين الشَّباب؟ هُمّ راجِعِين مِن الشُّغل فِالمِترو.", romanization: "ween ish-shabaab? humme raaj3iin mín ish-shughul fíl-mítro.", altRomanizations: [], english: "Where are the guys? They are returning from work in the metro.", direction: "both", grammarNote: "(N)" },

    // ---- Sentence: Lesson 2 — Sample Conversation ----
    { id: "l9-s-021", lessonId: 9, type: "sentence", arabic: "إنتَ وين عايِش؟", romanization: "ínta ween 3aayísh?", altRomanizations: [], english: "Where do you (m) live?", direction: "both", grammarNote: null },
    { id: "l9-s-022", lessonId: 9, type: "sentence", arabic: "أنا عايِش فِأمريكا، بَس أهلي مِن فَلَسطِين.", romanization: "ana 3aayísh fi-amriika, bas ahli mín falasTiin.", altRomanizations: [], english: "I live in America, but my parents are from Palestine.", direction: "both", grammarNote: "Demonstrates the Southern fi- locative construction (fi-amriika) plus ahíl + possessive (ahli \"my parents\")." },
    { id: "l9-s-023", lessonId: 9, type: "sentence", arabic: "حِلو! وفِأيْ وِلاية ساكِن؟", romanization: "7ílu! u-fi-ay wilaaye saakín?", altRomanizations: [], english: "Nice! And in which state do you (m) reside?", direction: "both", grammarNote: "Demonstrates fi- + ay (\"which\") + wilaaye (\"state\"). 7ílu is a masculine-form variant of the 7ílwe/7ílo \"nice/great\" adjective family." },
    { id: "l9-s-024", lessonId: 9, type: "sentence", arabic: "فِوِلاية ميشِيغان. وإنتي؟", romanization: "fi-wilaayet michigan. u-ínti?", altRomanizations: [], english: "In the state of Michigan. And you (f)?", direction: "both", grammarNote: "wilaayet is the idafa (construct-state) form of wilaaye before a place name; fi- Southern locative." },
    { id: "l9-s-025", lessonId: 9, type: "sentence", arabic: "إحنا عايْشِين فِكَنَدا، فِمَدينة تورُنتو.", romanization: "í7na 3aayshiin fi-Canada. fi-madiinet Toronto.", altRomanizations: [], english: "We live in Canada. In the city of Toronto.", direction: "both", grammarNote: "Names both country and city, per the lesson's encouragement to layer balad > wilaaye > madiine; madiinet is the idafa form of madiine." },

    // ---- Sentence: Lesson 2 — Country examples ----
    { id: "l9-s-026", lessonId: 9, type: "sentence", arabic: "إحنا عايشِين فِالأُردُن.", romanization: "í7na 3aayshiin fíl-urdun.", altRomanizations: [], english: "We live in Jordan.", direction: "both", grammarNote: "(S) — fíl- Southern-canonical locative." },
    { id: "l9-s-027", lessonId: 9, type: "sentence", arabic: "أنا عايْشة بِلِبنان.", romanization: "ana 3aayshe bi-líbnaan.", altRomanizations: [], english: "I live (f) in Lebanon.", direction: "both", grammarNote: "(N) — bi- Northern locative; Southern-canonical would be fi-líbnaan." },
    { id: "l9-s-028", lessonId: 9, type: "sentence", arabic: "أنا مِن سُورْيَة، بَس عايْشة بِالإمارات.", romanization: "ana mín suurya, bas 3aayshe bíl-imaaraat.", altRomanizations: [], english: "I am from Syria, but I (f) live in the UAE.", direction: "both", grammarNote: "(N) — bíl- Northern locative." },
    { id: "l9-s-029", lessonId: 9, type: "sentence", arabic: "أنا عايْشة فِأمريكا، بَس أنا مِن فَلَسطِين.", romanization: "ana 3aayísh fi-amriika, bas ana mín falasTiin.", altRomanizations: [], english: "I live (f) in America, but I am from Palestine.", direction: "both", grammarNote: "(N) — source Arabic shows the feminine participle (عايْشة/3aayshe) but the printed romanization shows the masculine form (3aayísh); likely a source inconsistency, preserved as given." },

    // ---- Sentence: Lesson 2 — Cities examples ----
    { id: "l9-s-030", lessonId: 9, type: "sentence", arabic: "أنا وعيلتي ساكِنين بِبَيْرُوت.", romanization: "ana u-3eelti, saakniin bi-bayruut.", altRomanizations: [], english: "Me and my family are living in Beirut.", direction: "both", grammarNote: "(S) — despite the (S) tag this row uses bi- rather than fi-; preserved as given in source." },
    { id: "l9-s-031", lessonId: 9, type: "sentence", arabic: "إنْتو ساكِنين هون؟ لاء، إحنا ساكِنين فِرام الله.", romanization: "intu saakniin hoon? La2, í7na saakniin fi-raam-allah.", altRomanizations: [], english: "Do you (p) live here? No, we live in Ramallah.", direction: "both", grammarNote: "(S) — fi- Southern-canonical locative." },
    { id: "l9-s-032", lessonId: 9, type: "sentence", arabic: "أنا ساكْنة بِشِيكاغو، بَس أهلي مِن الشّام.", romanization: "ana saakne bi-chicago, bas ahli mín ísh-shaam.", altRomanizations: [], english: "I live (f) in Chicago, but my parents are from Damascus.", direction: "both", grammarNote: "(N) — bi- Northern locative." },

    // ---- Sentence: Lesson 2 — Using "with" (ma3) ----
    { id: "l9-s-033", lessonId: 9, type: "sentence", arabic: "أنا جُوّا البيت مَع زوجي.", romanization: "ana juwwa íl-beet ma3 zooji.", altRomanizations: [], english: "I am inside the house with my husband.", direction: "both", grammarNote: "(N)" },
    { id: "l9-s-034", lessonId: 9, type: "sentence", arabic: "هُوّ جايْ مَع صاحِبُه.", romanization: "huwwa jaay ma3 Saa7bo.", altRomanizations: [], english: "He is coming with his friend (m).", direction: "both", grammarNote: "(N)" },
    { id: "l9-s-035", lessonId: 9, type: "sentence", arabic: "أنا عايِش مَع مَرتي ووْلادي.", romanization: "ana 3aayísh ma3 marti u-wlaadi.", altRomanizations: [], english: "I live with my wife and my kids.", direction: "both", grammarNote: "(S)" }
  ],
  dialogues: [
    {
      id: "l9-d-001",
      lessonId: 9,
      lines: [
        { speaker: "A", arabic: "وين إنتو؟", romanization: "Ween íntu?", english: "Where are you (p)?" },
        { speaker: "B", arabic: "نِحنا بِالبيت.", romanization: "ní7na bíl-beet.", english: "We are at home." },
        { speaker: "A", arabic: "هُمّ وين؟", romanization: "humme ween?", english: "Where are they?" },
        { speaker: "B", arabic: "هُمّ فِالمَدرَسة.", romanization: "humme fíl-madrase.", english: "They are in school." }
      ],
      relatedItemIds: ["l9-v-001", "l9-v-002", "l9-v-003"]
    },
    {
      id: "l9-d-002",
      lessonId: 9,
      lines: [
        { speaker: "A", arabic: "إنتو كيف جايِين لَهون؟", romanization: "intu kiif jaayiin la-hoon?", english: "How are you (p) coming here?" },
        { speaker: "B", arabic: "نِحنا جايِين بِالسَّيّارَة.", romanization: "ní7na jaayiin bís-sayyaara.", english: "We are coming by car." }
      ],
      relatedItemIds: ["l9-g-010", "l9-g-011", "l9-g-012", "l9-v-002", "l9-v-003"]
    },
    {
      id: "l9-d-003",
      lessonId: 9,
      lines: [
        { speaker: "A", arabic: "إنتَ وين عايِش؟", romanization: "ínta ween 3aayísh?", english: "Where do you (m) live?" },
        { speaker: "B", arabic: "أنا عايِش فِأمريكا، بَس أهلي مِن فَلَسطِين.", romanization: "ana 3aayísh fi-amriika, bas ahli mín falasTiin.", english: "I live in America, but my parents are from Palestine." },
        { speaker: "A", arabic: "حِلو! وفِأيْ وِلاية ساكِن؟", romanization: "7ílu! u-fi-ay wilaaye saakín?", english: "Nice! And in which state do you (m) reside?" },
        { speaker: "B", arabic: "فِوِلاية ميشِيغان. وإنتي؟", romanization: "fi-wilaayet michigan. u-ínti?", english: "In the state of Michigan. And you (f)?" },
        { speaker: "C", arabic: "إحنا عايْشِين فِكَنَدا، فِمَدينة تورُنتو.", romanization: "í7na 3aayshiin fi-Canada. fi-madiinet Toronto.", english: "We live in Canada. In the city of Toronto." }
      ],
      relatedItemIds: ["l9-v-025", "l9-v-026", "l9-v-020", "l9-v-021", "l9-v-027", "l9-p-005", "l9-p-006"]
    },
    {
      id: "l9-d-004",
      lessonId: 9,
      lines: [
        { speaker: "A", arabic: "مِن وين إنتَ؟", romanization: "mín ween ínta?", english: "Where are you from?" },
        { speaker: "B", arabic: "أنا مِن ___.", romanization: "ana mín ___.", english: "I'm from ___." },
        { speaker: "A", arabic: "وين عايِش/ساكِن؟", romanization: "ween 3aayísh/saakín?", english: "Where do you live?" },
        { speaker: "B", arabic: "أنا عايِش فِ___.", romanization: "ana 3aayesh fi-___.", english: "I live in ___." }
      ],
      relatedItemIds: ["l9-p-001", "l9-p-002", "l9-p-004", "l9-p-006"]
    }
  ]
};
