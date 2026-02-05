import React, { useState } from 'react';
import { Building, CheckCircle, ArrowRight } from 'lucide-react';

export default function FacilitiesPage() {

    const facilities = [
        {
            id: 1,
            name: "Laboratorium IPA Terpadu",
            description: "Dilengkapi dengan peralatan kimia, fisika, dan biologi modern untuk praktikum siswa yang aman dan efektif.",
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
            icon: "🔬"
        },
        {
            id: 2,
            name: "Laboratorium Komputer",
            description: "40 unit komputer dengan akses internet cepat dan software pembelajaran terkini untuk mendukung kegiatan TIK.",
            image: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&w=600&q=80",
            icon: "💻"
        },
        {
            id: 3,
            name: "Perpustakaan Modern",
            description: "Lebih dari 15.000 koleksi buku, jurnal, dan media digital dengan ruang baca nyaman berkapasitas 100 siswa.",
            image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80",
            icon: "📚"
        },
        {
            id: 4,
            name: "Aula Serbaguna",
            description: "Kapasitas 500 orang dengan sistem audio-visual profesional untuk acara sekolah dan seminar.",
            image: "https://images.unsplash.com/photo-1519735777090-ec97af7ce3aa?auto=format&fit=crop&w=600&q=80",
            icon: "🎭"
        },
        {
            id: 5,
            name: "Lapangan Olahraga",
            description: "Lapangan basket, voli, dan futsal standar nasional untuk mendukung prestasi olahraga siswa.",
            image: "https://images.unsplash.com/photo-1546519638-68e109498ee2?auto=format&fit=crop&w=600&q=80",
            icon: "⚽"
        },
        {
            id: 6,
            name: "Masjid Sekolah",
            description: "Masjid berkapasitas 200 jamaah dengan fasilitas wudhu terpisah dan ruang kajian keagamaan.",
            image: "https://images.unsplash.com/photo-1590073242678-70ee3fc28e8e?auto=format&fit=crop&w=600&q=80",
            icon: "🕌"
        },
        {
            id: 7,
            name: "Kantin Sehat",
            description: "Menyediakan makanan dan minuman bergizi dengan standar kebersihan terjaga dan harga terjangkau.",
            image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80",
            icon: "🍽️"
        },
        {
            id: 8,
            name: "Ruang UKS",
            description: "Ruang kesehatan lengkap dengan tenaga medis profesional dan obat-obatan standar untuk pertolongan pertama.",
            image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=600&q=80",
            icon: "⚕️"
        },
        {
            id: 9,
            name: "Studio Musik",
            description: "Ruang kedap suara dengan alat musik modern untuk menunjang kreativitas dan bakat seni siswa.",
            image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80",
            icon: "🎵"
        }
    ];

    return (
        <div className="font-outfit text-gray-800 bg-gray-50 overflow-x-hidden">

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        .font-space { font-family: 'Space Grotesk', sans-serif; }
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}</style>

            {/* HERO SECTION */}
            <header className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <Building size={14} className="inline mr-2" />
                        Infrastruktur Sekolah
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        Sarana & <span className="text-emerald-400">Prasarana</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Fasilitas modern dan lengkap untuk mendukung pembelajaran yang berkualitas dan inspiratif.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none">
                    <svg className="block w-full h-16 sm:h-24 text-gray-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </header>

            {/* MAIN CONTENT - FACILITIES GRID */}
            <main className="container mx-auto px-6 py-12 -mt-10 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">

                    {/* Intro Section */}
                    <div className="text-center mb-12">
                        <h2 className="font-space font-bold text-3xl text-gray-900 mb-4">Fasilitas Unggulan SMAN 4 Jember</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Kami berkomitmen menyediakan lingkungan belajar terbaik dengan fasilitas yang mendukung pengembangan akademik, karakter, dan bakat siswa.
                        </p>
                    </div>

                    {/* Facilities Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {facilities.map((facility) => (
                            <div key={facility.id} className="group bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">
                                {/* Image Section */}
                                <div className="relative h-56 overflow-hidden">
                                    <img src={facility.image} alt={facility.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 z-10">
                                        <span className="text-4xl">{facility.icon}</span>
                                    </div>
                                    <div className="absolute top-4 right-4 z-10">
                                        <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                                            <CheckCircle size={20} className="text-emerald-600" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content Section */}
                                <div className="p-6">
                                    <h3 className="font-space font-bold text-lg text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                                        {facility.name}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                        {facility.description}
                                    </p>
                                    <button className="w-full py-2 rounded-lg border border-emerald-100 text-emerald-700 font-bold text-sm hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2">
                                        Lihat Foto <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <div className="mt-16 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                        <h3 className="font-space font-bold text-2xl text-emerald-900 mb-4 text-center">Standar Fasilitas</h3>
                        <div className="grid md:grid-cols-3 gap-6 text-center">
                            <div>
                                <p className="text-4xl font-bold text-emerald-600 mb-2">30+</p>
                                <p className="text-gray-600 font-medium">Ruang Kelas Ber-AC</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-emerald-600 mb-2">9</p>
                                <p className="text-gray-600 font-medium">Laboratorium Modern</p>
                            </div>
                            <div>
                                <p className="text-4xl font-bold text-emerald-600 mb-2">15K+</p>
                                <p className="text-gray-600 font-medium">Koleksi Buku</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
