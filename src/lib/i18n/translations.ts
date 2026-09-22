export type Language = 'nl' | 'en' | 'ar';

export interface TranslationDict {
  // Brand & Header
  appTitle: string;
  appSubtitle: string;
  streakText: string;
  streakDays: string;
  
  // Navigation
  navHome: string;
  navCurriculum: string;
  navFlashcards: string;
  navVocab: string;
  navPractice: string;
  navExam: string;
  navCommunicate: string;
  navSettings: string;
  navUpgrade: string;

  // Home Hero & Stats
  heroTitle: string;
  heroDescription: string;
  startFlashcards: string;
  startPractice: string;
  startMockExam: string;
  startCommunicate: string;
  
  statStreak: string;
  statQuestions: string;
  statAccuracy: string;
  statScenarios: string;
  statCardsDue: string;

  // CBR Domains
  domainGordel: string;
  domainGordelDesc: string;
  domainBct: string;
  domainBctDesc: string;
  domainAtbv: string;
  domainAtbvDesc: string;
  domainPaman: string;
  domainPamanDesc: string;
  domainTransport: string;
  domainTransportDesc: string;
  domainGedrag: string;
  domainGedragDesc: string;
  domainCasus: string;
  domainCasusDesc: string;

  // Flashcards
  fcTitle: string;
  fcSubtitle: string;
  fcFlipPrompt: string;
  fcAudioPrompt: string;
  fcGradeHard: string;
  fcGradeGood: string;
  fcGradeEasy: string;
  fcExamTrap: string;
  fcLegalBasis: string;

  // Compound Slicer
  vocabTitle: string;
  vocabSubtitle: string;
  vocabSearchPlaceholder: string;
  vocabRootsTitle: string;
  vocabLegalMeaning: string;

  // Practice & Sleepvragen
  practiceTitle: string;
  practiceSubtitle: string;
  tabMultipleChoice: string;
  tabSleepvragen: string;
  btnCheckAnswer: string;
  btnNextQuestion: string;
  btnTryAgain: string;
  btnShowTranslation: string;
  explanationTitle: string;

  // Communicate
  commTitle: string;
  commSubtitle: string;
  tabPhases: string;
  tabScenarios: string;
  tabQuiz: string;

  // Home Page Micro-Labels
  statActivelyLearned: string;
  statCorrectLabel: string;
  statCbrNorm: string;
  statSimulationsComplete: string;
  progressTitle: string;
  progressDesc: string;
  cardCommDesc: string;
  cardVocabDesc: string;
  cardPricingDesc: string;

  // Settings & Upgrades
  settingsTitle: string;
  selectLanguage: string;
  pricingTitle: string;
  pricingSubtitle: string;
  badgeBestValue: string;
  badgeGuaranteed: string;
  btnGetAccess: string;
}

