import React, { useState } from 'react';
import { Download, FileText, File, Search, Image as ImageIcon } from 'lucide-react';

export default function DownloadPage() {
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('Semua');

    const categories = ['Semua', 'Akademik', 'Kesiswaan', 'PPDB', 'Umum'];

    const files = [
        {
            id: 1,
            title: 'Kalender Akademik 2025/2026',
            category: 'Akademik',
            type: 'PDF',
            size: '2.4 MB',
            downloadUrl: '#'
        },
        {
            id: 2,
            title: 'Formulir Pendaftaran Ulang',
            category: 'PPDB',
            type: 'PDF',
            size: '850 KB',
            downloadUrl: '#'
        },
        {
            id: 3,
            title: 'Tata Tertib Siswa SMAN 4 Jember',
            category: 'Kesiswaan',
            type: 'PDF',
            size: '1.2 MB',
            downloadUrl: '#'
        },
        {
            id: 4,
            title: 'Panduan E-Learning untuk Siswa',
            category: 'Akademik',
            type: 'PDF',
            size: '3.5 MB',
            downloadUrl: '#'
        },
        {
            id: 5,
            title: 'Logo SMAN 4 Jember (High Res)',
            category: 'Umum',
            type: 'PNG',
            size: '5.1 MB',
            downloadUrl: '#'
        },
        {
            id: 6,
            title: 'Surat Keterangan Siswa Aktif',
            category: 'Kesiswaan',
            type: 'DOCX',
            size: '450 KB',
            downloadUrl: '#'
        },
        {
            id: 7,
            title: 'Panduan PPDB Online 2026',
            category: 'PPDB',
            type: 'PDF',
            size: '2.8 MB',
            downloadUrl: '#'
        },
        {
            id: 8,
            title: 'Jadwal Pelajaran Semester Genap',
            category: 'Akademik',
            type: 'PDF',
            size: '680 KB',
            downloadUrl: '#'
        }
    ];

    const filteredFiles = files.filter(file => {
        const matchesCategory = activeCategory === 'Semua' || file.category === activeCategory;
        const matchesSearch = file.title.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const getFileIcon = (type) => {
        if (type === 'PDF') return <FileText className="text-red-500" size={28} />;
        if (type === 'DOCX') return <File className="text-blue-500" size={28} />;
        if (type === 'PNG' || type === 'JPG') return <ImageIcon className="text-purple-500" size={28} />;
        return <FileText className="text-gray-500" size={28} />;
    };

    return (
        <div className="font-outfit text-gray-800 bg-gray-50 min-h-screen flex flex-col">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
                .font-space { font-family: 'Space Grotesk', sans-serif; }
                .font-outfit { font-family: 'Outfit', sans-serif; }
            `}</style>

            {/* HERO SECTION */}
            <header className="relative pt-32 pb-16 lg:pb-24 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <Download size={14} className="inline mr-2" />
                        Berkas & Dokumen
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        Area <span className="text-emerald-400">Unduhan</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Akses cepat dokumen akademik, formulir, dan panduan sekolah
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none">
                    <svg className="block w-full h-16 sm:h-24 text-gray-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </header>

            {/* MAIN CONTENT - DOWNLOAD AREA */}
            <main className="container mx-auto px-6 py-20 -mt-10 relative z-20 flex-grow">
                <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">

                    {/* SEARCH BAR */}
                    <div className="mb-8">
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Cari dokumen..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-emerald-500 focus:outline-none text-gray-800 font-medium transition-all"
                            />
                        </div>
                    </div>

                    {/* CATEGORY TABS */}
                    <div className="mb-8 flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all ${activeCategory === category
                                    ? 'bg-emerald-600 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* FILE LIST */}
                    <div className="space-y-4">
                        {filteredFiles.length > 0 ? (
                            filteredFiles.map((file) => (
                                <div
                                    key={file.id}
                                    className="bg-gray-50 rounded-xl p-5 border border-gray-200 hover:border-emerald-300 hover:shadow-md transition-all duration-300 flex items-center gap-4"
                                >
                                    {/* File Icon */}
                                    <div className="flex-shrink-0">
                                        {getFileIcon(file.type)}
                                    </div>

                                    {/* File Info */}
                                    <div className="flex-grow">
                                        <h3 className="font-space font-bold text-lg text-gray-900 mb-1">
                                            {file.title}
                                        </h3>
                                        <div className="flex items-center gap-3 text-sm text-gray-500">
                                            <span className="font-medium">{file.type}</span>
                                            <span>•</span>
                                            <span>{file.size}</span>
                                            <span>•</span>
                                            <span className="text-emerald-600 font-semibold">{file.category}</span>
                                        </div>
                                    </div>

                                    {/* Download Button */}
                                    <div className="flex-shrink-0">
                                        <a
                                            href={file.downloadUrl}
                                            download
                                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-5 py-2.5 rounded-full font-bold text-sm flex items-center gap-2 shadow-md hover:shadow-lg transition-all"
                                        >
                                            <Download size={16} />
                                            Download
                                        </a>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="text-center py-16">
                                <FileText className="mx-auto text-gray-300 mb-4" size={64} />
                                <p className="text-gray-500 text-lg font-medium">
                                    Tidak ada dokumen yang ditemukan
                                </p>
                                <p className="text-gray-400 text-sm mt-2">
                                    Coba ubah kata kunci pencarian atau kategori
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}
