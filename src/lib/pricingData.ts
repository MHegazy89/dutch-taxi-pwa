export interface PricingTier {
  id: string;
  name: string;
  nameAr: string;
  duration: string;
  durationAr: string;
  price: string;
  originalPrice: string;
  badge?: string;
  badgeAr?: string;
  highlight?: boolean;
  features: { nl: string; en: string; ar: string }[];
  targetAudience: { nl: string; en: string; ar: string };
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'sprint',
    name: '3-Weken Sprint Pas',
    nameAr: 'باقة الـ 3 أسابيع المكثفة',
    duration: '3 weken onbeperkt',
    durationAr: '3 أسابيع وصول غير محدود',
    price: '€ 69,-',
    originalPrice: '€ 99,-',
    features: [
      {
        nl: 'Toegang tot alle 40+ CBR proefexamenvragen',
        en: 'Access to all 40+ CBR mock exam questions',
        ar: 'الوصول لكافة أسئلة الامتحانات التجريبية'
      },
      {
        nl: '86 Diepgaande TVT Flitskaarten met Leitner SRS',
        en: '86 In-depth TVT Flashcards with Leitner SRS',
        ar: '86 بطاقة ذكية مع نظام التكرار المتباعد'
      },
      {
        nl: 'Alle officiële CBR Sleepvragen (drag & drop)',
        en: 'All official CBR Drag-and-Drop questions',
        ar: 'كافة أسئلة السحب والترتيب الرسمية'
      },
      {
        nl: 'A0 Engels & Arabisch taalondersteuning',
        en: 'A0 English & Arabic bilingual support',
        ar: 'دعم كامل باللغتين الإنجليزية والعربية A0'
      }
    ],
    targetAudience: {
      nl: 'Ideaal voor kandidaten met hun CBR examen binnen 1 maand.',
      en: 'Ideal for candidates with an exam scheduled within 1 month.',
      ar: 'مثالية لمن اقترب موعد امتحانه خلال شهر.'
    }
  },
  {
    id: 'complete',
    name: '8-Weken Succesgarantie Pas',
    nameAr: 'باقة الـ 8 أسابيع (ضمان النجاح)',
    duration: '8 weken onbeperkt',
    durationAr: '8 أسابيع وصول شامل',
    price: '€ 119,-',
    originalPrice: '€ 169,-',
    badge: 'Meest Gekozen',
    badgeAr: 'الأكثر اختياراً',
    highlight: true,
    features: [
      {
        nl: 'Alles uit het Sprint-pakket',
        en: 'Everything in Sprint package',
        ar: 'كل ميزات باقة الـ 3 أسابيع'
      },
      {
        nl: 'CBR Praktijk Gesprekstutor (70 zinnen in 7 ritfases)',
        en: 'CBR Practical Dialogue Tutor (70 phrases in 7 ride phases)',
        ar: 'مرشد محادثة الفحص العملي (70 عبارة في 7 مراحل)'
      },
      {
        nl: 'Politie & Handhaving roadside stop scenario\'s',
        en: 'Police & ILT roadside inspection scenarios',
        ar: 'محاكاة تفتيش الشرطة ومفتشي النقل ILT'
      },
      {
        nl: 'Compound Slicer (55+ juridische begrippen)',
        en: 'Compound Slicer (55+ legal compound terms)',
        ar: 'مفكك الكلمات القانونية المركبة (55+ مصطلح)'
      },
      {
        nl: 'Offline Android App toegang zonder internet',
        en: 'Offline Android APK access without internet',
        ar: 'تطبيق أندرويد يعمل بالكامل بدون إنترنت'
      }
    ],
    targetAudience: {
      nl: 'Dé aanbevolen voorbereiding voor theorie én praktijkexamens.',
      en: 'The recommended prep for both Theory and Practical exams.',
      ar: 'الباقة الشاملة الموصى بها لاجتياز النظري والعملي معاً.'
    }
  },
  {
    id: 'vip',
    name: 'VIP All-Inclusive & Coaching',
    nameAr: 'باقة VIP الشاملة والتدريب الصوتي',
    duration: '16 weken / Volledige licentie',
    durationAr: '16 أسبوعاً حتى النجاح',
    price: '€ 149,-',
    originalPrice: '€ 229,-',
    badge: '100% Examen Garantie',
    badgeAr: 'ضمان النجاح 100%',
    features: [
      {
        nl: 'Alles uit de Succesgarantie Pas',
        en: 'Everything in Complete Pass',
        ar: 'كل ميزات باقة النجاح'
      },
      {
        nl: 'Nederlandse Audio Spraakgids voor alle zinnen',
        en: 'Dutch Native Audio pronunciation for all phrases',
        ar: 'نطق صوتي هولندي رسمي لجميع العبارات'
      },
      {
        nl: 'Ongelimiteerde proefexamens met CBR slagingsnorm (32/40)',
        en: 'Unlimited timed mock exams with official pass mark (32/40)',
        ar: 'امتحانات تجريبية غير محدودة بمعايير CBR الرسمية'
      },
      {
        nl: 'Levenslange updates van CBR regels (2025/2026)',
        en: 'Lifetime updates for future CBR regulatory changes',
        ar: 'تحديثات مجانية مستمرة لأي تغيير في قوانين CBR'
      },
      {
        nl: 'Geld-terug-garantie indien gezakt (zie voorwaarden)',
        en: 'Money-back guarantee if failed (terms apply)',
        ar: 'ضمان استرداد الرسوم عند الرسوب (وفق الشروط)'
      }
    ],
    targetAudience: {
      nl: 'Voor de serieuze beroepschauffeur die in 1 keer wil slagen.',
      en: 'For the serious professional who demands first-time success.',
      ar: 'للسائق المحترف المصمم على النجاح من المحاولة الأولى.'
    }
  }
];

export const COMPARISON_POINTS = [
  {
    feature: 'CBR Praktijkexamen Gesprekken & Politie Controle',
    traditional: '❌ Niet inbegrepen',
    taximaster: '✅ 70 zinnen + 6 interactieve simulaties'
  },
  {
    feature: 'A0 Ondersteuning (Engels & Arabisch)',
    traditional: '❌ Alleen moeilijk Nederlands',
    taximaster: '✅ Volledig tweetalig A0 scaffolding'
  },
  {
    feature: 'CBR Sleepvragen (Drag & Drop)',
    traditional: '⚠️ Slechts standaard meerkeuze',
    taximaster: '✅ Authentieke touch-geoptimaliseerde volgorde'
  },
  {
    feature: 'Offline Android App',
    traditional: '❌ Alleen website met login',
    taximaster: '✅ Snelle native Android APK'
  }
];
