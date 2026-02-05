# 🚀 FINAL PROMPT FOR ANTIGRAVITY AI - READY TO COPY & PASTE

---

## PROJECT: SMAN 4 Jember Website - Phase 1 Frontend

I'm building a school website using **Astro framework**. I have comprehensive documentation prepared for you to follow.

---

## 📚 DOCUMENTATION PROVIDED

I'm uploading 3 reference documents:

1. **`initial-plan-astro.md`** - Complete project overview, tech stack, file structure, phases
2. **`prompt-antigravity-astro-PART1.md`** - Detailed setup instructions, configs, Content Collections
3. **`prompt-antigravity-astro-PART2.md`** - Component code examples and implementation details

I also have **`LandingPage.jsx`** (existing React component) - use this as visual design reference.

---

## 🎯 YOUR TASK (Phase 1 ONLY)

Build the **frontend** using Astro Content Collections for mock data.

**DO NOT implement:**
- ❌ Authentication
- ❌ Prisma database queries
- ❌ API endpoints
- ❌ File uploads
- ❌ Backend logic

**DO implement:**
- ✅ Astro Content Collections (mock data)
- ✅ Layout components (Navbar, Footer, etc.)
- ✅ Home page with all sections
- ✅ React islands for interactive parts only
- ✅ Mobile-responsive design

---

## 📋 STEP-BY-STEP CHECKLIST

### SETUP (Week 1 - Day 1-2)
- [ ] Install dependencies (tailwind, react, node, hugeicons, etc.)
- [ ] Configure `astro.config.mjs`, `tailwind.config.mjs`, `tsconfig.json`
- [ ] Create `src/styles/global.css` with fonts and base styles
- [ ] Create `src/lib/utils.ts` and `src/lib/constants.ts`

### CONTENT COLLECTIONS (Week 1 - Day 3)
- [ ] Create `src/content/config.ts` with schemas
- [ ] Create mock content:
  - [ ] 3 news articles in `src/content/news/*.md`
  - [ ] 3 achievements in `src/content/achievements/*.md`
  - [ ] 10 extracurricular in `src/content/extracurricular/*.md`

### LAYOUTS (Week 1 - Day 4-5)
- [ ] `src/layouts/BaseLayout.astro` (HTML structure, SEO meta tags)
- [ ] `src/layouts/PageLayout.astro` (wrapper with Navbar + Footer)
- [ ] `src/components/layout/Navbar.astro` (desktop menu + scroll effect)
- [ ] `src/components/layout/MobileMenu.tsx` (React island, accordion)
- [ ] `src/components/layout/Footer.astro` (4 columns, social icons)
- [ ] `src/components/common/WhatsAppButton.astro` (floating button)

### HOME PAGE COMPONENTS (Week 1 - Day 6-7)
- [ ] `src/components/home/HeroSlider.tsx` (React, auto-rotate 5s)
- [ ] `src/components/home/StatsSection.astro` (4 stat cards)
- [ ] `src/components/home/FeaturedAchievements.astro` (fetch from Collections)
- [ ] `src/components/home/PrincipalMessage.astro` (quote card)
- [ ] `src/components/home/VisionMission.astro` (grid layout)
- [ ] `src/components/home/LatestNews.astro` (fetch from Collections)
- [ ] `src/components/home/ExtraSlider.tsx` (React, horizontal scroll)

### HOME PAGE (Week 2)
- [ ] `src/pages/index.astro` (compose all components)
- [ ] Test responsiveness (mobile, tablet, desktop)
- [ ] Verify Content Collections data loads correctly
- [ ] Check animations and transitions

---

## 🎨 DESIGN REQUIREMENTS

