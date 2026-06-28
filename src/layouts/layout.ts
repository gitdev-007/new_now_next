/* ============================================================================
 * LayoverX Shared layout — header, footer, mobile drawer, auth modals
 * Pure HTML strings, rendered once on page boot via app.ts.
 * ========================================================================== */

import { ICONS } from "../lib/icons";
import { primaryNav, secondaryNav, type NavItem } from "./nav-items";

const BRAND = `
  <a href="/" class="brand" aria-label="LayoverX — Home">
    <span class="brand-mark" aria-hidden="true">${ICONS.plane({ size: 18 })}</span>
    <span>LayoverX</span>
  </a>
`;

const NAV_LINK = (item: NavItem, current: string): string => {
  const active = current === item.href || (item.match && item.match.test(current));
  return `<a href="${item.href}" class="nav-link"${active ? ' aria-current="page"' : ""}>${item.label}</a>`;
};

export function renderHeader(activePath: string): string {
  const primary = primaryNav.map((i) => NAV_LINK(i, activePath)).join("\n");
  const userMenu = `
    <div class="auth-guest">
      <button class="btn btn-ghost btn-sm" data-action="open-login" type="button">Log in</button>
      <button class="btn btn-primary btn-sm" data-action="open-planner" type="button">Plan My Layover</button>
    </div>
    <div class="auth-user hidden">
      <button class="btn btn-ghost btn-sm" type="button" data-action="toggle-user-menu" aria-expanded="false" aria-haspopup="menu">
        <span class="avatar avatar-sm" data-user-avatar>A</span>
        <span data-user-name>Account</span>
      </button>
      <div class="user-menu hidden" role="menu">
        <a href="/my-trips.html" role="menuitem">My Trips</a>
        <a href="/saved-itineraries.html" role="menuitem">Saved Itineraries</a>
        <a href="/account-settings.html" role="menuitem">Settings</a>
        <hr />
        <button type="button" role="menuitem" data-action="logout">Log out</button>
      </div>
    </div>
  `;

  return `
    <header class="site-header" id="site-header">
      <div class="container site-header-inner">
        ${BRAND}
        <nav class="primary-nav" aria-label="Primary">
          ${primary}
        </nav>
        <div class="header-actions">
          ${userMenu}
          <button class="nav-toggle" type="button" data-action="toggle-mobile-nav" aria-controls="mobile-nav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="nav-toggle-icon" aria-hidden="true">
              <span></span><span></span><span></span>
            </span>
          </button>
        </div>
      </div>
    </header>
    ${renderMobileNav(activePath, secondaryNav)}
  `;
}

function renderMobileNav(activePath: string, items: NavItem[]): string {
  const links = items.map((i) => NAV_LINK(i, activePath).replace("nav-link", "nav-mobile-link")).join("\n");
  return `
    <div class="nav-mobile" id="mobile-nav" aria-hidden="true">
      <div class="nav-mobile-header">
        ${BRAND}
        <button class="nav-toggle" type="button" data-action="toggle-mobile-nav" aria-label="Close navigation">
          <span class="nav-toggle-icon" aria-hidden="true">
            <span></span><span></span><span></span>
          </span>
        </button>
      </div>
      <div class="nav-mobile-body">
        ${links}
      </div>
      <div class="nav-mobile-footer">
        <a href="/plan.html" class="btn btn-primary btn-block">Plan My Layover</a>
        <button class="btn btn-ghost btn-block" type="button" data-action="open-login">Log in</button>
      </div>
    </div>
  `;
}

export function renderFooter(): string {
  const year = new Date().getFullYear();
  return `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-brand">
            ${BRAND}
            <p class="footer-tagline">
              Transform transit hours into memorable stopovers. Premium hotels, dining, tours, and transfers near Mumbai's Chhatrapati Shivaji Maharaj International Airport.
            </p>
            <div class="footer-social" aria-label="Social media">
              <a href="#" aria-label="LinkedIn">${ICONS.globe({ size: 18 })}</a>
              <a href="#" aria-label="X / Twitter">${ICONS.zap({ size: 18 })}</a>
              <a href="#" aria-label="Instagram">${ICONS.camera({ size: 18 })}</a>
            </div>
          </div>

          <div>
            <h4>Explore</h4>
            <ul class="footer-link-list">
              <li><a href="/hotels.html">Airport Hotels</a></li>
              <li><a href="/restaurants.html">Dining & Restaurants</a></li>
              <li><a href="/spa.html">Spa & Wellness</a></li>
              <li><a href="/gaming.html">Gaming & Fun</a></li>
              <li><a href="/tours.html">City Tours</a></li>
              <li><a href="/transfers.html">Airport Transfers</a></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul class="footer-link-list">
              <li><a href="/how-it-works.html">How It Works</a></li>
              <li><a href="/plan.html">Plan My Layover</a></li>
              <li><a href="/partner.html">Partner with Us</a></li>
              <li><a href="/contact.html">Contact</a></li>
              <li><a href="/help.html">Help Center</a></li>
              <li><a href="/faq.html">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4>Get in touch</h4>
            <ul class="footer-contact-list">
              <li>${ICONS.mail({ size: 18 })}<a href="mailto:hello@layoverx.com">hello@layoverx.com</a></li>
              <li>${ICONS.phone({ size: 18 })}<a href="tel:+912212345678">+91 22 1234 5678</a></li>
              <li>${ICONS.mapPin({ size: 18 })}<span>Andheri East, near CSMIA Terminal 2,<br/>Mumbai, MH 400099, India</span></li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <span>&copy; ${year} LayoverX. All rights reserved.</span>
          <nav class="footer-legal" aria-label="Legal">
            <a href="/privacy.html">Privacy</a>
            <a href="/terms.html">Terms</a>
            <a href="/faq.html">FAQ</a>
          </nav>
        </div>
      </div>
    </footer>
  `;
}

