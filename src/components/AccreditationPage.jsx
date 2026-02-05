import React from 'react';
import { Award, CheckCircle, FileText } from 'lucide-react';

export default function AccreditationPage() {

    return (
        <div className="bg-gray-50">

            {/* HEADER */}
            <header className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <Award size={14} className="inline mr-2" /> Penjaminan Mutu
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        Akreditasi <span className="text-emerald-400">Sekolah</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Bukti kualitas dan standar pendidikan SMAN 4 Jember
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
                <div className="max-w-4xl mx-auto">
                    {/* CERTIFICATE CARD */}
                    <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden relative">
                        <div className="absolute top-0 w-full h-2 bg-gradient-to-r from-emerald-400 via-emerald-600 to-teal-800"></div>
                        <div className="p-8 md:p-12 text-center">

                            {/* BADGE */}
                            <div className="w-32 h-32 mx-auto bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center shadow-lg border-4 border-white ring-4 ring-yellow-100 mb-6">
                                <span className="text-6xl font-extrabold text-white font-space">A</span>
                            </div>

                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-space mb-2">Terakreditasi A (Unggul)</h2>
                            <p className="text-emerald-600 font-bold tracking-wider uppercase mb-8">Berdasarkan Keputusan BAN-S/M</p>

                            <div className="grid md:grid-cols-3 gap-6 text-left border-t border-gray-100 pt-8">
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Nilai Akhir</p>
                                    <p className="text-3xl font-bold text-emerald-600">93</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Nomor SK</p>
                                    <p className="text-lg font-bold text-gray-800">1857/BAN-SM/SK/2023</p>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-xl">
                                    <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mb-1">Masa Berlaku</p>
                                    <p className="text-lg font-bold text-gray-800">s.d. Tahun 2028</p>
                                </div>
                            </div>

                            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-full hover:bg-emerald-700 transition-colors shadow-lg">
                                    <FileText size={18} /> Lihat Detail Sertifikat
                                </button>
                                <button className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-emerald-600 text-emerald-600 font-bold rounded-full hover:bg-emerald-50 transition-colors">
                                    <CheckCircle size={18} /> Verifikasi Online
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* INFO SECTION */}
                    <div className="mt-12 bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-xl">
                        <h3 className="font-bold text-lg text-blue-900 mb-2">Tentang Akreditasi</h3>
                        <p className="text-blue-800 leading-relaxed">
                            Akreditasi adalah pengakuan terhadap kelayakan program atau satuan pendidikan berdasarkan kriteria yang telah ditetapkan oleh Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M). SMAN 4 Jember bangga meraih akreditasi A (Unggul) yang menunjukkan komitmen kami dalam memberikan pendidikan berkualitas tinggi.
                        </p>
                    </div>
                </div>
            </main>

        </div>
    );
}
