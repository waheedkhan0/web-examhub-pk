import { getCollection } from 'astro:content';

/**
 * Sitemap generated from the content collections at build time.
 *
 * Replaces the sitemap-index.xml / sitemap-0.xml files that the disabled
 * @astrojs/sitemap integration used to emit — robots.txt pointed at URLs that
 * no longer existed. Building it from the collections means it can never list a
 * page that was deleted, or miss a page that was added.
 */

const SITE = (import.meta.env?.SITE_URL || 'https://examhub.pk').replace(/\/+$/, '');

const STATIC_PATHS = [
  { path: '/', priority: 1.0 },
  { path: '/mcqs', priority: 0.9 },
  { path: '/practice', priority: 0.9 },
  { path: '/jobs', priority: 0.8 },
  { path: '/subjects', priority: 0.8 },
  { path: '/guides', priority: 0.8 },
  { path: '/exams', priority: 0.8 },
  { path: '/blog', priority: 0.7 },
  { path: '/about', priority: 0.4 },
  { path: '/contact', priority: 0.4 },
  { path: '/privacy-policy', priority: 0.3 },
  { path: '/terms', priority: 0.3 },
  { path: '/disclaimer', priority: 0.3 },
];

function isoDate(value: unknown): string | undefined {
  const raw = typeof value === 'string' ? value : undefined;
  if (!raw) return undefined;
  const date = new Date(raw);
  return Number.isNaN(date.getTime()) ? undefined : date.toISOString().split('T')[0];
}

function entry(loc: string, lastmod: string | undefined, priority: number, changefreq = 'monthly') {
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    lastmod ? `    <lastmod>${lastmod}</lastmod>` : null,
    `    <changefreq>${changefreq}</changefreq>`,
    `    <priority>${priority.toFixed(1)}</priority>`,
    '  </url>',
  ]
    .filter(Boolean)
    .join('\n');
}

export async function GET() {
  const [guides, blog, subjects, exams, mcqs] = await Promise.all([
    getCollection('guides'),
    getCollection('blog'),
    getCollection('subjects'),
    getCollection('exams'),
    getCollection('mcqs'),
  ]);

  const urls = [
    ...STATIC_PATHS.map((s) => entry(`${SITE}${s.path}`, undefined, s.priority)),
    ...mcqs.map((m) =>
      entry(`${SITE}/mcqs/${m.data.subject}/${m.data.topic}`, isoDate(m.data.updatedDate), 0.9, 'weekly'),
    ),
    ...subjects.map((s) => entry(`${SITE}/subjects/${s.slug}`, isoDate(s.data.updatedDate), 0.8)),
    ...guides.map((g) => entry(`${SITE}/guides/${g.slug}`, isoDate(g.data.updatedDate ?? g.data.publishDate), 0.7)),
    ...exams.map((e) => entry(`${SITE}/exams/${e.slug}`, isoDate(e.data.updatedDate), 0.7)),
    ...blog.map((b) => entry(`${SITE}/blog/${b.slug}`, isoDate(b.data.updatedDate ?? b.data.publishDate), 0.6, 'weekly')),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>
`;

  return new Response(xml, { headers: { 'Content-Type': 'application/xml' } });
}