export function renderAuthModals(): string {
  return `
    <div class="modal" id="modal-login" role="dialog" aria-modal="true" aria-labelledby="login-title">
      <div class="modal-dialog">
        <button class="modal-close" type="button" data-action="close-modal" aria-label="Close">${ICONS.x({ size: 20 })}</button>
        <h2 class="modal-title" id="login-title">Welcome back</h2>
        <p class="modal-subtitle">Log in to manage your layover bookings.</p>

        <form id="form-login" class="stack-3" novalidate>
          <div class="field">
            <label class="label" for="login-email">Email</label>
            <input class="input" id="login-email" name="email" type="email" autocomplete="email" required />
          </div>
          <div class="field">
            <label class="label" for="login-password">Password</label>
            <div class="input-icon-wrap">
              <input class="input" id="login-password" name="password" type="password" autocomplete="current-password" required minlength="8" />
              <button class="input-action" type="button" data-action="toggle-password" data-target="login-password" aria-label="Show password">
                ${ICONS.eye({ size: 18 })}
              </button>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-block">
            <span>Sign in</span>
          </button>
          <p class="text-small text-center">
            <a href="#" data-action="switch-modal" data-from="login" data-to="forgot">Forgot password?</a>
          </p>
        </form>

        <div class="divider"></div>

        <button class="btn btn-outline btn-block" type="button" data-action="social-login" data-provider="google">
          ${ICONS.globe({ size: 18 })}
          <span>Continue with Google</span>
        </button>

        <p class="text-small text-center mt-6">
          New to LayoverX?
          <a href="#" data-action="switch-modal" data-from="login" data-to="signup">Create an account</a>
        </p>
      </div>
    </div>

    <div class="modal" id="modal-signup" role="dialog" aria-modal="true" aria-labelledby="signup-title">
      <div class="modal-dialog">
        <button class="modal-close" type="button" data-action="close-modal" aria-label="Close">${ICONS.x({ size: 20 })}</button>
        <h2 class="modal-title" id="signup-title">Create your account</h2>
        <p class="modal-subtitle">Join LayoverX to save itineraries, sync bookings, and unlock exclusive perks.</p>

        <form id="form-signup" class="stack-3" novalidate>
          <div class="field">
            <label class="label" for="signup-name">Full name</label>
            <input class="input" id="signup-name" name="name" type="text" autocomplete="name" required />
          </div>
          <div class="field">
            <label class="label" for="signup-email">Email</label>
            <input class="input" id="signup-email" name="email" type="email" autocomplete="email" required />
          </div>
          <div class="field">
            <label class="label" for="signup-password">Password <span class="label-optional">8+ characters</span></label>
            <div class="input-icon-wrap">
              <input class="input" id="signup-password" name="password" type="password" autocomplete="new-password" required minlength="8" />
              <button class="input-action" type="button" data-action="toggle-password" data-target="signup-password" aria-label="Show password">
                ${ICONS.eye({ size: 18 })}
              </button>
            </div>
          </div>
          <button type="submit" class="btn btn-primary btn-block">
            <span>Create account</span>
          </button>
        </form>

        <p class="text-small text-center mt-6">
          Already have an account?
          <a href="#" data-action="switch-modal" data-from="signup" data-to="login">Sign in</a>
        </p>
      </div>
    </div>

    <div class="modal" id="modal-forgot" role="dialog" aria-modal="true" aria-labelledby="forgot-title">
      <div class="modal-dialog">
        <button class="modal-close" type="button" data-action="close-modal" aria-label="Close">${ICONS.x({ size: 20 })}</button>
        <h2 class="modal-title" id="forgot-title">Reset your password</h2>
        <p class="modal-subtitle">Enter your email and we'll send a recovery link.</p>

        <form id="form-forgot" class="stack-3" novalidate>
          <div class="field">
            <label class="label" for="forgot-email">Email</label>
            <input class="input" id="forgot-email" name="email" type="email" autocomplete="email" required />
          </div>
          <button type="submit" class="btn btn-primary btn-block">
            <span>Send reset link</span>
          </button>
        </form>

        <p class="text-small text-center mt-6">
          <a href="#" data-action="switch-modal" data-from="forgot" data-to="login">Back to sign in</a>
        </p>
      </div>
    </div>

    <div class="toast-host" id="toast-host" aria-live="polite" aria-atomic="true"></div>
  `;
}

export function renderSkipLink(): string {
  return `<a href="#main" class="skip-link">Skip to main content</a>`;
}