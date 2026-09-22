/**
 * CBR TVT Officiële Sleepvragen (Drag-and-Drop & Sequencing Questions)
 * Replicates the authentic computer-based exam format where candidates drag
 * items into correct order, match categories, or slot items into diagrams.
 */

export type SleepvraagType = 'sequence' | 'matching' | 'slot';

export interface SleepvraagItem {
  id: string;
  text: string;
  arabicText?: string;
  englishText?: string;
  icon?: string;
}

export interface SleepvraagCategory {
  id: string;
  title: string;
  arabicTitle?: string;
  englishTitle?: string;
  targetItemId: string; // The item id that belongs here
}

export interface Sleepvraag {
  id: string;
  type: SleepvraagType;
  title: string;
  instruction: string;
  englishInstruction: string;
  arabicInstruction: string;
  domain: 'paman' | 'bcdt' | 'atbv' | 'gordelplicht' | 'transport' | 'gedrag' | 'casus';
  cbrExamFrequency: 'very_high' | 'high';
  scenarioText?: string;
  
  // For sequence questions (order 1..N)
  items: SleepvraagItem[];
  correctSequenceIds: string[]; // List of item IDs in correct order
  
  // For matching / slot questions
  slots?: SleepvraagCategory[];
  
  explanation: {
    dutch: string;
    english: string;
    arabic: string;
    legalBasis: string; // e.g. "Art. 82 RVV 1990", "Art. 2.4:4 ATBv", "Wet personenvervoer 2000"
    examTip: string;
  };
}

