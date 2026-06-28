/* ============================================================================
 * LayoverX Catalog — curated mock data for sector landing pages.
 * In production these come from the LayoverX catalog API.
 * ========================================================================== */

export interface ServiceCategory {
  slug: string;
  title: string;
  description: string;
  href: string;
  icon: "bed" | "utensils" | "leaf" | "gamepad" | "mountain" | "car";
  highlight: string;
  meta: string[];
}

export interface Testimonial {
  quote: string;
  name: string;
  route: string;
  initials: string;
  tint: "blue" | "amber" | "rose" | "violet" | "emerald";
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface ValueProp {
  icon: "shield" | "clock" | "sparkles" | "globe" | "creditCard" | "headphones";
  title: string;
  text: string;
}

export interface Experience {
  title: string;
  description: string;
  category: string;
  image: string;
  href: string;
}

export interface WhyChoose {
  icon: "shield" | "clock" | "globe" | "crown";
  title: string;
  text: string;
}

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    slug: "hotels",
    title: "Transit Hotels",
    description:
      "Day-use and overnight stays inside T2 and nearby Andheri. Verified Wi-Fi, soundproofing, and 24/7 check-in.",
    href: "/hotels.html",
    icon: "bed",
    highlight: "From ₹3,499 / 3 hrs",
    meta: ["Day-use rooms", "Free shuttle", "24/7 check-in"],
  },
  {
    slug: "restaurants",
    title: "Dining & Restaurants",
    description:
      "Coastal seafood, Irani cafés, and fine dining — every venue is under 15 minutes from CSMIA.",
    href: "/restaurants.html",
    icon: "utensils",
    highlight: "From ₹900 / person",
    meta: ["Verified kitchens", "Quick bites", "Fine dining"],
  },
  {
    slug: "spa",
    title: "Spa & Wellness",
    description:
      "Express massage, full wellness circuits, and hammam rituals — recover from jet lag without losing flight time.",
    href: "/spa.html",
    icon: "leaf",
    highlight: "From ₹1,800 / 60 min",
    meta: ["Express slots", "Hotel circuits", "Hammam"],
  },
  {
    slug: "gaming",
    title: "Gaming & Fun",
    description:
      "VR lounges, bowling alleys, and retro arcades close enough to make a connecting flight feel like a recess.",
    href: "/gaming.html",
    icon: "gamepad",
    highlight: "From ₹1,200 / person",
    meta: ["VR zones", "Bowling", "Arcade"],
  },
  {
    slug: "tours",
    title: "City Tours",
    description:
      "Time-boxed heritage walks, food crawls, and shopping circuits. Every itinerary is built around your flight.",
    href: "/tours.html",
    icon: "mountain",
    highlight: "From ₹1,299 / 3 hrs",
    meta: ["Heritage", "Food crawl", "Shopping"],
  },
  {
    slug: "transfers",
    title: "Airport Transfers",
    description:
      "Fixed-price pickups and drops with verified chauffeurs. Tolls and parking included — never surge-priced.",
    href: "/transfers.html",
    icon: "car",
    highlight: "From ₹899 / sedan",
    meta: ["Tolls included", "Verified drivers", "Surge-free"],
  },
];

export const VALUE_PROPS: ValueProp[] = [
  {
    icon: "shield",
    title: "Verified partners",
    text: "Every hotel, restaurant, and tour is vetted by LayoverX concierge staff — quality, hygiene, and timing checked monthly.",
  },
  {
    icon: "clock",
    title: "Flight-aware timing",
    text: "Itineraries automatically adjust for delays and gate changes. We factor in customs, immigration, and security buffers.",
  },
  {
    icon: "sparkles",
    title: "Curated, not crowded",
    text: "Premium experiences hand-picked for short windows. No generic recommendations, no tourist traps, no wasted hours.",
  },
  {
    icon: "globe",
    title: "Multi-lingual support",
    text: "Concierge in English, Hindi, Marathi, Arabic, Mandarin, and Russian. 24/7 human support via chat and phone.",
  },
  {
    icon: "creditCard",
    title: "Transparent pricing",
    text: "One price, all-in. No surge, no fees, no surprises. Free cancellation up to 4 hours before pickup.",
  },
  {
    icon: "headphones",
    title: "Real-time updates",
    text: "Live notifications to your phone for driver arrivals, check-in times, and any schedule changes.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "I had a 9-hour layover en route to London. LayoverX arranged a chauffeur at CSMIA, a 3-hour heritage walk through Colaba, and a seafood lunch — back at the gate with 2 hours to spare.",
    name: "Marcus B.",
    route: "Munich → London · 9h layover",
    initials: "MB",
    tint: "blue",
  },
  {
    quote:
      "Day-use hotel near Terminal 1, free shuttle in 5 minutes. The cleanest, easiest shower and reset I've ever had between connections.",
    name: "Sandhya K.",
    route: "Bangalore business trip · 6h stopover",
    initials: "SK",
    tint: "emerald",
  },
  {
    quote:
      "We split a 6-hour Doha–Bangkok layover across a Bandra food crawl and a spa circuit. Felt like a mini-vacation before the next flight.",
    name: "John L.",
    route: "Singapore transit · 5h layover",
    initials: "JL",
    tint: "violet",
  },
];

