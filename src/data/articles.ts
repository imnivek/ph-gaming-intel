// Central registry for all articles.
// Single source of truth — sitemap, llms.txt, RSS feed all derive from here.
// When adding a new article: create the .astro page AND add an entry here.

export type ArticleCategory = 'News' | 'Analysis' | 'Guide' | 'Longread';

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  category: ArticleCategory;
  publishDate: string;
  heroImage: string;
  readTime: string;
  tags?: string[];
  featured?: boolean;
}

export const SITE = {
  url: 'https://phgamingintel.com',
  name: 'PH Gaming Intel',
  tagline: 'Philippines & Southeast Asia Gaming Industry Intelligence',
  description: 'Daily news, regulatory analysis, and longform reporting on PAGCOR, integrated resorts, online gaming licensing, and the post-POGO Southeast Asian gaming landscape.',
  language: 'en',
  author: {
    name: 'Vivian Yu',
    slug: 'vivian-yu',
    title: 'Editor-in-Chief',
    bio: 'Vivian covers gaming regulation and policy across the Philippines and Southeast Asia. She previously reported on fintech and digital economy for BusinessWorld and has covered the POGO-to-PIGO transition since 2024. Based in Manila.',
    email: 'editorial@phgamingintel.com',
  },
} as const;

export const articles: ArticleMeta[] = [
  {
    slug: 'pasay-to-sihanoukville-worker-migration',
    title: "From Pasay to Sihanoukville: A POGO Worker's Migration",
    description: "When the Philippine offshore gaming industry was shut down in 2024, the buildings emptied. The workers had to go somewhere. A reconstructed account of one path from Manila to a compound on the Cambodian coast — and what the journey reveals about a regional labor market in transition.",
    category: 'Longread',
    publishDate: '2026-05-27',
    heroImage: '/hero/pasay-to-sihanoukville-worker-migration.png',
    readTime: '22 min read',
    tags: ['POGO Tracker', 'Labor', 'Cambodia', 'Migration'],
    featured: true,
  },
  {
    slug: 'senate-bill-2580-pagcor-reform-failed',
    title: "Senate Bill 2580 in Plain English: The PAGCOR Reform That Wasn't",
    description: 'Before Senate Bill 2814 became the leading proposal to restructure PAGCOR, an earlier bill — SB 2580 — tried to do something similar and quietly died in committee. Understanding why it failed explains the shape of the reform that replaced it.',
    category: 'Analysis',
    publishDate: '2026-05-27',
    heroImage: '/hero/senate-bill-2580-pagcor-reform-failed.png',
    readTime: '12 min read',
    tags: ['Regulation', 'PAGCOR', 'Legislation'],
  },
  {
    slug: 'why-cambodia-won-pogo-refugees',
    title: 'Why Cambodia Won the POGO Refugees: A Geopolitical Read',
    description: 'When the Philippines shut down POGOs in 2024, the displaced operators had options. Vietnam was closed. Myanmar was burning. Laos was too small. Cambodia opened a door — and built a three-tier licensing framework around it. The geopolitics behind a regional rebalancing.',
    category: 'Analysis',
    publishDate: '2026-05-26',
    heroImage: '/hero/why-cambodia-won-pogo-refugees-geopolitical.png',
    readTime: '14 min read',
    tags: ['POGO Tracker', 'Regulation', 'Cambodia', 'Geopolitics'],
  },
  {
    slug: 'gcash-casino-partnerships-q2-2026',
    title: 'GCash Casino Partnerships Hit 47 in Q2 2026 as Cashless Push Accelerates',
    description: "GCash's integrations with PAGCOR-licensed gaming operators have grown to 47, with the e-wallet now embedded in nearly every major PIGO and e-Games platform. The pace of integration is reshaping how Filipino players fund accounts — and how regulators monitor the flow.",
    category: 'News',
    publishDate: '2026-05-26',
    heroImage: '/hero/gcash-casino-partnerships-q2-2026.png',
    readTime: '7 min read',
    tags: ['News', 'Regulation', 'Payments', 'GCash'],
  },
  {
    slug: 'manila-bay-4am-ir-workers',
    title: 'Manila Bay at 4 AM: The Hidden Shift of IR Workers',
    description: 'When the high rollers leave and the floor lights dim, a different kind of labor begins. The human infrastructure behind a PHP 44.52 billion quarterly economy.',
    category: 'Longread',
    publishDate: '2026-05-25',
    heroImage: '/hero/manila-bay-4am-hidden-shift-ir-workers.png',
    readTime: '18 min read',
    tags: ['Labor', 'Integrated Resorts', 'Entertainment City'],
  },
  {
    slug: 'pigo-vs-egames-regulatory-maze',
    title: 'PIGO vs e-Games: A Regulatory Maze, Mapped',
    description: 'The Philippines has two parallel online gaming license systems, both administered by the same regulator. How they differ, where they overlap, and why the confusion costs operators millions and leaves players unprotected.',
    category: 'Analysis',
    publishDate: '2026-05-25',
    heroImage: '/hero/pigo-vs-egames-regulatory-maze-mapped-2026.png',
    readTime: '16 min read',
    tags: ['Regulation', 'PAGCOR', 'PIGO', 'e-Games'],
  },
  {
    slug: 'pagcor-licensed-casinos-guide-2026',
    title: 'Best PAGCOR Licensed Online Casinos Philippines 2026',
    description: 'How to verify a Philippine online casino license, what PAGCOR-licensed operators look like in 2026, and what player protections come with each license type.',
    category: 'Guide',
    publishDate: '2026-05-25',
    heroImage: '/hero/best-pagcor-licensed-online-casinos-philippines-2026.png',
    readTime: '15 min read',
    tags: ['Guide', 'PAGCOR', 'Player Protection'],
  },
  {
    slug: 'cambodia-gaming-license-pogo',
    title: 'Cambodia Gaming License Framework: Three-Tier System Targets Former POGO Operators',
    description: "Cambodia's new three-tier licensing framework signals Southeast Asia's next regulatory battleground as displaced POGO operators seek new jurisdictions.",
    category: 'News',
    publishDate: '2026-05-24',
    heroImage: '/hero/cambodia-gaming-license-framework-pogo-operators-2026.png',
    readTime: '8 min read',
    tags: ['News', 'POGO Tracker', 'Cambodia', 'Regulation'],
  },
  {
    slug: 'pagcor-privatization-bill',
    title: 'PAGCOR Privatization Bill SB 2814 Advances in Senate Committee',
    description: "SB 2814 proposes separating PAGCOR's role as regulator from operator, marking the most significant restructuring proposal in the agency's 47-year history.",
    category: 'News',
    publishDate: '2026-05-24',
    heroImage: '/hero/pagcor-privatization-bill-senate-committee-2026.png',
    readTime: '9 min read',
    tags: ['News', 'Regulation', 'PAGCOR', 'Legislation'],
  },
  {
    slug: 'bloomberry-q1-2026-solaire',
    title: 'Bloomberry Resorts Posts 18% Revenue Drop in Q1 2026 as VIP Weakness Deepens',
    description: "Solaire operator reports PHP14.2 billion in net revenue with VIP rolling chip volume down 26%, but management reaffirms Solaire North's Q4 2027 soft opening timeline and PHP55 billion project budget.",
    category: 'News',
    publishDate: '2026-05-23',
    heroImage: '/hero/bloomberry-resorts-q1-2026-revenue-solaire.png',
    readTime: '8 min read',
    tags: ['News', 'Earnings', 'Bloomberry', 'Solaire'],
  },
  {
    slug: 'altenar-arenaplus-sportsbook',
    title: 'Altenar Powers DigiPlus ArenaPlus Sportsbook in the Philippines',
    description: 'Malta-based sportsbook technology provider Altenar partners with DigiPlus to power the ArenaPlus sports betting platform, expanding digital sports wagering in the Philippine market.',
    category: 'News',
    publishDate: '2026-05-21',
    heroImage: '/hero/altenar-digiplus-arenaplus-sportsbook-philippines-2026.png',
    readTime: '6 min read',
    tags: ['News', 'Sports Betting', 'DigiPlus', 'Altenar'],
  },
  {
    slug: 'okada-play-commercial-launch',
    title: 'Okada Play Commercial Launch: PhilWeb and Tiger Resort Go Digital',
    description: 'PhilWeb and Tiger Resort launch Okada Play, a new digital gaming platform bridging the gap between integrated resort floors and online accessibility.',
    category: 'News',
    publishDate: '2026-05-20',
    heroImage: '/hero/okada-play-commercial-launch-philweb-tiger-resort-2026.png',
    readTime: '7 min read',
    tags: ['News', 'Online Gaming', 'PhilWeb', 'Tiger Resort'],
  },
  {
    slug: 'philippine-ggr-falls-q1-2026-pagcor',
    title: 'Philippine GGR Falls 15.8% to $1.42bn in Q1 2026',
    description: 'Gross gaming revenue across the Philippine gaming sector dropped 15.8% year-on-year to $1.42 billion in the first quarter of 2026, raising questions about market trajectory.',
    category: 'News',
    publishDate: '2026-05-18',
    heroImage: '/hero/philippine-ggr-falls-q1-2026-pagcor.png',
    readTime: '7 min read',
    tags: ['News', 'GGR', 'PAGCOR', 'Market Data'],
  },
];

export function articleUrl(slug: string): string {
  return `${SITE.url}/articles/${slug}.html`;
}

export function articlesByCategory(category: ArticleCategory): ArticleMeta[] {
  return articles.filter((a) => a.category === category);
}

export function articlesSortedByDate(): ArticleMeta[] {
  return [...articles].sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}
