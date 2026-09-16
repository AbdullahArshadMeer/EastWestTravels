export type SharingOption = { label: string; price: string };

export type HotelInfo = { city: string; name: string; stars?: number; meal?: string };

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
  azizariaSeparateRoom?: SharingOption[];
};

export const hajjPackages: Package[] = [
  {
    id: "hajj-2027-20-days",
    name: "20 Days Hajj Package 2027",
    category: "hajj",
    country: "Saudi Arabia",
    image: "/images/anjum1.jpg",
    gallery: [
      "/images/anjum1.jpg",
      "/images/anjum2.jpg",
      "/images/saja1.jpg",
      "/images/saja3.jpg",
      "/images/saja7.jpg",
      "/images/Azizahotel.jpg",
    ],
    durationDays: 20,
    departFrom: "Manchester",
    arriveTo: "Jeddah",
    dateRange: "3 May – 23 May 2027",
    airline: "To Be Confirmed",
    rating: 5,
    reviews: 0,
    startFrom: "£8,495",
    sharingOptions: [
      { label: "Quad Sharing", price: "£8,495" },
      { label: "Triple Sharing", price: "£8,795" },
      { label: "Double Sharing", price: "£9,095" },
    ],
    azizariaSeparateRoom: [
      { label: "Double (per person)", price: "£650" },
      { label: "Triple (per person)", price: "£325" },
    ],
    hotels: [
      { city: "Makkah", name: "Anjum Hotel", meal: "Half Board" },
      { city: "Azizia", name: "Jawhara Maysan Hotel", meal: "Full Board" },
      { city: "Mina", name: "Maktab A Premium Tents", meal: "Full Board" },
      { city: "Madinah", name: "Saja by Warwick", meal: "Half Board" },
    ],
    features: [
      "Return flights from Madinah",
      "Maktab A Premium Tents in Mina — closest to Jamarat",
      "Anjum Hotel Makkah & Saja by Warwick Madinah ",
      "Jawhara Maysan Hotel Azizia accommodation included",
      "Full board meals in Azizia and Mina, half board elsewhere",
      "Visa processing",
      "All ground transfers",
      "Experienced guide & group leader",
    ],
    available: true,
    popular: true,
    description: "Our flagship 20-day Hajj package with premium accommodation at Saja by Warwick in Madinah and Anjum Hotel in Makkah. Includes Maktab A Premium Tents for your Mina accommodation. Designed for pilgrims who want comfort and proximity to Haram throughout their sacred journey.",
    transport: "Private air-conditioned coaches for all transfers. Inter-city travel between Madinah, Azizia, Mina, and Makkah. Dedicated transport to all Hajj ritual sites including Arafat and Muzdalifah.",
    itinerary: [
      { date: "3–10 May", location: "Anjum Hotel, Makkah" },
      { date: "10–13 May", location: "Jawhara Maysan Hotel, Azizia" },
      { date: "13–18 May", location: "Mina (Hajj rituals)" },
      { date: "18–20 May", location: "Jawhara Maysan Hotel, Azizia" },
      { date: "20–23 May", location: "Saja by Warwick, Madinah" },
    ],
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah", "Mina, Arafat & Muzdalifah", "Exhibition of the Two Holy Mosques"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Masjid al-Jummah", "Seven Mosques", "Date Farms Visit"],
  },

  {
    id: "hajj-2027-16-days",
    name: "16 Days Hajj Package 2027",
    category: "hajj",
    country: "Saudi Arabia",
    image: "/images/saja1.jpg",
    gallery: [
      "/images/saja1.jpg",
      "/images/saja3.jpg",
      "/images/anjum1.jpg",
      "/images/anjum2.jpg",
      "/images/saja7.jpg",
      "/images/Azizahotel.jpg",
    ],
    durationDays: 16,
    departFrom: "Manchester",
    arriveTo: "Jeddah",
    dateRange: "7 May – 23 May 2027",
    airline: "To Be Confirmed",
    rating: 5,
    reviews: 0,
    startFrom: "£8,250",
    sharingOptions: [
      { label: "Quad Sharing", price: "£8,250" },
      { label: "Triple Sharing", price: "£8,500" },
      { label: "Double Sharing", price: "£8,750" },
    ],
    azizariaSeparateRoom: [
      { label: "Double (per person)", price: "£650" },
      { label: "Triple (per person)", price: "£325" },
    ],
    hotels: [
      { city: "Makkah", name: "Anjum Hotel", meal: "Half Board" },
      { city: "Azizia", name: "Jawhara Maysan Hotel", meal: "Full Board" },
      { city: "Mina", name: "Maktab A Premium Tents", meal: "Full Board" },
      { city: "Madinah", name: "Saja by Warwick", meal: "Half Board" },
    ],
    features: [
      "Return flights from Madinah",
      "Maktab A Premium Tents in Mina — closest to Jamarat",
      "Saja by Warwick Madinah & Anjum Hotel Makkah",
      "Jawhara Maysan Hotel Azizia accommodation included",
      "Full board meals in Azizia & Mina, half board elsewhere",
      "Visa processing",
      "All ground transfers",
      "Shorter trip — 16 days total",
    ],
    available: true,
    description: "A 16-day Hajj package with the same premium Saja by Warwick and Anjum hotels as our 20-day option, including Maktab A Premium Tents for Mina. Ideal for pilgrims with limited time who don't want to compromise on hotel quality.",
    transport: "Private air-conditioned coaches for all transfers. Inter-city travel between Madinah, Azizia, Mina, and Makkah. Dedicated transport to all Hajj ritual sites.",
    itinerary: [
      { date: "7–10 May", location: "Anjum Hotel, Makkah" },
      { date: "10–13 May", location: "Jawhara Maysan Hotel, Azizia" },
      { date: "13–18 May", location: "Mina (Hajj rituals)" },
      { date: "18–20 May", location: "Jawhara Maysan Hotel, Azizia" },
      { date: "20–23 May", location: "Saja by Warwick, Madinah" },
    ],
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah", "Mina, Arafat & Muzdalifah"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },

  {
    id: "hajj-2027-14-days",
    name: "14 Days Hajj Package 2027",
    category: "hajj",
    country: "Saudi Arabia",
    image:      "/images/Azizahotel.jpg",
    gallery: [
      "/images/saja3.jpg",
      "/images/saja7.jpg",
      "/images/saja8.jpg",
      "/images/saja1.jpg",
      "/images/kaaba.webp",
      "/images/madinah.webp",
      "/images/Azizahotel.jpg",
    ],
    durationDays: 14,
    departFrom: "Manchester",
    arriveTo: "Jeddah",
    dateRange: "9 May – 23 May 2027",
    airline: "Flights Not Included",
    rating: 5,
    reviews: 0,
    startFrom: "£6,700",
    sharingOptions: [
      { label: "Quad Sharing", price: "£6,700" },
      { label: "Triple Sharing", price: "£7,150" },
      { label: "Double Sharing", price: "£7,600" },
    ],
   
    
    hotels: [
      { city: "Azizia", name: "Jawhara Maysan Hotel", meal: "Full Board" },
      { city: "Mina", name: "Maktab A Premium Tents", meal: "Full Board" },
      { city: "Madinah", name: "Saja by Warwick", meal: "Half Board" },
    ],
    features: [
      "⚠ Flights NOT included — land package only",
      "Maktab A Premium Tents in Mina — closest to Jamarat",
      "Anjum Hotel Makkah",
      "Jawhara Maysan Hotel Azizia accommodation included",
      "Full board meals in Azizia & Mina, half board elsewhere",
      "Visa processing",
      "All ground transfers in Saudi Arabia",
      "Experienced guide & group leader",
    ],
    badge: "Land Package",
    available: true,
    description: "Our land-only 14-day Hajj package — perfect for pilgrims who prefer to arrange their own flights or are travelling from outside the UK. Includes Maktab A Premium Tents for Mina. Package starts on arrival in Jeddah and includes all accommodation (Jawhara Maysan Hotel Azizia, Mina tent, Anjum Hotel Makkah), meals, transfers, and Hajj rituals. Flights are NOT included.",
    transport: "All ground transport within Saudi Arabia included — airport pickup from Jeddah, transfers to Azizia, Mina, and Makkah. Dedicated transport to all Hajj ritual sites including Arafat and Muzdalifah. Flights to Jeddah must be arranged separately.",
    itinerary: [
      { date: "9–13 May", location: "Jawhara Maysan Hotel, Azizia" },
      { date: "13–18 May", location: "Mina (Hajj rituals)" },
      { date: "18–20 May", location: "Jawhara Maysan Hotel, Azizia" },
      { date: "20–23 May", location: "Saja by Warwick, Madinah" },
    ],
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah", "Mina, Arafat & Muzdalifah", "Exhibition of the Two Holy Mosques"],
    ziyarahMadinah: [],
  },
];
export const umrahPackages: Package[] = [



  // ── WINTER 2026/27 PACKAGES (Dec 2026 – Jan 2027) ──
  {
    id: "umrah-winter-2026-manchester", name: "12 Days 4★ Umrah Package – Manchester", category: "umrah", country: "Saudi Arabia",
    image: "/images/emaar1.jpg",
    gallery: ["/images/emaar1.jpg", "/images/emaar2.jpg", "/images/saja1.jpg", "/images/madinah.webp", "/images/kaaba.webp"],
    durationDays: 12, departFrom: "Manchester", arriveTo: "Jeddah ",
    dateRange: "21 Dec 2026 – 2 Jan 2027", airline: "EgyptAir ", rating: 5, reviews: 584, startFrom: "£1,695",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,695" }, { label: "Triple Sharing", price: "£1,850" }, { label: "Double Sharing", price: "£2,095" }],
    features: ["Return flights from Madinah",  "Emaar Grand Hotel ,Makkah (Bed & Breakfast) ", "Saja by warwick Madinah (Room Only)", "Visa processing", "All transfers included", "5-star upgrade available — limited seats", "Flexible payment plans"],
    hotels: [
      { city: "Makkah", name: "Emaar Grand Hotel", stars: 4, meal: "Bed & Breakfast" },
      { city: "Madinah", name: "Saja Al Madinah Hotel", stars: 4, meal: "Room Only" },
    ],
    badge: "5-Star Package Upgrade Available", available: true,
    description: "A 12-day winter Umrah departing from Manchester with an  EgyptAir flight, flying into Jeddah and Madinah. Stay at the Emaar Grand Hotel in Makkah with Bed & Breakfast and the Saja Al Madinah Hotel in Madinah on a Room Only basis. Limited 5-star upgrade seats available, with flexible payment plans.",
    transport: " return flights with EgyptAir from Madinah. All ground transfers between airport, Makkah, and Madinah included.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },
  {
    id: "umrah-winter-2026-birmingham", name: "12 Days Umrah Package – Birmingham", category: "umrah", country: "Saudi Arabia",
    image: "/images/emaar2.jpg",
    gallery: ["/images/emaar2.jpg", "/images/emaar1.jpg", "/images/saja3.jpg", "/images/madinah.webp", "/images/kaaba2.webp"],
    durationDays: 12, departFrom: "Birmingham", arriveTo: "Jeddah",
    dateRange: "22 Dec 2026 – 3 Jan 2027", airline: "EgyptAir ", rating: 5, reviews: 584, startFrom: "£1,695",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,695" }, { label: "Triple Sharing", price: "£1,850" }, { label: "Double Sharing", price: "£2,095" }],
    features: ["Return flights from Madinah", "Emaar Grand Hotel ,Makkah (Bed & Breakfast)", "Saja by warwick Madinah (Room Only)", "Visa processing", "All transfers included", "5-star upgrade available — limited seats", "Flexible payment plans"],
    hotels: [
      { city: "Makkah", name: "Emaar Grand Hotel", stars: 4, meal: "Bed & Breakfast" },
      { city: "Madinah", name: "Saja Al Madinah Hotel", stars: 4, meal: "Room Only" },
    ],
    badge: "5-Star Package Upgrade Available", available: true,
    description: "A 12-day winter Umrah departing from Birmingham with an  EgyptAir flight, flying into Jeddah and Madinah. Stay at the Emaar Grand Hotel in Makkah with Bed & Breakfast and the Saja Al Madinah Hotel in Madinah on a Room Only basis. Limited 5-star upgrade seats available, with flexible payment plans.",
    transport: " return flights with EgyptAir from Madinah. All ground transfers between airport, Makkah, and Madinah included.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },
   // ── WINTER DECEMBER PACKAGES (Dec 2026) ──
  
  {
    id: "umrah-winter-dec-11", name: "Warmer Winter December Holidays – 11 Days", category: "umrah", country: "Saudi Arabia",
    image: "/images/saja8.jpg",
    gallery: ["/images/saja8.jpg", "/images/emaar2.jpg", "/images/emaar3.jpg", "/images/madinah.webp", "/images/kaaba2.webp"],
    durationDays: 11, departFrom: "Manchester", arriveTo: "Jeddah",
    dateRange: "20 Dec – 31 Dec 2026", airline: "Saudia Airline", rating: 5, reviews: 584, startFrom: "£1,750",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,750" }, { label: "Triple Sharing", price: "£1,895" }, { label: "Double Sharing", price: "£2,095" }],
    features: ["Return flights from Madinah", "Emaar Grand Hotel ,Makkah", "Saja by warwick Madinah", "Visa processing", "Airport transfers & ground transport", "Guided Ziyarat in Makkah & Madinah", "24/7 group support"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel"},
      { city: "Madinah", name: "Al Eiman Royal Hotel"},
    ],
    badge: "5-Star Package Upgrade Available", available: false,
    description: "Escape the UK winter with an 11-day Umrah journey during the December holidays. Fly from Birmingham to Jeddah with Egypt Air,Stay at the Emaar Grand Hotel in Makkah with Bed & Breakfast and the Saja Al Madinah Hotel in Madinah on a Room Only basis. Guided Ziyarat tours in both holy cities and 24/7 group support included.",
    transport: "Return flights with Egypt Air from Madinah. Private air-conditioned coaches for airport transfers, inter-city travel, and all Ziyarat tours.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },
  {
    id: "umrah-oct-halfterm-14", name: "October Half Term Holidays 2026 – 14 Days", category: "umrah", country: "Saudi Arabia",
    image: "/images/saja3.jpg",
    gallery: ["/images/saja3.jpg", "/images/emaar2.jpg", "/images/saja8.jpg", "/images/kaaba.webp", "/images/madinah.webp"],
    durationDays: 14, departFrom: "Manchester", arriveTo: "Jeddah",
    dateRange: "20 Oct – 3 Nov 2026", airline: "Saudia Airline", rating: 5, reviews: 584, startFrom: "£1,350",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,350" }, { label: "Triple Sharing", price: "£1,450" }, { label: "Double Sharing", price: "£1,550" }],
    features: ["Return flights from Madinah", "Emaar Grand Hotel ,Makkah", "Saja by warwick ,Madinah", "Visa processing", "Full ground transport", "Extended Ziyarat programme", "24/7 support"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4 },
      { city: "Madinah", name: "Saja Al Madina Hotel", stars: 4 },
    ],
    badge: "5-Star Package Upgrade Available", available: false,
    description: "Our longest October half term package — 14 days for a more relaxed, unhurried Umrah experience. Depart from Manchester with Egypt Air, and take advantage of the extended stay for deeper Ziyarat tours across both holy cities.",
    transport: "Return flights with Egypt Air from Madinah. Full ground transport package including airport transfers, inter-city travel, and Ziyarat coaches.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Masjid al-Jinn", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Masjid al-Qiblatayn", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },
  
  {
    id: "umrah-oct-halfterm-11", name: "October 2026 Half Term Holidays – 11 Days", category: "umrah", country: "Saudi Arabia",
    image: "/images/emaar3.jpg",
    gallery: ["/images/emaar3.jpg", "/images/saja1.jpg", "/images/emaar1.jpg", "/images/kaaba.webp", "/images/madinah.webp"],
    durationDays: 11, departFrom: "Manchester", arriveTo: "Jeddah",
    dateRange: "22 Oct – 2 Nov 2026", airline: "Saudia Airline", rating: 5, reviews: 584, startFrom: "£1,350",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,350" }, { label: "Triple Sharing", price: "£1,450" }, { label: "Double Sharing", price: "£1,550" }],
    features: ["Return flights from Madinah", "Emaar Grand Hotel ,Makkah", "Saja by warwick ,Madinah", "Visa processing", "All transfers included", "Guided Ziyarat tours", "Group coordinator"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4 },
      { city: "Madinah", name: "Saja Al Madina Hotel", stars: 4 },
    ],
    badge: "5-Star Package Upgrade Available", available: false,
    description: "An 11-day October half term Umrah departing from Manchester via EgyptAir. Affordable pricing with  accommodation in both Makkah and Madinah, and guided Ziyarat throughout.",
    transport: "Return flights with Saudia Airline from Manchester. Private air-conditioned coaches for all ground transportation.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Mount Uhud & Martyrs Cemetery", "Seven Mosques"],
  },
  {
    id: "umrah-oct-halfterm-9", name: "October Half Term Holidays 2026 Umrah – 9 Days", category: "umrah", country: "Saudi Arabia",
    image: "/images/saja7.jpg",
    gallery: ["/images/saja7.jpg", "/images/emaar3.jpg", "/images/saja3.jpg", "/images/kaaba2.webp", "/images/madinah.webp"],
    durationDays: 9, departFrom: "Birmingham", arriveTo: "Jeddah",
    dateRange: "25 Oct – 3 Nov 2026", airline: "Egypt Air ", rating: 5, reviews: 584, startFrom: "£1,395",
    sharingOptions: [{ label: "Quad Sharing", price: "£1,395" }, { label: "Triple Sharing", price: "£1,495" }, { label: "Double Sharing", price: "£1,595" }],
    features: ["Return Flight from Madinah", "Emaar Grand Hotel ,Makkah", "Saja by warwick Madinah", "Visa processing", "Airport & inter-city transfers", "Guided Ziyarat", "Family-friendly itinerary"],
    hotels: [
      { city: "Makkah", name: "Emaar Al Grand Hotel", stars: 4 },
      { city: "Madinah", name: "Al Eiman Royal Hotel", stars: 4 },
    ],
    badge: "5-Star Package Upgrade Available", available: false,
    description: "A compact 9-day Umrah during the October half term. Direct flights from Birmingham with Egypt Air, and a family-friendly itinerary designed to make the most of the school break.",
    transport: "Direct return flights with Egypt Air from Madinah to Jeddah. All ground transport included — airport transfers and inter-city coaches.",
    ziyarahMakkah: ["Jabal al-Nour (Cave of Hira)", "Jabal Thawr", "Hudaibiyah"],
    ziyarahMadinah: ["Masjid al-Quba", "Mount Uhud & Martyrs Cemetery"],
  },

 
];

export const globalPackages: Package[] = [
 
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