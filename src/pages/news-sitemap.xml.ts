import type { APIRoute } from 'astro';
import { articlesSortedByDate, articleUrl, SITE } from '../data/articles';

// Google News sitemap — only articles published within the last 48 hours.
// Submit via Search Console > Sitemaps once the publication is approved for Google News.

const NEWS_WINDOW_MS = 48 * 60 * 60 * 1000;

export const GET: APIRoute = () => {
  const cutoff = Date.now() - NEWS_WINDOW_MS;
  const recent = articlesSortedByDate().filter((a) => new Date(a.publishDate).getTime() >= cutoff);

  const urls = recent
    .map((a) => {
      const pubDate = new Date(a.publishDate).toISOString();
      const safeTitle = a.title.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
      return `  <url>
    <loc>${articleUrl(a.slug)}</loc>
    <news:news>
      <news:publication>
        <news:name>${SITE.name}</news:name>
        <news:language>${SITE.language}</news:language>
      </news:publication>
      <news:publication_date>${pubDate}</news:publication_date>
      <news:title>${safeTitle}</news:title>
    </news:news>
  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls}
</urlset>
`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