export const SLEEPVRAGEN_DATA: Sleepvraag[] = [
  {
    id: 'sleep-01',
    type: 'sequence',
    title: 'PAMAN Ongevallenvolgorde (Spoedprotocol)',
    instruction: 'Sleep de 5 PAMAN-stappen in de wettelijk verplichte chronologische volgorde bij een ongeval.',
    englishInstruction: 'Drag the 5 PAMAN emergency steps into the legally mandated chronological order.',
    arabicInstruction: 'اسحب خطوات طوارئ PAMAN الخمس بالترتيب الزمني القانوني الإلزامي عند وقوع حادث.',
    domain: 'paman',
    cbrExamFrequency: 'very_high',
    scenarioText: 'Je bent als taxichauffeur als eerste getuige van een zware aanrijding op een provinciale weg.',
    items: [
      {
        id: 'paman-1',
        text: 'P — Persoonlijke veiligheid waarborgen (geel hesje aan, gevarendriehoek op 30m)',
        englishText: 'P — Ensure personal safety (wear reflective vest, warning triangle at 30m)',
        arabicText: 'P — تأمين السلامة الشخصية (ارتداء السترة العاكسة، وضع مثلث التحذير على بعد 30م)',
        icon: '🛡️'
      },
      {
        id: 'paman-2',
        text: 'A — Afbakenen en beveiligen van de ongevalslocatie',
        englishText: 'A — Cordon off and secure the accident scene',
        arabicText: 'A — تأمين وتطويق موقع الحادث لمنع حوادث أخرى',
        icon: '🚧'
      },
      {
        id: 'paman-3',
        text: 'M — Melden bij alarmcentrale 112 (locatie, slachtoffers, letsel)',
        englishText: 'M — Report to emergency services 112 (location, victims, injuries)',
        arabicText: 'M — الاتصال بالطوارئ 112 (الموقع بدقة، عدد المصابين، نوع الإصابات)',
        icon: '📞'
      },
      {
        id: 'paman-4',
        text: 'A — Aandacht voor de slachtoffers (aanspreken, geruststellen)',
        englishText: 'A — Attend to victims (speak, reassure, check consciousness)',
        arabicText: 'A — الاهتمام بالمصابين (التحدث إليهم، طمأنتهم، فحص الوعي)',
        icon: '🤝'
      },
      {
        id: 'paman-5',
        text: 'N — Noodzakelijke eerste hulp verlenen (stabiele zijligging, bloeding stelpen)',
        englishText: 'N — Provide necessary first aid (recovery position, stem severe bleeding)',
        arabicText: 'N — تقديم الإسعافات الأولية الضرورية (وضع الإفاقة، وقف النزيف)',
        icon: '🩹'
      }
    ],
    correctSequenceIds: ['paman-1', 'paman-2', 'paman-3', 'paman-4', 'paman-5'],
    explanation: {
      dutch: 'Het acronym PAMAN staat voor: Persoonlijke veiligheid, Afbakenen, Melden, Aandacht, Noodzakelijke hulp. Je eigen veiligheid staat ALTIJD voorop; een gewonde hulpverlener kan niemand helpen.',
      english: 'PAMAN stands for: Personal safety, Cordon off, Report (112), Attention to victims, Necessary first aid. Your own safety is ALWAYS step 1.',
      arabic: 'اختصار PAMAN يعني: السلامة الشخصية، تأمين الموقع، الإبلاغ (112)، الاهتمام بالضحايا، الإسعافات الضرورية. سلامتك الشخصية دائماً هي الخطوة رقم 1.',
      legalBasis: 'CBR Richtlijn Eerste Hulp & Veiligheid bij Verkeersongevallen',
      examTip: 'CBR instinker: Melden (112) komt vóór directe eerste hulp (Aandacht/Noodzakelijke hulp), zodat professionele hulpdiensten zo vroeg mogelijk onderweg zijn.'
    }
  },
  {
    id: 'sleep-02',
    type: 'sequence',
    title: 'Ritprocedure & BCT Bediening bij Aanvang Rit',
    instruction: 'Plaats de handelingen van de taxichauffeur bij vertrek met een klant in de juiste volgorde.',
    englishInstruction: 'Place the taxi driver actions at departure with a passenger in the correct sequence.',
    arabicInstruction: 'رتب إجراءات سائق التاكسي عند بدء الرحلة مع الراكب بالترتيب الصحيح.',
    domain: 'bcdt',
    cbrExamFrequency: 'very_high',
    scenarioText: 'Je staat op een taxistandplaats en een klant stapt in voor een rit naar Schiphol.',
    items: [
      {
        id: 'rit-1',
        text: 'Chauffeurskaart in de Boordcomputer Taxi (BCT/CDT) steken en aanmelden',
        englishText: 'Insert taxi driver card into the BCT/CDT and log in',
        arabicText: 'إدخال بطاقة السائق في جهاز التاكسي (BCT/CDT) وتسجيل الدخول',
        icon: '💳'
      },
      {
        id: 'rit-2',
        text: 'Bestemming en routevoorkeur verifiëren met de passagier',
        englishText: 'Verify destination and route preference with passenger',
        arabicText: 'تأكيد الوجهة ومسار الرحلة المفضل مع الراكب',
        icon: '🗺️'
      },
      {
        id: 'rit-3',
        text: 'Passagiers wijzen op de gordelplicht en deuren vergrendelen',
        englishText: 'Remind passenger of mandatory seatbelt and lock doors',
        arabicText: 'تنبيه الركاب بإلزامية حزام الأمان والتأكد من إغلاق الأبواب',
        icon: '🔒'
      },
      {
        id: 'rit-4',
        text: 'Ritstatus op BCT / Taximeter op "Beladen / Bezet" zetten bij wegrijden',
        englishText: 'Switch BCT / Taximeter to "Occupied / Beladen" upon driving off',
        arabicText: 'تحويل حالة العداد إلى "مشغول / Beladen" فور الانطلاق',
        icon: '⏱️'
      },
      {
        id: 'rit-5',
        text: 'Veilig invoegen in het verkeer met richtingaanwijzer en spiegelcontrole',
        englishText: 'Safely merge into traffic using indicator and mirror checks',
        arabicText: 'الاندماج بأمان في حركة المرور باستخدام الإشارة ومراقبة المرايا',
        icon: '🚗'
      }
    ],
    correctSequenceIds: ['rit-1', 'rit-2', 'rit-3', 'rit-4', 'rit-5'],
    explanation: {
      dutch: 'De BCT moet ALTIJD aangemeld zijn vóór het rijden. Vervolgens stem je de bestemming af, controleer je de veiligheidsgordel, start je het tarief (Beladen) en voeg je veilig in.',
      english: 'The driver card must ALWAYS be logged in prior to vehicle movement. Then confirm destination, ensure seatbelt compliance, activate taximeter rate, and merge.',
      arabic: 'يجب تسجيل بطاقة السائق دائماً قبل تحريك السيارة، ثم تأكيد الوجهة، التأكد من حزام الأمان، تفعيل العداد، ثم الانطلاق بأمان.',
      legalBasis: 'Regeling specificaties en gebruik boordcomputer taxi & Wet Personenvervoer 2000',
      examTip: 'Rijden zonder geldige chauffeurskaart in de BCT geldt als een economisch delict met zware boete (€ 1.500+).'
    }
  },
  {
    id: 'sleep-03',
    type: 'matching',
    title: 'Toezichthouders & Documenten Verificatie',
    instruction: 'Koppel elk document aan de instantie of persoon die bevoegd is dit ter inzage te vorderen.',
    englishInstruction: 'Match each document to the authority or person authorized to inspect it.',
    arabicInstruction: 'طابق كل وثيقة مع الجهة أو الشخص المخول قانونياً بطلب الاطلاع عليها.',
    domain: 'transport',
    cbrExamFrequency: 'very_high',
    scenarioText: 'Tijdens je taxidienst heb je te maken met verschillende inspecties en verzoeken.',
    items: [
      {
        id: 'doc-chkaart',
        text: 'Chauffeurskaart Taxi (zichtbaar gedragen / in BCT)',
        englishText: 'Taxi Driver Card (visibly worn or in BCT)',
        arabicText: 'بطاقة سائق التاكسي (معروضة بوضوح أو في الجهاز)'
      },
      {
        id: 'doc-print',
        text: 'BCT Inspectie-uitdraai arbeids- en rusttijden',
        englishText: 'BCT inspection printout of work and rest hours',
        arabicText: 'مطبوعة فحص ساعات العمل والراحة من جهاز BCT'
      },
      {
        id: 'doc-ritbewijs',
        text: 'Geprint BTM Ritbewijs (met ritprijs en klachteninfo)',
        englishText: 'Printed BTM ride receipt (with fare and complaint info)',
        arabicText: 'إيصال الرحلة BTM المطبوع (شاملاً السعر وبيانات الشكوى)'
      },
      {
        id: 'doc-standplaats',
        text: 'Gemeentelijke Standplaatsvergunning / Taxipas (TTO)',
        englishText: 'Municipal Taxi Rank Permit / TTO Pass',
        arabicText: 'تصريح البلدية للوقوف في مواقف التاكسي الرسمية (TTO)'
      }
    ],
    slots: [
      {
        id: 'slot-politie',
        title: 'Politie & ILT Inspecteur',
        englishTitle: 'Police & ILT Road Transport Inspector',
        arabicTitle: 'الشرطة ومفتش وزارة النقل ILT',
        targetItemId: 'doc-print'
      },
      {
        id: 'slot-klant',
        title: 'Passagier na afloop van de rit',
        englishTitle: 'Passenger at conclusion of ride',
        arabicTitle: 'الراكب عند نهاية الرحلة',
        targetItemId: 'doc-ritbewijs'
      },
      {
        id: 'slot-boa',
        title: 'Gemeentelijke Handhaving (BOA) bij Standplaats',
        englishTitle: 'Municipal Enforcement Officer at Taxi Rank',
        arabicTitle: 'مفتش البلدية (BOA) في مواقف التاكسي',
        targetItemId: 'doc-standplaats'
      },
      {
        id: 'slot-algemeen',
        title: 'Wettelijke Verplichting voor Iedereen zichtbaar',
        englishTitle: 'Statutory Obligation to be visible to all passengers',
        arabicTitle: 'إلزام قانوني بأن تكون ظاهرة للراكب دائماً',
        targetItemId: 'doc-chkaart'
      }
    ],
    correctSequenceIds: ['doc-print', 'doc-ritbewijs', 'doc-standplaats', 'doc-chkaart'],
    explanation: {
      dutch: 'De BCT-inspectieprint mag worden gevorderd door ILT en Politie. Het ritbewijs moet aan de klant worden overhandigd. De gemeentelijke pas wordt gecontroleerd door BOA\'s op de standplaats. De chauffeurskaart moet voor de passagier zichtbaar zijn.',
      english: 'ILT and Police can demand a BCT printout. The ride receipt must be offered to the customer. Municipal enforcement checks local taxi rank permits. The driver card must be visible to passengers.',
      arabic: 'مطبوعة BCT يطلبها مفتش ILT والشرطة. إيصال الرحلة حق إلزامي للراكب. تصريح البلدية يفحصه مراقبو البلدية BOA. بطاقة السائق يجب أن تكون مرئية للراكب دائماً.',
      legalBasis: 'Wet personenvervoer 2000 & Regeling taxivervoer',
      examTip: 'Een ritbewijs uitreiken is verplicht, tenzij de klant uitdrukkelijk aangeeft dit niet te willen. De chauffeur moet het altijd aanbieden!'
    }
  },
  {
    id: 'sleep-04',
    type: 'matching',
    title: 'Kinderzitjes & Gordelregels (RVV 1990 Uitzondering Taxi)',
    instruction: 'Koppel het passagierstype aan de wettelijk voorgeschreven zit- en gordelregel in een taxi.',
    englishInstruction: 'Match passenger type to the legally prescribed seatbelt/restraint rule in a taxi.',
    arabicInstruction: 'طابق فئة الراكب مع القاعدة القانونية لأحزمة ومقاعد الأمان في التاكسي.',
    domain: 'gordelplicht',
    cbrExamFrequency: 'very_high',
    scenarioText: 'Een familie met kinderen bestelt een straattaxi zonder eigen kinderzitjes.',
    items: [
      {
        id: 'kind-baby',
        text: 'Baby onder de 3 jaar (geen kinderzitje aanwezig in taxi)',
        englishText: 'Baby under 3 years (no child seat present in taxi)',
        arabicText: 'رضيع تحت سن 3 سنوات (لا يتوفر مقعد أطفال بالتاكسي)'
      },
      {
        id: 'kind-ouder',
        text: 'Kind van 3 jaar of ouder, kleiner dan 1,35 meter',
        englishText: 'Child aged 3 or older, shorter than 1.35 meters',
        arabicText: 'طفل بعمر 3 سنوات أو أكثر، طوله أقل من 1.35 متر'
      },
      {
        id: 'kind-voorin',
        text: 'Kind van 8 jaar op de voorste passagiersstoel',
        englishText: 'Child aged 8 on the front passenger seat',
        arabicText: 'طفل بعمر 8 سنوات في المقعد الأمامي بجانب السائق'
      },
      {
        id: 'volwassen-zwanger',
        text: 'Zwangere volwassen passagier',
        englishText: 'Pregnant adult passenger',
        arabicText: 'راكبة بالغة حامل'
      }
    ],
    slots: [
      {
        id: 'slot-achter-los',
        title: 'Mag op de achterbank ZONDER kinderzitje (NIET voorin!)',
        englishTitle: 'Allowed on rear seat WITHOUT child seat (NOT in front!)',
        arabicTitle: 'يسمح له بالجلوس في الخلف بدون مقعد أطفال خاص (ممنوع بالأمام!)',
        targetItemId: 'kind-baby'
      },
      {
        id: 'slot-achter-gordel',
        title: 'Moet achterin met de gewone driepuntsgordel (bij ontbreken kinderzitje)',
        englishTitle: 'Must sit in rear using standard seatbelt (if no booster available)',
        arabicTitle: 'يجب أن يجلس في الخلف باستخدام حزام الأمان العادي (عند عدم توفر مقعد معزز)',
        targetItemId: 'kind-ouder'
      },
      {
        id: 'slot-voor-eis',
        title: 'MOET verplicht in goedgekeurd kinderbeveiligingsmiddel (geschikt voor lengte)',
        englishTitle: 'MUST use an approved child restraint system suited for height',
        arabicTitle: 'يجب إلزامياً استخدام مقعد أطفال معتمد مناسب لطوله',
        targetItemId: 'kind-voorin'
      },
      {
        id: 'slot-gordel-altijd',
        title: 'Volledige gordelplicht (geen vrijstelling op grond van zwangerschap)',
        englishTitle: 'Mandatory seatbelt (no exemption for pregnancy)',
        arabicTitle: 'إلزام كامل بربط الحزام (لا يوجد إعفاء بسبب الحمل)',
        targetItemId: 'volwassen-zwanger'
      }
    ],
    correctSequenceIds: ['kind-baby', 'kind-ouder', 'kind-voorin', 'volwassen-zwanger'],
    explanation: {
      dutch: 'In taxi\'s geldt een wettelijke uitzondering (Art. 59 RVV): kinderen onder 3 jaar mogen los achterin als er geen kinderzitje is. Kinderen vanaf 3 jaar en <1,35m mogen achterin met de gewone gordel. MAAR VOORIN MOET elk kind <1,35m ALTIJD in een goedgekeurd kinderzitje! Zwangere vrouwen hebben géén vrijstelling.',
      english: 'Taxi exception (Art. 59 RVV): children < 3 may travel in rear without child seat if none available. Children 3+ and < 1.35m may use standard rear seatbelt. BUT IN THE FRONT SEAT, every child < 1.35m MUST use an approved child seat! Pregnancy does not exempt from seatbelt.',
      arabic: 'استثناء التاكسي (المادة 59 RVV): الأطفال أقل من 3 سنوات يمكنهم الركوب في المقعد الخلفي بدون مقعد خاص إذا لم يتوفر. الأطفال من 3 سنوات وأقل من 1.35م يجلسون بالخلف بالحزام العادي. لكن في المقعد الأمامي: أي طفل أقل من 1.35م يجب إلزامياً أن يجلس في مقعد أطفال معتمد! والحمل لا يعفي من الحزام.',
      legalBasis: 'Art. 59 Reglement verkeersregels en verkeerstekens 1990 (RVV 1990)',
      examTip: 'CBR top-instinker: Een kind mag NOOIT voorin zitten zonder passend kinderzitje, ook niet in een taxi!'
    }
  },
  {
    id: 'sleep-05',
    type: 'sequence',
    title: 'Arbeidstijdenbesluit (ATBv) — Rijtijden & Verplichte Pauzes',
    instruction: 'Plaats de wettelijke rijtijd- en pauzestappen van een werkdag in chronologische volgorde.',
    englishInstruction: 'Place the statutory driving time and break sequence of a work day in order.',
    arabicInstruction: 'رتب فترات القيادة والاستراحات الإلزامية ليوم العمل وفق قانون ساعات العمل بالترتيب.',
    domain: 'atbv',
    cbrExamFrequency: 'high',
    scenarioText: 'Een taxichauffeur start om 08:00 uur \'s ochtends aan een drukke dagdienst.',
    items: [
      {
        id: 'atb-1',
        text: 'Aaneengesloten rijtijd van maximaal 4,5 uur (4 uur en 30 minuten)',
        englishText: 'Continuous driving period of maximum 4.5 hours',
        arabicText: 'قيادة متواصلة لمدة أقصاها 4.5 ساعات (4 ساعات ونصف)',
        icon: '⏱️'
      },
      {
        id: 'atb-2',
        text: 'Onderbreking met verplichte pauze van minimaal 45 minuten (of 15 + 30 min)',
        englishText: 'Mandatory break of at least 45 minutes (or 15 + 30 min)',
        arabicText: 'استراحة إلزامية لا تقل عن 45 دقيقة (أو مقسمة 15 + 30 دقيقة)',
        icon: '☕'
      },
      {
        id: 'atb-3',
        text: 'Tweede rijperiode tot maximale dagelijkse rijtijd van 9 uur (2x per week 10u)',
        englishText: 'Second driving period up to daily limit of 9 hours (2x per week 10h)',
        arabicText: 'فترة قيادة ثانية حتى حد يومي أقصاه 9 ساعات (مرتين أسبوعياً 10 ساعات)',
        icon: '🛣️'
      },
      {
        id: 'atb-4',
        text: 'Afmelden op BCT en aanvang reguliere dagelijkse rust van minimaal 11 uur',
        englishText: 'Log off BCT and commence regular daily rest of at least 11 hours',
        arabicText: 'تسجيل الخروج من الجهاز وبدء الراحة اليومية الإلزامية (11 ساعة متواصلة)',
        icon: '🛌'
      }
    ],
    correctSequenceIds: ['atb-1', 'atb-2', 'atb-3', 'atb-4'],
    explanation: {
      dutch: 'Volgens het Arbeidstijdenbesluit vervoer (ATBv) mag je maximaal 4,5 uur ononderbroken rijden. Daarna volgt een pauze van minimaal 45 minuten (mag ook eerst 15 en later 30 min zijn, NOOIT andersom!). Dagelijkse rijtijd is max 9 uur en de reguliere rusttijd bedraagt 11 uur per 24-uursperiode.',
      english: 'Under ATBv: max 4.5h continuous driving followed by at least 45m break (split only as 15m then 30m, never reversed). Max 9h daily driving and 11h daily rest.',
      arabic: 'وفق قانون ATBv: أقصى مدة قيادة متواصلة 4.5 ساعات تليها استراحة 45 دقيقة (يمكن تجزئتها 15 ثم 30 دقيقة، وليس العكس أبداً!). الحد اليومي للقيادة 9 ساعات والراحة اليومية 11 ساعة.',
      legalBasis: 'Arbeidstijdenbesluit vervoer (ATBv) Hoofdstuk 2',
      examTip: 'Een pauze van 45 minuten mag gesplitst worden in 15 minuten gevolgd door 30 minuten. Let op: 30 minuten eerst en daarna 15 minuten is WETTELIJK ONGELDIG!'
    }
  },
  {
    id: 'sleep-06',
    type: 'sequence',
    title: 'Voorrangsvoertuigen & Verkeersregels Prioriteit',
    instruction: 'Plaats de verkeersdeelnemers en tekens in de wettelijke volgorde van voorrang / gezag (hoogste gezag bovenaan).',
    englishInstruction: 'Order traffic participants and signals by legal authority (highest authority at the top).',
    arabicInstruction: 'رتب إشارات ومستخدمي الطريق حسب الأولوية والسلطة القانونية (الأعلى سلطة في البداية).',
    domain: 'casus',
    cbrExamFrequency: 'high',
    scenarioText: 'Je nadert een druk kruispunt in het centrum van Amsterdam met verkeerslichten en politie ter plaatse.',
    items: [
      {
        id: 'prio-1',
        text: 'Aanwijzingen van bevoegde ambtenaren (Verkeersregelaar / Politie)',
        englishText: 'Instructions of authorized officers (Traffic warden / Police)',
        arabicText: 'تعليمات وإشارات رجال المرور والشرطة المعتمدين',
        icon: '👮'
      },
      {
        id: 'prio-2',
        text: 'Voorrangsvoertuig met optische én geluidssignalen (Blauw zwaailicht + Tweetonige hoorn)',
        englishText: 'Priority vehicle with optical AND sound signals (Blue lights + Siren)',
        arabicText: 'مركبات الطوارئ المشغلة للضوء الأزرق وصفارة الإنذار معاً',
        icon: '🚑'
      },
      {
        id: 'prio-3',
        text: 'Verkeerslichten (driekleurige lichten & tramsignalen)',
        englishText: 'Traffic lights (three-color signals & tram signals)',
        arabicText: 'إشارات المرور الضوئية',
        icon: '🚦'
      },
      {
        id: 'prio-4',
        text: 'Verkeersborden en wegmarkeringen (haaientanden, voorrangsweg)',
        englishText: 'Traffic signs and road markings (shark teeth, priority road)',
        arabicText: 'شاخصات وعلامات الطريق (أسنان القرش، طريق ذو أولوية)',
        icon: '🛑'
      },
      {
        id: 'prio-5',
        text: 'Algemene verkeersregels (Rechts gaat voor, rechtdoorgaand verkeer op dezelfde weg)',
        englishText: 'General traffic rules (Give way to right, straight-on on same road)',
        arabicText: 'قواعد المرور العامة (الأولوية لليمين، السير للأمام على نفس الطريق)',
        icon: '➡️'
      }
    ],
    correctSequenceIds: ['prio-1', 'prio-2', 'prio-3', 'prio-4', 'prio-5'],
    explanation: {
      dutch: 'De wettelijke hiërarchie van verkeerstekens is: 1. Aanwijzingen van politie/verkeersregelaars gaan boven ALLES. 2. Voorrangsvoertuigen hebben altijd vrije doorgang. 3. Verkeerslichten gaan boven borden. 4. Borden gaan boven verkeersregels.',
      english: 'Legal traffic hierarchy: 1. Police/officer instructions supersede all. 2. Priority emergency vehicles have right of way. 3. Traffic lights supersede signs. 4. Signs supersede basic rules (right-hand priority).',
      arabic: 'التسلسل الهرمي القانوني: 1. تعليمات الشرطة ورجال المرور تلغي كل شيء. 2. مركبات الطوارئ لها الأولوية التامة. 3. الإشارات الضوئية تعلو الشاخصات. 4. الشاخصات تعلو القواعد العامة (الأولوية لليمين).',
      legalBasis: 'Art. 63 en Art. 84 RVV 1990',
      examTip: 'Brandweer of ambulance ZONDER sirene (alleen blauw licht) is GEEN voorrangsvoertuig in juridische zin; zij moeten zich aan de gewone regels houden!'
    }
  },
  {
    id: 'sleep-07',
    type: 'sequence',
    title: 'Voorrang op Gelijkwaardig Kruispunt (Wie gaat eerst?)',
    instruction: 'Plaats de verkeersdeelnemers in de juiste volgorde van afhandeling (wie mag als eerste vertrekken?).',
    englishInstruction: 'Order the traffic participants by right of way at an unregulated intersection (who departs first?).',
    arabicInstruction: 'رتب مستخدمي الطريق حسب أولوية المرور في تقاطع متكافئ (من ينطلق أولاً؟).',
    domain: 'casus',
    cbrExamFrequency: 'very_high',
    scenarioText: 'Je rijdt in een taxi en nadert een gelijkwaardig kruispunt. Situatie: Er steekt een voetganger over op een zebrapad, er nadert een tram van links die rechtdoor wil, van rechts komt een fietser, en jij wilt linksaf slaan.',
    items: [
      {
        id: 'vw-1',
        text: '1. Voetganger op het voetgangersoversteekplaats (VOP / Zebrapad)',
        englishText: '1. Pedestrian on pedestrian crossing (zebra crossing)',
        arabicText: '1. المشاة على ممر المشاة (خطوط الحمار الوحشي)',
        icon: '🚶'
      },
      {
        id: 'vw-2',
        text: '2. Tram die van links nadert en rechtdoor rijdt',
        englishText: '2. Tram approaching from the left proceeding straight',
        arabicText: '2. الترام القادم من اليسار والمتابع للأمام',
        icon: '🚋'
      },
      {
        id: 'vw-3',
        text: '3. Fietser die van rechts nadert (rechtdoor op kruispunt)',
        englishText: '3. Cyclist approaching from the right going straight',
        arabicText: '3. راكب دراجة قادم من اليمين ويسير للأمام',
        icon: '🚴'
      },
      {
        id: 'vw-4',
        text: '4. Taxichauffeur die linksaf slaat (kruisend verkeer voorlaten)',
        englishText: '4. Taxi turning left (yielding to oncoming traffic)',
        arabicText: '4. سائق التاكسي المنعطف يساراً (يجب أن ينتظر حركة المرور المتقاطعة)',
        icon: '🚕'
      }
    ],
    correctSequenceIds: ['vw-1', 'vw-2', 'vw-3', 'vw-4'],
    explanation: {
      dutch: '1. Voetgangers op een zebrapad hebben altijd absolute voorrang. 2. Op gelijkwaardige kruispunten gaat een tram ALTIJD voor, ongeacht of hij van links of rechts komt (Art. 15 lid 2 RVV). 3. Bestuurders van rechts gaan voor (de fietser is een bestuurder!). 4. Bestuurders die linksaf slaan moeten tegemoetkomend en kruisend verkeer voor laten gaan.',
      english: '1. Pedestrians on a zebra crossing have absolute priority. 2. Trams ALWAYS have priority on unregulated intersections, even from the left! 3. Drivers from the right (cyclist) go next. 4. Turning left yields last.',
      arabic: '1. المشاة على ممر المشاة لهم أولوية مطلقة. 2. الترام له الأولوية دائماً في التقاطعات المتكافئة حتى لو أتى من اليسار! 3. القادم من اليمين (الدراجة تُعتبر مركبة). 4. المنعطف يساراً ينتظر الجميع.',
      legalBasis: 'Art. 15, 18 en 49 RVV 1990',
      examTip: 'Grote CBR valkuil: Een tram heeft op een gelijkwaardige weg ALTIJD voorrang, ook als de tram van LINKS komt!'
    }
  },
  {
    id: 'sleep-08',
    type: 'matching',
    title: 'Wettelijke Maximumsnelheden per Wegtype (RVV 1990)',
    instruction: 'Koppel elk type weg of zone aan de wettelijke standaardsnelheid voor personenauto\'s en taxi\'s.',
    englishInstruction: 'Match each road type or zone to the statutory standard speed limit.',
    arabicInstruction: 'طابق كل نوع طريق أو منطقة مع السرعة القصوى القانونية المحددة للسيارات والتاكسي.',
    domain: 'casus',
    cbrExamFrequency: 'very_high',
    scenarioText: 'Tijdens je ritten rijd je door verschillende zones in en rondom de stad.',
    items: [
      {
        id: 'snel-15',
        text: '15 km/u (Stapvoets rijden)',
        englishText: '15 km/h (Walking pace)',
        arabicText: '15 كم/س (سرعة المشي)'
      },
      {
        id: 'snel-50',
        text: '50 km/u (Standaard binnen de bebouwde kom)',
        englishText: '50 km/h (Standard inside built-up areas)',
        arabicText: '50 كم/س (المعيار داخل المناطق السكنية)'
      },
      {
        id: 'snel-80',
        text: '80 km/u (Standaard buiten de bebouwde kom)',
        englishText: '80 km/h (Standard outside built-up areas)',
        arabicText: '80 كم/س (المعيار خارج المناطق السكنية)'
      },
      {
        id: 'snel-100',
        text: '100 km/u (Autoweg & Autosnelweg overdag 06:00 - 19:00)',
        englishText: '100 km/h (Motorway & Expressway daytime 06:00 - 19:00)',
        arabicText: '100 كم/س (الطرق السريعة نهاراً 06:00 - 19:00)'
      }
    ],
    slots: [
      {
        id: 'slot-erf',
        title: 'Bord G5 (Woonerf / Erf)',
        englishTitle: 'Sign G5 (Living street / Home zone)',
        arabicTitle: 'شاخصة G5 (منطقة سكنية هادئة Erf)',
        targetItemId: 'snel-15'
      },
      {
        id: 'slot-stad',
        title: 'Bord H1 (Bebouwde kom begin)',
        englishTitle: 'Sign H1 (Built-up area entrance)',
        arabicTitle: 'شاخصة H1 (بداية المنطقة الحضرية)',
        targetItemId: 'snel-50'
      },
      {
        id: 'slot-buiten',
        title: 'Bord H2 (Einde bebouwde kom / Provinciale weg)',
        englishTitle: 'Sign H2 (End of built-up area / Provincial road)',
        arabicTitle: 'شاخصة H2 (نهاية المنطقة الحضرية / طريق ريفي)',
        targetItemId: 'snel-80'
      },
      {
        id: 'slot-snelweg',
        title: 'Bord G1 (Autosnelweg A-weg overdag tussen 06:00 en 19:00 uur)',
        englishTitle: 'Sign G1 (Motorway daytime 06:00 to 19:00 hrs)',
        arabicTitle: 'شاخصة G1 (طريق سريع A-weg نهاراً بين 06:00 و 19:00)',
        targetItemId: 'snel-100'
      }
    ],
    correctSequenceIds: ['snel-15', 'snel-50', 'snel-80', 'snel-100'],
    explanation: {
      dutch: 'Binnen een erf is de max snelheid 15 km/u (stapvoets). Binnen de bebouwde kom geldt 50 km/u (tenzij bord 30). Buiten de bebouwde kom geldt 80 km/u. Op autosnelwegen geldt overdag (06:00 - 19:00) 100 km/u en \'s avonds (19:00 - 06:00) max 130 km/u.',
      english: 'Home zones are strictly 15 km/h. Built-up area default is 50 km/h. Outside built-up area is 80 km/h. Motorways daytime is 100 km/h.',
      arabic: 'منطقة Erf سرعتها القصوى 15 كم/س. داخل المدينة 50 كم/س (ما لم تكن منطقة 30). خارج المدينة 80 كم/س. على الطرق السريعة نهاراً (06:00 - 19:00) السرعة 100 كم/س.',
      legalBasis: 'Art. 20, 21 en 45 RVV 1990',
      examTip: 'CBR vraagt vaak naar de tijdvensters op de snelweg: overdag (06:00 - 19:00) is 100 km/u ALTIJD het maximum, ongeacht het aantal rijstroken!'
    }
  },
  {
    id: 'sleep-09',
    type: 'matching',
    title: 'Busbanen & Vrijstellingen voor Taxivervoer',
    instruction: 'Koppel de verkeerssituatie aan de juiste verkeersregel voor taxichauffeurs.',
    englishInstruction: 'Match traffic situation to the applicable traffic rule for taxi drivers.',
    arabicInstruction: 'طابق الموقف المروري مع القاعدة المطبقة على سائق التاكسي.',
    domain: 'transport',
    cbrExamFrequency: 'high',
    scenarioText: 'In grote steden zoals Amsterdam, Rotterdam en Den Haag liggen speciale bus- en doelgroepenstroken.',
    items: [
      {
        id: 'regel-vrij',
        text: 'Toegestaan MITS voorzien van geldige gemeentelijke busbaanontheffing en boordcomputer',
        englishText: 'Allowed PROVIDED driver holds municipal exemption and valid BCT',
        arabicText: 'مسموح بشرط توفر تصريح البلدية الخاص بالتاكسي وجهاز BCT'
      },
      {
        id: 'regel-verboden',
        text: 'STRENG VERBODEN (alleen voor bussen volgens de dienstregeling)',
        englishText: 'STRICTLY FORBIDDEN (scheduled public transport buses only)',
        arabicText: 'ممنوع منعاً باتاً (مخصص فقط لحافلات النقل العام المجدولة)'
      },
      {
        id: 'regel-stoppen',
        text: 'Verboden stil te staan of passagiers in of uit te laten stappen',
        englishText: 'Prohibited to stop or embark/disembark passengers',
        arabicText: 'ممنوع التوقف أو تحميل وإنزال الركاب نهائياً'
      },
      {
        id: 'regel-spits',
        text: 'Alleen geopend bij geactiveerd groen pijlbord / signalering boven de weg',
        englishText: 'Only open when green arrow gantry signal is active',
        arabicText: 'يفتح فقط عندما تكون الإشارة الإلكترونية الخضراء مفعلة'
      }
    ],
    slots: [
      {
        id: 'slot-lijnbus',
        title: 'Busstrook met markering "BUS" én onderbord "Taxi"',
        englishTitle: 'Bus lane marked "BUS" with additional sign "Taxi"',
        arabicTitle: 'مسار حافلات عليه كلمة BUS مع لوحة إضافية Taxi',
        targetItemId: 'regel-vrij'
      },
      {
        id: 'slot-alleen-lijn',
        title: 'Busstrook met markering "LIJNBUS" (zonder vermelding taxi)',
        englishTitle: 'Bus lane marked "LIJNBUS" (without taxi mention)',
        arabicTitle: 'مسار حافلات عليه كلمة LIJNBUS فقط (بدون ذكر تاكسي)',
        targetItemId: 'regel-verboden'
      },
      {
        id: 'slot-halte',
        title: 'Langs een geblokte markering bij een officiële bushalte',
        englishTitle: 'Along a checkered bus stop road marking',
        arabicTitle: 'بمحاذاة الخطوط المتعرجة في مواقف الحافلات الرسمية',
        targetItemId: 'regel-stoppen'
      },
      {
        id: 'slot-spitsstrook',
        title: 'Spitsstrook op de autosnelweg (vluchtstrook als extra rijstrook)',
        englishTitle: 'Rush hour hard shoulder lane on motorway',
        arabicTitle: 'مسار ساعات الذروة Spitsstrook على الطريق السريع',
        targetItemId: 'regel-spits'
      }
    ],
    correctSequenceIds: ['regel-vrij', 'regel-verboden', 'regel-stoppen', 'regel-spits'],
    explanation: {
      dutch: 'Een taxi mag alleen op een busbaan rijden als het woord "BUS" is geverfd EN er een ontheffing / onderbord "Taxi" aanwezig is. Het woord "LIJNBUS" betekent uitsluitend openbaar vervoer volgens dienstregeling: een taxi mag daar NOOIT op, ook niet met ontheffing! Stoppen bij een bushalte (geblokte markering) mag alleen om DIRECT passagiers te laten in- of uitstappen mits de bus niet wordt gehinderd.',
      english: 'Marking "BUS" + taxi exemption allows driving. Marking "LIJNBUS" is strictly for timetable transit buses; taxis are NEVER allowed on LIJNBUS lanes! Stopping at bus stops is restricted.',
      arabic: 'المسار المكتوب عليه BUS يسمح للتاكسي إذا كان معه تصريح ولوحة Taxi. أما المسار المكتوب عليه LIJNBUS فهو حصري للباصات العامة المجدولة ويُحظر على التاكسي دخوله نهائياً! التوقف عند مواقف الباص مسموح فقط للإنزال أو الركوب الفوري دون إعاقة الحافلة.',
      legalBasis: 'Art. 81 RVV 1990 & Gemeentelijke Taxi-verordeningen',
      examTip: 'CBR strikvraag: Het cruciale verschil tussen "BUS" en "LIJNBUS". Taxi\'s mogen NOOIT op een LIJNBUS-strook!'
    }
  },
  {
    id: 'sleep-10',
    type: 'sequence',
    title: 'Volgorde van de Stopafstand (Reactie + Remweg)',
    instruction: 'Plaats de componenten van het remproces in de chronologische volgorde vanaf het waarnemen van gevaar tot stilstand.',
    englishInstruction: 'Order the braking components chronologically from hazard perception to complete stop.',
    arabicInstruction: 'رتب مراحل التوقف وفق التسلسل الزمني من لحظة ملاحظة الخطر حتى التوقف التام.',
    domain: 'casus',
    cbrExamFrequency: 'high',
    scenarioText: 'Je rijdt 80 km/u op een natte provinciale weg en plotseling remt je voorligger hard.',
    items: [
      {
        id: 'rem-1',
        text: '1. Waarnemen van het gevaar en beslissen om te remmen (Zintuiglijke verwerking)',
        englishText: '1. Perceive hazard and decide to brake (sensory processing)',
        arabicText: '1. إدراك الخطر واتخاذ قرار الضغط على الفرامل',
        icon: '👀'
      },
      {
        id: 'rem-2',
        text: '2. Reactietijd (gemiddeld 1 seconde, auto rolt op volle snelheid door)',
        englishText: '2. Reaction time (average 1 second, car rolls at full speed)',
        arabicText: '2. زمن رد الفعل (حوالي ثانية واحدة، تسير فيها السيارة بنفس سرعتها)',
        icon: '⏳'
      },
      {
        id: 'rem-3',
        text: '3. Reactieweg afleggen (bij 80 km/u rolt de taxi circa 24 meter door)',
        englishText: '3. Reaction distance covered (at 80 km/h approx 24 meters)',
        arabicText: '3. مسافة رد الفعل (تقطع السيارة عند سرعة 80 كم/س حوالي 24 متراً)',
        icon: '📏'
      },
      {
        id: 'rem-4',
        text: '4. Remweg (mechanische vertraging via remsysteem en bandengrip op wegdek)',
        englishText: '4. Braking distance (mechanical deceleration & tire grip on surface)',
        arabicText: '4. مسافة الفرملة الفعلية (الاحتكاك بين الإطارات والطريق)',
        icon: '🛑'
      },
      {
        id: 'rem-5',
        text: '5. Totale Stopafstand bereikt (Stopafstand = Reactieweg + Remweg)',
        englishText: '5. Total stopping distance reached (Stopping = Reaction + Braking)',
        arabicText: '5. الوصول لنقطة التوقف التام (مسافة التوقف = رد الفعل + الفرملة)',
        icon: '🏁'
      }
    ],
    correctSequenceIds: ['rem-1', 'rem-2', 'rem-3', 'rem-4', 'rem-5'],
    explanation: {
      dutch: 'Stopafstand is de som van Reactieweg en Remweg: Stopafstand = Reactieweg + Remweg. Bij een snelheid van 80 km/u leg je in 1 seconde reactietijd (80 / 10 x 3) = 24 meter af vóórdat je voet zelfs de rem raakt! Op nat wegdek is de remweg aanzienlijk langer.',
      english: 'Total stopping distance = Reaction distance + Braking distance. At 80 km/h, 1-second reaction distance is ~24 meters before braking even begins.',
      arabic: 'مسافة التوقف الإجمالية = مسافة رد الفعل + مسافة الفرملة. عند سرعة 80 كم/س، تقطع السيارة في ثانية واحدة (80 ÷ 10 × 3 = 24 متراً) قبل أن تلمس قدمك الفرامل!',
      legalBasis: 'Art. 19 RVV 1990 (Bestuurder moet in staat zijn voertuig tot stilstand te brengen binnen de afstand die hij kan overzien)',
      examTip: 'Vuistregel reactieweg: (Snelheid / 10) x 3. Bij 50 km/u = 15m. Bij 80 km/u = 24m. Bij 100 km/u = 30m.'
    }
  }
];
