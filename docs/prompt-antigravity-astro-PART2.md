# PROMPT FOR ANTIGRAVITY - PART 2: COMPONENTS & HOME PAGE

*Continued from Part 1...*

---

### PHASE 1D: FOOTER & COMMON COMPONENTS (Week 1 - Day 5)

#### Step 4.1: Create Footer Component

**File: `src/components/layout/Footer.astro`**

```astro
---
import { MapPin, Phone, Mail, Instagram, Youtube } from 'lucide-react';
import { CONTACT_INFO, SOCIAL_MEDIA } from '@/lib/constants';

const footerMenus = {
  menuUtama: [
    { label: "Beranda", link: "/" },
    { label: "Prestasi", link: "/prestasi" },
    { label: "Informasi", link: "/informasi" },
    { label: "Galeri", link: "/galeri" },
    { label: "PPDB 2026", link: "/ppdb" }
  ],
  tautanPenting: [
    { label: "Profil Sekolah", link: "/profil" },
    { label: "Visi & Misi", link: "/profil/visi-misi" },
    { label: "Tenaga Pendidik", link: "/profil/personalia" },
    { label: "Ekstrakurikuler", link: "/kegiatan/ekstrakurikuler" },
    { label: "E-Library", link: "/fasilitas/e-library" }
  ]
};
---

<footer class="bg-dark-footer text-gray-300 pt-20 pb-0">
  <div class="container mx-auto px-6 mb-12">
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
      
      <!-- Column 1: Branding -->
      <div class="col-span-1">
        <div class="flex items-center space-x-3 mb-6">
          <div class="w-12 h-12 rounded-xl overflow-hidden shadow-lg">
            <img
              src="/image/logo_smapa.PNG"
              alt="Logo SMAN 4 Jember"
              class="w-full h-full object-contain"
            />
          </div>
          
          <div class="flex flex-col">
            <span class="font-extrabold text-2xl text-white tracking-wide font-space">
              SMAN 4 JEMBER
            </span>
            <span class="text-sm text-emerald-200 tracking-widest">
              Est. 1977
            </span>
          </div>
        </div>
        
        <p class="text-sm leading-relaxed mb-6 text-gray-400">
          Sekolah menengah atas yang berkomitmen mencetak generasi unggul, berkarakter, dan berprestasi di tingkat nasional maupun global.
        </p>
      </div>

      <!-- Column 2: Menu Utama -->
      <div class="col-span-1">
        <h4 class="text-white font-bold text-lg mb-6 font-space">Menu Utama</h4>
        <ul class="space-y-3">
          {footerMenus.menuUtama.map((item) => (
            <li class="flex items-center group">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 group-hover:scale-125 transition-transform"></span>
              <a href={item.link} class="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <!-- Column 3: Tautan Penting -->
      <div class="col-span-1">
        <h4 class="text-white font-bold text-lg mb-6 font-space">Tautan Penting</h4>
        <ul class="space-y-3">
          {footerMenus.tautanPenting.map((item) => (
            <li class="flex items-center group">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 group-hover:scale-125 transition-transform"></span>
              <a href={item.link} class="text-sm text-gray-400 hover:text-emerald-400 transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <!-- Column 4: Contact Info -->
      <div class="col-span-1">
        <h4 class="text-white font-bold text-lg mb-6 font-space">Hubungi Kami</h4>
        <div class="space-y-4 mb-6">
          <div class="flex items-start gap-3">
            <MapPin class="text-emerald-500 mt-0.5 shrink-0" size={18} />
            <span class="text-sm text-gray-400 leading-snug">
              {CONTACT_INFO.address}
            </span>
          </div>
          <div class="flex items-center gap-3">
            <Phone class="text-emerald-500 shrink-0" size={18} />
            <span class="text-sm text-gray-400">{CONTACT_INFO.phone}</span>
          </div>
          <div class="flex items-center gap-3">
            <Mail class="text-emerald-500 shrink-0" size={18} />
            <span class="text-sm text-gray-400">{CONTACT_INFO.email}</span>
          </div>
        </div>

        <!-- Map Preview (Decorative) -->
        <div class="w-full h-32 rounded-xl overflow-hidden border border-gray-700 shadow-lg relative group cursor-pointer">
          <img
            src="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
            alt="Map Location"
            class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          />
          <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div class="bg-emerald-500/20 backdrop-blur-sm p-2 rounded-full border border-emerald-400/50">
              <MapPin size={20} class="text-emerald-400 drop-shadow-md" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Motto Section -->
  <div class="container mx-auto px-6">
    <div class="flex justify-center">
      <div class="max-w-2xl w-full text-center">
        <p class="text-xl md:text-2xl font-serif text-white/90 tracking-widest py-4 opacity-90 border-t border-b border-gray-800/50">
          Berkarakter <span class="text-emerald-500 mx-2 text-lg">•</span> Inovatif <span class="text-emerald-500 mx-2 text-lg">•</span> Berprestasi
        </p>
      </div>
    </div>
  </div>

  <!-- Copyright Bar -->
  <div class="bg-black/40 backdrop-blur-sm py-6 border-t border-emerald-900/30 relative mt-4">
    <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
    
    <div class="container mx-auto px-6 md:pr-28">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-xs text-gray-500">
          &copy; 2016 – 2026, SMA Negeri 4 Jember. All rights reserved.
        </p>

        <div class="flex items-center space-x-6">
          <span class="text-gray-400 font-medium text-xs tracking-wider hidden md:inline uppercase">Follow us</span>
          <div class="flex space-x-4">
            <!-- YouTube -->
            <a 
              href={SOCIAL_MEDIA.youtube}
              target="_blank" 
              rel="noopener noreferrer"
              class="group relative w-8 h-8 flex items-center justify-center hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] rounded-full transition-shadow duration-300"
            >
              <div class="absolute inset-0 bg-red-600 rounded-full opacity-20 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></div>
              <div class="relative w-8 h-8 rounded-full bg-gray-800 group-hover:bg-red-600 flex items-center justify-center text-gray-400 group-hover:text-white transition-all duration-300 border border-gray-700 group-hover:border-red-500">
                <Youtube size={14} fill="currentColor" />
              </div>
            </a>
            
            <!-- Instagram -->
            <a 
              href={SOCIAL_MEDIA.instagram}
              target="_blank" 
              rel="noopener noreferrer"
              class="group relative w-8 h-8 flex items-center justify-center hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] rounded-full transition-shadow duration-300"
            >
              <div class="absolute inset-0 bg-pink-600 rounded-full opacity-20 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></div>
              <div class="relative w-8 h-8 rounded-full bg-gray-800 group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-red-500 group-hover:to-purple-500 flex items-center justify-center text-gray-400 group-hover:text-white transition-all duration-300 border border-gray-700 group-hover:border-pink-500">
                <Instagram size={14} />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
```