**Colors (from LandingPage.jsx):**
- Primary: Emerald-500 (#10b981)
- Footer: #0B1120
- Accents: Yellow (#fbbf24), Orange (#f59e0b)

**Fonts:**
- Headings: Space Grotesk (bold)
- Body: Outfit (regular)

**Animations:**
- Fade-in-up for hero text
- Auto-scroll for extracurricular slider
- Navbar background change on scroll

**Responsive Breakpoints:**
- Mobile: 375px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+

---

## 📂 FILE STRUCTURE OVERVIEW

```
src/
├── content/
│   ├── config.ts
│   ├── news/
│   ├── achievements/
│   └── extracurricular/
├── layouts/
│   ├── BaseLayout.astro
│   └── PageLayout.astro
├── components/
│   ├── layout/
│   │   ├── Navbar.astro
│   │   ├── MobileMenu.tsx
│   │   └── Footer.astro
│   ├── home/
│   │   ├── HeroSlider.tsx
│   │   ├── StatsSection.astro
│   │   ├── FeaturedAchievements.astro
│   │   ├── PrincipalMessage.astro
│   │   ├── VisionMission.astro
│   │   ├── LatestNews.astro
│   │   └── ExtraSlider.tsx
│   └── common/
│       └── WhatsAppButton.astro
├── lib/
│   ├── utils.ts
│   └── constants.ts
├── pages/
│   └── index.astro
└── styles/
    └── global.css
```

---

## ⚡ QUICK START COMMANDS

```bash
# 1. Install integrations
npx astro add tailwind
npx astro add react
npx astro add node

# 2. Install packages
npm install @hugeicons/react clsx tailwind-merge class-variance-authority

# 3. Run dev server
npm run dev
```

---

## 🔍 IMPORTANT NOTES

1. **Astro Components (.astro)** for static content = no JavaScript sent to browser
2. **React Islands (.tsx)** for interactive parts = JavaScript only where needed
3. **Content Collections** = Astro's built-in content management (like mini-CMS)
4. **`client:load`** directive = tells Astro to hydrate React component on page load

Example:
```astro
<!-- Static component - no JS -->
<StatsSection />

<!-- Interactive component - JS loaded -->
<HeroSlider client:load />
```

---

## 📖 HOW TO USE REFERENCE DOCS

1. **Read `initial-plan-astro.md` first** - understand full project scope
2. **Follow `prompt-antigravity-astro-PART1.md`** - detailed setup instructions with exact code
3. **Use `prompt-antigravity-astro-PART2.md`** - component implementations
4. **Reference `LandingPage.jsx`** - for design consistency (colors, spacing, layout)

---

## ✅ COMPLETION CRITERIA

You're done with Phase 1 when:

- [ ] Home page loads without errors
- [ ] All sections visible and styled correctly
- [ ] Hero slider auto-rotates every 5 seconds
- [ ] Navbar changes background on scroll
- [ ] Mobile menu works (accordion dropdowns)
- [ ] Content Collections data displays correctly
- [ ] Responsive on mobile, tablet, desktop
- [ ] WhatsApp button visible and clickable
- [ ] No console errors
- [ ] Lighthouse performance score 90+

---

## 🚨 COMMON PITFALLS TO AVOID

1. **Don't use Prisma** - use Content Collections instead
2. **Don't create API routes** - Phase 2 only
3. **Don't implement auth** - Phase 2 only
4. **Don't mix .astro and .tsx unnecessarily** - use .astro for static, .tsx for interactive
5. **Don't forget `client:load`** - React components need this directive
6. **Don't skip mobile testing** - test each component on small screens

---

## 🎬 WORKFLOW

1. Start with **setup** (dependencies, configs)
2. Then **Content Collections** (create schemas and mock data)
3. Then **layouts** (BaseLayout → PageLayout → Navbar → Footer)
4. Then **home components** (one by one, test each)
5. Finally **home page** (compose all components)
6. Test and refine

---

## 💬 COMMUNICATION

As you work, please:
- ✅ Show me each component after you create it
- ✅ Ask questions if something is unclear
- ✅ Confirm before moving to next step
- ✅ Report any errors or issues immediately

---

## 🚀 LET'S START!

**First Question:** Have you read all 3 reference documents (`initial-plan-astro.md`, `PART1`, `PART2`) and the `LandingPage.jsx` file?

**If yes**, let's begin with **Step 1: Dependencies Installation**.

Show me the commands you'll run and the expected output.

---

**Ready? Let's build an amazing school website! 🎓**
