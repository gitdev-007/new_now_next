/* ============================================================================
 * LayoverX Icon set
 * Hand-picked, brand-aligned Lucide-compatible SVG strings.
 * Tree-shakable: import only what you use.
 * ========================================================================== */

type IconName =
  | "plane" | "clock" | "users" | "search" | "map-pin" | "menu" | "x"
  | "chevron-down" | "chevron-right" | "chevron-left" | "arrow-right"
  | "check" | "check-circle" | "alert-circle" | "info" | "shield"
  | "star" | "heart" | "wifi" | "coffee" | "car" | "bed" | "utensils"
  | "sparkles" | "globe" | "calendar" | "phone" | "mail" | "eye"
  | "eye-off" | "sun" | "moon" | "zap" | "headphones" | "gamepad-2"
  | "camera" | "music" | "briefcase" | "package" | "credit-card"
  | "building" | "mountain" | "waves" | "leaf" | "flame" | "crown" | "plus";

const SVG_OPEN = `<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">`;
const SVG_CLOSE = `</svg>`;

const PATHS: Record<IconName, string> = {
  "plane": `<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>`,
  "clock": `<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>`,
  "users": `<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>`,
  "search": `<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>`,
  "map-pin": `<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>`,
  "menu": `<line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="18" y2="18"/>`,
  "x": `<path d="M18 6 6 18"/><path d="m6 6 12 12"/>`,
  "chevron-down": `<polyline points="6 9 12 15 18 9"/>`,
  "chevron-right": `<polyline points="9 18 15 12 9 6"/>`,
  "chevron-left": `<polyline points="15 18 9 12 15 6"/>`,
  "arrow-right": `<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>`,
  "check": `<polyline points="20 6 9 17 4 12"/>`,
  "check-circle": `<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>`,
  "alert-circle": `<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/>`,
  "info": `<circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="16" y2="12"/><line x1="12" x2="12.01" y1="8" y2="8"/>`,
  "shield": `<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>`,
  "star": `<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>`,
  "heart": `<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>`,
  "wifi": `<path d="M5 13a10 10 0 0 1 14 0"/><path d="M8.5 16.5a5 5 0 0 1 7 0"/><path d="M2 8.82a15 15 0 0 1 20 0"/><line x1="12" x2="12.01" y1="20" y2="20"/>`,
  "coffee": `<path d="M17 8h1a4 4 0 0 1 0 8h-1"/><path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4Z"/><line x1="6" x2="6" y1="2" y2="4"/><line x1="10" x2="10" y1="2" y2="4"/><line x1="14" x2="14" y1="2" y2="4"/>`,
  "car": `<path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/>`,
  "bed": `<path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/>`,
  "utensils": `<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>`,
  "sparkles": `<path d="M12 3l1.9 5.7L19 10l-5.1 1.4L12 17l-1.9-5.6L5 10l5.1-1.3L12 3z"/><path d="M19 17l.8 2.4L22 20l-2.2.6L19 23l-.8-2.4L16 20l2.2-.6.8-2.4z"/><path d="M5 4l.6 1.8L7 6l-1.4.4L5 8l-.6-1.6L3 6l1.4-.4z"/>`,
  "globe": `<circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>`,
  "calendar": `<rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/>`,
  "phone": `<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>`,
  "mail": `<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>`,
  "eye": `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>`,
  "eye-off": `<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>`,
  "sun": `<circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/>`,
  "moon": `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`,
  "zap": `<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>`,
  "headphones": `<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>`,
  "gamepad-2": `<line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258A4 4 0 0 0 17.32 5z"/>`,
  "camera": `<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>`,
  "music": `<path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>`,
  "briefcase": `<rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>`,
  "package": `<path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/>`,
  "credit-card": `<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>`,
  "building": `<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01"/><path d="M16 6h.01"/><path d="M12 6h.01"/><path d="M12 10h.01"/><path d="M12 14h.01"/><path d="M16 10h.01"/><path d="M16 14h.01"/><path d="M8 10h.01"/><path d="M8 14h.01"/>`,
  "mountain": `<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>`,
  "waves": `<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>`,
  "leaf": `<path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c1.4 9.3 -2 14.47-8.2 17.04"/><path d="M2 21c0-3 1.85-5.36 5.08-6"/>`,
  "plus": `<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>`,
  "flame": `<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>`,
  "crown": `<path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87l4.997-2.94a.5.5 0 0 1 .776.416v3.953a3 3 0 0 1-.892 2.121L19 14.5V19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4.5l-1.27-1.078A3 3 0 0 1 2.838 9.301V5.348a.5.5 0 0 1 .776-.416L8.61 8.87l2.952-5.604Z"/>`,
};

