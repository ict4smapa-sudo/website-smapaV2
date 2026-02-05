import React, { useState, useEffect } from 'react';
import { Menu, X, Search, ChevronDown, GraduationCap, BookOpen, ChevronRight } from 'lucide-react';
import { navMenus } from '../../constants/navigation';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    // Search function that checks both label AND keywords
    const getFilteredMenus = () => {
        if (!searchQuery.trim()) return [];

        const query = searchQuery.toLowerCase();
        const results = [];

        navMenus.forEach((menu) => {
            // Check parent menu label and keywords
            const parentMatch =
                menu.label.toLowerCase().includes(query) ||
                (menu.keywords && menu.keywords.toLowerCase().includes(query));

            if (parentMatch && !menu.items) {
                results.push({ ...menu, type: 'parent' });
            }

            // Check submenu items
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

    return (
        <>
            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 h-[80px] flex items-center ${isScrolled
                    ? 'bg-white/90 backdrop-blur-md shadow-lg border-b border-emerald-100'
                    : 'bg-emerald-900 border-b border-white/10'
                }`}>
                <div className="container mx-auto px-6 flex justify-between items-center">

                    <a href="/" className="flex items-center gap-3 group cursor-pointer">
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
                    </a>

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
                        <a href="/ppdb" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:scale-105 active:scale-95 text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg shadow-emerald-500/30 transition-all duration-300 flex items-center gap-2 border border-white/20">
                            <GraduationCap size={16} /> PPDB 2026
                        </a>
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

                            <a href="/ppdb" className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-bold shadow-lg mt-4 flex justify-center items-center gap-2">
                                <GraduationCap size={20} /> Daftar PPDB Sekarang
                            </a>
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
        </>
    );
}
