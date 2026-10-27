/**
 * Utility to parse topic slugs into base series and part numbers.
 * Example: 'calendar-part-2' -> { base: 'calendar', part: 2 }
 * Example: 'water-supply-engineering' -> { base: 'water-supply-engineering', part: 1 }
 */
export function parseTopicSeries(slug: string): { base: string; part: number } {
  const match = slug.match(/^(.*)-part-(\d+)$/i);
  if (match) {
    return { base: match[1], part: parseInt(match[2], 10) };
  }
  return { base: slug, part: 1 };
}
