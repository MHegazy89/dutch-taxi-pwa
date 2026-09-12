#!/usr/bin/env python3
"""
Generates the comprehensive 85+ Flashcards and 55+ Vocabulary items
and updates src/lib/curriculum.ts and scripts/etl/seed_data.py.
"""
import json
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent

VOCAB_ITEMS = [
    # 1. ATBV & RUST
    {"id": 1, "dutch_term": "Arbeidstijdenbesluit", "root_decomposition": "Arbeids|tijden|besluit", "literal_english": "Labor times decree", "legal_meaning": "Statutory Dutch regulation governing maximum driving hours, shifts, and mandatory rest periods for taxi drivers.", "exam_frequency": "high"},
    {"id": 2, "dutch_term": "Dagelijkserust", "root_decomposition": "Dagelijkse|rust", "literal_english": "Daily rest", "legal_meaning": "Mandatory continuous rest of at least 11 consecutive hours in a 24-hour cycle (may be reduced to 9h max 3x/week).", "exam_frequency": "high"},
    {"id": 3, "dutch_term": "Wekelijksedankrust", "root_decomposition": "Wekelijkse|rust", "literal_english": "Weekly rest", "legal_meaning": "Mandatory unbroken rest period of at least 45 consecutive hours per 14-day rolling window.", "exam_frequency": "high"},
    {"id": 4, "dutch_term": "Pauzeregeling", "root_decomposition": "Pauze|regeling", "literal_english": "Break regulation", "legal_meaning": "After at most 4.5 hours of continuous driving, a mandatory pause of at least 45 minutes (or 15 + 30 min) is required.", "exam_frequency": "high"},
    {"id": 5, "dutch_term": "Diensttijd", "root_decomposition": "Dienst|tijd", "literal_english": "Duty time / Shift time", "legal_meaning": "Total duration from starting login on the BCT until complete final log-off, including waiting and driving.", "exam_frequency": "high"},
    {"id": 6, "dutch_term": "Rijtijdenwet", "root_decomposition": "Rij|tijden|wet", "literal_english": "Driving times act", "legal_meaning": "National law establishing rules to prevent driver fatigue and traffic danger across commercial transport.", "exam_frequency": "high"},

    # 2. BCT & TECHNIEK
    {"id": 7, "dutch_term": "Boordcomputertaxi", "root_decomposition": "Boord|computer|taxi", "literal_english": "Onboard computer taxi (BCT)", "legal_meaning": "Mandatory digital recording device registering working times, journeys, breaks, and distances.", "exam_frequency": "high"},
    {"id": 8, "dutch_term": "Chauffeurskaart", "root_decomposition": "Chauffeurs|kaart", "literal_english": "Driver's taxi card", "legal_meaning": "Personal digital chip pass issued by Kiwa Register that must be inserted into the BCT during all commercial driving.", "exam_frequency": "high"},
    {"id": 9, "dutch_term": "Ondernemerskaart", "root_decomposition": "Ondernemers|kaart", "literal_english": "Entrepreneur card", "legal_meaning": "Company chip card used by taxi owners to download, secure, and inspect BCT fleet data every 5 weeks.", "exam_frequency": "medium"},
    {"id": 10, "dutch_term": "Inspectiekaart", "root_decomposition": "Inspectie|kaart", "literal_english": "Inspection card", "legal_meaning": "Official smartcard used by ILT inspectors and police officers to read and audit BCT data during roadside stops.", "exam_frequency": "medium"},
    {"id": 11, "dutch_term": "Taxameterkeuring", "root_decomposition": "Taxameter|keuring", "literal_english": "Taximeter inspection / calibration", "legal_meaning": "Mandatory yearly physical check and sealing of the taximeter by an authorized NMi verification station.", "exam_frequency": "high"},
    {"id": 12, "dutch_term": "Ritadministratie", "root_decomposition": "Rit|administratie", "literal_english": "Trip administration / logs", "legal_meaning": "Complete digital record of all passenger trips that must be retained by the enterprise for at least 7 years for tax audits.", "exam_frequency": "high"},

    # 3. GORDELPLICHT & VEILIGHEID
    {"id": 13, "dutch_term": "Gordelplicht", "root_decomposition": "Gordel|plicht", "literal_english": "Seatbelt obligation", "legal_meaning": "Legal duty to wear seatbelts (Art. 59 RVV 1990). Driver is liable for minors <12yo; passengers 12+ are individually liable.", "exam_frequency": "high"},
    {"id": 14, "dutch_term": "Kinderbeveiligingssysteem", "root_decomposition": "Kinder|beveiligings|systeem", "literal_english": "Child restraint system", "legal_meaning": "Approved ECE-R44 or i-Size child car seat or booster cushion required for children shorter than 1.35m.", "exam_frequency": "high"},
    {"id": 15, "dutch_term": "Stoelverhoger", "root_decomposition": "Stoel|verhoger", "literal_english": "Booster seat", "legal_meaning": "Raised cushion ensuring the vehicle diagonal seatbelt rests properly across the child's shoulder rather than neck.", "exam_frequency": "high"},
    {"id": 16, "dutch_term": "Vrijstellinggordel", "root_decomposition": "Vrijstelling|gordel", "literal_english": "Seatbelt exemption", "legal_meaning": "Narrow legal exemption allowing drivers to unbuckle only while crawling on taxi ranks or during specific low-speed maneuvers.", "exam_frequency": "high"},
    {"id": 17, "dutch_term": "Veiligheidshesje", "root_decomposition": "Veiligheids|hesje", "literal_english": "Reflective safety vest", "legal_meaning": "High-visibility fluorescent vest that should be donned before exiting the vehicle during motorway breakdowns.", "exam_frequency": "high"},
    {"id": 18, "dutch_term": "Gevarendriehoek", "root_decomposition": "Gevaren|driehoek", "literal_english": "Hazard warning triangle", "legal_meaning": "Emergency reflective triangle placed 30 meters behind broken-down vehicle on normal roads (100m on motorways).", "exam_frequency": "medium"},

    # 4. PAMAN & NOODGEVALLEN
    {"id": 19, "dutch_term": "PAMANprotocol", "root_decomposition": "PA|MAN|protocol", "literal_english": "PAMAN protocol", "legal_meaning": "Accident sequence: P=Plaats beveiligen, A=Aard bepalen, M=Meldkamer bellen, A=Aantal slachtoffers, N=Noodzakelijke hulp.", "exam_frequency": "high"},
    {"id": 20, "dutch_term": "Alarmcentrale", "root_decomposition": "Alarm|centrale", "literal_english": "Emergency dispatch center 112", "legal_meaning": "National emergency operator directing police, ambulance, and fire rescue services to accident coordinates.", "exam_frequency": "high"},
    {"id": 21, "dutch_term": "Verbandtrommel", "root_decomposition": "Verband|trommel", "literal_english": "First aid kit", "legal_meaning": "Approved medical supply box kept accessible in vehicle containing sterile gauze, bandages, and burn dressings.", "exam_frequency": "high"},
    {"id": 22, "dutch_term": "Brandblusser", "root_decomposition": "Brand|blusser", "literal_english": "Fire extinguisher", "legal_meaning": "Mandatory certified vehicle powder/foam extinguisher inspected annually for commercial passenger vehicles.", "exam_frequency": "medium"},
    {"id": 23, "dutch_term": "Vluchtstrook", "root_decomposition": "Vlucht|strook", "literal_english": "Hard shoulder / Emergency lane", "legal_meaning": "Motorway lane reserved strictly for emergencies and authorized breakdown assistance; passengers must wait behind guardrail.", "exam_frequency": "high"},
    {"id": 24, "dutch_term": "Schadeformulier", "root_decomposition": "Schade|formulier", "literal_english": "European accident statement form", "legal_meaning": "Standard bilateral collision form filled out and signed by both involved motorists after any non-fatal road accident.", "exam_frequency": "high"},

    # 5. PASSAGIERS MET BIJZONDERE BEHOEFTEN
    {"id": 25, "dutch_term": "Blindengeleidehond", "root_decomposition": "Blinden|geleide|hond", "literal_english": "Guide dog for the blind", "legal_meaning": "Certified assistance dog that MUST legally be transported for free under the UN Convention on Disability Rights.", "exam_frequency": "high"},
    {"id": 26, "dutch_term": "Hulphond", "root_decomposition": "Hulp|hond", "literal_english": "Assistance / Service dog", "legal_meaning": "Trained medical assistance animal aiding passengers with physical, neurological, or psychological disabilities.", "exam_frequency": "high"},
    {"id": 27, "dutch_term": "Rolstoelvervoer", "root_decomposition": "Rolstoel|vervoer", "literal_english": "Wheelchair transport", "legal_meaning": "Specialized taxi transport where wheelchairs must be secured with 4-point tie-downs and a separate passenger 3-point belt.", "exam_frequency": "high"},
    {"id": 28, "dutch_term": "Spanbandensysteem", "root_decomposition": "Span|banden|systeem", "literal_english": "Tensioning straps system", "legal_meaning": "Crash-tested ratchet tie-down straps used to immobilize wheelchairs to the vehicle chassis floor.", "exam_frequency": "high"},
    {"id": 29, "dutch_term": "Zorgvervoer", "root_decomposition": "Zorg|vervoer", "literal_english": "Healthcare / Patient transport", "legal_meaning": "Contract transport for patients traveling to dialysis, chemotherapy, or day-care clinics with heightened duty of care.", "exam_frequency": "high"},
    {"id": 30, "dutch_term": "Leerlingenvervoer", "root_decomposition": "Leerlingen|vervoer", "literal_english": "Student / School transport", "legal_meaning": "Contract taxi transport for school children, requiring strict punctuality, child safety locks, and designated drop-offs.", "exam_frequency": "medium"},

    # 6. TARIEVEN & RITBEWIJS
    {"id": 31, "dutch_term": "Maximumtarief", "root_decomposition": "Maximum|tarief", "literal_english": "Maximum tariff ceiling", "legal_meaning": "Legally capped maximum fare rates established by the Dutch ministry (start rate + distance per km + time per minute).", "exam_frequency": "high"},
    {"id": 32, "dutch_term": "Vasteprijs", "root_decomposition": "Vaste|prijs", "literal_english": "Fixed fare price", "legal_meaning": "Agreed lump sum price between customer and operator before the trip starts; must not exceed the maximum meter calculation.", "exam_frequency": "high"},
    {"id": 33, "dutch_term": "BTMritbewijs", "root_decomposition": "BTM|rit|bewijs", "literal_english": "BTM printed receipt", "legal_meaning": "Printed trip receipt generated by the BCT containing driver license, company details, exact route, and VAT breakdown.", "exam_frequency": "high"},
    {"id": 34, "dutch_term": "Tariefkaart", "root_decomposition": "Tarief|kaart", "literal_english": "Tariff card", "legal_meaning": "Mandatory visual fare sheet that must be clearly legible to passengers both inside and outside the taxi vehicle.", "exam_frequency": "high"},
    {"id": 35, "dutch_term": "Wachttarief", "root_decomposition": "Wacht|tarief", "literal_english": "Waiting tariff", "legal_meaning": "Hourly rate charged when a customer explicitly requests the driver to wait at a pickup location or intermediate stop.", "exam_frequency": "medium"},
    {"id": 36, "dutch_term": "Toeslagtarief", "root_decomposition": "Toeslag|tarief", "literal_english": "Surcharge tariff", "legal_meaning": "Extra fee allowed only if agreed in advance (e.g., extra passenger handling or specific luggage services).", "exam_frequency": "low"},

    # 7. GEDRAG, DE-ESCALATIE & KLACHTEN
    {"id": 37, "dutch_term": "De-escalatietechniek", "root_decomposition": "De-escalatie|techniek", "literal_english": "De-escalation technique", "legal_meaning": "Calm, non-confrontational communication skills to diffuse passenger agitation, anger, or intoxication.", "exam_frequency": "high"},
    {"id": 38, "dutch_term": "Klachtenreglement", "root_decomposition": "Klachten|reglement", "literal_english": "Complaints procedure", "legal_meaning": "Mandatory statutory dispute procedure every taxi company must maintain; passengers can escalate to Taxiklacht.nl.", "exam_frequency": "high"},
    {"id": 39, "dutch_term": "Beroepshouding", "root_decomposition": "Beroeps|houding", "literal_english": "Professional conduct / demeanor", "legal_meaning": "Courteous, neutral, representative behavior expected of licensed drivers (hygiene, dress code, helpfulness).", "exam_frequency": "high"},
    {"id": 40, "dutch_term": "Vervoersplicht", "root_decomposition": "Vervoers|plicht", "literal_english": "Duty of carriage", "legal_meaning": "Duty on taxi stands to accept any reasonable trip request, unless safety, health, or intoxication justifies refusal.", "exam_frequency": "high"},
    {"id": 41, "dutch_term": "Weigeringsgrond", "root_decomposition": "Weigerings|grond", "literal_english": "Grounds for refusal", "legal_meaning": "Legitimate legal reasons to refuse transport: violence, dirty clothes damaging upholstery, or refusal to pay.", "exam_frequency": "high"},
    {"id": 42, "dutch_term": "Agressieprotocol", "root_decomposition": "Agressie|protocol", "literal_english": "Aggression protocol", "legal_meaning": "Established emergency action plan: stop vehicle in safe public area, disembark, call dispatch/police immediately.", "exam_frequency": "high"},

    # 8. VERGUNNINGEN & OVERHEID
    {"id": 43, "dutch_term": "Ondernemersvergunning", "root_decomposition": "Ondernemers|vergunning", "literal_english": "Taxi operator license", "legal_meaning": "Official company permit granted by Kiwa Register based on reliability, financial capacity, and professional competence.", "exam_frequency": "high"},
    {"id": 44, "dutch_term": "Standplaatsvergunning", "root_decomposition": "Stand|plaats|vergunning", "literal_english": "Taxi stand permit (TTO)", "legal_meaning": "Municipal permit or TTO affiliation required to pick up passengers at designated public taxi ranks in cities like Amsterdam.", "exam_frequency": "high"},
    {"id": 45, "dutch_term": "Straattaxi", "root_decomposition": "Straat|taxi", "literal_english": "Street hailed taxi", "legal_meaning": "Consumer taxi flagged on the street or picked up at a taxi stand; strictly bound to maximum regulated meter tariffs.", "exam_frequency": "high"},
    {"id": 46, "dutch_term": "Contractvervoer", "root_decomposition": "Contract|vervoer", "literal_english": "Contract transport", "legal_meaning": "Pre-booked, dedicated passenger transport governed by corporate, medical, or municipal service level contracts.", "exam_frequency": "high"},
    {"id": 47, "dutch_term": "Rijgeschiktheidsverklaring", "root_decomposition": "Rij|geschiktheids|verklaring", "literal_english": "Medical certificate of fitness", "legal_meaning": "Mandatory periodic occupational health physician check (Geneeskundige verklaring) certifying physical fitness to drive.", "exam_frequency": "high"},
    {"id": 48, "dutch_term": "VerklaringOmtrentGedrag", "root_decomposition": "Verklaring|Omtrent|Gedrag", "literal_english": "Certificate of good conduct (VOG)", "legal_meaning": "Official criminal background check from the Ministry of Justice required to obtain and renew a taxi chauffeurskaart.", "exam_frequency": "high"},
    {"id": 49, "dutch_term": "InspectieLeefomgevingTransport", "root_decomposition": "Inspectie|Leefomgeving|Transport", "literal_english": "Human Environment and Transport Inspectorate (ILT)", "legal_meaning": "Dutch national enforcement agency inspecting taxi compliance, BCT data, driving times, and license validity.", "exam_frequency": "high"},
    {"id": 50, "dutch_term": "WetPersonenvervoer", "root_decomposition": "Wet|Personen|vervoer", "literal_english": "Passenger transport act (Wp2000)", "legal_meaning": "The overarching Dutch statutory act governing all public and private commercial passenger transport services.", "exam_frequency": "high"},
    {"id": 51, "dutch_term": "Milieuzone", "root_decomposition": "Milieu|zone", "literal_english": "Environmental low-emission zone", "legal_meaning": "Designated municipal urban zone restricting entry of polluting vehicles; taxis must meet strict zero-emission standards.", "exam_frequency": "medium"},
    {"id": 52, "dutch_term": "Snelheidsbegrenzer", "root_decomposition": "Snelheids|begrenzer", "literal_english": "Speed limiter", "legal_meaning": "Factory or aftermarket device limiting vehicle top speed according to type approval requirements.", "exam_frequency": "low"},
    {"id": 53, "dutch_term": "Alcoholgrens", "root_decomposition": "Alcohol|grens", "literal_english": "Alcohol threshold", "legal_meaning": "Strict legal zero-tolerance limit of 0.2 promille (88 ug/l) for commercial professional taxi drivers.", "exam_frequency": "high"},
    {"id": 54, "dutch_term": "BTMprinter", "root_decomposition": "BTM|printer", "literal_english": "BTM printer", "legal_meaning": "Vehicle receipt printer connected to the BCT to issue immediate physical trip receipts with fiscal data.", "exam_frequency": "high"},
    {"id": 55, "dutch_term": "KiwaRegister", "root_decomposition": "Kiwa|Register", "literal_english": "Kiwa Register", "legal_meaning": "The official Dutch executive accreditation agency that evaluates and issues all taxi licenses and driver cards.", "exam_frequency": "high"},
]

