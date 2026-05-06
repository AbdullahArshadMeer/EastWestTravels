export type SharingOption = { label: string; price: string };

export type HotelInfo = { city: string; name: string; stars: number; meal?: string };

export type MaktabOption = {
  label: string;
  description: string;
  sharingOptions: SharingOption[];
  hotels: HotelInfo[];
};

export type Package = {
  id: string;
  name: string;
  category: "hajj" | "umrah" | "global";
  country: string;
  image: string;
  gallery: string[];
  durationDays: number;
  departFrom: string;
  arriveTo: string;
  dateRange: string;
  airline?: string;
  rating: number;
  reviews: number;
  startFrom: string;
  sharingOptions?: SharingOption[];
  maktabOptions?: MaktabOption[];
  features: string[];
  hotels?: HotelInfo[];
  badge?: string;
  available?: boolean;
  popular?: boolean;
  description: string;
  transport?: string;
  ziyarahMakkah?: string[];
  ziyarahMadinah?: string[];
  itinerary?: { date: string; location: string }[];
};

export const hajjPackages: Package[] = [
  {
    id: "hajj-2027-20-days",
    name: "20 Day Hajj Package 2027",
    category: "hajj",
    country: "Saudi Arabia",
    image: "/images/anjum1.jpg",
    gallery: [
      "/images/anjum1.jpg",
      "/images/anjum2.jpg",
      "/images/saja1.jpg",
      "/images/saja3.jpg",
      "/images/saja7.jpg",
      "/images/saja8.jpg",
    ],
    durationDays: 20,
    departFrom: "Manchester",
    arriveTo: "Jeddah",
    dateRange: "3 May – 23 May 2027",
    airline: "Saudia / Emirates",
    rating: 5,
    reviews: 0,
    startFrom: "£6,950",
    maktabOptions: [
      {
        label: "Maktab A",
        description: "Premium tent in Mina — closest to Jamarat",
        sharingOptions: [
          { label: "Quad Sharing", price: "£7,950" },
          { label: "Triple Sharing", price: "£8,250" },
          { label: "Double Sharing", price: "£8,550" },
        ],
        hotels: [
          { city: "Madinah", name: "Anjum Hotel", stars: 5, meal: "Half Board" },
          { city: "Azizia", name: "Azizia Apartments", stars: 4, meal: "Half Board" },
          { city: "Mina", name: "Maktab A — Premium Tent", stars: 5, meal: "Half Board" },
          { city: "Makkah", name: "Saja Hotel", stars: 5, meal: "Half Board" },
        ],
      },
      {
        label: "Maktab D Plus",
        description: "Standard tent in Mina — excellent value",
        sharingOptions: [
          { label: "Quad Sharing", price: "£6,950" },
          { label: "Triple Sharing", price: "£7,250" },
          { label: "Double Sharing", price: "£7,550" },
        ],
        hotels: [
          { city: "Madinah", name: "Anjum Hotel", stars: 5, meal: "Half Board" },
          { city: "Azizia", name: "Azizia Apartments", stars: 4, meal: "Half Board" },
          { city: "Mina", name: "Maktab D Plus Tent", stars: 4, meal: "Half Board" },
          { city: "Makkah", name: "Saja Hotel", stars: 5, meal: "Half Board" },
        ],
      },
    ],
    features: [
      "Return flights from Manchester",
      "Choice of Maktab A or D Plus",
      "5-star hotels in Makkah & Madinah",
      "Azizia accommodation included",
      "Half board throughout",
      "Visa processing",
      "All ground transfers",
      "Experienced guide & group leader",
    ],
    badge: "Maktab A & D Plus Options",
    available: true,
    popular: true,
    description: "Our flagship 20-day Hajj package with premium 5-star accommodation in both Madinah and Makkah. Choose between Maktab A (premium tent) or Maktab D Plus (excellent value) for your Mina accommodation. Designed for pilgrims who want comfort and proximity to Haram throughout their sacred journey.",
    transport: "Private air-conditioned coaches for all transfers. Inter-city travel between Madinah, Azizia, Mina, and Makkah. Dedicated transport to all Hajj ritual sites including Arafat and Muzdalifah.",
    itinerary: [
      { date: "3–10 May", location: "Anjum Hotel, Madinah" },
      { date: "10–13 May", location: "Azizia Apartments" },
      { date: "13–18 May", location: "Mina (Hajj rituals)" },
      { date: "18–20 May", location: "Azizia Apartments" },
      { date: "20–23 May", location: "Saja Hotel, Makkah" },
    ],
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah", "Mina, Arafat & Muzdalifah", "Exhibition of the Two Holy Mosques"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Masjid al-Jummah", "Seven Mosques", "Date Farms Visit"],
  },

  {
    id: "hajj-2027-16-days",
    name: "16 Day Hajj Package 2027",
    category: "hajj",
    country: "Saudi Arabia",
    image: "/images/saja1.jpg",
    gallery: [
      "/images/saja1.jpg",
      "/images/saja3.jpg",
      "/images/anjum1.jpg",
      "/images/anjum2.jpg",
      "/images/saja7.jpg",
      "/images/saja8.jpg",
    ],
    durationDays: 16,
    departFrom: "Manchester",
    arriveTo: "Jeddah",
    dateRange: "7 May – 23 May 2027",
    airline: "Saudia / Emirates",
    rating: 5,
    reviews: 0,
    startFrom: "£6,750",
    maktabOptions: [
      {
        label: "Maktab A",
        description: "Premium tent in Mina — closest to Jamarat",
        sharingOptions: [
          { label: "Quad Sharing", price: "£7,750" },
          { label: "Triple Sharing", price: "£8,000" },
          { label: "Double Sharing", price: "£8,250" },
        ],
        hotels: [
          { city: "Madinah", name: "Anjum Hotel", stars: 5, meal: "Half Board" },
          { city: "Azizia", name: "Azizia Apartments", stars: 4, meal: "Half Board" },
          { city: "Mina", name: "Maktab A — Premium Tent", stars: 5, meal: "Half Board" },
          { city: "Makkah", name: "Saja Hotel", stars: 5, meal: "Half Board" },
        ],
      },
      {
        label: "Maktab D Plus",
        description: "Standard tent in Mina — excellent value",
        sharingOptions: [
          { label: "Quad Sharing", price: "£6,750" },
          { label: "Triple Sharing", price: "£7,000" },
          { label: "Double Sharing", price: "£7,250" },
        ],
        hotels: [
          { city: "Madinah", name: "Anjum Hotel", stars: 5, meal: "Half Board" },
          { city: "Azizia", name: "Azizia Apartments", stars: 4, meal: "Half Board" },
          { city: "Mina", name: "Maktab D Plus Tent", stars: 4, meal: "Half Board" },
          { city: "Makkah", name: "Saja Hotel", stars: 5, meal: "Half Board" },
        ],
      },
    ],
    features: [
      "Return flights from Manchester",
      "Choice of Maktab A or D Plus",
      "5-star hotels in Makkah & Madinah",
      "Azizia accommodation included",
      "Half board throughout",
      "Visa processing",
      "All ground transfers",
      "Shorter trip — 16 days total",
    ],
    badge: "Maktab A & D Plus Options",
    available: true,
    description: "A 16-day Hajj package with the same premium 5-star hotels as our 20-day option. Choose between Maktab A or Maktab D Plus for Mina. Ideal for pilgrims with limited time who don't want to compromise on hotel quality.",
    transport: "Private air-conditioned coaches for all transfers. Inter-city travel between Madinah, Azizia, Mina, and Makkah. Dedicated transport to all Hajj ritual sites.",
    itinerary: [
      { date: "7–10 May", location: "Anjum Hotel, Madinah" },
      { date: "10–13 May", location: "Azizia Apartments" },
      { date: "13–18 May", location: "Mina (Hajj rituals)" },
      { date: "18–20 May", location: "Azizia Apartments" },
      { date: "20–23 May", location: "Saja Hotel, Makkah" },
    ],
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah", "Mina, Arafat & Muzdalifah"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },

  {
    id: "hajj-2027-luxury-21-days",
    name: "21 Day Luxury Hajj Package 2027",
    category: "hajj",
    country: "Saudi Arabia",
    image: "/images/movenpick1.jpg",
    gallery: [
      "/images/swissotel1.jpg",
      "/images/swissotel2.jpg",
      "/images/movenpick1.jpg",
      "/images/movenpick2.jpg",
      "/images/kaaba.webp",
      "/images/madinah.webp",
    ],
    durationDays: 21,
    departFrom: "Manchester",
    arriveTo: "Jeddah",
    dateRange: "9 May – 30 May 2027",
    airline: "Saudia / Emirates",
    rating: 5,
    reviews: 0,
    startFrom: "£7,500",
    maktabOptions: [
      {
        label: "Maktab A",
        description: "Premium tent in Mina — closest to Jamarat",
        sharingOptions: [
          { label: "Quad Sharing", price: "£8,500" },
          { label: "Triple Sharing", price: "£8,950" },
          { label: "Double Sharing", price: "£9,400" },
        ],
        hotels: [
          { city: "Azizia", name: "Azizia Apartments", stars: 4, meal: "Half Board" },
          { city: "Mina", name: "Maktab A — Premium Tent", stars: 5, meal: "Half Board" },
          { city: "Makkah", name: "Swissotel Makkah", stars: 5, meal: "Half Board" },
          { city: "Madinah", name: "Mövenpick Madinah", stars: 5, meal: "Half Board" },
        ],
      },
      {
        label: "Maktab D Plus",
        description: "Standard tent in Mina — excellent value",
        sharingOptions: [
          { label: "Quad Sharing", price: "£7,500" },
          { label: "Triple Sharing", price: "£7,950" },
          { label: "Double Sharing", price: "£8,400" },
        ],
        hotels: [
          { city: "Azizia", name: "Azizia Apartments", stars: 4, meal: "Half Board" },
          { city: "Mina", name: "Maktab D Plus Tent", stars: 4, meal: "Half Board" },
          { city: "Makkah", name: "Swissotel Makkah", stars: 5, meal: "Half Board" },
          { city: "Madinah", name: "Mövenpick Madinah", stars: 5, meal: "Half Board" },
        ],
      },
    ],
    features: [
      "Return flights from Manchester",
      "Choice of Maktab A or D Plus",
      "Luxury 5-star hotels (Haram view)",
      "Azizia accommodation included",
      "Premium half-board",
      "Visa processing",
      "Luxury transportation",
      "Expert multilingual guide",
      "21 days — most relaxed schedule",
    ],
    badge: "Luxury · Maktab A & D Plus",
    available: true,
    popular: true,
    description: "The pinnacle of Hajj luxury — 21 days featuring Swissotel Makkah and Mövenpick Madinah, our most prestigious 5-star hotels with stunning Haram views. Choose between Maktab A or Maktab D Plus tier in Mina. For pilgrims seeking the ultimate balance of luxury and devotion.",
    transport: "Luxury air-conditioned coaches with dedicated drivers. Private transfers between Azizia, Mina, and luxury hotels. Premium transport to all Hajj ritual sites.",
    itinerary: [
      { date: "10–13 May", location: "Azizia Apartments" },
      { date: "13–18 May", location: "Mina (Hajj rituals)" },
      { date: "18–20 May", location: "Azizia Apartments" },
      { date: "20–26 May", location: "Swissotel Makkah" },
      { date: "26–30 May", location: "Mövenpick Madinah" },
    ],
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah", "Mina, Arafat & Muzdalifah", "Exhibition of the Two Holy Mosques", "Historical Makkah Tour"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Masjid al-Jummah", "Seven Mosques", "Date Farms Visit", "Historical Madinah Tour"],
  },
];

