import {
  useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MapPin, Users, Bed, Bath, Car, Waves, Wind, Wifi, Star, Heart, Calendar, MessageCircle, Shield, CheckCircle, ChevronDown, Phone, Sparkles, Home, Search, Clock, ArrowRight, Maximize2, Sun, Coffee, Dumbbell, Camera, Navigation,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { toast } from 'sonner';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';



const WhatsAppIcon = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 448 512"
    className={className}
    fill="currentColor"
    aria-hidden="true"
    focusable="false"
  >
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 222-99.6 222-222 0-59.3-25.2-115-65.1-156.9zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-82.8 184.6-184.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
  </svg>
);

interface House {
  id: string;
  name: string;
  zone: string;
  guests: number;
  bedrooms: number;
  bathrooms: number;
  image: string;
  gallery: string[];
  features: string[];
  description: string;
  priceFrom?: string;
  isNew?: boolean;
  hasPool?: boolean;
  hasParking?: boolean;
  hasAC?: boolean;
  rating?: number;
  reviews?: number;
  position: [number, number];
  distanceToSea?: number;

  category?: string;}

const houses: House[] = [
  {
    id: 'atena',
    name: 'ATENA',
    zone: 'Baia Verde',
    guests: 9,
    bedrooms: 3,
    bathrooms: 2,
    distanceToSea: 200,
    hasPool: false,
    hasParking: false,
    hasAC: true,
    isNew: false,
    category: 'families',
    image: '/case/atena.jpg',
    gallery: [
      '/images/houses/atena.jpg',
      '/images/houses/atena-2.jpg',
      '/images/houses/atena-3.jpg'
    ],
    features: [
      'Cucina attrezzata',
      'Balcone arredato',
      'Climatizzatori',
      'Lavatrice',
      'TV'
    ],
    description: 'A Baia Verde, a pochi minuti a piedi dal mare e dai principali stabilimenti, Residenza Atena è un ampio quadrilocale ideale per famiglie e gruppi fino a 9 ospiti. Dispone di zona giorno con angolo cottura attrezzato e balcone arredato, 3 camere (una quadrupla e due doppie) e 2 bagni con box doccia. Dotazioni: climatizzatori, lavatrice e TV.',
    position: [40.003, 17.933]
  },
  {
    id: 'baia-verde',
    name: 'BAIA VERDE APARTMENT',
    zone: 'Baia Verde',
    guests: 6,
    bedrooms: 2,
    bathrooms: 1,
    distanceToSea: 250,
    hasPool: false,
    hasParking: true,
    hasAC: false,
    isNew: true,
    category: 'couples',
    image: '/case/baia-verde.jpg',
    gallery: [
      '/images/houses/baia-verde.jpg',
      '/images/houses/baia-verde-2.jpg',
      '/images/houses/baia-verde-3.jpg'
    ],
    features: [
      'Nuova costruzione',
      'Cucina attrezzata',
      'Terrazza per mangiare fuori',
      'Doccia esterna + lavapiedi',
      'Parcheggio privato custodito'
    ],
    description: 'Nel cuore di Baia Verde, a pochi minuti a piedi da spiagge e locali, Baia Verde Apartment è un appartamento di nuova costruzione che ospita comodamente fino a 6 persone. Composto da 2 camere da letto, 1 bagno interno, cucina attrezzata e terrazza per pranzare e cenare all’aperto. A disposizione anche doccia esterna con lavapiedi e parcheggio privato custodito.',
    position: [40.001, 17.932]
  },
  {
    id: 'villa-azzurra',
    name: 'VILLA AZZURRA',
    zone: 'Baia Verde',
    guests: 10,
    bedrooms: 3,
    bathrooms: 2,
    distanceToSea: 300,
    hasPool: false,
    hasParking: true,
    hasAC: true,
    isNew: true,
    category: 'luxury',
    image: '/case/villa-azzurra.jpg',
    gallery: [
      '/images/houses/villa-azzurra.jpg',
      '/images/houses/villa-azzurra-2.jpg',
      '/images/houses/villa-azzurra-3.jpg',
      '/images/houses/villa-azzurra-4.jpg'
    ],
    features: [
      'Veranda arredata',
      'Terrazzo',
      'Giardino attrezzato',
      'Cucina attrezzata',
      'Aria condizionata',
      'Lavatrice',
      'Doccia esterna',
      'Posto auto protetto'
    ],
    description: 'A Baia Verde, a pochi minuti a piedi dal mare, Residenza Villa Azzurra è una villetta indipendente ampia e luminosa ideale per gruppi e famiglie fino a 10 ospiti. Composta da veranda arredata, ampio soggiorno con due divani letto, cucina attrezzata, 3 camere doppie e 2 bagni con doccia. Dotazioni: aria condizionata, lavatrice, doccia esterna, giardino attrezzato e posto auto protetto.',
    position: [40.001, 17.932]
  },
  {
    id: 'zeus',
    name: 'ZEUS',
    zone: 'Baia Verde',
    guests: 7,
    bedrooms: 2,
    bathrooms: 1,
    distanceToSea: 250,
    hasPool: false,
    hasParking: true,
    hasAC: true,
    isNew: false,
    category: 'families',
    image: '/case/zeus.jpg',
    gallery: [
      '/images/houses/zeus.jpg',
      '/images/houses/zeus-2.jpg',
      '/images/houses/zeus-3.jpg'
    ],
    features: [
      'Giardino recintato',
      'Cucina attrezzata',
      'Climatizzatori',
      'Lavatrice',
      'Doccia esterna',
      'Posto auto protetto'
    ],
    description: 'A Baia Verde, vicino al mare, Residenza Villetta Zeus è una villetta indipendente con spazio esterno d’accesso e giardino retrostante, ideale fino a 7 ospiti. All’interno: soggiorno con divano letto, cucina attrezzata, 2 camere da letto e 1 bagno con box doccia. Dotazioni: climatizzatori, lavatrice, doccia esterna e posto auto protetto.',
    position: [40.003, 17.931]
  },
  {
    id: 'sirena',
    name: 'SIRENA',
    zone: 'Baia Verde',
    guests: 5,
    bedrooms: 2,
    bathrooms: 1,
    distanceToSea: 200,
    hasPool: false,
    hasParking: true,
    hasAC: true,
    isNew: false,
    category: 'families',
    image: '/case/sirena.jpg',
    gallery: [
      '/images/houses/sirena.jpg',
      '/images/houses/sirena-2.jpg',
      '/images/houses/sirena-3.jpg'
    ],
    features: [
      'Spazio esterno',
      'Giardino recintato',
      'Cucina attrezzata',
      'Climatizzatore',
      'Lavatrice',
      'Doccia esterna',
      'Posto auto protetto'
    ],
    description: 'A Baia Verde, a pochi minuti a piedi dal mare, Residenza Villetta Sirena è una villetta indipendente con spazio esterno e giardino retrostante, ideale fino a 5 ospiti. Dispone di soggiorno con divano letto, cucina attrezzata, 2 camere e 1 bagno con doccia. Dotazioni: climatizzatore, lavatrice, doccia esterna e posto auto protetto.',
    position: [40.002, 17.934]
  },
  {
    id: 'armonia',
    name: 'ARMONIA',
    zone: 'Lido San Giovanni',
    guests: 5,
    bedrooms: 2,
    bathrooms: 1,
    distanceToSea: 100,
    hasPool: false,
    hasParking: false,
    hasAC: true,
    isNew: false,
    category: 'couples',
    image: '/case/armonia.jpg',
    gallery: [
      '/images/houses/armonia.jpg',
      '/images/houses/armonia-2.jpg',
      '/images/houses/armonia-3.jpg'
    ],
    features: [
      'Balcone vista mare',
      'Cucina attrezzata',
      'Climatizzatori',
      'Lavatrice',
      'TV'
    ],
    description: 'In zona Lido San Giovanni, a circa 100 metri dal mare e a pochi minuti da Baia Verde, Residenza Armonia è un trilocale moderno ideale fino a 5 ospiti. Composto da sala pranzo con divano letto e cucina attrezzata, 2 camere da letto e 1 bagno con box doccia. Completa la soluzione un balcone vista mare arredato; dotazioni: lavatrice, TV e climatizzatori.',
    position: [40.015, 17.949]
  },
  {
    id: 'villetta-gemma-c',
    name: 'VILLETTA GEMMA C',
    zone: 'Lido San Giovanni',
    guests: 7,
    bedrooms: 2,
    bathrooms: 1,
    distanceToSea: 100,
    hasPool: false,
    hasParking: false,
    hasAC: true,
    isNew: true,
    category: 'families',
    image: '/case/villetta-gemma-c.jpg',
    gallery: [
      '/images/houses/gemma-c.jpg',
      '/images/houses/gemma-c-2.jpg',
      '/images/houses/gemma-c-3.jpg'
    ],
    features: [
      'Nuova costruzione',
      'Balcone arredato',
      'Cucina attrezzata',
      'Aria condizionata in ogni ambiente',
      'Lavatrice',
      'Doccia esterna'
    ],
    description: 'In zona Lido San Giovanni, a pochi minuti dal mare, Residenza Villetta Gemma C è un villino di nuova costruzione al primo piano ideale fino a 7 ospiti. Dispone di ampio salone climatizzato con divano letto e cucina attrezzata, 2 camere da letto climatizzate e 1 bagno con box doccia. Balcone arredato, doccia esterna e lavatrice completano l’alloggio.',
    position: [40.012, 17.943]
  },
  {
    id: 'baiacri',
    name: 'BAIACRI',
    zone: 'Lido San Giovanni',
    guests: 6,
    bedrooms: 2,
    bathrooms: 1,
    distanceToSea: 100,
    hasPool: false,
    hasParking: false,
    hasAC: true,
    isNew: true,
    category: 'couples',
    image: '/case/baiacri.jpg',
    gallery: [
      '/images/houses/baiacri.jpg',
      '/images/houses/baiacri-2.jpg',
      '/images/houses/baiacri-3.jpg'
    ],
    features: [
      'Balcone vista mare',
      'Cucina abitabile attrezzata',
      'Climatizzatori',
      'Lavatrice',
      'TV'
    ],
    description: 'In zona Lido San Giovanni, a circa 100 metri dal mare, Residenza Baiacri è un trilocale in stile moderno ideale fino a 6 ospiti. Composto da ampio salone con divano letto, 2 camere da letto climatizzate, cucina abitabile attrezzata e 1 bagno con doccia. Balcone vista mare; dotazioni: lavatrice, TV e climatizzatori.',
    position: [40.014, 17.945]
  },
  {
    id: 'miramare',
    name: 'MIRAMARE',
    zone: 'Lido San Giovanni',
    guests: 8,
    bedrooms: 3,
    bathrooms: 2,
    distanceToSea: 50,
    hasPool: false,
    hasParking: false,
    hasAC: true,
    isNew: false,
    category: 'luxury',
    image: '/case/miramare.jpg',
    gallery: [
      '/images/houses/miramare.jpg',
      '/images/houses/miramare-2.jpg',
      '/images/houses/miramare-3.jpg'
    ],
    features: [
      'Balcone vista mare',
      'Cucina attrezzata',
      'Climatizzatori',
      'Lavatrice',
      'Ventilatori a soffitto'
    ],
    description: 'In zona Lido San Giovanni, a pochi passi dal mare, Residenza Miramare è un quadrilocale ristrutturato ideale fino a 8 ospiti. Dispone di 3 camere doppie, 2 bagni con box doccia e un open space con divano letto e cucina attrezzata. Balcone vista mare; dotazioni: lavatrice, climatizzatori e ventilatori a soffitto.',
    position: [40.016, 17.948]
  },
  {
    id: 'la-perla',
    name: 'LA PERLA',
    zone: 'Lido San Giovanni',
    guests: 10,
    bedrooms: 3,
    bathrooms: 2,
    distanceToSea: 100,
    hasPool: false,
    hasParking: false,
    hasAC: true,
    isNew: false,
    category: 'luxury',
    image: '/case/la-perla.jpg',
    gallery: [
      '/images/houses/la-perla.jpg',
      '/images/houses/la-perla-2.jpg',
      '/images/houses/la-perla-3.jpg'
    ],
    features: [
      'Balcone arredato',
      'Cucina attrezzata',
      'Climatizzatori',
      'Lavatrice',
      'Ventilatori a soffitto'
    ],
    description: 'In zona Lido San Giovanni, a circa 100 metri dal mare, Residenza La Perla è un quadrilocale ristrutturato ideale per gruppi e famiglie fino a 10 ospiti. Composto da soggiorno con divano letto, cucina con angolo cottura attrezzato, 3 camere da letto e 2 bagni con doccia. Balcone arredato; dotazioni: lavatrice, climatizzatori e ventilatori a soffitto.',
    position: [40.011, 17.944]
  },
  {
    id: 'mondonuovo',
    name: 'MONDONUOVO',
    zone: 'Santa Maria al Bagno',
    guests: 7,
    bedrooms: 1,
    bathrooms: 1,
    distanceToSea: 150,
    hasPool: true,
    hasParking: false,
    hasAC: false,
    isNew: true,
    category: 'families',
    image: '/case/mondonuovo.jpg',
    gallery: [
      '/images/houses/mondonuovo.jpg',
      '/images/houses/mondonuovo-2.jpg',
      '/images/houses/mondonuovo-3.jpg'
    ],
    features: [
      'Contesto tranquillo',
      'Spazi esterni verdi',
      'Aree comuni con piscina (in residence)',
      'Zona giorno luminosa',
      'Bagno con box doccia'
    ],
    description: 'A Santa Maria al Bagno, in un contesto residenziale curato e tranquillo, Residenza Mondonuovo è ideale per una vacanza tra relax e mare fino a 7 ospiti. Ambienti moderni e luminosi con zona giorno e accesso diretto all’esterno, camere confortevoli e bagno con box doccia. All’esterno sono presenti spazi verdi e aree comuni con piscina (in residence).',
    position: [40.150, 17.990]
  }
];

