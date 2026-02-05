import React from 'react';
import { Download, ZoomIn, Network } from 'lucide-react';

export default function StructurePage() {

    return (
        <div className="bg-gray-50">

            {/* HEADER */}
            <header className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <Network size={14} className="inline mr-2" /> Manajemen Sekolah
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        Struktur <span className="text-emerald-400">Organisasi</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Bagan kepemimpinan dan tata kelola SMAN 4 Jember.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none">
                    <svg className="block w-full h-16 sm:h-24 text-gray-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="container mx-auto px-6 py-16 -mt-10 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 max-w-6xl mx-auto">
                    <div className="mb-8 text-center">
                        <h2 className="text-2xl font-bold font-space text-emerald-900">Bagan Struktur Tahun Ajaran 2025/2026</h2>
                        <p className="text-gray-500 mt-2">Klik gambar untuk memperbesar atau unduh versi PDF</p>
                    </div>

                    {/* CHART PLACEHOLDER FRAME */}
                    <div className="relative w-full aspect-[4/3] bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden group">
                        <img
                            src="https://placehold.co/1200x900/e2e8f0/10b981?text=Bagan+Struktur+Organisasi+SMAN+4+Jember"
                            alt="Struktur Organisasi"
                            className="w-full h-full object-contain"
                        />

                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                            <button className="px-6 py-3 bg-white text-emerald-900 rounded-full font-bold flex items-center gap-2 hover:bg-emerald-50 transition-colors shadow-lg">
                                <ZoomIn size={18} /> Perbesar
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 flex justify-center">
                        <button className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold shadow-lg shadow-emerald-600/30 hover:bg-emerald-700 hover:scale-105 transition-all flex items-center gap-2">
                            <Download size={20} /> Unduh Bagan (PDF)
                        </button>
                    </div>
                </div>
            </main>

        </div>
    );
}
