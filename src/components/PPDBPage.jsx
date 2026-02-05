import React from 'react';
import { GraduationCap, Calendar, FileText, CheckCircle, Users, Award, Rocket } from 'lucide-react';

export default function PPDBPage() {
    const TIMELINE = [
        { step: "Pendaftaran Online", date: "1 - 15 Juni 2026", icon: FileText },
        { step: "Seleksi Berkas", date: "16 - 20 Juni 2026", icon: CheckCircle },
        { step: "Pengumuman Hasil", date: "25 Juni 2026", icon: Award },
        { step: "Daftar Ulang", date: "26 - 30 Juni 2026", icon: Rocket }
    ];

    const PERSYARATAN = [
        "Ijazah SMP / sederajat atau Surat Keterangan Lulus",
        "Rapor semester 1-5 (fotokopi)",
        "Akta Kelahiran (fotokopi)",
        "Kartu Keluarga (fotokopi)",
        "Pas foto terbaru 3x4 (5 lembar)",
        "Sertifikat prestasi (jika ada)"
    ];

    const JALUR = [
        { name: "Jalur Zonasi", quota: "60%", desc: "Berdasarkan jarak domisili dari sekolah" },
        { name: "Jalur Prestasi", quota: "30%", desc: "Berdasarkan prestasi akademik/non-akademik" },
        { name: "Jalur Afirmasi", quota: "10%", desc: "Untuk siswa kurang mampu atau berkebutuhan khusus" }
    ];

    return (
        <div className="bg-gray-50">
            {/* HERO */}
            <header className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <GraduationCap size={14} className="inline mr-2" />
                        New Student Admission
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        PPDB <span className="text-emerald-400">2026</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Penerimaan Peserta Didik Baru SMAN 4 Jember Tahun Pelajaran 2026/2027. Daftar sekarang!
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

                    {/* Jalur PPDB */}
                    <div className="mb-12">
                        <h2 className="font-space font-bold text-3xl text-gray-900 mb-6 text-center">Jalur Pendaftaran</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            {JALUR.map((jalur, idx) => (
                                <div key={idx} className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl border border-emerald-100 text-center">
                                    <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 text-white rounded-full mb-4">
                                        <Users size={32} />
                                    </div>
                                    <h3 className="font-bold text-lg text-gray-900 mb-2">{jalur.name}</h3>
                                    <p className="text-3xl font-bold text-emerald-600 mb-2">{jalur.quota}</p>
                                    <p className="text-gray-600 text-sm">{jalur.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="mb-12">
                        <h2 className="font-space font-bold text-3xl text-gray-900 mb-6 text-center">Timeline PPDB 2026</h2>
                        <div className="grid md:grid-cols-4 gap-6">
                            {TIMELINE.map((item, idx) => {
                                const Icon = item.icon;
                                return (
                                    <div key={idx} className="relative">
                                        <div className="bg-white p-6 rounded-2xl border-2 border-emerald-200 text-center hover:shadow-lg transition-all">
                                            <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-600 text-white rounded-full mb-4">
                                                <Icon size={28} />
                                            </div>
                                            <h4 className="font-bold text-gray-900 mb-2">{item.step}</h4>
                                            <div className="flex items-center justify-center gap-2 text-emerald-700">
                                                <Calendar size={14} />
                                                <span className="text-sm font-semibold">{item.date}</span>
                                            </div>
                                        </div>
                                        {idx < TIMELINE.length - 1 && (
                                            <div className="hidden md:block absolute top-1/2 right-0 w-full h-0.5 bg-emerald-200 -z-10 transform translate-x-1/2"></div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Persyaratan */}
                    <div className="bg-emerald-50 p-8 rounded-2xl border border-emerald-100">
                        <h3 className="font-space font-bold text-2xl text-gray-900 mb-6">Persyaratan Dokumen</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {PERSYARATAN.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-emerald-100">
                                    <CheckCircle size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                                    <span className="text-gray-700">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 text-center">
                            <a href="#" className="inline-flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-full font-bold hover:from-emerald-600 hover:to-teal-700 transition-all shadow-lg">
                                <Rocket size={20} />
                                <span>Daftar Sekarang</span>
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}
