import React from 'react';
import { Clock, Stamp, FileText, MoveRight, GraduationCap, Mail, MessageSquare } from 'lucide-react';

export default function PublicServicesPage() {
    return (
        <div className="bg-gray-50">
            {/* HERO SECTION */}
            <header className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <FileText size={14} className="inline mr-2" />
                        Layanan Publik
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        Layanan <span className="text-emerald-400">Publik</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Pelayanan administrasi terpadu Tata Usaha SMAN 4 Jember
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

                    {/* Section 1: JAM OPERASIONAL */}
                    <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-100">
                        <div className="flex items-start gap-4 mb-6">
                            <div className="flex-shrink-0 w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
                                <Clock size={24} className="text-white" />
                            </div>
                            <div className="flex-1">
                                <h2 className="font-space font-bold text-2xl text-gray-900 mb-2">Jam Pelayanan Tata Usaha</h2>
                                <p className="text-gray-600">Waktu operasional pelayanan administrasi sekolah</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div className="bg-white rounded-xl p-5 border border-emerald-200">
                                <div className="text-center">
                                    <span className="font-bold text-gray-900 block mb-1">Senin - Kamis</span>
                                    <span className="text-emerald-700 font-bold text-lg">07.00 - 15.00 WIB</span>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-5 border border-emerald-200">
                                <div className="text-center">
                                    <span className="font-bold text-gray-900 block mb-1">Jumat</span>
                                    <span className="text-emerald-700 font-bold text-lg">07.00 - 11.00 WIB</span>
                                </div>
                            </div>
                            <div className="bg-white rounded-xl p-5 border border-emerald-200">
                                <div className="text-center">
                                    <span className="font-bold text-gray-900 block mb-1">Istirahat</span>
                                    <span className="text-gray-600 text-base">12.00 - 13.00 WIB</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-emerald-100 border-l-4 border-emerald-600 p-4 rounded-lg">
                            <p className="text-sm text-emerald-900 font-medium">
                                <strong>Catatan:</strong> Sabtu-Minggu libur. Untuk layanan mendesak, hubungi kontak darurat via WhatsApp.
                            </p>
                        </div>
                    </div>

                    {/* Section 2: KATALOG LAYANAN */}
                    <div>
                        <h2 className="font-space font-bold text-3xl text-gray-900 mb-8 text-center">Katalog Layanan</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Service 1: Legalisir */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                                        <Stamp size={24} className="text-blue-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-space font-bold text-xl text-gray-900 mb-2">Legalisir Ijazah/Rapor</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            <strong>Syarat:</strong> Membawa Ijazah/Rapor Asli & Fotocopy (Maksimal 5 lembar).
                                        </p>
                                        <a
                                            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20mengajukan%20Legalisir%20Ijazah/Rapor"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-emerald-500 text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
                                        >
                                            <MessageSquare size={18} />
                                            Hubungi Petugas
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Service 2: Surat Keterangan */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                                        <FileText size={24} className="text-emerald-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-space font-bold text-xl text-gray-900 mb-2">Surat Keterangan Siswa Aktif</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            <strong>Syarat:</strong> Untuk tunjangan gaji ortu/beasiswa. Bawa KK & Data Ortu.
                                        </p>
                                        <a
                                            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20mengajukan%20Surat%20Keterangan%20Siswa%20Aktif"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-emerald-500 text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
                                        >
                                            <MessageSquare size={18} />
                                            Ajukan via WA
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Service 3: Surat Pindah */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                                        <MoveRight size={24} className="text-amber-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-space font-bold text-xl text-gray-900 mb-2">Surat Keterangan Pindah/Mutasi</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            <strong>Syarat:</strong> Surat permohonan orang tua & Surat penerimaan sekolah tujuan.
                                        </p>
                                        <a
                                            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20konsultasi%20tentang%20Surat%20Pindah/Mutasi"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-emerald-500 text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
                                        >
                                            <MessageSquare size={18} />
                                            Konsultasi Mutasi
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Service 4: Pengambilan Ijazah Alumni */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                                        <GraduationCap size={24} className="text-purple-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-space font-bold text-xl text-gray-900 mb-2">Pengambilan Ijazah (Alumni)</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            <strong>Syarat:</strong> Wajib cap 3 jari. Membawa bukti lunas administrasi.
                                        </p>
                                        <a
                                            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20cek%20jadwal%20pengambilan%20Ijazah%20Alumni"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-emerald-500 text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
                                        >
                                            <MessageSquare size={18} />
                                            Cek Jadwal
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Service 5: Layanan Pengaduan */}
                            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
                                        <Mail size={24} className="text-red-600" />
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="font-space font-bold text-xl text-gray-900 mb-2">Layanan Pengaduan</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                            <strong>Deskripsi:</strong> Sampaikan saran dan masukan untuk kemajuan sekolah.
                                        </p>
                                        <a
                                            href="https://wa.me/6281234567890?text=Halo,%20saya%20ingin%20menyampaikan%20pengaduan/saran"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-white border-2 border-emerald-500 text-emerald-600 font-bold rounded-lg hover:bg-emerald-50 transition-colors"
                                        >
                                            <MessageSquare size={18} />
                                            Kirim Pengaduan
                                        </a>
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
