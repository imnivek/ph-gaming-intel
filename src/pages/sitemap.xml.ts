import type { APIRoute } from 'astro';
import { articles, articleUrl, CATEGORIES, SITE } from '../data/articles';

const priorityByCategory: Record<string, string> = {
  Longread: '0.9',
  Analysis: '0.8',
  News: '0.8',
  Guide: '0.7',
};

const changefreqByCategory: Record<string, string> = {
  News: 'weekly',
  Analysis: 'monthly',
  Longread: 'monthly',
  Guide: 'monthly',
};

export const GET: APIRoute = () => {
  const today = new Date().toISOString().slice(0, 10);

  const urls = [
    `  <url>
    <loc>${SITE.url}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>`,
    `  <url>
    <loc>${SITE.url}/author/${SITE.author.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`,
    `  <url>
    <loc>${SITE.url}/tools/betting-odds-calculator</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
    `  <url>
    <loc>${SITE.url}/tools/responsible-gambling-self-assessment</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
    `  <url>
    <loc>${SITE.url}/tools/free-bet-value-calculator</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
    `  <url>
    <loc>${SITE.url}/tools/odds-format-converter</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
    `  <url>
    <loc>${SITE.url}/tools/parlay-margin-calculator</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
    `  <url>
    <loc>${SITE.url}/tools/responsible-gambling-budget-planner</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
    ...CATEGORIES.map(
      (c) => `  <url>
    <loc>${SITE.url}/${c.slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`,
    ),
    ...articles.map(
      (a) => `  <url>
    <loc>${articleUrl(a.slug)}</loc>
    <lastmod>${a.publishDate}</lastmod>
    <changefreq>${changefreqByCategory[a.category] || 'monthly'}</changefreq>
    <priority>${priorityByCategory[a.category] || '0.7'}</priority>
  </url>`,
    ),
  ].join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
