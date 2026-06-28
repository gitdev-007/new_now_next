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