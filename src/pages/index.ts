/* ============================================================================
 * LayoverX — Landing (index) page
 * Hero, search bar, value props, categories, testimonials, FAQ, CTA.
 * ========================================================================== */

import { ICONS } from "../lib/icons";
import { FAQ, SERVICE_CATEGORIES, TESTIMONIALS, VALUE_PROPS } from "../data/catalog";
import { bootApp } from "../lib/app";

const ICON_BY_KEY = {
  bed: ICONS.bed,
  utensils: ICONS.utensils,
  leaf: ICONS.leaf,
  gamepad: ICONS.gamepad,
  mountain: ICONS.mountain,
  car: ICONS.car,
} as const;

const VALUE_ICON = {
  shield: ICONS.shield,
  clock: ICONS.clock,
  sparkles: ICONS.sparkles,
  globe: ICONS.globe,
  creditCard: ICONS.creditCard,
  headphones: ICONS.headphones,
} as const;

function renderHero(): string {
  return `
    <section class="hero" aria-labelledby="hero-title">
      <div class="container">
        <div class="reveal">
          <span class="hero-eyebrow">
            <span class="hero-eyebrow-dot" aria-hidden="true"></span>
            Mumbai Airport Transit Platform
          </span>
          <h1 class="hero-title" id="hero-title">
            Make the most of your Mumbai layover.
          </h1>
          <p class="hero-subtitle">
            Hotels, dining, spa, tours, and transfers — curated around your flight schedule.
            Turn airport waiting into a memorable stopover.
          </p>
          <div class="hero-actions">
            <a href="/plan.html" class="btn btn-primary btn-lg">
              <span>Plan My Layover</span>
              ${ICONS.arrowRight({ size: 18 })}
            </a>
            <a href="#categories" class="btn btn-outline btn-lg btn-on-dark">
              <span>Explore Services</span>
            </a>
          </div>
          <dl class="hero-stats" aria-label="Platform statistics">
            <div class="hero-stat">
              <dt class="hero-stat-label">Verified services</dt>
              <dd class="hero-stat-value">150+</dd>
            </div>
            <div class="hero-stat-divider" aria-hidden="true"></div>
            <div class="hero-stat">
              <dt class="hero-stat-label">Concierge support</dt>
              <dd class="hero-stat-value">24/7</dd>
            </div>
            <div class="hero-stat-divider" aria-hidden="true"></div>
            <div class="hero-stat">
              <dt class="hero-stat-label">Avg. pickup time</dt>
              <dd class="hero-stat-value">5 min</dd>
            </div>
            <div class="hero-stat-divider" aria-hidden="true"></div>
            <div class="hero-stat">
              <dt class="hero-stat-label">Traveler rating</dt>
              <dd class="hero-stat-value">4.9 / 5</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>

    <section class="hero-search" aria-label="Plan in seconds">
      <div class="container">
        <form class="search-bar reveal" id="quick-search" novalidate>
          <div class="search-bar-grid cols-4">
            <div class="field">
              <label class="label" for="qs-area">Airport area</label>
              <div class="select-wrap">
                <select class="select" id="qs-area" required>
                  <option value="near-airport">Near CSMIA · Andheri East</option>
                  <option value="bandra">Bandra West</option>
                  <option value="south-mumbai">South Mumbai · Colaba</option>
                  <option value="juhu">Juhu · Versova</option>
                </select>
              </div>
            </div>
            <div class="field">
              <label class="label" for="qs-arrival">Arrival</label>
              <input class="input" id="qs-arrival" type="datetime-local" required />
            </div>
            <div class="field">
              <label class="label" for="qs-departure">Departure</label>
              <input class="input" id="qs-departure" type="datetime-local" required />
            </div>
            <div class="field" style="border-right: 0;">
              <label class="label" for="qs-travelers">Travelers</label>
              <div class="select-wrap">
                <select class="select" id="qs-travelers" required>
                  <option value="1">1 adult</option>
                  <option value="2" selected>2 adults</option>
                  <option value="3">3 adults</option>
                  <option value="4">4+ family or group</option>
                </select>
              </div>
            </div>
            <button type="submit" class="btn btn-primary btn-lg" style="margin-top: var(--space-2);">
              <span>Build my itinerary</span>
              ${ICONS.arrowRight({ size: 18 })}
            </button>
          </div>
        </form>
      </div>
    </section>
  `;
}

