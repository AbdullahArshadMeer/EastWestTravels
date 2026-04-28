export type SharingOption = { label: string; price: string };

export type HotelInfo = { city: string; name: string; stars: number; meal?: string };

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
  features: string[];
  hotels?: HotelInfo[];
  badge?: string;
  available?: boolean;
  popular?: boolean;
  description: string;
  transport?: string;
  ziyarahMakkah?: string[];
  ziyarahMadinah?: string[];
};

export const hajjPackages: Package[] = [
  {
    id: "hajj-standard", name: "Standard Hajj Package", category: "hajj", country: "Saudi Arabia",
    image: "/images/mina.webp",
    gallery: ["/images/mina.webp", "/images/kaaba.webp", "/images/madinah.webp", "/images/kaaba2.webp"],
    durationDays: 14, departFrom: "Manchester", arriveTo: "Jeddah",
    dateRange: "26 May – 8 June 2026", airline: "Saudia Airline", rating: 5, reviews: 312, startFrom: "£4,999",
    sharingOptions: [{ label: "Quad Sharing", price: "£4,999" }, { label: "Triple Sharing", price: "£5,299" }, { label: "Double Sharing", price: "£5,799" }],
    features: ["Return flights from UK", "3-star hotel in Makkah", "3-star hotel in Madinah", "Full board meals", "Visa processing", "Ground transportation", "Experienced guide", "Group size: 40–50"],
    hotels: [
      { city: "Makkah", name: "Elaf Ajyad Hotel", stars: 3, meal: "Full Board" },
      { city: "Madinah", name: "Al Eiman Royal Hotel", stars: 3, meal: "Full Board" },
    ],
    badge: "5-Star Package Upgrade Available", available: true,
    description: "Experience the sacred Hajj pilgrimage with our Standard package. Includes return flights from the UK, comfortable 3-star accommodation in both Makkah and Madinah, full board meals, visa processing, ground transportation, and an experienced group guide. Our team handles every detail so you can focus entirely on your spiritual journey.",
    transport: "Private air-conditioned coaches for all ground transportation including airport transfers, inter-city travel between Makkah and Madinah, and transfers to Mina, Arafat, and Muzdalifah during Hajj rituals.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah", "Mina, Arafat & Muzdalifah"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Masjid al-Jummah", "Seven Mosques"],
  },
  {
    id: "hajj-premium", name: "Premium Hajj Package", category: "hajj", country: "Saudi Arabia",
    image: "/images/kaaba.webp",
    gallery: ["/images/kaaba.webp", "/images/mina.webp", "/images/madinah.webp", "/images/kaaba2.webp"],
    durationDays: 18, departFrom: "Birmingham", arriveTo: "Jeddah",
    dateRange: "22 May – 8 June 2026", airline: "Saudia Airline (Direct)", rating: 5, reviews: 428, startFrom: "£6,999",
    sharingOptions: [{ label: "Quad Sharing", price: "£6,999" }, { label: "Triple Sharing", price: "£7,399" }, { label: "Double Sharing", price: "£7,899" }],
    features: ["Return flights from UK", "4-star hotel near Haram", "4-star hotel in Madinah", "Premium full-board meals", "Express visa processing", "Private transportation", "Expert multilingual guide", "Group size: 25–30", "Ziyarat tours included"],
    hotels: [
      { city: "Makkah", name: "Pullman ZamZam Makkah", stars: 4, meal: "Full Board" },
      { city: "Madinah", name: "Pullman Madinah", stars: 4, meal: "Full Board" },
    ],
    badge: "5-Star Package Upgrade Available", available: true, popular: true,
    description: "Our Premium Hajj package offers an elevated pilgrimage experience with 4-star hotels near Haram in both Makkah and Madinah. Enjoy premium full-board meals, private transportation, express visa processing, and expert multilingual guides. Ziyarat tours in both cities are included to deepen your spiritual experience.",
    transport: "Luxury air-conditioned coaches with dedicated driver for all transfers. Private transportation between Makkah and Madinah, plus all Hajj ritual site transfers.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah", "Mina, Arafat & Muzdalifah", "Exhibition of the Two Holy Mosques"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Masjid al-Jummah", "Seven Mosques", "Date Farms Visit"],
  },
  {
    id: "hajj-vip", name: "VIP Hajj Package", category: "hajj", country: "Saudi Arabia",
    image: "/images/kaaba2.webp",
    gallery: ["/images/kaaba2.webp", "/images/kaaba.webp", "/images/madinah.webp", "/images/mina.webp"],
    durationDays: 21, departFrom: "London", arriveTo: "Jeddah",
    dateRange: "20 May – 10 June 2026", airline: "Saudia / Emirates Airline", rating: 5, reviews: 187, startFrom: "£9,999",
    sharingOptions: [{ label: "Double Sharing", price: "£9,999" }, { label: "Single Sharing", price: "£11,499" }],
    features: ["Business class flights", "5-star hotel (Haram view)", "5-star hotel in Madinah", "Premium full-board meals", "VIP visa processing", "Luxury transportation", "Private guide available", "Group size: 15–20", "Extended ziyarat tours", "VIP airport lounge access"],
    hotels: [
      { city: "Makkah", name: "Fairmont Makkah Clock Royal Tower", stars: 5, meal: "Full Board (Premium)" },
      { city: "Madinah", name: "The Oberoi Madinah", stars: 5, meal: "Full Board (Premium)" },
    ],
    badge: "Luxury Package", available: true,
    description: "The ultimate Hajj experience with business class flights, 5-star hotels with Haram views, premium dining, VIP visa processing, luxury private transportation, and personal guide services. Enjoy VIP airport lounge access and extended Ziyarat tours across both holy cities.",
    transport: "Luxury private vehicle with personal driver. Business class inter-city transfers. VIP airport lounge access at departure and arrival. Dedicated vehicle for all Hajj ritual sites.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah", "Mina, Arafat & Muzdalifah", "Exhibition of the Two Holy Mosques", "Historical Makkah Tour"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Masjid al-Jummah", "Seven Mosques", "Date Farms Visit", "Historical Madinah Tour"],
  },
];

