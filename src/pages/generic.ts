/* ============================================================================
 * LayoverX Generic page renderer
 * Used for pages that have not yet been authored in full.
 * Renders a polished "in development" state with the same shell.
 * ========================================================================== */

import { bootApp } from "../lib/app";
import { ICONS } from "../lib/icons";

export interface PageOptions {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  iconName?: "sparkles" | "crown" | "globe" | "plane" | "zap" | "package" | "camera" | "building" | "shield";
  bullets?: string[];
}

export function renderPage(options: PageOptions): string {
  const icon = options.iconName ?? "sparkles";
  const bullets = options.bullets ?? [
    "Designed mobile-first with strict performance budgets",
    "Accessible, semantic markup with full keyboard support",
    "Connected to the LayoverX service catalogue API",
  ];

  return `
    <section class="section">
      <div class="container container-narrow">
        <div class="reveal" style="text-align: center;">
          ${options.eyebrow ? `<span class="eyebrow">${options.eyebrow}</span>` : ""}
          <div style="display: inline-grid; place-items: center; width: 72px; height: 72px; border-radius: 24px; background: var(--brand-50); color: var(--brand-700); margin-bottom: var(--space-5);">
            ${ICONS[icon]({ size: 32 })}
          </div>
          <h1 class="display-title" style="margin-bottom: var(--space-4);">${options.title}</h1>
          ${options.subtitle ? `<p class="text-body-lg" style="max-width: 56ch; margin-inline: auto;">${options.subtitle}</p>` : ""}
        </div>

        <div class="reveal" style="margin-top: var(--space-12);">
          <ul class="card card-elevated stack-3" style="list-style: none; padding: var(--space-6);">
            ${bullets.map((b) => `
              <li style="display: flex; gap: var(--space-3); align-items: flex-start;">
                <span class="badge badge-brand" style="flex-shrink: 0;">${ICONS.check({ size: 14 })}</span>
                <span class="text-body">${b}</span>
              </li>
            `).join("")}
          </ul>
        </div>

        <div class="reveal" style="margin-top: var(--space-8); text-align: center;">
          <a href="/index.html" class="btn btn-primary btn-lg">
            ${ICONS.arrowRight({ size: 18 })}
            <span>Back to home</span>
          </a>
        </div>
      </div>
    </section>
  `;
}

export function mountGeneric(options: PageOptions): void {
  const root = document.getElementById("main");
  if (!root) return;
  root.innerHTML = renderPage(options);
  bootApp();
}