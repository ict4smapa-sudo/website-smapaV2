# COMPREHENSIVE PROMPT FOR ANTIGRAVITY AI - ASTRO VERSION
## SMAN 4 JEMBER Website - Phase 1: Frontend Development

---

## 🎯 CRITICAL INSTRUCTIONS - READ FIRST

**IMPORTANT:**
1. This is **PHASE 1 ONLY** - Frontend with mock data
2. **DO NOT** implement: Authentication, Prisma queries, API endpoints, file uploads
3. **USE** Astro Content Collections instead of database for mock data
4. **REFERENCE** existing `LandingPage.jsx` for design language
5. **FOLLOW** this document step-by-step, in order

---

## 📁 PROJECT CONTEXT

### Current Setup
I have an **existing Astro project** with:
- ✅ Astro already installed
- ✅ Prisma configured (for Phase 2)
- ✅ PostgreSQL database setup (for Phase 2)
- ✅ Basic folder structure exists

### Existing Files You Should Know About
1. **`LandingPage.jsx`** (uploaded) - React component with current design
   - Contains: navbar structure, hero slider, color scheme, typography
   - Use this as **visual reference** for design consistency
   
2. **`schema.prisma`** (existing) - Database schema for Phase 2
   - Don't modify this yet
   - Reference it for understanding data structure

3. **`/public/image/`** folder has:
   - `logo_smapa.PNG` - School logo
   - `hero1.jpg` to `hero4.jpg` - Hero slider images

### File Structure (Already Exists)
```
website-smapa/
├── .astro/
├── node_modules/
├── prisma/
│   └── schema.prisma
├── public/
│   └── image/
│       ├── logo_smapa.PNG
│       ├── hero1.jpg
│       ├── hero2.jpg
│       ├── hero3.jpg
│       └── hero4.jpg
├── src/
│   ├── components/
│   │   └── LandingPage.jsx (React component - to be migrated)
│   ├── pages/
│   │   ├── index.astro
│   │   └── App.css, App.jsx, index.css, main.jsx (to be removed/reorganized)
│   └── assets/
├── .env
├── .gitignore
├── astro.config.mjs
├── package.json
├── package-lock.json
├── README.md
├── tsconfig.json
└── vite.config.js
```

---

## 🚀 STEP-BY-STEP IMPLEMENTATION PLAN

### PHASE 1A: PROJECT SETUP & DEPENDENCIES (Week 1 - Day 1-2)

#### Step 1.1: Install Required Dependencies

**Run these commands in order:**

```bash
# 1. Install Tailwind CSS integration
npx astro add tailwind

# 2. Install React integration (for interactive components)
npx astro add react

# 3. Install Node adapter (for SSR)
npx astro add node

# 4. Install additional dependencies
npm install @hugeicons/react clsx tailwind-merge class-variance-authority

# 5. Install TypeScript types
npm install -D @types/node
```

**Expected Result:**
- `astro.config.mjs` should be updated with integrations
- New files: `tailwind.config.mjs`
- Updated `package.json` with new dependencies

**Verification:**
```bash
# Check if integrations are added
cat astro.config.mjs
# Should show: tailwind(), react(), node()
```

---

#### Step 1.2: Configure Astro Config

**File: `astro.config.mjs`**

Replace with this EXACT configuration:

```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import node from '@astrojs/node';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Enable SSR mode
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    tailwind({
      applyBaseStyles: false, // We'll use our own global.css
    }),
    react(), // Enable React islands
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@/components': '/src/components',
        '@/layouts': '/src/layouts',
        '@/lib': '/src/lib',
        '@/styles': '/src/styles',
      },
    },
  },
});
```

**Why these settings:**
- `output: 'server'` - Enables SSR for dynamic content later
- `applyBaseStyles: false` - We'll add custom base styles
- Aliases (`@/`) - Cleaner imports, e.g., `import Navbar from '@/components/layout/Navbar.astro'`

---

#### Step 1.3: Configure Tailwind

**File: `tailwind.config.mjs`**