export const FAQ: FaqItem[] = [
  {
    q: "Do I need a transit visa to leave Mumbai airport?",
    a: "Most international transit passengers exiting the terminal need a transit or e-Tourist visa for India. e-Visas are available online in advance for Terminal 2 arrivals. LayoverX's Help Center walks you through current immigration directives before you book.",
  },
  {
    q: "What happens if my inbound flight is delayed?",
    a: "LayoverX continuously monitors flight arrivals. If your inbound flight slips, every booked service re-times automatically and your chauffeur is notified. If the new layover window falls below our safety thresholds, we proactively refund non-feasible segments.",
  },
  {
    q: "Where is my luggage stored during the stopover?",
    a: "Bags checked through to your final destination stay with the airline. For carry-on items or bags checked only to Mumbai, CSMIA T2 has verified left-luggage cloakrooms — LayoverX transit guides walk you directly there.",
  },
  {
    q: "How is the safe layover buffer calculated?",
    a: "We reserve 2 hours for customs and immigration exit, plus 3 hours for the return check-in and security — so your 'active stopover hours' are computed safely above both ends of the connection.",
  },
  {
    q: "Can I customise my itinerary?",
    a: "Yes. The AI Planner generates a draft based on your arrival window, and every service can be swapped, removed, or reordered before checkout. You stay in control.",
  },
];

export const PARTNER_LOGOS: string[] = [
  "Taj Hotels", "Marriott", "Hyatt", "Trident", "ITC", "Leela",
  "Radisson", "Novotel", "Sofitel", "Hilton", "Oberoi", "Westin",
];

export const POPULAR_EXPERIENCES: Experience[] = [
  {
    title: "Taj Santacruz Day Rooms",
    description:
      "A 5-minute walk from Terminal 2 with a pool, day-use rooms, and award-winning Wi-Fi. Perfect for a long transit to refresh and reset.",
    category: "Hotels",
    image: "https://images.unsplash.com/photo-1582719508461-905c654771fa?auto=format&fit=crop&w=800&q=80",
    href: "/hotels.html",
  },
  {
    title: "Bandra West Food Crawl",
    description:
      "A 3-hour curated food walk through Bandra's historic cafés, modern bakeries, and the iconic Carter Road promenade.",
    category: "Tours",
    image: "https://images.unsplash.com/photo-1555212697-91775544d08c?auto=format&fit=crop&w=800&q=80",
    href: "/tours.html",
  },
  {
    title: "Signature Express Massage",
    description:
      "A 60-minute deep-tissue massage at Sofitel's premium spa. Optional pool and steam room access included.",
    category: "Spa",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=800&q=80",
    href: "/spa.html",
  },
  {
    title: "VR Neon Lounge & Games",
    description:
      "A 5-hour arcade pass near Andheri with premium VR pods, bowling, and classic pinball. Great for solo travelers and groups.",
    category: "Gaming",
    image: "https://images.unsplash.com/photo-1633329713122-314ce96bae97?auto=format&fit=crop&w=800&q=80",
    href: "/gaming.html",
  },
  {
    title: "Gateway Heritage Walk",
    description:
      "A 3-hour heritage walk around the Gateway of India, Oval Maidan, and Kala Ghoda. Includes an expert guide and a chai break.",
    category: "Tours",
    image: "https://images.unsplash.com/photo-1570168007201-dfb528c69538?auto=format&fit=crop&w=800&q=80",
    href: "/tours.html",
  },
  {
    title: "Premium Airport Transfer",
    description:
      "A fixed-price sedan transfer with an English-speaking chauffeur. Includes tolls, parking, and a flight-tracking meet-and-greet.",
    category: "Transfers",
    image: "https://images.unsplash.com/photo-1519003726564-015167856c1b?auto=format&fit=crop&w=800&q=80",
    href: "/transfers.html",
  },
];

export const WHY_CHOOSE_ITEMS: WhyChoose[] = [
  {
    icon: "shield",
    title: "Verified for safety",
    text:
      "Every partner on LayoverX goes through a rigorous vetting process. We verify licenses, inspect hygiene standards, review driver backgrounds, and conduct recurring quality audits. Your safety and comfort are our priority.",
  },
  {
    icon: "clock",
    title: "Flight-aware timing",
    text:
      "Our itineraries are built around your actual flight schedule. We monitor flight arrival and departure times in real-time, instantly adjusting your bookings if your flight is delayed. We also build in a buffer for customs, immigration, and security.",
  },
  {
    icon: "globe",
    title: "Multi-lingual support",
    text:
      "Our concierge team speaks English, Hindi, Marathi, Arabic, Mandarin, and Russian. You will never feel lost or out of touch. Our 24/7 human support is available by chat, phone, or email, with an average response time of under 2 minutes.",
  },
  {
    icon: "crown",
    title: "Premium, not crowded",
    text:
      "We curate a small, exclusive selection of premium experiences, not an overwhelming marketplace. Every service is selected for quality over quantity, ensuring a memorable experience every time.",
  },
];