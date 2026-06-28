# LayoverX Design & Engineering Audit

> Generated against the foundation slice shipped on 2026-06-28.
> Items marked **P0** block quality; **P1** visibly weaken it; **P2** are polish.

## 1. Visual hierarchy
- **P0** Hero headline is short and gives no product context.
- **P1** Stats strip floats without an enclosing surface — looks like stray numbers.
- **P2** Section titles need eyebrow + scope + descriptor rhythm.

## 2. Typography
- **P1** Single weight (Inter) is fine, but the *scale* is uneven (`fs-2xl=1.5rem` vs `fs-3xl=1.875rem`) — landing uses ad-hoc rem values.
- **P1** Quote/testimonial copy is too small (14px) for a hero-adjacent section.
- **P2** No `display-2xl` for hero — currently clamps to 4.5rem max, but Apple/Stripe-style heroes go to 5.5–6.5rem.

## 3. Spacing / layout
- **P1** Category cards have no inner padding rhythm — title vs description gap is 8px, looks cramped.
- **P1** Quick-search bar collapses awkwardly on tablets — grid template only handles 1 / 3-col.
- **P0** Hotel/restaurant/etc sector pages are stub-only ("in development"). Customers cannot complete the journey.

## 4. Card design
- **P1** Cards have no media. Travel sites sell through imagery — Airbnb, Booking, MakeMyTrip all lead with hero photos.
- **P1** Hover scale is `translateY(-4px)` — too subtle. Stripe/Linear hover is ~8–12px.
- **P1** No internal divider between body and footer — visual hierarchy unclear.

## 5. Buttons
- **P2** Primary button has no press-state lift; only color change.
- **P2** No icon-only button variant defined in CSS (icon-only buttons reuse `.btn`).

## 6. Inputs
- **P1** `select-wrap` chevron is a CSS pseudo-element with hardcoded border triangles — accessibility-unknown.
- **P1** No inline validation states (success / error).
- **P2** No search-input variant with prominent rounded-pill style.

## 7. Icons
- **P1** Icons are 24px but `btn-sm` height is 36px — visual weight is off-center.
- **P2** Stroke width is locked to 2 — Apple/Stripe use 1.5 for thinner feel on 16-20px icons.

## 8. Navigation
- **P1** No dropdown / mega-menu — category links are flat.
- **P1** Sticky header looks fine but lacks a visible divider when scrolled (uses opacity trick).
- **P2** "Plan My Layover" CTA visibility on mobile — hidden behind hamburger, not always reachable.

## 9. Footer
- **P1** No newsletter signup.
- **P1** No app store badges.
- **P1** No social proof / payment provider badges (Visa/MasterCard/UPI).

## 10. Accessibility
- **P1** Modal `close` button has no focus trap; tabbing exits the dialog.
- **P1** `<button>` elements inside the navbar dropdown are missing `aria-haspopup`/`aria-expanded` consistent style.
- **P2** Color contrast on `text-subtle` (#64748b on #f8fafc) = 4.55:1 — passes AA but not AAA.
- **P2** Skip link exists but is rendered via JS — first paint hides it.

## 11. Motion
- **P1** No carousel, no tabs, no accordion (only one FAQ) — missing primitives.
- **P1** No skeleton loader pattern shown to users.
- **P2** Reveal stagger only goes to 6 children; should be parameterised.

## 12. Sector pages
- **P0** Hotels, Restaurants, Spa, Gaming, Tours, Transfers are stub. Need:
  - Hero with sector color tint
  - Filter rail (price, rating, distance, amenities, vibe)
  - Results grid with real-feel cards
  - Empty / loading / error states

## 13. Planner
- **P0** Plan page is a stub. Flagship feature must:
  - Take flight details
  - Compute safe layover hours
  - Render drag-and-drop timeline
  - Show cart with totals

## 14. Code quality
- **P1** `accordion-item` uses `data-open` AND `<details>` — pick one. Currently double-controlled.
- **P1** `auth.ts` writes to localStorage with no migration/versioning strategy.

## Decisions to ship
1. Replace `<details>` with a true custom accordion primitive.
2. Add a real carousel, tabs, and skeleton components.
3. Build full sector pages (hotels + restaurants first as proof).
4. Build the planner as a proper timeline editor.
5. Rebuild footer with newsletter, app badges, payment badges.
6. Add focus trap to modal.
7. Switch reveal-stagger to take `--stagger-step` custom property.
8. Lift card hover to `-8px` with scale `1.005` and media zoom 1.06.
9. Refine hero to 6rem display headline with gradient text accent on key word.
10. Add per-sector accent rules that tint category icons and link hover (no full theme swap, just hue).