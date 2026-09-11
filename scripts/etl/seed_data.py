"""
Seed curriculum dataset covering all 7 CBR TVT Taxi Theory Domains.
"""

CURRICULUM_DATA = {
    "vocab": [
        {
            "dutch_term": "Arbeidstijdenbesluit",
            "root_decomposition": "Arbeids|tijden|besluit",
            "literal_english": "Labor times decree",
            "legal_meaning": "The statutory Dutch law governing maximum driving hours, work shifts, and mandatory rest periods for taxi drivers.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Boordcomputertaxi",
            "root_decomposition": "Boord|computer|taxi",
            "literal_english": "Onboard computer taxi (BCT)",
            "legal_meaning": "Mandatory digital recording device in every Dutch licensed taxi registering driving times, breaks, speeds, and trips.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Gordelplicht",
            "root_decomposition": "Gordel|plicht",
            "literal_english": "Seatbelt obligation",
            "legal_meaning": "The legal duty to wear seatbelts. The driver is responsible for passengers under 12 years (and <1.35m); passengers 12+ are individually liable.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Chauffeurskaart",
            "root_decomposition": "Chauffeurs|kaart",
            "literal_english": "Driver's card / Taxi pass",
            "legal_meaning": "Personal digital chip card issued by Kiwa Register allowing a driver to log into the BCT/CDT and legally transport passengers.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Ondernemersvergunning",
            "root_decomposition": "Ondernemers|vergunning",
            "literal_english": "Entrepreneur license",
            "legal_meaning": "Company operating license required from Kiwa Register to operate a commercial taxi enterprise.",
            "exam_frequency": "medium"
        },
        {
            "dutch_term": "PAMAN-protocol",
            "root_decomposition": "PA|MAN|protocol",
            "literal_english": "PAMAN protocol",
            "legal_meaning": "Step-by-step emergency acronym: P=Plaats (Location), A=Aard (Nature of accident), M=Meldkamer (Call 112), A=Aantal gewonden (Number of injured), N=Noodzakelijke hulp (Emergency aid).",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "De-escalatietechniek",
            "root_decomposition": "De-escalatie|techniek",
            "literal_english": "De-escalation technique",
            "legal_meaning": "Calm, assertive verbal and non-verbal communication methods used to diffuse aggressive or intoxicated passengers without escalating conflict.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Straattaxi",
            "root_decomposition": "Straat|taxi",
            "literal_english": "Street hailed taxi",
            "legal_meaning": "Consumer taxi flagged on the street or picked up at a taxi stand (standplaatstaxi). Must use taximeter and official maximum tariffs.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Contractvervoer",
            "root_decomposition": "Contract|vervoer",
            "literal_english": "Contract transport",
            "legal_meaning": "Pre-booked passenger transport (e.g. school transport, healthcare/Valys transport) governed by fixed contract terms and fixed rates.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Maximumtarief",
            "root_decomposition": "Maximum|tarief",
            "literal_english": "Maximum tariff",
            "legal_meaning": "Legally capped maximum fare rates established by the Dutch government (start rate + distance per km + time per minute).",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Onderbreking",
            "root_decomposition": "Onder|breking",
            "literal_english": "Interruption / Break",
            "legal_meaning": "A statutory break of at least 15 minutes (or 30/45 min depending on continuous driving) during which no driving or other work is performed.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Dagelijkserust",
            "root_decomposition": "Dagelijkse|rust",
            "literal_english": "Daily rest",
            "legal_meaning": "The mandatory continuous rest period of at least 11 consecutive hours (reducible to 9 hours max 3 times a week) in a 24-hour cycle.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Wekelijksrust",
            "root_decomposition": "Wekelijkse|rust",
            "literal_english": "Weekly rest",
            "legal_meaning": "Mandatory continuous rest period of at least 45 hours (or reduced to 24 hours under specific compensation rules) per week.",
            "exam_frequency": "medium"
        },
        {
            "dutch_term": "CentraleDatabaseTaxi",
            "root_decomposition": "Centrale|Data|base|Taxi",
            "literal_english": "Central Database Taxi (CDT)",
            "legal_meaning": "The modernized cloud-based reporting system replacing legacy hardware BCTs to send trip and rest telemetry directly to the ILT inspectorate.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "InspectieLeefomgevingenTransport",
            "root_decomposition": "Inspectie|Leefomgeving|Transport",
            "literal_english": "Human Environment and Transport Inspectorate (ILT)",
            "legal_meaning": "The Dutch government authority responsible for inspecting taxi licensing, BCT/CDT compliance, and driving hours.",
            "exam_frequency": "medium"
        },
        {
            "dutch_term": "Taxivergunningsbewijs",
            "root_decomposition": "Taxi|vergunnings|bewijs",
            "literal_english": "Taxi license certificate",
            "legal_meaning": "Official blue-colored vehicle license document or card that must be present in the taxi vehicle during commercial operations.",
            "exam_frequency": "medium"
        },
        {
            "dutch_term": "Rijtijd",
            "root_decomposition": "Rij|tijd",
            "literal_english": "Driving time",
            "legal_meaning": "Duration of time spent actively operating the steering wheel and moving the vehicle.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Arbeidstijd",
            "root_decomposition": "Arbeids|tijd",
            "literal_english": "Working time",
            "legal_meaning": "Total time including driving, loading luggage, cleaning the taxi, waiting for assigned rides, and administrative duties.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Vasteprijs",
            "root_decomposition": "Vaste|prijs",
            "literal_english": "Fixed price / Flat rate",
            "legal_meaning": "An agreed flat fare agreed with the customer BEFORE the journey starts. The taximeter does not need to determine the final charge if pre-agreed.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Taximeterplicht",
            "root_decomposition": "Taximeter|plicht",
            "literal_english": "Taximeter obligation",
            "legal_meaning": "The legal obligation to switch on and use an approved, calibrated taximeter for street-hail rides unless a fixed price is pre-agreed.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Klachtenprocedure",
            "root_decomposition": "Klachten|procedure",
            "literal_english": "Complaint procedure",
            "legal_meaning": "Required company procedure informing passengers how to register formal complaints via taxiklacht.nl or the company dispute board.",
            "exam_frequency": "medium"
        },
        {
            "dutch_term": "Rolstoelvervoer",
            "root_decomposition": "Rolstoel|vervoer",
            "literal_english": "Wheelchair transport",
            "legal_meaning": "Specialized transport requiring ISO-certified wheelchair restraint systems, lap/shoulder belts, and driver training on secure tie-downs.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Standplaats",
            "root_decomposition": "Stand|plaats",
            "literal_english": "Taxi rank / Stand",
            "legal_meaning": "Designated municipal taxi parking space where drivers wait in sequence and passengers are free to choose any taxi they prefer.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Tarievenkaart",
            "root_decomposition": "Tarieven|kaart",
            "literal_english": "Tariff card",
            "legal_meaning": "Clearly visible printed card inside and outside the vehicle displaying current starting rates, per-kilometer rates, and per-minute rates.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Rittenstaat",
            "root_decomposition": "Ritten|staat",
            "literal_english": "Trip log sheet",
            "legal_meaning": "Digital or emergency backup paper register detailing trip origins, destinations, distances, fares, and timestamps.",
            "exam_frequency": "medium"
        },
        {
            "dutch_term": "Schadeformulier",
            "root_decomposition": "Schade|formulier",
            "literal_english": "European Accident Statement",
            "legal_meaning": "Standard European accident form that must be completed and signed by both involved parties following a vehicle collision.",
            "exam_frequency": "high"
        },
        {
            "dutch_term": "Verkeersinzicht",
            "root_decomposition": "Verkeers|in|zicht",
            "literal_english": "Traffic insight / Anticipation",
            "legal_meaning": "Defensive driving mindset anticipating actions of vulnerable road users (cyclists, pedestrians, trams).",
            "exam_frequency": "medium"
        },
        {
            "dutch_term": "Zorgplicht",
            "root_decomposition": "Zorg|plicht",
            "literal_english": "Duty of care",
            "legal_meaning": "Legal and ethical responsibility of the taxi driver for passenger safety, comfort, and assisting disabled passengers.",
            "exam_frequency": "high"
        }
    ],
    "grammar": [
        {
            "marker_type": "Modal",
            "dutch_word": "Moet (Moeten)",
            "impact": "Indicates strict legal obligation. No exceptions allowed under Dutch law."
        },
        {
            "marker_type": "Modal",
            "dutch_word": "Mag (Mogen)",
            "impact": "Indicates legal permission or option, but not mandatory duty."
        },
        {
            "marker_type": "Negation",
            "dutch_word": "Niet / Geen",
            "impact": "Negates the clause. Common CBR trap word turning permissions into prohibitions."
        },
        {
            "marker_type": "Condition",
            "dutch_word": "Tenzij",
            "impact": "Means 'Unless' / 'Except if'. Indicates crucial legal exemptions."
        },
        {
            "marker_type": "Condition",
            "dutch_word": "Mits",
            "impact": "Means 'Provided that' / 'On the condition that'. Requirement must be fulfilled."
        },
        {
            "marker_type": "WH",
            "dutch_word": "Wie is verantwoordelijk?",
            "impact": "Asks for the legal entity liable (chauffeur vs passagier vs ondernemer)."
        },
        {
            "marker_type": "WH",
            "dutch_word": "Wanneer",
            "impact": "Asks for exact time limit or trigger event for legal compliance."
        },
        {
            "marker_type": "Condition",
            "dutch_word": "Tijdens rit",
            "impact": "Specifies that the rule applies only while transporting paying passengers."
        },
        {
            "marker_type": "Modal",
            "dutch_word": "Hoeft niet",
            "impact": "Means 'Does not have to' / 'Not required' (absence of obligation)."
        },
        {
            "marker_type": "WH",
            "dutch_word": "Welk document",
            "impact": "Asks which official certificate or card must be presented."
        },
        {
            "marker_type": "Negation",
            "dutch_word": "Verboden",
            "impact": "Strictly forbidden by road traffic or labor legislation."
        },
        {
            "marker_type": "Condition",
            "dutch_word": "In geval van nood",
            "impact": "Emergency conditions altering standard driving rules."
        }
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
            "front_text": "Gordelplicht: Wie is aansprakelijk voor een passagier van 13 jaar?",
            "back_text": "De 13-jarige passagier zelf! Vanaf 12 jaar is de passagier zelfstandig aansprakelijk voor de gordelboete. De chauffeur is alleen verantwoordelijk voor kinderen onder de 12 jaar.",
            "vocab_refs": [3]
        },
        {
            "front_text": "Arbeidstijdenbesluit: Wat is de maximale continue rijtijd?",
            "back_text": "4,5 uur (4 uur en 30 minuten). Daarna is een pauze van minimaal 45 minuten verplicht (of 15 min + 30 min split).",
            "vocab_refs": [1, 11]
        },
        {
            "front_text": "BCT Storing: Wat moet de chauffeur direct doen?",
            "back_text": "Direct overstappen op handmatige registratie via een papieren rittenstaat en de storing binnen de wettelijke termijn laten verhelpen.",
            "vocab_refs": [2, 25]
        },
        {
            "front_text": "PAMAN: Noem de 5 stappen in de juiste volgorde.",
            "back_text": "P = Plaats (veiligheid/locatie)\nA = Aard van het ongeval\nM = Meldkamer 112\nA = Aantal slachtoffers\nN = Noodzakelijke hulp",
            "vocab_refs": [6]
        },
        {
            "front_text": "Standplaatstaxi: Mag je een korte rit weigeren?",
            "back_text": "NEE! Een chauffeur op een standplaats heeft een strikte vervoersplicht en mag nooit een rit weigeren vanwege een korte afstand of klein bedrag.",
            "vocab_refs": [8, 23]
        },
        {
            "front_text": "Hulphond: Mag je een blindengeleidehond weigeren?",
            "back_text": "NEE, NOOIT! Gecertificeerde hulphonden en blindengeleidehonden moeten altijd gratis en verplicht worden meegenomen (VN-verdrag).",
            "vocab_refs": [7, 28]
        },
        {
            "front_text": "Dagelijkse rust: Wat is de standaardduur?",
            "back_text": "Minimaal 11 aaneengesloten uren binnen een periode van 24 uur (mag max 3x per week worden verkort tot minimaal 9 uur).",
            "vocab_refs": [12]
        },
        {
            "front_text": "Alcoholgrens taxichauffeur: Wat is het maximum?",
            "back_text": "0,2 promille. Voor beroepschauffeurs geldt een nultolerantiegrens van maximaal 0,2 promille in het bloed.",
            "vocab_refs": [7]
        }
    ]
}
