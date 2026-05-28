// Central registry for all articles.
// Single source of truth — sitemap, llms.txt, RSS feed, category pages derive from here.
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
  // Key Takeaways — 3 to 5 declarative, citation-ready facts.
  // Rendered as <aside class="article-tldr"> at the top of articles and
  // referenced by the SpeakableSpecification CSS selector.
  // Each item must be a complete standalone sentence (no pronouns referring to earlier items).
  tldr: string[];
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

export const CATEGORIES: { slug: string; label: ArticleCategory | 'Regulation' | 'POGO Tracker'; description: string; isTag?: boolean }[] = [
  { slug: 'news', label: 'News', description: 'Breaking news, market data, and regulatory updates from the Philippine and Southeast Asian gaming sector.' },
  { slug: 'analysis', label: 'Analysis', description: 'In-depth analysis of gaming regulation, market structure, and industry strategy.' },
  { slug: 'longreads', label: 'Longread', description: 'Composite-narrative longform reporting on gaming labor, policy, and the human side of the industry.' },
  { slug: 'guide', label: 'Guide', description: 'Practical guides to PAGCOR license verification, player protection, and the regulatory landscape for Philippine online gaming.' },
  { slug: 'regulation', label: 'Regulation', description: 'PAGCOR rulemaking, Senate bills, license frameworks, and AML compliance across PH gaming.', isTag: true },
  { slug: 'pogo-tracker', label: 'POGO Tracker', description: 'Where the displaced Philippine offshore gaming operators went, and what happened to the people who worked for them.', isTag: true },
];

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
    tldr: [
      "PAGCOR's pre-shutdown reporting counted approximately 32,000 direct Filipino employees in POGO-licensed operations before the 2024 ban.",
      "An estimated low single-digit thousands of Filipino workers followed displaced POGO operators across the regional gaming map after the shutdown, with Cambodia the dominant destination.",
      "The Department of Labor and Employment transition assistance program reached roughly 18,000 displaced POGO workers by mid-2025, but no central registry tracks the workers who relocated abroad.",
      "The PIGO and e-Games sector absorbed several thousand former POGO workers but employs significantly fewer staff per peso of revenue than POGOs did, leaving a structural labor capacity gap.",
    ],
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
    tldr: [
      'Senate Bill 2580 cleared an initial committee hearing in 2022 but never received a Senate floor vote and lapsed when the 19th Congress concluded.',
      'Four converging factors blocked SB 2580: defensive PAGCOR institutional response, fragmented industry positions, an unresolved constitutional question over chartered-corporation restructuring, and the 2022 presidential transition window.',
      'SB 2580 proposed corporatizing PAGCOR by splitting its regulatory and operator functions into two separate state entities with a three-year transition.',
      'Several SB 2580 provisions transferred substantially into the current SB 2814, including the license harmonization mandate and the strengthened AML and responsible gaming budget requirements.',
    ],
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
    tldr: [
      "Cambodia absorbed an estimated 18 to 22 of the approximately 41 PAGCOR-tracked POGO operator exits between 2024 and 2025, making it the dominant destination for the displaced industry.",
      "Three structural conditions made Cambodia the only viable destination: the 2020 Cambodian gaming law authorizing online licensing, vacated infrastructure from the post-2019 Sihanoukville crash, and Prime Minister Hun Manet's signal of political tolerance.",
      "Vietnam, Myanmar, and Laos each failed at least one of the three conditions: Vietnam lacks any online gaming licensing pathway, Myanmar's gaming sector operates outside national rule of law, and Laos has insufficient infrastructure scale.",
      "Cambodia's tier-3 online-international license is the direct regulatory analogue of the former PAGCOR POGO authorization, and nearly all relocated operators have applied under this tier.",
    ],
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
    tldr: [
      "GCash held active payment integrations with 47 PAGCOR-licensed gaming operators as of May 2026, up from approximately 32 at the close of Q4 2025.",
      "Integration coverage includes effectively all 12 PIGO licensees and 35 of the roughly 38 e-Games licensees in the Philippine market.",
      "Fully verified GCash accounts are permitted up to PHP100,000 daily for gaming-related transactions, with source-of-funds checks required for cumulative monthly deposits exceeding PHP500,000.",
      "DigiPlus Interactive is widely reported as GCash's highest-volume gaming partner, accounting for an estimated 35 to 40 percent of all e-wallet-to-casino transaction volume in the Philippine market.",
    ],
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
    tldr: [
      "Manila's Entertainment City employs approximately 32,000 direct staff across its four operational integrated resorts, plus 8,000 to 12,000 outsourced workers in cleaning, security, food prep, and maintenance.",
      "Entry-level IR positions pay PHP 16,770 to PHP 19,000 per month, only slightly above the Metro Manila minimum wage and significantly below comparable BPO industry positions.",
      "IR workers reported an average of 5.2 hours of sleep per night on work days, compared to 6.8 hours for Metro Manila workers overall, according to University of the Philippines research.",
      "Manila's licensed casinos generated PHP 44.52 billion in Q1 2026 gross gaming revenue, accounting for 50.83 percent of total Philippine GGR.",
    ],
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
    tldr: [
      "PIGO (Philippine Inland Gaming Operator) licenses require PHP100 million minimum capital and PHP20 million annual fees and authorize sports betting plus full-suite online gaming.",
      "e-Games licenses require PHP25 million minimum capital and PHP5 million annual fees and focus on electronic gaming and virtual casino products.",
      "Approximately 12 operators hold PIGO licenses and 38 hold e-Games licenses, with both frameworks administered by PAGCOR but governed by different regulatory philosophies.",
      "Sports betting is exclusively authorized under PIGO licenses, accounting for an estimated 35 percent of PIGO gross gaming revenue and driving the framework's 140 percent year-on-year growth in Q1 2026.",
    ],
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
    tldr: [
      "PAGCOR maintains the only authoritative list of licensed online gaming operators in the Philippines, published quarterly on the regulator's official website.",
      "Two license types currently authorize online gaming in the Philippines: PIGO for sports betting plus full-suite online gaming, and e-Games for electronic and virtual casino products.",
      "PAGCOR-licensed operators are required to implement deposit limits, self-exclusion mechanisms, and source-of-funds verification for high-volume players under updated 2024 responsible gaming rules.",
      "Verifying a license requires matching three data points: the operator's registered corporate name, the PAGCOR license number, and the website URL listed on the official PAGCOR licensee registry.",
    ],
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
    tldr: [
      "Cambodia's General Department of Gaming (GCG) finalized a three-tier gaming licensing framework across 2024 and 2025 covering land-based casinos, online-domestic gaming, and online-international gaming.",
      "The tier-3 online-international license is the direct regulatory analogue of the discontinued PAGCOR POGO authorization and is the tier most relevant to relocated operators.",
      "Cambodia's framework requires tier-3 licensees to host operations on Cambodian infrastructure while prohibiting solicitation of Cambodian residents.",
      "The Bavet-Vietnam border and Poipet-Thailand border special economic zones have absorbed significant POGO-era infrastructure and now host much of Cambodia's relocated online gaming sector.",
    ],
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
    tldr: [
      "Senate Bill 2814 proposes the creation of a new Philippine Gaming Commission as a regulator-only entity, with PAGCOR's operator functions transferred to a separate state-owned corporation.",
      "The bill cleared the Senate Committee on Games in May 2026 and now advances to plenary debate, representing the most significant PAGCOR restructuring proposal since the agency's 1976 charter.",
      "SB 2814 mandates the new Philippine Gaming Commission to harmonize PIGO and e-Games licenses into a unified framework within 24 months of enactment.",
      "PAGCOR currently functions as both regulator and operator of the Casino Filipino properties, a structural conflict that SB 2814 explicitly seeks to eliminate.",
    ],
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
    tldr: [
      "Bloomberry Resorts reported PHP14.2 billion in Q1 2026 net revenue, an 18 percent year-on-year decline driven primarily by weakness in the VIP segment.",
      "VIP rolling chip volume at Solaire Resort & Casino dropped 26 percent year-on-year in Q1 2026, the steepest quarterly decline since the post-pandemic recovery.",
      "Management reaffirmed the Solaire North project's Q4 2027 soft opening timeline and PHP55 billion total budget despite the broader VIP market headwinds.",
      "Mass-market gaming revenue at Solaire Manila remained broadly stable, partially offsetting the VIP weakness in the Q1 2026 results.",
    ],
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
    tldr: [
      "Malta-based sportsbook technology provider Altenar signed a multi-year B2B agreement to power DigiPlus Interactive's ArenaPlus sportsbook platform in the Philippines.",
      "ArenaPlus operates under DigiPlus's PIGO license, the Philippine regulatory framework that exclusively authorizes online sports betting.",
      "The partnership expands Altenar's Asia-Pacific footprint and positions ArenaPlus to scale its sports betting product offering in a domestic market growing 140 percent year-on-year.",
      "DigiPlus is the largest publicly traded gaming operator on the Philippine Stock Exchange and operates the BingoPlus and PeryaGame platforms alongside ArenaPlus.",
    ],
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
    tldr: [
      "PhilWeb Corporation and Tiger Resort Asia jointly launched the Okada Play digital gaming platform in May 2026, extending the Okada Manila brand online.",
      "Okada Play operates under PhilWeb's e-Games license and offers electronic gaming products including slots, virtual table games, and live-dealer casino streams.",
      "The launch makes Okada Manila the third major integrated resort operator in the Philippines to deploy a branded online gaming platform, following Solaire and City of Dreams.",
      "PhilWeb's e-Games license authorizes the digital expansion but does not permit sports betting, which remains exclusively under PIGO authorization.",
    ],
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
    tldr: [
      "Philippine gross gaming revenue fell 15.8 percent year-on-year to USD 1.42 billion in Q1 2026, according to PAGCOR's quarterly disclosure.",
      "Manila's Entertainment City integrated resorts generated PHP 44.52 billion in Q1 2026 GGR, accounting for 50.83 percent of total national gaming revenue.",
      "The VIP rolling-chip segment posted the steepest declines across all operators, while mass-market and online gaming revenue remained comparatively resilient.",
      "PIGO sports betting revenue grew 140 percent year-on-year to PHP 8.7 billion, partially offsetting weakness in land-based VIP and e-Games segments.",
    ],
  },
];

export function articleUrl(slug: string): string {
  return `${SITE.url}/articles/${slug}.html`;
}

export function articlesByCategory(category: ArticleCategory): ArticleMeta[] {
  return articles
    .filter((a) => a.category === category)
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

export function articlesByTag(tag: string): ArticleMeta[] {
  return articles
    .filter((a) => a.tags?.includes(tag))
    .sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

export function articlesSortedByDate(): ArticleMeta[] {
  return [...articles].sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}

export function findArticle(slug: string): ArticleMeta | undefined {
  return articles.find((a) => a.slug === slug);
}
