import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";

const SITEMAP_URL = "https://yassgadri.github.io/cardio-web/sitemap.xml";

async function checkSitemap() {
  console.log("Fetching sitemap...");
  const res = await fetch(SITEMAP_URL);
  const xml = await res.text();

  const parsed = await parseStringPromise(xml);
  const urls = parsed.urlset.url.map((u) => u.loc[0]);

  console.log(`Found ${urls.length} URLs\n`);

  let ok = 0;
  let broken = 0;

  for (const url of urls) {
    try {
      const res = await fetch(url, { method: "HEAD" });

      if (res.status >= 200 && res.status < 400) {
        console.log(`✅ OK: ${url}`);
        ok++;
      } else {
        console.log(`❌ BROKEN (${res.status}): ${url}`);
        broken++;
      }
    } catch (err) {
      console.log(`❌ ERROR: ${url}`);
      broken++;
    }
  }

  console.log("\n--- RESULT ---");
  console.log(`OK: ${ok}`);
  console.log(`Broken: ${broken}`);
}

checkSitemap();
