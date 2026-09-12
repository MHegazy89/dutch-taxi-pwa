/**
 * CBR Taxi Practical Exam & Industry-Level Dutch Communication Data
 * Covers:
 * 1. Ride-phase phrasebook with A0 phonetic approximations and professional etiquette tips.
 * 2. CBR Practical Exam interactive roleplay simulations (realistic passenger dialogues & branching turns).
 */

export type RidePhaseType = 
  | 'accepting' 
  | 'welcoming' 
  | 'enroute' 
  | 'destination' 
  | 'special' 
  | 'conflict'
  | 'authorities';

export interface PhraseItem {
  id: number;
  phase: RidePhaseType;
  dutch: string;
  english: string;
  pronunciation: string;
  tip: string;
  keyWords: string[];
}

export interface ScenarioDialogueTurn {
  id: number;
  speaker: 'passenger' | 'driver' | 'examiner' | 'police';
  dutchText: string;
  englishText: string;
  options?: {
    id: string;
    dutchResponse: string;
    englishResponse: string;
    isCorrect: boolean;
    feedback: string;
  }[];
}

export interface PracticalScenario {
  id: string;
  title: string;
  category: string;
  cbrCriterion: string;
  situation: string;
  englishSituation: string;
  turns: ScenarioDialogueTurn[];
}

export const RIDE_PHASES: { id: RidePhaseType; title: string; subtitle: string; icon: string }[] = [
  { id: 'accepting', title: 'Rit Aannemen', subtitle: 'Accepting the Ride & First Contact', icon: 'PhoneCall' },
  { id: 'welcoming', title: 'Ontvangst & Instappen', subtitle: 'Welcoming & Boarding the Guest', icon: 'DoorOpen' },
  { id: 'enroute', title: 'Onderweg & Navigatie', subtitle: 'En Route & Route Consultation', icon: 'Navigation' },
  { id: 'destination', title: 'Aankomst & Betaling', subtitle: 'Arrival, Fare & BTM Receipt', icon: 'CreditCard' },
  { id: 'special', title: 'PAMAN & Hulpbehoevenden', subtitle: 'Special Needs, Wheelchair & Guide Dogs', icon: 'HeartHandshake' },
  { id: 'conflict', title: 'De-escalatie & Klachten', subtitle: 'Conflict Resolution & Boundaries', icon: 'ShieldAlert' },
  { id: 'authorities', title: 'Handhaving & Politie', subtitle: 'Police, ILT & Roadside Checks', icon: 'ShieldCheck' },
];

