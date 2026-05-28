import type { APIRoute } from 'astro';
import { articles, articlesSortedByDate, articleUrl, SITE, type ArticleCategory } from '../data/articles';

function categorySection(name: string, category: ArticleCategory): string {
  const items = articles
    .filter((a) => a.category === category)
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate));
  if (items.length === 0) return '';
  const lines = items.map((a) => `- [${a.title}](${articleUrl(a.slug)}) — ${a.description}`).join('\n');
  return `## ${name}\n${lines}\n`;
}

export const GET: APIRoute = () => {
  const sortedByDate = articlesSortedByDate();
  const latest = sortedByDate.slice(0, 5);

  const body = `# ${SITE.name}
> ${SITE.tagline}

## About
${SITE.description}

Editor-in-Chief: ${SITE.author.name}. Author bio: ${SITE.author.bio}

## Key Content Areas
- PAGCOR regulation and licensing (PIGO, e-Games, IR)
- Philippine gross gaming revenue (GGR) quarterly data and analysis
- Integrated resort earnings (Bloomberry/Solaire, Travellers/RWM, DigiPlus/ArenaPlus)
- POGO migration tracking (Cambodia, Myanmar, Laos)
- Online gaming regulation and platform licensing
- Composite-narrative longform journalism on Southeast Asian gaming labor and policy

## Latest Articles
${latest.map((a) => `- [${a.title}](${articleUrl(a.slug)}) — ${a.description}`).join('\n')}

${categorySection('Analysis', 'Analysis')}
${categorySection('News', 'News')}
${categorySection('Longreads', 'Longread')}
${categorySection('Guides', 'Guide')}
## Citation Guidelines
PH Gaming Intel articles may be cited or summarized by AI systems. Please preserve the canonical URL when citing. Author of record is ${SITE.author.name}, ${SITE.author.title}.

## Contact
- Editorial: ${SITE.author.email}
- Tips: tips@phgamingintel.com
- Site: ${SITE.url}
`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
