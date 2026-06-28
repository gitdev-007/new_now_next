/* ============================================================================
 * LayoverX App bootstrap
 * Wires up header, footer, modals, auth state, scroll-reveal, form handlers.
 * Called once from each page's entry module.
 * ========================================================================== */

import { auth } from "./auth";
import {
  closeModal,
  initHeaderScroll,
  initMobileNav,
  initPasswordToggles,
  openModal,
  switchModal,
  toast,
  type ModalId,
} from "./ui";
import { renderAuthModals, renderFooter, renderHeader, renderSkipLink } from "../layouts/layout";
import { resolveMeta } from "../layouts/page-meta";
import type { AuthUser } from "./auth";

const ACTIVE_PATH = (() => {
  const path = window.location.pathname;
  if (path === "/" || path === "") return "/index.html";
  return path.toLowerCase();
})();

function applyMeta(): void {
  const meta = resolveMeta(ACTIVE_PATH);
  document.title = meta.title;
  setMeta("description", meta.description);
  setMeta("og:title", meta.title, true);
  setMeta("og:description", meta.description, true);
  setMeta("og:type", "website", true);
  setMeta("og:url", meta.canonical, true);
  setMeta("og:image", meta.ogImage ?? `${location.origin}/assets/og-default.png`, true);
  setMeta("og:site_name", "LayoverX", true);
  setMeta("twitter:card", "summary_large_image");
  setMeta("twitter:title", meta.title);
  setMeta("twitter:description", meta.description);
  setLinkRel("canonical", meta.canonical);
  setMeta("robots", meta.robots ?? "index,follow");
  if (meta.jsonLd) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(meta.jsonLd);
    document.head.appendChild(script);
  }
  if (meta.theme) {
    document.body.setAttribute("data-theme", meta.theme);
  }
}

function setMeta(name: string, value: string, property = false): void {
  if (!value) return;
  const attr = property ? "property" : "name";
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", value);
}

function setLinkRel(rel: string, href: string): void {
  if (!href) return;
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.rel = rel;
    document.head.appendChild(el);
  }
  el.href = href;
}

function mountShell(): void {
  const skipHost = document.getElementById("skip-link-host");
  if (skipHost) skipHost.innerHTML = renderSkipLink();

  const headerHost = document.getElementById("header-host");
  if (headerHost) headerHost.innerHTML = renderHeader(ACTIVE_PATH);

  const footerHost = document.getElementById("footer-host");
  if (footerHost) footerHost.innerHTML = renderFooter();

  const modalHost = document.getElementById("modal-host");
  if (modalHost) modalHost.innerHTML = renderAuthModals();
}

function wireGlobalActions(): void {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;

    // Modal switcher (login → signup, etc.)
    const switcher = target.closest<HTMLElement>("[data-action='switch-modal']");
    if (switcher) {
      e.preventDefault();
      const from = switcher.dataset.from as ModalId | undefined;
      const to = switcher.dataset.to as ModalId | undefined;
      if (from && to) switchModal(from, to);
      return;
    }

    // Modal close
    const closer = target.closest<HTMLElement>("[data-action='close-modal']");
    if (closer) {
      const modalEl = closer.closest<HTMLElement>(".modal");
      if (modalEl?.id) closeModal(modalEl.id.replace("modal-", "") as ModalId);
      return;
    }

    // Open login
    if (target.closest("[data-action='open-login']")) {
      e.preventDefault();
      openModal("login");
      return;
    }

    // Open planner (Plan My Layover)
    if (target.closest("[data-action='open-planner']")) {
      window.location.href = "/plan.html";
      return;
    }

    // Social login
    const social = target.closest<HTMLElement>("[data-action='social-login']");
    if (social) {
      e.preventDefault();
      const provider = social.dataset.provider ?? "google";
      void auth.socialLogin(provider).then((u) => {
        toast(`Welcome, ${u.name}.`, "success");
        closeModal("login");
        closeModal("signup");
        renderAuthState(u);
      });
      return;
    }

    // Logout
    const logout = target.closest<HTMLElement>("[data-action='logout']");
    if (logout) {
      auth.logout();
      toast("You've been logged out.");
      return;
    }

    // User menu toggle
    const userToggle = target.closest<HTMLElement>("[data-action='toggle-user-menu']");
    if (userToggle) {
      const menu = userToggle.parentElement?.querySelector<HTMLElement>(".user-menu");
      if (menu) {
        const isOpen = !menu.classList.contains("hidden");
        menu.classList.toggle("hidden");
        userToggle.setAttribute("aria-expanded", String(!isOpen));
      }
      return;
    }
  });

  // Click outside dialog closes it
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains("modal")) return;
    const id = target.id.replace("modal-", "") as ModalId;
    if (id) closeModal(id);
  });

  // ESC closes any open modal
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document.querySelectorAll<HTMLElement>(".modal[data-open='true']").forEach((m) => {
        const id = m.id.replace("modal-", "") as ModalId;
        closeModal(id);
      });
    }
  });
}