export const COMMUNICATION_PHRASES: PhraseItem[] = [
  // 1. ACCEPTING RIDE
  {
    id: 1,
    phase: 'accepting',
    dutch: "Goedemorgen / Goedemiddag, Taxi Centrale, met wie spreek ik?",
    english: "Good morning / afternoon, Taxi Dispatch, who am I speaking with?",
    pronunciation: "KHOO-duh-mor-khun / KHOO-duh-mid-dahkh, tak-see sen-TRAH-luh, met vee sprayk ik?",
    tip: "Official, friendly opening for phone dispatches or taxi stand introductions.",
    keyWords: ["Goedemorgen", "Centrale", "spreek ik"]
  },
  {
    id: 2,
    phase: 'accepting',
    dutch: "Wat is uw vertrekadres en waar wilt u naartoe reizen?",
    english: "What is your pickup address and where do you wish to travel to?",
    pronunciation: "Vaht is oow vur-TREK-ah-dres en vahr vilt oow nahr-TOO rye-zuhn?",
    tip: "Always confirm both the exact starting point and destination before departing.",
    keyWords: ["vertrekadres", "waar wilt u", "naartoe"]
  },
  {
    id: 3,
    phase: 'accepting',
    dutch: "Ik ben er binnen ongeveer tien minuten met een zwarte Mercedes.",
    english: "I will be there in about ten minutes with a black Mercedes.",
    pronunciation: "Ik ben ehr BIN-nuhn ong-uh-veer teen mee-NOO-tuhn met uhn zvar-tuh...",
    tip: "Giving an accurate ETA and vehicle description reduces passenger anxiety.",
    keyWords: ["ongeveer", "tien minuten", "zwarte Mercedes"]
  },
  {
    id: 4,
    phase: 'accepting',
    dutch: "Heeft u veel bagage of reist u met extra personen?",
    english: "Do you have a lot of luggage or are you traveling with extra people?",
    pronunciation: "Hayft oow vayl bah-KHAH-zhuh of ryest oow met EKS-trah pehr-SO-nuhn?",
    tip: "Prevents trunk space surprises and seat shortage.",
    keyWords: ["bagage", "extra personen", "reist u"]
  },
  {
    id: 5,
    phase: 'accepting',
    dutch: "Ik sta voor de hoofdingang van het station te wachten.",
    english: "I am waiting in front of the station main entrance.",
    pronunciation: "Ik stah voor duh HOHFD-ing-ang vahn het stah-SHON tuh VAHKH-tuhn.",
    tip: "Clear landmark communication prevents missed pickups.",
    keyWords: ["hoofdingang", "station", "wachten"]
  },
  {
    id: 6,
    phase: 'accepting',
    dutch: "Bent u mevrouw Janssen? Aangenaam, ik ben uw chauffeur voor vandaag.",
    english: "Are you Mrs. Janssen? Pleasure, I am your driver for today.",
    pronunciation: "Bent oow muh-VROW YAHN-suhn? AHN-khuh-nahm, ik ben oow shoh-FUR...",
    tip: "Always verify the passenger's name before letting them board to avoid wrong passenger pickups.",
    keyWords: ["mevrouw", "aangenaam", "uw chauffeur"]
  },
  {
    id: 7,
    phase: 'accepting',
    dutch: "Het geschatte tarief voor deze rit is ongeveer dertig euro.",
    english: "The estimated fare for this trip is approximately thirty euros.",
    pronunciation: "Het khuh-SKAHT-tuh tah-REEF voor DAY-zuh rit is ong-uh-veer DEHR-tikh...",
    tip: "When asked for an estimate, always state it is an indication based on meter tariff.",
    keyWords: ["geschatte tarief", "ongeveer", "rit"]
  },
  {
    id: 8,
    phase: 'accepting',
    dutch: "Heeft u een vaste prijs afgesproken met de centrale?",
    english: "Did you agree on a fixed price with dispatch?",
    pronunciation: "Hayft oow uhn VAHS-tuh pryse AHF-khuh-sproh-kuhn met duh sen-TRAH-luh?",
    tip: "Fixed price contracts must be registered before the trip starts.",
    keyWords: ["vaste prijs", "afgesproken", "centrale"]
  },
  {
    id: 9,
    phase: 'accepting',
    dutch: "Ik help u graag even met uw koffers in de kofferbak.",
    english: "I would be happy to help you load your suitcases into the trunk.",
    pronunciation: "Ik help oow khrahkh AY-vuhn met oow KOF-furs in duh KOF-fur-bahk.",
    tip: "CBR examiners watch for courteous luggage assistance as standard etiquette.",
    keyWords: ["help u graag", "koffers", "kofferbak"]
  },
  {
    id: 10,
    phase: 'accepting',
    dutch: "Wilt u dat ik de achterklep voor u openmaak?",
    english: "Would you like me to open the tailgate/trunk for you?",
    pronunciation: "Vilt oow daht ik duh AHKH-tur-klep voor oow OH-puhn-mahk?",
    tip: "Proactive hospitality before the passenger attempts to lift heavy items.",
    keyWords: ["achterklep", "openmaak", "voor u"]
  },

  // 2. WELCOMING & BOARDING
  {
    id: 11,
    phase: 'welcoming',
    dutch: "Goedendag! Welkom aan boord. Gaat u lekker zitten.",
    english: "Good day! Welcome aboard. Please take a comfortable seat.",
    pronunciation: "KHOO-yuhn-dahkh! VEL-kom ahn bohrt. KHAHT oow LEK-kur ZIT-tuhn.",
    tip: "Warm and inviting tone sets a relaxed atmosphere.",
    keyWords: ["Goedendag", "Welkom aan boord", "zitten"]
  },
  {
    id: 12,
    phase: 'welcoming',
    dutch: "Vergeet u alstublieft niet om uw veiligheidsgordel vast te klikken.",
    english: "Please do not forget to fasten your seatbelt.",
    pronunciation: "Vur-KHAYT oow ahl-stew-BLEEFT neet om oow VYE-likh-hayts-gor-duhl VAHST tuh klik-kuhn.",
    tip: "CBR Requirement: Reminding passengers of seatbelt use is mandatory before moving.",
    keyWords: ["veiligheidsgordel", "vast te klikken", "alstublieft"]
  },
  {
    id: 13,
    phase: 'welcoming',
    dutch: "Is de temperatuur in de auto aangenaam voor u?",
    english: "Is the temperature in the car pleasant for you?",
    pronunciation: "Is duh tem-puh-rah-TOOR in duh OW-toh AHN-khuh-nahm voor oow?",
    tip: "Demonstrates customer care and prevents climate disputes.",
    keyWords: ["temperatuur", "aangenaam", "in de auto"]
  },
  {
    id: 14,
    phase: 'welcoming',
    dutch: "Heeft u voldoende beenruimte, of moet ik de stoel verstellen?",
    english: "Do you have enough legroom, or should I adjust the front seat?",
    pronunciation: "Hayft oow vol-DOON-duh BAYN-roym-tuh, of moot ik duh stool vur-STEL-luhn?",
    tip: "Essential for taller guests and business passengers.",
    keyWords: ["beenruimte", "stoel verstellen", "voldoende"]
  },
  {
    id: 15,
    phase: 'welcoming',
    dutch: "Staat de muziek niet te luid? Ik kan de radio gerust zachter zetten of uitzetten.",
    english: "Is the music not too loud? I can easily turn down the radio or turn it off.",
    pronunciation: "Staht duh mew-ZEEK neet tuh loyd? Ik kahn duh RAH-dee-oh khuh-ROOST zahkh-tur zet-tuhn...",
    tip: "The vehicle is the passenger's mobile workspace or rest zone.",
    keyWords: ["muziek", "te luid", "radio zachter"]
  },
  {
    id: 16,
    phase: 'welcoming',
    dutch: "Voor kinderen onder de twaalf jaar en kleiner dan 1,35 meter heb ik een stoelverhoger.",
    english: "For children under twelve years and under 1.35m, I have a booster seat.",
    pronunciation: "Voor KIN-duh-ruhn ON-dur duh TVAHLLF yahr en KLY-nur dahn... stoel-vur-HOH-khur.",
    tip: "CBR safety rule: Driver is legally responsible for proper child restraint.",
    keyWords: ["kinderen", "1,35 meter", "stoelverhoger"]
  },
  {
    id: 17,
    phase: 'welcoming',
    dutch: "Mag ik uw jas aannemen en ophangen?",
    english: "May I take your coat and hang it up?",
    pronunciation: "Mahkh ik oow yahs AHN-nay-muhn en OP-hahng-uhn?",
    tip: "High-end corporate etiquette evaluated on the practical exam.",
    keyWords: ["uw jas", "aannemen", "ophangen"]
  },
  {
    id: 18,
    phase: 'welcoming',
    dutch: "Alles staat klaar, dan starten we nu de taximeter.",
    english: "Everything is set, we will now start the taximeter.",
    pronunciation: "AHL-luhs staht klahr, dahn STAHR-tuhn wuh new duh tak-see-MAY-tur.",
    tip: "Taximeter must only be started when actual transport commences.",
    keyWords: ["starten", "taximeter", "alles staat klaar"]
  },
  {
    id: 19,
    phase: 'welcoming',
    dutch: "Heeft u een voorkeur voor een rustige rit of luistert u graag naar het nieuws?",
    english: "Do you prefer a quiet ride or do you enjoy listening to the news?",
    pronunciation: "Hayft oow uhn VOOR-koor voor uhn ROOS-tuh-khuh rit of loy-sturt oow...?",
    tip: "Respect passenger preference for silence or light conversation.",
    keyWords: ["voorkeur", "rustige rit", "nieuws"]
  },
  {
    id: 20,
    phase: 'welcoming',
    dutch: "Pas alstublieft op uw vingers bij het sluiten van het portier.",
    english: "Please watch your fingers when closing the door.",
    pronunciation: "Pahs ahl-stew-BLEEFT op oow VING-urs by het SLOOY-tuhn vahn het por-TEER.",
    tip: "CBR safety awareness to prevent painful passenger injuries.",
    keyWords: ["pas op", "vingers", "sluiten portier"]
  },

  // 3. EN ROUTE & NAVIGATION
  {
    id: 21,
    phase: 'enroute',
    dutch: "Ik volg de snelste route via de ringweg A10. Heeft u een andere voorkeur?",
    english: "I am taking the fastest route via the ring road A10. Do you have a different preference?",
    pronunciation: "Ik volkh duh SNEL-stuh ROO-tuh VEE-ah duh RING-vekh... voohr-koor?",
    tip: "CBR requirement: Always consult the customer on route choice.",
    keyWords: ["snelste route", "ringweg", "andere voorkeur"]
  },
  {
    id: 22,
    phase: 'enroute',
    dutch: "Er is momenteel file op de hoofdroute. Mag ik omrijden via de provinciale weg?",
    english: "There is currently a traffic jam on the main route. May I take a detour via the local highway?",
    pronunciation: "Ehr is moh-men-TAYL FEE-luh... Mahkh ik OM-rye-duhn vee-ah duh pro-vin-shah-luh vekh?",
    tip: "Never deviate from normal route without passenger consent.",
    keyWords: ["file", "omrijden", "provinciale weg"]
  },
  {
    id: 23,
    phase: 'enroute',
    dutch: "We verwachten over een kwartier op Schiphol aan te komen.",
    english: "We expect to arrive at Schiphol in about fifteen minutes.",
    pronunciation: "Vuh vur-VAHCH-tuhn OH-vur uhn kvahr-TEER op SKHIP-hol ahn tuh KOH-muhn.",
    tip: "Keeping the passenger informed about arrival time reduces flight stress.",
    keyWords: ["over een kwartier", "aankomen", "verwachten"]
  },
  {
    id: 24,
    phase: 'enroute',
    dutch: "Rijd ik comfortabel genoeg zo, of wilt u dat ik rustiger optrek?",
    english: "Am I driving comfortably enough, or would you like me to accelerate more gently?",
    pronunciation: "Ryet ik com-for-TAH-buhl khuh-NOOKH zoh, of vilt oow daht ik ROOS-tuh-khur op-trek?",
    tip: "Demonstrates smooth driving technique (Het Nieuwe Rijden).",
    keyWords: ["comfortabel", "rustiger optrek", "rijd ik"]
  },
  {
    id: 25,
    phase: 'enroute',
    dutch: "Geen zorgen over uw trein, we hebben nog ruim voldoende speling.",
    english: "No worries about your train, we still have plenty of time margin.",
    pronunciation: "Khayn ZOR-khuhn oh-vur oow tryn, vuh HEB-buhn nokh roym vol-DOON-duh SPAY-ling.",
    tip: "Reassures hurried passengers calmly without speeding.",
    keyWords: ["geen zorgen", "trein", "speling"]
  },
  {
    id: 26,
    phase: 'enroute',
    dutch: "Mocht u het koud of warm krijgen, laat het me gerust weten.",
    english: "Should you get cold or warm, please let me know right away.",
    pronunciation: "Mokh-t oow het kowt of vahrm KRY-khuhn, laht het muh khuh-ROOST VAY-tuhn.",
    tip: "Ongoing passenger comfort check during longer trips.",
    keyWords: ["koud of warm", "gerust weten", "laat het me"]
  },
  {
    id: 27,
    phase: 'enroute',
    dutch: "Ik stop zo direct even bij een veilige halteplaats voor uw medereiziger.",
    english: "I will pull over in a moment at a safe stop for your fellow passenger.",
    pronunciation: "Ik stop zoh dee-REKT AY-vuhn by uhn VYE-luh-khuh HAHL-tuh-plahts...",
    tip: "Boarding and alighting must always happen in a safe, legal stopping zone.",
    keyWords: ["veilige halteplaats", "medereiziger", "stop direct"]
  },
  {
    id: 28,
    phase: 'enroute',
    dutch: "Heeft u een prettige dag gehad vandaag?",
    english: "Did you have a pleasant day today?",
    pronunciation: "Hayft oow uhn PRET-tuh-khuh dahkh khuh-HAHT vahn-DAHGH?",
    tip: "Polite, non-intrusive Dutch small talk opener.",
    keyWords: ["prettige dag", "gehad vandaag", "heeft u"]
  },
  {
    id: 29,
    phase: 'enroute',
    dutch: "We naderen nu uw bestemming over enkele honderden meters.",
    english: "We are now approaching your destination in a few hundred meters.",
    pronunciation: "Vuh NAH-duh-ruhn new oow buh-STEM-ming oh-vur ENG-kuh-luh HON-dur-duhn MAY-turs.",
    tip: "Gives passenger time to gather their belongings.",
    keyWords: ["naderen", "bestemming", "enkele honderden meters"]
  },
  {
    id: 30,
    phase: 'enroute',
    dutch: "Wilt u direct voor de hoofdingang worden afgezet of liever bij de parkeerplaats?",
    english: "Would you like to be dropped off directly at the main entrance or by the parking lot?",
    pronunciation: "Vilt oow dee-REKT voor duh HOHFD-ing-ang vor-duhn AHF-khuh-zet...?",
    tip: "Clarifies final drop-off spot accurately.",
    keyWords: ["hoofdingang", "afgezet", "parkeerplaats"]
  },

  // 4. ARRIVAL, FARE & RECEIPT
  {
    id: 31,
    phase: 'destination',
    dutch: "We zijn gearriveerd op Keizersgracht 421. Het metertarief is 24 euro vijftig.",
    english: "We have arrived at Keizersgracht 421. The meter fare is 24 euros fifty.",
    pronunciation: "Vuh zyn khuh-ahr-ree-VEERT... Het MAY-tur-tah-reef is...",
    tip: "State destination and exact meter amount clearly.",
    keyWords: ["gearriveerd", "metertarief", "euro"]
  },
  {
    id: 32,
    phase: 'destination',
    dutch: "Betaalt u met pinpas, creditcard of contant geld?",
    english: "Will you pay by debit card, credit card, or cash?",
    pronunciation: "Buh-TAHLT oow met PIN-pahs, KRAY-dit-kahrt of kon-TAHNT khelt?",
    tip: "In the Netherlands, taxi drivers must accept electronic payments by law.",
    keyWords: ["pinpas", "creditcard", "contant"]
  },
  {
    id: 33,
    phase: 'destination',
    dutch: "Hier is uw geprinte BTM-ritbewijs met alle ritgegevens en btw.",
    english: "Here is your printed BTM trip receipt with all trip details and VAT.",
    pronunciation: "Heer is oow khuh-PRIN-tuh BAY-TAY-EM rit-buh-VYS met AHL-luh rit-khuh-KHAY-vuhns...",
    tip: "Every passenger has the legal right to a printed BTM receipt upon request.",
    keyWords: ["ritbewijs", "ritgegevens", "btw"]
  },
  {
    id: 34,
    phase: 'destination',
    dutch: "Wilt u dat ik de betaling opsplits voor u en uw collega?",
    english: "Would you like me to split the payment for you and your colleague?",
    pronunciation: "Vilt oow daht ik duh buh-TAH-ling OP-splits voor oow en oow col-LAY-khah?",
    tip: "Splitting fares electronically is a common corporate request.",
    keyWords: ["betaling", "opsplits", "collega"]
  },
  {
    id: 35,
    phase: 'destination',
    dutch: "Controleert u alstublieft even of u niets heeft laten liggen, zoals uw telefoon of sleutels.",
    english: "Please check if you haven't left anything behind, like your phone or keys.",
    pronunciation: "Con-troh-LAYRT oow... of oow neets hayft LAH-tuhn LIG-khuhn...",
    tip: "Prevents lost property hassle. CBR examiners give points for this reminder.",
    keyWords: ["niets laten liggen", "telefoon", "sleutels"]
  },
  {
    id: 36,
    phase: 'destination',
    dutch: "Ik loop even om om uw koffers uit de achterbak te tillen.",
    english: "I will walk around to lift your luggage out of the trunk.",
    pronunciation: "Ik loop AY-vuhn om om oow KOF-furs oyt duh AHKH-tur-bahk tuh TIL-luhn.",
    tip: "Professional drivers always assist with unloading luggage.",
    keyWords: ["koffers", "achterbak", "tillen"]
  },
  {
    id: 37,
    phase: 'destination',
    dutch: "Hartelijk dank voor de rit en een hele fijne dag verder!",
    english: "Thank you very much for the ride and have a wonderful day ahead!",
    pronunciation: "HAHR-tuh-luhk dahnk voor duh rit en uhn HAY-luh FY-nuh dahkh VEHR-dur!",
    tip: "Positive final impression ensures high customer review ratings.",
    keyWords: ["hartelijk dank", "fijne dag", "voor de rit"]
  },
  {
    id: 38,
    phase: 'destination',
    dutch: "Als u tevreden was, waardeer ik een positieve beoordeling zeer.",
    english: "If you were satisfied, I would greatly appreciate a positive review.",
    pronunciation: "Ahls oow tuh-VRAY-duhn vahs, wahr-DAYR ik uhn poh-zee-TEE-vuh buh-OHR-duh-ling...",
    tip: "Polite review solicitation without being pushy.",
    keyWords: ["tevreden", "beoordeling", "positieve"]
  },
  {
    id: 39,
    phase: 'destination',
    dutch: "Hier is uw wisselgeld en uw betalingsbewijs.",
    english: "Here is your change and your receipt of payment.",
    pronunciation: "Heer is oow VIS-suhl-khelt en oow buh-TAH-lings-buh-vys.",
    tip: "Count change clearly back to cash-paying passengers.",
    keyWords: ["wisselgeld", "betalingsbewijs"]
  },
  {
    id: 40,
    phase: 'destination',
    dutch: "Tot ziens en een goede reis gewenst!",
    english: "Goodbye and have a safe journey onward!",
    pronunciation: "Tot ZEENS en uhn KHOO-duh RYS khuh-WENST!",
    tip: "Standard courteous farewell at airport or station.",
    keyWords: ["tot ziens", "goede reis"]
  },

  // 5. SPECIAL NEEDS & PAMAN
  {
    id: 41,
    phase: 'special',
    dutch: "Heeft u een handje hulp nodig bij het in- of uitstappen?",
    english: "Do you need a helping hand getting in or out of the car?",
    pronunciation: "Hayft oow uhn HAHN-tyuh HOOLP NOH-dukh by het in- of OYT-stahp-puhn?",
    tip: "Always ask permission before touching or supporting an elderly passenger.",
    keyWords: ["handje hulp", "instappen", "uitstappen"]
  },
  {
    id: 42,
    phase: 'special',
    dutch: "Uw blindengeleidehond / hulphond reist vanzelfsprekend gratis en van harte welkom mee.",
    english: "Your guide dog / assistance dog of course travels for free and is very welcome.",
    pronunciation: "Oow BLIN-duhn-khuh-LY-duh-hont... ryest vahn-ZELF-spray-kuhnt KHRAH-tis...",
    tip: "CBR Legal rule: Refusing a certified assistance dog is strictly illegal under Dutch & UN disability law.",
    keyWords: ["hulphond", "gratis", "welkom mee"]
  },
  {
    id: 43,
    phase: 'special',
    dutch: "Ik klap uw rolstoel zorgvuldig in en zet hem stevig vast met de spanbanden.",
    english: "I will fold your wheelchair carefully and secure it firmly with the tie-down straps.",
    pronunciation: "Ik klahp oow ROL-stool zorg-VUL-dukh in en zet hem STAY-vuhkh vahst...",
    tip: "Ensuring wheelchair anchors meet safety norms is a critical exam topic.",
    keyWords: ["rolstoel inklappen", "spanbanden", "vastzetten"]
  },
  {
    id: 44,
    phase: 'special',
    dutch: "Neemt u alle tijd die u nodig heeft, we hebben geen haast.",
    english: "Take all the time you need, we are in no hurry.",
    pronunciation: "Naymt oow AHL-luh tyt dee oow NOH-dukh hayft, vuh HEB-buhn khayn hahst.",
    tip: "Reduces anxiety for mobility-impaired or senior passengers.",
    keyWords: ["alle tijd", "geen haast", "neemt u"]
  },
  {
    id: 45,
    phase: 'special',
    dutch: "Zit u stabiel en comfortabel zo? Doet de gordel geen pijn?",
    english: "Are you sitting stably and comfortably? Is the seatbelt not hurting?",
    pronunciation: "Zit oow stah-BEEL en com-for-TAH-buhl zoh? Doot duh GOR-duhl khayn pyn?",
    tip: "Crucial for passengers with medical conditions or physical frailty.",
    keyWords: ["stabiel", "comfortabel", "gordel geen pijn"]
  },
  {
    id: 46,
    phase: 'special',
    dutch: "Bij een ongeval pas ik direct het PAMAN-protocol toe: eerst Plaats beveiligen, dan 112 bellen.",
    english: "In an accident, I immediately apply PAMAN protocol: first secure Location, then call 112.",
    pronunciation: "By uhn ON-khuh-vahl pahs ik dee-REKT het PAH-MAHN pro-toh-kol too...",
    tip: "PAMAN: P=Plaats, A=Aard, M=Meldkamer, A=Aantal gewonden, N=Noodzakelijke hulp.",
    keyWords: ["PAMAN-protocol", "Plaats beveiligen", "112 bellen"]
  },
  {
    id: 47,
    phase: 'special',
    dutch: "Blijft u rustig zitten, ik zet de alarmlichten aan en trek mijn veiligheidshesje aan.",
    english: "Please remain seated calmly, I will turn on hazard lights and put on my safety vest.",
    pronunciation: "Blyft oow ROOS-tuhkh ZIT-tuhn, ik zet duh ah-LAHRM-likh-tuhn ahn...",
    tip: "First duty of the driver at an accident scene: safety first.",
    keyWords: ["alarmlichten", "veiligheidshesje", "blijft u rustig"]
  },
  {
    id: 48,
    phase: 'special',
    dutch: "Is er medische assistentie nodig of heeft u medicijnen in uw tas?",
    english: "Is medical assistance needed or do you have medication in your bag?",
    pronunciation: "Is ehr MAY-dee-suh ahs-sis-TEN-see NOH-dukh of hayft oow may-dee-SY-nuhn...?",
    tip: "Identifying medical emergencies early saves lives.",
    keyWords: ["medische assistentie", "medicijnen"]
  },
  {
    id: 49,
    phase: 'special',
    dutch: "Ik begeleid u tot aan de voordeur van de kliniek / woning.",
    english: "I will escort you all the way to the clinic / residence front door.",
    pronunciation: "Ik buh-khuh-LYT oow tot ahn duh VOOR-door vahn duh klee-NEEK...",
    tip: "Standard care protocol in contract healthcare transport (Zorgvervoer).",
    keyWords: ["begeleid", "voordeur", "kliniek"]
  },
  {
    id: 50,
    phase: 'special',
    dutch: "Mag ik uw rollator voor u in de kofferbak opbergen?",
    english: "May I store your walking frame / rollator in the trunk for you?",
    pronunciation: "Mahkh ik oow rol-LAH-tor voor oow in duh KOF-fur-bahk op-BEHR-khuhn?",
    tip: "Polite handling of mobility aids.",
    keyWords: ["rollator", "kofferbak opbergen"]
  },

  // 6. CONFLICT RESOLUTION & AGGRESSION
  {
    id: 51,
    phase: 'conflict',
    dutch: "Meneer / mevrouw, ik begrijp dat u gefrustreerd bent door de vertraging, maar ik vraag u beleefd om kalm te blijven.",
    english: "Sir / Madam, I understand you are frustrated by the delay, but I politely ask you to remain calm.",
    pronunciation: "Muh-NAYR / muh-VROW, ik buh-KHRYP daht oow khuh-froos-TRAYRT bent... kahlm tuh BLY-vuhn.",
    tip: "Acknowledge the emotion without accepting abusive language.",
    keyWords: ["begrijp uw frustratie", "beleefd", "kalm blijven"]
  },
  {
    id: 52,
    phase: 'conflict',
    dutch: "Roken, vapen, eten en open alcohol drinken zijn in deze taxi bij wet verboden.",
    english: "Smoking, vaping, eating, and drinking open alcohol are strictly forbidden by law in this taxi.",
    pronunciation: "ROH-kuhn, VAY-puhn, AY-tuhn en OH-puhn AHL-co-hol... zyn by wet vur-BOH-duhn.",
    tip: "State company rules and legal prohibitions objectively without shouting.",
    keyWords: ["roken verboden", "open alcohol", "bij wet"]
  },
  {
    id: 53,
    phase: 'conflict',
    dutch: "Als u weigert uw veiligheidsgordel om te doen, mag ik de rit helaas niet starten.",
    english: "If you refuse to wear your seatbelt, I cannot legally start this ride.",
    pronunciation: "Ahls oow VYE-khurt oow VYE-likh-hayts-gor-duhl... mahkh ik duh rit hay-LAHS neet STAHR-tuhn.",
    tip: "CBR Golden Rule: Driver has the legal right to refuse transport if safety is compromised.",
    keyWords: ["weigert gordel", "rit niet starten", "veiligheid"]
  },
  {
    id: 54,
    phase: 'conflict',
    dutch: "Ik tolereer geen scheldwoorden of fysieke dreiging. Als dit aanhoudt, moet ik de rit direct beëindigen.",
    english: "I do not tolerate swearing or physical threats. If this continues, I must terminate the ride immediately.",
    pronunciation: "Ik toh-luh-RAYR khayn SHELT-woor-duhn... rit dee-REKT buh-EYN-dee-khuhn.",
    tip: "Set clear boundaries before conflict escalates.",
    keyWords: ["geen scheldwoorden", "dreiging", "rit beëindigen"]
  },
  {
    id: 55,
    phase: 'conflict',
    dutch: "Het metertarief wordt wettelijk geregistreerd door de boordcomputer. Ik kan geen lagere prijs hanteren.",
    english: "The meter fare is legally registered by the onboard computer. I cannot apply a lower price.",
    pronunciation: "Het MAY-tur-tah-reef vort VET-tuh-luhk khuh-ray-khis-TREERT... khayn LAH-khuh-ruh prys...",
    tip: "De-escalate fare arguments by referring to the automated legal system (BCT).",
    keyWords: ["boordcomputer", "wettelijk geregistreerd", "metertarief"]
  },
  {
    id: 56,
    phase: 'conflict',
    dutch: "U heeft het recht een klacht in te dienen via ons klachtenformulier of bij Taxiklacht.nl.",
    english: "You have the right to file a complaint via our complaint form or at Taxiklacht.nl.",
    pronunciation: "Oow hayft het rekht uhn KLAHCHT in tuh DEE-nuhn... Tahk-see-klaht.nl.",
    tip: "Offering official dispute resolution channels defuses street arguments instantly.",
    keyWords: ["klacht indienen", "Taxiklacht.nl", "klachtenformulier"]
  },
  {
    id: 57,
    phase: 'conflict',
    dutch: "Ik zet de auto stil op deze goed verlichte openbare plek tot we het rustig hebben opgelost.",
    english: "I am stopping the car at this well-lit public place until we resolve this calmly.",
    pronunciation: "Ik zet duh OW-toh stil op DAY-zuh khoot vur-LIKH-tuh OH-puhn-bah-ruh plek...",
    tip: "Safety tactic: Never argue while driving; stop at a visible, safe location.",
    keyWords: ["auto stilzetten", "goed verlichte plek", "veiligheid"]
  },
  {
    id: 58,
    phase: 'conflict',
    dutch: "Wilt u alstublieft het voertuig rustig verlaten? Anders ben ik genoodzaakt de politie te bellen.",
    english: "Would you please leave the vehicle calmly? Otherwise I am forced to call the police.",
    pronunciation: "Vilt oow... het VOOR-tooykh ROOS-tuhkh vur-LAH-tuhn? Ahn-durs... poh-LEE-tsee BEL-luhn.",
    tip: "Last resort escalation step when a passenger becomes belligerent.",
    keyWords: ["voertuig verlaten", "politie bellen", "genoodzaakt"]
  },
  {
    id: 59,
    phase: 'conflict',
    dutch: "U kunt op het BTM-bonnetje al mijn gegevens en het ritnummer terugvinden.",
    english: "You can find all my driver details and the trip number on the printed BTM receipt.",
    pronunciation: "Oow koont op het BAY-TAY-EM bon-nyuh ahl myn khuh-KHAY-vuhns... tuh-ROOKH-vin-duhn.",
    tip: "Transparency builds trust and calms suspicious passengers.",
    keyWords: ["BTM-bonnetje", "mijn gegevens", "ritnummer"]
  },
  {
    id: 60,
    phase: 'conflict',
    dutch: "Laten we beiden diep ademhalen en dit op een volwassen manier afhandelen.",
    english: "Let us both take a deep breath and settle this in a mature manner.",
    pronunciation: "LAH-tuhn wuh BY-duhn deep AH-duhm-hah-luhn en dit... AHF-hahn-duh-luhn.",
    tip: "Classic verbal judo technique to bring emotional temperature down.",
    keyWords: ["diep ademhalen", "volwassen", "afhandelen"]
  },

  // 7. INTERACTION WITH AUTHORITIES & POLICE
  {
    id: 61,
    phase: 'authorities',
    dutch: "Goedemiddag agent. Hier zijn mijn rijbewijs, chauffeurskaart en het kentekenbewijs van het voertuig.",
    english: "Good afternoon officer. Here are my driver's license, taxi driver card, and vehicle registration certificate.",
    pronunciation: "KHOO-yuh-mid-dahkh ah-KHENT. Heer zyn myn RY-buh-vys, shoh-FURS-kahrt en het KEN-tay-kuhn-buh-vys...",
    tip: "Always hand over the three required documents calmly with two hands.",
    keyWords: ["agent", "rijbewijs", "chauffeurskaart", "kentekenbewijs"]
  },
  {
    id: 62,
    phase: 'authorities',
    dutch: "Ik zal direct een BCT-inspectieprint voor u uitdraaien via de boordcomputer.",
    english: "I will immediately generate a BCT inspection printout for you via the onboard computer.",
    pronunciation: "Ik zahl dee-REKT uhn BAY-SAY-TAY in-SPEK-see-print voor oow OYT-drah-yuhn...",
    tip: "ILT and police inspectors have the statutory right to request a BCT printout.",
    keyWords: ["BCT-inspectieprint", "uitdraaien", "boordcomputer"]
  },
  {
    id: 63,
    phase: 'authorities',
    dutch: "Natuurlijk werk ik direct mee aan de alcoholblaastest. Ik ben beroepschauffeur en nuchter.",
    english: "Of course I will immediately cooperate with the alcohol breathalyzer test. I am a professional driver and sober.",
    pronunciation: "Nah-TOOR-luhk vehrk ik dee-REKT may ahn duh AHL-co-hol BLAHS-test...",
    tip: "Legal zero tolerance limit for professional drivers is 0.2 promille (88 ug/l).",
    keyWords: ["alcoholblaastest", "meewerken", "beroepschauffeur"]
  },
  {
    id: 64,
    phase: 'authorities',
    dutch: "Mijn APK-keuringsrapport en de verplichte taxi-inzittendenverzekering zijn digitaal geregistreerd bij de RDW.",
    english: "My APK vehicle inspection report and mandatory passenger liability insurance are digitally registered with RDW.",
    pronunciation: "Myn AH-PAY-KAH kur-ings-rahp-port en duh vur-PLIKH-tuh in-ZIT-tuhn-duhn vur-ZAY-kuh-ring...",
    tip: "In the Netherlands, insurance and MOT validity are verified online via the license plate.",
    keyWords: ["APK-keuringsrapport", "inzittendenverzekering", "RDW"]
  },
  {
    id: 65,
    phase: 'authorities',
    dutch: "Kunt u mij alstublieft rustig toelichten welke overtreding ik volgens u heb begaan?",
    english: "Could you please explain calmly which violation I am alleged to have committed?",
    pronunciation: "Koont oow my ahl-stew-BLEEFT ROOS-tuhkh TOO-likh-tuhn vel-kuh oh-vur-TRAY-ding...?",
    tip: "Ask for clarification with a respectful, non-argumentative tone.",
    keyWords: ["toelichten", "welke overtreding", "rustig"]
  },
  {
    id: 66,
    phase: 'authorities',
    dutch: "Ik zet de motor uit en doe de alarmlichten aan voor de veiligheid tijdens deze controle.",
    english: "I am turning off the engine and turning on hazard lights for safety during this check.",
    pronunciation: "Ik zet duh MOH-tor oyt en doo duh ah-LAHRM-likh-tuhn ahn...",
    tip: "Demonstrates safety-conscious professional road behavior to the officers.",
    keyWords: ["motor uitzetten", "alarmlichten", "veiligheid"]
  },
  {
    id: 67,
    phase: 'authorities',
    dutch: "Wilt u dat ik in de auto blijf zitten of heeft u liever dat ik uitstap?",
    english: "Do you want me to remain seated inside the car or do you prefer that I step outside?",
    pronunciation: "Vilt oow daht ik in duh OW-toh blyf ZIT-tuhn of hayft oow LEE-vur daht ik OYT-stahp?",
    tip: "Never exit the vehicle abruptly without asking first; police prioritize officer safety.",
    keyWords: ["in de auto blijven", "uitstappen"]
  },
  {
    id: 68,
    phase: 'authorities',
    dutch: "Ik begrijp dat u mij een bekeuring aanzegt. Mag ik een kopie of toelichting op het proces-verbaal?",
    english: "I understand you are issuing a fine. May I receive a copy or explanation of the official police report?",
    pronunciation: "Ik buh-KHRYP daht oow my uhn buh-KOO-ring AHN-zekht. Mahkh ik uhn koh-PEE...?",
    tip: "Accept the citation on the spot without street hostility; contest it through formal channels if necessary.",
    keyWords: ["bekeuring", "proces-verbaal", "toelichting"]
  },
  {
    id: 69,
    phase: 'authorities',
    dutch: "Hier is het bewijs van mijn aansluiting bij de Toegelaten Taxi Organisatie (TTO) en de standplaatsvergunning.",
    english: "Here is proof of my affiliation with the Authorized Taxi Organization (TTO) and the taxi rank permit.",
    pronunciation: "Heer is het buh-VYS vahn myn AHN-sloy-ting by duh TAY-TAY-OH en duh stahnt-plahts-vur-GUN-ning.",
    tip: "Mandatory when working on public municipal stands in Amsterdam and other regulated cities.",
    keyWords: ["TTO", "standplaatsvergunning", "aansluiting"]
  },
  {
    id: 70,
    phase: 'authorities',
    dutch: "Dank u wel voor de correcte afhandeling, agent. Een fijne en veilige dienst verder!",
    english: "Thank you for the professional handling, officer. Have a pleasant and safe shift ahead!",
    pronunciation: "Dahnk oow vel voor duh cor-REK-tuh AHF-hahn-duh-ling, ah-KHENT. Uhn FY-nuh en VYE-luh-khuh deenst...",
    tip: "Leaving a polite, professional impression maintains the reputation of the taxi industry.",
    keyWords: ["correcte afhandeling", "veilige dienst", "dank u wel"]
  }
];

