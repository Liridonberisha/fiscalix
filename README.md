# Fiscalix — studio website

The website for Fiscalix SH.P.K., a custom software development studio.
Albanian, English and German, with SEO-friendly language routes (`/sq`, `/en`, `/de`).

**Stack** — the same as the Fiscalix app: Next.js 15 (App Router), TypeScript, Tailwind CSS, framer-motion, zod.
No database and no tracking. Every page is prerendered as static HTML.

## Pages

| Route | Content |
|---|---|
| `/[lang]` | Hero with the idea → software scrubber, services, solutions, selected work, process, why Fiscalix, engineering, international, contact |
| `/[lang]/services` | All seven services in detail, with animated visuals |
| `/[lang]/solutions` | Filterable catalogue of 12 example systems |
| `/[lang]/work` | Five real projects with features and stack |
| `/[lang]/about` | Studio story, principles, why, engineering, international |
| `/[lang]/contact` | Project enquiry form (`?type=consultation` etc. preselects the project type) |
| `/[lang]/legal` | Legal notice (Impressum) and privacy notice |

Visiting `/` redirects to the visitor's language (cookie → browser language → Albanian).

## Where to edit things

| What | File |
|---|---|
| All text, in three languages | `src/i18n/dictionaries/sq.ts`, `en.ts`, `de.ts` (English defines the structure) |
| Email, WhatsApp, address, NUI | `src/lib/site.ts` |
| Colours, fonts, spacing | `tailwind.config.ts`, `src/app/globals.css` |
| Projects (Our work) | `work.projects` in the dictionaries; mockups in `src/components/project-mockups.tsx` |

Client names are deliberately not shown on the site. To name a client (with their permission), edit that project's `title` in all three dictionaries.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Environment variables

Copy `.env.example` to `.env.local`.

| Variable | Needed for |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical URLs, sitemap, Open Graph. Default `https://fiscalix.com` |
| `RESEND_API_KEY` | Sending contact-form enquiries by email (resend.com) |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries. Default `info@fiscalix.com` |
| `CONTACT_FROM_EMAIL` | Sender address on a domain verified in Resend |

Without `RESEND_API_KEY` the form still validates, but on submit it shows a clear message
with a **Send via WhatsApp** button that carries everything the visitor typed — no enquiry is lost.

---

## Si ta publikosh në internet — hap pas hapi

Ky projekt është i veçantë nga aplikacioni Fiscalix (`Fiscalixshpk/fiscalix`). Bëhet projekt i ri në GitHub dhe Vercel.

### 1. Hape folderin

1. Shkarko `fiscalix-studio.zip` dhe kliko dy herë mbi të. Krijohet folderi `fiscalix-studio`.
2. Zhvendose folderin te **Downloads** (nëse nuk është aty).

### 2. Krijo repository në GitHub

1. Hap **github.com** dhe hyr në llogari.
2. Lart djathtas kliko **+** → **New repository**.
3. Te **Owner** zgjidh **Fiscalixshpk**. Te **Repository name** shkruaj: `fiscalix-studio`
4. Zgjidh **Private**.
5. **Mos** e shëno "Add a README file".
6. Kliko **Create repository**.

### 3. Dërgoje kodin në GitHub (Terminal)

Hap **Terminal** dhe ngjite këtë, një rresht në një kohë, duke shtypur **Enter** pas secilit:

```bash
cd ~/Downloads/fiscalix-studio
git init
git add .
git commit -m "Fiscalix website"
git branch -M main
git remote add origin https://github.com/Fiscalixshpk/fiscalix-studio.git
git push -u origin main
```

Rifresko faqen e GitHub — duhet t’i shohësh skedarët.

### 4. Publikoje në Vercel

1. Hap **vercel.com** → **Add New…** → **Project**.
2. Te lista gjej `fiscalix-studio` → kliko **Import**.
3. **Framework Preset** duhet të jetë **Next.js** (vjen vetë).
4. Hap **Environment Variables** dhe shto:
   - Name: `NEXT_PUBLIC_SITE_URL` — Value: `https://fiscalix.com` (ose domeni që do përdorësh)
5. Kliko **Deploy**. Pas 1–2 minutave merr një link `…vercel.app`.

### 5. Që formulari të dërgojë email (opsionale, por e rekomanduar)

1. Hap **resend.com** → **Sign up**.
2. **Domains** → **Add Domain** → `fiscalix.com` → shto rekordet DNS që të jep te ofruesi i domenit → prit sa të dalë **Verified**.
3. **API Keys** → **Create API Key** → kopjoje.
4. Te Vercel: projekti → **Settings** → **Environment Variables** → shto:
   - `RESEND_API_KEY` = çelësi që kopjove
   - `CONTACT_TO_EMAIL` = `info@fiscalix.com` (ose emaili ku do t’i marrësh kërkesat)
   - `CONTACT_FROM_EMAIL` = `Fiscalix Website <website@fiscalix.com>`
5. **Deployments** → te deploy-i i fundit kliko **⋯** → **Redeploy**.

### 6. Lidhe domenin

Vercel → projekti → **Settings** → **Domains** → shkruaj domenin → **Add** → ndiq rekordet DNS që të tregon.

### Ndryshime më vonë

Pasi ndryshon diçka në kod:

```bash
cd ~/Downloads/fiscalix-studio
git add .
git commit -m "Përditësim"
git push
```

Vercel e publikon vetë pas çdo `git push`.
