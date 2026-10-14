/**
 * Display icons for subject pages.
 *
 * Content files declare an `icon` name (see src/content/subjects/*.md), but the
 * templates used to collapse every value to one of two emoji. This map gives
 * each subject its own glyph and keeps the content files emoji-free.
 */

const ICONS: Record<string, string> = {
  book: '📖',
  globe: '🌍',
  cpu: '💻',
  calculator: '🧮',
  beaker: '⚗️',
  atom: '⚛️',
  text: '✍️',
  newspaper: '📰',
  flag: '🇵🇰',
  crescent: '☪️',
  scale: '⚖️',
  leaf: '🌱',
  graduation: '🎓',
  chart: '📊',
  users: '👥',
  megaphone: '📣',
  language: '🗣️',
  pen: '🖋️',
  flask: '🧪',
  earth: '🌏',
  brain: '🧠',
  code: '💻',
  gear: '⚙️',
  bolt: '⚡',
  building: '🏗️',
  landmark: '🏛️',
  scroll: '📜',
  briefcase: '💼',
  pill: '💊',
  dna: '🧬',
  car: '🚗',
  pickaxe: '⛏️',
  flame: '🔥',
  thought: '💭',
  satellite: '🛰️',
};

export function iconFor(name: string | undefined, fallback = '📚'): string {
  if (!name) return fallback;
  return ICONS[String(name).trim().toLowerCase()] ?? fallback;
}

/** Icons available to authors, for validation and docs. */
export const ICON_NAMES = Object.keys(ICONS);
