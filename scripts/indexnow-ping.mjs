// IndexNow ping — submits all URLs in sitemap.xml to Bing/Yandex/Seznam.
// Reads the live sitemap.xml as the source of truth, so no manual URL list maintenance.
// Run after Cloudflare Pages has finished deploying (give it ~2 min after git push).

const HOST = 'phgamingintel.com';
const KEY = 'zrg25p7cyhjuo896fdwamt341klxnsqv';
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow';

async function main() {
  const sitemapRes = await fetch(SITEMAP_URL);
  if (!sitemapRes.ok) {
    console.error(`Failed to fetch sitemap: ${sitemapRes.status}`);
    process.exit(1);
  }
  const sitemapXml = await sitemapRes.text();
  const urls = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);

  if (urls.length === 0) {
    console.error('No URLs found in sitemap');
    process.exit(1);
  }

  console.log(`Submitting ${urls.length} URLs to IndexNow…`);

  const payload = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  });

  const body = await res.text();
  console.log(`IndexNow response: ${res.status} ${res.statusText}`);
  if (body) console.log(body);

  // IndexNow returns 200 (accepted) or 202 (accepted but no immediate processing).
  if (res.status === 200 || res.status === 202) {
    console.log('Submitted successfully.');
    process.exit(0);
  }
  console.error('IndexNow submission failed.');
  process.exit(1);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
