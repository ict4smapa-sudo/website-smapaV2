# SMAN 4 JEMBER - Website Redesign Project Plan (ASTRO VERSION)

## Project Overview
Redesign and rebuild the SMAN 4 Jember school website using Astro framework, focusing on excellent performance, SEO, easy content management, and scalability.

---

## Tech Stack (REVISED - ASTRO FOCUSED)

### Frontend
- **Framework**: Astro (v4+) with SSR mode
- **UI Components**: shadcn/ui adapted for Astro + React Islands
- **Icons**: HugeIcons
- **Styling**: Tailwind CSS
- **Animations**: View Transitions API (built-in Astro)
- **Interactive Components**: React (via Astro Islands when needed)

### Backend
- **Runtime**: Node.js via Astro SSR
- **API Routes**: Astro Endpoints (`.ts` files in `/pages/api/`)
- **ORM**: Prisma
- **Database**: PostgreSQL
- **Authentication**: Better Auth (or Lucia Auth for Astro)
- **File Upload**: UploadThing / Cloudinary
- **Image Optimization**: Astro's built-in `<Image />` component

### Infrastructure
- **Hosting**: Proxmox (existing)
- **Domain**: Already configured
- **Deployment**: Docker containers
- **Reverse Proxy**: Nginx (on Proxmox)

---

## Why Astro is Better for This Project

1. **Performance First**: Zero JS by default = faster load times
2. **SEO Optimized**: Perfect for content-heavy school website
3. **Content Collections**: Built-in CMS-like features for news, achievements
4. **Already Setup**: You have Astro + Prisma + PostgreSQL ready
5. **React When Needed**: Use React islands for admin dashboard
6. **View Transitions**: Smooth page transitions without JS framework overhead

---

## File Structure (Astro)

```
website-smapa/
├── src/
│   ├── pages/
│   │   ├── index.astro                    # Home page
│   │   ├── profil/
│   │   │   ├── index.astro
│   │   │   ├── sejarah.astro
│   │   │   ├── visi-misi.astro
│   │   │   ├── struktur.astro
│   │   │   ├── akreditasi.astro
│   │   │   └── personalia.astro
│   │   ├── kegiatan/
│   │   │   ├── index.astro
│   │   │   ├── siswa.astro
│   │   │   ├── guru.astro
│   │   │   └── ekstrakurikuler.astro
│   │   ├── prestasi/
│   │   │   ├── index.astro                # List all achievements
│   │   │   ├── [slug].astro               # Individual achievement page
│   │   │   └── siswa.astro
│   │   ├── informasi/
│   │   │   ├── index.astro
│   │   │   ├── pengumuman.astro
│   │   │   ├── kurikulum.astro
│   │   │   └── layanan.astro
│   │   ├── berita/
│   │   │   ├── index.astro                # News list
│   │   │   └── [slug].astro               # Individual news page
│   │   ├── galeri/
│   │   │   ├── index.astro
│   │   │   ├── foto.astro
│   │   │   └── video.astro
│   │   ├── fasilitas/
│   │   │   ├── index.astro
│   │   │   ├── e-library.astro
│   │   │   └── sarana-prasarana.astro
│   │   ├── fitur/
│   │   │   ├── download.astro
│   │   │   └── alumni.astro
│   │   ├── ppdb/
│   │   │   └── index.astro
│   │   ├── search.astro
│   │   └── api/                           # API Endpoints (Phase 2)
│   │       ├── news/
│   │       │   ├── index.ts               # GET all news
│   │       │   ├── create.ts              # POST new news
│   │       │   └── [id].ts                # GET/PUT/DELETE single news
│   │       ├── achievements/
│   │       ├── gallery/
│   │       └── auth/
│   │           ├── login.ts
│   │           └── logout.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.astro               # Static navbar
│   │   │   ├── MobileMenu.tsx             # React island (interactive)
│   │   │   └── Footer.astro               # Static footer
│   │   ├── home/
│   │   │   ├── HeroSlider.tsx             # React island (auto-rotate)
│   │   │   ├── StatsSection.astro
│   │   │   ├── FeaturedAchievements.astro
│   │   │   ├── PrincipalMessage.astro
│   │   │   ├── VisionMission.astro
│   │   │   ├── LatestNews.astro
│   │   │   └── ExtraSlider.tsx            # React island (marquee)
│   │   ├── achievements/
│   │   │   ├── AchievementCard.astro
│   │   │   ├── AchievementFilter.tsx      # React island (interactive filter)
│   │   │   └── AchievementGrid.astro
│   │   ├── news/
│   │   │   ├── NewsCard.astro
│   │   │   ├── NewsGrid.astro
│   │   │   └── NewsDetail.astro
│   │   ├── gallery/
│   │   │   ├── PhotoGallery.tsx           # React island (lightbox)
│   │   │   ├── VideoGrid.astro
│   │   │   └── GalleryFilter.tsx          # React island
│   │   ├── admin/                         # React components (Phase 2)
│   │   │   ├── AdminLayout.tsx
│   │   │   ├── ContentTable.tsx
│   │   │   ├── RichTextEditor.tsx
│   │   │   └── ImageUploader.tsx
│   │   └── ui/                            # shadcn components (React)
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── dialog.tsx
│   │       └── ...
│   ├── content/                           # Astro Content Collections (Phase 1 mock data)
│   │   ├── config.ts                      # Define collections schema
│   │   ├── news/
│   │   │   ├── ppdb-2026.md
│   │   │   ├── workshop-ai.md
│   │   │   └── basket-juara.md
│   │   ├── achievements/
│   │   │   ├── basket-dbl-2025.md
│   │   │   ├── osn-matematika.md
│   │   │   └── debat-alsa.md
│   │   └── extracurricular/
│   │       ├── pramuka.md
│   │       ├── basket.md
│   │       └── ...
│   ├── layouts/
│   │   ├── BaseLayout.astro               # Main layout with <html>, <head>
│   │   ├── PageLayout.astro               # Page wrapper with navbar/footer
│   │   └── AdminLayout.astro              # Admin dashboard layout (Phase 2)
│   ├── lib/
│   │   ├── utils.ts
│   │   ├── constants.ts
│   │   └── prisma.ts                      # Prisma client (Phase 2)
│   ├── styles/
│   │   └── global.css
│   └── env.d.ts
├── public/
│   ├── images/
│   │   ├── logo_smapa.PNG
│   │   ├── hero1.jpg
│   │   ├── hero2.jpg
│   │   ├── hero3.jpg
│   │   └── hero4.jpg
│   └── fonts/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── .env
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

---

## Astro-Specific Features to Use

### 1. Content Collections (Phase 1 - Mock Data)
Instead of JSON files, use Astro Content Collections:

**`src/content/config.ts`:**
```typescript
import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.string(),
    date: z.date(),
    image: z.string(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()),
  }),
});

const achievementsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['Akademik', 'Olahraga', 'Seni', 'Bahasa', 'Teknologi']),
    level: z.enum(['Sekolah', 'Kecamatan', 'Kabupaten', 'Provinsi', 'Nasional', 'Internasional']),
    dateAchieved: z.date(),
    studentNames: z.array(z.string()),
    description: z.string(),
    image: z.string(),
    eventName: z.string(),
  }),
});

export const collections = {
  news: newsCollection,
  achievements: achievementsCollection,
};
```

**Usage in page:**
```astro
---
import { getCollection } from 'astro:content';

const allNews = await getCollection('news');
const featuredNews = allNews.filter(n => n.data.featured).slice(0, 3);
---

<div class="grid md:grid-cols-3 gap-8">
  {featuredNews.map(news => (
    <NewsCard news={news} />
  ))}
</div>
```

### 2. View Transitions (Smooth Page Navigation)
```astro
---
// src/layouts/BaseLayout.astro
import { ViewTransitions } from 'astro:transitions';
---
<html>
  <head>
    <ViewTransitions />
  </head>
  <body>
    <slot />
  </body>
</html>
```

### 3. Image Optimization (Built-in)
```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero1.jpg';
---

<Image 
  src={heroImage} 
  alt="SMAN 4 Jember" 
  width={1920} 
  height={1080}
  loading="eager"
/>
```

### 4. API Routes (Phase 2 - Backend)
```typescript
// src/pages/api/news/index.ts
import type { APIRoute } from 'astro';
import { prisma } from '../../../lib/prisma';

