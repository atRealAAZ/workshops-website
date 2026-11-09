export type Tone = 'bubbel' | 'detective' | 'land';

export interface ProgrammaBlok {
  start: string; // "0:15"
  minuten: number;
  /** true = de zaal doet zelf mee (klikken, stemmen, zoeken, praten); false = luisteren en kijken */
  doen: boolean;
  titel: string;
  tekst: string;
}

export interface Workshop {
  slug: string;
  titel: string;
  /** Titel met een zacht afbreekstreepje op de plek waar een lang woord mag breken */
  titelAfbreken?: string;
  vraag: string;
  ondertitel: string;
  tone: Tone;
  kort: string;
  feiten: { label: string; waarde: string }[];
  verhaal: string[];
  programma: ProgrammaBlok[];
  meenemen: string[];
  niet: string[];
  nodig: string[];
  tafels: string;
  aankondiging: string[];
  aankondigingBron: 'origineel' | 'concept';
}

const basisFeiten = (vorm: string) => [
  { label: 'Duur', waarde: '90 minuten' },
  { label: 'Groep', waarde: '12 tot 30 deelnemers' },
  { label: 'Vorm', waarde: vorm },
  { label: 'Voorkennis', waarde: 'Geen' },
];

export const workshops: Workshop[] = [
  {
    slug: 'de-informatiebubbel',
    titel: 'De informatiebubbel',
    titelAfbreken: 'De informatie\u00ADbubbel',
    vraag: 'Zie jij dezelfde wereld als je buurman?',
    ondertitel: 'Ervaar hoe je eigen klikken een eigen werkelijkheid maken.',
    tone: 'bubbel',
    kort:
      'Iedereen begint met precies dezelfde nieuwsfeed. Na vijf rondes klikken leest ieder iets anders over dezelfde stad. Dan vergelijk je met je buurman, en pas daarna hoor je hoe dat kan.',
    feiten: basisFeiten('In de zaal, met telefoon en beamer'),
    tafels: 'In tweetallen',
    verhaal: [
      'Op je telefoon open je de nieuwsfeed van Lindenhaven, een verzonnen stad. Iedereen in de zaal ziet hetzelfde: dezelfde video’s, berichten en nieuwsartikelen. Je klikt op wat jij interessant vindt. Goed of fout bestaat niet.',
      'Een ronde duurt een paar minuten, en er staat meer in je feed dan je kunt lezen. Je moet dus kiezen. Tussen de rondes gaan de schermen omlaag en praat de zaal: wie heeft dit gezien? Wat valt je op?',
      'Dan gebeurt er iets in Lindenhaven, en ieder leest erover in de eigen feed. In tweetallen lees je daarna je koppen voor aan je buurman, en zoek je samen terug waar jullie feeds uit elkaar liepen.',
      'Pas dan volgt de uitleg: wat er gemeten wordt, hoe de terugkoppeling werkt, waarom platforms dit doen en wie ervoor betaalt. Elk punt hangt aan iets wat de zaal net zelf meemaakte.',
    ],
    programma: [
      {
        start: '0:00',
        minuten: 15,
        doen: false,
        titel: 'Welkom: hoe kom jij aan je nieuws?',
        tekst:
          'Vroeger lag dezelfde krant op ieders mat. Hoe gaat dat nu? Daarna open je de app, en begint iedereen met dezelfde feed.',
      },
      {
        start: '0:15',
        minuten: 30,
        doen: true,
        titel: 'Klikken',
        tekst:
          'Vijf korte rondes in de feed, met tussendoor gesprek in de zaal. In de laatste twee rondes gebeurt er iets in Lindenhaven.',
      },
      {
        start: '0:45',
        minuten: 20,
        doen: true,
        titel: 'Bubbels vergelijken',
        tekst:
          'In tweetallen je koppen voorlezen, en samen terugzoeken na welke klik het uit elkaar liep.',
      },
      {
        start: '1:05',
        minuten: 15,
        doen: false,
        titel: 'Hoe werkt dit?',
        tekst:
          'Wat er gemeten wordt, de terugkoppeling, en waarom een feed je zo lang mogelijk wil laten kijken.',
      },
      {
        start: '1:20',
        minuten: 10,
        doen: true,
        titel: 'Wat doet dit met je wereldbeeld?',
        tekst:
          'Gesprek met de zaal: waarom is het erg, en waarom is het goed dat we het nu weten?',
      },
    ],
    meenemen: [
      'Je kunt in eigen woorden uitleggen hoe wat je aanklikt bepaalt wat je daarna te zien krijgt.',
      'Je kunt in je eigen feed aanwijzen welke keuzes de doorslag gaven.',
      'Je weet hoe twee mensen met een andere feed een ander beeld van de wereld krijgen, en hoe je dat bij jezelf merkt.',
    ],
    niet: [
      'Geen techniekcollege over algoritmes of data.',
      'Geen waarschuwing tegen sociale media. We laten zien hoe het werkt; het oordeel is aan jou.',
      'Niemand kijkt in je eigen telefoon of accounts. Iedereen begint blanco in de app.',
      'Geen actuele politiek. Alles speelt in de verzonnen stad Lindenhaven.',
    ],
    nodig: [
      'Een telefoon per deelnemer, of per tweetal. Niets installeren: je doet mee via een QR-code.',
      'Een beamer met scherm.',
      'Wifi die het aankan dat de hele zaal tegelijk online is.',
      'Stoelen of tafels, zodat mensen in tweetallen kunnen praten.',
    ],
    aankondigingBron: 'origineel',
    aankondiging: [
      'Zie jij dezelfde wereld als je buurman? Iedere dag bepalen algoritmes welke video’s, berichten en nieuwsartikelen jij te zien krijgt. Op basis van jouw zoekgedrag, interesses en clicks ontstaat langzaam een persoonlijke informatiebubbel. Zonder dat je het merkt, krijg je een steeds andere versie van de werkelijkheid voorgeschoteld dan iemand anders.',
      'In deze interactieve workshop ervaar je zelf hoe zo’n informatiebubbel ontstaat. Je begint met dezelfde uitgangspositie als alle andere deelnemers, maar gaandeweg maakt iedereen andere keuzes. Aan het einde vergelijken we de verschillende bubbels en onderzoeken we hoe kleine keuzes kunnen leiden tot totaal verschillende wereldbeelden.',
      'Kun je nog objectief naar de wereld kijken, of bepaalt het algoritme wat je ziet?',
    ],
  },
  {
    slug: 'nepnieuws-detective',
    titel: 'Nepnieuws-detective',
    vraag: 'Kun jij je ogen nog vertrouwen?',
    ondertitel: 'Kruip in de huid van een digitale detective, en leer uitzoeken wat klopt.',
    tone: 'detective',
    kort:
      'Met AI maak je in seconden een overtuigende foto, video of nieuwsbericht. Na deze avond weet je dat je ogen niet genoeg zijn, en wat een detective dan wél doet: uitzoeken waar iets vandaan komt.',
    feiten: basisFeiten('In de zaal, aan tafels, met telefoon en beamer'),
    tafels: 'Tafels van 3 tot 5',
    verhaal: [
      'We beginnen bij bekende voorbeelden van nepnieuws, en wat ze in de echte wereld deden. Dan stemt de zaal op de telefoon: echt of nep? Zes beelden. De beamer laat zien hoe vaak de zaal ernaast zat, en hoe zeker ze daarbij was.',
      'Daarna zie je live hoe snel nep gemaakt is. De zaal bedenkt iets wat nooit gebeurd is, en met de klok erbij staat het als foto en nieuwsbericht op het scherm.',
      'Met het detectiveboekje lossen de tafels echte zaken op: berichten die echt rondgingen. Ze zoeken zelf, op hun eigen telefoon en op het echte internet. Wie plaatste het eerst? Waar verscheen het beeld eerder? Wie meldt het nog meer?',
      'In de ontknoping liggen de oordelen van alle tafels naast elkaar. Waar waren ze het oneens, en welk bewijs gaf de doorslag? Zelden het beeld zelf.',
    ],
    programma: [
      {
        start: '0:00',
        minuten: 15,
        doen: false,
        titel: 'Wat nepnieuws doet',
        tekst:
          'Van weggepoetste mensen op oude foto’s tot AI: bekende voorbeelden, en wat ze veroorzaakten.',
      },
      {
        start: '0:15',
        minuten: 10,
        doen: true,
        titel: 'Echt of nep?',
        tekst: 'De zaal stemt op zes beelden. De uitslag staat meteen op de beamer.',
      },
      {
        start: '0:25',
        minuten: 8,
        doen: false,
        titel: 'Nep maken kost tien seconden',
        tekst: 'Live, met een idee uit de zaal.',
      },
      {
        start: '0:33',
        minuten: 7,
        doen: true,
        titel: 'De eerste zaak, samen',
        tekst: 'Het detectiveboekje in de praktijk, met de hele zaal op de beamer.',
      },
      {
        start: '0:40',
        minuten: 25,
        doen: true,
        titel: 'De zaken',
        tekst: 'De tafels onderzoeken zelf echte berichten die rondgingen.',
      },
      {
        start: '1:05',
        minuten: 10,
        doen: true,
        titel: 'De ontknoping',
        tekst: 'Wat zeiden de tafels, en wat is de echte afloop?',
      },
      {
        start: '1:15',
        minuten: 15,
        doen: true,
        titel: 'Voor je deelt',
        tekst: 'Wat doe je vanaf morgen anders? En waarom is nepnieuws eigenlijk erg?',
      },
    ],
    meenemen: [
      'Je hebt zelf gezien hoe snel een overtuigende foto of nieuwsbericht te maken is.',
      'Je stelt bij een verdacht bericht vragen die niet van het beeld afhangen: waar komt het vandaan, wie zegt het nog meer, wat wil het dat ik voel?',
      'Je weet waarom trucjes als ‘let op de vingers’ niet meer werken.',
      'Je kent het verschil tussen ‘gemaakt met AI’ en ‘echt, maar misleidend’.',
      'Het detectiveboekje, om thuis te houden.',
    ],
    niet: [
      'Geen cursus AI-beelden maken.',
      'Geen lijstje trucjes om nep te herkennen. De beelden zijn daar inmiddels te goed voor.',
      'Geen politiek. Het gaat om waar een bericht vandaan komt, niet om wie gelijk heeft.',
      'Geen bangmakerij. Wie alles nep noemt, zit er net zo naast als wie alles gelooft.',
    ],
    nodig: [
      'Per tafel minstens één smartphone. Meer is handig om mee te zoeken.',
      'Een beamer met scherm en geluid.',
      'Wifi in de zaal. Valt die weg, dan liggen er zaakdossiers op papier klaar.',
      'Tafels voor 3 tot 5 personen.',
    ],
    aankondigingBron: 'origineel',
    aankondiging: [
      'Kun jij je ogen nog vertrouwen?',
      'Met kunstmatige intelligentie is het tegenwoordig mogelijk om binnen enkele seconden overtuigende foto’s, video’s en nieuwsberichten te maken van iets wat nooit is gebeurd. Een politicus die iets schokkends zegt, een foto van een ramp of een video op social media: we moeten ons steeds vaker afvragen of het wel echt is wat we zien.',
      'In deze interactieve workshop kruip je in de huid van een digitale detective. Aan de hand van uitdagende voorbeelden leer je hoe je nepbeelden, deepfakes en misleidende informatie kunt herkennen en ontdek je waar je op kunt letten om feit van fictie te onderscheiden.',
    ],
  },
  {
    slug: 'samen-een-land-besturen',
    titel: 'Samen een land besturen',
    vraag: 'Hoe zou jij het land besturen?',
    ondertitel: 'Ervaar waarom democratie moeilijk is, en probeer zelf hoe het anders kan.',
    tone: 'land',
    kort:
      'Met de hele zaal bestuur je het verzonnen land Lindenhaven: vier jaar, één beperkt budget, rapporten die elkaar tegenspreken. Aan het eind zijn er verkiezingen. Daarna probeer je een andere manier van besluiten.',
    feiten: basisFeiten('In de zaal, met telefoon, beamer en gesprek'),
    tafels: 'Aan tafels, of als één groep',
    verhaal: [
      'De zaal is de regering van Lindenhaven, een verzonnen land. Op de beamer en op je telefoon zie je hoe het land ervoor staat: welvaart, leefbaarheid, veiligheid, vertrouwen in de democratie, en hoe populair jullie zijn.',
      'Vier jaar lang kiest de zaal elk jaar een pakket maatregelen, met één budget in miljarden. Je leest korte rapporten die elkaar tegenspreken, en bij elke keuze zie je wat die nu oplevert en wat later. Wat meteen scoort, kost vaak later iets. En andersom.',
      'Aan het eind van de vier jaar zijn er verkiezingen. Zijn jullie herkozen? En hoe staat het land ervoor? Dat is niet altijd hetzelfde antwoord.',
      'Dan probeer je een andere manier van besluiten: iedereen doet zelf voorstellen, en samen zoeken we wat de hele zaal kan dragen. Of dat beter werkt, bepaal je zelf.',
    ],
    programma: [
      {
        start: '0:00',
        minuten: 15,
        doen: false,
        titel: 'Wat er mist',
        tekst:
          'Eens in de vier jaar stemmen, weinig inbreng, politici die herkozen willen worden. Is onze democratie nog van deze tijd?',
      },
      {
        start: '0:15',
        minuten: 35,
        doen: true,
        titel: 'Jullie zijn de regering',
        tekst:
          'Vier jaar Lindenhaven: rapporten lezen, overleggen en stemmen over het pakket. Aan het eind de verkiezing.',
      },
      {
        start: '0:50',
        minuten: 25,
        doen: true,
        titel: 'Het kan anders',
        tekst:
          'Een andere manier van besluiten: zelf voorstellen doen, en samen zoeken wat iedereen kan dragen.',
      },
      {
        start: '1:15',
        minuten: 15,
        doen: true,
        titel: 'Reflectie',
        tekst:
          'Wat was het verschil, wat kan er misgaan, en welke manier zou jij willen voor je eigen gemeente?',
      },
    ],
    meenemen: [
      'Je hebt zelf ervaren waarom een bestuur dat herkozen wil worden kiest voor wat nu populair is, en wat dat later kost.',
      'Je weet hoe democratie ook anders kan, bijvoorbeeld met een burgerberaad of digitale inspraak.',
      'Je kunt minstens één ding noemen dat daarbij mis kan gaan.',
    ],
    niet: [
      'Geen partijpolitiek: geen echte partijen, politici of stemadvies.',
      'Geen les staatsinrichting.',
      'Geen reclame voor één systeem. Elk alternatief mag worden afgekraakt.',
      'Geen wedstrijd. Er is geen winnende tafel.',
    ],
    nodig: [
      'Een eigen telefoon. Wie er geen heeft, kijkt mee bij een buur.',
      'Een beamer met scherm.',
      'Wifi die het aankan dat de hele zaal tegelijk online is.',
      'Tafels voor 4 tot 6 personen, of één kring als de groep klein is.',
    ],
    aankondigingBron: 'concept',
    aankondiging: [
      'Hoe zou jij het land besturen?',
      'Eens in de vier jaar mogen we stemmen, en daartussen hebben we weinig te zeggen. Wie regeert, moet kiezen met een beperkt budget, adviezen die elkaar tegenspreken en een verkiezing die altijd om de hoek ligt. Is democratie zoals we die kennen nog van deze tijd?',
      'In deze interactieve workshop bestuur je samen met de andere deelnemers het land Lindenhaven. Je leest rapporten, je discussieert, je verdeelt het budget en je ziet wat je keuzes jaren later betekenen. Daarna probeer je een andere manier van besluiten uit.',
      'Word je herkozen, of gaat het goed met het land? Allebei is moeilijker dan je denkt.',
    ],
  },
];

export const getWorkshop = (slug: string) => workshops.find((w) => w.slug === slug);
