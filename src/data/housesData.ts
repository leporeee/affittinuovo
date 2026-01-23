export type HouseData = {
  id: string;
  name: string;
  zone: string;
  // Non mostriamo la via sul sito (solo zona). Lasciamo il campo per compatibilità.
  street: string;
  // Testo breve per badge (es. "200m dal mare")
  distance: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  type: string;
  image: string;
  // Campo non usato direttamente nell’UI, ma tenuto per compatibilità.
  info: Record<string, string | number>;
  services: string[];
  description: string;
  cis?: string;
  cin?: string;
};

export const housesData: HouseData[] = [
  {
    id: "acqua-marina",
    name: "ACQUA MARINA",
    zone: "Baia Verde",
    street: "",
    distance: "200m dal mare",
    guests: 5,
    bedrooms: 2,
    bathrooms: 1,
    type: "Appartamento",
    image: "/case/acqua-marina.jpg",
    info: { Zona: "Baia Verde", Ospiti: 5, Camere: 2, Bagni: 1, Distanza: "200m" },
    services: [
      "Aria condizionata",
      "Lavatrice",
      "TV",
      "Parcheggio",
      "Balcone",
      "Doccia esterna",
      "Frigo con congelatore",
      "Cucina attrezzata",
    ],
    description:
      "A Gallipoli, in zona Baia Verde, a pochi minuti a piedi dal mare e dagli stabilimenti balneari. " +
      "Trilocale con soggiorno e angolo cottura attrezzato, due camere da letto e bagno con doccia. " +
      "Completano l’alloggio balcone attrezzato, docce esterne e possibilità di posto auto. " +
      "Dotazioni: aria condizionata, lavatrice e TV. Ideale fino a 5 ospiti.",
  },
  {
    id: "armonia",
    name: "ARMONIA",
    zone: "Lido San Giovanni",
    street: "",
    distance: "100m dal mare",
    guests: 5,
    bedrooms: 2,
    bathrooms: 1,
    type: "Appartamento",
    image: "/case/armonia.jpg",
    info: { Zona: "Lido San Giovanni", Ospiti: 5, Camere: 2, Bagni: 1, Distanza: "100m" },
    services: [
      "Aria condizionata",
      "Lavatrice",
      "TV",
      "Balcone",
      "Frigo con congelatore",
      "Cucina attrezzata",
    ],
    description:
      "A Gallipoli, in zona Lido San Giovanni, a circa 100 metri dal mare e a pochi minuti a piedi da Baia Verde. " +
      "Trilocale arredato in stile moderno con zona pranzo e divano letto, angolo cottura attrezzato, due camere da letto e bagno con doccia. " +
      "Balcone vista mare arredato per mangiare all’aperto. Dotazioni: climatizzatori, lavatrice e TV. " +
      "Parcheggio gratuito su strada. Ospita fino a 5 persone.",
    cis: "LE07503191000036456",
    cin: "IT075031C200078035",
  },
  {
    id: "atena",
    name: "ATENA",
    zone: "Baia Verde",
    street: "",
    distance: "200m dal mare",
    guests: 9,
    bedrooms: 3,
    bathrooms: 2,
    type: "Appartamento",
    image: "/case/atena.jpg",
    info: { Zona: "Baia Verde", Ospiti: 9, Camere: 3, Bagni: 2, Distanza: "200m" },
    services: [
      "Aria condizionata",
      "Lavatrice",
      "TV",
      "Balcone",
      "Frigo con congelatore",
      "Cucina attrezzata",
    ],
    description:
      "A Gallipoli, in zona Baia Verde, comoda per mare, lidi e locali raggiungibili a piedi. " +
      "Ampio quadrilocale con sala pranzo e angolo cottura attrezzato, divano letto e balcone arredato. " +
      "Zona notte con tre camere da letto (una quadrupla e due doppie) e due bagni con box doccia. " +
      "Dotazioni: climatizzatori, lavatrice e TV. Ideale per famiglie e gruppi fino a 9 ospiti. " +
      "CIS: LE07503191000038882 • CIN: IT075031C200080975.",
    cis: "LE07503191000038882",
    cin: "IT075031C200080975",
  },
  {
    id: "baia-verde",
    name: "BAIA VERDE APARTMENT",
    zone: "Baia Verde",
    street: "",
    distance: "200m dal mare",
    guests: 6,
    bedrooms: 2,
    bathrooms: 1,
    type: "Appartamento",
    image: "/case/baia-verde-apartment.jpg",
    info: { Zona: "Baia Verde", Ospiti: 6, Camere: 2, Bagni: 1, Distanza: "200m" },
    services: ["Parcheggio", "Terrazza", "Doccia esterna", "Cucina attrezzata"],
    description:
      "Nel cuore di Baia Verde, a pochi minuti a piedi dal mare e dalla movida estiva. " +
      "Appartamento di nuova costruzione per 6 persone con due camere da letto e bagno interno. " +
      "Cucina attrezzata con tutti i comfort e terrazza per pranzare e cenare all’aria aperta. " +
      "In più doccia esterna con lavapiedi e parcheggio privato custodito. " +
      "CIS: LE07503191000045353 • CIN: IT075031C200089791.",
    cis: "LE07503191000045353",
    cin: "IT075031C200089791",
  },
  {
    id: "baiacri",
    name: "BAIACRI",
    zone: "Lido San Giovanni",
    street: "",
    distance: "100m dal mare",
    guests: 6,
    bedrooms: 2,
    bathrooms: 1,
    type: "Appartamento",
    image: "/case/baiacri.jpg",
    info: { Zona: "Lido San Giovanni", Ospiti: 6, Camere: 2, Bagni: 1, Distanza: "100m" },
    services: [
      "Aria condizionata",
      "Lavatrice",
      "TV",
      "Balcone",
      "Frigo con congelatore",
      "Cucina attrezzata",
    ],
    description:
      "A Gallipoli, in zona Lido San Giovanni, a pochi passi dal mare e a breve distanza da Baia Verde. " +
      "Trilocale arredato in stile moderno con ampio salone (divano letto e TV), due camere da letto climatizzate, cucina abitabile attrezzata e bagno con doccia. " +
      "Ampio balcone vista mare con tende parasole, tavolo e sedie per mangiare all’aperto. " +
      "Dotazioni: climatizzatori e lavatrice. Ospita fino a 6 persone.",
  },
  {
    id: "la-perla",
    name: "LA PERLA",
    zone: "Lido San Giovanni",
    street: "",
    distance: "100m dal mare",
    guests: 10,
    bedrooms: 3,
    bathrooms: 2,
    type: "Appartamento",
    image: "/case/la-perla.jpg",
    info: { Zona: "Lido San Giovanni", Ospiti: 10, Camere: 3, Bagni: 2, Distanza: "100m" },
    services: [
      "Aria condizionata",
      "Lavatrice",
      "TV",
      "Balcone",
      "Frigo con congelatore",
      "Cucina attrezzata",
      "Ventilatori a soffitto",
    ],
    description:
      "A Gallipoli, in zona Lido San Giovanni, a circa 100 metri dal mare e a pochi minuti a piedi da Baia Verde. " +
      "Quadrilocale ristrutturato e arredato in stile moderno: soggiorno con divano letto, cucina con angolo cottura attrezzato, tre camere da letto e due bagni con doccia. " +
      "Balcone arredato per mangiare all’aperto. Dotazioni: climatizzatori in ogni ambiente, ventilatori a soffitto, lavatrice e TV. " +
      "Parcheggio gratuito su strada. Ospita fino a 10 ospiti. " +
      "CIS: LE07503191000064898 • CIN: IT075031B400109351.",
    cis: "LE07503191000064898",
    cin: "IT075031B400109351",
  },
  {
    id: "miramare",
    name: "MIRAMARE",
    zone: "Lido San Giovanni",
    street: "",
    distance: "50m dal mare",
    guests: 8,
    bedrooms: 3,
    bathrooms: 2,
    type: "Appartamento",
    image: "/case/miramare.jpg",
    info: { Zona: "Lido San Giovanni", Ospiti: 8, Camere: 3, Bagni: 2, Distanza: "50m" },
    services: [
      "Aria condizionata",
      "Lavatrice",
      "TV",
      "Balcone",
      "Frigo con congelatore",
      "Cucina attrezzata",
      "Ventilatori a soffitto",
    ],
    description:
      "A Gallipoli, in zona Lido San Giovanni, a soli 50 metri dal mare e a pochi minuti a piedi da Baia Verde. " +
      "Quadrilocale ristrutturato in stile moderno con tre camere da letto, due bagni con box doccia, ripostiglio con lavatrice e ampio open space con divano letto e cucina attrezzata. " +
      "Balcone vista mare arredato per mangiare all’aperto. Dotazioni: climatizzatori, ventilatori a soffitto e TV. " +
      "Parcheggio gratuito su strada. Ospita fino a 8 persone. " +
      "CIS: LE07503191000064898 • CIN: IT075031B400109351.",
    cis: "LE07503191000064898",
    cin: "IT075031B400109351",
  },
  {
    id: "mondonuovo",
    name: "MONDONUOVO",
    zone: "Santa Maria al Bagno",
    street: "",
    distance: "a pochi minuti dal mare",
    guests: 7,
    bedrooms: 2,
    bathrooms: 1,
    type: "Appartamento",
    image: "/case/mondonuovo.jpg",
    info: { Zona: "Santa Maria al Bagno", Ospiti: 7, Camere: 2, Bagni: 1 },
    services: ["TV", "Piscina (spazi comuni)", "Spazi esterni"],
    description:
      "A Santa Maria al Bagno (zona Gallipoli), in un contesto residenziale tranquillo immerso nel verde, ideale per una vacanza di relax. " +
      "Ambienti moderni e luminosi con zona giorno pratica e confortevole, camere accoglienti e bagno con box doccia. " +
      "All’esterno aree relax e spazi comuni con piscina, perfetti nelle giornate estive. Ospita fino a 7 persone.",
  },
  {
    id: "villa-azzurra",
    name: "VILLA AZZURRA",
    zone: "Baia Verde",
    street: "",
    distance: "300m dal mare",
    guests: 10,
    bedrooms: 3,
    bathrooms: 2,
    type: "Villa",
    image: "/case/villa-azzurra.jpg",
    info: { Zona: "Baia Verde", Ospiti: 10, Camere: 3, Bagni: 2, Distanza: "300m" },
    services: [
      "Aria condizionata",
      "Lavatrice",
      "TV",
      "Parcheggio",
      "Giardino",
      "Terrazza",
      "Doccia esterna",
      "Frigo con congelatore",
      "Cucina attrezzata",
    ],
    description:
      "A Gallipoli, in zona Baia Verde, comoda per spiagge, stabilimenti e locali raggiungibili a piedi. " +
      "Villetta indipendente ampia e luminosa con spazio esterno e terrazzo: veranda arredata, soggiorno con TV e due divani letto, cucina abitabile attrezzata, tre camere doppie e due bagni con doccia. " +
      "Dotazioni: aria condizionata, lavatrice, doccia esterna, giardino attrezzato e posto auto. " +
      "Ideale per gruppi e famiglie fino a 10 ospiti. " +
      "CIS: LE07503191000064889 • CIN: IT075031B400109342.",
    cis: "LE07503191000064889",
    cin: "IT075031B400109342",
  },
  {
    id: "villetta-gemma-c",
    name: "VILLETTA GEMMA C",
    zone: "Lido San Giovanni",
    street: "",
    distance: "100m dal mare",
    guests: 6,
    bedrooms: 2,
    bathrooms: 1,
    type: "Villetta",
    image: "/case/villetta-gemma-c.jpg",
    info: { Zona: "Lido San Giovanni", Ospiti: 6, Camere: 2, Bagni: 1, Distanza: "100m" },
    services: [
      "Aria condizionata",
      "Lavatrice",
      "TV",
      "Parcheggio",
      "Balcone",
      "Doccia esterna",
      "Box auto (su richiesta)",
      "Frigo con congelatore",
      "Cucina attrezzata",
    ],
    description:
      "A Gallipoli, in zona Lido San Giovanni, a circa 100 metri dal mare e a pochi minuti a piedi da Baia Verde. " +
      "Villino di nuova costruzione al primo piano in complesso di villette a schiera: ampio salone climatizzato con divano letto, cucina con angolo cottura attrezzato, due camere da letto climatizzate e bagno con doccia. " +
      "Balcone arredato per mangiare all’aperto. Dotazioni: clima in ogni ambiente, lavatrice, TV e doccia esterna. " +
      "Parcheggio libero su strada e possibilità di box auto. Ospita fino a 6 ospiti. " +
      "CIS: LE07503191000065766 • CIN: IT075031B400110404.",
    cis: "LE07503191000065766",
    cin: "IT075031B400110404",
  },
  {
    id: "sirena",
    name: "SIRENA",
    zone: "Baia Verde",
    street: "",
    distance: "250m dal mare",
    guests: 5,
    bedrooms: 2,
    bathrooms: 1,
    type: "Villetta",
    image: "/case/sirena.jpg",
    info: { Zona: "Baia Verde", Ospiti: 5, Camere: 2, Bagni: 1, Distanza: "250m" },
    services: [
      "Aria condizionata",
      "Lavatrice",
      "Parcheggio",
      "Giardino",
      "Doccia esterna",
      "Frigo con congelatore",
      "Cucina attrezzata",
    ],
    description:
      "A Gallipoli, in zona Baia Verde, a pochi minuti a piedi dal mare e dagli stabilimenti. " +
      "Villetta indipendente luminosa con spazio esterno e giardino: soggiorno con divano letto, cucina con angolo cottura attrezzato, due camere da letto e bagno con doccia. " +
      "Dotazioni: climatizzatore, lavatrice, doccia esterna e giardino recintato attrezzato per mangiare all’aperto. " +
      "Posto auto protetto e spazio custodito per bici. Ospita fino a 5 persone. " +
      "CIS: LE07503191000071086 • CIN: IT075031B400116965.",
    cis: "LE07503191000071086",
    cin: "IT075031B400116965",
  },
  {
    id: "zeus",
    name: "ZEUS",
    zone: "Baia Verde",
    street: "",
    distance: "250m dal mare",
    guests: 7,
    bedrooms: 2,
    bathrooms: 1,
    type: "Villetta",
    image: "/case/zeus.jpg",
    info: { Zona: "Baia Verde", Ospiti: 7, Camere: 2, Bagni: 1, Distanza: "250m" },
    services: [
      "Aria condizionata",
      "Lavatrice",
      "Parcheggio",
      "Giardino",
      "Doccia esterna",
      "Frigo con congelatore",
      "Cucina attrezzata",
    ],
    description:
      "A Gallipoli, in zona Baia Verde, a pochi minuti a piedi dal mare e dai principali stabilimenti. " +
      "Villetta indipendente finemente arredata con spazio esterno e giardino: soggiorno con divano letto, cucina con angolo cottura attrezzato, due camere da letto e bagno con box doccia. " +
      "Dotazioni: climatizzatori, lavatrice, doccia esterna e giardino recintato attrezzato per pranzi e cene all’aperto. " +
      "Posto auto protetto e spazio custodito per bici. Ospita fino a 7 persone. " +
      "CIS: LE07503191000064823 • CIN: IT075031B400109268.",
    cis: "LE07503191000064823",
    cin: "IT075031B400109268",
  },
];