export const umrahPackages: Package[] = [
  // ── SUMMER PACKAGES (Jul – Aug 2026) ──
  {
    id: "umrah-summer-man", name: "Summer Holidays Umrah Package – Manchester", category: "umrah", country: "Saudi Arabia",
    image: "/images/emaar1.jpg",
    gallery: ["/images/emaar1.jpg", "/images/emaar2.jpg", "/images/saja1.jpg", "/images/madinah.webp", "/images/kaaba.webp"],
    durationDays: 12, departFrom: "Manchester", arriveTo: "Jeddah",
    dateRange: "27 Jul – 8 Aug 2026", airline: "Saudia Airline", rating: 5, reviews: 584, startFrom: "£1,495",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,495" }, { label: "Triple Sharing", price: "£1,595" }, { label: "Double Sharing", price: "£1,695" }],
    features: ["Return flights from Manchester", "4-star hotel in Makkah", "4-star hotel in Madinah", "Visa processing", "All transfers included", "Guided Ziyarat", "24/7 customer support"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4 },
      { city: "Madinah", name: "Saja Al Madina Hotel", stars: 4 },
    ],
    badge: "5-Star Package Upgrade Available", available: true,
    description: "A summer Umrah departing from Manchester with Saudia Airline. 12 days of spiritual fulfilment with 4-star accommodation and comprehensive ground transport. Guided Ziyarat in both Makkah and Madinah included.",
    transport: "Return flights with Saudia Airline from Manchester. Private coaches for all ground transport including airport transfers and inter-city travel.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },
  {
    id: "umrah-summer-jul", name: "Summer Holidays 2026 Umrah Package", category: "umrah", country: "Saudi Arabia",
    image: "/images/saja1.jpg",
    gallery: ["/images/saja1.jpg", "/images/saja3.jpg", "/images/emaar1.jpg", "/images/kaaba2.webp", "/images/madinah.webp"],
    durationDays: 12, departFrom: "Birmingham", arriveTo: "Jeddah",
    dateRange: "30 Jul – 11 Aug 2026", airline: "Saudi Airlines", rating: 5, reviews: 584, startFrom: "£1,450",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,450" }, { label: "Triple Sharing", price: "£1,550" }, { label: "Double Sharing", price: "£1,650" }],
    features: ["Return flights from Birmingham", "4-star hotel near Haram", "4-star hotel in Madinah", "Visa processing", "All transfers included", "Ziyarat tour", "Umrah guide & group leader"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4 },
      { city: "Madinah", name: "Saja Al Madina Hotel", stars: 4 },
    ],
    badge: "5-Star Package Upgrade Available", available: true,
    description: "A 12-day summer Umrah during the July-August school holidays. Fly from Birmingham with Saudi Airlines, stay in 4-star hotels, and enjoy full ground transport, guided Ziyarat, and 24/7 group support throughout your journey.",
    transport: "Return flights with Saudi Airlines from Birmingham. Full ground transport (airport to airport), private air-conditioned coaches, Ziyarat transport in both Makkah and Madinah.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },
  {
    id: "umrah-summer-rabi", name: "Summer Holidays Umrah in Rabi Ul Awwal", category: "umrah", country: "Saudi Arabia",
    image: "/images/emaar2.jpg",
    gallery: ["/images/emaar2.jpg", "/images/saja3.jpg", "/images/madinah.webp", "/images/saja7.jpg", "/images/kaaba.webp"],
    durationDays: 12, departFrom: "Birmingham/Manchester", arriveTo: "Jeddah",
    dateRange: "18 Aug – 30 Aug 2026", airline: "Saudia Airline", rating: 5, reviews: 584, startFrom: "£1,495",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,495" }, { label: "Triple Sharing", price: "£1,595" }, { label: "Double Sharing", price: "£1,695" }],
    features: ["Return flights from Birmingham/Manchester", "4-star hotel in Makkah", "4-star hotel in Madinah", "Visa processing", "All transfers included", "Ziyarat in both cities", "Special Rabi Ul Awwal programme"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4 },
      { city: "Madinah", name: "Saja Al Madina Hotel", stars: 4 },
    ],
    badge: "5-Star Package Upgrade Available", available: true,
    description: "Perform your Umrah during the blessed month of Rabi Ul Awwal. This 12-day summer package from Birmingham includes 4-star accommodation and a special spiritual programme to mark the birth month of Prophet Muhammad (PBUH).",
    transport: "Return flights with Saudia Airline from Birmingham. Private air-conditioned coaches for airport transfers, inter-city travel, and Ziyarat tours.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },

  // ── OCTOBER HALF TERM PACKAGES (Oct – Nov 2026) ──
  {
    id: "umrah-oct-halfterm-14", name: "October Half Term Holidays 2026 – 14 Days", category: "umrah", country: "Saudi Arabia",
    image: "/images/saja3.jpg",
    gallery: ["/images/saja3.jpg", "/images/emaar2.jpg", "/images/saja8.jpg", "/images/kaaba.webp", "/images/madinah.webp"],
    durationDays: 14, departFrom: "Manchester", arriveTo: "Jeddah",
    dateRange: "20 Oct – 3 Nov 2026", airline: "Saudia Airline", rating: 5, reviews: 584, startFrom: "£1,350",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,350" }, { label: "Triple Sharing", price: "£1,450" }, { label: "Double Sharing", price: "£1,550" }],
    features: ["Return flights from Manchester", "4-star hotel in Makkah near Haram", "4-star hotel in Madinah", "Visa processing", "Full ground transport", "Extended Ziyarat programme", "24/7 support"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4 },
      { city: "Madinah", name: "Saja Al Madina Hotel", stars: 4 },
    ],
    badge: "5-Star Package Upgrade Available", available: true,
    description: "Our longest October half term package — 14 days for a more relaxed, unhurried Umrah experience. Depart from Manchester with Saudia Airline, enjoy 4-star hotels, and take advantage of the extended stay for deeper Ziyarat tours across both holy cities.",
    transport: "Return flights with Saudia Airline from Manchester. Full ground transport package including airport transfers, inter-city travel, and Ziyarat coaches.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },
  {
    id: "umrah-oct-halfterm-11", name: "October 2026 Half Term Holidays – 11 Days", category: "umrah", country: "Saudi Arabia",
    image: "/images/emaar3.jpg",
    gallery: ["/images/emaar3.jpg", "/images/saja1.jpg", "/images/emaar1.jpg", "/images/kaaba.webp", "/images/madinah.webp"],
    durationDays: 11, departFrom: "Manchester", arriveTo: "Jeddah",
    dateRange: "22 Oct – 2 Nov 2026", airline: "EgyptAir", rating: 5, reviews: 584, startFrom: "£1,350",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,350" }, { label: "Triple Sharing", price: "£1,450" }, { label: "Double Sharing", price: "£1,550" }],
    features: ["Return flights from Manchester", "4-star hotel in Makkah", "4-star hotel in Madinah", "Visa processing", "All transfers included", "Guided Ziyarat tours", "Group coordinator"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4 },
      { city: "Madinah", name: "Saja Al Madina Hotel", stars: 4 },
    ],
    badge: "5-Star Package Upgrade Available", available: true,
    description: "An 11-day October half term Umrah departing from Manchester via EgyptAir. Affordable pricing with 4-star accommodation in both Makkah and Madinah, and guided Ziyarat throughout.",
    transport: "Return flights with EgyptAir from Manchester. Private air-conditioned coaches for all ground transportation.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },
  {
    id: "umrah-oct-halfterm-9", name: "October Half Term Holidays 2026 Umrah – 9 Days", category: "umrah", country: "Saudi Arabia",
    image: "/images/saja7.jpg",
    gallery: ["/images/saja7.jpg", "/images/emaar3.jpg", "/images/saja3.jpg", "/images/kaaba2.webp", "/images/madinah.webp"],
    durationDays: 9, departFrom: "Birmingham", arriveTo: "Jeddah",
    dateRange: "25 Oct – 3 Nov 2026", airline: "Saudia Airline (Direct Flight)", rating: 5, reviews: 584, startFrom: "£1,395",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,395" }, { label: "Triple Sharing", price: "£1,495" }, { label: "Double Sharing", price: "£1,595" }],
    features: ["Direct flights from Birmingham", "4-star hotel in Makkah", "4-star hotel in Madinah", "Visa processing", "Airport & inter-city transfers", "Guided Ziyarat", "Family-friendly itinerary"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4 },
      { city: "Madinah", name: "Al Eiman Royal Hotel", stars: 4 },
    ],
    badge: "5-Star Package Upgrade Available", available: true,
    description: "A compact 9-day Umrah during the October half term. Direct flights from Birmingham with Saudia Airline, 4-star hotels near Haram, and a family-friendly itinerary designed to make the most of the school break.",
    transport: "Direct return flights with Saudia Airline from Birmingham to Jeddah. All ground transport included — airport transfers and inter-city coaches.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Mount Uhud & Martyrs Cemetery"],
  },

  // ── WINTER DECEMBER PACKAGES (Dec 2026) ──
  {
    id: "umrah-winter-dec-12", name: "Warmer Winter December Holidays – 12 Days", category: "umrah", country: "Saudi Arabia",
    image: "/images/kaaba.webp",
    gallery: ["/images/kaaba.webp", "/images/emaar1.jpg", "/images/saja7.jpg", "/images/emaar2.jpg", "/images/madinah.webp"],
    durationDays: 12, departFrom: "Birmingham", arriveTo: "Jeddah",
    dateRange: "15 Dec – 27 Dec 2026", airline: "Saudia Airline", rating: 5, reviews: 584, startFrom: "£1,595",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,595" }, { label: "Triple Sharing", price: "£1,695" }, { label: "Double Sharing", price: "£1,795" }],
    features: ["Return flights from Birmingham", "4-star hotel in Makkah", "4-star hotel in Madinah", "Umrah visa processing", "All transfers included", "Ziyarat tours in both cities", "Experienced group leader"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4 },
      { city: "Madinah", name: "Saja Al Madina Hotel", stars: 4 },
    ],
    badge: "5-Star Package Upgrade Available", available: true, popular: true,
    description: "A 12-day December Umrah package departing from Birmingham. Perfect for families wanting to combine school holidays with a meaningful spiritual journey. Includes 4-star accommodation, full ground transport, and guided Ziyarat in Makkah and Madinah.",
    transport: "Return flights with Saudia Airline. Private coaches for all ground transportation including airport transfers and inter-city travel between Makkah and Madinah.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },
  {
    id: "umrah-winter-dec-11", name: "Warmer Winter December Holidays – 11 Days", category: "umrah", country: "Saudi Arabia",
    image: "/images/saja8.jpg",
    gallery: ["/images/saja8.jpg", "/images/emaar2.jpg", "/images/emaar3.jpg", "/images/madinah.webp", "/images/kaaba2.webp"],
    durationDays: 11, departFrom: "Birmingham", arriveTo: "Jeddah",
    dateRange: "20 Dec – 31 Dec 2026", airline: "Saudia Airline", rating: 5, reviews: 584, startFrom: "£1,750",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,750" }, { label: "Triple Sharing", price: "£1,850" }, { label: "Double Sharing", price: "£1,950" }],
    features: ["Return flights from Birmingham", "4-star hotel in Makkah near Haram", "4-star hotel in Madinah", "Umrah visa processing", "Airport transfers & ground transport", "Guided Ziyarat in Makkah & Madinah", "24/7 group support"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4 },
      { city: "Madinah", name: "Al Eiman Royal Hotel", stars: 4 },
    ],
    badge: "5-Star Package Upgrade Available", available: true,
    description: "Escape the UK winter with an 11-day Umrah journey during the December holidays. Fly from Birmingham to Jeddah with Saudia Airline, stay in 4-star hotels in both Makkah and Madinah. Guided Ziyarat tours in both holy cities and 24/7 group support included.",
    transport: "Return flights with Saudia Airline from Birmingham. Private air-conditioned coaches for airport transfers, inter-city travel, and all Ziyarat tours.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },

  // ── EASTER / SPRING PACKAGE (Mar – Apr 2026) ──
  {
    id: "umrah-easter-4star", name: "Easter 2026 4★ Umrah – (Holidays)", category: "umrah", country: "Saudi Arabia",
    image: "/images/madinah.webp",
    gallery: ["/images/madinah.webp", "/images/emaar3.jpg", "/images/saja1.jpg", "/images/emaar1.jpg", "/images/kaaba.webp"],
    durationDays: 11, departFrom: "Birmingham", arriveTo: "Jeddah",
    dateRange: "29 Mar – 9 Apr 2026", airline: "Saudi Airlines", rating: 5, reviews: 584, startFrom: "£1,450",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,450" }, { label: "Triple Sharing", price: "£1,550" }, { label: "Double Sharing", price: "£1,650" }],
    features: ["Return flights from Birmingham", "4-star hotel in Makkah", "4-star hotel in Madinah", "Visa processing", "Airport transfers", "Guided Ziyarat", "Family-friendly scheduling"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4 },
      { city: "Madinah", name: "Saja Al Madina Hotel", stars: 4 },
    ],
    badge: "5-Star Package Upgrade Available", available: true, popular: true,
    description: "Take advantage of the Easter school holidays for an 11-day Umrah trip. Fly from Birmingham with Saudi Airlines, stay in 4-star hotels near Haram, full ground transport, and guided Ziyarat tours. Ideal for families wanting to combine school holidays with a spiritual journey.",
    transport: "Return flights with Saudi Airlines from Birmingham. Private air-conditioned coaches for all transfers, inter-city travel, and Ziyarat tours.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Mount Uhud & Martyrs Cemetery"],
  },
];

