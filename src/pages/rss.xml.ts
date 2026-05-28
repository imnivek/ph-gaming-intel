import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { articlesSortedByDate, articleUrl, SITE } from '../data/articles';

export const GET: APIRoute = (context) =>
  rss({
    title: SITE.name,
    description: SITE.description,
    site: context.site ?? SITE.url,
    items: articlesSortedByDate().map((a) => ({
      title: a.title,
      pubDate: new Date(a.publishDate),
      description: a.description,
      link: articleUrl(a.slug),
      categories: [a.category, ...(a.tags ?? [])],
      author: `${SITE.author.email} (${SITE.author.name})`,
    })),
    customData: `<language>${SITE.language}</language>
    <copyright>Copyright ${new Date().getFullYear()} ${SITE.name}</copyright>
    <managingEditor>${SITE.author.email} (${SITE.author.name})</managingEditor>`,
  });
