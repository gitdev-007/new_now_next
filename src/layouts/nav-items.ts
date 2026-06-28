/* ============================================================================
 * LayoverX Navigation items
 * Two groups: primary (top bar) and secondary (mobile drawer full list).
 * ========================================================================== */

export interface NavItem {
  href: string;
  label: string;
  /** Match against the current pathname to mark as active. */
  match?: RegExp;
}

export const primaryNav: NavItem[] = [
  { href: "/hotels.html",      label: "Hotels",      match: /^\/hotels\.html$/ },
  { href: "/restaurants.html", label: "Dining",      match: /^\/restaurants\.html$/ },
  { href: "/spa.html",         label: "Spa",         match: /^\/spa\.html$/ },
  { href: "/gaming.html",      label: "Gaming",      match: /^\/gaming\.html$/ },
  { href: "/tours.html",       label: "Tours",       match: /^\/tours\.html$/ },
  { href: "/transfers.html",   label: "Transfers",   match: /^\/transfers\.html$/ },
];

export const secondaryNav: NavItem[] = [
  ...primaryNav,
  { href: "/plan.html",          label: "Plan My Layover", match: /^\/plan\.html$/ },
  { href: "/how-it-works.html",  label: "How It Works",    match: /^\/how-it-works\.html$/ },
  { href: "/contact.html",       label: "Contact",         match: /^\/contact\.html$/ },
  { href: "/help.html",          label: "Help Center",     match: /^\/help\.html$/ },
  { href: "/faq.html",           label: "FAQ",             match: /^\/faq\.html$/ },
  { href: "/partner.html",       label: "Partner with Us", match: /^\/partner\.html$/ },
];