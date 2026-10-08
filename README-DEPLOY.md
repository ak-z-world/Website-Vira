# CrackLeap Academy — Next.js Rebuild

Corporate-level redesign of crackleap.vertexloop.in as a Next.js 16 (App Router) site.
Light theme, logo-derived violet palette, fully responsive, SEO + AEO + GEO ready.

## What's inside
- **All original content ported 1:1** — hero, programs (6 tracks), learning levels, paths,
  how-it-works, journey, ecosystem, outcomes/testimonials, FAQ, CTA. No fake numbers,
  no invented claims; FAQ answers are grounded strictly in existing site statements.
- **Branding** — logo in navbar, footer, favicon (`app/icon.png`), apple touch icon,
  and generated social preview image (`public/og-cover.png`).
- **SEO** — keyword-rich title/meta, canonical URL, Open Graph + Twitter cards,
  `sitemap.xml`, `robots.txt`, semantic HTML (one H1, section H2s, descriptive alts).
- **AEO/GEO** — JSON-LD: `EducationalOrganization` (+ parent Vertex Loop Pvt Ltd,
  `sameAs` social links), `WebSite`, `FAQPage` (7 Q&As), `ItemList` of 6 `Course`s.
- **Social crawl path** — footer social buttons with `rel="me"` (LinkedIn ×2, X,
  Instagram ×2, GitHub).
- **Responsive** — verified at 390px (mobile), 768px (tablet), 1440px (desktop);
  hamburger menu ≤940px, fluid grids, reduced-motion support.

## Deploy to Vercel (replaces the current HTML site)
The `crack-leap` repo is linked to Vercel for `crackleap.vertexloop.in`.

**Option A — replace repo contents (recommended):**
1. On GitHub, open the `crack-leap` repo → branch `nextjs-redesign`
   (or download `crackleap-nextjs.zip` and unzip).
2. Replace the repo's root contents with this project's files
   (`app/`, `components/`, `data/`, `public/`, `package.json`, etc.).
   Delete the old `index.html`.
3. Push to the branch Vercel deploys from (or merge to it).
4. Vercel auto-detects Next.js → builds → deploys to `crackleap.vertexloop.in`.
   No environment variables needed.

**Option B — local check first:**
```bash
npm install
npm run build   # must pass
npm run dev     # preview at http://localhost:3000
```

## After deploy
1. Google Search Console → add `crackleap.vertexloop.in` → submit `/sitemap.xml` → Request Indexing.
2. Test social preview: paste the URL into LinkedIn/X — the OG cover should appear.
3. Validate structured data: Google Rich Results Test on the homepage.

## Contact form SMTP setup (hello@vertexloop.in)

The contact form at `/contact` sends via `/api/contact` using nodemailer. It reads
these environment variables — set them in Vercel: **Project Settings → Environment Variables**.

| Variable | Example | Notes |
|---|---|---|
| `SMTP_HOST` | `mail.vertexloop.in` | Your mail server host |
| `SMTP_PORT` | `587` | 587 (STARTTLS) or 465 (SSL) |
| `SMTP_SECURE` | `false` | `true` only for port 465 |
| `SMTP_USER` | `hello@vertexloop.in` | Full mailbox address |
| `SMTP_PASS` | `••••••••` | Mailbox/app password — never commit this |
| `CONTACT_TO` | `hello@vertexloop.in` | Where enquiries land (defaults to SMTP_USER) |

A template lives in `.env.example`. For local testing: `cp .env.example .env.local`,
fill in real values, then `npm run dev`. The form shows a friendly error if SMTP
is not configured, and includes a honeypot field to block spam bots.
