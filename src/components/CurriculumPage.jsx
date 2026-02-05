import React from 'react';
import { BookOpen, CheckCircle, Heart, Target, Handshake, Globe, Lightbulb, Star, Search, Trophy, Clock, Download, FileText } from 'lucide-react';

export default function CurriculumPage() {
    return (
        <div className="bg-gray-50">
            {/* HERO SECTION */}
            <header className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <BookOpen size={14} className="inline mr-2" />
                        Kurikulum Merdeka
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        Kurikulum <span className="text-emerald-400">Sekolah</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Implementasi Kurikulum Merdeka untuk mewujudkan Profil Pelajar Pancasila yang unggul dan berkarakter.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none">
                    <svg className="block w-full h-16 sm:h-24 text-gray-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="container mx-auto px-6 py-12 -mt-10 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10 space-y-24">

                    {/* Section 1: Introduction */}
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                                <BookOpen size={24} className="text-white" />
                            </div>
                            <div>
                                <h2 className="font-space font-bold text-2xl text-gray-900 mb-3">Apa itu Kurikulum Merdeka?</h2>
                                <p className="text-gray-700 leading-relaxed mb-4">
                                    Kurikulum Merdeka adalah kurikulum dengan pembelajaran intrakurikuler yang beragam di mana konten akan lebih optimal agar peserta didik memiliki cukup waktu untuk mendalami konsep dan menguatkan kompetensi.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Guru memiliki keleluasaan untuk memilih berbagai perangkat ajar sehingga pembelajaran dapat disesuaikan dengan kebutuhan belajar dan minat peserta didik.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 2: Struktur Fase */}
                    <div>
                        <h2 className="font-space font-bold text-3xl text-gray-900 mb-8 text-center">Struktur Pembelajaran</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Fase E */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                                <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-4">
                                    Fase E
                                </div>
                                <h3 className="font-space font-bold text-2xl text-gray-900 mb-3">Kelas X</h3>
                                <p className="text-gray-600 mb-6">
                                    Penguatan fundamental dan eksplorasi minat peserta didik
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                                        <span className="text-gray-700">Pembelajaran berbasis kompetensi dasar</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                                        <span className="text-gray-700">Eksplorasi minat melalui mata pelajaran pilihan</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                                        <span className="text-gray-700">Penguatan literasi dan numerasi</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                                        <span className="text-gray-700">Projek Penguatan Profil Pelajar Pancasila</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Fase F */}
                            <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                                <div className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-4">
                                    Fase F
                                </div>
                                <h3 className="font-space font-bold text-2xl text-gray-900 mb-3">Kelas XI - XII</h3>
                                <p className="text-gray-600 mb-6">
                                    Pendalaman minat dan persiapan studi lanjut
                                </p>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                                        <span className="text-gray-700">Pendalaman mata pelajaran sesuai jurusan</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                                        <span className="text-gray-700">Mata pelajaran lintas minat dan pendalaman</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                                        <span className="text-gray-700">Persiapan asesmen kompetensi dan survei karakter</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <CheckCircle className="text-emerald-600 flex-shrink-0 mt-0.5" size={20} />
                                        <span className="text-gray-700">Orientasi perguruan tinggi dan karir</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Section 3: P5 */}
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-8 md:p-12 text-white">
                        <div className="text-center mb-10">
                            <h2 className="font-space font-bold text-3xl md:text-4xl mb-4">Projek Penguatan Profil Pelajar Pancasila (P5)</h2>
                            <p className="text-emerald-100 max-w-3xl mx-auto text-lg">
                                Pembelajaran berbasis projek yang dirancang untuk memperkuat karakter dan kompetensi sesuai dengan Profil Pelajar Pancasila
                            </p>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                                    <Heart size={32} className="text-white" />
                                </div>
                                <h4 className="font-bold text-lg mb-2">Beriman & Bertakwa</h4>
                                <p className="text-emerald-100 text-sm">Kepada Tuhan YME dan berakhlak mulia</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                                    <Target size={32} className="text-white" />
                                </div>
                                <h4 className="font-bold text-lg mb-2">Mandiri</h4>
                                <p className="text-emerald-100 text-sm">Bertanggung jawab atas proses dan hasil belajar</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                                    <Handshake size={32} className="text-white" />
                                </div>
                                <h4 className="font-bold text-lg mb-2">Gotong Royong</h4>
                                <p className="text-emerald-100 text-sm">Kemampuan bergotong royong dan kolaborasi</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                                    <Globe size={32} className="text-white" />
                                </div>
                                <h4 className="font-bold text-lg mb-2">Berkebinekaan Global</h4>
                                <p className="text-emerald-100 text-sm">Mempertahankan budaya luhur dan identitas</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                                    <Lightbulb size={32} className="text-white" />
                                </div>
                                <h4 className="font-bold text-lg mb-2">Bernalar Kritis</h4>
                                <p className="text-emerald-100 text-sm">Memproses informasi secara objektif dan kritis</p>
                            </div>

                            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                                    <Star size={32} className="text-white" />
                                </div>
                                <h4 className="font-bold text-lg mb-2">Kreatif</h4>
                                <p className="text-emerald-100 text-sm">Menghasilkan karya dan tindakan yang orisinal</p>
                            </div>
                        </div>
                    </div>

                    {/* Section 4: Assessment */}
                    <div>
                        <h2 className="font-space font-bold text-3xl text-gray-900 mb-8 text-center">Sistem Asesmen</h2>
                        <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100">
                                <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                                    <Search size={24} className="text-white" />
                                </div>
                                <h3 className="font-space font-bold text-xl text-gray-900 mb-3">Asesmen Diagnostik</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Dilakukan di awal pembelajaran untuk mengidentifikasi kompetensi, kekuatan, dan kelemahan siswa sebagai dasar perencanaan pembelajaran.
                                </p>
                            </div>

                            <div className="bg-amber-50 rounded-2xl p-6 border border-amber-100">
                                <div className="w-12 h-12 bg-amber-600 rounded-xl flex items-center justify-center mb-4">
                                    <CheckCircle size={24} className="text-white" />
                                </div>
                                <h3 className="font-space font-bold text-xl text-gray-900 mb-3">Asesmen Formatif</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Dilakukan selama proses pembelajaran untuk memantau kemajuan dan memberikan umpan balik berkelanjutan kepada siswa.
                                </p>
                            </div>

                            <div className="bg-emerald-50 rounded-2xl p-6 border border-emerald-100">
                                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center mb-4">
                                    <Trophy size={24} className="text-white" />
                                </div>
                                <h3 className="font-space font-bold text-xl text-gray-900 mb-3">Asesmen Sumatif</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">
                                    Dilakukan di akhir pembelajaran untuk menilai pencapaian hasil belajar siswa berdasarkan kriteria yang telah ditetapkan.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 5: Academic Information & Downloads */}
                    <div>
                        <h2 className="font-space font-bold text-3xl text-gray-900 mb-8 text-center">Informasi Akademik & Unduhan</h2>
                        <div className="grid md:grid-cols-2 gap-12">

                            {/* Left: Schedule */}
                            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center">
                                        <Clock size={20} className="text-white" />
                                    </div>
                                    <h3 className="font-space font-bold text-xl text-gray-900">Waktu Kegiatan Belajar Mengajar</h3>
                                </div>

                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                        <span className="font-semibold text-gray-700">Senin - Kamis</span>
                                        <span className="text-emerald-700 font-bold">07.00 - 15.30 WIB</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                        <span className="font-semibold text-gray-700">Jumat</span>
                                        <span className="text-emerald-700 font-bold">07.00 - 11.30 WIB</span>
                                    </div>
                                    <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                        <span className="font-semibold text-gray-700">Istirahat</span>
                                        <span className="text-gray-600 text-sm">2x (09.30 & 12.00)</span>
                                    </div>
                                </div>

                                <div className="bg-emerald-100 border-l-4 border-emerald-600 p-4 rounded-lg">
                                    <div className="flex items-start gap-2">
                                        <CheckCircle size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                                        <p className="text-sm text-emerald-900 font-medium leading-relaxed">
                                            SMAN 4 Jember menerapkan sistem <span className="font-bold">5 Hari Sekolah (Full Day School)</span> untuk mengoptimalkan pembelajaran dan pengembangan karakter siswa.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Downloads */}
                            <div>
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                                        <Download size={20} className="text-white" />
                                    </div>
                                    <h3 className="font-space font-bold text-xl text-gray-900">Unduh Dokumen</h3>
                                </div>

                                <div className="space-y-4">
                                    {/* Document 1 */}
                                    <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <FileText size={24} className="text-red-600" />
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="font-bold text-gray-900 mb-1">Kalender Akademik 2025/2026</h4>
                                                <p className="text-sm text-gray-500 mb-3">Jadwal lengkap kegiatan akademik tahun ajaran 2025/2026</p>
                                                <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-lg transition-colors flex items-center gap-2">
                                                    <Download size={16} />
                                                    Unduh PDF
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Document 2 */}
                                    <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <FileText size={24} className="text-blue-600" />
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="font-bold text-gray-900 mb-1">Jadwal Pelajaran Semester Genap</h4>
                                                <p className="text-sm text-gray-500 mb-3">Jadwal mata pelajaran untuk semester genap 2024/2025</p>
                                                <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-lg transition-colors flex items-center gap-2">
                                                    <Download size={16} />
                                                    Unduh PDF
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Document 3 */}
                                    <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300 group">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center flex-shrink-0">
                                                <FileText size={24} className="text-emerald-600" />
                                            </div>
                                            <div className="flex-grow">
                                                <h4 className="font-bold text-gray-900 mb-1">Panduan Akademik Siswa</h4>
                                                <p className="text-sm text-gray-500 mb-3">Pedoman dan tata tertib kegiatan akademik untuk siswa</p>
                                                <button className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold rounded-lg transition-colors flex items-center gap-2">
                                                    <Download size={16} />
                                                    Unduh PDF
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
