/* ============================================================================
 * LayoverX Page metadata
 * One source of truth for SEO tags per page.
 * ========================================================================== */

export interface PageMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  jsonLd?: object;
  theme?: "hotels" | "restaurants" | "spa" | "gaming" | "tours" | "transfers";
  robots?: "index,follow" | "noindex,nofollow";
}

const SITE_NAME = "LayoverX";
const BASE_URL = "https://layoverx.com";
const OG_IMAGE = `${BASE_URL}/assets/og-default.png`;

const sharedJsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelService",
  name: SITE_NAME,
  description: "Mumbai Airport transit travel marketplace.",
  url: BASE_URL,
  areaServed: {
    "@type": "City",
    name: "Mumbai",
    containedInPlace: { "@type": "Country", name: "India" },
  },
  provider: {
    "@type": "Organization",
    name: SITE_NAME,
    url: BASE_URL,
  },
};

export const PAGES: Record<string, PageMeta> = {
  "/index.html": {
    title: "Mumbai Layover Experience Platform — Hotels, Dining, Tours, Transfers",
    description:
      "Turn a Mumbai airport layover into a memorable stopover. Book verified day-use hotels, dining, spa, city tours, and airport transfers near CSMIA.",
    canonical: `${BASE_URL}/`,
    jsonLd: sharedJsonLd,
  },
  "/plan.html": {
    title: "Plan My Mumbai Layover — AI Itinerary Planner | LayoverX",
    description:
      "Generate a time-optimized Mumbai layover itinerary in seconds. Hotels, transfers, dining, and tours matched to your flight schedule.",
    canonical: `${BASE_URL}/plan.html`,
    robots: "index,follow",
  },
  "/hotels.html": {
    title: "Transit Hotels Near Mumbai Airport — Hourly Day-Use Rooms | LayoverX",
    description:
      "Book luxury and budget transit hotels near CSMIA. 24/7 check-in, free terminal shuttles, pool and spa access — starting from 3-hour layovers.",
    canonical: `${BASE_URL}/hotels.html`,
    theme: "hotels",
  },
  "/restaurants.html": {
    title: "Best Restaurants Near Mumbai Airport — Authentic Local Dining | LayoverX",
    description:
      "Discover verified restaurants, fine dining, and quick bites within minutes of Mumbai Airport. Curated for layover travelers.",
    canonical: `${BASE_URL}/restaurants.html`,
    theme: "restaurants",
  },
  "/spa.html": {
    title: "Airport Spa & Wellness Near Mumbai Airport — Massage & Relaxation | LayoverX",
    description:
      "Refresh between flights with premium spa and wellness services. Express massage, full wellness circuits, and relaxation lounges near CSMIA.",
    canonical: `${BASE_URL}/spa.html`,
    theme: "spa",
  },
  "/gaming.html": {
    title: "Gaming & Entertainment Near Mumbai Airport — VR, Bowling, Arcades | LayoverX",
    description:
      "Beat layover boredom. High-energy gaming lounges, VR hubs, bowling, and entertainment centers within minutes of CSMIA.",
    canonical: `${BASE_URL}/gaming.html`,
    theme: "gaming",
  },
  "/tours.html": {
    title: "Mumbai Layover Tours — Sightseeing, Heritage, Food Crawls | LayoverX",
    description:
      "Curated city sightseeing, shopping, and heritage walks optimized for layover windows. Expert local guides, transparent pricing.",
    canonical: `${BASE_URL}/tours.html`,
    theme: "tours",
  },
  "/transfers.html": {
    title: "Mumbai Airport Transfers — Fixed-Price Cabs | LayoverX",
    description:
      "Reliable airport pickup and drop transfers at CSMIA. Fixed pricing, verified drivers, tolls included — surge-free.",
    canonical: `${BASE_URL}/transfers.html`,
    theme: "transfers",
  },
  "/how-it-works.html": {
    title: "How LayoverX Works — Visas, Customs, Luggage | LayoverX",
    description:
      "Step-by-step guidance on making the most of your Mumbai airport layover — visas, customs, luggage, transit times.",
    canonical: `${BASE_URL}/how-it-works.html`,
  },
  "/contact.html": {
    title: "Contact LayoverX — 24/7 Transit Concierge | LayoverX",
    description: "Reach LayoverX's 24/7 transit concierge for booking help, partner enquiries, and emergency travel support.",
    canonical: `${BASE_URL}/contact.html`,
  },
  "/help.html": {
    title: "Help Center — Visas, Customs, Luggage, Flight Delays | LayoverX",
    description: "Practical guides on transit visas, customs clearance, luggage lockers, and rebooking during flight delays.",
    canonical: `${BASE_URL}/help.html`,
  },
  "/faq.html": {
    title: "LayoverX FAQ — Booking, Refunds, Flight Delays | LayoverX",
    description: "Common questions about booking layover services, refund policies, and what happens during flight delays.",
    canonical: `${BASE_URL}/faq.html`,
  },
  "/partner.html": {
    title: "Become a LayoverX Partner — Hotels, Dining, Tours | LayoverX",
    description: "Register your hotel, restaurant, spa, tour, or transfer service to reach LayoverX's global traveler audience.",
    canonical: `${BASE_URL}/partner.html`,
  },
  "/privacy.html": {
    title: "Privacy Policy | LayoverX",
    description: "How LayoverX protects your passport details, flight information, and booking records.",
    canonical: `${BASE_URL}/privacy.html`,
  },
  "/terms.html": {
    title: "Terms of Service | LayoverX",
    description: "Platform terms, partner obligations, liability, and cancellation policies.",
    canonical: `${BASE_URL}/terms.html`,
  },
};

export const DEFAULT_META: PageMeta = {
  title: "LayoverX — Premium Stopovers for Mumbai Airport Transit",
  description:
    "LayoverX turns Mumbai airport transit hours into memorable stopovers. Verified hotels, dining, spa, tours, and transfers.",
  canonical: `${BASE_URL}/`,
  ogImage: OG_IMAGE,
};

export const PRIVATE_PATHS = new Set<string>([
  // Dashboard / authenticated pages are added later when those pages ship.
]);

export function resolveMeta(pathname: string): PageMeta {
  const key = pathname === "/" ? "/index.html" : pathname.toLowerCase();
  return PAGES[key] ?? { ...DEFAULT_META, canonical: `${BASE_URL}${pathname}` };
}