"""
Seed curriculum dataset covering all 7 CBR TVT Taxi Theory Domains.
"""

CURRICULUM_DATA = {
    "vocab": [
        {
                "id": 1,
                "dutch_term": "Arbeidstijdenbesluit",
                "root_decomposition": "Arbeids|tijden|besluit",
                "literal_english": "Labor times decree",
                "legal_meaning": "Statutory Dutch regulation governing maximum driving hours, shifts, and mandatory rest periods for taxi drivers.",
                "exam_frequency": "high"
        },
        {
                "id": 2,
                "dutch_term": "Dagelijkserust",
                "root_decomposition": "Dagelijkse|rust",
                "literal_english": "Daily rest",
                "legal_meaning": "Mandatory continuous rest of at least 11 consecutive hours in a 24-hour cycle (may be reduced to 9h max 3x/week).",
                "exam_frequency": "high"
        },
        {
                "id": 3,
                "dutch_term": "Wekelijksedankrust",
                "root_decomposition": "Wekelijkse|rust",
                "literal_english": "Weekly rest",
                "legal_meaning": "Mandatory unbroken rest period of at least 45 consecutive hours per 14-day rolling window.",
                "exam_frequency": "high"
        },
        {
                "id": 4,
                "dutch_term": "Pauzeregeling",
                "root_decomposition": "Pauze|regeling",
                "literal_english": "Break regulation",
                "legal_meaning": "After at most 4.5 hours of continuous driving, a mandatory pause of at least 45 minutes (or 15 + 30 min) is required.",
                "exam_frequency": "high"
        },
        {
                "id": 5,
                "dutch_term": "Diensttijd",
                "root_decomposition": "Dienst|tijd",
                "literal_english": "Duty time / Shift time",
                "legal_meaning": "Total duration from starting login on the BCT until complete final log-off, including waiting and driving.",
                "exam_frequency": "high"
        },
        {
                "id": 6,
                "dutch_term": "Rijtijdenwet",
                "root_decomposition": "Rij|tijden|wet",
                "literal_english": "Driving times act",
                "legal_meaning": "National law establishing rules to prevent driver fatigue and traffic danger across commercial transport.",
                "exam_frequency": "high"
        },
        {
                "id": 7,
                "dutch_term": "Boordcomputertaxi",
                "root_decomposition": "Boord|computer|taxi",
                "literal_english": "Onboard computer taxi (BCT)",
                "legal_meaning": "Mandatory digital recording device registering working times, journeys, breaks, and distances.",
                "exam_frequency": "high"
        },
        {
                "id": 8,
                "dutch_term": "Chauffeurskaart",
                "root_decomposition": "Chauffeurs|kaart",
                "literal_english": "Driver's taxi card",
                "legal_meaning": "Personal digital chip pass issued by Kiwa Register that must be inserted into the BCT during all commercial driving.",
                "exam_frequency": "high"
        },
        {
                "id": 9,
                "dutch_term": "Ondernemerskaart",
                "root_decomposition": "Ondernemers|kaart",
                "literal_english": "Entrepreneur card",
                "legal_meaning": "Company chip card used by taxi owners to download, secure, and inspect BCT fleet data every 5 weeks.",
                "exam_frequency": "medium"
        },
        {
                "id": 10,
                "dutch_term": "Inspectiekaart",
                "root_decomposition": "Inspectie|kaart",
                "literal_english": "Inspection card",
                "legal_meaning": "Official smartcard used by ILT inspectors and police officers to read and audit BCT data during roadside stops.",
                "exam_frequency": "medium"
        },
        {
                "id": 11,
                "dutch_term": "Taxameterkeuring",
                "root_decomposition": "Taxameter|keuring",
                "literal_english": "Taximeter inspection / calibration",
                "legal_meaning": "Mandatory yearly physical check and sealing of the taximeter by an authorized NMi verification station.",
                "exam_frequency": "high"
        },
        {
                "id": 12,
                "dutch_term": "Ritadministratie",
                "root_decomposition": "Rit|administratie",
                "literal_english": "Trip administration / logs",
                "legal_meaning": "Complete digital record of all passenger trips that must be retained by the enterprise for at least 7 years for tax audits.",
                "exam_frequency": "high"
        },
        {
                "id": 13,
                "dutch_term": "Gordelplicht",
                "root_decomposition": "Gordel|plicht",
                "literal_english": "Seatbelt obligation",
                "legal_meaning": "Legal duty to wear seatbelts (Art. 59 RVV 1990). Driver is liable for minors <12yo; passengers 12+ are individually liable.",
                "exam_frequency": "high"
        },
        {
                "id": 14,
                "dutch_term": "Kinderbeveiligingssysteem",
                "root_decomposition": "Kinder|beveiligings|systeem",
                "literal_english": "Child restraint system",
                "legal_meaning": "Approved ECE-R44 or i-Size child car seat or booster cushion required for children shorter than 1.35m.",
                "exam_frequency": "high"
        },
        {
                "id": 15,
                "dutch_term": "Stoelverhoger",
                "root_decomposition": "Stoel|verhoger",
                "literal_english": "Booster seat",
                "legal_meaning": "Raised cushion ensuring the vehicle diagonal seatbelt rests properly across the child's shoulder rather than neck.",
                "exam_frequency": "high"
        },
        {
                "id": 16,
                "dutch_term": "Vrijstellinggordel",
                "root_decomposition": "Vrijstelling|gordel",
                "literal_english": "Seatbelt exemption",
                "legal_meaning": "Narrow legal exemption allowing drivers to unbuckle only while crawling on taxi ranks or during specific low-speed maneuvers.",
                "exam_frequency": "high"
        },
        {
                "id": 17,
                "dutch_term": "Veiligheidshesje",
                "root_decomposition": "Veiligheids|hesje",
                "literal_english": "Reflective safety vest",
                "legal_meaning": "High-visibility fluorescent vest that should be donned before exiting the vehicle during motorway breakdowns.",
                "exam_frequency": "high"
        },
        {
                "id": 18,
                "dutch_term": "Gevarendriehoek",
                "root_decomposition": "Gevaren|driehoek",
                "literal_english": "Hazard warning triangle",
                "legal_meaning": "Emergency reflective triangle placed 30 meters behind broken-down vehicle on normal roads (100m on motorways).",
                "exam_frequency": "medium"
        },
        {
                "id": 19,
                "dutch_term": "PAMANprotocol",
                "root_decomposition": "PA|MAN|protocol",
                "literal_english": "PAMAN protocol",
                "legal_meaning": "Accident sequence: P=Plaats beveiligen, A=Aard bepalen, M=Meldkamer bellen, A=Aantal slachtoffers, N=Noodzakelijke hulp.",
                "exam_frequency": "high"
        },
        {
                "id": 20,
                "dutch_term": "Alarmcentrale",
                "root_decomposition": "Alarm|centrale",
                "literal_english": "Emergency dispatch center 112",
                "legal_meaning": "National emergency operator directing police, ambulance, and fire rescue services to accident coordinates.",
                "exam_frequency": "high"
        },
        {
                "id": 21,
                "dutch_term": "Verbandtrommel",
                "root_decomposition": "Verband|trommel",
                "literal_english": "First aid kit",
                "legal_meaning": "Approved medical supply box kept accessible in vehicle containing sterile gauze, bandages, and burn dressings.",
                "exam_frequency": "high"
        },
        {
                "id": 22,
                "dutch_term": "Brandblusser",
                "root_decomposition": "Brand|blusser",
                "literal_english": "Fire extinguisher",
                "legal_meaning": "Mandatory certified vehicle powder/foam extinguisher inspected annually for commercial passenger vehicles.",
                "exam_frequency": "medium"
        },
        {
                "id": 23,
                "dutch_term": "Vluchtstrook",
                "root_decomposition": "Vlucht|strook",
                "literal_english": "Hard shoulder / Emergency lane",
                "legal_meaning": "Motorway lane reserved strictly for emergencies and authorized breakdown assistance; passengers must wait behind guardrail.",
                "exam_frequency": "high"
        },
        {
                "id": 24,
                "dutch_term": "Schadeformulier",
                "root_decomposition": "Schade|formulier",
                "literal_english": "European accident statement form",
                "legal_meaning": "Standard bilateral collision form filled out and signed by both involved motorists after any non-fatal road accident.",
                "exam_frequency": "high"
        },
        {
                "id": 25,
                "dutch_term": "Blindengeleidehond",
                "root_decomposition": "Blinden|geleide|hond",
                "literal_english": "Guide dog for the blind",
                "legal_meaning": "Certified assistance dog that MUST legally be transported for free under the UN Convention on Disability Rights.",
                "exam_frequency": "high"
        },
        {
                "id": 26,
                "dutch_term": "Hulphond",
                "root_decomposition": "Hulp|hond",
                "literal_english": "Assistance / Service dog",
                "legal_meaning": "Trained medical assistance animal aiding passengers with physical, neurological, or psychological disabilities.",
                "exam_frequency": "high"
        },
        {
                "id": 27,
                "dutch_term": "Rolstoelvervoer",
                "root_decomposition": "Rolstoel|vervoer",
                "literal_english": "Wheelchair transport",
                "legal_meaning": "Specialized taxi transport where wheelchairs must be secured with 4-point tie-downs and a separate passenger 3-point belt.",
                "exam_frequency": "high"
        },
        {
                "id": 28,
                "dutch_term": "Spanbandensysteem",
                "root_decomposition": "Span|banden|systeem",
                "literal_english": "Tensioning straps system",
                "legal_meaning": "Crash-tested ratchet tie-down straps used to immobilize wheelchairs to the vehicle chassis floor.",
                "exam_frequency": "high"
        },
        {
                "id": 29,
                "dutch_term": "Zorgvervoer",
                "root_decomposition": "Zorg|vervoer",
                "literal_english": "Healthcare / Patient transport",
                "legal_meaning": "Contract transport for patients traveling to dialysis, chemotherapy, or day-care clinics with heightened duty of care.",
                "exam_frequency": "high"
        },
        {
                "id": 30,
                "dutch_term": "Leerlingenvervoer",
                "root_decomposition": "Leerlingen|vervoer",
                "literal_english": "Student / School transport",
                "legal_meaning": "Contract taxi transport for school children, requiring strict punctuality, child safety locks, and designated drop-offs.",
                "exam_frequency": "medium"
        },
        {
                "id": 31,
                "dutch_term": "Maximumtarief",
                "root_decomposition": "Maximum|tarief",
                "literal_english": "Maximum tariff ceiling",
                "legal_meaning": "Legally capped maximum fare rates established by the Dutch ministry (start rate + distance per km + time per minute).",
                "exam_frequency": "high"
        },
        {
                "id": 32,
                "dutch_term": "Vasteprijs",
                "root_decomposition": "Vaste|prijs",
                "literal_english": "Fixed fare price",
                "legal_meaning": "Agreed lump sum price between customer and operator before the trip starts; must not exceed the maximum meter calculation.",
                "exam_frequency": "high"
        },
        {
                "id": 33,
                "dutch_term": "BTMritbewijs",
                "root_decomposition": "BTM|rit|bewijs",
                "literal_english": "BTM printed receipt",
                "legal_meaning": "Printed trip receipt generated by the BCT containing driver license, company details, exact route, and VAT breakdown.",
                "exam_frequency": "high"
        },
        {
                "id": 34,
                "dutch_term": "Tariefkaart",
                "root_decomposition": "Tarief|kaart",
                "literal_english": "Tariff card",
                "legal_meaning": "Mandatory visual fare sheet that must be clearly legible to passengers both inside and outside the taxi vehicle.",
                "exam_frequency": "high"
        },
        {
                "id": 35,
                "dutch_term": "Wachttarief",
                "root_decomposition": "Wacht|tarief",
                "literal_english": "Waiting tariff",
                "legal_meaning": "Hourly rate charged when a customer explicitly requests the driver to wait at a pickup location or intermediate stop.",
                "exam_frequency": "medium"
        },
        {
                "id": 36,
                "dutch_term": "Toeslagtarief",
                "root_decomposition": "Toeslag|tarief",
                "literal_english": "Surcharge tariff",
                "legal_meaning": "Extra fee allowed only if agreed in advance (e.g., extra passenger handling or specific luggage services).",
                "exam_frequency": "low"
        },
        {
                "id": 37,
                "dutch_term": "De-escalatietechniek",
                "root_decomposition": "De-escalatie|techniek",
                "literal_english": "De-escalation technique",
                "legal_meaning": "Calm, non-confrontational communication skills to diffuse passenger agitation, anger, or intoxication.",
                "exam_frequency": "high"
        },
        {
                "id": 38,
                "dutch_term": "Klachtenreglement",
                "root_decomposition": "Klachten|reglement",
                "literal_english": "Complaints procedure",
                "legal_meaning": "Mandatory statutory dispute procedure every taxi company must maintain; passengers can escalate to Taxiklacht.nl.",
                "exam_frequency": "high"
        },
        {
                "id": 39,
                "dutch_term": "Beroepshouding",
                "root_decomposition": "Beroeps|houding",
                "literal_english": "Professional conduct / demeanor",
                "legal_meaning": "Courteous, neutral, representative behavior expected of licensed drivers (hygiene, dress code, helpfulness).",
                "exam_frequency": "high"
        },
        {
                "id": 40,
                "dutch_term": "Vervoersplicht",
                "root_decomposition": "Vervoers|plicht",
                "literal_english": "Duty of carriage",
                "legal_meaning": "Duty on taxi stands to accept any reasonable trip request, unless safety, health, or intoxication justifies refusal.",
                "exam_frequency": "high"
        },
        {
                "id": 41,
                "dutch_term": "Weigeringsgrond",
                "root_decomposition": "Weigerings|grond",
                "literal_english": "Grounds for refusal",
                "legal_meaning": "Legitimate legal reasons to refuse transport: violence, dirty clothes damaging upholstery, or refusal to pay.",
                "exam_frequency": "high"
        },
        {
                "id": 42,
                "dutch_term": "Agressieprotocol",
                "root_decomposition": "Agressie|protocol",
                "literal_english": "Aggression protocol",
                "legal_meaning": "Established emergency action plan: stop vehicle in safe public area, disembark, call dispatch/police immediately.",
                "exam_frequency": "high"
        },
        {
                "id": 43,
                "dutch_term": "Ondernemersvergunning",
                "root_decomposition": "Ondernemers|vergunning",
                "literal_english": "Taxi operator license",
                "legal_meaning": "Official company permit granted by Kiwa Register based on reliability, financial capacity, and professional competence.",
                "exam_frequency": "high"
        },
        {
                "id": 44,
                "dutch_term": "Standplaatsvergunning",
                "root_decomposition": "Stand|plaats|vergunning",
                "literal_english": "Taxi stand permit (TTO)",
                "legal_meaning": "Municipal permit or TTO affiliation required to pick up passengers at designated public taxi ranks in cities like Amsterdam.",
                "exam_frequency": "high"
        },
        {
                "id": 45,
                "dutch_term": "Straattaxi",
                "root_decomposition": "Straat|taxi",
                "literal_english": "Street hailed taxi",
                "legal_meaning": "Consumer taxi flagged on the street or picked up at a taxi stand; strictly bound to maximum regulated meter tariffs.",
                "exam_frequency": "high"
        },
        {
                "id": 46,
                "dutch_term": "Contractvervoer",
                "root_decomposition": "Contract|vervoer",
                "literal_english": "Contract transport",
                "legal_meaning": "Pre-booked, dedicated passenger transport governed by corporate, medical, or municipal service level contracts.",
                "exam_frequency": "high"
        },
        {
                "id": 47,
                "dutch_term": "Rijgeschiktheidsverklaring",
                "root_decomposition": "Rij|geschiktheids|verklaring",
                "literal_english": "Medical certificate of fitness",
                "legal_meaning": "Mandatory periodic occupational health physician check (Geneeskundige verklaring) certifying physical fitness to drive.",
                "exam_frequency": "high"
        },
        {
                "id": 48,
                "dutch_term": "VerklaringOmtrentGedrag",
                "root_decomposition": "Verklaring|Omtrent|Gedrag",
                "literal_english": "Certificate of good conduct (VOG)",
                "legal_meaning": "Official criminal background check from the Ministry of Justice required to obtain and renew a taxi chauffeurskaart.",
                "exam_frequency": "high"
        },
        {
                "id": 49,
                "dutch_term": "InspectieLeefomgevingTransport",
                "root_decomposition": "Inspectie|Leefomgeving|Transport",
                "literal_english": "Human Environment and Transport Inspectorate (ILT)",
                "legal_meaning": "Dutch national enforcement agency inspecting taxi compliance, BCT data, driving times, and license validity.",
                "exam_frequency": "high"
        },
        {
                "id": 50,
                "dutch_term": "WetPersonenvervoer",
                "root_decomposition": "Wet|Personen|vervoer",
                "literal_english": "Passenger transport act (Wp2000)",
                "legal_meaning": "The overarching Dutch statutory act governing all public and private commercial passenger transport services.",
                "exam_frequency": "high"
        },
        {
                "id": 51,
                "dutch_term": "Milieuzone",
                "root_decomposition": "Milieu|zone",
                "literal_english": "Environmental low-emission zone",
                "legal_meaning": "Designated municipal urban zone restricting entry of polluting vehicles; taxis must meet strict zero-emission standards.",
                "exam_frequency": "medium"
        },
        {
                "id": 52,
                "dutch_term": "Snelheidsbegrenzer",
                "root_decomposition": "Snelheids|begrenzer",
                "literal_english": "Speed limiter",
                "legal_meaning": "Factory or aftermarket device limiting vehicle top speed according to type approval requirements.",
                "exam_frequency": "low"
        },
        {
                "id": 53,
                "dutch_term": "Alcoholgrens",
                "root_decomposition": "Alcohol|grens",
                "literal_english": "Alcohol threshold",
                "legal_meaning": "Strict legal zero-tolerance limit of 0.2 promille (88 ug/l) for commercial professional taxi drivers.",
                "exam_frequency": "high"
        },
        {
                "id": 54,
                "dutch_term": "BTMprinter",
                "root_decomposition": "BTM|printer",
                "literal_english": "BTM printer",
                "legal_meaning": "Vehicle receipt printer connected to the BCT to issue immediate physical trip receipts with fiscal data.",
                "exam_frequency": "high"
        },
        {
                "id": 55,
                "dutch_term": "KiwaRegister",
                "root_decomposition": "Kiwa|Register",
                "literal_english": "Kiwa Register",
                "legal_meaning": "The official Dutch executive accreditation agency that evaluates and issues all taxi licenses and driver cards.",
                "exam_frequency": "high"
        }
],
    "grammar": [
        {"marker_type": "Modal", "dutch_word": "Moet (Moeten)", "impact": "Strict obligation (Must under law)."},
        {"marker_type": "Modal", "dutch_word": "Mag (Mogen)", "impact": "Legal permission (May / Allowed)."},
        {"marker_type": "Condition", "dutch_word": "Tenzij", "impact": "Unless / Except if (Key legal exemption)."},
        {"marker_type": "Negation", "dutch_word": "Niet / Geen / Verboden", "impact": "Strict prohibition or negation."},
        {"marker_type": "WH", "dutch_word": "Wanneer / Wie / Waar", "impact": "Condition / Actor / Location inquiry."}
    ],
    "questions": [
        {
            "dutch_stem": "Een passagier van 14 jaar weigert de veiligheidsgordel om te doen op de achterbank. Wie is juridisch verantwoordelijk voor de boete?",
            "english_breakdown": "A 14-year-old passenger refuses to wear a seatbelt on the rear seat. Who is legally responsible for the fine?",
            "domain": "gordelplicht",
            "correct_option_index": 1,
            "explanation": "Volgens de Nederlandse wet zijn passagiers van 12 jaar en ouder zelf verantwoordelijk voor het dragen van de gordel. De chauffeur is alleen verantwoordelijk voor kinderen onder de 12 jaar.",
            "role_annotations": [
                {"text": "Een passagier van 14 jaar", "role": "Actor"},
                {"text": "weigert de veiligheidsgordel om te doen", "role": "Condition"},
                {"text": "Wie is juridisch verantwoordelijk", "role": "Target"}
            ],
            "options": [
                "De taxichauffeur is altijd verantwoordelijk voor alle passagiers in het voertuig.",
                "De passagier van 14 jaar is zelf verantwoordelijk en krijgt de boete.",
                "De taxiondernemer van het taxibedrijf.",
                "Zowel de chauffeur als de passagier krijgen ieder de helft van het boetebedrag."
            ],
            "trap_annotations": [
                "Fout: De chauffeur is alleen aansprakelijk voor kinderen onder de 12 jaar.",
                "Correct: Vanaf 12 jaar is de passagier zelfstandig aansprakelijk.",
                "Fout: De ondernemer is niet verantwoordelijk voor individueel gordelgedrag van volwassenen/tieners.",
                "Fout: De wet kent geen gedeelde 50/50 boeteverdeling voor gordelovertredingen."
            ]
        },
        {
            "dutch_stem": "Mag een taxichauffeur tijdens het vervoer van een betalende klant de veiligheidsgordel losmaken?",
            "english_breakdown": "May a taxi driver unfasten their seatbelt while transporting a paying passenger?",
            "domain": "gordelplicht",
            "correct_option_index": 2,
            "explanation": "Nee. De vrijstelling voor de gordelplicht geldt uitsluitend bij het naderen van een standplaats of tijdens het manoeuvreren op lage snelheid als de veiligheid dat vereist, maar NOOIT tijdens een reguliere rit met passagiers op de openbare weg.",
            "role_annotations": [
                {"text": "Een taxichauffeur", "role": "Actor"},
                {"text": "tijdens het vervoer van een betalende klant", "role": "Condition"},
                {"text": "de veiligheidsgordel losmaken", "role": "Obligation"}
            ],
            "options": [
                "Ja, taxichauffeurs hebben een algemene wettelijke vrijstelling van de gordelplicht.",
                "Ja, mits de snelheid onder de 50 km/u blijft binnen de bebouwde kom.",
                "Nee, tijdens het rijden met een klant moet de chauffeur altijd de gordel dragen.",
                "Alleen als de klant daarom expliciet vraagt."
            ],
            "trap_annotations": [
                "Fout: Er bestaat geen algehele vrijstelling voor chauffeurs tijdens ritten.",
                "Fout: De 50 km/u regel is geen geldige uitzondering voor de gordel.",
                "Correct: Gordel dragen is verplicht tijdens de rit met betalende passagiers.",
                "Fout: Klantvoorkeur kan nooit de verkeersveiligheidswet overrulen."
            ]
        },
        {
            "dutch_stem": "Wat moet een taxichauffeur doen zodra de Boordcomputer Taxi (BCT) een storing aangeeft tijdens een dienst?",
            "english_breakdown": "What must a taxi driver do as soon as the BCT indicates a malfunction during a shift?",
            "domain": "bcdt",
            "correct_option_index": 0,
            "explanation": "Bij een BCT-storing moet de chauffeur direct overschakelen op handmatige registratie via een rittenstaat en de storing binnen de wettelijke termijn (binnen 3 werkdagen) laten herstellen bij een erkend keuringsstation.",
            "role_annotations": [
                {"text": "Een taxichauffeur", "role": "Actor"},
                {"text": "zodra de BCT een storing aangeeft", "role": "Condition"},
                {"text": "moet direct overschakelen op rittenstaat", "role": "Obligation"}
            ],
            "options": [
                "De rit handmatig noteren op een papieren rittenstaat en de storing zo snel mogelijk laten repareren.",
                "Onmiddellijk de taxi aan de kant zetten en weigeren verder te rijden totdat de BCT herstart is.",
                "Gewoon doorrijden op de taximeter zonder enige administratieve notitie.",
                "De meldkamer van de politie bellen om een ontheffing aan te vragen."
            ],
            "trap_annotations": [
                "Correct: Handmatige rittenstaat is het wettelijke noodvoorschrift bij BCT storing.",
                "Fout: Je hoeft niet direct te stranden, mits je de papieren rittenstaat nauwkeurig bijhoudt.",
                "Fout: Zonder rittenstaat ben je in overtreding bij een ILT inspectie.",
                "Fout: De politie verstrekt geen BCT ontheffingen."
            ]
        },
        {
            "dutch_stem": "Welke kaart moet altijd in de BCT/CDT geplaatst zijn zodra er met de taxi wordt gereden?",
            "english_breakdown": "Which card must always be inserted into the BCT/CDT whenever the taxi is being driven?",
            "domain": "bcdt",
            "correct_option_index": 1,
            "explanation": "De persoonlijke chauffeurskaart van de bestuurder moet te allen tijde ingevoerd zijn zodra de auto in beweging is, ongeacht of er zakelijk of privé wordt gereden.",
            "role_annotations": [
                {"text": "Welke kaart", "role": "Target"},
                {"text": "moet altijd in de BCT geplaatst zijn", "role": "Obligation"},
                {"text": "zodra er met de taxi wordt gereden", "role": "Condition"}
            ],
            "options": [
                "De ondernemerskaart van de taxihouder.",
                "De persoonlijke chauffeurskaart van de actieve taxibestuurder.",
                "De inspectiekaart van de ILT.",
                "De bankpas van de klant."
            ],
            "trap_annotations": [
                "Fout: De ondernemerskaart dient alleen voor uitlezen van bedrijfsdata op kantoor.",
                "Correct: De chauffeurskaart registreert de individuele rij- en rusttijden van de chauffeur.",
                "Fout: De inspectiekaart wordt alleen gebruikt door handhavers tijdens een controle.",
                "Fout: Betaalkaarten worden niet in de BCT ingevoerd."
            ]
        },
        {
            "dutch_stem": "Wat is volgens het Arbeidstijdenbesluit vervoer (ATBv) de maximale ononderbroken rijtijd voordat een pauze verplicht is?",
            "english_breakdown": "According to the ATBv, what is the maximum continuous driving time before a mandatory break is required?",
            "domain": "atbv",
            "correct_option_index": 2,
            "explanation": "Na maximaal 4,5 uur onafgebroken rijtijd moet de chauffeur een aaneengesloten pauze nemen van ten minste 45 minuten (of opgesplitst in minimaal 15 min gevolgd door 30 min).",
            "role_annotations": [
                {"text": "Volgens het Arbeidstijdenbesluit", "role": "Condition"},
                {"text": "maximale ononderbroken rijtijd", "role": "Target"},
                {"text": "is maximaal 4,5 uur", "role": "Obligation"}
            ],
            "options": [
                "2 uur",
                "3,5 uur",
                "4,5 uur",
                "6 uur"
            ],
            "trap_annotations": [
                "Fout: 2 uur is te kort; dit is geen wettelijke norm voor taxi.",
                "Fout: 3,5 uur is een veelvoorkomende foute aanname.",
                "Correct: 4,5 uur is de strikte Europese en Nederlandse wettelijke grens.",
                "Fout: 6 uur is de grens voor algemene arbeidstijd, niet voor pure rijtijd."
            ]
        },
        {
            "dutch_stem": "Hoeveel uur moet de normale dagelijkse rust minimaal bedragen binnen een periode van 24 uur?",
            "english_breakdown": "How many hours must the normal daily rest period be within a 24-hour window?",
            "domain": "atbv",
            "correct_option_index": 0,
            "explanation": "De standaard dagelijkse rusttijd bedraagt minimaal 11 aaneengesloten uren binnen elke periode van 24 uur.",
            "role_annotations": [
                {"text": "De normale dagelijkse rust", "role": "Target"},
                {"text": "minimaal 11 aaneengesloten uren", "role": "Obligation"},
                {"text": "binnen een periode van 24 uur", "role": "Condition"}
            ],
            "options": [
                "Minimaal 11 aaneengesloten uren.",
                "Minimaal 8 aaneengesloten uren.",
                "Minimaal 9 aaneengesloten uren zonder uitzondering.",
                "Minimaal 12 uren verspreid over de dag."
            ],
            "trap_annotations": [
                "Correct: 11 uur is de standaard wettelijke dagelijkse rust.",
                "Fout: 8 uur is illegaal en leidt tot zware boetes.",
                "Fout: 9 uur mag alleen als verkorte rust maximaal 3 keer tussen twee wekelijkse rusttijden.",
                "Fout: De rust moet aaneengesloten zijn (tenzij de 3+9 uur splitsing wordt toegepast)."
            ]
        },
        {
            "dutch_stem": "Wat betekent de letter 'P' in het PAMAN-ongevalprotocol?",
            "english_breakdown": "What does the letter 'P' stand for in the PAMAN accident protocol?",
            "domain": "paman",
            "correct_option_index": 3,
            "explanation": "P staat voor Plaats (Locatie bepalen en beveiligen: hectometerpaal, straatnaam, gevarendriehoek / alarmlichten).",
            "role_annotations": [
                {"text": "De letter P in PAMAN", "role": "Target"},
                {"text": "staat voor Plaats (locatie & eigen veiligheid)", "role": "Obligation"}
            ],
            "options": [
                "Politie waarschuwen",
                "Passagiers evacueren",
                "Patiënt reanimeren",
                "Plaats van het ongeval (veiligstellen en locatie vaststellen)"
            ],
            "trap_annotations": [
                "Fout: Politie/hulpdiensten bellen valt onder de letter 'M' (Meldkamer).",
                "Fout: Passagiers ontruimen is geen primaire stap van de letter P.",
                "Fout: Medische handelingen vallen onder de letter 'N' (Noodzakelijke hulp).",
                "Correct: P = Plaats (eerst jezelf in veiligheid brengen en exacte positie bepalen)."
            ]
        },
        {
            "dutch_stem": "In welke volgorde moeten de stappen van het PAMAN-protocol worden uitgevoerd bij een ongeval?",
            "english_breakdown": "In which order must the steps of the PAMAN protocol be executed at an accident?",
            "domain": "paman",
            "correct_option_index": 1,
            "explanation": "Volgorde: 1. Plaats (veiligheid & positie), 2. Aard van het ongeval, 3. Meldkamer 112 bellen, 4. Aantal gewonden tellen, 5. Noodzakelijke hulp verlenen.",
            "role_annotations": [
                {"text": "PAMAN protocol stappen", "role": "Target"},
                {"text": "Plaats -> Aard -> Meldkamer -> Aantal -> Noodzakelijke hulp", "role": "Obligation"},
                {"text": "bij een verkeersongeval", "role": "Condition"}
            ],
            "options": [
                "Patiënt verzorgen -> Ambulance bellen -> Politie bellen -> Auto verplaatsen",
                "Plaats beveiligen -> Aard vaststellen -> Meldkamer 112 -> Aantal slachtoffers -> Noodzakelijke hulp",
                "Meldkamer 112 bellen -> Plaats beveiligen -> Noodzakelijke hulp -> Aard vaststellen",
                "Auto parkeren -> Schadeformulier invullen -> Passagiers tellen -> 112 bellen"
            ],
            "trap_annotations": [
                "Fout: Zonder eigen veiligheid (Plaats) breng je jezelf in levensgevaar.",
                "Correct: Dit is de exacte officiële CBR en EHBO volgorde.",
                "Fout: Je kunt 112 pas effectief informeren als je de Plaats en Aard weet.",
                "Fout: Het schadeformulier is pas aan de beurt als alle hulpverlening is afgerond."
            ]
        },
        {
            "dutch_stem": "Een klant stapt in bij een standplaats (straattaxi) en vraagt om een rit zonder vooraf een prijs af te spreken. Hoe moet het tarief berekend worden?",
            "english_breakdown": "A customer enters at a taxi stand without a pre-agreed fare. How must the fare be calculated?",
            "domain": "transport",
            "correct_option_index": 0,
            "explanation": "Bij straattaxi's zonder vooraf afgesproken vaste prijs is de chauffeur wettelijk verplicht de taximeter direct in te schakelen conform de geldende maximumtarieven.",
            "role_annotations": [
                {"text": "Een klant bij een standplaats", "role": "Actor"},
                {"text": "zonder vooraf een vaste prijs", "role": "Condition"},
                {"text": "moet via de ingeschakelde taximeter", "role": "Obligation"}
            ],
            "options": [
                "Uitsluitend via de officieel ingeschakelde en gecertificeerde taximeter.",
                "De chauffeur mag aan het einde van de rit zelf een redelijk bedrag schatten.",
                "De klant betaalt altijd het maximale dagtarief van de gemeente.",
                "Er mag alleen contant worden afgerekend volgens een mondelinge afspraak."
            ],
            "trap_annotations": [
                "Correct: De taximeter is wettelijk verplicht bij standplaatstaxi's.",
                "Fout: Schatten achteraf is illegaal en strafbaar als oplichting.",
                "Fout: Er bestaat geen vast gemeentelijk maximaal dagforfait.",
                "Fout: De klant heeft tevens recht op elektronisch betalen (pin/creditcard)."
            ]
        },
        {
            "dutch_stem": "Wat is een kenmerkend verschil tussen 'Straattaxi' en 'Contractvervoer'?",
            "english_breakdown": "What is a characteristic difference between Street Taxi and Contract Transport?",
            "domain": "transport",
            "correct_option_index": 2,
            "explanation": "Contractvervoer betreft van tevoren schriftelijk vastgelegde ritten (zoals leerlingen- of zorgvervoer) tegen vooraf afgesproken condities, terwijl straattaxi individueel op de openbare weg wordt aangeboden.",
            "role_annotations": [
                {"text": "Straattaxi en Contractvervoer", "role": "Target"},
                {"text": "Contractvervoer is vooraf schriftelijk vastgelegd", "role": "Obligation"}
            ],
            "options": [
                "Bij contractvervoer is geen rijbewijs B nodig.",
                "Straattaxi's mogen nooit op de snelweg rijden.",
                "Contractvervoer is vooraf contractueel vastgelegd voor specifieke doelgroepen tegen vaste voorwaarden.",
                "Bij straattaxi mag de chauffeur nooit fooi accepteren."
            ],
            "trap_annotations": [
                "Fout: Elke taxichauffeur moet een geldig rijbewijs B en chauffeurskaart bezitten.",
                "Fout: Straattaxi's mogen vanzelfsprekend op alle openbare snelwegen rijden.",
                "Correct: Dit definieert contractvervoer (zoals WMO, Valys, zittend ziekenvervoer).",
                "Fout: Fooi accepteren is bij beide vormen toegestaan."
            ]
        },
        {
            "dutch_stem": "Een passagier reageert zeer gefrustreerd en stemverheffend over een verkeersomleiding. Wat is de juiste de-escalerende reactie van de chauffeur?",
            "english_breakdown": "A passenger reacts very frustrated and loudly about a traffic detour. What is the driver's correct de-escalating response?",
            "domain": "gedrag",
            "correct_option_index": 1,
            "explanation": "Blijf rustig, toon begrip voor de situatie ('Ik begrijp dat dit vervelend is'), leg kalm de reden van de omleiding uit en voorkom een defensieve houding.",
            "role_annotations": [
                {"text": "Een passagier reageert gefrustreerd", "role": "Condition"},
                {"text": "De taxichauffeur", "role": "Actor"},
                {"text": "moet rustig blijven, begrip tonen en kalm uitleggen", "role": "Obligation"}
            ],
            "options": [
                "Meteen fel terugsneuvelen en dreigen de klant direct uit de auto te zetten.",
                "Rustig en vriendelijk blijven, luisteren, begrip tonen en zakelijk de noodzaak uitleggen.",
                "De radio op maximaal volume zetten om de klant te overstemmen.",
                "De deuren automatisch vergrendelen en direct naar het politiebureau rijden."
            ],
            "trap_annotations": [
                "Fout: Agressief reageren escaleert het conflict direct.",
                "Correct: Dit is het professionele de-escalatiemodel van het CBR.",
                "Fout: Dit provoceert verdere woede en agressie bij de passagier.",
                "Fout: Disproportioneel zolang er geen sprake is van fysieke bedreiging of strafbare feiten."
            ]
        },
        {
            "dutch_stem": "Een slechtziende klant met een officiële blindengeleidehond wil instappen. Mag de chauffeur deze hond weigeren vanwege hondenharen?",
            "english_breakdown": "A visually impaired customer with a certified guide dog wants to enter. May the driver refuse this dog due to dog hair?",
            "domain": "gedrag",
            "correct_option_index": 3,
            "explanation": "Nee. Gecertificeerde hulphonden en blindengeleidehonden mogen NOOIT geweigerd worden. Dit is wettelijk vastgelegd in het VN-verdrag inzake rechten van personen met een handicap.",
            "role_annotations": [
                {"text": "Een slechtziende klant met blindengeleidehond", "role": "Actor"},
                {"text": "De taxichauffeur", "role": "Actor"},
                {"text": "mag de hulphond NOOIT weigeren", "role": "Obligation"}
            ],
            "options": [
                "Ja, een chauffeur mag alle dieren weigeren zonder opgaaf van reden.",
                "Ja, mits de chauffeur een toeslag van € 25 vraagt voor de schoonmaak.",
                "Alleen als de hond niet in een reismand past.",
                "Nee, een officiële hulphond of blindengeleidehond mag nooit worden geweigerd."
            ],
            "trap_annotations": [
                "Fout: Hulphonden hebben een wettelijke uitzonderingsstatus.",
                "Fout: Extra toeslagen vragen voor hulphonden is discriminatie en verboden.",
                "Fout: Geleidehonden hoeven niet in reismanden.",
                "Correct: Hulphonden moeten verplicht en gratis meegevoerd worden."
            ]
        },
        {
            "dutch_stem": "Welk officieel document bewijst dat het voertuig als taxi is geregistreerd en goedgekeurd?",
            "english_breakdown": "Which official document proves that the vehicle is registered and approved as a taxi?",
            "domain": "transport",
            "correct_option_index": 0,
            "explanation": "De blauwe kentekenplaten en de geldige taxivergunningskaart (van Kiwa) tonen aan dat het voertuig formeel geregistreerd staat als taxi.",
            "role_annotations": [
                {"text": "Taxivoertuig registratie", "role": "Target"},
                {"text": "blauwe kentekenplaten en vergunningsbewijs", "role": "Obligation"}
            ],
            "options": [
                "Het officiële taxivergunningsbewijs en de blauwe kentekenplaten.",
                "Het standaard groene verzekeringsbewijs van een particuliere auto.",
                "Een lidmaatschapskaart van de ANWB.",
                "Een factuur van de plaatselijke garage."
            ],
            "trap_annotations": [
                "Correct: Blauwe kentekenplaten + Kiwa vergunning zijn de formele wettelijke vereisten.",
                "Fout: Particuliere verzekering dekt geen commercieel taxivervoer.",
                "Fout: ANWB lidmaatschap heeft geen officiële rechtskracht.",
                "Fout: Een garagefactuur is geen vergunningsdocument."
            ]
        },
        {
            "dutch_stem": "Wat is het doel van de periodieke kalibratie van de taximeter?",
            "english_breakdown": "What is the purpose of the periodic calibration of the taximeter?",
            "domain": "transport",
            "correct_option_index": 2,
            "explanation": "Kalibratie (met keuringszegel door het NMi / erkend keurder) zorgt ervoor dat de afstand en wachttijd exact correct worden geregistreerd conform de wettelijke tarieven.",
            "role_annotations": [
                {"text": "Kalibratie van de taximeter", "role": "Target"},
                {"text": "garandeert exacte afstand- en prijsmeting conform de wet", "role": "Obligation"}
            ],
            "options": [
                "Om ervoor te zorgen dat de radio storingsvrij kan spelen.",
                "Om de maximumsnelheid van de auto automatisch te begrenzen op 100 km/u.",
                "Om te garanderen dat de ritprijs, afstand en tijd nauwkeurig en eerlijk worden berekend.",
                "Om direct verbinding te maken met de bankrekening van de chauffeur."
            ],
            "trap_annotations": [
                "Fout: Heeft niets met radiofrequenties te maken.",
                "Fout: De taximeter begrenst de motor van het voertuig niet.",
                "Correct: IJking/kalibratie beschermt consumenten tegen onjuiste kilometertelling.",
                "Fout: Kalibratie regelt geen automatische bankoverboekingen."
            ]
        },
        {
            "dutch_stem": "Wat moet een chauffeur doen als een klant aan het einde van de rit weigert te betalen en dreigt met geweld?",
            "english_breakdown": "What should a driver do if a customer refuses to pay at the end of the trip and threatens violence?",
            "domain": "gedrag",
            "correct_option_index": 1,
            "explanation": "Eigen veiligheid staat altijd voorop. Ga niet fysiek vechten om geld. Laat de klant gaan, onthoud het signalement, noteer de exacte locatie en tijd, en schakel direct de politie (112) in.",
            "role_annotations": [
                {"text": "Als een klant weigert te betalen en dreigt met geweld", "role": "Condition"},
                {"text": "De taxichauffeur", "role": "Actor"},
                {"text": "kiest eigen veiligheid, vermijdt fysieke strijd en alarmeert de politie", "role": "Obligation"}
            ],
            "options": [
                "De klant fysiek aanvallen en diens bezittingen met geweld afpakken.",
                "Niet fysiek escaleren voor geld, eigen veiligheid waarborgen, signalement noteren en direct 112 bellen.",
                "De auto opsluiten en 5 uur blijven wachten tot de klant kalmeert.",
                "Het verlies accepteren en er met niemand over praten."
            ],
            "trap_annotations": [
                "Fout: Geweld gebruiken brengt levensgevaar en maakt de chauffeur strafbaar.",
                "Correct: Veiligheid is prioriteit 1 volgens de CBR richtlijnen.",
                "Fout: Gijzeling van de klant in de auto is strafbaar en levensgevaarlijk.",
                "Fout: Zonder aangifte kan de politie daders niet opsporen en herhaling voorkomen."
            ]
        },
        {
            "dutch_stem": "Casus 1 - Vraag 1/5: Chauffeur Samir begint zijn werkdag om 07:00 uur. Om 11:30 uur heeft hij 4,5 uur continu gereden. Wat moet Samir nu verplicht doen volgens het ATBv?",
            "english_breakdown": "Case 1 - Q1/5: Driver Samir starts his workday at 07:00. At 11:30 he has driven 4.5 hours continuously. What must Samir mandatorily do now under the ATBv?",
            "domain": "casus",
            "correct_option_index": 2,
            "explanation": "Na 4,5 uur onafgebroken rijtijd is een pauze van ten minste 45 minuten (of minimaal 15 min + 30 min) wettelijk verplicht.",
            "role_annotations": [
                {"text": "Chauffeur Samir", "role": "Actor"},
                {"text": "na 4,5 uur continu rijden", "role": "Condition"},
                {"text": "moet een pauze van ten minste 45 minuten nemen", "role": "Obligation"}
            ],
            "options": [
                "Nog 1 uur doorrijden als hij zich niet moe voelt.",
                "Een korte stop van 5 minuten maken om koffie te drinken.",
                "Een ononderbroken pauze van minimaal 45 minuten (of opgesplitst conform de wet) nemen.",
                "Zijn auto parkeren en pas de volgende ochtend om 07:00 weer rijden."
            ],
            "trap_annotations": [
                "Fout: Gevoel telt niet; de wet stelt een harde grens op 4,5 uur.",
                "Fout: 5 minuten telt niet als een officiële ATBv onderbreking (minimaal 15 min).",
                "Correct: 45 minuten pauze is de strikte wettelijke verplichting.",
                "Fout: De werkdag hoeft niet beëindigd te worden, alleen een pauze is nodig."
            ]
        },
        {
            "dutch_stem": "Casus 1 - Vraag 2/5: Tijdens zijn pauze krijgt Samir een oproep voor een lucratieve rit. Mag hij zijn pauze na 20 minuten afbreken om deze klant op te halen?",
            "english_breakdown": "Case 1 - Q2/5: During his break Samir gets a ride call. May he interrupt his break after 20 minutes to pick up this passenger?",
            "domain": "casus",
            "correct_option_index": 0,
            "explanation": "Als Samir een eerste pauze van ten minste 15 minuten afrondt (bijvoorbeeld 20 min), moet hij na zijn volgende rijperiode minimaal een tweede pauze van ten minste 30 minuten nemen om aan de wettelijke eis van 45 minuten te voldoen.",
            "role_annotations": [
                {"text": "Samir", "role": "Actor"},
                {"text": "breekt pauze na 20 min af", "role": "Condition"},
                {"text": "mag mits hij later minimaal 30 min aaneengesloten pauzeert", "role": "Obligation"}
            ],
            "options": [
                "Ja, mits hij na de volgende rijperiode een aaneengesloten pauze van minimaal 30 minuten neemt.",
                "Nee, een pauze mag onder geen enkele voorwaarde in twee delen gesplitst worden.",
                "Ja, geld verdienen gaat altijd voor op de Arbeidstijdenwet.",
                "Alleen als de klant een fooi van minimaal € 20 belooft."
            ],
            "trap_annotations": [
                "Correct: De splitsingsregel vereist minimaal 15 minuten + minimaal 30 minuten.",
                "Fout: Splitsen mag juist wel (15m + 30m).",
                "Fout: De wetgeving is dwingend recht en handhaafbaar door de ILT.",
                "Fout: Commercieel voordeel creëert geen wettelijke uitzondering."
            ]
        },
        {
            "dutch_stem": "Casus 1 - Vraag 3/5: De nieuwe klant wil naar Schiphol en vraagt om een vaste prijs van € 60. Samir stemt mondeling toe. Moet de taximeter aan?",
            "english_breakdown": "Case 1 - Q3/5: The passenger asks for a fixed flat fare of €60 to Schiphol. Samir agrees verbally. Must the taximeter run?",
            "domain": "casus",
            "correct_option_index": 1,
            "explanation": "Wanneer er VOORAFGAAND aan de rit een vaste prijs is overeengekomen met de consument, mag deze vaste prijs in rekening worden gebracht en hoeft het eindbedrag niet door de meter bepaald te worden, maar de rit moet wel in de BCT geregistreerd worden.",
            "role_annotations": [
                {"text": "Klant en Samir spreken vooraf vaste prijs af", "role": "Condition"},
                {"text": "De ritprijs is € 60 vast", "role": "Obligation"}
            ],
            "options": [
                "Nee, bij vaste prijs mag nooit een administratie in de BCT worden bijgehouden.",
                "Ja, de vaste prijs is geldig omdat deze vooraf is afgesproken, en de rit wordt als vaste prijs in de BCT geregistreerd.",
                "Nee, vaste prijzen zijn in Nederland ten strengste verboden.",
                "Alleen als Schiphol toestemming geeft via een sms-bericht."
            ],
            "trap_annotations": [
                "Fout: De BCT moet altijd de rit en tijd loggen.",
                "Correct: Vaste prijs vooraf afspreken is wettelijk toegestaan in het taxivervoer.",
                "Fout: Vaste prijzen zijn volkomen legaal mits vooraf overeengekomen.",
                "Fout: Schiphol heeft geen invloed op individuele prijsafspraken in de taxi."
            ]
        },
        {
            "dutch_stem": "Casus 1 - Vraag 4/5: Op de snelweg naar Schiphol ziet Samir een kind van 8 jaar op de achterbank de gordel losklikken. Wat is de wettelijke plicht van Samir?",
            "english_breakdown": "Case 1 - Q4/5: On the highway, Samir sees an 8-year-old child in the back undo their seatbelt. What is Samir's legal duty?",
            "domain": "casus",
            "correct_option_index": 2,
            "explanation": "Voor kinderen onder de 12 jaar (en kleiner dan 1,35 meter) is de taxichauffeur juridisch verantwoordelijk. Samir moet de rit veilig onderbreken of instrueren dat de gordel direct weer vastgemaakt wordt.",
            "role_annotations": [
                {"text": "Een kind van 8 jaar", "role": "Actor"},
                {"text": "klikt gordel los", "role": "Condition"},
                {"text": "Samir is als chauffeur verantwoordelijk voor kinderen onder 12 jaar", "role": "Obligation"}
            ],
            "options": [
                "Niets, want Samir rijdt op de snelweg en mag niet op de achterbank kijken.",
                "Het kind negeren omdat de ouders van het kind niet in de taxi zitten.",
                "Zorgen dat het kind de gordel direct weer omdoet, omdat de chauffeur verantwoordelijk is voor kinderen onder de 12 jaar.",
                "Het kind direct een boete van € 100 contant laten betalen."
            ],
            "trap_annotations": [
                "Fout: De chauffeur behoudt de zorg- en gordelplicht.",
                "Fout: De chauffeur is aansprakelijk als er geen ouders aanwezig zijn.",
                "Correct: Voor kinderen onder de 12 jaar ligt de wettelijke verantwoordelijkheid bij de chauffeur.",
                "Fout: Chauffeurs mogen geen boetes opleggen of innen."
            ]
        },
        {
            "dutch_stem": "Casus 1 - Vraag 5/5: Bij aankomst op Schiphol weigert de BCT zijn chauffeurskaart uit te werpen wegens een mechanische fout. Wat moet Samir registreren?",
            "english_breakdown": "Case 1 - Q5/5: Upon arrival at Schiphol, the BCT refuses to eject his card due to a mechanical fault. What must Samir log?",
            "domain": "casus",
            "correct_option_index": 3,
            "explanation": "Bij een defecte BCT of vastgelopen kaart vult de chauffeur direct een rittenstaat in met datum, tijdstip van storing, ritgegevens en meldt dit bij zijn werkgever/keuringsstation.",
            "role_annotations": [
                {"text": "BCT mechanische storing", "role": "Condition"},
                {"text": "Samir", "role": "Actor"},
                {"text": "moet handmatig de rittenstaat bijwerken en de storing melden", "role": "Obligation"}
            ],
            "options": [
                "Hij hoeft niets te doen en mag zonder registratie de rest van de dag rondrijden.",
                "Hij moet de BCT met een schroevendraaier openbreken.",
                "Hij moet de auto direct naar de autosloperij brengen.",
                "Hij registreert de storing en ritten handmatig op de rittenstaat en meldt het defect direct."
            ],
            "trap_annotations": [
                "Fout: Zonder rittenstaat ben je zwaar in overtreding.",
                "Fout: Zelf openbreken beschadigt het verzegelde apparaat (strafbaar feit).",
                "Fout: Het voertuig is niet total-loss, alleen de BCT heeft onderhoud nodig.",
                "Correct: Handmatige rittenstaat is de officiële noodprocedure."
            ]
        },
        {
            "dutch_stem": "Wat is het maximaal toegestane alcoholpromillage voor een taxichauffeur tijdens het uitoefenen van zijn beroep?",
            "english_breakdown": "What is the maximum permitted blood alcohol level for a taxi driver while practicing their profession?",
            "domain": "gedrag",
            "correct_option_index": 0,
            "explanation": "Voor beroepschauffeurs en beginnende bestuurders geldt in Nederland een strikte limiet van maximaal 0,2 promille (vrijwel nul alcoholtolerantie).",
            "role_annotations": [
                {"text": "Maximaal alcoholpromillage taxichauffeur", "role": "Target"},
                {"text": "maximaal 0,2 promille", "role": "Obligation"}
            ],
            "options": [
                "0,2 promille (streng alcoholverbod).",
                "0,5 promille zoals voor gewone ervaren automobilisten.",
                "0,8 promille zolang er geen passagiers in de auto zitten.",
                "1,0 promille als de rit 's nachts plaatsvindt."
            ],
            "trap_annotations": [
                "Correct: 0,2 promille is de strenge wettelijke norm voor beroepsmatig personenvervoer.",
                "Fout: 0,5 promille geldt alleen voor particuliere niet-beginnende automobilisten.",
                "Fout: 0,8 promille is zwaar boven de wettelijke grens en leidt tot rijontzegging.",
                "Fout: Het tijdstip van de dag maakt geen enkel verschil voor alcoholgrenzen."
            ]
        },
        {
            "dutch_stem": "Wanneer mag een taxichauffeur gebruikmaken van een verplichte busbaan (lijnbusbaan)?",
            "english_breakdown": "When may a taxi driver make use of a mandatory bus lane?",
            "domain": "transport",
            "correct_option_index": 1,
            "explanation": "Een taxi mag alleen over een busbaan rijden indien de gemeente daarvoor een officiële gemeentelijke ontheffing heeft verleend en het bord 'lijnbus/taxi' aanwezig is.",
            "role_annotations": [
                {"text": "Gebruik van de busbaan", "role": "Target"},
                {"text": "alleen met geldige gemeentelijke ontheffing", "role": "Obligation"}
            ],
            "options": [
                "Altijd, want elke taxi heeft automatisch dezelfde rechten als een stadsbus.",
                "Alleen indien de chauffeur beschikt over een geldige gemeentelijke busbaanontheffing.",
                "Alleen als de klant haast heeft om een trein te halen.",
                "Nooit, busbanen zijn onder alle omstandigheden uitsluitend voor het openbaar vervoer."
            ],
            "trap_annotations": [
                "Fout: Taxi's hebben niet automatisch busbaanvrijstelling.",
                "Correct: Een lokale gemeentelijke ontheffing is vereist.",
                "Fout: Haast van de klant is geen geldige verkeersrechtelijke ontheffingsgrond.",
                "Fout: Veel gemeenten staan taxi's met vergunning toe op aangewezen busbanen."
            ]
        },
        {
            "dutch_stem": "Wat moet een chauffeur controleren bij het vastzetten van een rolstoelpassagier?",
            "english_breakdown": "What must a driver check when securing a wheelchair passenger?",
            "domain": "transport",
            "correct_option_index": 2,
            "explanation": "De rolstoel moet met 4 goedgekeurde spanbanden/vergrendelingen aan de vloer zijn vastgezet, de rem van de rolstoel moet erop staan en de passagier moet een goedgekeurde 3-puntsveiligheidsgordel dragen.",
            "role_annotations": [
                {"text": "Vastzetten rolstoelpassagier", "role": "Target"},
                {"text": "4-punts vloerbevestiging, rolstoel op de rem en 3-puntsgordel", "role": "Obligation"}
            ],
            "options": [
                "Alleen controleren of de rolstoel op de handrem staat.",
                "Vragen of de klant zelf de rolstoel met de handen kan vasthouden.",
                "Vastzetten met goedgekeurde 4-punts vloervergrendeling, rolstoel op de rem en een diagonale 3-puntsgordel om de persoon.",
                "De rolstoel los achterin plaatsen met een kussen ertussen."
            ],
            "trap_annotations": [
                "Fout: Alleen de rem is bij een noodstop of botsing levensgevaarlijk onvoldoende.",
                "Fout: Handmatig vasthouden biedt nul bescherming bij g-krachten.",
                "Correct: Dit is de officiële VVR (Code Veilig Vervoer Rolstoelinzittenden) standaard.",
                "Fout: Losse plaatsing is illegaal en levensgevaarlijk."
            ]
        },
        {
            "dutch_stem": "Wat is de maximale geldigheid van een reguliere CBR chauffeurskaart taxi?",
            "english_breakdown": "What is the maximum validity period of a regular taxi driver card?",
            "domain": "transport",
            "correct_option_index": 0,
            "explanation": "Een volledige chauffeurskaart taxi (uitgegeven door Kiwa Register) heeft een maximale geldigheidsduur van 5 jaar, mits aan de medische en VOG-eisen voldaan blijft.",
            "role_annotations": [
                {"text": "Geldigheidsduur chauffeurskaart", "role": "Target"},
                {"text": "maximaal 5 jaar", "role": "Obligation"}
            ],
            "options": [
                "5 jaar",
                "1 jaar",
                "10 jaar",
                "Levenslang geldig"
            ],
            "trap_annotations": [
                "Correct: 5 jaar is de wettelijke geldigheidsduur van de chauffeurskaart.",
                "Fout: 1 jaar geldt alleen voor tijdelijke chauffeurskaarten in opleiding.",
                "Fout: 10 jaar geldt voor een regulier rijbewijs B, niet voor de taxipas.",
                "Fout: De kaart is nooit levenslang geldig i.v.m. medische en VOG herkeuring."
            ]
        },
        {
            "dutch_stem": "Wat is de functie van de letter 'A' (eerste A) in het PAMAN-protocol?",
            "english_breakdown": "What is the function of the letter 'A' (first A) in the PAMAN protocol?",
            "domain": "paman",
            "correct_option_index": 3,
            "explanation": "De eerste A staat voor Aard van het ongeval (bijv. frontale botsing, brandgevaar, beknelling, gevaarlijke stoffen).",
            "role_annotations": [
                {"text": "Eerste letter A in PAMAN", "role": "Target"},
                {"text": "Aard van het ongeval", "role": "Obligation"}
            ],
            "options": [
                "Ambulance bellen",
                "Alcoholtest uitvoeren",
                "Ademhaling controleren",
                "Aard van het ongeval bepalen (wat is er precies gebeurd?)"
            ],
            "trap_annotations": [
                "Fout: Hulpdiensten bellen is stap M (Meldkamer).",
                "Fout: Alcoholtesten worden uitsluitend door de politie uitgevoerd.",
                "Fout: Ademhaling controleren is onderdeel van de medische hulp (stap N).",
                "Correct: A = Aard van het incident (situatiebeoordeling voor de meldkamer)."
            ]
        },
        {
            "dutch_stem": "Wat is de functie van de letter 'M' in het PAMAN-protocol?",
            "english_breakdown": "What is the function of the letter 'M' in the PAMAN protocol?",
            "domain": "paman",
            "correct_option_index": 1,
            "explanation": "M staat voor Meldkamer (112 bellen en gestructureerd doorgeven: Plaats, Aard, Aantal slachtoffers).",
            "role_annotations": [
                {"text": "Letter M in PAMAN", "role": "Target"},
                {"text": "Meldkamer 112 alarmeren", "role": "Obligation"}
            ],
            "options": [
                "Medicatie toedienen",
                "Meldkamer 112 bellen met de verzamelde gegevens",
                "Motor van alle auto's laten draaien",
                "Mond-op-mond beademing starten"
            ],
            "trap_annotations": [
                "Fout: Chauffeurs mogen geen medicatie toedienen.",
                "Correct: M = Meldkamer (noodnummer 112 contacteren).",
                "Fout: Motoren moeten juist worden uitgeschakeld tegen brandgevaar.",
                "Fout: Reanimatie volgt bij stap N indien noodzakelijk."
            ]
        },
        {
            "dutch_stem": "Wat is de functie van de tweede 'A' in het PAMAN-protocol?",
            "english_breakdown": "What is the function of the second 'A' in the PAMAN protocol?",
            "domain": "paman",
            "correct_option_index": 0,
            "explanation": "De tweede A staat voor Aantal slachtoffers en de ernst van hun verwondingen inschatten voor een accurate inzet van hulpdiensten.",
            "role_annotations": [
                {"text": "Tweede letter A in PAMAN", "role": "Target"},
                {"text": "Aantal gewonden en toestand vaststellen", "role": "Obligation"}
            ],
            "options": [
                "Aantal slachtoffers / gewonden tellen en beoordelen",
                "Afrekenen van de taxirit",
                "Auto's wegslepen naar de berm",
                "Adres van getuigen noteren"
            ],
            "trap_annotations": [
                "Correct: A = Aantal slachtoffers bepalen.",
                "Fout: Betalingen zijn volstrekt irrelevant bij levensbedreigende ongevallen.",
                "Fout: Wegslepen mag pas na toestemming van de politie.",
                "Fout: Getuigen noteren gebeurt later bij de afhandeling."
            ]
        },
        {
            "dutch_stem": "Wat is de functie van de letter 'N' in het PAMAN-protocol?",
            "english_breakdown": "What is the function of the letter 'N' in the PAMAN protocol?",
            "domain": "paman",
            "correct_option_index": 2,
            "explanation": "N staat voor Noodzakelijke eerste hulp verlenen (stabiele zijligging, bloedingen stelpen, reanimeren, slachtoffer geruststellen) totdat professionele hulp arriveert.",
            "role_annotations": [
                {"text": "Letter N in PAMAN", "role": "Target"},
                {"text": "Noodzakelijke hulp verlenen", "role": "Obligation"}
            ],
            "options": [
                "Nummerbord noteren",
                "Niet praten met de slachtoffers",
                "Noodzakelijke eerste hulp verlenen (levensreddend handelen)",
                "Naar huis rijden als de ambulance er is"
            ],
            "trap_annotations": [
                "Fout: Nummerborden noteren is geen eerstehulpstap.",
                "Fout: Slachtoffers juist wél geruststellen en aanspreken.",
                "Correct: N = Noodzakelijke hulpverlening volgens EHBO-normen.",
                "Fout: Je blijft ter plaatse als getuige tot de politie je vrijgeeft."
            ]
        },
        {
            "dutch_stem": "Mag een taxichauffeur een rit weigeren omdat de rit erg kort is en weinig oplevert?",
            "english_breakdown": "May a taxi driver refuse a ride because it is very short and earns little?",
            "domain": "transport",
            "correct_option_index": 1,
            "explanation": "Nee. Een taxichauffeur op een standplaats mag een rit NOOIT weigeren enkel vanwege een korte afstand of laag ritbedrag. Dit is een expliciete overtreding van de taxiverordening.",
            "role_annotations": [
                {"text": "Een rit weigeren wegens korte afstand", "role": "Target"},
                {"text": "is verboden voor standplaatstaxi's", "role": "Obligation"}
            ],
            "options": [
                "Ja, een chauffeur is eigen baas en kiest altijd zelf zijn ritten.",
                "Nee, een chauffeur op een standplaats heeft een vervoersplicht en mag korte ritten niet weigeren.",
                "Ja, mits de klant minder dan € 10 contant heeft.",
                "Alleen als het buiten regent."
            ],
            "trap_annotations": [
                "Fout: Standplaatsen hebben een wettelijke vervoersplicht.",
                "Correct: Korte ritten weigeren op de standplaats is ten strengste verboden.",
                "Fout: Bedraghoogte mag geen weigeringsgrond zijn.",
                "Fout: Weersomstandigheden geven geen recht op willekeurige weigering."
            ]
        },
        {
            "dutch_stem": "Wanneer mag een taxichauffeur wél legaal een klant weigeren of de rit afbreken?",
            "english_breakdown": "When is a taxi driver legally permitted to refuse a customer or terminate a trip?",
            "domain": "gedrag",
            "correct_option_index": 3,
            "explanation": "Een chauffeur mag een klant weigeren bij agressie, ernstige dronkenschap die de veiligheid of hygiëne van het voertuig bedreigt, of wanneer de klant weigert de orde en veiligheid te bewaren.",
            "role_annotations": [
                {"text": "Legaal weigeren van een klant", "role": "Target"},
                {"text": "bij agressie, bedreiging of ernstige verstoring van orde en veiligheid", "role": "Obligation"}
            ],
            "options": [
                "Als de klant een buitenlands accent heeft.",
                "Als de klant met een pinpas wil betalen in plaats van contant.",
                "Als de klant naar een ziekenhuis wil rijden.",
                "Als de klant agressief is, wapens draagt of de veiligheid in het voertuig ernstig in gevaar brengt."
            ],
            "trap_annotations": [
                "Fout: Discriminatie op afkomst of taal is streng verboden en strafbaar.",
                "Fout: Elektronisch betalen (pin) moet verplicht worden geaccepteerd.",
                "Fout: Vervoer naar zorginstellingen mag niet zomaar geweigerd worden.",
                "Correct: Gevaar voor veiligheid en fysieke integriteit is een legitieme weigeringsgrond."
            ]
        },
        {
            "dutch_stem": "Wat is de maximale wekelijkse arbeidstijd volgens de Arbeidstijdenwet over een periode van 16 opeenvolgende weken?",
            "english_breakdown": "What is the maximum average weekly working time over a 16-week period?",
            "domain": "atbv",
            "correct_option_index": 0,
            "explanation": "De gemiddelde maximale arbeidstijd per week over een periode van 16 opeenvolgende weken mag niet meer dan 48 uur bedragen.",
            "role_annotations": [
                {"text": "Gemiddelde wekelijkse arbeidstijd (16 weken)", "role": "Target"},
                {"text": "maximaal 48 uur per week gemiddeld", "role": "Obligation"}
            ],
            "options": [
                "Gemiddeld maximaal 48 uur per week.",
                "Gemiddeld maximaal 60 uur per week.",
                "Gemiddeld maximaal 36 uur per week.",
                "Er is geen enkele wettelijke limiet voor zzp-chauffeurs."
            ],
            "trap_annotations": [
                "Correct: 48 uur gemiddeld over 16 weken is de wettelijke norm.",
                "Fout: 60 uur is het absolute maximum in één enkele individuele week, niet het 16-weeks gemiddelde.",
                "Fout: 36 uur is een CAO voltijdsnorm, niet de wettelijke bovengrens van de Arbeidstijdenwet.",
                "Fout: De Arbeidstijdenwet vervoer geldt ook voor zzp-ers."
            ]
        },
        {
            "dutch_stem": "Wat moet er met de gegevens uit de Boordcomputer Taxi (BCT) of Centrale Database Taxi (CDT) gebeuren door de ondernemer?",
            "english_breakdown": "What must the entrepreneur do with the data from the BCT or CDT?",
            "domain": "bcdt",
            "correct_option_index": 2,
            "explanation": "De ondernemer is wettelijk verplicht de BCT/CDT-data ten minste 104 weken (2 jaar) veilig en ongewijzigd te bewaren voor controle door de Inspectie Leefomgeving en Transport (ILT).",
            "role_annotations": [
                {"text": "BCT / CDT data", "role": "Target"},
                {"text": "moet ten minste 104 weken (2 jaar) bewaard blijven", "role": "Obligation"}
            ],
            "options": [
                "Na elke rit direct wissen om geheugen te besparen.",
                "Alleen 1 maand bewaren op een USB-stick.",
                "Minimaal 104 weken (2 jaar) volledig en beveiligd bewaren voor de ILT.",
                "Printen op papier en inleveren bij het gemeentehuis."
            ],
            "trap_annotations": [
                "Fout: Wissen van data is een zwaar economisch delict.",
                "Fout: 1 maand is veel te kort voor de wettelijke bewaartermijn.",
                "Correct: 104 weken (2 jaar) is de wettelijke bewaarplicht.",
                "Fout: Fysiek papier naar het gemeentehuis brengen is geen CDT procedure."
            ]
        },
        {
            "dutch_stem": "Welk orgaan is in Nederland de primaire toezichthouder op de naleving van de taxiwetgeving en rij- en rusttijden?",
            "english_breakdown": "Which authority in the Netherlands is the primary inspectorate for taxi legislation and driving hours?",
            "domain": "bcdt",
            "correct_option_index": 1,
            "explanation": "De Inspectie Leefomgeving en Transport (ILT) is de officiële toezichthouder van het Ministerie van Infrastructuur en Waterstaat.",
            "role_annotations": [
                {"text": "Primaire toezichthouder taxiwetgeving", "role": "Target"},
                {"text": "Inspectie Leefomgeving en Transport (ILT)", "role": "Obligation"}
            ],
            "options": [
                "Het CBR (Centraal Bureau Rijvaardigheidsbewijzen)",
                "De ILT (Inspectie Leefomgeving en Transport)",
                "De Belastingdienst afdeling Douane",
                "De ANWB pechhulpdienst"
            ],
            "trap_annotations": [
                "Fout: Het CBR neemt examens af, maar handhaaft niet op straat.",
                "Correct: De ILT inspecteurs controleren vergunningen, BCT data en naleving op de weg.",
                "Fout: De Douane controleert accijnzen en goederen, niet de algemene taxiwet.",
                "Fout: De ANWB is een commerciële pechhulpvereniging."
            ]
        },
        {
            "dutch_stem": "Mag een taxichauffeur een baby op schoot meenemen zonder kinderbeveiligingssysteem (autostoeltje) in een taxi?",
            "english_breakdown": "May a taxi driver carry a baby on lap without a child restraint seat in a taxi?",
            "domain": "gordelplicht",
            "correct_option_index": 0,
            "explanation": "In een taxi mogen kinderen jonger dan 3 jaar bij uitzondering op de achterbank zonder kinderzitje worden vervoerd als er geen kinderzitje aanwezig is, maar NOOIT voorin en NOOIT met twee personen in één gordel.",
            "role_annotations": [
                {"text": "Kinderen jonger dan 3 jaar in een taxi", "role": "Target"},
                {"text": "mogen bij gebrek aan kinderzitje alleen op de achterbank zonder zitje vervoerd worden", "role": "Condition"}
            ],
            "options": [
                "Ja, bij incidenteel vervoer in een taxi mag een kind onder de 3 jaar op de achterbank zonder zitje reizen, mits niet op de voorstoel.",
                "Ja, een baby mag altijd voorin op schoot van de bijrijder zitten.",
                "Nee, een taxi mag wettelijk nooit rijden zonder goedgekeurd ISOFIX babystoeltje.",
                "Alleen als de baby een eigen helm draagt."
            ],
            "trap_annotations": [
                "Correct: Dit is de specifieke wettelijke uitzondering voor taxi's (Reglement verkeersregels en verkeerstekens).",
                "Fout: Kinderen zonder stoeltje mogen onder geen beding op de voorstoel.",
                "Fout: Taxi's zijn vrijgesteld van de verplichting om altijd alle maten kinderstoeltjes mee te dragen.",
                "Fout: Helmen zijn geen wettelijk voorschrift in personenauto's."
            ]
        },
        {
            "dutch_stem": "Wat is het gevolg als een taxichauffeur weigert mee te werken aan een inspectie door een bevoegde ILT-inspecteur?",
            "english_breakdown": "What is the consequence if a taxi driver refuses to cooperate with an inspection by an ILT inspector?",
            "domain": "bcdt",
            "correct_option_index": 2,
            "explanation": "Weigering om mee te werken aan een wettelijke controle is een strafbaar feit (economisch delict) en kan leiden tot intrekking van de chauffeurskaart en zware geldboetes.",
            "role_annotations": [
                {"text": "Weigering medewerking aan ILT inspectie", "role": "Condition"},
                {"text": "is een strafbaar economisch delict met zware sancties", "role": "Obligation"}
            ],
            "options": [
                "Geen enkel gevolg, inspecteurs hebben geen opsporingsbevoegdheid.",
                "De chauffeur krijgt alleen een waarschuwende e-mail.",
                "Dit is een strafbaar feit (economisch delict) dat leidt tot boetes en mogelijk intrekking van de chauffeurskaart.",
                "De inspecteur moet de ritprijs van de gemiste rit vergoeden."
            ],
            "trap_annotations": [
                "Fout: ILT-inspecteurs zijn buitengewoon opsporingsambtenaar (BOA) met vergaande bevoegdheden.",
                "Fout: Er volgt geen zachte waarschuwing bij formele weigering.",
                "Correct: Het niet tonen van BCT data of vergunningen is een ernstig delict.",
                "Fout: Handhavers betalen nooit schadevergoeding voor rechtmatige controles."
            ]
        },
        {
            "dutch_stem": "Casus 2 - Vraag 1/5: Chauffeur Fatima rijdt in het weekend nachtdienst in Rotterdam. Om 02:00 uur stapt een groep van 3 personen in. Eén van hen morst drinken en gedraagt zich luidruchtig maar niet gewelddadig. Wat is Fatima's beste eerste aanpak?",
            "english_breakdown": "Case 2 - Q1/5: Driver Fatima does a night shift in Rotterdam. At 02:00, 3 persons enter. One spills drinks and acts loud but not violent. What is Fatima's best first approach?",
            "domain": "casus",
            "correct_option_index": 1,
            "explanation": "Stel duidelijke, vriendelijke maar besliste grenzen ('Welkom in de taxi, graag het drinken dichthouden zodat we veilig kunnen vertrekken') zonder direct aanvallend te worden.",
            "role_annotations": [
                {"text": "Fatima", "role": "Actor"},
                {"text": "luidruchtige passagiers bij aanvang nachtrit", "role": "Condition"},
                {"text": "stelt rustig, duidelijk en vriendelijk professionele huisregels", "role": "Obligation"}
            ],
            "options": [
                "Meteen vol op de rem trappen en tegen de passagiers schreeuwen dat ze moeten opkrassen.",
                "Rustig en beslist duidelijke afspraken maken over gedrag en drank in de taxi voordat de rit aanvangt.",
                "Zwijgen en 130 km/u rijden om zo snel mogelijk van hen af te zijn.",
                "De passagiers gratis alcohol aanbieden om ze tevreden te houden."
            ],
            "trap_annotations": [
                "Fout: Agressieve reactie veroorzaakt onmiddellijke escalatie.",
                "Correct: Proactieve, vriendelijke doch duidelijke grensstelling voorkomt incidenten.",
                "Fout: Te hard rijden brengt ernstig verkeersgevaar met zich mee.",
                "Fout: Alcohol schenken in de taxi is verboden en onveilig."
            ]
        },
        {
            "dutch_stem": "Casus 2 - Vraag 2/5: Halverwege de rit eist één van de passagiers dat Fatima door een rood verkeerslicht rijdt omdat hij haast heeft. Wat moet Fatima doen?",
            "english_breakdown": "Case 2 - Q2/5: Midway, a passenger demands Fatima runs a red light because he is in a rush. What must Fatima do?",
            "domain": "casus",
            "correct_option_index": 0,
            "explanation": "Verkeersveiligheid en verkeersregels zijn absoluut. Een chauffeur mag NOOIT de wet overtreden op verzoek van een klant.",
            "role_annotations": [
                {"text": "Klant vraagt door rood te rijden", "role": "Condition"},
                {"text": "Fatima", "role": "Actor"},
                {"text": "moet altijd stoppen voor rood licht", "role": "Obligation"}
            ],
            "options": [
                "Beslist weigeren, netjes stoppen voor het rode licht en uitleggen dat veiligheid en wetgeving vooropstaan.",
                "Door rood rijden mits de klant de eventuele boete belooft te betalen.",
                "Door rood rijden met de alarmlichten aan.",
                "De klant direct het stuur laten overnemen."
            ],
            "trap_annotations": [
                "Correct: De bestuurder is altijd 100% verantwoordelijk voor het naleven van de verkeersregels.",
                "Fout: Belofte van een klant ontslaat de chauffeur nooit van aansprakelijkheid.",
                "Fout: Alarmlichten geven geen vrijstelling voor verkeerslichten.",
                "Fout: Klanten mogen nooit het stuur overnemen."
            ]
        },
        {
            "dutch_stem": "Casus 2 - Vraag 3/5: Vlak voor de bestemming botst een achteropkomende auto zachtjes tegen Fatima's taxi bij een kruispunt. Niemand is gewond. Wat is de juiste actie?",
            "english_breakdown": "Case 2 - Q3/5: Near destination, a car gently rear-ends Fatima's taxi at an intersection. Nobody is injured. What is the correct action?",
            "domain": "casus",
            "correct_option_index": 2,
            "explanation": "Zorg dat het voertuig op een veilige plek staat, zet alarmlichten aan, controleer de passagiers en vul samen met de tegenpartij het Europees Schadeformulier in.",
            "role_annotations": [
                {"text": "Kop-staart botsing zonder gewonden", "role": "Condition"},
                {"text": "Fatima", "role": "Actor"},
                {"text": "beveiligt de locatie en vult het Europees Schadeformulier in", "role": "Obligation"}
            ],
            "options": [
                "Meteen wegrijden zonder gegevens uit te wisselen omdat er geen gewonden zijn.",
                "De traumahelikopter laten oproepen via 112.",
                "Auto veilig opstellen, alarmlichten aan, welzijn passagiers verifiëren en het schadeformulier volledig invullen.",
                "De tegenpartij contant € 500 eisen zonder formulieren."
            ],
            "trap_annotations": [
                "Fout: Wegrijden zonder gegevens is het strafbare feit 'doorrijden na ongeval' (Art 7 WVW).",
                "Fout: Bij lichte materiële schade zonder letsel is een traumahelikopter volstrekt misplaatst.",
                "Correct: Dit is de standaard schadeprocedure conform de wet.",
                "Fout: Zonder schadeformulier ontstaat grote verzekeringsonzekerheid."
            ]
        },
        {
            "dutch_stem": "Casus 2 - Vraag 4/5: De passagiers in de taxi willen direct uitstappen en weglopen zonder de taxirit te betalen vanwege het oponthoud. Wat geldt hier?",
            "english_breakdown": "Case 2 - Q4/5: The passengers want to leave without paying due to the delay from the collision. What applies here?",
            "domain": "casus",
            "correct_option_index": 3,
            "explanation": "De tot dan toe geleverde taxirit moet in principe worden afgerekend (voor het afgelegde traject), maar als Fatima in overleg coulance toepast of laat afrekenen, registreert ze de ritstatus in de BCT/CDT.",
            "role_annotations": [
                {"text": "Passagiers bij ongevalsoponthoud", "role": "Actor"},
                {"text": "ritafsluiting in BCT conform de gereden rit en voorwaarden", "role": "Obligation"}
            ],
            "options": [
                "De passagiers moeten verplicht dubbel tarief betalen als schadevergoeding aan Fatima.",
                "Fatima moet de passagiers fysiek vasthouden tot de politie arriveert.",
                "Het is bij wet verboden een rit af te sluiten na een aanrijding.",
                "De rit wordt conform de BCT afgesloten voor het gereden deel of volgens redelijkheid afgehandeld, met behoud van de ritregistratie."
            ],
            "trap_annotations": [
                "Fout: Dubbel tarief eisen is verboden.",
                "Fout: Fysieke vrijheidsberoving is illegaal.",
                "Fout: Een rit moet altijd correct worden afgesloten in de BCT.",
                "Correct: Correcte administratieve afhandeling met de BCT registratie is verplicht."
            ]
        },
        {
            "dutch_stem": "Casus 2 - Vraag 5/5: Aan het einde van haar nachtdienst om 06:00 uur heeft Fatima in totaal 9 uur arbeidstijd geregistreerd. Haar volgende dienst begint volgens het rooster om 14:00 uur dezelfde dag (na 8 uur). Mag dit volgens het ATBv?",
            "english_breakdown": "Case 2 - Q5/5: At the end of her shift at 06:00, Fatima logged 9h work. Her next shift is scheduled at 14:00 (after 8h rest). Is this permitted under ATBv?",
            "domain": "casus",
            "correct_option_index": 0,
            "explanation": "Nee. De minimale dagelijkse rusttijd bedraagt 11 uur (of bij uitzondering verkort minimaal 9 uur). Een rustperiode van slechts 8 uur is te allen tijde illegaal onder het Arbeidstijdenbesluit vervoer.",
            "role_annotations": [
                {"text": "8 uur rust tussen twee diensten", "role": "Condition"},
                {"text": "is verboden onder het ATBv (minimaal 9 of 11 uur rust vereist)", "role": "Obligation"}
            ],
            "options": [
                "Nee, 8 uur rust is te kort. De minimale rusttijd is 11 uur (of bij verkorte rust minimaal 9 uur).",
                "Ja, 8 uur slaap is voor iedereen in Nederland ruim voldoende volgens de wet.",
                "Ja, mits Fatima een energiedrankje drinkt voor vertrek.",
                "Alleen als haar werkgever schriftelijk verklaart dat er een chauffeurstekort is."
            ],
            "trap_annotations": [
                "Correct: 8 uur overtreedt de absolute wettelijke ondergrens van 9 uur (en de standaardnorm van 11 uur).",
                "Fout: De normatieve rusttijd in het vervoer is 11 uur (verkort 9 uur).",
                "Fout: Drankjes heffen geen vermoeidheid of wettelijke rustverplichtingen op.",
                "Fout: Personeelstekort is geen geldige juridische grond om rusttijden te schenden."
            ]
        }
    ],
    
    "flashcards": [
        {
                "id": 1,
                "front_text": "Gordelplicht: Wie is aansprakelijk als een passagier van 14 jaar weigert de gordel om te doen?",
                "back_text": "🇬🇧 English: Who is liable if a 14yo passenger refuses a seatbelt?\n\n🇳🇱 De passagier van 14 jaar zelf!\nVanaf 12 jaar is de passagier zelfstandig wettelijk aansprakelijk voor de gordelboete (Art. 59 RVV 1990).",
                "audio_path": None,
                "vocab_refs": "[13]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 2,
                "front_text": "Gordelplicht: Wie is aansprakelijk voor een kind van 8 jaar zonder gordel in de taxi?",
                "back_text": "🇬🇧 English: Who is liable for an 8yo child without a seatbelt?\n\n🇳🇱 De taxichauffeur!\nVoor kinderen onder de 12 jaar draagt de chauffeur altijd de volledige juridische verantwoordelijkheid en boete.",
                "audio_path": None,
                "vocab_refs": "[13, 14]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 3,
                "front_text": "Vrijstelling gordelplicht: Wanneer mag de taxichauffeur de gordel losmaken?",
                "back_text": "🇬🇧 English: When may a taxi driver unfasten their seatbelt?\n\n🇳🇱 Uitsluitend stapvoets op of bij de taxistandplaats!\nTijdens de rit met betalende klanten op de openbare weg is de gordel ALTIJD verplicht.",
                "audio_path": None,
                "vocab_refs": "[13, 16]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 4,
                "front_text": "Kindervervoer zonder zitje: Hoe vervoer je een kind van 2 jaar in een straattaxi?",
                "back_text": "🇬🇧 English: Transporting a 2yo child in a taxi without a child seat?\n\n🇳🇱 Uitsluitend op de achterbank en NOOIT voorin!\nBij incidenteel taxivervoer mag een kind onder de 3 jaar los op de achterbank (nooit 2 personen in 1 gordel).",
                "audio_path": None,
                "vocab_refs": "[14, 15]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 5,
                "front_text": "Lengtegrens kinderzitje: Tot welke lengte is een kinderbeveiligingssysteem standaard verplicht?",
                "back_text": "🇬🇧 English: Up to what height is a child restraint mandatory?\n\n🇳🇱 Kleiner dan 1,35 meter!\nKinderen korter dan 1,35 meter moeten in principe in een goedgekeurd kinderzitje of op een stoelverhoger reizen.",
                "audio_path": None,
                "vocab_refs": "[14, 15]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 6,
                "front_text": "Airbag en Maxi-Cosi: Mag een babyzitje tegen de rijrichting in voorin met actieve airbag?",
                "back_text": "🇬🇧 English: May a rear-facing baby seat be placed in front with active airbag?\n\n🇳🇱 NOOIT met ingeschakelde airbag!\nLevensgevaarlijk. De voorairbag MOET fysiek uitgeschakeld zijn als een baby achterwaarts voorin meerijdt.",
                "audio_path": None,
                "vocab_refs": "[14]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 7,
                "front_text": "Twee kinderen in één gordel: Is dit toegestaan als de taxi vol is?",
                "back_text": "🇬🇧 English: Are two children allowed to share one seatbelt?\n\n🇳🇱 Absoluut VERBODEN!\nPer goedgekeurde zitplaats en gordel mag te allen tijde slechts één persoon worden vervoerd.",
                "audio_path": None,
                "vocab_refs": "[13]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 8,
                "front_text": "Veiligheidshesje bij pech: Waar moet de chauffeur dit aantrekken?",
                "back_text": "🇬🇧 English: Safety vest in case of breakdown?\n\n🇳🇱 Vóórdat je het voertuig verlaat op de vluchtstrook!\nHet hesje moet binnen handbereik in de cabine liggen, niet diep weggestopt in de kofferbak.",
                "audio_path": None,
                "vocab_refs": "[17, 23]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 9,
                "front_text": "Alcoholgrens taxichauffeur: Wat is de maximale wettelijke alcohollimiet?",
                "back_text": "🇬🇧 English: Maximum alcohol limit for taxi drivers?\n\n🇳🇱 0,2 promille (88 µg/l)!\nVoor beroepschauffeurs geldt in Nederland een strikte nultolerantie van maximaal 0,2 promille.",
                "audio_path": None,
                "vocab_refs": "[53]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 10,
                "front_text": "Medicijnen en rijvaardigheid: Wat betekent een gele sticker op het medicijndoosje?",
                "back_text": "🇬🇧 English: What does a yellow warning sticker on medication mean?\n\n🇳🇱 Kan de rijvaardigheid beïnvloeden!\nDe chauffeur mag niet rijden onder invloed van stoffen die de reactiesnelheid verminderen (Art. 8 WVW).",
                "audio_path": None,
                "vocab_refs": "[47]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 11,
                "front_text": "Gevarendriehoek afstand: Welke afstand geldt op de autosnelweg bij pech?",
                "back_text": "🇬🇧 English: Warning triangle distance on highways?\n\n🇳🇱 Ongeveer 100 meter achter het voertuig (op normale wegen ca. 30 meter).\nZet de alarmlichten direct aan!",
                "audio_path": None,
                "vocab_refs": "[18, 23]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 12,
                "front_text": "BCT: Waar staat de afkorting BCT voor in de taxiwetgeving?",
                "back_text": "🇬🇧 English: What does BCT stand for?\n\n🇳🇱 Boordcomputer Taxi!\nHet wettelijk verplichte digitale apparaat dat arbeids-, rij-, pauze- en ritgegevens registreert.",
                "audio_path": None,
                "vocab_refs": "[7]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 13,
                "front_text": "Chauffeurskaart: Mag je rijden met de chauffeurskaart van een collega?",
                "back_text": "🇬🇧 English: May you drive with a colleague's driver card?\n\n🇳🇱 STRENG VERBODEN!\nDe chauffeurskaart is strikt persoonlijk. Rijden op andermans kaart is fraude en leidt tot intrekking en zware boetes.",
                "audio_path": None,
                "vocab_refs": "[8]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 14,
                "front_text": "Inloggen BCT: Wanneer moet de chauffeur inloggen in de BCT?",
                "back_text": "🇬🇧 English: When must the driver log into the BCT?\n\n🇳🇱 Vóór aanvang van alle werkzaamheden!\nZodra je diensttijd start, voordat je ook maar één meter rijdt.",
                "audio_path": None,
                "vocab_refs": "[5, 7, 8]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 15,
                "front_text": "BCT defect tijdens de dienst: Wat moet de chauffeur direct doen?",
                "back_text": "🇬🇧 English: BCT fails during shift: What to do?\n\n🇳🇱 Handmatige rittenregistratie bijhouden op papier en direct melden bij de ondernemer.\nDefect moet binnen 3 werkdagen gerepareerd worden.",
                "audio_path": None,
                "vocab_refs": "[7, 12]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 16,
                "front_text": "Chauffeurskaart vergeten of verloren: Mag je toch commerciële ritten rijden?",
                "back_text": "🇬🇧 English: Lost or forgotten driver card: Can you still drive?\n\n🇳🇱 NEE!\nZonder fysieke geldige chauffeurskaart in de BCT is commercieel taxivervoer ten strengste verboden.",
                "audio_path": None,
                "vocab_refs": "[8]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 17,
                "front_text": "Ondernemerskaart BCT: Hoe vaak moet de data uit de BCT worden gedownload?",
                "back_text": "🇬🇧 English: How often must BCT data be downloaded?\n\n🇳🇱 Minimaal eens per 5 weken (35 dagen)!\nDe ondernemer moet de rit- en arbeidsdata minimaal 7 jaar bewaren voor inspecties.",
                "audio_path": None,
                "vocab_refs": "[9, 12]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 18,
                "front_text": "Inspectiekaart: Wie heeft de bevoegdheid de BCT uit te lezen?",
                "back_text": "🇬🇧 English: Who has the authority to read the BCT with an inspection card?\n\n🇳🇱 Inspecteurs van de ILT (Inspectie Leefomgeving en Transport) en bevoegde politieambtenaren.",
                "audio_path": None,
                "vocab_refs": "[10, 49]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 19,
                "front_text": "CDT: Wat betekent de afkorting CDT in het gemoderniseerde toezicht?",
                "back_text": "🇬🇧 English: What does CDT stand for?\n\n🇳🇱 Centrale Database Taxivervoer!\nHet moderne cloud-gebaseerde systeem dat BCT-gegevens realtime veilig doorstuurt naar de overheid.",
                "audio_path": None,
                "vocab_refs": "[7, 49]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 20,
                "front_text": "BTM ritbewijs printen: Is de chauffeur verplicht een ritbewijs aan te bieden?",
                "back_text": "🇬🇧 English: Is the driver obliged to provide a printed trip receipt?\n\n🇳🇱 Ja! De klant heeft altijd wettelijk recht op een geprint of digitaal BTM-ritbewijs.",
                "audio_path": None,
                "vocab_refs": "[33, 54]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 21,
                "front_text": "Taxameter keuring: Hoe herken je een goedgekeurde taxameter?",
                "back_text": "🇬🇧 English: How to recognize an approved taximeter?\n\n🇳🇱 Aan de onbeschadigde officiële verzegeling (ijking) en het keuringsmerk van het NMi / bevoegde instantie.",
                "audio_path": None,
                "vocab_refs": "[11]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 22,
                "front_text": "Handmatige invoer BCT: Wanneer mag je handmatig rust of arbeid toevoegen?",
                "back_text": "🇬🇧 English: When can you manually enter rest or duty in the BCT?\n\n🇳🇱 Alleen voor werkzaamheden of pauzes die buiten het voertuig plaatsvonden vóór de instap.",
                "audio_path": None,
                "vocab_refs": "[7, 8]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 23,
                "front_text": "ATBv: Wat is de maximale ononderbroken rijtijd?",
                "back_text": "🇬🇧 English: Maximum continuous driving time?\n\n🇳🇱 Maximaal 4,5 uur (4 uur en 30 minuten)!\nDaarna is direct een wettelijke pauze van minimaal 45 minuten verplicht.",
                "audio_path": None,
                "vocab_refs": "[1, 4]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 24,
                "front_text": "ATBv Pauzesplitsing: Hoe mag de verplichte pauze van 45 minuten worden opgeknipt?",
                "back_text": "🇬🇧 English: How may the 45-min break be split?\n\n🇳🇱 Uitsluitend in 15 minuten gevolgd door 30 minuten!\n(Andersom mag niet: 30 min eerst en dan 15 min telt NIET als geldige pauzesplitsing).",
                "audio_path": None,
                "vocab_refs": "[1, 4]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 25,
                "front_text": "Dagelijkse rust: Wat is de standaardduur van de dagelijkse rusttijd?",
                "back_text": "🇬🇧 English: Standard daily rest duration?\n\n🇳🇱 Minimaal 11 aaneengesloten uren binnen een etmaal (periode van 24 uur).",
                "audio_path": None,
                "vocab_refs": "[1, 2]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 26,
                "front_text": "Verkorte dagelijkse rust: Hoe vaak mag de dagelijkse rust worden ingekort tot 9 uur?",
                "back_text": "🇬🇧 English: Shortened daily rest to 9h allowed how often?\n\n🇳🇱 Maximaal 3 keer per week tussen twee wekelijkse rustperioden in.",
                "audio_path": None,
                "vocab_refs": "[1, 2]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 27,
                "front_text": "Wekelijkse rust: Wat is de normale ononderbroken wekelijkse rusttijd?",
                "back_text": "🇬🇧 English: Regular weekly rest duration?\n\n🇳🇱 Minimaal 45 aaneengesloten uren per week (mag eens per 2 weken verkort worden tot 24 uur met compensatie).",
                "audio_path": None,
                "vocab_refs": "[1, 3]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 28,
                "front_text": "Maximale wekelijkse arbeidstijd: Hoeveel uur mag een chauffeur gemiddeld per week werken?",
                "back_text": "🇬🇧 English: Average weekly working hours limit?\n\n🇳🇱 Gemiddeld maximaal 48 uur per week over een referentieperiode van 16 weken (piek maximaal 60 uur).",
                "audio_path": None,
                "vocab_refs": "[1, 5]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 29,
                "front_text": "Nachtarbeid: Wanneer spreekt de wet van nachtdienst?",
                "back_text": "🇬🇧 English: When does a shift count as night work?\n\n🇳🇱 Als er arbeid wordt verricht tussen 00:00 en 06:00 uur.\nEr gelden dan strengere maximale diensttijden (max 10 uur per 24 uur).",
                "audio_path": None,
                "vocab_refs": "[1, 5]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 30,
                "front_text": "Diensttijd versus Rijtijd: Wat is het verschil?",
                "back_text": "🇬🇧 English: Shift time vs Driving time difference?\n\n🇳🇱 Rijtijd = feitelijk rollend achter het stuur.\nDiensttijd = alle werktijd inclusief wachten op standplaats, schoonmaken, en administratie.",
                "audio_path": None,
                "vocab_refs": "[1, 5, 6]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 31,
                "front_text": "Dubbele bemanning: Wat is de rustregel bij twee chauffeurs in één taxi?",
                "back_text": "🇬🇧 English: Double crew daily rest rule?\n\n🇳🇱 Binnen elke periode van 30 uur moeten beide chauffeurs ten minste 9 aaneengesloten uren rust hebben genoten.",
                "audio_path": None,
                "vocab_refs": "[1, 2]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 32,
                "front_text": "Pauze in rijdend voertuig: Telt meerijden als bijrijder als wettelijke pauze?",
                "back_text": "🇬🇧 English: Does riding as passenger in moving vehicle count as break?\n\n🇳🇱 Ja, bij meervoudige bemanning telt een pauze van 45 min op de passagiersstoel als geldige onderbreking.",
                "audio_path": None,
                "vocab_refs": "[1, 4]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 33,
                "front_text": "Overschrijding rijtijd door overmacht: Wat te doen bij ernstige file?",
                "back_text": "🇬🇧 English: Driving time overrun due to emergency/traffic jam?\n\n🇳🇱 Rijd naar de eerstvolgende veilige stopplaats en maak DIRECT een aantekening van de reden op de BCT printout.",
                "audio_path": None,
                "vocab_refs": "[1, 4, 12]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 34,
                "front_text": "Zzp'er taxichauffeur: Geldt het Arbeidstijdenbesluit ook voor zelfstandigen?",
                "back_text": "🇬🇧 English: Does the Working Times Decree apply to self-employed drivers?\n\n🇳🇱 JA! De maximale rij- en verplichte rusttijden gelden voor ZOWEL loondienstchauffeurs als zelfstandige ondernemers.",
                "audio_path": None,
                "vocab_refs": "[1, 6]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 35,
                "front_text": "PAMAN: Wat betekent de letter 'P' in het PAMAN-protocol?",
                "back_text": "🇬🇧 English: What does 'P' stand for in PAMAN?\n\n🇳🇱 Plaats van het ongeval beveiligen!\nEerst eigen veiligheid, alarmlichten aan, veiligheidshesje aan en gevarendriehoek plaatsen.",
                "audio_path": None,
                "vocab_refs": "[17, 18, 19]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 36,
                "front_text": "PAMAN: Wat betekent de letter 'A' (de eerste A) in PAMAN?",
                "back_text": "🇬🇧 English: What does the first 'A' mean in PAMAN?\n\n🇳🇱 Aard van het ongeval bepalen!\nWat is er gebeurd? Brandgevaar? Gevaarlijke stoffen? Letsel of alleen blikschade?",
                "audio_path": None,
                "vocab_refs": "[19]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 37,
                "front_text": "PAMAN: Wat betekent de letter 'M' in PAMAN?",
                "back_text": "🇬🇧 English: What does 'M' mean in PAMAN?\n\n🇳🇱 Meldkamer 112 bellen!\nGeef exacte locatie (hectometerpaaltje), aard van het letsel en aantal slachtoffers door.",
                "audio_path": None,
                "vocab_refs": "[19, 20]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 38,
                "front_text": "PAMAN: Wat betekent de letter 'A' (de tweede A) in PAMAN?",
                "back_text": "🇬🇧 English: What does the second 'A' mean in PAMAN?\n\n🇳🇱 Aantal slachtoffers en toestand vaststellen!\nHoeveel gewonden zijn er en zijn ze bij bewustzijn?",
                "audio_path": None,
                "vocab_refs": "[19]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 39,
                "front_text": "PAMAN: Wat betekent de letter 'N' in PAMAN?",
                "back_text": "🇬🇧 English: What does 'N' mean in PAMAN?\n\n🇳🇱 Noodzakelijke eerste hulp verlenen!\nStel ernstige bloedingen, open luchtwegen, reanimeer indien nodig tot de ambulance arriveert.",
                "audio_path": None,
                "vocab_refs": "[19, 21]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 40,
                "front_text": "Bewusteloos slachtoffer dat wél ademt: Welke EHBO-houding pas je toe?",
                "back_text": "🇬🇧 English: Unconscious victim who is breathing: Which position?\n\n🇳🇱 De Stabiele Zijligging!\nZorgt dat de luchtweg vrij blijft en het slachtoffer niet stikt in braaksel of de tong.",
                "audio_path": None,
                "vocab_refs": "[19, 21]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 41,
                "front_text": "Slachtoffer ademt NIET: Welke handeling start je onmiddellijk?",
                "back_text": "🇬🇧 English: Victim not breathing: What to start immediately?\n\n🇳🇱 Reanimatie: 30 borstcompressies afgewisseld met 2 beademingen (30:2) en haal een AED!",
                "audio_path": None,
                "vocab_refs": "[19, 21]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 42,
                "front_text": "Brandende kleding: Wat is de eerste handeling om vlammen te doven?",
                "back_text": "🇬🇧 English: Burning clothing first action?\n\n🇳🇱 Slachtoffer laten rollen over de grond, afdekken met een blusdeken of jas (nooit synthetische stof).",
                "audio_path": None,
                "vocab_refs": "[22]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 43,
                "front_text": "Brandwonden koelen: Hoe lang en waarmee koel je een brandwond?",
                "back_text": "🇬🇧 English: Cooling burns duration and method?\n\n🇳🇱 Minimaal 10 tot 20 minuten met lauw zacht stromend kraanwater (geen ijskoud water).",
                "audio_path": None,
                "vocab_refs": "[21]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 44,
                "front_text": "Helm afdoen bij motorongeval: Mag je de helm van een gewonde zomaar afzetten?",
                "back_text": "🇬🇧 English: Removing helmet after motorbike crash?\n\n🇳🇱 Laat de helm bij voorkeur OP wegens nekwervelletsel! Alleen afdoen bij ademstilstand voor reanimatie.",
                "audio_path": None,
                "vocab_refs": "[19, 21]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 45,
                "front_text": "Europese Alarmnummer: Welk nummer bel je altijd bij levensbedreigende spoed?",
                "back_text": "🇬🇧 English: European emergency telephone number?\n\n🇳🇱 112!\nGratis bereikbaar vanaf alle mobiele telefoons, ook zonder simkaart of beltegoed.",
                "audio_path": None,
                "vocab_refs": "[20]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 46,
                "front_text": "Hulphond weigeren: Mag een taxichauffeur een blindengeleidehond weigeren wegens allergie?",
                "back_text": "🇬🇧 English: Can a driver refuse a guide dog due to allergy?\n\n🇳🇱 NEE, NOOIT!\nGecertificeerde hulphonden moeten wettelijk altijd gratis worden meegenomen (VN-verdrag Handicap).",
                "audio_path": None,
                "vocab_refs": "[25, 26]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 47,
                "front_text": "Toeslag voor hulphond: Mag je extra geld rekenen voor een hulphond of rolstoel?",
                "back_text": "🇬🇧 English: Surcharge for guide dog or wheelchair?\n\n🇳🇱 STRENG VERBODEN!\nVoor hulpmiddelen en erkende hulphonden mag nooit enig extra tarief of toeslag worden berekend.",
                "audio_path": None,
                "vocab_refs": "[25, 27, 36]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 48,
                "front_text": "Rolstoel vastzetten: Hoeveel spanbanden zijn verplicht om een rolstoel te fixeren?",
                "back_text": "🇬🇧 English: How many tie-down straps for a wheelchair?\n\n🇳🇱 Minimaal 4 goedgekeurde spanbanden (2 voor, 2 achter) plus een driepuntsgordel voor de inzittende.",
                "audio_path": None,
                "vocab_refs": "[27, 28]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 49,
                "front_text": "Rolstoelgebruiker vastgorden: Mag je de eigen heupgordel van de rolstoel gebruiken als autogordel?",
                "back_text": "🇬🇧 English: Can wheelchair posture belt substitute vehicle seatbelt?\n\n🇳🇱 NEE!\nDe heupgordel van de rolstoel zelf is niet crashtest-gekeurd. De gekeurde autogordel van de taxi is verplicht.",
                "audio_path": None,
                "vocab_refs": "[13, 27, 28]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 50,
                "front_text": "Communicatie met slechthorende: Wat is de beste benadering?",
                "back_text": "🇬🇧 English: Communicating with a hearing-impaired passenger?\n\n🇳🇱 Kijk de passagier direct aan bij het spreken (liplezen), articuleer duidelijk en schrijf zo nodig op.",
                "audio_path": None,
                "vocab_refs": "[39]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 51,
                "front_text": "Communicatie met slechtziende: Hoe begeleid je een blinde passagier naar de taxi?",
                "back_text": "🇬🇧 English: Guiding a visually impaired passenger to the taxi?\n\n🇳🇱 Bied je elleboog aan (laat de passagier jouw arm vastpakken, trek nooit aan de blinde) en beschrijf obstakels.",
                "audio_path": None,
                "vocab_refs": "[25, 39]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 52,
                "front_text": "Rollator in de taxi: Waar moet de rollator worden opgeborgen tijdens het rijden?",
                "back_text": "🇬🇧 English: Storing a rollator during the trip?\n\n🇳🇱 Veilig opgevouwen in de kofferbak of vastgezet achter een stoel zodat hij bij een noodstop niet kan rondvliegen.",
                "audio_path": None,
                "vocab_refs": "[27, 39]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 53,
                "front_text": "Zwavelzuur accu rolstoel: Mag een elektrische rolstoel met open natte accu mee?",
                "back_text": "🇬🇧 English: Wet acid battery wheelchair allowed?\n\n🇳🇱 Alleen als de accu lekvrij is verzegeld of droge gel/lithium accu's heeft wegens chemisch brandgevaar.",
                "audio_path": None,
                "vocab_refs": "[27]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 54,
                "front_text": "Zorgvervoer plichten: Wat is de taak van de chauffeur bij ziekenvervoer?",
                "back_text": "🇬🇧 English: Driver duties in healthcare transport?\n\n🇳🇱 Begeleiding bieden van voordeur tot ontvangstbalie en zorgen voor een comfortabele en schokvrije rit.",
                "audio_path": None,
                "vocab_refs": "[29, 39]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 55,
                "front_text": "Leerlingenvervoer kinderslot: Wanneer moet het kinderslot op de portieren?",
                "back_text": "🇬🇧 English: Child safety lock in school transport?\n\n🇳🇱 Verplicht ingeschakeld aan de straatzijde zodat kinderen niet onverwacht de rijbaan op kunnen rennen.",
                "audio_path": None,
                "vocab_refs": "[14, 30]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 56,
                "front_text": "Dementerende passagier: Wat doe je als een passagier gedesoriënteerd raakt?",
                "back_text": "🇬🇧 English: Passenger with dementia disoriented: What to do?\n\n🇳🇱 Blijf uiterst kalm, spreek geruststellend, laat de passagier NOOIT alleen en neem direct contact op met de centrale.",
                "audio_path": None,
                "vocab_refs": "[29, 37]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 57,
                "front_text": "Hulphond op de bank: Mag de hond op de stoffen bekleding zitten?",
                "back_text": "🇬🇧 English: Guide dog on upholstered seats?\n\n🇳🇱 De hulphond ligt bij voorkeur op de vloer bij de voeten van de passagier. Gebruik eventueel een kleedje.",
                "audio_path": None,
                "vocab_refs": "[25, 26]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 58,
                "front_text": "Taxitarief opbouw: Uit welke drie basiselementen bestaat het wettelijk taxitarief?",
                "back_text": "🇬🇧 English: What 3 components make up the taxi fare?\n\n🇳🇱 1. Het instaptarief (starttarief)\n2. Het afstandstarief (per kilometer)\n3. Het tijdtarief (per minuut).",
                "audio_path": None,
                "vocab_refs": "[31, 32]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 59,
                "front_text": "Maximumtarief overschrijden: Mag de chauffeur meer rekenen dan de taxameter aangeeft?",
                "back_text": "🇬🇧 English: Can driver charge more than the meter?\n\n🇳🇱 NOOIT!\nHet wettelijke maximumtarief mag onder geen beding worden overschreden. Minder rekenen (korting) mag wel.",
                "audio_path": None,
                "vocab_refs": "[31]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 60,
                "front_text": "Vaste prijs afspreken: Wanneer moet een vaste prijs worden afgesproken?",
                "back_text": "🇬🇧 English: When must a fixed fare price be agreed?\n\n🇳🇱 VÓÓR de aanvang van de rit!\nDe ritprijs moet vooraf duidelijk gecommuniceerd en geregistreerd worden.",
                "audio_path": None,
                "vocab_refs": "[32]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 61,
                "front_text": "Elektronisch betalen verplicht: Mag een chauffeur weigeren pin of creditcard te accepteren?",
                "back_text": "🇬🇧 English: Can a driver refuse card/pin payment?\n\n🇳🇱 NEE!\nIn Nederland is iedere taxichauffeur wettelijk verplicht om elektronische betalingen (pin/contactloos) te accepteren.",
                "audio_path": None,
                "vocab_refs": "[31, 33]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 62,
                "front_text": "Tariefkaart zichtbaarheid: Waar moet de tariefkaart in de taxi zichtbaar zijn?",
                "back_text": "🇬🇧 English: Where must the fare card be visible?\n\n🇳🇱 Zowel van buitenaf (voor het instappen) als van binnenuit (voor de zittende passagier) duidelijk leesbaar.",
                "audio_path": None,
                "vocab_refs": "[34]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 63,
                "front_text": "BTM ritbewijs inhoud: Welke gegevens moeten minimaal op het BTM-bonnetje staan?",
                "back_text": "🇬🇧 English: Minimum info required on printed BTM receipt?\n\n🇳🇱 Ritnummer, kenteken, datum/tijd, vertrek- en aankomsttijd, gereden kilometers, ritprijs en btw-bedrag.",
                "audio_path": None,
                "vocab_refs": "[33, 54]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 64,
                "front_text": "Btw-tarief personenvervoer: Welk btw-percentage geldt voor taxiritten in Nederland?",
                "back_text": "🇬🇧 English: VAT rate for taxi rides in the Netherlands?\n\n🇳🇱 Het verlaagde btw-tarief van 9%!\n(Dit moet duidelijk uitgesplitst op het ritbewijs vermeld staan).",
                "audio_path": None,
                "vocab_refs": "[33]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 65,
                "front_text": "Wachttarief inschakelen: Wanneer mag het wachttarief worden gerekend?",
                "back_text": "🇬🇧 English: When may waiting tariff be charged?\n\n🇳🇱 Alleen als de klant er uitdrukkelijk om heeft gevraagd (bijvoorbeeld wachten tijdens een afspraak).",
                "audio_path": None,
                "vocab_refs": "[35]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 66,
                "front_text": "Wisselgeld bij contante betaling: Hoeveel wisselgeld moet een chauffeur kunnen teruggeven?",
                "back_text": "🇬🇧 English: How much change must a driver be able to provide?\n\n🇳🇱 Voldoende om gangbare biljetten (zoals €50) te kunnen wisselen bij gangbare ritprijzen.",
                "audio_path": None,
                "vocab_refs": "[31, 39]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 67,
                "front_text": "Taxameter aanzetten: Op welk moment start de taxameter?",
                "back_text": "🇬🇧 English: At what moment is the meter started?\n\n🇳🇱 Pas zodra de passagier is ingestapt en de daadwerkelijke rit aanvangt (nooit tijdens het voorrijden).",
                "audio_path": None,
                "vocab_refs": "[11, 31]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 68,
                "front_text": "Vervoersplicht op de standplaats: Mag je een korte rit van €10 weigeren?",
                "back_text": "🇬🇧 English: Can you refuse a short €10 fare on a taxi rank?\n\n🇳🇱 NEE!\nOp de standplaats geldt de vervoersplicht. Je mag een klant NOOIT weigeren enkel omdat de rit te kort is.",
                "audio_path": None,
                "vocab_refs": "[40, 41]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 69,
                "front_text": "Geldige weigeringsgrond: Wanneer mag een chauffeur een klant wél weigeren?",
                "back_text": "🇬🇧 English: Legitimate grounds to refuse a passenger?\n\n🇳🇱 Bij agressie, ernstige dronkenschap met braakgevaar, vieze kleren die de wagen bevuilen, of weigering te betalen.",
                "audio_path": None,
                "vocab_refs": "[40, 41]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 70,
                "front_text": "De-escalatie bij agressie: Wat is de beste eerste reactie van de chauffeur?",
                "back_text": "🇬🇧 English: First de-escalation step with angry passenger?\n\n🇳🇱 Blijf kalm, praat met lage rustige stem, erken het gevoel en ga niet in discussie (Verbal Judo).",
                "audio_path": None,
                "vocab_refs": "[37, 42]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 71,
                "front_text": "Roken en vapen: Mag een klant roken in de taxi als hij een fooi belooft?",
                "back_text": "🇬🇧 English: Smoking/vaping allowed in taxi for tip?\n\n🇳🇱 Absoluut VERBODEN!\nDe Tabaks- en rookwarenwet verbiedt roken en vapen in alle openbare vervoermiddelen.",
                "audio_path": None,
                "vocab_refs": "[39, 41]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 72,
                "front_text": "Klachtenprocedure: Waar kan een ontevreden passagier officieel een klacht indienen?",
                "back_text": "🇬🇧 English: Where can an unsatisfied customer file an official complaint?\n\n🇳🇱 Eerst bij het taxibedrijf zelf via het verplichte klachtenreglement, en extern bij Taxiklacht.nl.",
                "audio_path": None,
                "vocab_refs": "[38]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 73,
                "front_text": "Gevonden voorwerpen: Wat moet je doen met een telefoon die achterblijft in de taxi?",
                "back_text": "🇬🇧 English: Lost phone found in taxi: Duty?\n\n🇳🇱 Bewaren, direct melden bij de centrale of deponeren bij de gemeente (iLost / Bureau Gevonden Voorwerpen).",
                "audio_path": None,
                "vocab_refs": "[39]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 74,
                "front_text": "Routekeuze overleg: Wie bepaalt de uiteindelijke rijroute?",
                "back_text": "🇬🇧 English: Who decides the final route?\n\n🇳🇱 De chauffeur adviseert de snelste/voordeligste route, maar de KLANT heeft altijd het laatste woord.",
                "audio_path": None,
                "vocab_refs": "[39]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 75,
                "front_text": "Kleding en verzorging: Welke eis stelt de CBR-norm aan de taxichauffeur?",
                "back_text": "🇬🇧 English: Clothing and grooming standard for taxi drivers?\n\n🇳🇱 Representatieve, schone kleding, goede persoonlijke hygiëne en een rookvrije schone wagen.",
                "audio_path": None,
                "vocab_refs": "[39]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 76,
                "front_text": "Fysiek geweld door klant: Wat is het veiligheidsprotocol?",
                "back_text": "🇬🇧 English: Safety protocol during physical aggression?\n\n🇳🇱 Auto veilig aan de kant zetten op een openbare plek, contactsleutel meenemen, voertuig verlaten en 112 bellen.",
                "audio_path": None,
                "vocab_refs": "[37, 42]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 77,
                "front_text": "Privacy van de klant: Mag je privégesprekken van klanten op sociale media delen?",
                "back_text": "🇬🇧 English: Can you share passenger private conversations on social media?\n\n🇳🇱 NOOIT! Beroepsgeheim en de Algemene Verordening Gegevensbescherming (AVG) verbieden dit strikt.",
                "audio_path": None,
                "vocab_refs": "[39]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 78,
                "front_text": "Wet Personenvervoer 2000 (Wp2000): Wat regelt deze wet?",
                "back_text": "🇬🇧 English: What does Wp2000 regulate?\n\n🇳🇱 De basisregels voor het aanbieden van taxivervoer, vergunningplichten, consumentenbescherming en markttoezicht.",
                "audio_path": None,
                "vocab_refs": "[50]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 79,
                "front_text": "Kiwa Register: Welke officiële documenten geeft Kiwa Register uit?",
                "back_text": "🇬🇧 English: What documents does Kiwa Register issue?\n\n🇳🇱 De taxichauffeurskaart, de ondernemersvergunning, de ondernemerskaart en keuringsbewijzen.",
                "audio_path": None,
                "vocab_refs": "[8, 43, 55]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 80,
                "front_text": "VOG Taxi: Wat is een VOG en waarom is deze verplicht?",
                "back_text": "🇬🇧 English: What is a VOG?\n\n🇳🇱 Verklaring Omtrent het Gedrag!\nEen bewijs van Justitie dat de chauffeur geen strafbare feiten heeft gepleegd die het taxivak belemmeren.",
                "audio_path": None,
                "vocab_refs": "[48]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 81,
                "front_text": "Medische keuring: Hoe vaak moet een taxichauffeur medisch gekeurd worden?",
                "back_text": "🇬🇧 English: Medical examination frequency for taxi drivers?\n\n🇳🇱 Elke 5 jaar bij de verlenging van de taxichauffeurskaart door een gecertificeerde Arbo-arts.",
                "audio_path": None,
                "vocab_refs": "[47]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 82,
                "front_text": "Blauwe kentekenplaten: Waarom heeft een Nederlandse taxi blauwe kentekenplaten?",
                "back_text": "🇬🇧 English: Why does a taxi have blue license plates?\n\n🇳🇱 Bewijs van officiële registratie bij de RDW als gekeurd en verzekerd voertuig voor commercieel personenvervoer.",
                "audio_path": None,
                "vocab_refs": "[43, 50]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 83,
                "front_text": "TTO (Toegelaten Taxi Organisatie): Waar is aansluiting bij een TTO verplicht?",
                "back_text": "🇬🇧 English: Where is TTO affiliation mandatory?\n\n🇳🇱 Op de gemeentelijke openbare standplaatsen in aangewezen steden (zoals Amsterdam) voor straattaxi's.",
                "audio_path": None,
                "vocab_refs": "[44, 45]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 84,
                "front_text": "Inspectie Leefomgeving en Transport (ILT): Welke bevoegdheden heeft de ILT?",
                "back_text": "🇬🇧 English: What powers does the ILT inspectorate have?\n\n🇳🇱 Voertuigen aanhouden, BCT uitlezen, documenten vorderen, boetes opleggen en wagens stilleggen bij overtreding.",
                "audio_path": None,
                "vocab_refs": "[10, 49]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 85,
                "front_text": "APK keuring voor taxi's: Hoe vaak moet een taxi APK gekeurd worden?",
                "back_text": "🇬🇧 English: MOT / APK inspection frequency for taxis?\n\n🇳🇱 Ieder jaar (jaarlijks)! Taxi's rijden veel kilometers en worden daarom strenger gekeurd dan privéauto's.",
                "audio_path": None,
                "vocab_refs": "[43, 50]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        },
        {
                "id": 86,
                "front_text": "Milieuzone Amsterdam: Welke eis geldt per 2025 voor taxi's in grote steden?",
                "back_text": "🇬🇧 English: Emission requirement for city taxis?\n\n🇳🇱 Zero-emissie (100% uitstootvrij / elektrisch of waterstof) binnen de vastgestelde uitstootvrije zones.",
                "audio_path": None,
                "vocab_refs": "[51]",
                "last_review": None,
                "ease": 2.5,
                "interval": 1,
                "next_due": None
        }
]
}