function wireForms(): void {
  document.addEventListener("submit", (e) => {
    const form = e.target as HTMLFormElement | null;
    if (!form) return;

    if (form.id === "form-login") {
      e.preventDefault();
      const email = (form.elements.namedItem("email") as HTMLInputElement).value;
      const password = (form.elements.namedItem("password") as HTMLInputElement).value;
      if (!email || !password) {
        toast("Please enter your email and password.", "error");
        return;
      }
      submitWithLoading(form, () => auth.login(email, password)).then((u) => {
        toast(`Welcome back, ${u.name}.`, "success");
        closeModal("login");
        renderAuthState(u);
      }).catch(() => {
        toast("We couldn't sign you in. Please try again.", "error");
      });
      return;
    }

    if (form.id === "form-signup") {
      e.preventDefault();
      const name = (form.elements.namedItem("name") as HTMLInputElement).value;
      const email = (form.elements.namedItem("email") as HTMLInputElement).value;
      const password = (form.elements.namedItem("password") as HTMLInputElement).value;
      if (!name || !email || !password) {
        toast("All fields are required.", "error");
        return;
      }
      if (password.length < 8) {
        toast("Password must be at least 8 characters.", "error");
        return;
      }
      submitWithLoading(form, () => auth.signup(name, email, password)).then((u) => {
        toast(`Welcome to LayoverX, ${u.name}.`, "success");
        closeModal("signup");
        renderAuthState(u);
      }).catch(() => {
        toast("Something went wrong. Please try again.", "error");
      });
      return;
    }

    if (form.id === "form-forgot") {
      e.preventDefault();
      const email = (form.elements.namedItem("email") as HTMLInputElement).value;
      submitWithLoading(form, () => auth.requestPasswordReset(email)).then(() => {
        toast("If that email is registered, a reset link is on its way.", "success");
        switchModal("forgot", "login");
      });
      return;
    }

    // Trip-context and other planner forms are page-specific.
    // Each page module can hook additional submit handlers via window.app.onSubmit.
    const ext = (window as unknown as { app?: AppHost }).app;
    ext?.onSubmit?.(form);
  });
}

async function submitWithLoading<T>(form: HTMLFormElement, fn: () => Promise<T>): Promise<T> {
  const btn = form.querySelector<HTMLButtonElement>("button[type='submit']");
  if (btn) {
    btn.dataset.original = btn.innerHTML;
    btn.classList.add("is-loading");
    btn.disabled = true;
    btn.innerHTML = `<span class="btn-spinner" aria-hidden="true"></span><span>Working…</span>`;
  }
  try {
    return await fn();
  } finally {
    if (btn) {
      btn.classList.remove("is-loading");
      btn.disabled = false;
      btn.innerHTML = btn.dataset.original ?? btn.innerHTML;
    }
  }
}

function renderAuthState(user: AuthUser | null): void {
  const guestBlocks = document.querySelectorAll<HTMLElement>(".auth-guest");
  const userBlocks = document.querySelectorAll<HTMLElement>(".auth-user");
  guestBlocks.forEach((el) => el.classList.toggle("hidden", !!user));
  userBlocks.forEach((el) => el.classList.toggle("hidden", !user));

  if (user) {
    document.querySelectorAll<HTMLElement>("[data-user-name]").forEach((el) => {
      el.textContent = user.name;
    });
    document.querySelectorAll<HTMLElement>("[data-user-avatar]").forEach((el) => {
      const initial = (user.name || user.email).trim().charAt(0).toUpperCase() || "U";
      el.textContent = initial;
    });
  }
}

function initReveal(): void {
  if (typeof IntersectionObserver === "undefined") {
    document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => {
      (el as HTMLElement).dataset.revealed = "true";
    });
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          (entry.target as HTMLElement).dataset.revealed = "true";
          io.unobserve(entry.target);
        }
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
  );
  document.querySelectorAll(".reveal, .reveal-stagger").forEach((el) => io.observe(el));
}

interface AppHost {
  onSubmit?: (form: HTMLFormElement) => void;
}

export function bootApp(): void {
  applyMeta();
  mountShell();
  wireGlobalActions();
  wireForms();
  initHeaderScroll();
  initMobileNav();
  initPasswordToggles();
  initReveal();

  auth.subscribe(renderAuthState);

  // Expose page-host hook so each page can attach additional handlers.
  (window as unknown as { app: AppHost }).app = (window as unknown as { app?: AppHost }).app ?? {};
}