import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Calendar, ArrowRight, Filter } from 'lucide-react';
import SkeletonCard from './common/SkeletonCard';

export default function PrestasiPage() {
    const [filterCategory, setFilterCategory] = useState("Semua");
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    // Simulate loading state (remove when connecting to real API)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000); // 1 second delay
        return () => clearTimeout(timer);
    }, []);

    const ALL_ACHIEVEMENTS = [
        {
            id: 1, title: "Juara 1 Basket Putra DBL East Java Series 2025", category: "Olahraga", level: "Provinsi", year: "2025",
            desc: "Tim Basket Putra SMAPA berhasil mempertahankan gelar juara setelah pertarungan sengit di final melawan SMA unggulan Surabaya.",
            img: "https://images.unsplash.com/photo-1546519638-68e109498ee2?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2, title: "Medali Emas Olimpiade Sains Nasional (OSN) Matematika", category: "Akademik", level: "Nasional", year: "2025",
            desc: "Ananda Budi Santoso mengharumkan nama sekolah dengan meraih medali emas pada kompetisi sains paling bergengsi di Indonesia.",
            img: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3, title: "Best Speaker Kompetisi Debat Bahasa Inggris ALSA UI", category: "Bahasa", level: "Nasional", year: "2025",
            desc: "Delegasi English Club SMAPA sukses menyabet gelar pembicara terbaik dalam ajang debat tingkat universitas se-Indonesia.",
            img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4, title: "Best Innovation Award Robotik Nasional", category: "Teknologi", level: "Nasional", year: "2025",
            desc: "Tim Robotik menciptakan alat penyiram tanaman otomatis berbasis IoT yang memukau juri.",
            img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 5, title: "Juara Harapan 1 Tari Kreasi Baru Jawa Timur", category: "Seni", level: "Provinsi", year: "2024",
            desc: "Sanggar Tari SMAPA menampilkan tarian kontemporer yang memukau juri se-Jawa Timur.",
            img: "https://images.unsplash.com/photo-1535525266644-dc2878296545?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 6, title: "Juara 1 Futsal Walikota Cup Jember 2025", category: "Olahraga", level: "Kota", year: "2025",
            desc: "Tim Futsal berhasil mengalahkan lawan-lawannya dengan skor telak pada final yang dramatis.",
            img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 7, title: "Juara 2 Lomba Karya Tulis Ilmiah Remaja", category: "Akademik", level: "Nasional", year: "2024",
            desc: "Penelitian tentang energi terbarukan berhasil meraih peringkat kedua tingkat nasional.",
            img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 8, title: "Finalis Kompetisi Video Kreatif Kemendikbud", category: "Seni", level: "Nasional", year: "2024",
            desc: "Video pendek bertema budaya lokal masuk 10 besar dari ribuan peserta se-Indonesia.",
            img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 9, title: "Juara 3 English Speech Contest SMA Se-Jember", category: "Bahasa", level: "Kabupaten", year: "2024",
            desc: "Siswi kelas XI berhasil meraih juara 3 dengan tema pidato tentang lingkungan hidup.",
            img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=600&q=80"
        }
    ];

    const categories = ["Semua", "Akademik", "Olahraga", "Seni", "Bahasa", "Teknologi"];
    const filteredData = ALL_ACHIEVEMENTS.filter((item) => {
        const matchCategory = filterCategory === "Semua" || item.category === filterCategory;
        const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <div className="bg-gray-50">
            {/* HERO */}
            <header className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <Trophy size={14} className="inline mr-2" />
                        Hall of Fame
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        Jejak <span className="text-emerald-400">Prestasi</span> Gemilang
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Bukti nyata dedikasi, kerja keras, dan semangat juara warga SMAN 4 Jember di kancah regional hingga nasional.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none">
                    <svg className="block w-full h-16 sm:h-24 text-gray-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </header>

            {/* MAIN */}
            <main className="container mx-auto px-6 py-12 -mt-10 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">

                    {/* Filter Bar */}
                    <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
                        <div className="flex flex-wrap justify-center gap-2">
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setFilterCategory(cat)}
                                    className={`px-5 py-2 rounded-full text-sm font-bold transition-all ${filterCategory === cat
                                        ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200"
                                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                        <div className="relative w-full md:w-72">
                            <input
                                type="text"
                                placeholder="Cari judul prestasi..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                            />
                            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        </div>
                    </div>

                    {/* Grid */}
                    {isLoading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {Array.from({ length: 6 }).map((_, index) => (
                                <SkeletonCard key={index} />
                            ))}
                        </div>
                    ) : filteredData.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredData.map((item) => (
                                <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                                    <div className="relative h-56 overflow-hidden">
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                                                <Medal size={12} /> {item.level}
                                            </span>
                                        </div>
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-4 right-4 z-10">
                                            <span className="bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-grow flex flex-col">
                                        <div className="flex items-center text-gray-400 text-xs mb-3 gap-2 font-medium">
                                            <Calendar size={14} /> <span>Tahun {item.year}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                                            {item.desc}
                                        </p>
                                        <button className="w-full py-2.5 rounded-lg border border-emerald-100 text-emerald-700 font-bold text-sm hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2 group-hover:border-emerald-200">
                                            Lihat Detail <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                            <Trophy size={64} className="mx-auto mb-4 text-gray-300" />
                            <h3 className="text-xl font-bold text-gray-400">Belum ada data ditemukan</h3>
                            <p className="text-gray-400">Coba ubah kata kunci pencarian atau kategori filter.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