export type IconOptions = {
  size?: number | string;
  className?: string;
  title?: string;
};

export function icon(name: IconName, options: IconOptions = {}): string {
  const { size = 20, className, title } = options;
  const svg = SVG_OPEN.replace(/{size}/g, String(size)) + PATHS[name] + SVG_CLOSE;
  const cls = className ? ` class="${className}"` : "";
  const aria = title ? ` role="img" aria-label="${title}"` : "";
  return svg.replace(/^<svg /, `<svg${cls}${aria} `);
}

export const ICONS = {
  plane: (o?: IconOptions) => icon("plane", o),
  clock: (o?: IconOptions) => icon("clock", o),
  users: (o?: IconOptions) => icon("users", o),
  search: (o?: IconOptions) => icon("search", o),
  mapPin: (o?: IconOptions) => icon("map-pin", o),
  menu: (o?: IconOptions) => icon("menu", o),
  x: (o?: IconOptions) => icon("x", o),
  chevronDown: (o?: IconOptions) => icon("chevron-down", o),
  chevronRight: (o?: IconOptions) => icon("chevron-right", o),
  chevronLeft: (o?: IconOptions) => icon("chevron-left", o),
  arrowRight: (o?: IconOptions) => icon("arrow-right", o),
  check: (o?: IconOptions) => icon("check", o),
  checkCircle: (o?: IconOptions) => icon("check-circle", o),
  alertCircle: (o?: IconOptions) => icon("alert-circle", o),
  info: (o?: IconOptions) => icon("info", o),
  shield: (o?: IconOptions) => icon("shield", o),
  star: (o?: IconOptions) => icon("star", o),
  heart: (o?: IconOptions) => icon("heart", o),
  wifi: (o?: IconOptions) => icon("wifi", o),
  coffee: (o?: IconOptions) => icon("coffee", o),
  car: (o?: IconOptions) => icon("car", o),
  bed: (o?: IconOptions) => icon("bed", o),
  utensils: (o?: IconOptions) => icon("utensils", o),
  sparkles: (o?: IconOptions) => icon("sparkles", o),
  globe: (o?: IconOptions) => icon("globe", o),
  calendar: (o?: IconOptions) => icon("calendar", o),
  phone: (o?: IconOptions) => icon("phone", o),
  mail: (o?: IconOptions) => icon("mail", o),
  eye: (o?: IconOptions) => icon("eye", o),
  eyeOff: (o?: IconOptions) => icon("eye-off", o),
  sun: (o?: IconOptions) => icon("sun", o),
  moon: (o?: IconOptions) => icon("moon", o),
  zap: (o?: IconOptions) => icon("zap", o),
  headphones: (o?: IconOptions) => icon("headphones", o),
  gamepad: (o?: IconOptions) => icon("gamepad-2", o),
  camera: (o?: IconOptions) => icon("camera", o),
  music: (o?: IconOptions) => icon("music", o),
  briefcase: (o?: IconOptions) => icon("briefcase", o),
  package: (o?: IconOptions) => icon("package", o),
  creditCard: (o?: IconOptions) => icon("credit-card", o),
  building: (o?: IconOptions) => icon("building", o),
  mountain: (o?: IconOptions) => icon("mountain", o),
  waves: (o?: IconOptions) => icon("waves", o),
  leaf: (o?: IconOptions) => icon("leaf", o),
  flame: (o?: IconOptions) => icon("flame", o),
  crown: (o?: IconOptions) => icon("crown", o),
  plus: (o?: IconOptions) => icon("plus", o),
};

export type { IconName };