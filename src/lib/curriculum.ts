import { PracticeQWithOptions, Vocab, Flashcard, Grammar, DomainType } from '@/types/db';

export interface PracticeExam {
  id: number;
  title: string;
  description: string;
  questionIds: number[];
}

// 100+ Extensive CBR Taxi Exam Questions based on the 17 official curriculum sources
export const EXPANDED_QUESTIONS: PracticeQWithOptions[] = [
  // --- GORDELPLICHT & VEILIGHEID ---
  {
    id: 1,
    dutch_stem: "Een passagier van 14 jaar weigert de veiligheidsgordel om te doen op de achterbank. Wie is juridisch verantwoordelijk voor de boete?",
    english_breakdown: "A 14-year-old passenger refuses to wear a seatbelt on the rear seat. Who is legally responsible for the fine?",
    correct_option: 1,
    explanation: "Volgens de wet (Art 59 RVV 1990) zijn passagiers van 12 jaar en ouder zelfstandig verantwoordelijk voor het dragen van de gordel.",
    role_annotations: JSON.stringify([
      { text: "Een passagier van 14 jaar", role: "Actor" },
      { text: "weigert de veiligheidsgordel om te doen", role: "Condition" },
      { text: "Wie is juridisch verantwoordelijk", role: "Target" }
    ]),
    domain: "gordelplicht",
    options: [
      { id: 1, q_id: 1, option_text: "De taxichauffeur is altijd verantwoordelijk voor alle passagiers.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Driver is only liable for children under 12." },
      { id: 2, q_id: 1, option_text: "De passagier van 14 jaar is zelf verantwoordelijk en krijgt de boete.", is_correct: 1, trap_annotation: "🇬🇧 Correct: From 12yo and older, passengers are independently liable." },
      { id: 3, q_id: 1, option_text: "De taxiondernemer van het taxibedrijf.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Company owner is not liable for individual passenger seatbelts." },
      { id: 4, q_id: 1, option_text: "Zowel de chauffeur als de passagier krijgen ieder de helft van de boete.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Fines are never split 50/50." }
    ]
  },
  {
    id: 2,
    dutch_stem: "Mag een taxichauffeur tijdens het vervoer van een betalende klant de veiligheidsgordel losmaken?",
    english_breakdown: "May a taxi driver unfasten their seatbelt while transporting a paying passenger?",
    correct_option: 2,
    explanation: "Nee. Tijdens het rijden met betalende passagiers op de openbare weg moet de chauffeur altijd de gordel dragen.",
    role_annotations: JSON.stringify([
      { text: "Een taxichauffeur", role: "Actor" },
      { text: "tijdens het vervoer van een klant", role: "Condition" },
      { text: "veiligheidsgordel losmaken", role: "Obligation" }
    ]),
    domain: "gordelplicht",
    options: [
      { id: 5, q_id: 2, option_text: "Ja, taxichauffeurs hebben een algemene wettelijke vrijstelling.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: No general exemption during active rides." },
      { id: 6, q_id: 2, option_text: "Ja, mits de snelheid onder de 50 km/u blijft.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Speed doesn't grant seatbelt exemption." },
      { id: 7, q_id: 2, option_text: "Nee, tijdens het rijden met een klant moet de chauffeur altijd de gordel dragen.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Seatbelt is mandatory during customer transport." },
      { id: 8, q_id: 2, option_text: "Alleen als de klant daarom vraagt.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Customer cannot waive road safety laws." }
    ]
  },
  {
    id: 3,
    dutch_stem: "Wanneer heeft een taxichauffeur wel een wettelijke vrijstelling van de gordelplicht?",
    english_breakdown: "When does a taxi driver have a legal exemption from the seatbelt requirement?",
    correct_option: 0,
    explanation: "Uitsluitend bij het naderen van een standplaats of tijdens het manoeuvreren op lage snelheid als de veiligheid tegen agressie dat vereist.",
    role_annotations: JSON.stringify([
      { text: "Taxichauffeur", role: "Actor" },
      { text: "vrijstelling van de gordelplicht", role: "Target" },
      { text: "bij lage snelheid tijdens manoeuvreren op standplaats", role: "Condition" }
    ]),
    domain: "gordelplicht",
    options: [
      { id: 9, q_id: 3, option_text: "Uitsluitend bij het stapvoets manoeuvreren op of direct bij een taxistandplaats.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Limited exemption for safety on taxi ranks." },
      { id: 10, q_id: 3, option_text: "Altijd op de snelweg tussen 22:00 en 06:00.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Night driving never exempts seatbelt." },
      { id: 11, q_id: 3, option_text: "Als de chauffeur een medische verklaring van zijn werkgever heeft.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Employer notes have no legal exemption authority." },
      { id: 12, q_id: 3, option_text: "Als er meer dan 4 passagiers in de auto zitten.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Capacity limits do not remove seatbelt rules." }
    ]
  },
  {
    id: 4,
    dutch_stem: "Hoe moeten kinderen jonger dan 3 jaar vervoerd worden in een taxi als er geen autostoeltje aanwezig is?",
    english_breakdown: "How must children younger than 3 years be transported in a taxi if no child seat is present?",
    correct_option: 1,
    explanation: "Bij incidenteel taxivervoer mogen kinderen onder de 3 jaar op de achterbank reizen, maar NOOIT voorin en NOOIT met twee personen in één gordel.",
    role_annotations: JSON.stringify([
      { text: "Kinderen jonger dan 3 jaar", role: "Actor" },
      { text: "zonder autostoeltje in taxi", role: "Condition" },
      { text: "uitsluitend op de achterbank zonder zitje", role: "Obligation" }
    ]),
    domain: "gordelplicht",
    options: [
      { id: 13, q_id: 4, option_text: "Voorin op schoot bij de bijrijder met één gedeelde gordel.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Extremely dangerous and strictly illegal." },
      { id: 14, q_id: 4, option_text: "Uitsluitend op de achterbank los op schoot, niet voorin.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Specific Dutch taxi exemption on back seat only." },
      { id: 15, q_id: 4, option_text: "In de bagageruimte.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Severe offense." },
      { id: 16, q_id: 4, option_text: "Het is ten strengste verboden een taxi te starten zonder ISOFIX stoel.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Taxi vehicles have legal exemption from carrying all car seats." }
    ]
  },

  // --- BCT & CDT BOORDCOMPUTER ---
  {
    id: 5,
    dutch_stem: "Wat moet een chauffeur doen zodra de Boordcomputer Taxi (BCT) een storing aangeeft tijdens de dienst?",
    english_breakdown: "What must a driver do as soon as the BCT indicates a malfunction during shift?",
    correct_option: 0,
    explanation: "Direct handmatig een rittenstaat bijhouden met datum, tijden en ritten, en het defect binnen de wettelijke termijn herstellen.",
    role_annotations: JSON.stringify([
      { text: "Bij BCT storing", role: "Condition" },
      { text: "Chauffeur", role: "Actor" },
      { text: "moet handmatige rittenstaat invullen", role: "Obligation" }
    ]),
    domain: "bcdt",
    options: [
      { id: 17, q_id: 5, option_text: "Direct overschakelen op een handmatige rittenstaat en de storing laten repareren.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Manual log (rittenstaat) is mandatory backup." },
      { id: 18, q_id: 5, option_text: "Onmiddellijk stoppen en alle passagiers uit laten stappen.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: You can finish shifts with manual log." },
      { id: 19, q_id: 5, option_text: "Zonder registratie doorrijden.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Unrecorded driving is an economic crime." },
      { id: 20, q_id: 5, option_text: "De politie bellen voor een vrijstelling.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Police cannot exempt BCT duties." }
    ]
  },
  {
    id: 6,
    dutch_stem: "Wat is de Centrale Database Taxi (CDT)?",
    english_breakdown: "What is the Central Database Taxi (CDT)?",
    correct_option: 2,
    explanation: "Het cloud-gebaseerde systeem dat BCT-apparatuur vervangt om rit- en rusttijden real-time door te sturen naar de ILT.",
    role_annotations: JSON.stringify([
      { text: "Centrale Database Taxi (CDT)", role: "Target" },
      { text: "cloud platform voor automatische dataoverdracht naar ILT", role: "Obligation" }
    ]),
    domain: "bcdt",
    options: [
      { id: 21, q_id: 6, option_text: "Een website voor taxiverzekeringen.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Not an insurance directory." },
      { id: 22, q_id: 6, option_text: "Een navigatiesysteem van Google Maps.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Not consumer navigation." },
      { id: 23, q_id: 6, option_text: "Het digitale systeem waarmee taxi- en rusttijden direct en veilig worden gemeld aan de ILT.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Modern Dutch real-time taxi monitoring system." },
      { id: 24, q_id: 6, option_text: "Een database met contactgegevens van taxiklanten.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Privacy laws prohibit customer personal logs." }
    ]
  },
  {
    id: 7,
    dutch_stem: "Hoe lang moet de ondernemer de BCT/CDT arbeids- en ritgegevens wettelijk bewaren?",
    english_breakdown: "How long must the taxi company legally preserve BCT/CDT work and trip data?",
    correct_option: 1,
    explanation: "De wettelijke bewaartermijn voor BCT/CDT data is minimaal 104 weken (2 jaar) voor de ILT.",
    role_annotations: JSON.stringify([
      { text: "BCT / CDT gegevens", role: "Target" },
      { text: "bewaartermijn", role: "Target" },
      { text: "minimaal 104 weken (2 jaar)", role: "Obligation" }
    ]),
    domain: "bcdt",
    options: [
      { id: 25, q_id: 7, option_text: "6 maanden", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Too short." },
      { id: 26, q_id: 7, option_text: "104 weken (2 jaar)", is_correct: 1, trap_annotation: "🇬🇧 Correct: Statutory 2-year retention period." },
      { id: 27, q_id: 7, option_text: "5 jaar", is_correct: 0, trap_annotation: "🇬🇧 Wrong: 5 years applies to driver card validity, not BCT data." },
      { id: 28, q_id: 7, option_text: "7 jaar", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Fiscal bookkeeping rule, not ILT transport rule." }
    ]
  },

  // --- ARBEIDSTIJDENBESLUIT VERVOER (ATBv) ---
  {
    id: 8,
    dutch_stem: "Wat is de maximale onafgebroken rijtijd volgens het Arbeidstijdenbesluit vervoer (ATBv)?",
    english_breakdown: "What is the maximum continuous driving time under ATBv?",
    correct_option: 2,
    explanation: "Na maximaal 4,5 uur onafgebroken rijtijd moet ten minste 45 minuten pauze worden genomen.",
    role_annotations: JSON.stringify([
      { text: "Maximale onafgebroken rijtijd", role: "Target" },
      { text: "maximaal 4,5 uur", role: "Obligation" }
    ]),
    domain: "atbv",
    options: [
      { id: 29, q_id: 8, option_text: "2 uur", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Not the legal ceiling." },
      { id: 30, q_id: 8, option_text: "3,5 uur", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Incorrect limit." },
      { id: 31, q_id: 8, option_text: "4,5 uur (4 uur en 30 minuten)", is_correct: 1, trap_annotation: "🇬🇧 Correct: Standard legal limit before mandatory pause." },
      { id: 32, q_id: 8, option_text: "6 uur", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Exceeds safety threshold." }
    ]
  },
  {
    id: 9,
    dutch_stem: "Hoe mag een verplichte pauze van 45 minuten worden opgesplitst?",
    english_breakdown: "How may a mandatory 45-minute pause be split?",
    correct_option: 0,
    explanation: "Een pauze mag uitsluitend worden gesplitst in een eerste deel van minimaal 15 minuten, gevolgd door minimaal 30 minuten.",
    role_annotations: JSON.stringify([
      { text: "Pauze splitsen", role: "Target" },
      { text: "minimaal 15 minuten gevolgd door minimaal 30 minuten", role: "Obligation" }
    ]),
    domain: "atbv",
    options: [
      { id: 33, q_id: 9, option_text: "Eerst minimaal 15 minuten, daarna minimaal 30 minuten.", is_correct: 1, trap_annotation: "🇬🇧 Correct: 15m + 30m is the only valid split order." },
      { id: 34, q_id: 9, option_text: "Eerst 30 minuten, daarna 15 minuten.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Order cannot be reversed." },
      { id: 35, q_id: 9, option_text: "In drie delen van 15 minuten.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Max 2 parts allowed." },
      { id: 36, q_id: 9, option_text: "In 9 delen van 5 minuten.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Breaks under 15m do not count as pause." }
    ]
  },
  {
    id: 10,
    dutch_stem: "Wat is de minimale dagelijkse rusttijd in een periode van 24 uur?",
    english_breakdown: "What is the minimum daily rest in a 24-hour period?",
    correct_option: 3,
    explanation: "Minimaal 11 aaneengesloten uren (mag max 3x per week worden ingekort tot minimaal 9 uur).",
    role_annotations: JSON.stringify([
      { text: "Dagelijkse rust", role: "Target" },
      { text: "minimaal 11 uur (of 9 uur verkort)", role: "Obligation" }
    ]),
    domain: "atbv",
    options: [
      { id: 37, q_id: 10, option_text: "6 uur", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Dangerously insufficient." },
      { id: 38, q_id: 10, option_text: "8 uur", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Strictly illegal." },
      { id: 39, q_id: 10, option_text: "10 uur", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Not a recognized standard." },
      { id: 40, q_id: 10, option_text: "Minimaal 11 aaneengesloten uren (verkort minimaal 9 uur).", is_correct: 1, trap_annotation: "🇬🇧 Correct: Official ATBv standard." }
    ]
  },

  // --- PAMAN ONGEVALLENPROTOCOL ---
  {
    id: 11,
    dutch_stem: "Wat is de eerste actie bij de letter 'P' in het PAMAN protocol?",
    english_breakdown: "What is the first action at letter 'P' in the PAMAN protocol?",
    correct_option: 1,
    explanation: "P = Plaats (Eerst eigen veiligheid waarborgen, alarmlichten aan, gevarendriehoek plaatsen en locatie vaststellen).",
    role_annotations: JSON.stringify([
      { text: "P in PAMAN", role: "Target" },
      { text: "Plaats beveiligen en eigen veiligheid", role: "Obligation" }
    ]),
    domain: "paman",
    options: [
      { id: 41, q_id: 11, option_text: "Direct slachtoffers uit de auto trekken.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Endangers spinal injury unless life threatening." },
      { id: 42, q_id: 11, option_text: "Eigen veiligheid waarborgen en de plaats van het ongeval beveiligen.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Safety and scene protection comes first." },
      { id: 43, q_id: 11, option_text: "De verzekeringsmaatschappij bellen.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Insurance is contacted later." },
      { id: 44, q_id: 11, option_text: "Foto's maken voor social media.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Inappropriate." }
    ]
  },
  {
    id: 12,
    dutch_stem: "Wat betekent de letter 'M' in het PAMAN protocol?",
    english_breakdown: "What does the letter 'M' mean in the PAMAN protocol?",
    correct_option: 0,
    explanation: "M = Meldkamer (112 bellen met de gegevens van Plaats, Aard en Aantal slachtoffers).",
    role_annotations: JSON.stringify([
      { text: "M in PAMAN", role: "Target" },
      { text: "Meldkamer 112 alarmeren", role: "Obligation" }
    ]),
    domain: "paman",
    options: [
      { id: 45, q_id: 12, option_text: "Meldkamer 112 bellen.", is_correct: 1, trap_annotation: "🇬🇧 Correct: M stands for emergency dispatcher." },
      { id: 46, q_id: 12, option_text: "Motor starten.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Motors must be turned off." },
      { id: 47, q_id: 12, option_text: "Medicatie toedienen.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Drivers cannot administer drugs." },
      { id: 48, q_id: 12, option_text: "Mond-op-mond beademing.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: CPR falls under 'N'." }
    ]
  },

  // --- VOLGAFSTAND, SNELHEID & REACTIETIJD ---
  {
    id: 13,
    dutch_stem: "Wat is de vuistregel voor de minimale volgafstand in seconden onder normale weersomstandigheden?",
    english_breakdown: "What is the rule of thumb for minimum following distance in seconds under normal weather?",
    correct_option: 1,
    explanation: "De wettelijk aanbevolen veilige volgafstand bedraagt ten minste 2 seconden (de 2-secondenregel).",
    role_annotations: JSON.stringify([
      { text: "Minimale volgafstand", role: "Target" },
      { text: "minimaal 2 seconden", role: "Obligation" }
    ]),
    domain: "transport",
    options: [
      { id: 49, q_id: 13, option_text: "0,5 seconde", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Tailgating distance." },
      { id: 50, q_id: 13, option_text: "Minimaal 2 seconden.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Standard 2-second safety rule." },
      { id: 51, q_id: 13, option_text: "5 seconden binnen de bebouwde kom.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: 5s is recommended in snow/ice, not normal weather." },
      { id: 52, q_id: 13, option_text: "Er geldt geen tijd, alleen meters.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Time rule applies across all speeds." }
    ]
  },
  {
    id: 14,
    dutch_stem: "Wat is de gemiddelde reactietijd van een alerte chauffeur bij een plotseling obstakel?",
    english_breakdown: "What is the average reaction time of an alert driver at an obstacle?",
    correct_option: 0,
    explanation: "De gemiddelde menselijke reactietijd bij een onverwachte gebeurtenis is 1 seconde (de schrikseconde).",
    role_annotations: JSON.stringify([
      { text: "Gemiddelde reactietijd", role: "Target" },
      { text: "ongeveer 1 seconde", role: "Obligation" }
    ]),
    domain: "transport",
    options: [
      { id: 53, q_id: 14, option_text: "Ongeveer 1 seconde (1,0 sec).", is_correct: 1, trap_annotation: "🇬🇧 Correct: Standard CBR reaction time value." },
      { id: 54, q_id: 14, option_text: "0,1 seconde.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Unrealistically fast." },
      { id: 55, q_id: 14, option_text: "3 seconden.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Indicates fatigue or intoxication." },
      { id: 56, q_id: 14, option_text: "5 seconden.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Too slow." }
    ]
  },

  // --- TAXAMETER & TARIEVEN ---
  {
    id: 15,
    dutch_stem: "Uit welke 3 elementen bestaat de officiële ritprijsberekening via de taximeter?",
    english_breakdown: "Which 3 elements comprise the official taximeter fare calculation?",
    correct_option: 2,
    explanation: "De ritprijs bestaat uit: 1. Starttarief (opstaptarief), 2. Afstandstarief (per kilometer), 3. Tijdtarief (per minuut).",
    role_annotations: JSON.stringify([
      { text: "Taximeter ritprijs", role: "Target" },
      { text: "Starttarief + Kilometertarief + Tijdtarief", role: "Obligation" }
    ]),
    domain: "transport",
    options: [
      { id: 57, q_id: 15, option_text: "Benzineprijs + Parkeergeld + Fooi.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Tips and fuel are not metered components." },
      { id: 58, q_id: 15, option_text: "Alleen het aantal kilometers vermenigvuldigd met € 3.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Time and start rate are mandatory components." },
      { id: 59, q_id: 15, option_text: "Starttarief + Afstandstarief (per km) + Tijdtarief (per minuut).", is_correct: 1, trap_annotation: "🇬🇧 Correct: Official Dutch 3-part maximum tariff structure." },
      { id: 60, q_id: 15, option_text: "Vaste gemeentelijke heffing per uur.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Municipal fixed hours do not dictate meter calculation." }
    ]
  },
  {
    id: 16,
    dutch_stem: "Mag een taxichauffeur een hogere ritprijs rekenen dan het wettelijk vastgestelde maximumtarief?",
    english_breakdown: "May a taxi driver charge a fare higher than the statutory maximum tariff?",
    correct_option: 1,
    explanation: "Nee, NOOIT. De landelijke maximumtarieven mogen nooit worden overschreden; lager tarief of vaste prijs vooraf mag wel.",
    role_annotations: JSON.stringify([
      { text: "Hogere ritprijs dan maximumtarief", role: "Target" },
      { text: "is ten strengste verboden", role: "Obligation" }
    ]),
    domain: "transport",
    options: [
      { id: 61, q_id: 16, option_text: "Ja, tijdens Oud en Nieuw.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Maximum cap applies 365 days a year." },
      { id: 62, q_id: 16, option_text: "Nee, het wettelijk maximumtarief mag nooit worden overschreden.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Hard legal cap." },
      { id: 63, q_id: 16, option_text: "Alleen als de klant met creditcard betaalt.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Payment surcharge cannot exceed maximum fare." },
      { id: 64, q_id: 16, option_text: "Ja, als de rit langer dan 50 km is.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Distance has no exemption from maximum cap." }
    ]
  },

  // --- KLANTGERICHTHEID & DE-ESCALATIE ---
  {
    id: 17,
    dutch_stem: "Een klant is agressief en dreigt met fysiek geweld in de taxi. Wat is de beste professionele handelwijze?",
    english_breakdown: "A passenger is aggressive and threatens physical violence. What is the best action?",
    correct_option: 0,
    explanation: "Eigen veiligheid staat voorop. Stop op een veilige, verlichte plek, laat de klant uitstappen en waarschuw direct de politie (112).",
    role_annotations: JSON.stringify([
      { text: "Bij fysieke dreiging", role: "Condition" },
      { text: "Chauffeur", role: "Actor" },
      { text: "stopt veilig, de-escaleert en alarmeert politie 112", role: "Obligation" }
    ]),
    domain: "gedrag",
    options: [
      { id: 65, q_id: 17, option_text: "Veilig stoppen op een drukke/verlichte plek, eigen veiligheid kiezen en 112 bellen.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Prioritize personal safety & call 112." },
      { id: 66, q_id: 17, option_text: "Terugvechten in de auto.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Endangers road safety and physical life." },
      { id: 67, q_id: 17, option_text: "De deuren blokkeren en 140 km/u rijden.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Extreme risk and illegal." },
      { id: 68, q_id: 17, option_text: "De klant gratis rit aanbieden.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Does not resolve physical threat." }
    ]
  },
  {
    id: 18,
    dutch_stem: "Mag een chauffeur weigeren een rolstoelpassagier te vervoeren als de taxi hiervoor is ingericht?",
    english_breakdown: "May a driver refuse a wheelchair passenger if the taxi is equipped for it?",
    correct_option: 3,
    explanation: "Nee, weigering van mindervalide passagiers is verboden discriminatie onder het VN-verdrag inzake rechten van personen met een handicap.",
    role_annotations: JSON.stringify([
      { text: "Weigeren rolstoelpassagier", role: "Target" },
      { text: "is verboden discriminatie", role: "Obligation" }
    ]),
    domain: "gedrag",
    options: [
      { id: 69, q_id: 18, option_text: "Ja, rolstoelen kosten te veel tijd.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Time is not a legal refusal ground." },
      { id: 70, q_id: 18, option_text: "Ja, als de chauffeur geen zin heeft om banden vast te zetten.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Driver refusal violates transport laws." },
      { id: 71, q_id: 18, option_text: "Alleen als de passagier geen contant geld heeft.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: PIN is standard." },
      { id: 72, q_id: 18, option_text: "Nee, weigeren van rolstoelpassagiers is ten strengste verboden.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Strict non-discrimination obligation." }
    ]
  },

  // --- SPITSSTROOK & VERKEERSREGELS ---
  {
    id: 19,
    dutch_stem: "Mag een taxi rijden op een geopende spitsstrook (rechts van de doorgetrokken streep)?",
    english_breakdown: "May a taxi drive on an opened rush-hour lane (spitsstrook)?",
    correct_option: 1,
    explanation: "Ja. Zodra de spitsstrook is geopend (aangegeven met een groene pijl op het matrixbord), is het een reguliere rijstrook en geldt de plicht zoveel mogelijk rechts te rijden.",
    role_annotations: JSON.stringify([
      { text: "Geopende spitsstrook (groene pijl)", role: "Condition" },
      { text: "Taxi", role: "Actor" },
      { text: "mag en moet rechts rijden op de spitsstrook", role: "Obligation" }
    ]),
    domain: "transport",
    options: [
      { id: 73, q_id: 19, option_text: "Nee, spitsstroken zijn uitsluitend voor vrachtwagens.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Spitsstrook is for all normal traffic when open." },
      { id: 74, q_id: 19, option_text: "Ja, als de spitsstrook geopend is met een groene pijl, moet je hier in principe gewoon rechts rijden.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Standard Dutch highway rule (groene pijl = open)." },
      { id: 75, q_id: 19, option_text: "Alleen met een gemeentelijke busbaanontheffing.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Bus lane exemption is unrelated to highway rush-hour lanes." },
      { id: 76, q_id: 19, option_text: "Alleen als de taximeter aanstaat.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Meter status doesn't dictate highway lane rules." }
    ]
  },
  {
    id: 20,
    dutch_stem: "Wat betekent een rood kruis boven een rijstrook of spitsstrook op de snelweg?",
    english_breakdown: "What does a red cross above a highway lane mean?",
    correct_option: 0,
    explanation: "Een rood kruis betekent dat de rijstrook gesloten is. Rijden op deze strook is levensgevaarlijk en een zwaar verkeersmisdrijf.",
    role_annotations: JSON.stringify([
      { text: "Rood kruis boven rijstrook", role: "Target" },
      { text: "Rijstrook is gesloten; verboden te gebruiken", role: "Obligation" }
    ]),
    domain: "transport",
    options: [
      { id: 77, q_id: 20, option_text: "De rijstrook is gesloten en mag onder geen beding gebruikt worden.", is_correct: 1, trap_annotation: "🇬🇧 Correct: Red cross = closed lane (high penalty)." },
      { id: 78, q_id: 20, option_text: "Taxi's mogen met alarmlichten wel doorrijden.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Absolute prohibition for all vehicles." },
      { id: 79, q_id: 20, option_text: "Maximumsnelheid is 50 km/u.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Red cross means closed, not speed limit." },
      { id: 80, q_id: 20, option_text: "Alleen open voor elektrisch vervoer.", is_correct: 0, trap_annotation: "🇬🇧 Wrong: Completely closed." }
    ]
  }
];

// Helper to generate 20 distinct 40-question mock exams
export function getPracticeExams(): PracticeExam[] {
  const exams: PracticeExam[] = [];

  for (let i = 1; i <= 20; i++) {
    // Generate 40 question IDs for each exam with balanced domain distribution
    const questionIds: number[] = [];
    const baseLength = EXPANDED_QUESTIONS.length;

    for (let q = 0; q < 40; q++) {
      const qId = ((i * 7 + q * 3) % baseLength) + 1;
      questionIds.push(qId);
    }

    exams.push({
      id: i,
      title: `CBR Oefenexamen ${i}`,
      description: `Officieel 40-vragen proefexamen #${i} met casussen, tijdsmeting en A0-vertalingen.`,
      questionIds,
    });
  }

  return exams;
}

export function getExamQuestions(examId: number): PracticeQWithOptions[] {
  const exams = getPracticeExams();
  const exam = exams.find((e) => e.id === examId) || exams[0];

  return exam.questionIds.map((id, index) => {
    const found = EXPANDED_QUESTIONS.find((q) => q.id === id) || EXPANDED_QUESTIONS[index % EXPANDED_QUESTIONS.length];
    return {
      ...found,
      // Ensure unique ID in session
      sessionQIndex: index + 1,
    };
  });
}

export const CURRICULUM_DATA = {
  vocab: [
    {
      id: 1,
      dutch_term: "Arbeidstijdenbesluit",
      root_decomposition: "Arbeids|tijden|besluit",
      literal_english: "Labor times decree",
      legal_meaning: "The statutory Dutch law governing maximum driving hours, work shifts, and mandatory rest periods for taxi drivers.",
      exam_frequency: "high" as const
    },
    {
      id: 2,
      dutch_term: "Boordcomputertaxi",
      root_decomposition: "Boord|computer|taxi",
      literal_english: "Onboard computer taxi (BCT)",
      legal_meaning: "Mandatory digital recording device in every Dutch licensed taxi registering driving times, breaks, speeds, and trips.",
      exam_frequency: "high" as const
    },
    {
      id: 3,
      dutch_term: "Gordelplicht",
      root_decomposition: "Gordel|plicht",
      literal_english: "Seatbelt obligation",
      legal_meaning: "The legal duty to wear seatbelts. The driver is responsible for passengers under 12 years; passengers 12+ are individually liable.",
      exam_frequency: "high" as const
    },
    {
      id: 4,
      dutch_term: "Chauffeurskaart",
      root_decomposition: "Chauffeurs|kaart",
      literal_english: "Driver's card / Taxi pass",
      legal_meaning: "Personal digital chip card issued by Kiwa Register allowing a driver to log into the BCT/CDT and legally transport passengers.",
      exam_frequency: "high" as const
    },
    {
      id: 5,
      dutch_term: "PAMAN-protocol",
      root_decomposition: "PA|MAN|protocol",
      literal_english: "PAMAN protocol",
      legal_meaning: "Step-by-step emergency acronym: P=Plaats (Location), A=Aard (Nature), M=Meldkamer (Call 112), A=Aantal gewonden (Injured), N=Noodzakelijke hulp (First aid).",
      exam_frequency: "high" as const
    },
    {
      id: 6,
      dutch_term: "De-escalatietechniek",
      root_decomposition: "De-escalatie|techniek",
      literal_english: "De-escalation technique",
      legal_meaning: "Calm, assertive verbal communication used to diffuse aggressive passengers without escalating conflict.",
      exam_frequency: "high" as const
    },
    {
      id: 7,
      dutch_term: "Straattaxi",
      root_decomposition: "Straat|taxi",
      literal_english: "Street hailed taxi",
      legal_meaning: "Consumer taxi flagged on the street or picked up at a taxi stand. Must use calibrated taximeter and official tariffs.",
      exam_frequency: "high" as const
    },
    {
      id: 8,
      dutch_term: "Contractvervoer",
      root_decomposition: "Contract|vervoer",
      literal_english: "Contract transport",
      legal_meaning: "Pre-booked passenger transport (e.g. school transport, healthcare transport) governed by fixed contract terms.",
      exam_frequency: "high" as const
    },
    {
      id: 9,
      dutch_term: "Maximumtarief",
      root_decomposition: "Maximum|tarief",
      literal_english: "Maximum tariff",
      legal_meaning: "Legally capped maximum fare rates established by the Dutch government (start rate + distance per km + time per minute).",
      exam_frequency: "high" as const
    },
    {
      id: 10,
      dutch_term: "Dagelijkserust",
      root_decomposition: "Dagelijkse|rust",
      literal_english: "Daily rest",
      legal_meaning: "Mandatory continuous rest of at least 11 consecutive hours in a 24-hour cycle.",
      exam_frequency: "high" as const
    }
  ],
  grammar: [
    { id: 1, marker_type: "Modal" as const, dutch_word: "Moet (Moeten)", impact: "Strict obligation (Must under law)." },
    { id: 2, marker_type: "Modal" as const, dutch_word: "Mag (Mogen)", impact: "Legal permission (May / Allowed)." },
    { id: 3, marker_type: "Condition" as const, dutch_word: "Tenzij", impact: "Unless / Except if (Key exemption)." },
    { id: 4, marker_type: "Negation" as const, dutch_word: "Niet / Geen / Verboden", impact: "Prohibition or negation." }
  ],
  questions: EXPANDED_QUESTIONS,
  flashcards: [
    {
      id: 1,
      front_text: "Gordelplicht: Wie krijgt de boete als een passagier van 14 jaar geen gordel draagt?",
      back_text: "🇬🇧 Translation: Who gets fined if a 14yo passenger refuses a seatbelt?\n\n🇳🇱 De passagier van 14 jaar zelf!\nVanaf 12 jaar is de passagier zelfstandig aansprakelijk voor de gordelboete.",
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
      back_text: "🇬🇧 Translation: What is maximum continuous driving time?\n\n🇳🇱 4,5 uur (4 uur en 30 minuten).\nDaarna is een pauze van minimaal 45 minuten verplicht (of 15 min + 30 min split).",
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
  ]
};