const faqs = [
  {
    question: 'Come posso prenotare una casa?',
    answer: 'È semplice e veloce! Scegli la casa che preferisci, clicca su "Chiedi su WhatsApp" e invia il messaggio precompilato. Ti risponderemo entro pochi minuti con disponibilità e preventivo. Nessuna prenotazione online, tutto direttamente con noi.'
  },
  {
    question: 'Qual è la politica di cancellazione?',
    answer: 'Capiremo che i piani possono cambiare. Offriamo cancellazione gratuita fino a 30 giorni prima dell\'arrivo. Per cancellazioni entro 30 giorni, applicamo una politica flessibile che valutiamo caso per caso.'
  },
  {
    question: 'Le case sono provviste di biancheria?',
    answer: 'No. La biancheria non è inclusa di base. Se ti serve, scrivici su WhatsApp: ti spieghiamo le opzioni disponibili e cosa conviene per il tuo soggiorno.'
  },
  {
    question: 'Orari check-in e check-out?',
    answer: 'Check-in: dalle 15:00 alle 20:00 (orari diversi concordabili). Check-out: entro le 10:00. Siamo flessibili quando possibile, basta chiedere!'
  },
  {
    question: 'Cosa include il prezzo?',
    answer: 'Il prezzo include: alloggio, biancheria, consumi (acqua, luce, gas), Wi-Fi, pulizie iniziali e finali, assistenza durante il soggiorno. Tasse di soggiorno escluse (€1 al giorno a persona).'
  }
];