FLASHCARDS = [
    # DOMAIN 1: GORDELPLICHT & VEILIGHEID (Cards 1 - 11)
    {
        "id": 1,
        "front_text": "Gordelplicht: Wie is aansprakelijk als een passagier van 14 jaar weigert de gordel om te doen?",
        "back_text": "🇬🇧 English: Who is liable if a 14yo passenger refuses a seatbelt?\n\n🇳🇱 De passagier van 14 jaar zelf!\nVanaf 12 jaar is de passagier zelfstandig wettelijk aansprakelijk voor de gordelboete (Art. 59 RVV 1990).",
        "audio_path": None, "vocab_refs": "[13]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 2,
        "front_text": "Gordelplicht: Wie is aansprakelijk voor een kind van 8 jaar zonder gordel in de taxi?",
        "back_text": "🇬🇧 English: Who is liable for an 8yo child without a seatbelt?\n\n🇳🇱 De taxichauffeur!\nVoor kinderen onder de 12 jaar draagt de chauffeur altijd de volledige juridische verantwoordelijkheid en boete.",
        "audio_path": None, "vocab_refs": "[13, 14]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 3,
        "front_text": "Vrijstelling gordelplicht: Wanneer mag de taxichauffeur de gordel losmaken?",
        "back_text": "🇬🇧 English: When may a taxi driver unfasten their seatbelt?\n\n🇳🇱 Uitsluitend stapvoets op of bij de taxistandplaats!\nTijdens de rit met betalende klanten op de openbare weg is de gordel ALTIJD verplicht.",
        "audio_path": None, "vocab_refs": "[13, 16]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 4,
        "front_text": "Kindervervoer zonder zitje: Hoe vervoer je een kind van 2 jaar in een straattaxi?",
        "back_text": "🇬🇧 English: Transporting a 2yo child in a taxi without a child seat?\n\n🇳🇱 Uitsluitend op de achterbank en NOOIT voorin!\nBij incidenteel taxivervoer mag een kind onder de 3 jaar los op de achterbank (nooit 2 personen in 1 gordel).",
        "audio_path": None, "vocab_refs": "[14, 15]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 5,
        "front_text": "Lengtegrens kinderzitje: Tot welke lengte is een kinderbeveiligingssysteem standaard verplicht?",
        "back_text": "🇬🇧 English: Up to what height is a child restraint mandatory?\n\n🇳🇱 Kleiner dan 1,35 meter!\nKinderen korter dan 1,35 meter moeten in principe in een goedgekeurd kinderzitje of op een stoelverhoger reizen.",
        "audio_path": None, "vocab_refs": "[14, 15]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 6,
        "front_text": "Airbag en Maxi-Cosi: Mag een babyzitje tegen de rijrichting in voorin met actieve airbag?",
        "back_text": "🇬🇧 English: May a rear-facing baby seat be placed in front with active airbag?\n\n🇳🇱 NOOIT met ingeschakelde airbag!\nLevensgevaarlijk. De voorairbag MOET fysiek uitgeschakeld zijn als een baby achterwaarts voorin meerijdt.",
        "audio_path": None, "vocab_refs": "[14]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 7,
        "front_text": "Twee kinderen in één gordel: Is dit toegestaan als de taxi vol is?",
        "back_text": "🇬🇧 English: Are two children allowed to share one seatbelt?\n\n🇳🇱 Absoluut VERBODEN!\nPer goedgekeurde zitplaats en gordel mag te allen tijde slechts één persoon worden vervoerd.",
        "audio_path": None, "vocab_refs": "[13]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 8,
        "front_text": "Veiligheidshesje bij pech: Waar moet de chauffeur dit aantrekken?",
        "back_text": "🇬🇧 English: Safety vest in case of breakdown?\n\n🇳🇱 Vóórdat je het voertuig verlaat op de vluchtstrook!\nHet hesje moet binnen handbereik in de cabine liggen, niet diep weggestopt in de kofferbak.",
        "audio_path": None, "vocab_refs": "[17, 23]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 9,
        "front_text": "Alcoholgrens taxichauffeur: Wat is de maximale wettelijke alcohollimiet?",
        "back_text": "🇬🇧 English: Maximum alcohol limit for taxi drivers?\n\n🇳🇱 0,2 promille (88 µg/l)!\nVoor beroepschauffeurs geldt in Nederland een strikte nultolerantie van maximaal 0,2 promille.",
        "audio_path": None, "vocab_refs": "[53]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 10,
        "front_text": "Medicijnen en rijvaardigheid: Wat betekent een gele sticker op het medicijndoosje?",
        "back_text": "🇬🇧 English: What does a yellow warning sticker on medication mean?\n\n🇳🇱 Kan de rijvaardigheid beïnvloeden!\nDe chauffeur mag niet rijden onder invloed van stoffen die de reactiesnelheid verminderen (Art. 8 WVW).",
        "audio_path": None, "vocab_refs": "[47]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 11,
        "front_text": "Gevarendriehoek afstand: Welke afstand geldt op de autosnelweg bij pech?",
        "back_text": "🇬🇧 English: Warning triangle distance on highways?\n\n🇳🇱 Ongeveer 100 meter achter het voertuig (op normale wegen ca. 30 meter).\nZet de alarmlichten direct aan!",
        "audio_path": None, "vocab_refs": "[18, 23]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },

    # DOMAIN 2: BOORDCOMPUTER TAXI (BCT) & CDT (Cards 12 - 22)
    {
        "id": 12,
        "front_text": "BCT: Waar staat de afkorting BCT voor in de taxiwetgeving?",
        "back_text": "🇬🇧 English: What does BCT stand for?\n\n🇳🇱 Boordcomputer Taxi!\nHet wettelijk verplichte digitale apparaat dat arbeids-, rij-, pauze- en ritgegevens registreert.",
        "audio_path": None, "vocab_refs": "[7]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 13,
        "front_text": "Chauffeurskaart: Mag je rijden met de chauffeurskaart van een collega?",
        "back_text": "🇬🇧 English: May you drive with a colleague's driver card?\n\n🇳🇱 STRENG VERBODEN!\nDe chauffeurskaart is strikt persoonlijk. Rijden op andermans kaart is fraude en leidt tot intrekking en zware boetes.",
        "audio_path": None, "vocab_refs": "[8]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 14,
        "front_text": "Inloggen BCT: Wanneer moet de chauffeur inloggen in de BCT?",
        "back_text": "🇬🇧 English: When must the driver log into the BCT?\n\n🇳🇱 Vóór aanvang van alle werkzaamheden!\nZodra je diensttijd start, voordat je ook maar één meter rijdt.",
        "audio_path": None, "vocab_refs": "[5, 7, 8]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 15,
        "front_text": "BCT defect tijdens de dienst: Wat moet de chauffeur direct doen?",
        "back_text": "🇬🇧 English: BCT fails during shift: What to do?\n\n🇳🇱 Handmatige rittenregistratie bijhouden op papier en direct melden bij de ondernemer.\nDefect moet binnen 3 werkdagen gerepareerd worden.",
        "audio_path": None, "vocab_refs": "[7, 12]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 16,
        "front_text": "Chauffeurskaart vergeten of verloren: Mag je toch commerciële ritten rijden?",
        "back_text": "🇬🇧 English: Lost or forgotten driver card: Can you still drive?\n\n🇳🇱 NEE!\nZonder fysieke geldige chauffeurskaart in de BCT is commercieel taxivervoer ten strengste verboden.",
        "audio_path": None, "vocab_refs": "[8]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 17,
        "front_text": "Ondernemerskaart BCT: Hoe vaak moet de data uit de BCT worden gedownload?",
        "back_text": "🇬🇧 English: How often must BCT data be downloaded?\n\n🇳🇱 Minimaal eens per 5 weken (35 dagen)!\nDe ondernemer moet de rit- en arbeidsdata minimaal 7 jaar bewaren voor inspecties.",
        "audio_path": None, "vocab_refs": "[9, 12]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 18,
        "front_text": "Inspectiekaart: Wie heeft de bevoegdheid de BCT uit te lezen?",
        "back_text": "🇬🇧 English: Who has the authority to read the BCT with an inspection card?\n\n🇳🇱 Inspecteurs van de ILT (Inspectie Leefomgeving en Transport) en bevoegde politieambtenaren.",
        "audio_path": None, "vocab_refs": "[10, 49]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 19,
        "front_text": "CDT: Wat betekent de afkorting CDT in het gemoderniseerde toezicht?",
        "back_text": "🇬🇧 English: What does CDT stand for?\n\n🇳🇱 Centrale Database Taxivervoer!\nHet moderne cloud-gebaseerde systeem dat BCT-gegevens realtime veilig doorstuurt naar de overheid.",
        "audio_path": None, "vocab_refs": "[7, 49]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 20,
        "front_text": "BTM ritbewijs printen: Is de chauffeur verplicht een ritbewijs aan te bieden?",
        "back_text": "🇬🇧 English: Is the driver obliged to provide a printed trip receipt?\n\n🇳🇱 Ja! De klant heeft altijd wettelijk recht op een geprint of digitaal BTM-ritbewijs.",
        "audio_path": None, "vocab_refs": "[33, 54]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 21,
        "front_text": "Taxameter keuring: Hoe herken je een goedgekeurde taxameter?",
        "back_text": "🇬🇧 English: How to recognize an approved taximeter?\n\n🇳🇱 Aan de onbeschadigde officiële verzegeling (ijking) en het keuringsmerk van het NMi / bevoegde instantie.",
        "audio_path": None, "vocab_refs": "[11]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 22,
        "front_text": "Handmatige invoer BCT: Wanneer mag je handmatig rust of arbeid toevoegen?",
        "back_text": "🇬🇧 English: When can you manually enter rest or duty in the BCT?\n\n🇳🇱 Alleen voor werkzaamheden of pauzes die buiten het voertuig plaatsvonden vóór de instap.",
        "audio_path": None, "vocab_refs": "[7, 8]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },

    # DOMAIN 3: ARBEIDSTIJDENBESLUIT (ATBV) & RUSTTIJDEN (Cards 23 - 34)
    {
        "id": 23,
        "front_text": "ATBv: Wat is de maximale ononderbroken rijtijd?",
        "back_text": "🇬🇧 English: Maximum continuous driving time?\n\n🇳🇱 Maximaal 4,5 uur (4 uur en 30 minuten)!\nDaarna is direct een wettelijke pauze van minimaal 45 minuten verplicht.",
        "audio_path": None, "vocab_refs": "[1, 4]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 24,
        "front_text": "ATBv Pauzesplitsing: Hoe mag de verplichte pauze van 45 minuten worden opgeknipt?",
        "back_text": "🇬🇧 English: How may the 45-min break be split?\n\n🇳🇱 Uitsluitend in 15 minuten gevolgd door 30 minuten!\n(Andersom mag niet: 30 min eerst en dan 15 min telt NIET als geldige pauzesplitsing).",
        "audio_path": None, "vocab_refs": "[1, 4]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 25,
        "front_text": "Dagelijkse rust: Wat is de standaardduur van de dagelijkse rusttijd?",
        "back_text": "🇬🇧 English: Standard daily rest duration?\n\n🇳🇱 Minimaal 11 aaneengesloten uren binnen een etmaal (periode van 24 uur).",
        "audio_path": None, "vocab_refs": "[1, 2]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 26,
        "front_text": "Verkorte dagelijkse rust: Hoe vaak mag de dagelijkse rust worden ingekort tot 9 uur?",
        "back_text": "🇬🇧 English: Shortened daily rest to 9h allowed how often?\n\n🇳🇱 Maximaal 3 keer per week tussen twee wekelijkse rustperioden in.",
        "audio_path": None, "vocab_refs": "[1, 2]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 27,
        "front_text": "Wekelijkse rust: Wat is de normale ononderbroken wekelijkse rusttijd?",
        "back_text": "🇬🇧 English: Regular weekly rest duration?\n\n🇳🇱 Minimaal 45 aaneengesloten uren per week (mag eens per 2 weken verkort worden tot 24 uur met compensatie).",
        "audio_path": None, "vocab_refs": "[1, 3]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 28,
        "front_text": "Maximale wekelijkse arbeidstijd: Hoeveel uur mag een chauffeur gemiddeld per week werken?",
        "back_text": "🇬🇧 English: Average weekly working hours limit?\n\n🇳🇱 Gemiddeld maximaal 48 uur per week over een referentieperiode van 16 weken (piek maximaal 60 uur).",
        "audio_path": None, "vocab_refs": "[1, 5]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 29,
        "front_text": "Nachtarbeid: Wanneer spreekt de wet van nachtdienst?",
        "back_text": "🇬🇧 English: When does a shift count as night work?\n\n🇳🇱 Als er arbeid wordt verricht tussen 00:00 en 06:00 uur.\nEr gelden dan strengere maximale diensttijden (max 10 uur per 24 uur).",
        "audio_path": None, "vocab_refs": "[1, 5]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 30,
        "front_text": "Diensttijd versus Rijtijd: Wat is het verschil?",
        "back_text": "🇬🇧 English: Shift time vs Driving time difference?\n\n🇳🇱 Rijtijd = feitelijk rollend achter het stuur.\nDiensttijd = alle werktijd inclusief wachten op standplaats, schoonmaken, en administratie.",
        "audio_path": None, "vocab_refs": "[1, 5, 6]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 31,
        "front_text": "Dubbele bemanning: Wat is de rustregel bij twee chauffeurs in één taxi?",
        "back_text": "🇬🇧 English: Double crew daily rest rule?\n\n🇳🇱 Binnen elke periode van 30 uur moeten beide chauffeurs ten minste 9 aaneengesloten uren rust hebben genoten.",
        "audio_path": None, "vocab_refs": "[1, 2]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 32,
        "front_text": "Pauze in rijdend voertuig: Telt meerijden als bijrijder als wettelijke pauze?",
        "back_text": "🇬🇧 English: Does riding as passenger in moving vehicle count as break?\n\n🇳🇱 Ja, bij meervoudige bemanning telt een pauze van 45 min op de passagiersstoel als geldige onderbreking.",
        "audio_path": None, "vocab_refs": "[1, 4]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 33,
        "front_text": "Overschrijding rijtijd door overmacht: Wat te doen bij ernstige file?",
        "back_text": "🇬🇧 English: Driving time overrun due to emergency/traffic jam?\n\n🇳🇱 Rijd naar de eerstvolgende veilige stopplaats en maak DIRECT een aantekening van de reden op de BCT printout.",
        "audio_path": None, "vocab_refs": "[1, 4, 12]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 34,
        "front_text": "Zzp'er taxichauffeur: Geldt het Arbeidstijdenbesluit ook voor zelfstandigen?",
        "back_text": "🇬🇧 English: Does the Working Times Decree apply to self-employed drivers?\n\n🇳🇱 JA! De maximale rij- en verplichte rusttijden gelden voor ZOWEL loondienstchauffeurs als zelfstandige ondernemers.",
        "audio_path": None, "vocab_refs": "[1, 6]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },

    # DOMAIN 4: PAMAN NOODPROTOCOL & EERSTE HULP (Cards 35 - 45)
    {
        "id": 35,
        "front_text": "PAMAN: Wat betekent de letter 'P' in het PAMAN-protocol?",
        "back_text": "🇬🇧 English: What does 'P' stand for in PAMAN?\n\n🇳🇱 Plaats van het ongeval beveiligen!\nEerst eigen veiligheid, alarmlichten aan, veiligheidshesje aan en gevarendriehoek plaatsen.",
        "audio_path": None, "vocab_refs": "[17, 18, 19]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 36,
        "front_text": "PAMAN: Wat betekent de letter 'A' (de eerste A) in PAMAN?",
        "back_text": "🇬🇧 English: What does the first 'A' mean in PAMAN?\n\n🇳🇱 Aard van het ongeval bepalen!\nWat is er gebeurd? Brandgevaar? Gevaarlijke stoffen? Letsel of alleen blikschade?",
        "audio_path": None, "vocab_refs": "[19]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 37,
        "front_text": "PAMAN: Wat betekent de letter 'M' in PAMAN?",
        "back_text": "🇬🇧 English: What does 'M' mean in PAMAN?\n\n🇳🇱 Meldkamer 112 bellen!\nGeef exacte locatie (hectometerpaaltje), aard van het letsel en aantal slachtoffers door.",
        "audio_path": None, "vocab_refs": "[19, 20]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 38,
        "front_text": "PAMAN: Wat betekent de letter 'A' (de tweede A) in PAMAN?",
        "back_text": "🇬🇧 English: What does the second 'A' mean in PAMAN?\n\n🇳🇱 Aantal slachtoffers en toestand vaststellen!\nHoeveel gewonden zijn er en zijn ze bij bewustzijn?",
        "audio_path": None, "vocab_refs": "[19]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 39,
        "front_text": "PAMAN: Wat betekent de letter 'N' in PAMAN?",
        "back_text": "🇬🇧 English: What does 'N' mean in PAMAN?\n\n🇳🇱 Noodzakelijke eerste hulp verlenen!\nStel ernstige bloedingen, open luchtwegen, reanimeer indien nodig tot de ambulance arriveert.",
        "audio_path": None, "vocab_refs": "[19, 21]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 40,
        "front_text": "Bewusteloos slachtoffer dat wél ademt: Welke EHBO-houding pas je toe?",
        "back_text": "🇬🇧 English: Unconscious victim who is breathing: Which position?\n\n🇳🇱 De Stabiele Zijligging!\nZorgt dat de luchtweg vrij blijft en het slachtoffer niet stikt in braaksel of de tong.",
        "audio_path": None, "vocab_refs": "[19, 21]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 41,
        "front_text": "Slachtoffer ademt NIET: Welke handeling start je onmiddellijk?",
        "back_text": "🇬🇧 English: Victim not breathing: What to start immediately?\n\n🇳🇱 Reanimatie: 30 borstcompressies afgewisseld met 2 beademingen (30:2) en haal een AED!",
        "audio_path": None, "vocab_refs": "[19, 21]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 42,
        "front_text": "Brandende kleding: Wat is de eerste handeling om vlammen te doven?",
        "back_text": "🇬🇧 English: Burning clothing first action?\n\n🇳🇱 Slachtoffer laten rollen over de grond, afdekken met een blusdeken of jas (nooit synthetische stof).",
        "audio_path": None, "vocab_refs": "[22]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 43,
        "front_text": "Brandwonden koelen: Hoe lang en waarmee koel je een brandwond?",
        "back_text": "🇬🇧 English: Cooling burns duration and method?\n\n🇳🇱 Minimaal 10 tot 20 minuten met lauw zacht stromend kraanwater (geen ijskoud water).",
        "audio_path": None, "vocab_refs": "[21]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 44,
        "front_text": "Helm afdoen bij motorongeval: Mag je de helm van een gewonde zomaar afzetten?",
        "back_text": "🇬🇧 English: Removing helmet after motorbike crash?\n\n🇳🇱 Laat de helm bij voorkeur OP wegens nekwervelletsel! Alleen afdoen bij ademstilstand voor reanimatie.",
        "audio_path": None, "vocab_refs": "[19, 21]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 45,
        "front_text": "Europese Alarmnummer: Welk nummer bel je altijd bij levensbedreigende spoed?",
        "back_text": "🇬🇧 English: European emergency telephone number?\n\n🇳🇱 112!\nGratis bereikbaar vanaf alle mobiele telefoons, ook zonder simkaart of beltegoed.",
        "audio_path": None, "vocab_refs": "[20]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },

    # DOMAIN 5: PASSAGIERS MET BIJZONDERE BEHOEFTEN (Cards 46 - 57)
    {
        "id": 46,
        "front_text": "Hulphond weigeren: Mag een taxichauffeur een blindengeleidehond weigeren wegens allergie?",
        "back_text": "🇬🇧 English: Can a driver refuse a guide dog due to allergy?\n\n🇳🇱 NEE, NOOIT!\nGecertificeerde hulphonden moeten wettelijk altijd gratis worden meegenomen (VN-verdrag Handicap).",
        "audio_path": None, "vocab_refs": "[25, 26]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 47,
        "front_text": "Toeslag voor hulphond: Mag je extra geld rekenen voor een hulphond of rolstoel?",
        "back_text": "🇬🇧 English: Surcharge for guide dog or wheelchair?\n\n🇳🇱 STRENG VERBODEN!\nVoor hulpmiddelen en erkende hulphonden mag nooit enig extra tarief of toeslag worden berekend.",
        "audio_path": None, "vocab_refs": "[25, 27, 36]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 48,
        "front_text": "Rolstoel vastzetten: Hoeveel spanbanden zijn verplicht om een rolstoel te fixeren?",
        "back_text": "🇬🇧 English: How many tie-down straps for a wheelchair?\n\n🇳🇱 Minimaal 4 goedgekeurde spanbanden (2 voor, 2 achter) plus een driepuntsgordel voor de inzittende.",
        "audio_path": None, "vocab_refs": "[27, 28]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 49,
        "front_text": "Rolstoelgebruiker vastgorden: Mag je de eigen heupgordel van de rolstoel gebruiken als autogordel?",
        "back_text": "🇬🇧 English: Can wheelchair posture belt substitute vehicle seatbelt?\n\n🇳🇱 NEE!\nDe heupgordel van de rolstoel zelf is niet crashtest-gekeurd. De gekeurde autogordel van de taxi is verplicht.",
        "audio_path": None, "vocab_refs": "[13, 27, 28]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 50,
        "front_text": "Communicatie met slechthorende: Wat is de beste benadering?",
        "back_text": "🇬🇧 English: Communicating with a hearing-impaired passenger?\n\n🇳🇱 Kijk de passagier direct aan bij het spreken (liplezen), articuleer duidelijk en schrijf zo nodig op.",
        "audio_path": None, "vocab_refs": "[39]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 51,
        "front_text": "Communicatie met slechtziende: Hoe begeleid je een blinde passagier naar de taxi?",
        "back_text": "🇬🇧 English: Guiding a visually impaired passenger to the taxi?\n\n🇳🇱 Bied je elleboog aan (laat de passagier jouw arm vastpakken, trek nooit aan de blinde) en beschrijf obstakels.",
        "audio_path": None, "vocab_refs": "[25, 39]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 52,
        "front_text": "Rollator in de taxi: Waar moet de rollator worden opgeborgen tijdens het rijden?",
        "back_text": "🇬🇧 English: Storing a rollator during the trip?\n\n🇳🇱 Veilig opgevouwen in de kofferbak of vastgezet achter een stoel zodat hij bij een noodstop niet kan rondvliegen.",
        "audio_path": None, "vocab_refs": "[27, 39]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 53,
        "front_text": "Zwavelzuur accu rolstoel: Mag een elektrische rolstoel met open natte accu mee?",
        "back_text": "🇬🇧 English: Wet acid battery wheelchair allowed?\n\n🇳🇱 Alleen als de accu lekvrij is verzegeld of droge gel/lithium accu's heeft wegens chemisch brandgevaar.",
        "audio_path": None, "vocab_refs": "[27]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 54,
        "front_text": "Zorgvervoer plichten: Wat is de taak van de chauffeur bij ziekenvervoer?",
        "back_text": "🇬🇧 English: Driver duties in healthcare transport?\n\n🇳🇱 Begeleiding bieden van voordeur tot ontvangstbalie en zorgen voor een comfortabele en schokvrije rit.",
        "audio_path": None, "vocab_refs": "[29, 39]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 55,
        "front_text": "Leerlingenvervoer kinderslot: Wanneer moet het kinderslot op de portieren?",
        "back_text": "🇬🇧 English: Child safety lock in school transport?\n\n🇳🇱 Verplicht ingeschakeld aan de straatzijde zodat kinderen niet onverwacht de rijbaan op kunnen rennen.",
        "audio_path": None, "vocab_refs": "[14, 30]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 56,
        "front_text": "Dementerende passagier: Wat doe je als een passagier gedesoriënteerd raakt?",
        "back_text": "🇬🇧 English: Passenger with dementia disoriented: What to do?\n\n🇳🇱 Blijf uiterst kalm, spreek geruststellend, laat de passagier NOOIT alleen en neem direct contact op met de centrale.",
        "audio_path": None, "vocab_refs": "[29, 37]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 57,
        "front_text": "Hulphond op de bank: Mag de hond op de stoffen bekleding zitten?",
        "back_text": "🇬🇧 English: Guide dog on upholstered seats?\n\n🇳🇱 De hulphond ligt bij voorkeur op de vloer bij de voeten van de passagier. Gebruik eventueel een kleedje.",
        "audio_path": None, "vocab_refs": "[25, 26]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },

    # DOMAIN 6: TARIEVEN, TAXIMETER & BTM RITBEWIJS (Cards 58 - 67)
    {
        "id": 58,
        "front_text": "Taxitarief opbouw: Uit welke drie basiselementen bestaat het wettelijk taxitarief?",
        "back_text": "🇬🇧 English: What 3 components make up the taxi fare?\n\n🇳🇱 1. Het instaptarief (starttarief)\n2. Het afstandstarief (per kilometer)\n3. Het tijdtarief (per minuut).",
        "audio_path": None, "vocab_refs": "[31, 32]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 59,
        "front_text": "Maximumtarief overschrijden: Mag de chauffeur meer rekenen dan de taxameter aangeeft?",
        "back_text": "🇬🇧 English: Can driver charge more than the meter?\n\n🇳🇱 NOOIT!\nHet wettelijke maximumtarief mag onder geen beding worden overschreden. Minder rekenen (korting) mag wel.",
        "audio_path": None, "vocab_refs": "[31]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 60,
        "front_text": "Vaste prijs afspreken: Wanneer moet een vaste prijs worden afgesproken?",
        "back_text": "🇬🇧 English: When must a fixed fare price be agreed?\n\n🇳🇱 VÓÓR de aanvang van de rit!\nDe ritprijs moet vooraf duidelijk gecommuniceerd en geregistreerd worden.",
        "audio_path": None, "vocab_refs": "[32]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 61,
        "front_text": "Elektronisch betalen verplicht: Mag een chauffeur weigeren pin of creditcard te accepteren?",
        "back_text": "🇬🇧 English: Can a driver refuse card/pin payment?\n\n🇳🇱 NEE!\nIn Nederland is iedere taxichauffeur wettelijk verplicht om elektronische betalingen (pin/contactloos) te accepteren.",
        "audio_path": None, "vocab_refs": "[31, 33]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 62,
        "front_text": "Tariefkaart zichtbaarheid: Waar moet de tariefkaart in de taxi zichtbaar zijn?",
        "back_text": "🇬🇧 English: Where must the fare card be visible?\n\n🇳🇱 Zowel van buitenaf (voor het instappen) als van binnenuit (voor de zittende passagier) duidelijk leesbaar.",
        "audio_path": None, "vocab_refs": "[34]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 63,
        "front_text": "BTM ritbewijs inhoud: Welke gegevens moeten minimaal op het BTM-bonnetje staan?",
        "back_text": "🇬🇧 English: Minimum info required on printed BTM receipt?\n\n🇳🇱 Ritnummer, kenteken, datum/tijd, vertrek- en aankomsttijd, gereden kilometers, ritprijs en btw-bedrag.",
        "audio_path": None, "vocab_refs": "[33, 54]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 64,
        "front_text": "Btw-tarief personenvervoer: Welk btw-percentage geldt voor taxiritten in Nederland?",
        "back_text": "🇬🇧 English: VAT rate for taxi rides in the Netherlands?\n\n🇳🇱 Het verlaagde btw-tarief van 9%!\n(Dit moet duidelijk uitgesplitst op het ritbewijs vermeld staan).",
        "audio_path": None, "vocab_refs": "[33]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 65,
        "front_text": "Wachttarief inschakelen: Wanneer mag het wachttarief worden gerekend?",
        "back_text": "🇬🇧 English: When may waiting tariff be charged?\n\n🇳🇱 Alleen als de klant er uitdrukkelijk om heeft gevraagd (bijvoorbeeld wachten tijdens een afspraak).",
        "audio_path": None, "vocab_refs": "[35]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 66,
        "front_text": "Wisselgeld bij contante betaling: Hoeveel wisselgeld moet een chauffeur kunnen teruggeven?",
        "back_text": "🇬🇧 English: How much change must a driver be able to provide?\n\n🇳🇱 Voldoende om gangbare biljetten (zoals €50) te kunnen wisselen bij gangbare ritprijzen.",
        "audio_path": None, "vocab_refs": "[31, 39]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 67,
        "front_text": "Taxameter aanzetten: Op welk moment start de taxameter?",
        "back_text": "🇬🇧 English: At what moment is the meter started?\n\n🇳🇱 Pas zodra de passagier is ingestapt en de daadwerkelijke rit aanvangt (nooit tijdens het voorrijden).",
        "audio_path": None, "vocab_refs": "[11, 31]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },

    # DOMAIN 7: KLANTGERICHTHEID, DE-ESCALATIE & BEROEPSHOUDING (Cards 68 - 77)
    {
        "id": 68,
        "front_text": "Vervoersplicht op de standplaats: Mag je een korte rit van €10 weigeren?",
        "back_text": "🇬🇧 English: Can you refuse a short €10 fare on a taxi rank?\n\n🇳🇱 NEE!\nOp de standplaats geldt de vervoersplicht. Je mag een klant NOOIT weigeren enkel omdat de rit te kort is.",
        "audio_path": None, "vocab_refs": "[40, 41]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 69,
        "front_text": "Geldige weigeringsgrond: Wanneer mag een chauffeur een klant wél weigeren?",
        "back_text": "🇬🇧 English: Legitimate grounds to refuse a passenger?\n\n🇳🇱 Bij agressie, ernstige dronkenschap met braakgevaar, vieze kleren die de wagen bevuilen, of weigering te betalen.",
        "audio_path": None, "vocab_refs": "[40, 41]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 70,
        "front_text": "De-escalatie bij agressie: Wat is de beste eerste reactie van de chauffeur?",
        "back_text": "🇬🇧 English: First de-escalation step with angry passenger?\n\n🇳🇱 Blijf kalm, praat met lage rustige stem, erken het gevoel en ga niet in discussie (Verbal Judo).",
        "audio_path": None, "vocab_refs": "[37, 42]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 71,
        "front_text": "Roken en vapen: Mag een klant roken in de taxi als hij een fooi belooft?",
        "back_text": "🇬🇧 English: Smoking/vaping allowed in taxi for tip?\n\n🇳🇱 Absoluut VERBODEN!\nDe Tabaks- en rookwarenwet verbiedt roken en vapen in alle openbare vervoermiddelen.",
        "audio_path": None, "vocab_refs": "[39, 41]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 72,
        "front_text": "Klachtenprocedure: Waar kan een ontevreden passagier officieel een klacht indienen?",
        "back_text": "🇬🇧 English: Where can an unsatisfied customer file an official complaint?\n\n🇳🇱 Eerst bij het taxibedrijf zelf via het verplichte klachtenreglement, en extern bij Taxiklacht.nl.",
        "audio_path": None, "vocab_refs": "[38]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 73,
        "front_text": "Gevonden voorwerpen: Wat moet je doen met een telefoon die achterblijft in de taxi?",
        "back_text": "🇬🇧 English: Lost phone found in taxi: Duty?\n\n🇳🇱 Bewaren, direct melden bij de centrale of deponeren bij de gemeente (iLost / Bureau Gevonden Voorwerpen).",
        "audio_path": None, "vocab_refs": "[39]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 74,
        "front_text": "Routekeuze overleg: Wie bepaalt de uiteindelijke rijroute?",
        "back_text": "🇬🇧 English: Who decides the final route?\n\n🇳🇱 De chauffeur adviseert de snelste/voordeligste route, maar de KLANT heeft altijd het laatste woord.",
        "audio_path": None, "vocab_refs": "[39]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 75,
        "front_text": "Kleding en verzorging: Welke eis stelt de CBR-norm aan de taxichauffeur?",
        "back_text": "🇬🇧 English: Clothing and grooming standard for taxi drivers?\n\n🇳🇱 Representatieve, schone kleding, goede persoonlijke hygiëne en een rookvrije schone wagen.",
        "audio_path": None, "vocab_refs": "[39]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 76,
        "front_text": "Fysiek geweld door klant: Wat is het veiligheidsprotocol?",
        "back_text": "🇬🇧 English: Safety protocol during physical aggression?\n\n🇳🇱 Auto veilig aan de kant zetten op een openbare plek, contactsleutel meenemen, voertuig verlaten en 112 bellen.",
        "audio_path": None, "vocab_refs": "[37, 42]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 77,
        "front_text": "Privacy van de klant: Mag je privégesprekken van klanten op sociale media delen?",
        "back_text": "🇬🇧 English: Can you share passenger private conversations on social media?\n\n🇳🇱 NOOIT! Beroepsgeheim en de Algemene Verordening Gegevensbescherming (AVG) verbieden dit strikt.",
        "audio_path": None, "vocab_refs": "[39]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },

    # DOMAIN 8: VERGUNNINGEN, WET PERSONENVERVOER & HANDHAVING (Cards 78 - 86)
    {
        "id": 78,
        "front_text": "Wet Personenvervoer 2000 (Wp2000): Wat regelt deze wet?",
        "back_text": "🇬🇧 English: What does Wp2000 regulate?\n\n🇳🇱 De basisregels voor het aanbieden van taxivervoer, vergunningplichten, consumentenbescherming en markttoezicht.",
        "audio_path": None, "vocab_refs": "[50]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 79,
        "front_text": "Kiwa Register: Welke officiële documenten geeft Kiwa Register uit?",
        "back_text": "🇬🇧 English: What documents does Kiwa Register issue?\n\n🇳🇱 De taxichauffeurskaart, de ondernemersvergunning, de ondernemerskaart en keuringsbewijzen.",
        "audio_path": None, "vocab_refs": "[8, 43, 55]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 80,
        "front_text": "VOG Taxi: Wat is een VOG en waarom is deze verplicht?",
        "back_text": "🇬🇧 English: What is a VOG?\n\n🇳🇱 Verklaring Omtrent het Gedrag!\nEen bewijs van Justitie dat de chauffeur geen strafbare feiten heeft gepleegd die het taxivak belemmeren.",
        "audio_path": None, "vocab_refs": "[48]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 81,
        "front_text": "Medische keuring: Hoe vaak moet een taxichauffeur medisch gekeurd worden?",
        "back_text": "🇬🇧 English: Medical examination frequency for taxi drivers?\n\n🇳🇱 Elke 5 jaar bij de verlenging van de taxichauffeurskaart door een gecertificeerde Arbo-arts.",
        "audio_path": None, "vocab_refs": "[47]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 82,
        "front_text": "Blauwe kentekenplaten: Waarom heeft een Nederlandse taxi blauwe kentekenplaten?",
        "back_text": "🇬🇧 English: Why does a taxi have blue license plates?\n\n🇳🇱 Bewijs van officiële registratie bij de RDW als gekeurd en verzekerd voertuig voor commercieel personenvervoer.",
        "audio_path": None, "vocab_refs": "[43, 50]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 83,
        "front_text": "TTO (Toegelaten Taxi Organisatie): Waar is aansluiting bij een TTO verplicht?",
        "back_text": "🇬🇧 English: Where is TTO affiliation mandatory?\n\n🇳🇱 Op de gemeentelijke openbare standplaatsen in aangewezen steden (zoals Amsterdam) voor straattaxi's.",
        "audio_path": None, "vocab_refs": "[44, 45]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 84,
        "front_text": "Inspectie Leefomgeving en Transport (ILT): Welke bevoegdheden heeft de ILT?",
        "back_text": "🇬🇧 English: What powers does the ILT inspectorate have?\n\n🇳🇱 Voertuigen aanhouden, BCT uitlezen, documenten vorderen, boetes opleggen en wagens stilleggen bij overtreding.",
        "audio_path": None, "vocab_refs": "[10, 49]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 85,
        "front_text": "APK keuring voor taxi's: Hoe vaak moet een taxi APK gekeurd worden?",
        "back_text": "🇬🇧 English: MOT / APK inspection frequency for taxis?\n\n🇳🇱 Ieder jaar (jaarlijks)! Taxi's rijden veel kilometers en worden daarom strenger gekeurd dan privéauto's.",
        "audio_path": None, "vocab_refs": "[43, 50]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    },
    {
        "id": 86,
        "front_text": "Milieuzone Amsterdam: Welke eis geldt per 2025 voor taxi's in grote steden?",
        "back_text": "🇬🇧 English: Emission requirement for city taxis?\n\n🇳🇱 Zero-emissie (100% uitstootvrij / elektrisch of waterstof) binnen de vastgestelde uitstootvrije zones.",
        "audio_path": None, "vocab_refs": "[51]", "last_review": None, "ease": 2.5, "interval": 1, "next_due": None
    }
]

print(f"Total Vocab items prepared: {len(VOCAB_ITEMS)}")
print(f"Total Flashcards prepared: {len(FLASHCARDS)}")

# Now read src/lib/curriculum.ts up to CURRICULUM_DATA definition
ts_path = BASE_DIR / "src" / "lib" / "curriculum.ts"
with open(ts_path, "r", encoding="utf-8") as f:
    content = f.read()

split_token = "export const CURRICULUM_DATA = {"
if split_token not in content:
    print("ERROR: Could not find CURRICULUM_DATA in curriculum.ts")
    exit(1)

preamble = content.split(split_token)[0]

# Build new CURRICULUM_DATA TS export
vocab_ts = json.dumps(VOCAB_ITEMS, indent=4, ensure_ascii=False)
flashcards_ts = json.dumps(FLASHCARDS, indent=4, ensure_ascii=False)

# Replace null with null for valid TS
new_curriculum = f"""{preamble}export const CURRICULUM_DATA = {{
  vocab: {vocab_ts},
  grammar: [
    {{ id: 1, marker_type: "Modal" as const, dutch_word: "Moet (Moeten)", impact: "Strict obligation (Must under law)." }},
    {{ id: 2, marker_type: "Modal" as const, dutch_word: "Mag (Mogen)", impact: "Legal permission (May / Allowed)." }},
    {{ id: 3, marker_type: "Condition" as const, dutch_word: "Tenzij", impact: "Unless / Except if (Key legal exemption)." }},
    {{ id: 4, marker_type: "Negation" as const, dutch_word: "Niet / Geen / Verboden", impact: "Strict prohibition or negation." }},
    {{ id: 5, marker_type: "WH" as const, dutch_word: "Wanneer / Wie / Waar", impact: "Condition / Actor / Location inquiry." }}
  ],
  questions: EXPANDED_QUESTIONS,
  flashcards: {flashcards_ts}
}};
"""

with open(ts_path, "w", encoding="utf-8") as f:
    f.write(new_curriculum)

print(f"[✓] Updated {ts_path} successfully!")

# Also update scripts/etl/seed_data.py
seed_py_path = BASE_DIR / "scripts" / "etl" / "seed_data.py"
with open(seed_py_path, "r", encoding="utf-8") as f:
    py_content = f.read()

# We can read EXPANDED_QUESTIONS from Python or update seed_data.py accordingly
# Let's inspect seed_data.py questions
print("[✓] Generation complete.")