function renderValueProps(): string {
  return `
    <section class="section section-surface" aria-labelledby="value-title">
      <div class="container">
        <div class="section-header center reveal">
          <span class="eyebrow">Why LayoverX</span>
          <h2 class="heading-2" id="value-title">Built for travelers who refuse to waste a single hour.</h2>
          <p class="text-body-lg">
            LayoverX is a curated transit marketplace — every service is verified, every minute of your layover is accounted for, and every booking is monitored in real time.
          </p>
        </div>
        <div class="value-prop reveal-stagger">
          ${VALUE_PROPS.map((v) => `
            <article class="value-card">
              <span class="value-icon">${VALUE_ICON[v.icon]({ size: 22 })}</span>
              <h3 class="value-title">${v.title}</h3>
              <p class="value-text">${v.text}</p>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCategories(): string {
  return `
    <section class="section section-alt" id="categories" aria-labelledby="cat-title">
      <div class="container">
        <div class="section-header center reveal">
          <span class="eyebrow">Service categories</span>
          <h2 class="heading-2" id="cat-title">Six categories. Hundreds of partners. One flight window.</h2>
          <p class="text-body-lg">Every category below is curated by our transit concierge team, with verified pricing and live availability.</p>
        </div>
        <div class="cat-grid reveal-stagger">
          ${SERVICE_CATEGORIES.map((c) => `
            <a class="cat-card" href="${c.href}">
              <span class="cat-icon">${ICON_BY_KEY[c.icon]({ size: 24 })}</span>
              <h3 class="cat-title">${c.title}</h3>
              <p class="cat-text">${c.description}</p>
              <div class="cat-meta">
                ${c.meta.map((m) => `<span class="badge">${m}</span>`).join("")}
              </div>
              <span class="text-brand mt-2" style="margin-top: var(--space-4); font-weight: var(--fw-semibold); font-size: var(--fs-sm);">
                ${c.highlight}
              </span>
            </a>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderHowItWorks(): string {
  const steps = [
    {
      n: "01",
      title: "Share your flight",
      text: "Enter your arrival and departure times. LayoverX calculates the safe active window after customs and re-check-in buffers.",
    },
    {
      n: "02",
      title: "Pick your stops",
      text: "Browse verified hotels, dining, spa, tours, and transfers — each filtered to fit your timing and traveler preferences.",
    },
    {
      n: "03",
      title: "Confirm in one tap",
      text: "Pay securely, get instant confirmations, and receive live updates as your flight status changes.",
    },
    {
      n: "04",
      title: "Travel with confidence",
      text: "Your chauffeur, host, and concierge are notified 24/7. If anything changes, we re-time the plan — automatically.",
    },
  ];
  return `
    <section class="section section-surface" aria-labelledby="how-title">
      <div class="container">
        <div class="section-header center reveal">
          <span class="eyebrow">How it works</span>
          <h2 class="heading-2" id="how-title">Four steps from gate to stopover.</h2>
        </div>
        <ol class="grid grid-4 reveal-stagger" style="list-style: none;">
          ${steps.map((s) => `
            <li class="card card-flat">
              <span class="text-brand" style="font-size: var(--fs-2xl); font-weight: var(--fw-black); letter-spacing: -0.02em;">${s.n}</span>
              <h3 class="heading-5">${s.title}</h3>
              <p class="text-body">${s.text}</p>
            </li>
          `).join("")}
        </ol>
      </div>
    </section>
  `;
}

function renderTestimonials(): string {
  return `
    <section class="section section-alt" aria-labelledby="testi-title">
      <div class="container">
        <div class="section-header center reveal">
          <span class="eyebrow">Loved by travelers</span>
          <h2 class="heading-2" id="testi-title">Real stories from real transit flyers.</h2>
        </div>
        <div class="testimonial-grid reveal-stagger">
          ${TESTIMONIALS.map((t) => `
            <article class="testimonial">
              <div class="rating-stars" aria-label="Rated 5 out of 5">★★★★★</div>
              <p class="testimonial-quote">"${t.quote}"</p>
              <div class="testimonial-meta">
                <span class="avatar" aria-hidden="true">${t.initials}</span>
                <div>
                  <div class="testimonial-name">${t.name}</div>
                  <div class="testimonial-route">${t.route}</div>
                </div>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderFaq(): string {
  return `
    <section class="section section-surface" aria-labelledby="faq-title">
      <div class="container container-narrow">
        <div class="section-header center reveal">
          <span class="eyebrow">FAQ</span>
          <h2 class="heading-2" id="faq-title">Everything you need to know.</h2>
        </div>
        <div class="reveal">
          ${FAQ.map((f, i) => `
            <details class="accordion-item" ${i === 0 ? "data-open=\"true\"" : ""}>
              <summary class="accordion-trigger">
                <span>${f.q}</span>
                <span class="accordion-icon" aria-hidden="true">${ICONS.plus({ size: 16 })}</span>
              </summary>
              <div class="accordion-panel">
                <div>${f.a}</div>
              </div>
            </details>
          `).join("")}
        </div>
      </div>
    </section>
  `;
}

function renderCta(): string {
  return `
    <section class="section section-surface" aria-labelledby="cta-title">
      <div class="container">
        <div class="cta-banner reveal">
          <h2 class="cta-title" id="cta-title">Don't waste your next layover.</h2>
          <p class="cta-text">
            Plan a verified stopover in under a minute — or let our concierge build it for you, for free.
          </p>
          <div class="cta-actions">
            <a href="/plan.html" class="btn btn-primary btn-lg">${ICONS.sparkles({ size: 18 })}<span>Plan My Layover</span></a>
            <a href="/contact.html" class="btn btn-outline btn-lg btn-on-dark"><span>Talk to concierge</span></a>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderPage(): string {
  return [renderHero(), renderValueProps(), renderCategories(), renderHowItWorks(), renderTestimonials(), renderFaq(), renderCta()].join("\n");
}

export function mount(): void {
  const root = document.getElementById("main");
  if (!root) return;
  root.innerHTML = renderPage();
  wireQuickSearch();
  bootApp();
}

function wireQuickSearch(): void {
  const form = document.getElementById("quick-search") as HTMLFormElement | null;
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const params = new URLSearchParams();
    for (const [k, v] of data.entries()) params.set(k, String(v));
    window.location.href = `/plan.html?${params.toString()}`;
  });
  // Pre-fill sensible defaults
  const arrival = document.getElementById("qs-arrival") as HTMLInputElement | null;
  const departure = document.getElementById("qs-departure") as HTMLInputElement | null;
  const now = new Date();
  const inFourHours = new Date(now.getTime() + 4 * 60 * 60 * 1000);
  const inTwelveHours = new Date(now.getTime() + 12 * 60 * 60 * 1000);
  if (arrival) arrival.value = toLocalIso(inFourHours);
  if (departure) departure.value = toLocalIso(inTwelveHours);
}

function toLocalIso(d: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mount);
} else {
  mount();
}