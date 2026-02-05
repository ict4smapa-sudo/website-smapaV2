# PROJECT: SMAN 4 Jember Website Redesign - Phase 1: Frontend Only

## Context
I'm building a school website using Astro framework. I have existing Astro setup with Prisma and PostgreSQL (for Phase 2 - not to be used now).

## What I Have
1. Astro project already initialized
2. Existing `LandingPage.jsx` (React) - use as design reference
3. Logo and hero images in `/public/image/`
4. Database schema in `prisma/schema.prisma` (for Phase 2)

## What to Build (Phase 1 ONLY)
Frontend with Astro Content Collections (mock data). NO backend, NO auth, NO Prisma queries.

## Step-by-Step Instructions

### Setup (follow EXACTLY):
1. Install dependencies:
   - npx astro add tailwind
   - npx astro add react  
   - npx astro add node
   - npm install @hugeicons/react clsx tailwind-merge class-variance-authority

2. Configure files (see Part 1 document for exact configs):
   - astro.config.mjs
   - tailwind.config.mjs
   - tsconfig.json
   - src/styles/global.css
   - src/lib/utils.ts
   - src/lib/constants.ts

3. Create Content Collections:
   - src/content/config.ts (schema definitions)
   - src/content/news/*.md (3 mock news articles)
   - src/content/achievements/*.md (3 mock achievements)
   - src/content/extracurricular/*.md (10 mock items)

4. Build Layout Components:
   - src/layouts/BaseLayout.astro
   - src/layouts/PageLayout.astro
   - src/components/layout/Navbar.astro (with scroll effect script)
   - src/components/layout/MobileMenu.tsx (React island)
   - src/components/layout/Footer.astro
   - src/components/common/WhatsAppButton.astro

5. Build Home Page Components:
   - src/components/home/HeroSlider.tsx (React island - auto-rotate every 5s)
   - src/components/home/StatsSection.astro
   - src/components/home/FeaturedAchievements.astro (fetch from Content Collections)
   - src/components/home/PrincipalMessage.astro
   - src/components/home/VisionMission.astro
   - src/components/home/LatestNews.astro (fetch from Content Collections)
   - src/components/home/ExtraSlider.tsx (React island - horizontal scroll)

6. Create Home Page:
   - src/pages/index.astro (compose all home components)

## Design Requirements (from LandingPage.jsx)
- Colors: Emerald-500 (#10b981), Dark footer (#0B1120), Yellow accents (#fbbf24)
- Fonts: Space Grotesk (headings), Outfit (body)
- Animations: Fade-in-up, scroll marquee
- Responsive: Mobile-first approach

## Critical Rules
❌ DO NOT: Create API routes, use Prisma, implement auth, file uploads
✅ DO: Use Astro Content Collections, create .astro for static, .tsx for interactive

## Expected Deliverables
1. Complete project setup with all dependencies
2. All layout components working
3. Home page fully functional with:
   - Auto-rotating hero slider
   - Stats section
   - 3 featured achievements from Content Collections
   - Principal message with video placeholder
   - Vision & mission display
   - 3 latest news from Content Collections
   - Horizontal scrolling extracurricular slider
   - WhatsApp floating button
4. Mobile responsive (test on 375px, 768px, 1440px)

## Reference Documents
Read these files I'm providing:
1. prompt-antigravity-astro-PART1.md (detailed setup instructions)
2. prompt-antigravity-astro-PART2.md (component code examples)
3. initial-plan-astro.md (full project overview)

## Questions Before Starting
1. Confirm you understand: Phase 1 = frontend only, no backend
2. Confirm you can access uploaded LandingPage.jsx for design reference
3. Any clarification needed on Content Collections vs Prisma?

Let's start! Build it step-by-step, test each component before moving to next.