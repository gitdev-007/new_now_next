/* ============================================================================
 * LayoverX UI primitives — modal controller, toast, header behaviour.
 * ========================================================================== */

type ModalId = "login" | "signup" | "forgot";

export type { ModalId };

const openModals = new Set<ModalId>();

function getModal(id: ModalId): HTMLElement | null {
  return document.getElementById(`modal-${id}`);
}

export function openModal(id: ModalId): void {
  const modal = getModal(id);
  if (!modal) return;
  modal.dataset.open = "true";
  modal.setAttribute("aria-hidden", "false");
  openModals.add(id);
  document.body.style.overflow = "hidden";
  const focusable = modal.querySelector<HTMLElement>("input, button, [tabindex]");
  focusable?.focus({ preventScroll: true });
}

export function closeModal(id: ModalId): void {
  const modal = getModal(id);
  if (!modal) return;
  modal.dataset.open = "false";
  modal.setAttribute("aria-hidden", "true");
  openModals.delete(id);
  if (openModals.size === 0) {
    document.body.style.overflow = "";
  }
}

export function switchModal(from: ModalId, to: ModalId): void {
  closeModal(from);
  setTimeout(() => openModal(to), 120);
}

export function isModalOpen(): boolean {
  return openModals.size > 0;
}

/* ─── Toast ────────────────────────────────────────────────────────────── */
let toastHost: HTMLElement | null = null;

function ensureToastHost(): HTMLElement {
  if (toastHost && document.body.contains(toastHost)) return toastHost;
  toastHost = document.getElementById("toast-host");
  if (!toastHost) {
    toastHost = document.createElement("div");
    toastHost.id = "toast-host";
    toastHost.className = "toast-host";
    toastHost.setAttribute("aria-live", "polite");
    toastHost.setAttribute("aria-atomic", "true");
    document.body.appendChild(toastHost);
  }
  return toastHost;
}

export function toast(message: string, variant: "default" | "success" | "error" = "default"): void {
  const host = ensureToastHost();
  const el = document.createElement("div");
  el.className = `toast${variant === "success" ? " toast-success" : ""}${variant === "error" ? " toast-error" : ""}`;
  el.setAttribute("role", "status");
  el.textContent = message;
  host.appendChild(el);
  setTimeout(() => {
    el.style.transition = "opacity 200ms, transform 200ms";
    el.style.opacity = "0";
    el.style.transform = "translateY(8px)";
    setTimeout(() => el.remove(), 220);
  }, 4200);
}

/* ─── Carousel ────────────────────────────────────────────────────────── */
export function initCarousels(): void {
  document.querySelectorAll<HTMLElement>("[data-carousel]").forEach((container) => {
    const track = container.querySelector<HTMLElement>(".carousel-track");
    const prevBtn = container.querySelector<HTMLButtonElement>("[data-carousel-prev]");
    const nextBtn = container.querySelector<HTMLButtonElement>("[data-carousel-next]");
    const dotsContainer = container.querySelector<HTMLElement>("[data-carousel-dots]");
    const items = container.querySelectorAll<HTMLElement>(".carousel-item");
    if (!track || items.length === 0) return;

    let currentIndex = 0;
    const totalItems = items.length;

    function updateSlide() {
      items.forEach((item, index) => {
        item.dataset.active = String(index === currentIndex);
      });
      if (prevBtn) prevBtn.disabled = currentIndex === 0;
      if (nextBtn) nextBtn.disabled = currentIndex >= totalItems - 1;
    }

    function goTo(index: number) {
      currentIndex = Math.max(0, Math.min(index, totalItems - 1));
      const itemWidth = (items[0] as HTMLElement).offsetWidth + 24;
      track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
      updateSlide();
    }

    prevBtn?.addEventListener("click", () => goTo(currentIndex - 1));
    nextBtn?.addEventListener("click", () => goTo(currentIndex + 1));

    // Touch/slide support
    let startX = 0;
    let isDragging = false;
    track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    }, { passive: true });
    track.addEventListener("touchend", (e) => {
      if (!isDragging) return;
      const diff = e.changedTouches[0].clientX - startX;
      if (Math.abs(diff) > 50) {
        goTo(currentIndex + (diff < 0 ? 1 : -1));
      }
      isDragging = false;
    }, { passive: true });

    // Keyboard support
    container.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") goTo(currentIndex + 1);
      if (e.key === "ArrowLeft") goTo(currentIndex - 1);
    });

    // Dots
    if (dotsContainer) {
      dotsContainer.innerHTML = Array.from(items).map((_, i) => `<span class="carousel-dot${i === 0 ? ' active' : ''}" data-dot="${i}"></span>`).join('');
      dotsContainer.querySelectorAll<HTMLElement>("[data-dot]").forEach((dot) => {
        dot.addEventListener("click", () => goTo(Number(dot.dataset.dot)));
      });
    }

    // Auto-play
    const autoPlayInterval = setInterval(() => {
      if (!container.matches(':hover')) {
        goTo((currentIndex + 1) % totalItems);
      }
    }, 5000);

    // Cleanup on page unload
    window.addEventListener("unload", () => clearInterval(autoPlayInterval));

    updateSlide();
  });
}

/* ─── Tabs ────────────────────────────────────────────────────────────── */
export function initTabs(): void {
  document.querySelectorAll<HTMLElement>("[data-tabs]").forEach((container) => {
    const triggers = container.querySelectorAll<HTMLElement>("[data-tab-trigger]");
    const panels = container.querySelectorAll<HTMLElement>("[data-tab-panel]");

    triggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        const index = trigger.dataset.tabTrigger;
        triggers.forEach((t) => t.setAttribute("aria-selected", "false"));
        panels.forEach((p) => p.style.display = "none");
        trigger.setAttribute("aria-selected", "true");
        const panel = container.querySelector<HTMLElement>(`[data-tab-panel="${index}"]`);
        if (panel) panel.style.display = "block";
      });
    });
  });
}

/* ─── Header scroll behaviour ─────────────────────────────────────────── */
export function initHeaderScroll(): void {
  const header = document.getElementById("site-header");
  if (!header) return;
  const update = () => {
    header.dataset.scrolled = window.scrollY > 8 ? "true" : "false";
  };
  update();
  window.addEventListener("scroll", update, { passive: true });
}

/* ─── Mobile nav toggle ───────────────────────────────────────────────── */
export function initMobileNav(): void {
  const drawer = document.getElementById("mobile-nav");
  if (!drawer) return;
  const toggles = document.querySelectorAll<HTMLButtonElement>("[data-action='toggle-mobile-nav']");
  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const isOpen = drawer.dataset.open === "true";
      drawer.dataset.open = isOpen ? "false" : "true";
      drawer.setAttribute("aria-hidden", isOpen ? "true" : "false");
      btn.setAttribute("aria-expanded", isOpen ? "false" : "true");
      document.body.style.overflow = isOpen ? "" : "hidden";
    });
  });
}

/* ─── Password reveal ─────────────────────────────────────────────────── */
export function initPasswordToggles(): void {
  document.addEventListener("click", (e) => {
    const target = e.target as HTMLElement | null;
    if (!target) return;
    const btn = target.closest<HTMLButtonElement>("[data-action='toggle-password']");
    if (!btn) return;
    const id = btn.dataset.target;
    if (!id) return;
    const input = document.getElementById(id) as HTMLInputElement | null;
    if (!input) return;
    const isHidden = input.type === "password";
    input.type = isHidden ? "text" : "password";
    btn.setAttribute("aria-label", isHidden ? "Hide password" : "Show password");
  });
}