export const umrahPackages: Package[] = [
  // ── SUMMER PACKAGES (Jul – Aug 2026) ──
  {
    id: "umrah-summer-man", name: "Summer Holidays Umrah Package – Manchester", category: "umrah", country: "Saudi Arabia",
    image: "/images/mina.webp",
    gallery: ["/images/mina.webp", "/images/kaaba.webp", "/images/madinah.webp", "/images/kaaba2.webp"],
    durationDays: 12, departFrom: "Manchester", arriveTo: "Jeddah",
    dateRange: "27 Jul – 8 Aug 2026", airline: "Saudia Airline", rating: 5, reviews: 584, startFrom: "£1,495",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,495" }, { label: "Triple Sharing", price: "£1,595" }, { label: "Double Sharing", price: "£1,695" }],
    features: ["Return flights from Manchester", "4-star hotel in Makkah", "4-star hotel in Madinah", "Half-board meals", "Visa processing", "All transfers included", "Guided Ziyarat", "24/7 customer support"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4, meal: "Half Board" },
      { city: "Madinah", name: "Saja Al Madina Hotel", stars: 4, meal: "Half Board" },
    ],
    badge: "5-Star Package Upgrade Available", available: true,
    description: "A summer Umrah departing from Manchester with Saudia Airline. 12 days of spiritual fulfilment with 4-star accommodation, half-board meals, and comprehensive ground transport. Guided Ziyarat in both Makkah and Madinah included.",
    transport: "Return flights with Saudia Airline from Manchester. Private coaches for all ground transport including airport transfers and inter-city travel.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },
  {
    id: "umrah-summer-jul", name: "Summer Holidays 2026 Umrah Package", category: "umrah", country: "Saudi Arabia",
    image: "/images/kaaba2.webp",
    gallery: ["/images/kaaba2.webp", "/images/kaaba.webp", "/images/madinah.webp", "/images/mina.webp"],
    durationDays: 12, departFrom: "Birmingham", arriveTo: "Jeddah",
    dateRange: "30 Jul – 11 Aug 2026", airline: "Saudi Airlines", rating: 5, reviews: 584, startFrom: "£1,450",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,450" }, { label: "Triple Sharing", price: "£1,550" }, { label: "Double Sharing", price: "£1,650" }],
    features: ["Return flights from Birmingham", "4-star hotel near Haram", "4-star hotel in Madinah", "Half-board meals", "Visa processing", "All transfers included", "Ziyarat tour", "Umrah guide & group leader"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4, meal: "Half Board" },
      { city: "Madinah", name: "Saja Al Madina Hotel", stars: 4, meal: "Half Board" },
    ],
    badge: "5-Star Package Upgrade Available", available: true,
    description: "A 12-day summer Umrah during the July-August school holidays. Fly from Birmingham with Saudi Airlines, stay in 4-star hotels, and enjoy full ground transport, guided Ziyarat, and 24/7 group support throughout your journey.",
    transport: "Return flights with Saudi Airlines from Birmingham. Full ground transport (airport to airport), private air-conditioned coaches, Ziyarat transport in both Makkah and Madinah.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },
  {
    id: "umrah-summer-rabi", name: "Summer Holidays Umrah in Rabi Ul Awwal", category: "umrah", country: "Saudi Arabia",
    image: "/images/madinah.webp",
    gallery: ["/images/madinah.webp", "/images/kaaba.webp", "/images/kaaba2.webp", "/images/mina.webp"],
    durationDays: 12, departFrom: "Birmingham/Manchester", arriveTo: "Jeddah",
    dateRange: "18 Aug – 30 Aug 2026", airline: "Saudia Airline", rating: 5, reviews: 584, startFrom: "£1,495",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,495" }, { label: "Triple Sharing", price: "£1,595" }, { label: "Double Sharing", price: "£1,695" }],
    features: ["Return flights from Birmingham", "4-star hotel in Makkah", "4-star hotel in Madinah", "Half-board meals", "Visa processing", "All transfers included", "Ziyarat in both cities", "Special Rabi Ul Awwal programme"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4, meal: "Half Board" },
      { city: "Madinah", name: "Saja Al Madina Hotel", stars: 4, meal: "Half Board" },
    ],
    badge: "5-Star Package Upgrade Available", available: true,
    description: "Perform your Umrah during the blessed month of Rabi Ul Awwal. This 12-day summer package from Birmingham includes 4-star accommodation, half-board meals, and a special spiritual programme to mark the birth month of Prophet Muhammad (PBUH).",
    transport: "Return flights with Saudia Airline from Birmingham. Private air-conditioned coaches for airport transfers, inter-city travel, and Ziyarat tours.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },

  // ── OCTOBER HALF TERM PACKAGES (Oct – Nov 2026) ──
  {
    id: "umrah-oct-halfterm-14", name: "October Half Term Holidays 2026 – 14 Days", category: "umrah", country: "Saudi Arabia",
    image: "/images/kaaba.webp",
    gallery: ["/images/kaaba.webp", "/images/madinah.webp", "/images/mina.webp", "/images/kaaba2.webp"],
    durationDays: 14, departFrom: "Manchester", arriveTo: "Jeddah",
    dateRange: "20 Oct – 3 Nov 2026", airline: "Saudia Airline", rating: 5, reviews: 584, startFrom: "£1,350",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,350" }, { label: "Triple Sharing", price: "£1,450" }, { label: "Double Sharing", price: "£1,550" }],
    features: ["Return flights from Manchester", "4-star hotel in Makkah near Haram", "4-star hotel in Madinah", "Half-board meals", "Visa processing", "Full ground transport", "Extended Ziyarat programme", "24/7 support"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4, meal: "Half Board" },
      { city: "Madinah", name: "Saja Al Madina Hotel", stars: 4, meal: "Half Board" },
    ],
    badge: "5-Star Package Upgrade Available", available: true,
    description: "Our longest October half term package — 14 days for a more relaxed, unhurried Umrah experience. Depart from Manchester with Saudia Airline, enjoy 4-star hotels, and take advantage of the extended stay for deeper Ziyarat tours across both holy cities.",
    transport: "Return flights with Saudia Airline from Manchester. Full ground transport package including airport transfers, inter-city travel, and Ziyarat coaches.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },
  {
    id: "umrah-oct-halfterm-11", name: "October 2026 Half Term Holidays – 11 Days", category: "umrah", country: "Saudi Arabia",
    image: "/images/mina.webp",
    gallery: ["/images/mina.webp", "/images/kaaba.webp", "/images/madinah.webp", "/images/kaaba2.webp"],
    durationDays: 11, departFrom: "Manchester", arriveTo: "Jeddah",
    dateRange: "22 Oct – 2 Nov 2026", airline: "EgyptAir", rating: 5, reviews: 584, startFrom: "£1,350",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,350" }, { label: "Triple Sharing", price: "£1,450" }, { label: "Double Sharing", price: "£1,550" }],
    features: ["Return flights from Manchester", "4-star hotel in Makkah", "4-star hotel in Madinah", "Half-board meals", "Visa processing", "All transfers included", "Guided Ziyarat tours", "Group coordinator"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4, meal: "Half Board" },
      { city: "Madinah", name: "Saja Al Madina Hotel", stars: 4, meal: "Half Board" },
    ],
    badge: "5-Star Package Upgrade Available", available: true,
    description: "An 11-day October half term Umrah departing from Manchester via EgyptAir. Affordable pricing with 4-star accommodation in both Makkah and Madinah, half-board meals, and guided Ziyarat throughout.",
    transport: "Return flights with EgyptAir from Manchester. Private air-conditioned coaches for all ground transportation.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },
  {
    id: "umrah-oct-halfterm-9", name: "October Half Term Holidays 2026 Umrah – 9 Days", category: "umrah", country: "Saudi Arabia",
    image: "/images/kaaba2.webp",
    gallery: ["/images/kaaba2.webp", "/images/kaaba.webp", "/images/madinah.webp", "/images/mina.webp"],
    durationDays: 9, departFrom: "Birmingham", arriveTo: "Jeddah",
    dateRange: "25 Oct – 3 Nov 2026", airline: "Saudia Airline (Direct Flight)", rating: 5, reviews: 584, startFrom: "£1,395",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,395" }, { label: "Triple Sharing", price: "£1,495" }, { label: "Double Sharing", price: "£1,595" }],
    features: ["Direct flights from Birmingham", "4-star hotel in Makkah", "4-star hotel in Madinah", "Half-board meals", "Visa processing", "Airport & inter-city transfers", "Guided Ziyarat", "Family-friendly itinerary"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4, meal: "Half Board" },
      { city: "Madinah", name: "Al Eiman Royal Hotel", stars: 4, meal: "Half Board" },
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
    image: "/images/madinah.webp",
    gallery: ["/images/madinah.webp", "/images/kaaba.webp", "/images/kaaba2.webp", "/images/mina.webp"],
    durationDays: 12, departFrom: "Birmingham", arriveTo: "Jeddah",
    dateRange: "15 Dec – 27 Dec 2026", airline: "Saudia Airline", rating: 5, reviews: 584, startFrom: "£1,595",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,595" }, { label: "Triple Sharing", price: "£1,695" }, { label: "Double Sharing", price: "£1,795" }],
    features: ["Return flights from Birmingham", "4-star hotel in Makkah", "4-star hotel in Madinah", "Half-board meals", "Umrah visa processing", "All transfers included", "Ziyarat tours in both cities", "Experienced group leader"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4, meal: "Half Board" },
      { city: "Madinah", name: "Saja Al Madina Hotel", stars: 4, meal: "Half Board" },
    ],
    badge: "5-Star Package Upgrade Available", available: true, popular: true,
    description: "A 12-day December Umrah package departing from Birmingham. Perfect for families wanting to combine school holidays with a meaningful spiritual journey. Includes 4-star accommodation, half-board meals, full ground transport, and guided Ziyarat in Makkah and Madinah.",
    transport: "Return flights with Saudia Airline. Private coaches for all ground transportation including airport transfers and inter-city travel between Makkah and Madinah.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },
  {
    id: "umrah-winter-dec-11", name: "Warmer Winter December Holidays – 11 Days", category: "umrah", country: "Saudi Arabia",
    image: "/images/kaaba.webp",
    gallery: ["/images/kaaba.webp", "/images/madinah.webp", "/images/kaaba2.webp", "/images/mina.webp"],
    durationDays: 11, departFrom: "Birmingham", arriveTo: "Jeddah",
    dateRange: "20 Dec – 31 Dec 2026", airline: "Saudia Airline", rating: 5, reviews: 584, startFrom: "£1,750",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,750" }, { label: "Triple Sharing", price: "£1,850" }, { label: "Double Sharing", price: "£1,950" }],
    features: ["Return flights from Birmingham", "4-star hotel in Makkah near Haram", "4-star hotel in Madinah", "Half-board meals", "Umrah visa processing", "Airport transfers & ground transport", "Guided Ziyarat in Makkah & Madinah", "24/7 group support"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4, meal: "Half Board" },
      { city: "Madinah", name: "Al Eiman Royal Hotel", stars: 4, meal: "Half Board" },
    ],
    badge: "5-Star Package Upgrade Available", available: true,
    description: "Escape the UK winter with an 11-day Umrah journey during the December holidays. Fly from Birmingham to Jeddah with Saudia Airline, stay in 4-star hotels in both Makkah and Madinah, and enjoy half-board meals throughout. Guided Ziyarat tours in both holy cities and 24/7 group support included.",
    transport: "Return flights with Saudia Airline from Birmingham. Private air-conditioned coaches for airport transfers, inter-city travel, and all Ziyarat tours.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },

  // ── EASTER / SPRING PACKAGE (Mar – Apr 2026) ──
  {
    id: "umrah-easter-4star", name: "Easter 2026 4★ Umrah – (Holidays)", category: "umrah", country: "Saudi Arabia",
    image: "/images/kaaba.webp",
    gallery: ["/images/kaaba.webp", "/images/madinah.webp", "/images/kaaba2.webp", "/images/mina.webp"],
    durationDays: 11, departFrom: "Birmingham", arriveTo: "Jeddah",
    dateRange: "29 Mar – 9 Apr 2026", airline: "Saudi Airlines", rating: 5, reviews: 584, startFrom: "£1,450",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,450" }, { label: "Triple Sharing", price: "£1,550" }, { label: "Double Sharing", price: "£1,650" }],
    features: ["Return flights from Birmingham", "4-star hotel in Makkah", "4-star hotel in Madinah", "Half-board meals", "Visa processing", "Airport transfers", "Guided Ziyarat", "Family-friendly scheduling"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4, meal: "Half Board" },
      { city: "Madinah", name: "Saja Al Madina Hotel", stars: 4, meal: "Half Board" },
    ],
    badge: "5-Star Package Upgrade Available", available: true, popular: true,
    description: "Take advantage of the Easter school holidays for an 11-day Umrah trip. Fly from Birmingham with Saudi Airlines, stay in 4-star hotels near Haram, and enjoy half-board meals, full ground transport, and guided Ziyarat tours. Ideal for families wanting to combine school holidays with a spiritual journey.",
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