Replace with this configuration:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Primary colors (from existing LandingPage.jsx)
        primary: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#10b981', // Main emerald color
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
          950: '#022c22',
        },
        // Secondary colors (yellow/orange accents)
        secondary: {
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
        },
        // Custom dark for footer
        'dark-footer': '#0B1120',
      },
      fontFamily: {
        space: ['Space Grotesk', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
```

**Why these settings:**
- Colors match exactly with `LandingPage.jsx`
- Custom animations for slider and fade-ins
- Font families preserved from original design

---

#### Step 1.4: Setup Global Styles

**File: `src/styles/global.css`**

Create this file with:

```css
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');

/* Tailwind Base */
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom Base Styles */
@layer base {
  * {
    @apply border-border;
  }
  
  body {
    @apply bg-gray-50 text-gray-800 font-outfit;
    @apply antialiased;
  }
  
  h1, h2, h3, h4, h5, h6 {
    @apply font-space font-bold;
  }
}

/* Custom Component Styles */
@layer components {
  /* Scrollbar styling */
  .mobile-menu-scroll::-webkit-scrollbar {
    @apply w-1;
  }
  
  .mobile-menu-scroll::-webkit-scrollbar-thumb {
    @apply bg-primary-500 rounded;
  }
  
  /* Animation utilities */
  .animate-scroll:hover {
    animation-play-state: paused;
  }
  
  .delay-100 {
    animation-delay: 0.1s;
  }
  
  .delay-200 {
    animation-delay: 0.2s;
  }
  
  .delay-300 {
    animation-delay: 0.3s;
  }
}

/* Custom Utilities */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

---

#### Step 1.5: Setup TypeScript Config

**File: `tsconfig.json`**

Update with:

```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"],
      "@/components/*": ["./src/components/*"],
      "@/layouts/*": ["./src/layouts/*"],
      "@/lib/*": ["./src/lib/*"],
      "@/styles/*": ["./src/styles/*"]
    }
  }
}
```

---

#### Step 1.6: Create Utility Functions

**File: `src/lib/utils.ts`**

```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merge Tailwind classes without conflicts
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Format date to Indonesian locale
 */
export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return new Intl.DateTimeFormat('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(d);
}

/**
 * Generate slug from title
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

/**
 * Truncate text to specified length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.substring(0, length).trim() + '...';
}
```

---

**File: `src/lib/constants.ts`**

```typescript
/**
 * Application-wide constants
 */

export const SITE_TITLE = "SMAN 4 Jember";
export const SITE_DESCRIPTION = "Sekolah Menengah Atas yang berkomitmen mencetak generasi unggul, berkarakter, dan berprestasi";
export const SITE_URL = "https://sman4jember.sch.id"; // Update with actual domain

export const PRINCIPAL_NAME = "Dora Indriana, S.Pd., M.Pd.";

export const CONTACT_INFO = {
  address: "Jl. Hayam Wuruk No. 145, Sempusari, Kaliwates, Jember",
  phone: "(0331) 484848",
  email: "info@sman4jember.sch.id",
  whatsapp: "6281234567890",
};

export const SOCIAL_MEDIA = {
  instagram: "https://www.instagram.com/sman4jember.official/",
  youtube: "https://www.youtube.com/@SMAN4JEMBER",
  facebook: "#",
  linkedin: "#",
};

export const MISSION_ITEMS = [
  "Mewujudkan kehidupan warga sekolah yang beriman dan bertakwa kepada Tuhan YME, serta berakhlak mulia.",
  "Mewujudkan warga sekolah yang berjiwa Bhinneka Tunggal Ika, cinta tanah air dan bangsa.",
  "Membangun jiwa kemandirian, etos kerja, tangguh, dan profesional.",
  "Mewujudkan budaya gotong royong, saling menghargai, dan anti kekerasan.",
  "Mewujudkan warga sekolah yang memiliki integritas dan bertanggung jawab.",
  "Mewujudkan warga sekolah yang kreatif, inovatif berbasis seni dan kewirausahaan.",
  "Mewujudkan warga sekolah yang menguasai pengetahuan dan teknologi abad 21.",
  "Mewujudkan warga sekolah yang mampu menjuarai lomba akademik dan non-akademik."
];

export const NAVIGATION_MENU = [
  { label: "Beranda", link: "/" },
  {
    label: "Profil",
    link: "/profil",
    items: [
      { label: "Sejarah", link: "/profil/sejarah" },
      { label: "Visi Misi", link: "/profil/visi-misi" },
      { label: "Struktur Organisasi", link: "/profil/struktur" },
      { label: "Akreditasi", link: "/profil/akreditasi" },
      { label: "Personalia", link: "/profil/personalia" }
    ]
  },
  {
    label: "Kegiatan",
    link: "/kegiatan",
    items: [
      { label: "Kegiatan Siswa", link: "/kegiatan/siswa" },
      { label: "Kegiatan Guru", link: "/kegiatan/guru" },
      { label: "Ekstrakurikuler", link: "/kegiatan/ekstrakurikuler" }
    ]
  },
  {
    label: "Prestasi",
    link: "/prestasi",
    items: [
      { label: "Prestasi Siswa", link: "/prestasi/siswa" },
      { label: "Penghargaan Sekolah", link: "/prestasi/sekolah" }
    ]
  },
  {
    label: "Informasi",
    link: "/informasi",
    items: [
      { label: "Pengumuman", link: "/informasi/pengumuman" },
      { label: "Info Kurikulum", link: "/informasi/kurikulum" },
      { label: "Layanan Publik", link: "/informasi/layanan" }
    ]
  },
  {
    label: "Fasilitas",
    link: "/fasilitas",
    items: [
      { label: "E-Library", link: "/fasilitas/e-library" },
      { label: "Sarana Prasarana", link: "/fasilitas/sarana-prasarana" }
    ]
  },
  {
    label: "Galeri",
    link: "/galeri",
    items: [
      { label: "Foto", link: "/galeri/foto" },
      { label: "Video", link: "/galeri/video" }
    ]
  },
  {
    label: "Fitur",
    link: "/fitur",
    items: [
      { label: "Download Area", link: "/fitur/download" },
      { label: "Alumni Tracer", link: "/fitur/alumni" }
    ]
  }
];
```

---

### PHASE 1B: CONTENT COLLECTIONS SETUP (Week 1 - Day 3)

Content Collections = Astro's built-in way to manage structured content (like a mini-CMS)

#### Step 2.1: Create Content Collections Config

**File: `src/content/config.ts`**

```typescript
import { defineCollection, z } from 'astro:content';

/**
 * News/Berita Collection
 */
const newsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(), // Auto-generated if not provided
    category: z.enum(['AKADEMIK', 'PRESTASI', 'GURU & STAFF', 'PENGUMUMAN', 'KEGIATAN']),
    date: z.date(),
    image: z.string(),
    excerpt: z.string(),
    featured: z.boolean().default(false),
    tags: z.array(z.string()).default([]),
    author: z.string().default('Admin SMAN 4 Jember'),
  }),
});

/**
 * Achievements/Prestasi Collection
 */
const achievementsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    category: z.enum(['Akademik', 'Olahraga', 'Seni', 'Bahasa', 'Teknologi', 'Keagamaan']),
    level: z.enum(['Sekolah', 'Kecamatan', 'Kabupaten', 'Provinsi', 'Nasional', 'Internasional']),
    dateAchieved: z.date(),
    studentNames: z.array(z.string()),
    image: z.string(),
    eventName: z.string(),
    year: z.number(),
  }),
});

/**
 * Extracurricular Collection
 */
const extracurricularCollection = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    category: z.enum(['Wajib', 'Olahraga', 'Seni Budaya', 'Seni Musik', 'Ketertiban', 'Akademik', 'Kerohanian', 'Kemanusiaan', 'Bela Diri']),
    image: z.string(),
    instructor: z.string().optional(),
    schedule: z.string().optional(),
    description: z.string().optional(),
  }),
});

/**
 * Downloads Collection
 */
const downloadsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    category: z.enum(['Formulir', 'Dokumen', 'Panduan', 'Lainnya']),
    fileUrl: z.string(),
    fileSize: z.string().optional(),
    uploadDate: z.date(),
  }),
});

export const collections = {
  news: newsCollection,
  achievements: achievementsCollection,
  extracurricular: extracurricularCollection,
  downloads: downloadsCollection,
};
```

---

#### Step 2.2: Create Mock Content - News

**Create folder:** `src/content/news/`

**File: `src/content/news/ppdb-2026.md`**

```markdown
---
title: "Sosialisasi Penerimaan Peserta Didik Baru (PPDB) Tahun 2026"
category: "AKADEMIK"
date: 2026-02-10
image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
excerpt: "Juknis PPDB tahun 2026 telah diterbitkan oleh Dinas Pendidikan Provinsi Jawa Timur. Berikut adalah ringkasan jadwal dan persyaratan..."
featured: true
tags: ["PPDB", "Pendaftaran", "2026"]
---

# Sosialisasi PPDB 2026

Juknis PPDB tahun 2026 telah diterbitkan oleh Dinas Pendidikan Provinsi Jawa Timur.

## Jadwal Penting

- **Pendaftaran Online**: 1 Juni - 7 Juni 2026
- **Verifikasi Berkas**: 8 Juni - 10 Juni 2026
- **Pengumuman**: 15 Juni 2026

## Persyaratan

1. Ijazah SMP/MTs atau surat keterangan lulus
2. Kartu Keluarga
3. Akta Kelahiran
4. Pas foto berwarna 3x4 (3 lembar)
5. SKHUN (Surat Keterangan Hasil Ujian Nasional)

## Jalur Pendaftaran

### 1. Jalur Zonasi (50%)
Diperuntukkan bagi calon peserta didik yang berdomisili di dalam wilayah zonasi sekolah.

### 2. Jalur Afirmasi (15%)
Diperuntukkan bagi calon peserta didik dari keluarga kurang mampu.

### 3. Jalur Perpindahan Tugas Orang Tua (5%)
Untuk anak yang orang tuanya pindah tugas.

### 4. Jalur Prestasi (30%)
Berdasarkan nilai rapor dan prestasi akademik/non-akademik.

## Informasi Lebih Lanjut

Hubungi panitia PPDB SMAN 4 Jember:
- **Telepon**: (0331) 484848
- **Email**: ppdb@sman4jember.sch.id
```

---

**File: `src/content/news/workshop-ai-2026.md`**

```markdown
---
title: "Pelatihan Peningkatan Kompetensi Guru dalam Pemanfaatan AI"
category: "GURU & STAFF"
date: 2026-02-08
image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
excerpt: "SMAPA menggelar workshop internal untuk meningkatkan kemampuan literasi digital para pendidik dalam menghadapi era Society 5.0..."
featured: true
tags: ["Workshop", "AI", "Guru", "Teknologi"]
---

# Workshop AI untuk Guru SMAN 4 Jember

Pada tanggal 8 Februari 2026, SMAN 4 Jember mengadakan workshop tentang pemanfaatan Artificial Intelligence (AI) dalam pembelajaran.

## Tujuan Workshop

1. Meningkatkan literasi digital guru
2. Memahami penggunaan AI tools untuk pembelajaran
3. Mengintegrasikan teknologi dalam metode mengajar
4. Persiapan menghadapi era Society 5.0

## Materi yang Dibahas

- Pengenalan AI dan Machine Learning
- Tools AI untuk pendidikan (ChatGPT, Gemini, Claude)
- Pembuatan konten pembelajaran dengan AI
- Etika penggunaan AI dalam pendidikan

## Narasumber

Workshop ini menghadirkan narasumber dari:
- Dinas Pendidikan Provinsi Jawa Timur
- Praktisi AI dari industri teknologi
- Guru-guru pioneer AI Teaching dari sekolah lain

## Antusiasme Peserta

Seluruh guru SMAN 4 Jember mengikuti workshop ini dengan antusias. Banyak ide inovatif yang muncul untuk diterapkan di kelas.
```

---

**File: `src/content/news/basket-juara-dbl.md`**

```markdown
---
title: "Ekstrakurikuler Basket SMAPA Raih Juara 1 DBL East Java"
category: "PRESTASI"
date: 2026-02-05
image: "https://images.unsplash.com/photo-1546519638-68e109498ee2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
excerpt: "Tim Basket Putra kembali mengharumkan nama sekolah dengan mempertahankan gelar juara pada ajang bergengsi DBL..."
featured: true
tags: ["Basket", "DBL", "Juara", "Olahraga"]
---

# Tim Basket SMAPA Juara DBL East Java 2025

Tim basket putra SMAN 4 Jember kembali menorehkan prestasi gemilang dengan menjuarai kompetisi Development Basketball League (DBL) East Java Series 2025.

## Perjalanan Menuju Final

Tim kami berhasil melewati babak penyisihan dengan sempurna, memenangkan semua pertandingan grup. Di babak semifinal, tim mengalahkan SMAN 2 Surabaya dengan skor 78-65.

## Pertandingan Final

Final yang berlangsung di GOR Pancasila Surabaya mempertemukan SMAPA dengan SMAN 5 Surabaya. Pertandingan berlangsung sengit dan berakhir dengan skor 82-79 untuk kemenangan SMAPA.

## Pemain Terbaik

- **MVP Final**: Budi Santoso (Kelas XI MIPA 2)
- **Top Scorer**: Ahmad Fauzi (Kelas XII MIPA 1)
- **Best Defender**: Rizky Pratama (Kelas XI MIPA 3)

## Ucapan Terima Kasih

Prestasi ini tidak lepas dari dukungan sekolah, orang tua, dan pelatih yang selalu membimbing tim dengan penuh dedikasi.
```

---

#### Step 2.3: Create Mock Content - Achievements

**Create folder:** `src/content/achievements/`

**File: `src/content/achievements/basket-dbl-2025.md`**

```markdown
---
title: "Juara 1 Basket Putra DBL East Java Series 2025"
category: "Olahraga"
level: "Provinsi"
dateAchieved: 2025-01-15
studentNames: ["Team Basket SMAN 4 Jember"]
image: "https://images.unsplash.com/photo-1546519638-68e109498ee2?auto=format&fit=crop&w=600&q=80"
eventName: "Development Basketball League East Java Series 2025"
year: 2025
---

Tim Basket Putra SMAPA berhasil mempertahankan gelar juara setelah pertarungan sengit di final melawan SMA unggulan Surabaya. Pertandingan final berlangsung di GOR Pancasila Surabaya dan dimenangkan dengan skor 82-79.

Prestasi ini merupakan yang ketiga kalinya berturut-turut SMAPA menjuarai kompetisi DBL tingkat Jawa Timur, membuktikan konsistensi dan kualitas program pembinaan basket di sekolah.
```

---

**File: `src/content/achievements/osn-matematika-2025.md`**

```markdown
---
title: "Medali Emas Olimpiade Sains Nasional (OSN) Matematika"
category: "Akademik"
level: "Nasional"
dateAchieved: 2025-07-20
studentNames: ["Ananda Budi Santoso"]
image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=600&q=80"
eventName: "Olimpiade Sains Nasional (OSN) 2025"
year: 2025
---

Ananda Budi Santoso, siswa kelas XI MIPA 2, mengharumkan nama SMAN 4 Jember dengan meraih medali emas pada Olimpiade Sains Nasional (OSN) bidang Matematika tahun 2025.

Kompetisi yang diselenggarakan di Jakarta ini diikuti oleh perwakilan siswa terbaik dari seluruh provinsi di Indonesia. Budi berhasil mengungguli 150+ pesaing dari berbagai daerah.

Prestasi ini merupakan buah dari kerja keras, bimbingan guru pembina OSN, dan dukungan penuh dari sekolah.
```

---

**File: `src/content/achievements/debat-alsa-2025.md`**

```markdown
---
title: "Best Speaker Kompetisi Debat Bahasa Inggris ALSA UI"
category: "Bahasa"
level: "Nasional"
dateAchieved: 2025-03-10
studentNames: ["Putri Maharani", "Dimas Prasetyo", "Siti Nurhaliza"]
image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
eventName: "ALSA English Debate Competition"
year: 2025
---

Delegasi English Club SMAN 4 Jember yang diwakili oleh Putri Maharani, Dimas Prasetyo, dan Siti Nurhaliza sukses menyabet gelar Best Speaker dalam ajang ALSA English Debate Competition yang diselenggarakan oleh Fakultas Hukum Universitas Indonesia.

Putri Maharani meraih penghargaan Best Speaker kategori Final Round, sementara tim berhasil masuk 4 besar dari total 50 tim peserta dari seluruh Indonesia.

Kompetisi ini menggunakan format British Parliamentary Debate dengan tema-tema global seperti climate change, technology ethics, dan education policy.
```

---

#### Step 2.4: Create Mock Content - Extracurricular

**Create folder:** `src/content/extracurricular/`

**File: `src/content/extracurricular/pramuka.md`**

```markdown
---
name: "Pramuka"
category: "Wajib"
image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=600&q=80"
instructor: "Bapak Sutrisno, S.Pd."
schedule: "Jumat, 14:00 - 16:00 WIB"
description: "Gerakan Pramuka adalah ekstrakurikuler wajib yang membentuk karakter kepemimpinan dan kemandirian siswa."
---

Pramuka SMAN 4 Jember aktif dalam berbagai kegiatan seperti perkemahan, bakti sosial, dan pelatihan kepemimpinan.
```

---

**File: `src/content/extracurricular/basket.md`**

```markdown
---
name: "Basket Putra"
category: "Olahraga"
image: "https://images.unsplash.com/photo-1546519638-68e109498ee2?auto=format&fit=crop&w=600&q=80"
instructor: "Coach Arief Rahman"
schedule: "Selasa & Kamis, 15:30 - 17:30 WIB"
description: "Tim basket putra SMAN 4 Jember adalah juara bertahan DBL East Java."
---

Latihan rutin dilakukan 2x seminggu dengan fokus pada teknik, strategi, dan physical conditioning.
```

---

**(Continue with other extracurricular files: tari.md, paduan-suara.md, paskibra.md, futsal.md, english-club.md, remaja-masjid.md, pmr.md, pencak-silat.md)**

---

### PHASE 1C: LAYOUT COMPONENTS (Week 1 - Day 4-5)

#### Step 3.1: Create Base Layout

**File: `src/layouts/BaseLayout.astro`**

```astro
---
import { ViewTransitions } from 'astro:transitions';
import '@/styles/global.css';

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

const {
  title = 'SMAN 4 Jember - Generasi Unggul, Berkarakter & Berprestasi',
  description = 'Sekolah Menengah Atas yang berkomitmen mencetak generasi unggul, berkarakter, dan berprestasi di tingkat nasional maupun global.',
  image = '/image/logo_smapa.PNG',
} = Astro.props;

const canonicalURL = new URL(Astro.url.pathname, Astro.site);
---

<!DOCTYPE html>
<html lang="id">
  <head>
    <!-- Meta Tags -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="generator" content={Astro.generator} />
    <meta name="description" content={description} />
    
    <!-- Canonical URL -->
    <link rel="canonical" href={canonicalURL} />
    
    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content={canonicalURL} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={new URL(image, Astro.site)} />
    
    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image" />
    <meta property="twitter:url" content={canonicalURL} />
    <meta property="twitter:title" content={title} />
    <meta property="twitter:description" content={description} />
    <meta property="twitter:image" content={new URL(image, Astro.site)} />
    
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="/image/logo_smapa.PNG" />
    
    <!-- Title -->
    <title>{title}</title>
    
    <!-- View Transitions -->
    <ViewTransitions />
  </head>
  
  <body>
    <slot />
  </body>
</html>
```

---

#### Step 3.2: Create Page Layout with Navbar & Footer

**File: `src/layouts/PageLayout.astro`**

```astro
---
import BaseLayout from './BaseLayout.astro';
import Navbar from '@/components/layout/Navbar.astro';
import Footer from '@/components/layout/Footer.astro';
import WhatsAppButton from '@/components/common/WhatsAppButton.astro';

interface Props {
  title?: string;
  description?: string;
  image?: string;
}

const { title, description, image } = Astro.props;
---

<BaseLayout title={title} description={description} image={image}>
  <Navbar />
  
  <main class="min-h-screen">
    <slot />
  </main>
  
  <Footer />
  <WhatsAppButton />
</BaseLayout>
```

---

#### Step 3.3: Create Navbar Component

**File: `src/components/layout/Navbar.astro`**

```astro
---
import { NAVIGATION_MENU } from '@/lib/constants';
import { Search, GraduationCap, Menu, X, ChevronDown } from 'lucide-react';
import MobileMenu from './MobileMenu';

const currentPath = Astro.url.pathname;
---

<nav id="navbar" class="fixed top-0 w-full z-50 transition-all duration-300 h-20 flex items-center bg-transparent border-b border-white/10">
  <div class="container mx-auto px-6 flex justify-between items-center">
    
    <!-- Logo & School Name -->
    <a href="/" class="flex items-center gap-3 group cursor-pointer">
      <div class="w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
        <img
          src="/image/logo_smapa.PNG"
          alt="Logo SMAN 4 Jember"
          class="w-full h-full object-cover"
        />
      </div>
      
      <div class="flex flex-col">
        <span class="font-space font-extrabold text-xl leading-tight text-white navbar-text">
          SMAN 4
        </span>
        <span class="text-sm font-medium tracking-widest text-emerald-100 navbar-subtext">
          JEMBER <span class="text-[10px] px-2 py-0.5 rounded-full bg-emerald-200/20 ml-1 border border-white/10">Est. 1977</span>
        </span>
      </div>
    </a>

    <!-- Desktop Menu -->
    <div class="hidden lg:flex items-center gap-1 bg-emerald-950/10 backdrop-blur-sm p-1 rounded-full border border-white/10">
      {NAVIGATION_MENU.map((item) => (
        <div class="relative group">
          <a
            href={item.link}
            class={`px-4 py-2 rounded-full text-xs xl:text-sm font-bold transition-all duration-300 flex items-center gap-1 navbar-link ${
              currentPath === item.link
                ? 'bg-emerald-600 text-white'
                : 'text-white/90 hover:bg-white/10 hover:text-white'
            }`}
          >
            {item.label}
            {item.items && <ChevronDown size={12} class="group-hover:rotate-180 transition-transform duration-300" />}
          </a>

          {/* Dropdown Menu */}
          {item.items && (
            <div class="absolute top-full left-0 pt-3 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
              <div class="bg-white rounded-xl shadow-xl border border-emerald-100 overflow-hidden py-1">
                {item.items.map((subItem) => (
                  <a
                    href={subItem.link}
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
                  >
                    {subItem.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>

    <!-- Right Side: Search + PPDB CTA -->
    <div class="hidden lg:flex items-center gap-3">
      <button class="p-2 rounded-full transition-colors hover:bg-white/10 text-white navbar-icon">
        <Search size={20} />
      </button>
      <a 
        href="/ppdb" 
        class="bg-gradient-to-r from-emerald-500 to-teal-600 hover:scale-105 active:scale-95 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all duration-300 flex items-center gap-2 border border-white/20"
      >
        <GraduationCap size={16} /> PPDB 2026
      </a>
    </div>

    <!-- Mobile Menu Toggle -->
    <button
      id="mobile-menu-toggle"
      class="lg:hidden p-2"
      aria-label="Toggle mobile menu"
    >
      <Menu class="text-white navbar-icon" id="menu-icon" />
      <X class="text-emerald-900 navbar-icon hidden" id="close-icon" />
    </button>
  </div>
</nav>

<!-- Mobile Menu Component (React) -->
<MobileMenu client:load />

<script>
  // Navbar scroll effect
  window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const navbarText = document.querySelectorAll('.navbar-text');
    const navbarSubtext = document.querySelectorAll('.navbar-subtext');
    const navbarLinks = document.querySelectorAll('.navbar-link');
    const navbarIcons = document.querySelectorAll('.navbar-icon');
    
    if (window.scrollY > 50) {
      navbar?.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-lg', 'border-emerald-100');
      navbar?.classList.remove('bg-transparent', 'border-white/10');
      
      navbarText.forEach(el => {
        el.classList.add('text-emerald-950');
        el.classList.remove('text-white');
      });
      
      navbarSubtext.forEach(el => {
        el.classList.add('text-emerald-600/80');
        el.classList.remove('text-emerald-100');
      });
      
      navbarLinks.forEach(el => {
        if (!el.classList.contains('bg-emerald-600')) {
          el.classList.add('text-emerald-800', 'hover:bg-emerald-100');
          el.classList.remove('text-white/90', 'hover:bg-white/10');
        }
      });
      
      navbarIcons.forEach(el => {
        el.classList.add('text-emerald-700', 'hover:bg-emerald-50');
        el.classList.remove('text-white', 'hover:bg-white/10');
      });
    } else {
      navbar?.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-lg', 'border-emerald-100');
      navbar?.classList.add('bg-transparent', 'border-white/10');
      
      navbarText.forEach(el => {
        el.classList.remove('text-emerald-950');
        el.classList.add('text-white');
      });
      
      navbarSubtext.forEach(el => {
        el.classList.remove('text-emerald-600/80');
        el.classList.add('text-emerald-100');
      });
      
      navbarLinks.forEach(el => {
        if (!el.classList.contains('bg-emerald-600')) {
          el.classList.remove('text-emerald-800', 'hover:bg-emerald-100');
          el.classList.add('text-white/90', 'hover:bg-white/10');
        }
      });
      
      navbarIcons.forEach(el => {
        el.classList.remove('text-emerald-700', 'hover:bg-emerald-50');
        el.classList.add('text-white', 'hover:bg-white/10');
      });
    }
  });

  // Mobile menu toggle
  const toggleButton = document.getElementById('mobile-menu-toggle');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  
  toggleButton?.addEventListener('click', () => {
    menuIcon?.classList.toggle('hidden');
    closeIcon?.classList.toggle('hidden');
    document.dispatchEvent(new CustomEvent('toggleMobileMenu'));
  });
</script>
```

---

#### Step 3.4: Create Mobile Menu Component (React Island)

**File: `src/components/layout/MobileMenu.tsx`**

```tsx
import React, { useState, useEffect } from 'react';
import { ChevronDown, GraduationCap } from 'lucide-react';
import { NAVIGATION_MENU } from '@/lib/constants';

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

  useEffect(() => {
    const handleToggle = () => setIsOpen(prev => !prev);
    document.addEventListener('toggleMobileMenu', handleToggle);
    return () => document.removeEventListener('toggleMobileMenu', handleToggle);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white border-t border-emerald-100 shadow-2xl overflow-y-auto z-40 animate-in slide-in-from-top-5 lg:hidden">
      <div className="p-6 flex flex-col gap-2 pb-20">
        {NAVIGATION_MENU.map((item, idx) => (
          <div key={idx} className="border-b border-gray-100 last:border-none">
            {item.items ? (
              <div>
                <button
                  onClick={() => setActiveSubmenu(activeSubmenu === idx ? null : idx)}
                  className="w-full flex justify-between items-center py-3 px-2 rounded-lg hover:bg-emerald-50 font-bold text-emerald-800 text-left"
                >
                  {item.label}
                  <ChevronDown 
                    size={18} 
                    className={`transform transition-transform duration-300 ${activeSubmenu === idx ? 'rotate-180' : ''}`}
                  />
                </button>

                <div 
                  className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-lg ${
                    activeSubmenu === idx ? 'max-h-96 opacity-100 mt-1 mb-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  {item.items.map((subItem, subIdx) => (
                    <a
                      key={subIdx}
                      href={subItem.link}
                      className="block px-6 py-3 text-sm text-gray-600 hover:text-emerald-600 border-l-2 border-transparent hover:border-emerald-500"
                      onClick={() => setIsOpen(false)}
                    >
                      {subItem.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <a
                href={item.link}
                className="w-full text-left py-3 px-2 rounded-lg font-bold text-emerald-800 hover:bg-emerald-50 block"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            )}
          </div>
        ))}

        <a 
          href="/ppdb"
          className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-bold shadow-lg mt-4 flex justify-center items-center gap-2"
          onClick={() => setIsOpen(false)}
        >
          <GraduationCap size={20} /> Daftar PPDB Sekarang
        </a>
      </div>
    </div>
  );
}
```

---

**Due to length limits, I'll create additional separate files for Footer, WhatsApp Button, and Home Page components.**

Would you like me to continue with:
1. Footer component
2. WhatsApp floating button
3. Home page sections (HeroSlider, Stats, Achievements, etc.)
4. Individual page templates

Let me know and I'll create the remaining comprehensive documentation!

---

## 📌 CHECKPOINT

**What we've covered so far:**
- ✅ Complete project setup instructions
- ✅ All dependencies with exact commands
- ✅ Configuration files (astro.config, tailwind, tsconfig)
- ✅ Utility functions and constants
- ✅ Content Collections setup with schema
- ✅ Mock content examples (news, achievements, extracurricular)
- ✅ Base layout and page layout
- ✅ Navbar component (Astro + script)
- ✅ Mobile menu component (React island)

**What's remaining:**
- Footer component
- WhatsApp button
- Home page sections
- Individual page templates
- Final prompt summary

Shall I continue?
