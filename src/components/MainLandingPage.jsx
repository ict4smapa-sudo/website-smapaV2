import React, { useState, useEffect } from 'react';
import { Menu, X, Instagram, Youtube, MapPin, Award, BookOpen, Users, ArrowRight, Play, Star, ChevronRight, Calendar, ExternalLink, Trophy, Medal, ChevronDown, Search, GraduationCap, Phone, Mail, ChevronLeft } from 'lucide-react';
import { navMenus } from '../constants/navigation';
import { heroImages, achievements, principalName, missions, newsItems, ekstrakurikuler } from '../constants/homepageData';

export default function MainLandingPage() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
    const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const scrollTo = (link) => {
        if (link === "#") return;

        setIsMobileMenuOpen(false);
        const id = link.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        } else {
            if (link.startsWith('#')) {
                console.log(`Section ${id} belum tersedia.`);
            } else {
                window.location.href = link;
            }
        }
    };

    // Hero slider navigation functions
    const nextSlide = () => {
        setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    };

    const prevSlide = () => {
        setCurrentHeroIndex((prevIndex) => (prevIndex - 1 + heroImages.length) % heroImages.length);
    };

    // Search function with keyword matching
    const getFilteredMenus = () => {
        if (!searchQuery.trim()) return [];

        const query = searchQuery.toLowerCase();
        const results = [];

        navMenus.forEach((menu) => {
            const parentMatch =
                menu.label.toLowerCase().includes(query) ||
                (menu.keywords && menu.keywords.toLowerCase().includes(query));

            if (parentMatch && !menu.items) {
                results.push({ ...menu, type: 'parent' });
            }

            if (menu.items) {
                menu.items.forEach((subItem) => {
                    const subMatch =
                        subItem.label.toLowerCase().includes(query) ||
                        (subItem.keywords && subItem.keywords.toLowerCase().includes(query));

                    if (subMatch) {
                        results.push({
                            ...subItem,
                            type: 'submenu',
                            parentLabel: menu.label
                        });
                    }
                });
            }
        });

        return results;
    };

    const filteredResults = getFilteredMenus();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHeroIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <div className="font-outfit text-gray-800 bg-gray-50 overflow-x-hidden">

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        .font-space { font-family: 'Space Grotesk', sans-serif; }
        .font-outfit { font-family: 'Outfit', sans-serif; }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .mobile-menu-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .mobile-menu-scroll::-webkit-scrollbar-thumb {
          background-color: #10b981;
          border-radius: 4px;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
      `}</style>

            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 h-[80px] flex items-center ${isScrolled
                ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-emerald-100'
                : 'bg-transparent border-b border-white/10'
                }`}>
                <div className="container mx-auto px-6 flex justify-between items-center">

                    <div className="flex items-center gap-3 group cursor-pointer" onClick={() => scrollTo('#home')}>
                        <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <img
                                src="/image/logo_smapa.PNG"
                                alt="Logo SMAN 4 Jember"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col">
                            <span className={`font-space font-extrabold text-xl leading-tight ${isScrolled ? 'text-emerald-950' : 'text-white'}`}>
                                SMAN 4
                            </span>
                            <span className={`text-sm font-medium tracking-widest ${isScrolled ? 'text-emerald-600/80' : 'text-emerald-100'}`}>
                                JEMBER <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-200/20 ml-1 border border-white/10">Est. 1977</span>
                            </span>
                        </div>
                    </div>

                    <div className="hidden lg:flex items-center gap-1 bg-emerald-950/10 backdrop-blur-sm p-1 rounded-full border border-white/10">
                        {navMenus.map((item, idx) => (
                            <div key={idx} className="relative group">
                                {item.items ? (
                                    <div className={`px-4 py-2 rounded-full text-xs xl:text-sm font-bold flex items-center gap-1 cursor-default transition-all ${isScrolled ? 'text-emerald-800' : 'text-white/90'}`}>
                                        {item.label} <ChevronDown size={12} className="group-hover:rotate-180 transition-transform duration-300" />
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => scrollTo(item.link)}
                                        className={`px-4 py-2 rounded-full text-xs xl:text-sm font-bold transition-all duration-300 flex items-center gap-1 ${item.highlight
                                            ? 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm'
                                            : isScrolled
                                                ? 'text-emerald-800 hover:bg-emerald-100 hover:text-emerald-700'
                                                : 'text-white/90 hover:bg-white/10 hover:text-white'
                                            }`}
                                    >
                                        {item.label}
                                    </button>
                                )}

                                {item.items && (
                                    <div className="absolute top-full left-0 pt-3 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2 z-50">
                                        <div className="bg-white rounded-xl shadow-xl border border-emerald-100 overflow-hidden py-1">
                                            {item.items.map((subItem, subIdx) => (
                                                <a
                                                    key={subIdx}
                                                    href={subItem.link}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors flex items-center gap-2"
                                                >
                                                    <ChevronRight size={14} className="text-emerald-500" />
                                                    {subItem.label}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="hidden lg:flex items-center gap-3">
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className={`p-2 rounded-full transition-colors ${isScrolled ? 'hover:bg-emerald-50 text-emerald-700' : 'hover:bg-white/10 text-white'}`}
                        >
                            <Search size={20} />
                        </button>
                        <a href="/ppdb" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:scale-105 active:scale-95 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all duration-300 flex items-center gap-2 border border-white/20"><GraduationCap size={16} /> PPDB 2026</a>
                    </div>

                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen
                            ? <X className={isScrolled ? 'text-emerald-900' : 'text-white'} />
                            : <Menu className={isScrolled ? 'text-emerald-900' : 'text-white'} />
                        }
                    </button>
                </div>

                {isMobileMenuOpen && (
                    <div className="absolute top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-white border-t border-emerald-100 shadow-2xl overflow-y-auto animate-in slide-in-from-top-5">
                        <div className="p-6 flex flex-col gap-2 pb-20">
                            {navMenus.map((item, idx) => (
                                <div key={idx} className="border-b border-gray-100 last:border-none">
                                    {item.items ? (
                                        <div>
                                            <button
                                                onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === idx ? null : idx)}
                                                className="w-full flex justify-between items-center py-3 px-2 rounded-lg hover:bg-emerald-50 font-bold text-emerald-800 text-left"
                                            >
                                                {item.label}
                                                <ChevronDown size={18} className={`transform transition-transform duration-300 ${activeMobileSubmenu === idx ? 'rotate-180' : ''}`} />
                                            </button>

                                            <div className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-lg ${activeMobileSubmenu === idx ? 'max-h-96 opacity-100 mt-1 mb-2' : 'max-h-0 opacity-0'}`}>
                                                {item.items.map((subItem, subIdx) => (
                                                    <a
                                                        key={subIdx}
                                                        href={subItem.link}
                                                        className="block px-6 py-3 text-sm text-gray-600 hover:text-emerald-600 border-l-2 border-transparent hover:border-emerald-500"
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {subItem.label}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <button
                                            onClick={() => scrollTo(item.link)}
                                            className={`w-full text-left py-3 px-2 rounded-lg font-bold ${item.highlight ? 'bg-emerald-600 text-white mt-2 shadow-md text-center' : 'text-emerald-800 hover:bg-emerald-50'}`}
                                        >
                                            {item.label}
                                        </button>
                                    )}
                                </div>
                            ))}

                            <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-bold shadow-lg mt-4 flex justify-center items-center gap-2">
                                <GraduationCap size={20} /> Daftar PPDB Sekarang
                            </button>
                        </div>
                    </div>
                )}
            </nav>

            {/* Search Overlay */}
            {isSearchOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-start justify-center pt-24 px-4">
                    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-top-10 duration-300">
                        <div className="p-6 border-b border-gray-200 flex items-center gap-4">
                            <Search size={24} className="text-emerald-600" />
                            <input
                                type="text"
                                placeholder="Cari halaman, menu, atau fitur..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="flex-1 text-lg outline-none text-gray-800 placeholder:text-gray-400"
                                autoFocus
                            />
                            <button
                                onClick={() => {
                                    setIsSearchOpen(false);
                                    setSearchQuery('');
                                }}
                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                            >
                                <X size={20} className="text-gray-600" />
                            </button>
                        </div>

                        <div className="max-h-96 overflow-y-auto">
                            {searchQuery.trim() === '' ? (
                                <div className="p-8 text-center text-gray-500">
                                    <BookOpen size={48} className="mx-auto mb-4 text-gray-300" />
                                    <p className="font-medium">Mulai mengetik untuk mencari...</p>
                                    <p className="text-sm mt-2">Cari berdasarkan nama menu atau kata kunci</p>
                                </div>
                            ) : filteredResults.length === 0 ? (
                                <div className="p-8 text-center text-gray-500">
                                    <Search size={48} className="mx-auto mb-4 text-gray-300" />
                                    <p className="font-medium">Tidak ada hasil untuk "{searchQuery}"</p>
                                    <p className="text-sm mt-2">Coba kata kunci lain</p>
                                </div>
                            ) : (
                                <div className="p-4">
                                    <p className="text-sm text-gray-500 mb-3 px-2">
                                        Ditemukan {filteredResults.length} hasil
                                    </p>
                                    {filteredResults.map((result, idx) => (
                                        <a
                                            key={idx}
                                            href={result.link}
                                            onClick={() => {
                                                setIsSearchOpen(false);
                                                setSearchQuery('');
                                            }}
                                            className="block p-4 rounded-xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-200 mb-2"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                                    <BookOpen size={20} className="text-emerald-600" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="font-bold text-gray-900">{result.label}</h4>
                                                    {result.type === 'submenu' && (
                                                        <p className="text-sm text-gray-500">
                                                            {result.parentLabel} <ChevronRight size={12} className="inline" /> {result.label}
                                                        </p>
                                                    )}
                                                </div>
                                                <ChevronRight size={18} className="text-emerald-600" />
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}

            <header id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-emerald-900 group">

                <div className="absolute inset-0 w-full h-full">
                    {heroImages.map((img, index) => (
                        <div
                            key={index}
                            className="absolute inset-0 w-full h-full transition-transform duration-[1500ms] ease-in-out"
                            style={{
                                transform: `translateX(${(index - currentHeroIndex) * 100}%)`,
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

                <div className="relative z-20 container mx-auto px-6 text-center text-white mt-16">
                    <h1 className="font-space text-5xl md:text-8xl font-extrabold mb-4 leading-tight tracking-tight drop-shadow-xl animate-fade-in-up">
                        SMAN 4 JEMBER
                    </h1>
                    <p className="text-2xl md:text-4xl font-light mb-12 drop-shadow-md text-emerald-50 animate-fade-in-up delay-100">
                        Generasi Unggul, Berkarakter & Berprestasi
                    </p>

                    <div className="flex flex-col md:flex-row justify-center items-center gap-4 animate-fade-in-up delay-200">
                        <a href="/ppdb" className="bg-emerald-600 text-white px-8 py-3.5 rounded-full font-bold hover:bg-emerald-700 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 text-lg group">
                            Info PPDB 2026 <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#profil" className="bg-white text-gray-800 px-8 py-3.5 rounded-full font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2 border border-gray-200 text-lg">
                            <Play size={20} className="text-gray-800" /> Profil Sekolah
                        </a>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none">
                    <svg className="block w-full h-24 sm:h-32 text-gray-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>

                {/* Invisible Click Zones for Slider Navigation */}
                <button
                    onClick={prevSlide}
                    className="absolute inset-y-0 left-0 w-1/4 z-20 cursor-pointer opacity-0"
                    aria-label="Previous slide"
                />
                <button
                    onClick={nextSlide}
                    className="absolute inset-y-0 right-0 w-1/4 z-20 cursor-pointer opacity-0"
                    aria-label="Next slide"
                />

                <div className="absolute bottom-32 md:bottom-24 z-30 flex space-x-3">
                    {heroImages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentHeroIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentHeroIndex ? 'bg-white w-8' : 'bg-white/50 hover:bg-white/80'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </header>

            <section className="py-20 container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-emerald-800 tracking-wide font-space">KEUNGGULAN KAMI</h2>
                    <div className="w-16 h-1 bg-emerald-500 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="flex flex-wrap justify-center gap-12 md:gap-20">
                    {[
                        { icon: <Award size={28} />, label: "Akreditasi A" },
                        { icon: <BookOpen size={28} />, label: "Kurikulum Merdeka" },
                        { icon: <Users size={28} />, label: "Berdiri 1977" },
                        { icon: <Star size={28} />, label: "Sekolah Adiwiyata" },
                    ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center group">
                            <div className="w-16 h-16 rounded-full border border-emerald-200 bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300 shadow-sm">
                                {item.icon}
                            </div>
                            <h3 className="font-bold text-lg text-gray-800 text-center font-space">{item.label}</h3>
                        </div>
                    ))}
                </div>
            </section>

            <section id="prestasi" className="pt-16 pb-20 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-yellow-50 rounded-full blur-3xl opacity-50"></div>

                <div className="container mx-auto px-6 relative z-10">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                        <div>
                            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full inline-flex items-center mb-4 shadow-md">
                                <Trophy size={12} className="mr-2" /> Hall of Fame
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 leading-tight font-space">
                                Prestasi <span className="text-emerald-500">Terbaru</span>
                            </h2>
                        </div>
                        <a href="#" className="hidden md:flex items-center bg-white border border-gray-200 text-emerald-950 font-bold px-6 py-3 rounded-full hover:shadow-lg hover:border-emerald-200 transition-all duration-300 group mt-4 md:mt-0 text-sm">
                            Lihat Semua Prestasi <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform text-emerald-600" />
                        </a>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {achievements.map((item) => (
                            <div key={item.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100 flex flex-col h-full group">
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute top-4 left-4 z-20">
                                        <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center">
                                            <Medal size={12} className="mr-1" /> {item.level}
                                        </span>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-4 left-4 z-20">
                                        <span className="text-white text-[10px] font-bold bg-emerald-600 px-3 py-1 rounded shadow-sm uppercase tracking-wide">
                                            {item.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-lg font-bold text-gray-800 mb-3 leading-snug group-hover:text-emerald-600 transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                                        {item.desc}
                                    </p>
                                    <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                                        <span className="text-gray-400 text-xs flex items-center">
                                            <Calendar size={12} className="mr-1" /> 2025
                                        </span>
                                        <button className="text-emerald-700 font-bold text-xs bg-emerald-50 px-3 py-2 rounded hover:bg-emerald-100 transition-colors flex items-center uppercase tracking-wider">
                                            Detail <ArrowRight size={12} className="ml-1" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="profil" className="py-24 bg-gradient-to-br from-amber-500 via-orange-400 to-yellow-400 text-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full overflow-hidden leading-none z-20">
                    <svg className="relative block w-full h-12 md:h-24" data-name="Layer 1" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
                    </svg>
                </div>

                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

                <div className="container mx-auto px-6 relative z-10 pt-8">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="text-center md:text-left">
                            <span className="uppercase tracking-widest text-white/90 text-sm font-bold mb-2 block">Sambutan Kepala Sekolah</span>
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-white drop-shadow-sm font-space">PIMPINAN SEKOLAH</h2>

                            <div className="bg-white/20 backdrop-blur-md p-8 rounded-3xl border border-white/30 shadow-xl relative">
                                <div className="absolute -top-6 -left-4 text-white/30">
                                    <svg width="60" height="60" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91197 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z" /></svg>
                                </div>

                                <p className="text-lg md:text-xl italic mb-6 text-white font-medium leading-relaxed relative z-10">
                                    "Pendidikan bukan hanya tentang mengisi wadah, tetapi menyalakan api. Kami berkomitmen mencetak lulusan yang berkarakter, inovatif, dan berprestasi."
                                </p>
                                <div>
                                    <h3 className="text-2xl font-bold text-white tracking-wide">{principalName}</h3>
                                    <p className="text-white/90 font-medium">Kepala Sekolah</p>
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-4 bg-orange-500/40 rounded-full blur-2xl opacity-0 group-hover:opacity-50 transition-opacity"></div>
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/30 aspect-video bg-gray-900">
                                <img
                                    src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Kepala Sekolah"
                                    className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <button className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-orange-500 transition-all">
                                        <Play fill="currentColor" size={24} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="visi-misi" className="py-12 container mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-emerald-800 font-space">Visi & Misi</h2>
                    <div className="w-16 h-1 bg-emerald-500 mx-auto mt-2 rounded-full"></div>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="col-span-1 bg-white p-8 rounded-2xl shadow-xl border-t-4 border-emerald-500 h-full">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                            <Star className="text-emerald-500 mr-2" />
                            Visi
                        </h3>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            "Terwujudnya lulusan yang <span className="font-bold text-emerald-700">berkarakter</span>, <span className="font-bold text-emerald-700">inovatif</span>, dan <span className="font-bold text-emerald-700">berprestasi</span>."
                        </p>
                        <div className="mt-6 p-4 bg-emerald-50 rounded-lg border border-emerald-100">
                            <p className="font-bold text-emerald-800 text-sm mb-2">MOTTO</p>
                            <p className="italic text-emerald-600">Berkarakter, Berinovasi, Berkreasi</p>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full">
                            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                                <ChevronRight className="text-emerald-500 mr-2" />
                                Misi Sekolah
                            </h3>
                            <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                                {missions.map((mission, idx) => (
                                    <div key={idx} className="flex items-start">
                                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold mt-0.5 mr-3">
                                            {idx + 1}
                                        </div>
                                        <p className="text-gray-600 text-sm leading-relaxed">{mission}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="berita" className="pt-12 pb-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                        <div>
                            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-[10px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full inline-flex items-center mb-4 shadow-md">
                                <ExternalLink size={12} className="mr-2" /> Informasi Terkini
                            </span>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-emerald-950 leading-tight font-space">
                                Kabar <span className="text-emerald-500">SMAPA</span>
                            </h2>
                        </div>
                        <a href="#" className="hidden md:flex items-center bg-white border border-gray-200 text-emerald-950 font-bold px-6 py-3 rounded-full hover:shadow-lg hover:border-emerald-200 transition-all duration-300 group mt-4 md:mt-0 text-sm">
                            Indeks Berita <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform text-emerald-600" />
                        </a>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {newsItems.map((news) => (
                            <div key={news.id} className="bg-white rounded-lg shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 overflow-hidden border border-gray-100 group cursor-pointer">
                                <div className="relative h-48 overflow-hidden">
                                    <div className={`absolute top-4 right-4 ${news.color} text-white text-xs font-bold px-3 py-1 rounded-sm z-10 uppercase`}>
                                        {news.category}
                                    </div>
                                    <img
                                        src={news.img}
                                        alt={news.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center text-gray-400 text-xs mb-3">
                                        <Calendar size={14} className="mr-2" />
                                        {news.date}
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                                        {news.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {news.desc}
                                    </p>
                                    <span className="inline-block text-emerald-600 text-xs font-bold tracking-wider underline decoration-2 decoration-transparent group-hover:decoration-emerald-600 transition-all">
                                        BACA SELENGKAPNYA
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <section id="ekstra" className="pt-12 pb-20 bg-white mb-12">
                <div className="container mx-auto px-6 mb-8">
                    <h2 className="text-2xl font-bold text-emerald-900 border-l-4 border-emerald-500 pl-4 flex items-center font-space">
                        GALERI EKSTRAKURIKULER
                    </h2>
                </div>

                <div className="relative w-full overflow-hidden">
                    <div className="flex animate-scroll w-[200%] hover:pause">
                        {[...ekstrakurikuler, ...ekstrakurikuler].map((item, index) => (
                            <div key={index} className="flex-shrink-0 w-64 md:w-80 px-3">
                                <div className="relative rounded-xl overflow-hidden aspect-[4/3] group shadow-lg">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <div className="flex items-center space-x-2 mb-1">
                                            <span className="text-[10px] font-bold bg-white/20 backdrop-blur-sm text-white px-2 py-0.5 rounded border border-white/30 uppercase tracking-wider">{item.category}</span>
                                        </div>
                                        <h4 className="text-xl font-bold text-white drop-shadow-md">{item.name}</h4>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* FINAL STANDARDIZED FOOTER */}
            < footer id="kontak" className="bg-[#0B1120] text-gray-300 pt-12 pb-0 mt-0 border-t border-white/5" >
                <div className="container mx-auto px-6 mb-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                        {/* Col 1: Profile */}
                        <div className="col-span-1">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg border border-white/10">
                                    <img src="/image/logo_smapa.PNG" alt="Logo SMAN 4 Jember" className="w-full h-full object-contain" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="font-extrabold text-2xl text-white tracking-wide font-space uppercase">SMAN 4 JEMBER</span>
                                    <span className="text-sm text-emerald-400 tracking-widest font-bold">Est. 1977</span>
                                </div>
                            </div>
                            <p className="text-sm leading-relaxed mb-6 text-gray-400">
                                Sekolah menengah atas yang berkomitmen mencetak generasi unggul, berkarakter, dan berprestasi di tingkat nasional maupun global.
                            </p>
                        </div>

                        {/* Col 2: Navigation */}
                        <div className="col-span-1">
                            <h4 className="text-white font-bold text-lg mb-6 font-space border-l-4 border-emerald-500 pl-4">Menu Utama</h4>
                            <ul className="space-y-3">
                                {[
                                    { label: "Beranda", link: "/" },
                                    { label: "Prestasi", link: "/prestasi" },
                                    { label: "Informasi", link: "/informasi/pengumuman" },
                                    { label: "Galeri Foto", link: "/galeri/foto" },
                                    { label: "PPDB 2026", link: "/ppdb" }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 group-hover:scale-125 transition-transform"></span>
                                        <a href={item.link} className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 3: Links */}
                        <div className="col-span-1">
                            <h4 className="text-white font-bold text-lg mb-6 font-space border-l-4 border-emerald-500 pl-4">Tautan Penting</h4>
                            <ul className="space-y-3">
                                {[
                                    { label: "Profil Sekolah", link: "/profil/sejarah" },
                                    { label: "Visi & Misi", link: "/profil/visi-misi" },
                                    { label: "Tenaga Pendidik", link: "/profil/personalia" },
                                    { label: "Ekstrakurikuler", link: "/kegiatan/ekstrakurikuler" },
                                    { label: "E-Library", link: "/fasilitas/e-library" }
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 group-hover:scale-125 transition-transform"></span>
                                        <a href={item.link} className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">{item.label}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Col 4: Contact & Precise Map */}
                        <div className="col-span-1">
                            <h4 className="text-white font-bold text-lg mb-6 font-space border-l-4 border-emerald-500 pl-4">Hubungi Kami</h4>
                            <div className="space-y-3 mb-6">
                                <div className="flex items-start gap-3">
                                    <MapPin className="text-emerald-500 mt-0.5 shrink-0" size={18} />
                                    <span className="text-sm text-gray-400 leading-snug">Jl. Hayam Wuruk No. 145, Sempusari, Kaliwates, Jember</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="text-emerald-500 shrink-0" size={18} />
                                    <span className="text-sm text-gray-400">(0331) 484848</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="text-emerald-500 shrink-0" size={18} />
                                    <span className="text-sm text-gray-400">info@sman4jember.sch.id</span>
                                </div>
                            </div>
                            <div className="w-full h-32 rounded-xl overflow-hidden border border-gray-700 shadow-lg relative group hover:border-emerald-500/50 transition-all duration-500">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.303350247656!2d113.65802497576558!3d-8.18721669184428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd69403817f573f%3A0x6b772099307d8a6!2sSMAN%204%20Jember!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid"
                                    className="w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 border-0"
                                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slogan Middle Bar */}
                < div className="container mx-auto px-6" >
                    <div className="flex justify-center border-t border-gray-800/50">
                        <div className="max-w-2xl w-full text-center">
                            <p className="text-xl md:text-2xl font-serif text-white/90 tracking-widest py-8 opacity-90 border-t border-b border-gray-800/50 uppercase">
                                Berkarakter <span className="text-emerald-500 mx-2 text-lg">•</span> Inovatif <span className="text-emerald-500 mx-2 text-lg">•</span> Berprestasi
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar: Copyright & Socials (Collision Fix) */}
                <div className="bg-black/40 backdrop-blur-sm py-6 border-t border-emerald-900/30 relative mt-4">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
                    <div className="container mx-auto px-6">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:pr-24">
                            <p className="text-xs text-gray-500">
                                © 2016 – 2026, SMA Negeri 4 Jember. All rights reserved.
                            </p>
                            <div className="flex items-center space-x-6">
                                <span className="text-gray-400 font-medium text-xs tracking-wider hidden md:inline uppercase">Follow us in Social Media</span>
                                <div className="flex space-x-4">
                                    <a href="https://www.youtube.com/@SMAN4JEMBER" target="_blank" rel="noreferrer" className="group relative w-8 h-8 flex items-center justify-center hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] rounded-full transition-shadow duration-300">
                                        <div className="absolute inset-0 bg-red-600 rounded-full opacity-20 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></div>
                                        <div className="relative w-8 h-8 rounded-full bg-gray-800 group-hover:bg-red-600 flex items-center justify-center text-gray-400 group-hover:text-white transition-all border border-gray-700">
                                            <Youtube size={14} fill="currentColor" />
                                        </div>
                                    </a>
                                    <a href="https://www.instagram.com/sman4jember.official/" target="_blank" rel="noreferrer" className="group relative w-8 h-8 flex items-center justify-center hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] rounded-full transition-shadow duration-300">
                                        <div className="absolute inset-0 bg-pink-600 rounded-full opacity-20 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></div>
                                        <div className="relative w-8 h-8 rounded-full bg-gray-800 group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-red-500 group-hover:to-purple-500 flex items-center justify-center text-gray-400 group-hover:text-white transition-all border border-gray-700">
                                            <Instagram size={14} />
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

            <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-lg hover:bg-emerald-600 transition-all hover:scale-110 flex items-center justify-center group"
            >
                <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor" className="w-8 h-8">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap ml-0 group-hover:ml-2 font-bold text-sm">
                    Hubungi Admin
                </span>
            </a>
        </div>
    );
}