export const GET: APIRoute = async () => {
  const news = await prisma.news.findMany({
    where: { published: true },
    orderBy: { publishDate: 'desc' },
    take: 10,
  });
  
  return new Response(JSON.stringify(news), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
};

export const POST: APIRoute = async ({ request }) => {
  // Auth check here (Phase 2)
  const data = await request.json();
  const newNews = await prisma.news.create({ data });
  
  return new Response(JSON.stringify(newNews), { status: 201 });
};
```

---

## Component Strategy: Astro vs React

### Use `.astro` components for:
- ✅ Static content (no interactivity)
- ✅ Layout components (Navbar, Footer)
- ✅ Content cards (NewsCard, AchievementCard)
- ✅ SEO-critical pages

### Use `.tsx` React components (islands) for:
- ✅ Interactive sliders (HeroSlider, ExtraSlider)
- ✅ Filters (AchievementFilter, GalleryFilter)
- ✅ Search functionality
- ✅ Admin dashboard (entire admin panel)
- ✅ Forms with validation
- ✅ Lightbox/modals

**Example: Mix Astro + React**
```astro
---
// index.astro
import HeroSlider from '../components/home/HeroSlider.tsx';
import StatsSection from '../components/home/StatsSection.astro';
---

<Layout>
  <!-- React island for interactivity -->
  <HeroSlider client:load />
  
  <!-- Astro component (zero JS) -->
  <StatsSection />
</Layout>
```

---

## Development Phases (ASTRO VERSION)

### Phase 1: Frontend with Mock Data (Content Collections)

**Week 1-2: Setup + Layout + Home**
- [x] Initialize Astro project (`npm create astro@latest`)
- [x] Setup Tailwind CSS (`npx astro add tailwind`)
- [x] Setup React integration (`npx astro add react`)
- [x] Install shadcn/ui components (manual copy to `/components/ui/`)
- [x] Install HugeIcons (`npm install @hugeicons/react`)
- [ ] Create Content Collections config
- [ ] Add mock content (Markdown files in `/content/`)
- [ ] Build Navbar (`.astro`)
- [ ] Build MobileMenu (`.tsx` - React island)
- [ ] Build Footer (`.astro`)
- [ ] Build Home page sections:
  - [ ] HeroSlider (`.tsx` - React island)
  - [ ] StatsSection (`.astro`)
  - [ ] FeaturedAchievements (`.astro`)
  - [ ] PrincipalMessage (`.astro`)
  - [ ] VisionMission (`.astro`)
  - [ ] LatestNews (`.astro`)
  - [ ] ExtraSlider (`.tsx` - React island)

**Week 3: Profile & Activities Pages**
- [ ] Profil pages (all `.astro` - static content)
- [ ] Kegiatan pages (`.astro` + `.tsx` for galleries)

**Week 4: Achievements & News**
- [ ] Achievements list page with filter (`.tsx` - React island)
- [ ] Achievement detail page (dynamic route `[slug].astro`)
- [ ] News list page (`.astro`)
- [ ] News detail page (dynamic route `[slug].astro`)

**Week 5: Gallery, PPDB, Downloads**
- [ ] Photo gallery with lightbox (`.tsx` - React island)
- [ ] Video gallery (`.astro` - static embeds)
- [ ] PPDB information page (`.astro`)
- [ ] Downloads page (`.astro`)

**Week 6: Search & Optimization**
- [ ] Global search (`.tsx` - React island)
- [ ] Mobile responsiveness testing
- [ ] Performance optimization
- [ ] SEO meta tags per page

---

### Phase 2: Backend Integration (Prisma + PostgreSQL)

**Week 7-8: Auth & Database Setup**
- [ ] Setup Prisma with PostgreSQL
- [ ] Run migrations
- [ ] Seed database with initial data
- [ ] Setup Better Auth / Lucia Auth
- [ ] Create admin login page
- [ ] Implement role-based access control

**Week 9-10: Admin Panel - Content Management**
- [ ] Build admin dashboard layout (React)
- [ ] News management (CRUD)
  - [ ] List page (React table)
  - [ ] Create/Edit form (Rich text editor - TipTap)
  - [ ] Delete functionality
- [ ] Achievements management (CRUD)
- [ ] Convert Content Collections to database queries

**Week 11: Gallery & File Management**
- [ ] Gallery upload (images + videos)
- [ ] File upload for downloads
- [ ] Image optimization pipeline
- [ ] Cloudinary / UploadThing integration

**Week 12: Testing & Deployment**
- [ ] API endpoints testing
- [ ] Admin panel testing
- [ ] Security audit
- [ ] Deploy to Proxmox (Docker)
- [ ] Setup Nginx reverse proxy
- [ ] SSL certificate

---

### Phase 3: Advanced Features
- [ ] Alumni tracer form & database
- [ ] Online PPDB registration
- [ ] Payment gateway (Midtrans)
- [ ] E-library catalog
- [ ] Email notifications (Resend)
- [ ] Analytics dashboard
- [ ] Multi-language (i18n)

---

## shadcn/ui Setup for Astro

Since shadcn is designed for Next.js, we need to adapt it:

**Manual Setup:**
1. Create `/src/components/ui/` folder
2. Copy individual components from shadcn docs
3. Adjust imports (use `@/` alias)
4. Convert to React components (`.tsx`)
5. Use as React islands in Astro pages

**Components to Copy First:**
- button
- card
- dialog
- dropdown-menu
- input
- badge
- table (for admin)
- form (for admin)

**Tailwind Config:**
```javascript
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          900: '#064e3b',
        },
      },
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
```

---

## Database Schema (Same as Before - Prisma)

[Database schema tetap sama seperti di initial-plan.md sebelumnya]

---

## Astro Config

```javascript
// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server', // Enable SSR
  adapter: node({ mode: 'standalone' }),
  integrations: [
    tailwind(),
    react(), // Enable React islands
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
});
```

---

## Performance Targets (Easier with Astro)

- **Lighthouse Score**: 95+ (all categories) - Astro默认很高
- **First Contentful Paint**: < 1.0s (faster than TanStack)
- **Time to Interactive**: < 2.0s
- **Total Blocking Time**: < 200ms
- **Cumulative Layout Shift**: < 0.05

---

## Key Differences: Astro vs TanStack Start

| Aspect | Astro | TanStack Start |
|--------|-------|----------------|
| **JS Shipped** | Only interactive parts | Full React app |
| **Load Time** | ⚡ Faster | Slower |
| **SEO** | ⭐ Excellent | Good |
| **Learning Curve** | Easy | Steeper |
| **Content Focus** | ✅ Perfect | Overkill |
| **Admin Panel** | React islands work great | Native React |
| **Ecosystem** | Growing | React ecosystem |
| **Your Setup** | ✅ Already done | Need to restart |

---

## Migration from Existing LandingPage.jsx

Since you already have `LandingPage.jsx`, we can:

1. **Convert to Astro pages**:
   - Static sections → `.astro` components
   - Interactive parts → `.tsx` React islands

2. **Extract sections**:
   - Navbar → `Navbar.astro` + `MobileMenu.tsx`
   - Hero → `HeroSlider.tsx` (React island)
   - Stats → `StatsSection.astro`
   - Achievements → `FeaturedAchievements.astro`
   - etc.

3. **Content to Collections**:
   - `achievements` array → `/content/achievements/*.md`
   - `newsItems` → `/content/news/*.md`
   - `ekstrakurikuler` → `/content/extracurricular/*.md`

---

## Recommended Prompt for AI Antigravity (ASTRO VERSION)

```
I'm building SMAN 4 Jember school website using Astro framework (NOT TanStack Start).

Project details:
- Tech: Astro v4 + Tailwind + shadcn/ui (adapted) + HugeIcons + React islands
- Database: PostgreSQL + Prisma (Phase 2)
- Already setup: Astro project structure exists

Current phase: FRONTEND ONLY with Astro Content Collections (mock data)
Do NOT implement: Authentication, Prisma queries, API endpoints yet

I have existing design in LandingPage.jsx (React) that needs to be converted to Astro.

Tasks:
1. Setup Astro Content Collections for news, achievements, extracurricular
2. Create layout components (Navbar.astro, Footer.astro, MobileMenu.tsx)
3. Build Home page (index.astro) with sections:
   - HeroSlider.tsx (React island)
   - StatsSection.astro
   - FeaturedAchievements.astro (from Content Collection)
   - PrincipalMessage.astro
   - VisionMission.astro
   - LatestNews.astro (from Content Collection)
   - ExtraSlider.tsx (React island)

Design reference: Use colors, fonts, spacing from uploaded LandingPage.jsx

Are you ready? Let's start with Content Collections config first.
```

---

## Conclusion

**ASTRO is the better choice** for your school website because:
1. ✅ You already have it setup
2. ✅ Better performance for content-heavy site
3. ✅ Superior SEO (critical for school website)
4. ✅ Can still use React where needed
5. ✅ Easier to manage with Content Collections
6. ✅ Lower learning curve
7. ✅ Less JavaScript = faster site

**Recommendation: Stick with Astro, use React islands for interactive parts.**

---

**Last Updated**: February 3, 2026
**Status**: Phase 1 - Frontend Development (Astro)