export const PRACTICAL_SCENARIOS: PracticalScenario[] = [
  {
    id: 'cbr-sim-01',
    title: "Scenario 1: Passagier weigert veiligheidsgordel",
    category: "Gordelplicht & Verantwoordelijkheid",
    cbrCriterion: "Veiligheidsinstructies geven en wetshandhaving toepassen (CBR Praktijk onderdeel 2)",
    situation: "Een 15-jarige passagier stapt achterin in en pakt zijn telefoon zonder de veiligheidsgordel om te doen. Je staat klaar om weg te rijden.",
    englishSituation: "A 15-year-old passenger gets in the back seat, looks at his phone and doesn't buckle up. You are ready to drive away.",
    turns: [
      {
        id: 1,
        speaker: 'passenger',
        dutchText: "Chauffeur, we kunnen gaan hoor! Ik heb haast, rijd maar snel door.",
        englishText: "Driver, we can go! I'm in a hurry, please drive fast.",
        options: [
          {
            id: '1a',
            dutchResponse: "Prima, dan vertrekken we meteen om tijd te winnen!",
            englishResponse: "Fine, then we leave immediately to save time!",
            isCorrect: false,
            feedback: "❌ Fout volgens CBR norm: Je mag NOOIT wegrijden zonder dat alle passagiers zijn ingelicht en gordels dragen. Verkeersveiligheid gaat altijd voor haast."
          },
          {
            id: '1b',
            dutchResponse: "Goedemiddag! Voor uw eigen veiligheid en volgens de wettelijke regels vraag ik u vriendelijk om eerst uw veiligheidsgordel om te doen.",
            englishResponse: "Good afternoon! For your own safety and under legal regulations, I kindly ask you to put on your seatbelt first.",
            isCorrect: true,
            feedback: "✅ Uitstekend! Vriendelijk, professioneel en direct de wettelijke veiligheidseis stellen vóórdat je optrekt."
          },
          {
            id: '1c',
            dutchResponse: "Zeg joh, doe die gordel om anders gooi ik je de auto uit!",
            englishResponse: "Hey you, put that belt on or I'll throw you out of the car!",
            isCorrect: false,
            feedback: "❌ Fout: Te agressief. De CBR examinator eist gastvrije de-escalerende communicatie."
          }
        ]
      },
      {
        id: 2,
        speaker: 'passenger',
        dutchText: "Nou zeg, achterin hoeft dat toch niet? Ik ben al 15!",
        englishText: "Come on, in the back that's not necessary right? I'm already 15!",
        options: [
          {
            id: '2a',
            dutchResponse: "Als u 15 bent krijgt u zelf de boete van ruim 160 euro van de politie, maar als chauffeur ben ik verplicht te zorgen dat iedereen vastzit.",
            englishResponse: "Since you are 15 you will get the 160+ euro fine from the police yourself, but as driver I am obligated to ensure everyone is buckled up.",
            isCorrect: true,
            feedback: "✅ Perfect! Je legt de wet helder uit: passagiers vanaf 12 jaar zijn zelf aansprakelijk voor de boete, maar veiligheid vereist dat de gordel omgaat."
          },
          {
            id: '2b',
            dutchResponse: "Oh, als u 15 bent maakt het mij niet uit, dan krijgt u de boete wel.",
            englishResponse: "Oh, if you're 15 it doesn't matter to me, you'll get the fine yourself.",
            isCorrect: false,
            feedback: "❌ Fout: Passagiersveiligheid is primair. Je mag niet rijden met onbeveiligde passagiers."
          }
        ]
      }
    ]
  },
  {
    id: 'cbr-sim-02',
    title: "Scenario 2: Klant met Blindengeleidehond",
    category: "PAMAN & Bijzondere Doelgroepen",
    cbrCriterion: "Correcte bejegening hulphonden & VN-verdrag Handicap (CBR Toetsterm)",
    situation: "Een visueel beperkte dame met een witte stok en een aangelijnde blindengeleidehond in tuig meldt zich bij je taxi op de standplaats.",
    englishSituation: "A visually impaired lady with a white cane and an assistance guide dog approaches your taxi on the rank.",
    turns: [
      {
        id: 1,
        speaker: 'passenger',
        dutchText: "Goedemiddag chauffeur, mag mijn blindengeleidehond Max mee naar het ziekenhuis?",
        englishText: "Good afternoon driver, may my guide dog Max come along to the hospital?",
        options: [
          {
            id: '1a',
            dutchResponse: "Nee sorry mevrouw, ik heb net mijn auto schoongemaakt en honden zijn verboden in mijn wagen.",
            englishResponse: "No sorry madam, I just cleaned my car and dogs are forbidden in my vehicle.",
            isCorrect: false,
            feedback: "❌ Grote fout! Het weigeren van een gecertificeerde hulphond is strafbaar en leidt tot direct zakken op het CBR praktijkexamen."
          },
          {
            id: '1b',
            dutchResponse: "Jazeker mevrouw, van harte welkom! Hulphonden reizen bij mij altijd gratis mee. Mag ik u helpen bij het instappen?",
            englishResponse: "Yes certainly madam, warmly welcome! Guide dogs always travel for free with me. May I assist you with boarding?",
            isCorrect: true,
            feedback: "✅ Perfecte CBR reactie: Hulphonden zijn verplicht, reizen gratis en je biedt passende hulp aan."
          },
          {
            id: '1c',
            dutchResponse: "Ja, maar dan moet de hond in de afgesloten kofferbak.",
            englishResponse: "Yes, but only if the dog rides in the closed trunk.",
            isCorrect: false,
            feedback: "❌ Fout: Hulphonden horen bij de eigenaar op de vloer van de achterbank of bijrijdersstoel."
          }
        ]
      }
    ]
  },
  {
    id: 'cbr-sim-03',
    title: "Scenario 3: Routeconflict & Tariefdiscussie",
    category: "Routekeuze & Taximeter",
    cbrCriterion: "Overleg plegen over route en tarieftransparantie (CBR Praktijk onderdeel 3)",
    situation: "Tijdens de rit merkt de klant op dat je via de ringweg rijdt in plaats van dwars door het stadscentrum.",
    englishSituation: "During the ride, the customer notices you are driving via the ring highway instead of through the city center.",
    turns: [
      {
        id: 1,
        speaker: 'passenger',
        dutchText: "Hé chauffeur! Waarom rijd je via de snelweg? Je probeert zeker extra kilometers te maken om meer geld te vangen?",
        englishText: "Hey driver! Why are you taking the highway? You're surely making extra kilometers to pocket more money?",
        options: [
          {
            id: '1a',
            dutchResponse: "Bemoeit u zich alstublieft niet met mijn werk, ik ben hier de chauffeur.",
            englishResponse: "Please don't interfere with my work, I'm the driver here.",
            isCorrect: false,
            feedback: "❌ Fout: Klantonvriendelijk en defensief. Dit leidt tot escalatie."
          },
          {
            id: '1b',
            dutchResponse: "Ik begrijp uw bezorgdheid. Er is nu ernstige verkeershinder in het centrum. Via de ringweg zijn we 10 minuten sneller en is het tijdtarief lager. Als u wilt kan ik direct de eerstvolgende afslag nemen naar het centrum.",
            englishResponse: "I understand your concern. There is heavy congestion in the center right now. Via the ring we are 10 minutes faster and time fare is lower. If you wish, I can take the next exit into the center.",
            isCorrect: true,
            feedback: "✅ Fantastisch de-escalerend: Je erkent het gevoel, legt rationeel uit (tijd vs afstandstarief) en geeft de klant de uiteindelijke keuze."
          }
        ]
      }
    ]
  },
  {
    id: 'cbr-sim-04',
    title: "Scenario 4: Agressieve of Aangeschoten Passagier",
    category: "Veiligheid & De-escalatie",
    cbrCriterion: "Persoonlijke veiligheid bewaken en grenzen stellen (CBR onderdeel 5)",
    situation: "Vrijdagnacht stapt een beschonken passagier in die begint te vloeken en weigert te zeggen waar hij heen moet.",
    englishSituation: "On Friday night, an intoxicated passenger enters who starts cursing and refuses to provide his destination.",
    turns: [
      {
        id: 1,
        speaker: 'passenger',
        dutchText: "Rijd gewoon verdomme ergens heen man! Wat kijk je nou dom?",
        englishText: "Just f***ing drive somewhere man! What are you staring at stupidly?",
        options: [
          {
            id: '1a',
            dutchResponse: "Meneer, ik wil u graag helpen naar huis te komen, maar ik tolereer geen scheldwoorden in deze taxi. Noemt u alstublieft een adres, anders kan ik deze rit niet starten.",
            englishResponse: "Sir, I would like to help you get home, but I do not tolerate cursing in this taxi. Please name an address, otherwise I cannot start this ride.",
            isCorrect: true,
            feedback: "✅ Heel goed! Kalm, duidelijk, grensstellend zonder terug te schelden."
          },
          {
            id: '1b',
            dutchResponse: "Stap nu meteen uit voor ik de politie bel, rotzak!",
            englishResponse: "Get out right now before I call the police, jerk!",
            isCorrect: false,
            feedback: "❌ Fout: Escalatie met scheldwoorden brengt je eigen veiligheid in gevaar."
          }
        ]
      }
    ]
  },
  {
    id: 'cbr-sim-05',
    title: "Scenario 5: Politiecontrole & Documentencontrole",
    category: "Interactie met de Politie",
    cbrCriterion: "Correcte beroepshouding en overhandigen wettelijke vervoersdocumenten",
    situation: "Je wordt door een politieauto naar een parkeerplaats geleid voor een algemene verkeers- en taxicontrole.",
    englishSituation: "You are pulled over by a police vehicle to a parking area for a routine traffic and taxi inspection.",
    turns: [
      {
        id: 1,
        speaker: 'police',
        dutchText: "Goedemiddag chauffeur, politiecontrole. Mag ik van u uw rijbewijs, uw geldige chauffeurskaart en het kentekenbewijs van het voertuig zien?",
        englishText: "Good afternoon driver, police check. May I see your driver's license, your valid taxi card, and the vehicle registration certificate?",
        options: [
          {
            id: '1a',
            dutchResponse: "Waarom houdt u mij aan? Ik reed toch niet te hard? U moet altijd weer taxi's lastigvallen!",
            englishResponse: "Why are you stopping me? I wasn't speeding right? You always have to harass taxis!",
            isCorrect: false,
            feedback: "❌ Fout: Defensief en vijandig. De politie heeft op grond van de Wegenverkeerswet en Wet Personenvervoer de bevoegdheid te allen tijde te controleren."
          },
          {
            id: '1b',
            dutchResponse: "Goedemiddag agent. Jazeker, alstublieft, hier zijn mijn rijbewijs, mijn Kiwa chauffeurskaart en het kentekenbewijs van deze taxi.",
            englishResponse: "Good afternoon officer. Yes certainly, please, here are my driver's license, my Kiwa taxi pass, and the vehicle registration.",
            isCorrect: true,
            feedback: "✅ Uitstekend! Rustig, beleefd en direct de drie verplichte documenten overhandigen."
          },
          {
            id: '1c',
            dutchResponse: "Mijn chauffeurskaart ligt nog thuis op tafel, maar mijn rijbewijs heeft u hier.",
            englishResponse: "My taxi driver card is at home on the table, but you have my driver's license here.",
            isCorrect: false,
            feedback: "❌ Zware overtreding: Rijden zonder fysieke chauffeurskaart in de BCT is strafbaar en leidt tot een hoge boete van de ILT."
          }
        ]
      },
      {
        id: 2,
        speaker: 'police',
        dutchText: "Dank u. De documenten zijn in orde. Ik vraag u nu even mee te werken aan een alcoholblaastest. Blaas aanhoudend in het mondstukje tot de pieptoon stopt.",
        englishText: "Thank you. The documents are in order. I now ask you to cooperate with a breathalyzer test. Blow steadily into the mouthpiece until the beep stops.",
        options: [
          {
            id: '2a',
            dutchResponse: "Ik weiger te blazen, ik heb haast en moet naar een klant toe!",
            englishResponse: "I refuse to blow, I'm in a hurry and have to pick up a customer!",
            isCorrect: false,
            feedback: "❌ Grote overtreding: Het weigeren van een blaastest is een misdrijf (Art. 163 WVW) en leidt tot onmiddellijke invordering van het rijbewijs."
          },
          {
            id: '2b',
            dutchResponse: "Natuurlijk werk ik mee. Ik ben beroepschauffeur en heb uiteraard geen alcohol gedronken. *blaast gelijkmatig*",
            englishResponse: "Of course I will cooperate. I am a professional driver and naturally have not consumed alcohol. *blows steadily*",
            isCorrect: true,
            feedback: "✅ Perfect! Meewerken is wettelijk verplicht en getuigt van professionaliteit. De alcohollimiet voor taxi is 0,2 promille."
          }
        ]
      }
    ]
  },
  {
    id: 'cbr-sim-06',
    title: "Scenario 6: ILT Inspectie & Boeteafhandeling",
    category: "ILT Inspectie & Handhaving",
    cbrCriterion: "BCT-gegevens verstrekken en professioneel reageren bij een bekeuring",
    situation: "Een inspecteur van de Inspectie Leefomgeving en Transport (ILT) controleert je BCT op een taxistandplaats en constateert een overschrijding van de rijtijd.",
    englishSituation: "An inspector from the ILT checks your BCT on a taxi stand and notes a violation of continuous driving time.",
    turns: [
      {
        id: 1,
        speaker: 'police',
        dutchText: "Chauffeur, ik lees op uw BCT dat u 5 uur achter elkaar heeft gereden zonder geldige pauze van 45 minuten. U overtreedt het Arbeidstijdenbesluit vervoer.",
        englishText: "Driver, I see on your BCT that you have driven 5 hours consecutively without a valid 45-min break. You are violating the Transport Working Hours Decree.",
        options: [
          {
            id: '1a',
            dutchResponse: "Dat klopt niet, uw apparaat is kapot! Schrijf maar een boete op, ik ga toch niet betalen!",
            englishResponse: "That's not true, your device is broken! Write a ticket, I won't pay anyway!",
            isCorrect: false,
            feedback: "❌ Fout: Agressie tegen inspecteurs lost niets op en leidt tot aanvullende processen-verbaal."
          },
          {
            id: '1b',
            dutchResponse: "Ik begrijp uw constatering, inspecteur. Er was sprake van een zware calamiteit en file op de A4 waardoor ik pas later kon stoppen. Ik heb dit genoteerd op de BCT-printout. Mag ik u deze toelichting laten zien?",
            englishResponse: "I understand your finding, inspector. There was a major emergency and traffic jam on the A4 so I could only pull over later. I noted this on the BCT printout. May I show you this explanation?",
            isCorrect: true,
            feedback: "✅ Correct en professioneel: Bij overmacht mag de chauffeur doorrijden naar de eerstvolgende veilige stopplaats, mits direct aangetekend op de BCT-print."
          }
        ]
      },
      {
        id: 2,
        speaker: 'police',
        dutchText: "Ik noteer uw toelichting in het rapport. U ontvangt de beschikking van het CJIB per post. U kunt daartegen binnen 6 weken bezwaar aantekenen.",
        englishText: "I will note your explanation in the report. You will receive the CJIB notice by mail. You can file an objection within 6 weeks.",
        options: [
          {
            id: '2a',
            dutchResponse: "Dank u wel voor de toelichting en de correcte afhandeling. Ik zal de formele bezwaarprocedure via het CJIB volgen. Fijne dag verder.",
            englishResponse: "Thank you for the explanation and professional handling. I will follow the formal appeal procedure via CJIB. Have a pleasant day ahead.",
            isCorrect: true,
            feedback: "✅ Uitstekend! Respectvol en juridisch juist: bezwaar tegen boetes dien je schriftelijk in bij de officier van justitie / CJIB, nooit via ruzie op straat."
          },
          {
            id: '2b',
            dutchResponse: "Nou, jullie naaien hardwerkende chauffeurs altijd!",
            englishResponse: "Well, you guys always screw hard-working drivers!",
            isCorrect: false,
            feedback: "❌ Fout: Onprofessioneel taalgebruik is in strijd met de vereiste beroepshouding."
          }
        ]
      }
    ]
  }
];