export const globalPackages: Package[] = [
  {
    id: "global-turkey", name: "Istanbul & Cappadocia", category: "global", country: "Turkey",
    image: "/images/madinah.webp",
    gallery: ["/images/madinah.webp", "/images/kaaba.webp", "/images/mina.webp"],
    durationDays: 8, departFrom: "London", arriveTo: "Istanbul",
    dateRange: "Flexible · Spring – Autumn", airline: "Turkish Airlines", rating: 5, reviews: 142, startFrom: "£1,199",
    features: ["Return flights from UK", "4-star hotels", "Hot air balloon ride (Cappadocia)", "Bosphorus cruise", "Historic city tour", "Private transfers", "English-speaking guide"],
    hotels: [
      { city: "Istanbul", name: "DoubleTree by Hilton Istanbul", stars: 4, meal: "Bed & Breakfast" },
      { city: "Cappadocia", name: "Museum Hotel Cappadocia", stars: 4, meal: "Bed & Breakfast" },
    ],
    badge: "Custom itinerary available", available: true,
    description: "Explore the best of Turkey with our 8-day Istanbul & Cappadocia tour. Experience the historic wonders of Istanbul, cruise the Bosphorus, and float above the fairy chimneys of Cappadocia in a hot air balloon. Private transfers and an English-speaking guide throughout.",
    transport: "Return flights, private airport transfers, inter-city domestic flight Istanbul to Cappadocia, and all sightseeing transport.",
  },
  {
    id: "global-dubai", name: "Dubai Family Escape", category: "global", country: "UAE",
    image: "/images/kaaba.webp",
    gallery: ["/images/kaaba.webp", "/images/madinah.webp", "/images/mina.webp"],
    durationDays: 7, departFrom: "Manchester", arriveTo: "Dubai",
    dateRange: "Year-round", airline: "Emirates", rating: 5, reviews: 201, startFrom: "£1,349",
    features: ["Return flights from UK", "4-star hotel on Sheikh Zayed Rd", "Desert safari", "Burj Khalifa tickets", "Dubai Mall & Marina", "Airport transfers"],
    hotels: [
      { city: "Dubai", name: "Hilton Dubai Al Habtoor City", stars: 4, meal: "Bed & Breakfast" },
    ],
    badge: "Custom itinerary available", available: true,
    description: "A fantastic family holiday in Dubai. Stay in a 4-star hotel on Sheikh Zayed Road, enjoy a desert safari, visit the Burj Khalifa, explore Dubai Mall and Marina. Flights with Emirates from Manchester and all airport transfers included.",
    transport: "Return flights with Emirates, airport transfers, desert safari transport, and sightseeing tour coach.",
  },
  {
    id: "global-custom", name: "Custom Global Tour", category: "global", country: "Worldwide",
    image: "/images/mina.webp",
    gallery: ["/images/mina.webp", "/images/kaaba.webp", "/images/madinah.webp"],
    durationDays: 0, departFrom: "Any UK airport", arriveTo: "Your destination",
    dateRange: "On request", rating: 5, reviews: 89, startFrom: "On request",
    features: ["Design-your-own itinerary", "Flights from any UK airport", "Hotels to your budget", "Private or group tours", "Visa & travel insurance", "Full support before & during trip", "Transparent, no-surprise pricing"],
    badge: "Fully bespoke", available: true, popular: true,
    description: "Design your own tour. Tell us your destination, dates, group size, and preferences — and we'll build a custom itinerary with flights, hotels, transfers, visa support, and on-the-ground guidance. Transparent pricing throughout.",
    transport: "Fully customisable — private vehicle, group coach, or public transport depending on your preferences and budget.",
  },
];

export function findPackage(category: string, id: string): Package | undefined {
  const all = [...hajjPackages, ...umrahPackages, ...globalPackages];
  return all.find((p) => p.category === category && p.id === id);
}

export function getPackagesByCategory(category: string): Package[] {
  if (category === "hajj") return hajjPackages;
  if (category === "umrah") return umrahPackages;
  if (category === "global") return globalPackages;
  return [];
}