---

#### Step 4.2: Create WhatsApp Floating Button

**File: `src/components/common/WhatsAppButton.astro`**

```astro
---
import { CONTACT_INFO } from '@/lib/constants';

const whatsappLink = `https://wa.me/${CONTACT_INFO.whatsapp}`;
---

<a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  class="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all hover:scale-110 flex items-center justify-center group"
  aria-label="Chat on WhatsApp"
>
  <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" class="w-8 h-8">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
  <span class="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap ml-0 group-hover:ml-2 font-bold text-sm">
    Hubungi Admin
  </span>
</a>
```

---

### PHASE 1E: HOME PAGE COMPONENTS (Week 1 - Day 6-7 & Week 2)

#### Step 5.1: Hero Slider Component (React Island)

**File: `src/components/home/HeroSlider.tsx`**

```tsx
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const heroImages = [
  "/image/hero1.jpg",
  "/image/hero2.jpg",
  "/image/hero3.jpg",
  "/image/hero4.jpg"
];

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="relative h-screen flex items-center justify-center overflow-hidden bg-emerald-900">
      {/* Slider Images */}
      <div className="absolute inset-0 w-full h-full">
        {heroImages.map((img, index) => (
          <div
            key={index}
            className="absolute inset-0 w-full h-full transition-transform duration-[1500ms] ease-in-out"
            style={{
              transform: `translateX(${(index - currentIndex) * 100}%)`,
            }}
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover opacity-50"
            />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-20 container mx-auto px-6 text-center text-white mt-16">
        <h1 className="font-space text-5xl md:text-8xl font-extrabold mb-4 leading-tight tracking-tight drop-shadow-xl animate-fade-in-up">
          SMAN 4 JEMBER
        </h1>
        <p className="text-2xl md:text-4xl font-light mb-12 drop-shadow-md text-emerald-50 animate-fade-in-up delay-100">
          Generasi Unggul, Berkarakter & Berprestasi
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center gap-4 animate-fade-in-up delay-200">
          <a 
            href="/ppdb" 
            className="bg-emerald-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 text-lg group"
          >
            Info PPDB 2026 
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a 
            href="/profil" 
            className="bg-white text-gray-800 px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 border border-gray-200 text-lg"
          >
            <Play size={20} className="text-gray-800" /> Profil Sekolah
          </a>
        </div>
      </div>

      {/* Wave Decoration */}
      <div className="absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none">
        <svg className="block w-full h-24 sm:h-32 text-gray-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-32 md:bottom-24 z-30 flex space-x-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </header>
  );
}
```

---

#### Step 5.2: Stats Section Component

**File: `src/components/home/StatsSection.astro`**

```astro
---
import { Award, BookOpen, Users, Star } from 'lucide-react';

const stats = [
  { icon: Award, label: "Akreditasi A" },
  { icon: BookOpen, label: "Kurikulum Merdeka" },
  { icon: Users, label: "Berdiri 1977" },
  { icon: Star, label: "Sekolah Adiwiyata" },
];
---

<section class="py-20 container mx-auto px-6">
  <div class="text-center mb-16">
    <h2 class="text-3xl font-bold text-emerald-800 tracking-wide font-space">KEUNGGULAN KAMI</h2>
    <div class="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
  </div>

  <div class="flex flex-wrap justify-center gap-12 md:gap-20">
    {stats.map((item) => {
      const Icon = item.icon;
      return (
        <div class="flex flex-col items-center group">
          <div class="w-16 h-16 rounded-full border border-emerald-200 bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
            <Icon size={28} />
          </div>
          <h3 class="font-bold text-lg text-gray-800 text-center font-space">{item.label}</h3>
        </div>
      );
    })}
  </div>
</section>
```

---

#### Step 5.3: Featured Achievements Component

**File: `src/components/home/FeaturedAchievements.astro`**

```astro
---
import { getCollection } from 'astro:content';
import { ArrowRight, Trophy, Medal, Calendar } from 'lucide-react';

// Get latest 3 achievements
const allAchievements = await getCollection('achievements');
const featuredAchievements = allAchievements
  .sort((a, b) => b.data.dateAchieved.getTime() - a.data.dateAchieved.getTime())
  .slice(0, 3);
---

<section class="py-20 bg-white relative overflow-hidden">
  {/* Background Decorations */}
  <div class="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
  <div class="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-yellow-50 rounded-full blur-3xl opacity-50"></div>

  <div class="container mx-auto px-6 relative z-10">
    <div class="flex flex-col md:flex-row justify-between items-end mb-12">
      <div>
        <span class="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full inline-flex items-center mb-4 shadow-md">
          <Trophy size={12} class="mr-2" /> Hall of Fame
        </span>
        <h2 class="text-4xl md:text-5xl font-extrabold text-emerald-950 leading-tight font-space">
          Prestasi <span class="text-emerald-500">Terbaru</span>
        </h2>
      </div>
      <a 
        href="/prestasi" 
        class="hidden md:flex items-center bg-white border border-gray-200 text-emerald-950 font-bold px-6 py-3 rounded-full hover:shadow-lg hover:border-emerald-200 transition-all duration-300 group mt-4 md:mt-0 text-sm"
      >
        Lihat Semua Prestasi 
        <ArrowRight size={18} class="ml-2 group-hover:translate-x-1 transition-transform text-emerald-600" />
      </a>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      {featuredAchievements.map((achievement) => (
        <div class="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex flex-col h-full group">
          <div class="relative h-64 overflow-hidden">
            <div class="absolute top-4 left-4 z-20">
              <span class="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center">
                <Medal size={12} class="mr-1" /> {achievement.data.level}
              </span>
            </div>
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <img
              src={achievement.data.image}
              alt={achievement.data.title}
              class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div class="absolute bottom-4 left-4 z-20">
              <span class="text-white text-[10px] font-bold bg-emerald-600 px-3 py-1 rounded shadow-sm uppercase tracking-wide">
                {achievement.data.category}
              </span>
            </div>
          </div>
          
          <div class="p-6 flex-grow flex flex-col">
            <h3 class="text-lg font-bold text-gray-800 mb-3 leading-snug group-hover:text-emerald-600 transition-colors">
              {achievement.data.title}
            </h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
              {achievement.body}
            </p>
            <div class="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
              <span class="text-gray-400 text-xs flex items-center">
                <Calendar size={12} class="mr-1" /> 
                {achievement.data.year}
              </span>
              <a 
                href={`/prestasi/${achievement.slug}`}
                class="text-emerald-700 font-bold text-xs bg-emerald-50 px-3 py-2 rounded hover:bg-emerald-100 transition-colors flex items-center uppercase tracking-wider"
              >
                Detail <ArrowRight size={12} class="ml-1" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

#### Step 5.4: Principal Message Component

**File: `src/components/home/PrincipalMessage.astro`**

```astro
---
import { Play } from 'lucide-react';
import { PRINCIPAL_NAME } from '@/lib/constants';
---

<section class="py-24 bg-gradient-to-br from-amber-500 via-orange-400 to-yellow-400 text-white relative overflow-hidden">
  {/* Transition Wave */}
  <div class="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
    <svg class="relative block w-full h-12 md:h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
      <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
    </svg>
  </div>

  <div class="absolute inset-0 opacity-10" style="background-image: radial-gradient(circle, #ffffff 2px, transparent 2px); background-size: 30px 30px;"></div>

  <div class="container mx-auto px-6 relative z-10 pt-8">
    <div class="grid md:grid-cols-2 gap-12 items-center">
      <div class="text-center md:text-left">
        <span class="uppercase tracking-widest text-white/90 text-sm font-bold mb-2 block">Sambutan Kepala Sekolah</span>
        <h2 class="text-3xl md:text-5xl font-extrabold mb-8 text-white drop-shadow-sm font-space">PIMPINAN SEKOLAH</h2>

        {/* White Glass Card */}
        <div class="bg-white/20 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-xl relative">
          <div class="absolute -top-6 -left-4 text-white/30">
            <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor">
              <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91197 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" />
            </svg>
          </div>

          <p class="text-lg md:text-xl italic mb-6 text-white font-medium leading-relaxed relative z-10">
            "Pendidikan bukan hanya tentang mengisi wadah, tetapi menyalakan api. Kami berkomitmen mencetak lulusan yang berkarakter, inovatif, dan berprestasi."
          </p>
          <div>
            <h3 class="text-2xl font-bold text-white tracking-wide">{PRINCIPAL_NAME}</h3>
            <p class="text-white/90 font-medium">Kepala Sekolah</p>
          </div>
        </div>
      </div>

      <div class="relative group">
        <div class="absolute -inset-4 bg-orange-500/40 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
        <div class="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 aspect-video bg-gray-900">
          <img
            src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
            alt="Kepala Sekolah"
            class="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          <div class="absolute inset-0 flex items-center justify-center">
            <button class="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-orange-500 transition-all">
              <Play fill="currentColor" size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
```

---

**Due to length constraints, I'll continue with the remaining components in the final summary section.**

---

## 🎯 FINAL PROMPT SUMMARY FOR ANTIGRAVITY

**Copy this exact prompt to send to Antigravity AI:**

```
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
```

---

