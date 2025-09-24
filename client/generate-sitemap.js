import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import admin from "firebase-admin";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = process.env.NEXT_FIREBASE_CLIENT_URL || "https://inkaer.com";

// ✅ Parse Firebase service account key from GitHub secret
let serviceAccount = {};
if (process.env.SERVICE_ACCOUNT_KEY_FIREBASE) {
  serviceAccount = JSON.parse(process.env.SERVICE_ACCOUNT_KEY_FIREBASE);

  // Fix private key formatting if it's on one line
  if (serviceAccount.private_key) {
    serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");
  }
}

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

// Static routes
const STATIC_ROUTES = [
  "/", "/about", "/careers", "/blog", "/contact", "/terms", "/privacy",
];

// Excluded routes
const EXCLUDED = new Set([
  "/sign-in", "/sign-up", "/forgot-password", "/reset-password", "/unauthorized",
]);

// ISO date
const isoDate = (d = new Date()) => d.toISOString().split("T")[0];

function urlEntry(loc, lastmod) {
  return `
  <url>
    <loc>${loc}</loc>
    <lastmod>${lastmod}</lastmod>
  </url>`;
}

// ✅ Fetch blog posts
async function getBlogRoutes() {
  const snap = await db.collection("posts").get();
  return snap.docs.map((doc) => {
    const data = doc.data();
    const slug = data.slug || data.title?.toLowerCase().replace(/\s+/g, "-") || "post";
    return `/blog/${doc.id}/${slug}`;
  });
}

// ✅ Fetch jobs
async function getApplicationRoutes() {
  const snap = await db.collection("applications").get();
  return snap.docs.map((doc) => `/application?jobId=${doc.id}`);
}

async function generateSitemap() {
  const today = isoDate();

  const [blogRoutes, applicationRoutes] = await Promise.all([
    getBlogRoutes(),
    getApplicationRoutes(),
  ]);

  const allRoutes = [
    ...STATIC_ROUTES,
    ...blogRoutes,
    ...applicationRoutes,
  ].filter((r) => !EXCLUDED.has(r));

  const urls = allRoutes.map((route) => urlEntry(`${BASE_URL}${route}`, today)).join("\n");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  const publicDir = path.join(__dirname, "public");
  if (!fs.existsSync(publicDir)) fs.mkdirSync(publicDir, { recursive: true });

  fs.writeFileSync(path.join(publicDir, "sitemap.xml"), sitemap.trim(), "utf8");
  console.log("✅ Sitemap generated at client/public/sitemap.xml");
}

generateSitemap().catch((err) => {
  console.error("❌ Failed to generate sitemap:", err);
  process.exit(1);
});
