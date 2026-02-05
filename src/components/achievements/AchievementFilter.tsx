import React, { useState } from 'react';
import { Trophy, Medal, Calendar, Award, ArrowRight, Filter } from 'lucide-react';

// DATA PRESTASI (Hardcoded agar aman & tidak error)
const ALL_ACHIEVEMENTS = [
    {
        id: 1,
        title: "Juara 1 Basket Putra DBL East Java",
        category: "Olahraga",
        level: "Provinsi",
        year: "2025",
        desc: "Tim Basket Putra SMAPA berhasil mempertahankan gelar juara setelah pertarungan sengit di final.",
        img: "https://images.unsplash.com/photo-1546519638-68e109498ee2?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        title: "Medali Emas Olimpiade Matematika (OSN)",
        category: "Akademik",
        level: "Nasional",
        year: "2025",
        desc: "Ananda Budi Santoso meraih medali emas pada kompetisi sains paling bergengsi.",
        img: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 3,
        title: "Juara 2 Lomba Debat Bahasa Inggris",
        category: "Bahasa",
        level: "Kabupaten",
        year: "2024",
        desc: "English Club SMAPA menyabet juara 2 dalam ajang debat antar SMA se-Jember.",
        img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        title: "Best Innovation Award Robotik",
        category: "Teknologi",
        level: "Nasional",
        year: "2025",
        desc: "Tim Robotik menciptakan alat penyiram tanaman otomatis berbasis IoT.",
        img: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        title: "Juara Harapan 1 Tari Kreasi Baru",
        category: "Seni",
        level: "Provinsi",
        year: "2024",
        desc: "Sanggar Tari SMAPA menampilkan tarian kontemporer yang memukau juri.",
        img: "https://images.unsplash.com/photo-1535525266644-dc2878296545?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        title: "Juara 1 Futsal Walikota Cup",
        category: "Olahraga",
        level: "Kota",
        year: "2025",
        desc: "Tim Futsal berhasil mengalahkan lawan-lawannya dengan skor telak.",
        img: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?auto=format&fit=crop&w=600&q=80"
    }
];

export default function AchievementFilter() {
    const [filterCategory, setFilterCategory] = useState("Semua");
    const [searchTerm, setSearchTerm] = useState("");

    // Daftar kategori unik
    const categories = ["Semua", "Akademik", "Olahraga", "Seni", "Bahasa", "Teknologi"];

    // Logic Filter
    const filteredData = ALL_ACHIEVEMENTS.filter((item) => {
        const matchCategory = filterCategory === "Semua" || item.category === filterCategory;
        const matchSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchCategory && matchSearch;
    });

    return (
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 -mt-20 relative z-20">
            {/* Search & Filter Header */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">

                {/* Kategori Buttons */}
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

                {/* Search Input */}
                <div className="relative w-full md:w-64">
                    <input
                        type="text"
                        placeholder="Cari prestasi..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-full border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                    />
                    <Filter className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                </div>
            </div>

            {/* Grid Cards */}
            {filteredData.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredData.map((item) => (
                        <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                            <div className="relative h-48 overflow-hidden">
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                                        <Medal size={12} /> {item.level}
                                    </span>
                                </div>
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute bottom-4 right-4 z-10">
                                    <span className="bg-emerald-600 text-white text-[10px] font-bold px-3 py-1 rounded shadow-sm uppercase">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <div className="flex items-center text-gray-400 text-xs mb-3 gap-2">
                                    <Calendar size={14} /> <span>{item.year}</span>
                                </div>
                                <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                    {item.desc}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20 text-gray-400">
                    <Trophy size={48} className="mx-auto mb-4 opacity-20" />
                    <p>Tidak ada prestasi ditemukan untuk kategori ini.</p>
                </div>
            )}
        </div>
    );
}