const stats = [
  { value: 20, suffix: '+', label: 'Case disponibili', icon: Home },
  { value: 220, suffix: '+', label: 'Ospiti soddisfatti', icon: Users },
  { value: 4.8, suffix: '/5', label: 'Valutazione media', icon: Star },
  { value: 5, suffix: 'min', label: 'Tempo di risposta', icon: Clock }
];

const services = [
  { icon: Wifi, title: 'Wi-Fi Gratuito', description: 'Connessione ad alta velocità' },
  { icon: Car, title: 'Parcheggio', description: 'Incluso in molte proprietà' },
  { icon: Waves, title: 'Vicino al Mare', description: 'Massimo 600m dalla spiaggia' },
  { icon: Wind, title: 'Aria Condizionata', description: 'In tutte le proprietà' },
  { icon: Coffee, title: 'Colazione', description: 'Opzionale su richiesta' },
  { icon: Dumbbell, title: 'Attività', description: 'Sport e escursioni' }
];

function App() {

  // Lightbox: SOLO immagini reali /case/... nel formato {src}
  const getHouseSlides = (house: any) => {
    const raw: any[] = [];
    if (house?.image) raw.push(house.image);
    const arr = house?.images || house?.photos || house?.gallery || [];
    if (Array.isArray(arr)) raw.push(...arr);

    const norm = raw
      .map((x: any) => (typeof x === "string" ? x : (x?.src || x?.url || "")))
      .filter(Boolean)
      .map((u: string) => (u.startsWith("case/") ? "/" + u : u));

    const onlyCase = norm.filter((u: string) => u.startsWith("/case/"));
    const uniq = Array.from(new Set(onlyCase));
    return uniq.map((src: string) => ({ src }));
  };
  const [selectedGuests, setSelectedGuests] = useState<string>('all');
  const [selectedZone, setSelectedZone] = useState<string>('all');
  const [sortBy] = useState<string>('featured');
  const [filteredHouses, setFilteredHouses] = useState<House[]>(houses);
  const [selectedHouse, setSelectedHouse] = useState<House | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false);
  const [formData, setFormData] = useState({
    checkin: '',
    checkout: '',
    guests: '',
    budget: '',
    notes: ''
  });
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<any[]>([]);
  const [activeSection, setActiveSection] = useState('top');
  const [animatedStats, setAnimatedStats] = useState<number[]>(stats.map(() => 0));
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsInView, setStatsInView] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY || 0;
      if (!scrolledRef.current && y > 80) {
        scrolledRef.current = true;
        setScrolled(true);
      } else if (scrolledRef.current && y < 40) {
        scrolledRef.current = false;
        setScrolled(false);
      }
      
      const sections = ['top', 'opzioni', 'case', 'faq', 'form'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let filtered = [...houses];
    
    if (selectedGuests !== 'all') {
      const [min, max] = selectedGuests.split('-').map(Number);
      if (max) {
        filtered = filtered.filter(h => h.guests >= min && h.guests <= max);
      } else {
        filtered = filtered.filter(h => h.guests >= min);
      }
    }
    
    if (selectedZone !== 'all') {
      filtered = filtered.filter(h => h.zone === selectedZone);
    }
    
    switch (sortBy) {
      case 'guests-asc':
        filtered.sort((a, b) => a.guests - b.guests);
        break;
      case 'guests-desc':
        filtered.sort((a, b) => b.guests - a.guests);
        break;
      case 'price-asc':
        filtered.sort((a, b) => {
          const priceA = parseInt(a.priceFrom?.replace('€', '') || '0');
          const priceB = parseInt(b.priceFrom?.replace('€', '') || '0');
          return priceA - priceB;
        });
        break;
      case 'price-desc':
        filtered.sort((a, b) => {
          const priceA = parseInt(a.priceFrom?.replace('€', '') || '0');
          const priceB = parseInt(b.priceFrom?.replace('€', '') || '0');
          return priceB - priceA;
        });
        break;
      case 'name-asc':
        filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }
    
    setFilteredHouses(filtered);
  }, [selectedGuests, selectedZone, sortBy]);

  useEffect(() => {
    if (statsInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        setAnimatedStats(stats.map(stat => {
          const progress = Math.min(step / steps, 1);
          const easeProgress = 1 - Math.pow(1 - progress, 3);
          return stat.value * easeProgress;
        }));
        
        if (step >= steps) {
          clearInterval(timer);
        }
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [statsInView]);

  const toggleFavorite = (houseId: string) => {
    setFavorites(prev => 
      prev.includes(houseId) 
        ? prev.filter(id => id !== houseId)
        : [...prev, houseId]
    );
    toast.success(favorites.includes(houseId) ? 'Rimosso dai preferiti' : 'Aggiunto ai preferiti', {
      position: 'top-center'
    });
  };

  const handleWhatsApp = (house: House) => {
    const message = `Ciao! Vorrei ricevere disponibilità per ${house.name}.\nZona: ${house.zone}\nOspiti: ${house.guests}\nGrazie!`;
    const url = `https://wa.me/393292272939?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.checkin || !formData.checkout || !formData.guests) {
      toast.error('Compila tutti i campi obbligatori');
      return;
    }
    const message = `Ciao! Vorrei ricevere disponibilità per una casa a Gallipoli.\n\nCheck-in: ${formData.checkin}\nCheck-out: ${formData.checkout}\nOspiti: ${formData.guests}${formData.budget ? `\nBudget: ${formData.budget}` : ''}${formData.notes ? `\nNote: ${formData.notes}` : ''}\n\nGrazie!`;
    const url = `https://wa.me/393292272939?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const openLightbox = (house: House, index: number) => {
    setLightboxImages(getHouseSlides(house));
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setShowMobileMenu(false);
  };

  return (
    </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-800 mb-2">Descrizione</h3>
                    <p className="text-gray-600 leading-relaxed">{selectedHouse.description}</p>
                  </div>

                  {selectedHouse.rating && (
                    <div className="flex items-center gap-2 mb-6 p-4 bg-teal-50 rounded-xl">
                      <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                      <span className="font-semibold">{selectedHouse.rating}/5</span>
                      <span className="text-gray-500">
                        ({selectedHouse.reviews} recensioni)
                      </span>
                    </div>
                  )}

                  <div className="flex gap-3">
                    <button 
                      onClick={() => setSelectedHouse(null)}
                      className="flex-1 px-4 py-3 rounded-full border-2 border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-all text-sm"
                    >
                      Chiudi
                    </button>
                    <button 
                      onClick={() => {
                        handleWhatsApp(selectedHouse);
                        setSelectedHouse(null);
                      }}
                      className="flex-1 px-4 py-3 rounded-full bg-teal-500 text-white font-medium hover:bg-teal-600 transition-all text-sm flex items-center justify-center gap-2"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      Richiedi su WhatsApp
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default App;