export const TRANSLATIONS: Record<Language, TranslationDict> = {
  nl: {
    appTitle: 'TaxiMaster TVT',
    appSubtitle: 'CBR Taxi Theorie & Praktijk',
    streakText: 'streak',
    streakDays: 'dagen',

    navHome: 'Home',
    navCurriculum: 'Lesstof',
    navFlashcards: 'Flitskaarten',
    navVocab: 'Woorden',
    navPractice: 'Oefenen',
    navExam: 'Examen',
    navCommunicate: 'Gesprek',
    navSettings: 'Instellingen',
    navUpgrade: 'Premium Pas',

    heroTitle: 'CBR Taxi Theorie & Praktijk Tutor',
    heroDescription: 'Versterk je juridisch Nederlands met A0-vertalingen, audio-uitspraak, 100 flitskaarten, sleepvragen en interactieve CBR praktijksimulaties.',
    startFlashcards: 'Flitskaarten Leren',
    startPractice: 'Oefenvragen & Sleepvragen',
    startMockExam: 'CBR Proefexamen (40V)',
    startCommunicate: 'CBR Praktijk Gesprek',

    statStreak: 'Dagelijkse Streak',
    statQuestions: 'Vragen Gemaakt',
    statAccuracy: 'Nauwkeurigheid',
    statScenarios: 'Praktijk Scenarios',
    statCardsDue: 'Flitskaarten Herhalen',

    domainGordel: 'Gordelplicht & Veiligheid',
    domainGordelDesc: 'Kinderzitjes & RVV 1990 regels',
    domainBct: 'BCT & CDT Boordcomputer',
    domainBctDesc: 'Chauffeurskaart & inspecties',
    domainAtbv: 'Arbeidstijd & Rust (ATBv)',
    domainAtbvDesc: 'Rijtijden, pauzes & nachtdienst',
    domainPaman: 'PAMAN Ongevallenprotocol',
    domainPamanDesc: 'Veiligheid, 112 & eerste hulp',
    domainTransport: 'Tarieven & BTM Ritbewijs',
    domainTransportDesc: 'Max tarief & pinverplichting',
    domainGedrag: 'Klantgerichtheid & Conflicten',
    domainGedragDesc: 'De-escalatie & beroepshouding',
    domainCasus: 'CBR Casus & Praktijk',
    domainCasusDesc: 'Realistische examensituaties',

    fcTitle: 'TVT Flitskaarten & Kernbegrippen',
    fcSubtitle: 'Beheers alle 100 essentiële examenbegrippen met Leitner gespreide herhaling en audio.',
    fcFlipPrompt: 'Tik op de kaart om te draaien',
    fcAudioPrompt: 'Beluister Nederlandse uitspraak',
    fcGradeHard: 'Moeilijk (1 dag)',
    fcGradeGood: 'Goed (3 dagen)',
    fcGradeEasy: 'Makkelijk (7 dagen)',
    fcExamTrap: 'CBR Examenvalluik',
    fcLegalBasis: 'Wettelijke grondslag',

    vocabTitle: 'Juridische Woordenschat & Compound Slicer',
    vocabSubtitle: 'Ontleed 55+ complexe juridische samengestelde woorden in tikbare woordwortels met A0 vertaling.',
    vocabSearchPlaceholder: 'Zoek een Nederlands taxibegrip...',
    vocabRootsTitle: 'Woordwortels Ontleding',
    vocabLegalMeaning: 'Juridische CBR Betekenis',

    practiceTitle: 'Oefenvragen & CBR Sleepvragen',
    practiceSubtitle: 'Oefen vraag voor vraag met A0-ondersteuning, rolmarkeringen en officiële sleepvragen.',
    tabMultipleChoice: 'Meerkeuzevragen',
    tabSleepvragen: 'CBR Sleepvragen',
    btnCheckAnswer: 'Controleer Antwoord',
    btnNextQuestion: 'Volgende Vraag',
    btnTryAgain: 'Opnieuw Oefenen',
    btnShowTranslation: 'Toon A0 Vertaling',
    explanationTitle: 'Juridische Toelichting & CBR Uitleg',

    commTitle: 'Nederlands voor de Taxipraktijk',
    commSubtitle: 'Beheers de 70 officiële praktijkzinnen, interactie met politie/handhaving en speel examenscenarios.',
    tabPhases: 'Zinnen per Ritfase',
    tabScenarios: 'CBR Praktijk Simulatie',
    tabQuiz: 'Zinnen Quiz',

    statActivelyLearned: 'Actief geleerd',
    statCorrectLabel: 'correct',
    statCbrNorm: 'CBR norm = 80%',
    statSimulationsComplete: 'Simulaties voltooid',
    progressTitle: 'Jouw Voortgang per CBR Kennisdomein',
    progressDesc: 'Live berekend op basis van gemaakte oefenvragen en flitskaarten.',
    cardCommDesc: '70 zinnen in 7 ritfases + politiecontrole & interactieve examensimulaties.',
    cardVocabDesc: 'Ontleed 55+ juridische samengestelde woorden met A0 Engels en Arabisch.',
    cardPricingDesc: 'Bekijk onze premium examengarantie pakketten en ontgrendel alle CBR toetsen.',

    settingsTitle: 'App Instellingen',
    selectLanguage: 'Kies jouw ondersteunende taal',
    pricingTitle: 'TaxiMaster TVT Premium Pas',
    pricingSubtitle: 'Investeer in je CBR chauffeursdiploma. Geslaagd in 1 keer.',
    badgeBestValue: 'Meest Gekozen',
    badgeGuaranteed: 'Examen Garantie',
    btnGetAccess: 'Ontvang Direct Toegang'
  },

  en: {
    appTitle: 'TaxiMaster TVT',
    appSubtitle: 'CBR Taxi Theory & Practical Exam',
    streakText: 'streak',
    streakDays: 'days',

    navHome: 'Home',
    navCurriculum: 'Curriculum',
    navFlashcards: 'Flashcards',
    navVocab: 'Vocabulary',
    navPractice: 'Practice',
    navExam: 'Exam',
    navCommunicate: 'Dialogue',
    navSettings: 'Settings',
    navUpgrade: 'Premium Pass',

    heroTitle: 'CBR Taxi Theory & Practical Tutor',
    heroDescription: 'Master statutory Dutch with A0 English explanations, Dutch audio pronunciation, 100 flashcards, drag-and-drop questions, and interactive CBR simulations.',
    startFlashcards: 'Study Flashcards',
    startPractice: 'Practice & Drag-and-Drop',
    startMockExam: 'Mock Exam (40Q)',
    startCommunicate: 'CBR Practical Dialogue',

    statStreak: 'Daily Streak',
    statQuestions: 'Questions Solved',
    statAccuracy: 'Accuracy',
    statScenarios: 'Practical Scenarios',
    statCardsDue: 'Cards Due for Review',

    domainGordel: 'Seatbelts & Passenger Safety',
    domainGordelDesc: 'Child safety seats & RVV 1990 rules',
    domainBct: 'BCT & CDT On-Board Computer',
    domainBctDesc: 'Driver card & enforcement checks',
    domainAtbv: 'Working Hours & Rest (ATBv)',
    domainAtbvDesc: 'Driving limits, breaks & night duty',
    domainPaman: 'PAMAN Accident Protocol',
    domainPamanDesc: 'Personal safety, 112 & first aid',
    domainTransport: 'Fares & BTM Ride Receipt',
    domainTransportDesc: 'Max fares & mandatory card payment',
    domainGedrag: 'Customer Service & Conflicts',
    domainGedragDesc: 'De-escalation & professional conduct',
    domainCasus: 'CBR Case Studies & Practice',
    domainCasusDesc: 'Realistic exam scenarios',

    fcTitle: 'TVT Flashcards & Core Concepts',
    fcSubtitle: 'Master all 100 vital exam concepts with Leitner spaced repetition and native Dutch audio.',
    fcFlipPrompt: 'Tap card to flip',
    fcAudioPrompt: 'Listen to Dutch pronunciation',
    fcGradeHard: 'Hard (1 day)',
    fcGradeGood: 'Good (3 days)',
    fcGradeEasy: 'Easy (7 days)',
    fcExamTrap: 'CBR Exam Trap',
    fcLegalBasis: 'Statutory Legal Basis',

    vocabTitle: 'Legal Vocabulary & Compound Slicer',
    vocabSubtitle: 'Break down 55+ complex Dutch legal compound words into tappable root words with A0 translation.',
    vocabSearchPlaceholder: 'Search Dutch taxi term...',
    vocabRootsTitle: 'Root Word Breakdown',
    vocabLegalMeaning: 'CBR Legal Meaning',

    practiceTitle: 'Practice Questions & Drag-and-Drop',
    practiceSubtitle: 'Practice step-by-step with sentence deconstruction and official CBR sequencing questions.',
    tabMultipleChoice: 'Multiple Choice',
    tabSleepvragen: 'Drag-and-Drop (Sleepvragen)',
    btnCheckAnswer: 'Check Answer',
    btnNextQuestion: 'Next Question',
    btnTryAgain: 'Practice Again',
    btnShowTranslation: 'Show A0 Translation',
    explanationTitle: 'Legal Explanation & CBR Analysis',

    commTitle: 'Dutch for Taxi Practice',
    commSubtitle: 'Master 70 official phrases, police & ILT authority stops, and interactive CBR exam roleplays.',
    tabPhases: 'Phrases by Ride Phase',
    tabScenarios: 'CBR Practical Roleplay',
    tabQuiz: 'Phrases Quiz',

    statActivelyLearned: 'Actively studied',
    statCorrectLabel: 'correct',
    statCbrNorm: 'CBR pass mark = 80%',
    statSimulationsComplete: 'Simulations completed',
    progressTitle: 'Your Progress per CBR Knowledge Domain',
    progressDesc: 'Calculated live from practice questions and flashcard reviews.',
    cardCommDesc: '70 phrases across 7 ride phases + police stops & interactive exam simulations.',
    cardVocabDesc: 'Break down 55+ legal compound words with A0 English and Arabic support.',
    cardPricingDesc: 'Explore our premium exam guarantee packages and unlock all CBR tests.',

    settingsTitle: 'App Settings',
    selectLanguage: 'Choose your support language',
    pricingTitle: 'TaxiMaster TVT Premium Pass',
    pricingSubtitle: 'Invest in your CBR taxi driver license. Pass on your first attempt.',
    badgeBestValue: 'Most Popular',
    badgeGuaranteed: 'Exam Pass Guarantee',
    btnGetAccess: 'Get Instant Access'
  },

  ar: {
    appTitle: 'TaxiMaster TVT',
    appSubtitle: 'امتحان تاكسي CBR النظري والعملي',
    streakText: 'أيام متتالية',
    streakDays: 'أيام',

    navHome: 'الرئيسية',
    navCurriculum: 'المنهاج',
    navFlashcards: 'البطاقات',
    navVocab: 'المفردات والقوانين',
    navPractice: 'التدريب',
    navExam: 'الامتحان التجريبي',
    navCommunicate: 'المحادثة والعملي',
    navSettings: 'الإعدادات',
    navUpgrade: 'الباقة المميزة',

    heroTitle: 'المرشد الشامل لامتحان تاكسي CBR الهولندي',
    heroDescription: 'تعلّم المصطلحات القانونية الهولندية بدعم عربي كامل A0، نطق صوتي، 100 بطاقة ذكية، أسئلة السحب والترتيب، ومحاكاة عملية للمحادثة مع الركاب والشرطة.',
    startFlashcards: 'مراجعة البطاقات الذكية',
    startPractice: 'تدريب الأسئلة والسحب',
    startMockExam: 'امتحان تجريبي (40 سؤال)',
    startCommunicate: 'محادثات الفحص العملي',

    statStreak: 'أيام الحماس المتتالية',
    statQuestions: 'الأسئلة المنجزة',
    statAccuracy: 'نسبة الدقة',
    statScenarios: 'سيناريوهات تم حلها',
    statCardsDue: 'بطاقات تحتاج مراجعة',

    domainGordel: 'حزام الأمان وسلامة الركاب',
    domainGordelDesc: 'مقاعد الأطفال وقوانين RVV 1990',
    domainBct: 'جهاز التاكسي BCT وبطاقة السائق',
    domainBctDesc: 'تسجيل الدخول والتفتيش القانوني',
    domainAtbv: 'ساعات العمل والراحة (ATBv)',
    domainAtbvDesc: 'أوقات القيادة، الاستراحات، والدوام الليلي',
    domainPaman: 'بروتوكول الطوارئ والحوادث PAMAN',
    domainPamanDesc: 'السلامة الشخصية، الطوارئ 112 والإسعاف',
    domainTransport: 'التعرفة القانونية وإيصال BTM',
    domainTransportDesc: 'الحد الأقصى للأسعار والدفع الإلكتروني',
    domainGedrag: 'خدمة العملاء وحل النزاعات',
    domainGedragDesc: 'تهدئة التوتر والتعامل المهني',
    domainCasus: 'قضايا CBR والامتحان العملي',
    domainCasusDesc: 'مواقف وتحديات واقعية',

    fcTitle: 'البطاقات الذكية والمصطلحات الأساسية',
    fcSubtitle: 'أتقن جميع مصطلحات الامتحان الـ 100 بنظام التكرار المتباعد الذكي والنطق الهولندي الأصلي.',
    fcFlipPrompt: 'المس البطاقة لقلبها وقراءة الشرح',
    fcAudioPrompt: 'استمع للنطق الهولندي الصحيح',
    fcGradeHard: 'صعب (مراجعة غداً)',
    fcGradeGood: 'جيد (بعد 3 أيام)',
    fcGradeEasy: 'سهل (بعد أسبوع)',
    fcExamTrap: 'فخ امتحانات CBR',
    fcLegalBasis: 'السند القانوني في التشريع الهولندي',

    vocabTitle: 'المصطلحات القانونية ومُفكك الكلمات المركبة',
    vocabSubtitle: 'تفكيك أكثر من 55 كلمة قانونية هولندية مركبة إلى جذورها القابلة للنقر مع شرح معانيها بدقة.',
    vocabSearchPlaceholder: 'ابحث عن مصطلح تاكسي هولندي...',
    vocabRootsTitle: 'تفكيك جذور الكلمة',
    vocabLegalMeaning: 'المعنى القانوني في امتحان CBR',

    practiceTitle: 'أسئلة التدريب وأسئلة السحب (Sleepvragen)',
    practiceSubtitle: 'تدرب سؤالاً بسؤال مع تفكيك الجمل النحوية وأسئلة الترتيب والمطابقة المعتمدة رسمياً.',
    tabMultipleChoice: 'أسئلة الاختيار من متعدد',
    tabSleepvragen: 'أسئلة السحب والترتيب (Sleepvragen)',
    btnCheckAnswer: 'تحقق من الإجابة',
    btnNextQuestion: 'السؤال التالي',
    btnTryAgain: 'إعادة التدريب',
    btnShowTranslation: 'عرض الترجمة العربية A0',
    explanationTitle: 'التحليل القانوني وتوجيهات CBR',

    commTitle: 'اللغة الهولندية لممارسة مهنة التاكسي',
    commSubtitle: 'أتقن 70 عبارة احترافية في جميع مراحل الرحلة، والتعامل مع تفتيش الشرطة ومفتشي النقل.',
    tabPhases: 'عبارات حسب مراحل الرحلة',
    tabScenarios: 'محاكاة الامتحان العملي',
    tabQuiz: 'اختبار العبارات',

    statActivelyLearned: 'تعلّم نشط',
    statCorrectLabel: 'صحيحة',
    statCbrNorm: 'معيار النجاح CBR = 80%',
    statSimulationsComplete: 'محاكاة مكتملة',
    progressTitle: 'تقدمك في كل مجال معرفي CBR',
    progressDesc: 'محسوب آنياً من أسئلة التدريب ومراجعات البطاقات.',
    cardCommDesc: '70 عبارة في 7 مراحل + تفتيش الشرطة ومحاكاة امتحان تفاعلية.',
    cardVocabDesc: 'تفكيك 55+ كلمة قانونية مركبة مع دعم A0 إنجليزي وعربي.',
    cardPricingDesc: 'اكتشف باقات ضمان النجاح المميزة وافتح جميع اختبارات CBR.',

    settingsTitle: 'إعدادات التطبيق',
    selectLanguage: 'اختر لغة الدعم والشرح',
    pricingTitle: 'باقة TaxiMaster TVT المميزة',
    pricingSubtitle: 'استثمر في رخصة قيادة التاكسي الهولندية. النجاح من المرة الأولى.',
    badgeBestValue: 'الأكثر طلباً',
    badgeGuaranteed: 'ضمان اجتياز الامتحان',
    btnGetAccess: 'احصل على وصول فوري'
  }
};
