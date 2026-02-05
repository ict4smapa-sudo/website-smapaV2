import React, { useState, useEffect } from 'react';
import { Award, Search, Calendar, ArrowRight, Trophy, Medal } from 'lucide-react';

export default function SchoolAwardsPage() {
    // Filter states for achievements page
    const [filterCategory, setFilterCategory] = useState("Semua");
    const [searchTerm, setSearchTerm] = useState("");

    // School Awards data
    const ALL_ACHIEVEMENTS = [
        {
            id: 1, title: "Sekolah Adiwiyata Mandiri Tingkat Nasional 2024", category: "Lingkungan", level: "Nasional", year: "2024",
            desc: "SMAN 4 Jember berhasil meraih penghargaan Adiwiyata Mandiri dari Kementerian Lingkungan Hidup dan Kehutanan sebagai sekolah peduli lingkungan.",
            img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 2, title: "Juara 1 Lomba Budaya Mutu Sekolah Jawa Timur 2025", category: "Manajemen", level: "Provinsi", year: "2025",
            desc: "Penghargaan atas implementasi sistem manajemen mutu berbasis ISO 9001:2015 dengan kategori terbaik se-Jawa Timur.",
            img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 3, title: "Perpustakaan Terbaik Nasional 2024", category: "Perpustakaan", level: "Nasional", year: "2024",
            desc: "Perpustakaan SMAPA dinobatkan sebagai perpustakaan sekolah terbaik tingkat nasional oleh Perpusnas dengan koleksi lebih dari 15.000 buku.",
            img: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 4, title: "Sekolah Ramah Anak (SRA) Kategori Madya", category: "Manajemen", level: "Kabupaten", year: "2025",
            desc: "Penghargaan dari Pemkab Jember atas komitmen sekolah dalam menciptakan lingkungan yang aman dan nyaman bagi seluruh peserta didik.",
            img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 5, title: "Penghargaan Akreditasi A Unggul dari BAN-S/M", category: "Akademik", level: "Nasional", year: "2023",
            desc: "SMAN 4 Jember mempertahankan akreditasi A dengan nilai sempurna pada seluruh standar pendidikan nasional.",
            img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 6, title: "Sekolah Sehat Juara 1 Tingkat Provinsi", category: "Lingkungan", level: "Provinsi", year: "2024",
            desc: "Penghargaan atas penerapan Usaha Kesehatan Sekolah (UKS) terbaik dengan fasilitas kesehatan yang lengkap dan program promosi kesehatan aktif.",
            img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 7, title: "Best Practice Implementasi Kurikulum Merdeka", category: "Akademik", level: "Provinsi", year: "2025",
            desc: "Sekolah model implementasi Kurikulum Merdeka dengan inovasi pembelajaran berbasis project yang menjadi rujukan sekolah lain.",
            img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 8, title: "Anugerah Kihajar Kategori Pemanfaatan TIK", category: "Manajemen", level: "Nasional", year: "2024",
            desc: "Penghargaan dari Kemendikbud atas pemanfaatan teknologi informasi dan komunikasi dalam pembelajaran secara optimal.",
            img: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=600&q=80"
        },
        {
            id: 9, title: "Sekolah Inklusi Terbaik Jawa Timur", category: "Manajemen", level: "Provinsi", year: "2024",
            desc: "Apresiasi atas layanan pendidikan inklusif yang ramah terhadap anak berkebutuhan khusus dengan tenaga pendamping profesional.",
            img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
        }
    ];

    // Filter logic
    const categories = ["Semua", "Lingkungan", "Manajemen", "Perpustakaan", "Akademik"];
    const filteredData = ALL_ACHIEVEMENTS.filter((item) => {
        const matchCategory = filterCategory === "Semua" || item.category === filterCategory;
        const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <div className="font-outfit text-gray-800 bg-gray-50 overflow-x-hidden">

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        .font-space { font-family: 'Space Grotesk', sans-serif; }
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}</style>

            {/* HERO SECTION - SCHOOL AWARDS PAGE */}
            <header className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-yellow-100 shadow-lg">
                        <Award size={14} className="inline mr-2" />
                        Institutional Excellence
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        Penghargaan <span className="text-amber-200">Sekolah</span>
                    </h1>
                    <p className="text-xl text-amber-50 max-w-2xl mx-auto font-light leading-relaxed">
                        Pengakuan atas dedikasi institusi dalam memajukan pendidikan dan menciptakan lingkungan belajar yang berkualitas.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none">
                    <svg className="block w-full h-16 sm:h-24 text-gray-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </header>

            {/* MAIN CONTENT - FILTER & GRID */}
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
                                        ? "bg-amber-600 text-white shadow-lg shadow-amber-200"
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
                                placeholder="Cari penghargaan..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all"
                            />
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        </div>
                    </div>

                    {/* Grid Results */}
                    {filteredData.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredData.map((item) => (
                                <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                                    <div className="relative h-56 overflow-hidden">
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                                                <Award size={12} /> {item.level}
                                            </span>
                                        </div>
                                        <img src={item.img} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                        <div className="absolute bottom-4 right-4 z-10">
                                            <span className="bg-amber-600 text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm uppercase tracking-wider">
                                                {item.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6 flex-grow flex flex-col">
                                        <div className="flex items-center text-gray-400 text-xs mb-3 gap-2 font-medium">
                                            <Calendar size={14} /> <span>Tahun {item.year}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-amber-600 transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                                            {item.desc}
                                        </p>
                                        <button className="w-full py-2.5 rounded-lg border border-amber-100 text-amber-700 font-bold text-sm hover:bg-amber-50 transition-colors flex items-center justify-center gap-2 group-hover:border-amber-200">
                                            Lihat Detail <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-24 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                            <Award size={64} className="mx-auto mb-4 text-gray-300" />
                            <h3 className="text-xl font-bold text-gray-400">Belum ada data ditemukan</h3>
                            <p className="text-gray-400">Coba ubah kata kunci pencarian atau kategori filter.</p>
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
