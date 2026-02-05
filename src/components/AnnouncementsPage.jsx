import React, { useState } from 'react';
import { Calendar, ArrowRight, Bell, FileText } from 'lucide-react';

export default function AnnouncementsPage() {
    const [filterCategory, setFilterCategory] = useState("Semua");
    const [searchTerm, setSearchTerm] = useState("");

    // Announcements data
    const ANNOUNCEMENTS = [
        {
            id: 1,
            title: "Jadwal Penilaian Akhir Semester Ganjil 2024/2025",
            date: "5 Februari 2025",
            category: "Akademik",
            excerpt: "Pengumuman jadwal pelaksanaan Penilaian Akhir Semester (PAS) Ganjil untuk tahun ajaran 2024/2025. Semua siswa diharapkan mempersiapkan diri dengan baik.",
            content: "Penilaian Akhir Semester akan dilaksanakan tanggal 10-17 Februari 2025 dengan sistem offline. Siswa wajib membawa kartu peserta ujian dan alat tulis.",
            img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 2,
            title: "Edaran Libur Hari Raya Idul Fitri 1446 H",
            date: "20 Januari 2025",
            category: "Lainnya",
            excerpt: "Pemberitahuan jadwal libur sekolah dalam rangka Hari Raya Idul Fitri 1446 Hijriah dan cuti bersama yang telah ditetapkan pemerintah.",
            content: "Libur sekolah berlaku tanggal 28 Maret - 5 April 2025. Siswa diharapkan kembali masuk pada tanggal 7 April 2025.",
            img: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 3,
            title: "Pengambilan Raport Semester 2 Tahun Ajaran 2024/2025",
            date: "15 Desember 2024",
            category: "Akademik",
            excerpt: "Informasi teknis pengambilan Laporan Hasil Belajar (Raport) semester genap bagi wali murid atau siswa kelas X, XI, dan XII.",
            content: "Pengambilan raport dilaksanakan tanggal 20 Desember 2024 pukul 08.00-12.00 WIB di ruang kelas masing-masing. Wali murid wajib mengisi form kehadiran.",
            img: "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 4,
            title: "Sosialisasi SNBP 2025 untuk Siswa Kelas XII",
            date: "10 Desember 2024",
            category: "Kesiswaan",
            excerpt: "Undangan mengikuti sosialisasi Seleksi Nasional Berdasarkan Prestasi (SNBP) tahun 2025 bagi seluruh siswa kelas XII dan orang tua/wali.",
            content: "Sosialisasi akan dilaksanakan pada Sabtu, 14 Desember 2024 pukul 09.00 WIB di Aula SMAPA dengan narasumber dari Tim PTN.",
            img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 5,
            title: "Pendaftaran Ekstrakurikuler Semester Genap 2025",
            date: "28 November 2024",
            category: "Kesiswaan",
            excerpt: "Dibuka pendaftaran ekstrakurikuler untuk semester genap tahun ajaran 2024/2025. Tersedia 15 pilihan ekstrakurikuler untuk siswa kelas X dan XI.",
            content: "Pendaftaran dibuka hingga 5 Desember 2024 melalui Google Form yang akan dibagikan melalui wali kelas masing-masing.",
            img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 6,
            title: "Jadwal Classmeeting Semester Ganjil 2024",
            date: "15 November 2024",
            category: "Agenda",
            excerpt: "Pengumuman jadwal dan teknis pelaksanaan Classmeeting Semester Ganjil dengan berbagai cabang lomba olahraga dan seni.",
            content: "Classmeeting dilaksanakan tanggal 18-20 Desember 2024. Pendaftaran tim per kelas dibuka hingga 1 Desember 2024.",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 7,
            title: "Penutupan Sementara Kantin Sekolah",
            date: "10 November 2024",
            category: "Lainnya",
            excerpt: "Pemberitahuan penutupan sementara kantin sekolah untuk renovasi dan perbaikan fasilitas. Siswa dapat menggunakan alternatif kantin mobile.",
            content: "Kantin ditutup mulai 12-20 November 2024. Selama masa renovasi, kantin mobile akan tersedia di area parkir timur.",
            img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 8,
            title: "Himbauan Protokol Kesehatan di Lingkungan Sekolah",
            date: "1 November 2024",
            category: "Lainnya",
            excerpt: "Himbauan kepada seluruh warga sekolah untuk tetap menjaga protokol kesehatan guna mencegah penyebaran penyakit menular.",
            content: "Siswa yang sakit diharapkan istirahat di rumah. Tersedia wastafel dan hand sanitizer di setiap koridor sekolah.",
            img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80"
        },
        {
            id: 9,
            title: "Pembukaan Pendaftaran PPDB Gelombang 1 Tahun 2025",
            date: "25 Oktober 2024",
            category: "Kesiswaan",
            excerpt: "Informasi pembukaan pendaftaran peserta didik baru (PPDB) gelombang 1 untuk tahun ajaran 2025/2026 dengan jalur prestasi dan zonasi.",
            content: "Pendaftaran PPDB dibuka tanggal 1-10 Juni 2025 secara online. Informasi lengkap dapat diakses di website resmi sekolah.",
            img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80"
        }
    ];

    // Categories for filtering
    const categories = ["Semua", "Akademik", "Agenda", "Kesiswaan", "Lainnya"];

    // Filter logic
    const filteredAnnouncements = ANNOUNCEMENTS.filter(announcement => {
        const matchesCategory = filterCategory === "Semua" || announcement.category === filterCategory;
        const matchesSearch = announcement.title.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-gray-50">

            {/* HERO SECTION */}
            <header className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <Bell size={14} className="inline mr-2" />
                        Latest Updates
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        Pengumuman <span className="text-emerald-400">Sekolah</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Informasi terkini dan agenda resmi SMAN 4 Jember untuk siswa, orang tua, dan seluruh warga sekolah.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none">
                    <svg className="block w-full h-16 sm:h-24 text-gray-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </header>

            {/* MAIN CONTENT - ANNOUNCEMENTS GRID */}
            <main className="container mx-auto px-6 py-12 -mt-10 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">

                    <div className="text-center mb-12">
                        <h2 className="font-space font-bold text-3xl text-gray-900 mb-4">Pengumuman Terbaru</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Tetap update dengan informasi dan pengumuman resmi dari sekolah.
                        </p>
                    </div>

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
                                placeholder="Cari pengumuman..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-2.5 rounded-full border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 outline-none transition-all"
                            />
                            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>

                    {/* Grid Results */}
                    {filteredAnnouncements.length > 0 ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredAnnouncements.map((announcement) => (
                                <div key={announcement.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                                    {/* Image with fixed height */}
                                    <div className="relative h-64 overflow-hidden">
                                        <img
                                            src={announcement.img}
                                            alt={announcement.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                        {/* Category Badge */}
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                                {announcement.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="p-6 flex-grow flex flex-col">
                                        {/* Date */}
                                        <div className="flex items-center text-gray-500 text-sm mb-3 gap-2">
                                            <Calendar size={14} className="text-emerald-500" />
                                            <span>{announcement.date}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                                            {announcement.title}
                                        </h3>

                                        <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                                            {announcement.excerpt}
                                        </p>

                                        <button className="w-full py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                                            Baca Selengkapnya <ArrowRight size={14} />
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20">
                            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-100 rounded-full mb-4">
                                <FileText size={40} className="text-gray-400" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Tidak ada pengumuman ditemukan</h3>
                            <p className="text-gray-500 mb-6">Coba ubah filter atau kata kunci pencarian Anda.</p>
                            <button
                                onClick={() => { setFilterCategory("Semua"); setSearchTerm(""); }}
                                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-lg transition-colors"
                            >
                                Reset Filter
                            </button>
                        </div>
                    )}
                </div>
            </main>

        </div>
    );
}
