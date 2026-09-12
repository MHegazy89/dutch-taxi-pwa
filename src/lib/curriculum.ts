import { PracticeQWithOptions, Vocab, Flashcard, Grammar } from '@/types/db';

export interface CurriculumData {
  vocab: Vocab[];
  grammar: Grammar[];
  questions: PracticeQWithOptions[];
  flashcards: Flashcard[];
}

export const CURRICULUM_DATA: CurriculumData = {
  vocab: [
    {
      id: 1,
      dutch_term: "Arbeidstijdenbesluit",
      root_decomposition: "Arbeids|tijden|besluit",
      literal_english: "Labor times decree",
      legal_meaning: "The statutory Dutch law governing maximum driving hours, work shifts, and mandatory rest periods for taxi drivers.",
      exam_frequency: "high"
    },
    {
      id: 2,
      dutch_term: "Boordcomputertaxi",
      root_decomposition: "Boord|computer|taxi",
      literal_english: "Onboard computer taxi (BCT)",
      legal_meaning: "Mandatory digital recording device in every Dutch licensed taxi registering driving times, breaks, speeds, and trips.",
      exam_frequency: "high"
    },
    {
      id: 3,
      dutch_term: "Gordelplicht",
      root_decomposition: "Gordel|plicht",
      literal_english: "Seatbelt obligation",
      legal_meaning: "The legal duty to wear seatbelts. The driver is responsible for passengers under 12 years (and <1.35m); passengers 12+ are individually liable.",
      exam_frequency: "high"
    },
    {
      id: 4,
      dutch_term: "Chauffeurskaart",
      root_decomposition: "Chauffeurs|kaart",
      literal_english: "Driver's card / Taxi pass",
      legal_meaning: "Personal digital chip card issued by Kiwa Register allowing a driver to log into the BCT/CDT and legally transport passengers.",
      exam_frequency: "high"
    },
    {
      id: 5,
      dutch_term: "PAMAN-protocol",
      root_decomposition: "PA|MAN|protocol",
      literal_english: "PAMAN protocol (Accident Steps)",
      legal_meaning: "Step-by-step emergency acronym: P=Plaats (Location/Safety), A=Aard (Nature), M=Meldkamer (Call 112), A=Aantal gewonden (Number of injured), N=Noodzakelijke hulp (Emergency aid).",
      exam_frequency: "high"
    },
    {
      id: 6,
      dutch_term: "De-escalatietechniek",
      root_decomposition: "De-escalatie|techniek",
      literal_english: "De-escalation technique",
      legal_meaning: "Calm, assertive verbal and non-verbal communication methods used to diffuse aggressive or intoxicated passengers without escalating conflict.",
      exam_frequency: "high"
    },
    {
      id: 7,
      dutch_term: "Straattaxi",
      root_decomposition: "Straat|taxi",
      literal_english: "Street hailed taxi",
      legal_meaning: "Consumer taxi flagged on the street or picked up at a taxi stand (standplaatstaxi). Must use taximeter and official maximum tariffs.",
      exam_frequency: "high"
    },
    {
      id: 8,
      dutch_term: "Contractvervoer",
      root_decomposition: "Contract|vervoer",
      literal_english: "Contract transport",
      legal_meaning: "Pre-booked passenger transport (e.g. school transport, healthcare/Valys transport) governed by fixed contract terms and fixed rates.",
      exam_frequency: "high"
    },
    {
      id: 9,
      dutch_term: "Maximumtarief",
      root_decomposition: "Maximum|tarief",
      literal_english: "Maximum tariff",
      legal_meaning: "Legally capped maximum fare rates established by the Dutch government (start rate + distance per km + time per minute).",
      exam_frequency: "high"
    },
    {
      id: 10,
      dutch_term: "Dagelijkserust",
      root_decomposition: "Dagelijkse|rust",
      literal_english: "Daily rest",
      legal_meaning: "The mandatory continuous rest period of at least 11 consecutive hours (reducible to 9 hours max 3 times a week) in a 24-hour cycle.",
      exam_frequency: "high"
    }
  ],
  grammar: [
    {
      id: 1,
      marker_type: "Modal",
      dutch_word: "Moet (Moeten)",
      impact: "Strict obligation (Must / Mandatory under law)."
    },
    {
      id: 2,
      marker_type: "Modal",
      dutch_word: "Mag (Mogen)",
      impact: "Legal permission (May / Allowed)."
    },
    {
      id: 3,
      marker_type: "Condition",
      dutch_word: "Tenzij",
      impact: "Unless / Except if (Key legal exemptions)."
    },
    {
      id: 4,
      marker_type: "Negation",
      dutch_word: "Niet / Geen / Verboden",
      impact: "Prohibition or negation (Forbidden / Not required)."
    }
  ],
  flashcards: [
    {
      id: 1,
      front_text: "Gordelplicht: Wie krijgt de boete als een passagier van 14 jaar geen gordel draagt?",
      back_text: "🇬🇧 Translation: Who gets fined if a 14yo doesn't wear a seatbelt?\n\n🇳🇱 De passagier van 14 jaar zelf!\nVanaf 12 jaar is de passagier zelfstandig aansprakelijk voor de gordelboete.",
      audio_path: null,
      vocab_refs: "[3]",
      last_review: null,
      ease: 2.5,
      interval: 1,
      next_due: null
    },
    {
      id: 2,
      front_text: "Arbeidstijdenbesluit: Wat is de maximale continue rijtijd?",
      back_text: "🇬🇧 Translation: What is maximum continuous driving time?\n\n🇳🇱 4,5 uur (4 uur en 30 minuten).\nDaarna is een pauze van minimaal 45 minuten verplicht (of 15 min + 30 min).",
      audio_path: null,
      vocab_refs: "[1]",
      last_review: null,
      ease: 2.5,
      interval: 1,
      next_due: null
    },
    {
      id: 3,
      front_text: "BCT Storing: Wat moet de chauffeur direct doen?",
      back_text: "🇬🇧 Translation: What must the driver do during BCT malfunction?\n\n🇳🇱 Direct handmatig overstappen op een papieren rittenstaat en de storing binnen de wettelijke termijn laten verhelpen.",
      audio_path: null,
      vocab_refs: "[2]",
      last_review: null,
      ease: 2.5,
      interval: 1,
      next_due: null
    },
    {
      id: 4,
      front_text: "PAMAN: Noem de 5 stappen in de juiste volgorde.",
      back_text: "🇬🇧 PAMAN Emergency Acronym:\n\nP = Plaats (Locatie & Eigen Veiligheid)\nA = Aard van het ongeval\nM = Meldkamer 112\nA = Aantal slachtoffers\nN = Noodzakelijke hulp",
      audio_path: null,
      vocab_refs: "[5]",
      last_review: null,
      ease: 2.5,
      interval: 1,
      next_due: null
    },
    {
      id: 5,
      front_text: "Standplaatstaxi: Mag je een korte rit weigeren?",
      back_text: "🇬🇧 Translation: May you refuse a short trip at a taxi stand?\n\n🇳🇱 NEE, NOOIT! Een chauffeur op een standplaats heeft een strikte vervoersplicht en mag korte ritten niet weigeren.",
      audio_path: null,
      vocab_refs: "[7]",
      last_review: null,
      ease: 2.5,
      interval: 1,
      next_due: null
    },
    {
      id: 6,
      front_text: "Hulphond: Mag je een blindengeleidehond weigeren?",
      back_text: "🇬🇧 Translation: May you refuse a guide dog?\n\n🇳🇱 NEE, NOOIT! Gecertificeerde hulphonden en blindengeleidehonden moeten altijd gratis en verplicht worden meegenomen (VN-verdrag).",
      audio_path: null,
      vocab_refs: "[6]",
      last_review: null,
      ease: 2.5,
      interval: 1,
      next_due: null
    },
    {
      id: 7,
      front_text: "Dagelijkse rust: Wat is de standaardduur?",
      back_text: "🇬🇧 Translation: What is the normal daily rest duration?\n\n🇳🇱 Minimaal 11 aaneengesloten uren binnen een periode van 24 uur (mag max 3x per week worden verkort naar 9 uur).",
      audio_path: null,
      vocab_refs: "[10]",
      last_review: null,
      ease: 2.5,
      interval: 1,
      next_due: null
    },
    {
      id: 8,
      front_text: "Alcoholgrens taxichauffeur: Wat is het maximum?",
      back_text: "🇬🇧 Translation: Maximum alcohol limit for taxi drivers?\n\n🇳🇱 0,2 promille. Voor beroepschauffeurs geldt een nultolerantiegrens van maximaal 0,2 promille.",
      audio_path: null,
      vocab_refs: "[6]",
      last_review: null,
      ease: 2.5,
      interval: 1,
      next_due: null
    }
  ],
  questions: [
    {
      id: 1,
      dutch_stem: "Een passagier van 14 jaar weigert de veiligheidsgordel om te doen op de achterbank. Wie is juridisch verantwoordelijk voor de boete?",
      english_breakdown: "A 14-year-old passenger refuses to wear a seatbelt on the rear seat. Who is legally responsible for the fine?",
      correct_option: 1,
      explanation: "Volgens de Nederlandse wet zijn passagiers van 12 jaar en ouder zelf verantwoordelijk voor het dragen van de gordel. De chauffeur is alleen verantwoordelijk voor kinderen onder de 12 jaar.",
      role_annotations: JSON.stringify([
        { text: "Een passagier van 14 jaar", role: "Actor" },
        { text: "weigert de veiligheidsgordel om te doen", role: "Condition" },
        { text: "Wie is juridisch verantwoordelijk", role: "Target" }
      ]),
      domain: "gordelplicht",
      options: [
        { id: 1, q_id: 1, option_text: "De taxichauffeur is altijd verantwoordelijk voor alle passagiers in het voertuig.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: The driver is only liable for children under 12 years old." },
        { id: 2, q_id: 1, option_text: "De passagier van 14 jaar is zelf verantwoordelijk en krijgt de boete.", is_correct: 1, trap_annotation: "🇬🇧 Correct: From 12 years and older, the passenger is independently liable." },
        { id: 3, q_id: 1, option_text: "De taxiondernemer van het taxibedrijf.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: The taxi company owner is not liable for individual passenger seatbelt choices." },
        { id: 4, q_id: 1, option_text: "Zowel de chauffeur als de passagier krijgen ieder de helft van het boetebedrag.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Dutch law does not split seatbelt fines 50/50." }
      ]
    },
    {
      id: 2,
      dutch_stem: "Mag een taxichauffeur tijdens het vervoer van een betalende klant de veiligheidsgordel losmaken?",
      english_breakdown: "May a taxi driver unfasten their seatbelt while transporting a paying passenger?",
      correct_option: 2,
      explanation: "Nee. De chauffeur moet tijdens een rit met betalende passagiers op de openbare weg altijd de veiligheidsgordel dragen.",
      role_annotations: JSON.stringify([
        { text: "Een taxichauffeur", role: "Actor" },
        { text: "tijdens het vervoer van een betalende klant", role: "Condition" },
        { text: "de veiligheidsgordel losmaken", role: "Obligation" }
      ]),
      domain: "gordelplicht",
      options: [
        { id: 5, q_id: 2, option_text: "Ja, taxichauffeurs hebben een algemene wettelijke vrijstelling van de gordelplicht.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: There is no general exemption during active paid passenger transport." },
        { id: 6, q_id: 2, option_text: "Ja, mits de snelheid onder de 50 km/u blijft binnen de bebouwde kom.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Speed under 50 km/h does not grant a seatbelt exemption." },
        { id: 7, q_id: 2, option_text: "Nee, tijdens het rijden met een klant moet de chauffeur altijd de gordel dragen.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Seatbelt is strictly mandatory while transporting passengers." },
        { id: 8, q_id: 2, option_text: "Alleen als de klant daarom expliciet vraagt.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Passenger preferences never override safety laws." }
      ]
    },
    {
      id: 3,
      dutch_stem: "Wat moet een taxichauffeur doen zodra de Boordcomputer Taxi (BCT) een storing aangeeft tijdens een dienst?",
      english_breakdown: "What must a taxi driver do as soon as the BCT indicates a malfunction during a shift?",
      correct_option: 0,
      explanation: "Bij een BCT-storing moet de chauffeur direct overschakelen op handmatige registratie via een rittenstaat en de storing laten herstellen.",
      role_annotations: JSON.stringify([
        { text: "Een taxichauffeur", role: "Actor" },
        { text: "zodra de BCT een storing aangeeft", role: "Condition" },
        { text: "moet direct overschakelen op rittenstaat", role: "Obligation" }
      ]),
      domain: "bcdt",
      options: [
        { id: 9, q_id: 3, option_text: "De rit handmatig noteren op een papieren rittenstaat en de storing zo snel mogelijk laten repareren.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Manual trip sheet (rittenstaat) is mandatory backup protocol." },
        { id: 10, q_id: 3, option_text: "Onmiddellijk de taxi aan de kant zetten en weigeren verder te rijden totdat de BCT herstart is.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: You do not have to strand passengers, provided you keep the manual log." },
        { id: 11, q_id: 3, option_text: "Gewoon doorrijden op de taximeter zonder enige administratieve notitie.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Driving without BCT and without rittenstaat is a severe violation." },
        { id: 12, q_id: 3, option_text: "De meldkamer van de politie bellen om een ontheffing aan te vragen.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Police cannot grant BCT exemptions." }
      ]
    },
    {
      id: 4,
      dutch_stem: "Welke kaart moet altijd in de BCT/CDT geplaatst zijn zodra er met de taxi wordt gereden?",
      english_breakdown: "Which card must always be inserted into the BCT/CDT whenever the taxi is being driven?",
      correct_option: 1,
      explanation: "De persoonlijke chauffeurskaart van de bestuurder moet te allen tijde ingevoerd zijn zodra de auto rijdt.",
      role_annotations: JSON.stringify([
        { text: "Welke kaart", role: "Target" },
        { text: "moet altijd in de BCT geplaatst zijn", role: "Obligation" },
        { text: "zodra er met de taxi wordt gereden", role: "Condition" }
      ]),
      domain: "bcdt",
      options: [
        { id: 13, q_id: 4, option_text: "De ondernemerskaart van de taxihouder.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: The company card is only for downloading fleet data at headquarters." },
        { id: 14, q_id: 4, option_text: "De persoonlijke chauffeurskaart van de actieve taxibestuurder.", is_correct: 1, trap_annotation: "🇬🇧 Correct: The driver's personal card records driving/rest time." },
        { id: 15, q_id: 4, option_text: "De inspectiekaart van de ILT.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Inspection cards are only inserted by government inspectors." },
        { id: 16, q_id: 4, option_text: "De bankpas van de klant.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Bank cards are for payment terminals, not BCT." }
      ]
    },
    {
      id: 5,
      dutch_stem: "Wat is volgens het Arbeidstijdenbesluit vervoer (ATBv) de maximale ononderbroken rijtijd voordat een pauze verplicht is?",
      english_breakdown: "According to the ATBv, what is the maximum continuous driving time before a mandatory break is required?",
      correct_option: 2,
      explanation: "Na maximaal 4,5 uur onafgebroken rijtijd moet de chauffeur een aaneengesloten pauze nemen van ten minste 45 minuten (of 15 min + 30 min split).",
      role_annotations: JSON.stringify([
        { text: "Volgens het Arbeidstijdenbesluit", role: "Condition" },
        { text: "maximale ononderbroken rijtijd", role: "Target" },
        { text: "is maximaal 4,5 uur", role: "Obligation" }
      ]),
      domain: "atbv",
      options: [
        { id: 17, q_id: 5, option_text: "2 uur", is_correct: 0, trap_annotation: "🇬🇧 Wrong: 2 hours is too short; not the statutory limit." },
        { id: 18, q_id: 5, option_text: "3,5 uur", is_correct: 0, trap_annotation: "🇬🇧 Wrong: 3.5 hours is a common misconception." },
        { id: 19, q_id: 5, option_text: "4,5 uur", is_correct: 1, trap_annotation: "🇬🇧 Correct: 4.5 hours is the strict Dutch/EU maximum continuous driving limit." },
        { id: 20, q_id: 5, option_text: "6 uur", is_correct: 0, trap_annotation: "🇬🇧 Wrong: 6 hours is the general work limit, not continuous driving." }
      ]
    },
    {
      id: 6,
      dutch_stem: "Hoeveel uur moet de normale dagelijkse rust minimaal bedragen binnen een periode van 24 uur?",
      english_breakdown: "How many hours must the normal daily rest period be within a 24-hour window?",
      correct_option: 0,
      explanation: "De standaard dagelijkse rusttijd bedraagt minimaal 11 aaneengesloten uren binnen elke periode van 24 uur.",
      role_annotations: JSON.stringify([
        { text: "De normale dagelijkse rust", role: "Target" },
        { text: "minimaal 11 aaneengesloten uren", role: "Obligation" },
        { text: "binnen een periode van 24 uur", role: "Condition" }
      ]),
      domain: "atbv",
      options: [
        { id: 21, q_id: 6, option_text: "Minimaal 11 aaneengesloten uren.", is_correct: 1, trap_annotation: "🇬🇧 Correct: 11 consecutive hours is standard statutory daily rest." },
        { id: 22, q_id: 6, option_text: "Minimaal 8 aaneengesloten uren.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: 8 hours is illegal and heavily fined." },
        { id: 23, q_id: 6, option_text: "Minimaal 9 aaneengesloten uren zonder uitzondering.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: 9 hours is reduced rest, allowed max 3x per week." },
        { id: 24, q_id: 6, option_text: "Minimaal 12 uren verspreid over de dag.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Rest must be uninterrupted." }
      ]
    },
    {
      id: 7,
      dutch_stem: "Wat betekent de letter 'P' in het PAMAN-ongevalprotocol?",
      english_breakdown: "What does the letter 'P' stand for in the PAMAN accident protocol?",
      correct_option: 3,
      explanation: "P staat voor Plaats (Locatie bepalen en beveiligen: hectometerpaal, straatnaam, gevarendriehoek / alarmlichten).",
      role_annotations: JSON.stringify([
        { text: "De letter P in PAMAN", role: "Target" },
        { text: "staat voor Plaats (locatie & eigen veiligheid)", role: "Obligation" }
      ]),
      domain: "paman",
      options: [
        { id: 25, q_id: 7, option_text: "Politie waarschuwen", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Contacting emergency services is under 'M' (Meldkamer)." },
        { id: 26, q_id: 7, option_text: "Passagiers evacueren", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Evacuation is not the primary step of P." },
        { id: 27, q_id: 7, option_text: "Patiënt reanimeren", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Medical aid is step 'N' (Noodzakelijke hulp)." },
        { id: 28, q_id: 7, option_text: "Plaats van het ongeval (veiligstellen en locatie vaststellen)", is_correct: 1, trap_annotation: "🇬🇧 Correct: P = Plaats (Secure the scene & determine exact position)." }
      ]
    },
    {
      id: 8,
      dutch_stem: "In welke volgorde moeten de stappen van het PAMAN-protocol worden uitgevoerd bij een ongeval?",
      english_breakdown: "In which order must the steps of the PAMAN protocol be executed at an accident?",
      correct_option: 1,
      explanation: "Volgorde: 1. Plaats, 2. Aard van het ongeval, 3. Meldkamer 112 bellen, 4. Aantal gewonden tellen, 5. Noodzakelijke hulp verlenen.",
      role_annotations: JSON.stringify([
        { text: "PAMAN protocol stappen", role: "Target" },
        { text: "Plaats -> Aard -> Meldkamer -> Aantal -> Noodzakelijke hulp", role: "Obligation" }
      ]),
      domain: "paman",
      options: [
        { id: 29, q_id: 8, option_text: "Patiënt verzorgen -> Ambulance bellen -> Politie bellen -> Auto verplaatsen", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Without securing safety (Plaats), you endanger yourself." },
        { id: 30, q_id: 8, option_text: "Plaats beveiligen -> Aard vaststellen -> Meldkamer 112 -> Aantal slachtoffers -> Noodzakelijke hulp", is_correct: 1, trap_annotation: "🇬🇧 Correct: Exact official PAMAN sequence required by CBR." },
        { id: 31, q_id: 8, option_text: "Meldkamer 112 bellen -> Plaats beveiligen -> Noodzakelijke hulp -> Aard vaststellen", is_correct: 0, trap_annotation: "🇬🇧 Wrong: You cannot give 112 details before checking Plaats & Aard." },
        { id: 32, q_id: 8, option_text: "Auto parkeren -> Schadeformulier invullen -> Passagiers tellen -> 112 bellen", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Accident report forms come last after first aid." }
      ]
    },
    {
      id: 9,
      dutch_stem: "Een klant stapt in bij een standplaats (straattaxi) en vraagt om een rit zonder vooraf een prijs af te spreken. Hoe moet het tarief berekend worden?",
      english_breakdown: "A customer enters at a taxi stand without a pre-agreed fare. How must the fare be calculated?",
      correct_option: 0,
      explanation: "Bij straattaxi's zonder vooraf afgesproken vaste prijs is de chauffeur wettelijk verplicht de taximeter direct in te schakelen.",
      role_annotations: JSON.stringify([
        { text: "Een klant bij een standplaats", role: "Actor" },
        { text: "zonder vooraf een vaste prijs", role: "Condition" },
        { text: "moet via de ingeschakelde taximeter", role: "Obligation" }
      ]),
      domain: "transport",
      options: [
        { id: 33, q_id: 9, option_text: "Uitsluitend via de officieel ingeschakelde en gecertificeerde taximeter.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Taximeter is legally mandatory for hailed street rides." },
        { id: 34, q_id: 9, option_text: "De chauffeur mag aan het einde van de rit zelf een redelijk bedrag schatten.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Estimating afterwards is strictly illegal." },
        { id: 35, q_id: 9, option_text: "De klant betaalt altijd het maximale dagtarief van de gemeente.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Fares are determined by distance & time on meter." },
        { id: 36, q_id: 9, option_text: "Er mag alleen contant worden afgerekend volgens een mondelinge afspraak.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Electronic payment (PIN/card) is mandatory." }
      ]
    },
    {
      id: 10,
      dutch_stem: "Wat is een kenmerkend verschil tussen 'Straattaxi' en 'Contractvervoer'?",
      english_breakdown: "What is a characteristic difference between Street Taxi and Contract Transport?",
      correct_option: 2,
      explanation: "Contractvervoer betreft van tevoren schriftelijk vastgelegde ritten (zoals leerlingen- of zorgvervoer) tegen vaste condities.",
      role_annotations: JSON.stringify([
        { text: "Straattaxi en Contractvervoer", role: "Target" },
        { text: "Contractvervoer is vooraf schriftelijk vastgelegd", role: "Obligation" }
      ]),
      domain: "transport",
      options: [
        { id: 37, q_id: 10, option_text: "Bij contractvervoer is geen rijbewijs B nodig.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Driver's license & taxi pass are mandatory for both." },
        { id: 38, q_id: 10, option_text: "Straattaxi's mogen nooit op de snelweg rijden.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Street taxis can drive on all public highways." },
        { id: 39, q_id: 10, option_text: "Contractvervoer is vooraf contractueel vastgelegd voor specifieke doelgroepen tegen vaste voorwaarden.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Defines pre-booked healthcare/school contract transport." },
        { id: 40, q_id: 10, option_text: "Bij straattaxi mag de chauffeur nooit fooi accepteren.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Tips are allowed in both." }
      ]
    },
    {
      id: 11,
      dutch_stem: "Een passagier reageert zeer gefrustreerd en stemverheffend over een verkeersomleiding. Wat is de juiste de-escalerende reactie van de chauffeur?",
      english_breakdown: "A passenger reacts very frustrated and loudly about a traffic detour. What is the driver's correct de-escalating response?",
      correct_option: 1,
      explanation: "Blijf rustig, toon begrip voor de situatie ('Ik begrijp dat dit vervelend is'), leg kalm de reden van de omleiding uit.",
      role_annotations: JSON.stringify([
        { text: "Een passagier reageert gefrustreerd", role: "Condition" },
        { text: "De taxichauffeur", role: "Actor" },
        { text: "moet rustig blijven, begrip tonen en kalm uitleggen", role: "Obligation" }
      ]),
      domain: "gedrag",
      options: [
        { id: 41, q_id: 11, option_text: "Meteen fel terugsneuvelen en dreigen de klant direct uit de auto te zetten.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Aggressive reaction escalates conflict immediately." },
        { id: 42, q_id: 11, option_text: "Rustig en vriendelijk blijven, luisteren, begrip tonen en zakelijk de noodzaak uitleggen.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Professional CBR de-escalation technique." },
        { id: 43, q_id: 11, option_text: "De radio op maximaal volume zetten om de klant te overstemmen.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Provokes anger." },
        { id: 44, q_id: 11, option_text: "De deuren automatisch vergrendelen en direct naar het politiebureau rijden.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Disproportionate without physical threat." }
      ]
    },
    {
      id: 12,
      dutch_stem: "Een slechtziende klant met een officiële blindengeleidehond wil instappen. Mag de chauffeur deze hond weigeren vanwege hondenharen?",
      english_breakdown: "A visually impaired customer with a certified guide dog wants to enter. May the driver refuse this dog due to dog hair?",
      correct_option: 3,
      explanation: "Nee. Gecertificeerde hulphonden en blindengeleidehonden mogen NOOIT geweigerd worden (VN-verdrag).",
      role_annotations: JSON.stringify([
        { text: "Een slechtziende klant met blindengeleidehond", role: "Actor" },
        { text: "mag de hulphond NOOIT weigeren", role: "Obligation" }
      ]),
      domain: "gedrag",
      options: [
        { id: 45, q_id: 12, option_text: "Ja, een chauffeur mag alle dieren weigeren zonder opgaaf van reden.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Guide dogs have protected legal status." },
        { id: 46, q_id: 12, option_text: "Ja, mits de chauffeur een toeslag van € 25 vraagt voor de schoonmaak.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Surcharges for guide dogs are illegal discrimination." },
        { id: 47, q_id: 12, option_text: "Alleen als de hond niet in een reismand past.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Guide dogs do not need pet carriers." },
        { id: 48, q_id: 12, option_text: "Nee, een officiële hulphond of blindengeleidehond mag nooit worden geweigerd.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Guide dogs must be transported free of charge and unconditionally." }
      ]
    },
    {
      id: 13,
      dutch_stem: "Welk officieel document bewijst dat het voertuig als taxi is geregistreerd en goedgekeurd?",
      english_breakdown: "Which official document proves that the vehicle is registered and approved as a taxi?",
      correct_option: 0,
      explanation: "De blauwe kentekenplaten en de geldige taxivergunningskaart tonen aan dat het voertuig formeel geregistreerd staat als taxi.",
      role_annotations: JSON.stringify([
        { text: "Taxivoertuig registratie", role: "Target" },
        { text: "blauwe kentekenplaten en vergunningsbewijs", role: "Obligation" }
      ]),
      domain: "transport",
      options: [
        { id: 49, q_id: 13, option_text: "Het officiële taxivergunningsbewijs en de blauwe kentekenplaten.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Blue plates + Kiwa taxi permit card are legal requirements." },
        { id: 50, q_id: 13, option_text: "Het standaard groene verzekeringsbewijs van een particuliere auto.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Private insurance doesn't cover commercial taxi transport." },
        { id: 51, q_id: 13, option_text: "Een lidmaatschapskaart van de ANWB.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: ANWB card has no regulatory legal value." },
        { id: 52, q_id: 13, option_text: "Een factuur van de plaatselijke garage.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Garage invoice is not a license." }
      ]
    },
    {
      id: 14,
      dutch_stem: "Wat is het doel van de periodieke kalibratie van de taximeter?",
      english_breakdown: "What is the purpose of the periodic calibration of the taximeter?",
      correct_option: 2,
      explanation: "Kalibratie (met keuringszegel) zorgt ervoor dat afstand en tijd exact correct worden geregistreerd conform de wettelijke tarieven.",
      role_annotations: JSON.stringify([
        { text: "Kalibratie van de taximeter", role: "Target" },
        { text: "garandeert exacte afstand- en prijsmeting conform de wet", role: "Obligation" }
      ]),
      domain: "transport",
      options: [
        { id: 53, q_id: 14, option_text: "Om ervoor te zorgen dat de radio storingsvrij kan spelen.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Unrelated to radio." },
        { id: 54, q_id: 14, option_text: "Om de maximumsnelheid van de auto automatisch te begrenzen op 100 km/u.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Meter does not limit car speed." },
        { id: 55, q_id: 14, option_text: "Om te garanderen dat de ritprijs, afstand en tijd nauwkeurig en eerlijk worden berekend.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Calibration protects consumers with verified meter calculation." },
        { id: 56, q_id: 14, option_text: "Om direct verbinding te maken met de bankrekening van de chauffeur.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Calibration handles metrology, not banking." }
      ]
    },
    {
      id: 15,
      dutch_stem: "Wat moet een chauffeur doen als een klant aan het einde van de rit weigert te betalen en dreigt met geweld?",
      english_breakdown: "What should a driver do if a customer refuses to pay at the end of the trip and threatens violence?",
      correct_option: 1,
      explanation: "Eigen veiligheid staat altijd voorop. Ga niet fysiek vechten om geld. Laat de klant gaan, onthoud het signalement en bel direct 112.",
      role_annotations: JSON.stringify([
        { text: "Als een klant weigert te betalen en dreigt met geweld", role: "Condition" },
        { text: "kiest eigen veiligheid, vermijdt fysieke strijd en alarmeert de politie", role: "Obligation" }
      ]),
      domain: "gedrag",
      options: [
        { id: 57, q_id: 15, option_text: "De klant fysiek aanvallen en diens bezittingen met geweld afpakken.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Violence endangers driver and is a criminal offense." },
        { id: 58, q_id: 15, option_text: "Niet fysiek escaleren voor geld, eigen veiligheid waarborgen, signalement noteren en direct 112 bellen.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Driver safety is priority #1 according to CBR." },
        { id: 59, q_id: 15, option_text: "De auto opsluiten en 5 uur blijven wachten tot de klant kalmeert.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Unlawful detention." },
        { id: 60, q_id: 15, option_text: "Het verlies accepteren en er met niemand over praten.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Police report is needed to stop repeat offenders." }
      ]
    },
    {
      id: 16,
      dutch_stem: "Casus 1 - Vraag 1/5: Chauffeur Samir begint om 07:00. Om 11:30 heeft hij 4,5 uur continu gereden. Wat moet Samir nu verplicht doen?",
      english_breakdown: "Case 1 - Q1/5: Driver Samir starts at 07:00. At 11:30 he has driven 4.5 hours continuously. What must Samir mandatorily do now?",
      correct_option: 2,
      explanation: "Na 4,5 uur onafgebroken rijtijd is een pauze van ten minste 45 minuten wettelijk verplicht.",
      role_annotations: JSON.stringify([
        { text: "Chauffeur Samir", role: "Actor" },
        { text: "na 4,5 uur continu rijden", role: "Condition" },
        { text: "moet een pauze van ten minste 45 minuten nemen", role: "Obligation" }
      ]),
      domain: "casus",
      options: [
        { id: 61, q_id: 16, option_text: "Nog 1 uur doorrijden als hij zich niet moe voelt.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Personal feeling cannot override 4.5h statutory limit." },
        { id: 62, q_id: 16, option_text: "Een korte stop van 5 minuten maken om koffie te drinken.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: 5 minutes does not qualify as an ATBv pause (min 15 min)." },
        { id: 63, q_id: 16, option_text: "Een ononderbroken pauze van minimaal 45 minuten (of opgesplitst conform de wet) nemen.", is_correct: 1, trap_annotation: "🇬🇧 Correct: 45 min break is strict statutory duty." },
        { id: 64, q_id: 16, option_text: "Zijn auto parkeren en pas de volgende ochtend om 07:00 weer rijden.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Shift doesn't have to end, just take the pause." }
      ]
    },
    {
      id: 17,
      dutch_stem: "Casus 1 - Vraag 2/5: Tijdens zijn pauze krijgt Samir een oproep voor een lucratieve rit. Mag hij zijn pauze na 20 minuten afbreken?",
      english_breakdown: "Case 1 - Q2/5: During his break Samir gets a ride call. May he interrupt his break after 20 minutes?",
      correct_option: 0,
      explanation: "Als Samir een eerste pauze van 20 minuten neemt (min 15 min), moet hij na zijn volgende rijperiode minimaal een tweede pauze van ten minste 30 minuten nemen.",
      role_annotations: JSON.stringify([
        { text: "Samir", role: "Actor" },
        { text: "breekt pauze na 20 min af", role: "Condition" },
        { text: "mag mits hij later minimaal 30 min aaneengesloten pauzeert", role: "Obligation" }
      ]),
      domain: "casus",
      options: [
        { id: 65, q_id: 17, option_text: "Ja, mits hij na de volgende rijperiode een aaneengesloten pauze van minimaal 30 minuten neemt.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Splitting rule requires min 15m first + min 30m second." },
        { id: 66, q_id: 17, option_text: "Nee, een pauze mag onder geen enkele voorwaarde in twee delen gesplitst worden.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Splitting 15m + 30m is allowed." },
        { id: 67, q_id: 17, option_text: "Ja, geld verdienen gaat altijd voor op de Arbeidstijdenwet.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Labor law is strictly enforced." },
        { id: 68, q_id: 17, option_text: "Alleen als de klant een fooi van minimaal € 20 belooft.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Tips do not alter labor law." }
      ]
    },
    {
      id: 18,
      dutch_stem: "Casus 1 - Vraag 3/5: De nieuwe klant wil naar Schiphol en vraagt om een vaste prijs van € 60. Samir stemt toe. Moet de taximeter aan?",
      english_breakdown: "Case 1 - Q3/5: The passenger asks for a fixed flat fare of €60 to Schiphol. Samir agrees. Must the taximeter run?",
      correct_option: 1,
      explanation: "Wanneer er VOORAF een vaste prijs is overeengekomen, mag deze prijs in rekening worden gebracht en wordt de rit in de BCT geregistreerd.",
      role_annotations: JSON.stringify([
        { text: "Klant en Samir spreken vooraf vaste prijs af", role: "Condition" },
        { text: "De ritprijs is € 60 vast", role: "Obligation" }
      ]),
      domain: "casus",
      options: [
        { id: 69, q_id: 18, option_text: "Nee, bij vaste prijs mag nooit een administratie in de BCT worden bijgehouden.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: BCT must always log the trip." },
        { id: 70, q_id: 18, option_text: "Ja, de vaste prijs is geldig omdat deze vooraf is afgesproken, en de rit wordt als vaste prijs in de BCT geregistreerd.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Flat rates agreed prior to trip start are legal." },
        { id: 71, q_id: 18, option_text: "Nee, vaste prijzen zijn in Nederland ten strengste verboden.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Pre-agreed fixed prices are fully legal." },
        { id: 72, q_id: 18, option_text: "Alleen als Schiphol toestemming geeft via een sms-bericht.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Airport permission not required." }
      ]
    },
    {
      id: 19,
      dutch_stem: "Casus 1 - Vraag 4/5: Op de snelweg ziet Samir een kind van 8 jaar op de achterbank de gordel losklikken. Wat is Samir's plicht?",
      english_breakdown: "Case 1 - Q4/5: On the highway, Samir sees an 8yo child in back unbuckle. What is Samir's duty?",
      correct_option: 2,
      explanation: "Voor kinderen onder de 12 jaar is de chauffeur juridisch verantwoordelijk. Samir moet zorgen dat de gordel direct weer vastgemaakt wordt.",
      role_annotations: JSON.stringify([
        { text: "Een kind van 8 jaar", role: "Actor" },
        { text: "klikt gordel los", role: "Condition" },
        { text: "Samir is als chauffeur verantwoordelijk voor kinderen onder 12 jaar", role: "Obligation" }
      ]),
      domain: "casus",
      options: [
        { id: 73, q_id: 19, option_text: "Niets, want Samir rijdt op de snelweg en mag niet op de achterbank kijken.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Driver retains duty of care." },
        { id: 74, q_id: 19, option_text: "Het kind negeren omdat de ouders van het kind niet in de taxi zitten.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Driver is liable when parents absent." },
        { id: 75, q_id: 19, option_text: "Zorgen dat het kind de gordel direct weer omdoet, omdat de chauffeur verantwoordelijk is voor kinderen onder de 12 jaar.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Driver is legally liable for passengers under 12." },
        { id: 76, q_id: 19, option_text: "Het kind direct een boete van € 100 contant laten betalen.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Drivers cannot issue fines." }
      ]
    },
    {
      id: 20,
      dutch_stem: "Casus 1 - Vraag 5/5: Bij aankomst weigert de BCT zijn kaart uit te werpen wegens een storing. Wat moet Samir registreren?",
      english_breakdown: "Case 1 - Q5/5: Upon arrival, BCT jams. What must Samir log?",
      correct_option: 3,
      explanation: "Bij een defecte BCT vult de chauffeur direct een rittenstaat in met datum, tijdstip, ritgegevens en meldt het defect direct.",
      role_annotations: JSON.stringify([
        { text: "BCT mechanische storing", role: "Condition" },
        { text: "moet handmatig de rittenstaat bijwerken en de storing melden", role: "Obligation" }
      ]),
      domain: "casus",
      options: [
        { id: 77, q_id: 20, option_text: "Hij hoeft niets te doen en mag zonder registratie de rest van de dag rondrijden.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Severe violation." },
        { id: 78, q_id: 20, option_text: "Hij moet de BCT met een schroevendraaier openbreken.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Tampering with sealed device is illegal." },
        { id: 79, q_id: 20, option_text: "Hij moet de auto direct naar de autosloperij brengen.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Car is not scrap." },
        { id: 80, q_id: 20, option_text: "Hij registreert de storing en ritten handmatig op de rittenstaat en meldt het defect direct.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Manual rittenstaat is statutory emergency procedure." }
      ]
    }
  ]
};

export function getCurriculum(): CurriculumData {
  return CURRICULUM_DATA;
}
