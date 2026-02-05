import React, { useState } from 'react';
import { Users, CheckCircle, TrendingUp, Award, Send, Briefcase, Rocket, MessageSquare, Mail, ChevronDown } from 'lucide-react';

export default function AlumniPage() {
    const [status, setStatus] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Terima kasih! Data Alumni beserta lampiran berhasil dikirim.');
    };

    return (
        <div className="font-outfit text-gray-800 bg-gray-50 min-h-screen flex flex-col">
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
                .font-space { font-family: 'Space Grotesk', sans-serif; }
                .font-outfit { font-family: 'Outfit', sans-serif; }
            `}</style>

            {/* HERO SECTION (Sweet Spot pt-32) */}
            <header className="relative pt-32 pb-16 lg:pb-24 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>
                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <Users size={14} className="inline mr-2" /> Jejaring Alumni
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">Alumni <span className="text-emerald-400">Tracer</span></h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">Jalin kembali silaturahmi. Data Anda membantu kemajuan sekolah.</p>
                </div>
            </header>

            {/* MAIN CONTENT - SPLIT LAYOUT */}
            <main className="container mx-auto px-6 py-20 -mt-10 relative z-20 flex-grow">
                <div className="grid lg:grid-cols-2 gap-10">

                    {/* LEFT COLUMN - INFO & STATS */}
                    <div className="space-y-8">
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                            <h2 className="font-space font-bold text-2xl text-gray-900 mb-6">Mengapa mengisi data?</h2>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center"><CheckCircle className="text-emerald-600" size={24} /></div>
                                    <div><h3 className="font-bold text-gray-900 text-lg">Update Database Sekolah</h3><p className="text-gray-600 text-sm">Membantu sekolah memiliki data alumni yang akurat dan terkini.</p></div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center"><Users className="text-emerald-600" size={24} /></div>
                                    <div><h3 className="font-bold text-gray-900 text-lg">Undangan Reuni</h3><p className="text-gray-600 text-sm">Dapatkan informasi terbaru tentang acara reuni akbar.</p></div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center"><TrendingUp className="text-emerald-600" size={24} /></div>
                                    <div><h3 className="font-bold text-gray-900 text-lg">Jejaring Karir</h3><p className="text-gray-600 text-sm">Terhubung dengan sesama alumni untuk peluang karir.</p></div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl shadow-xl p-8 text-white text-center">
                            <Award className="text-emerald-300 mx-auto mb-4" size={48} />
                            <p className="text-emerald-100 text-sm font-bold uppercase tracking-widest mb-1">Total Alumni Terdata</p>
                            <p className="font-space font-extrabold text-6xl">1,250+</p>
                            <p className="text-emerald-100 text-xs mt-4">Bergabunglah dengan jaringan alumni SMAN 4 Jember</p>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - FORM */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-10">
                        <h2 className="font-space font-bold text-2xl text-emerald-900 mb-2 border-l-4 border-emerald-500 pl-4">Form Data Alumni</h2>
                        <p className="text-gray-500 mb-8 pl-5 text-sm">Isi data di bawah ini untuk terhubung kembali.</p>

                        <form className="space-y-10" onSubmit={handleSubmit}>
                            {/* 1. IDENTITAS DASAR */}
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                <h3 className="font-space font-bold text-xl text-emerald-900 mb-6 flex items-center gap-2 border-b border-emerald-50 pb-4">
                                    <Users size={20} className="text-emerald-500" /> Identitas Dasar
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Nama Lengkap</label>
                                        <input type="text" placeholder="Masukkan nama lengkap" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-gray-900" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">NIS</label>
                                        <input type="number" placeholder="Nomor Induk Siswa" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-gray-900" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Jenjang Pendidikan Terakhir</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-gray-900 bg-white">
                                            <option value="">Pilih Jenjang</option>
                                            <option value="SMA">SMA</option>
                                            <option value="D3">D3 / D4</option>
                                            <option value="S1">S1 / S2 / S3</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Tahun Lulus SMAPA (Min. 1980)</label>
                                        <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-gray-900 bg-white">
                                            <option value="">Pilih Tahun</option>
                                            {Array.from({ length: new Date().getFullYear() - 1980 + 1 }, (_, i) => 1980 + i).reverse().map(year => (
                                                <option key={year} value={year}>{year}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="space-y-2 md:col-span-2">
                                        <label className="text-sm font-bold text-gray-700">Program Studi / Jurusan (Saat SMA)</label>
                                        <input type="text" placeholder="Contoh: MIPA 1 / IPS 2" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-gray-900" />
                                    </div>
                                </div>
                            </div>

                            {/* 2. STATUS ALUMNI (TRIGGER) - Fixed Color Contrast */}
                            <div className="bg-emerald-900 p-8 rounded-3xl shadow-xl text-white">
                                <h3 className="font-space font-bold text-xl mb-6 flex items-center gap-2 border-b border-white/10 pb-4">
                                    <Briefcase size={20} className="text-emerald-400" /> Status Alumni Saat Ini
                                </h3>
                                <div className="space-y-2 relative">
                                    <label className="text-sm font-bold opacity-80">Pilih Status</label>
                                    <div className="relative">
                                        <select
                                            value={status}
                                            onChange={(e) => setStatus(e.target.value)}
                                            className="w-full px-4 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md text-white focus:bg-emerald-800 outline-none transition-all font-bold cursor-pointer appearance-none pr-12"
                                        >
                                            <option value="" className="text-gray-900">-- Pilih Status Alumni --</option>
                                            <option value="kuliah" className="text-gray-900">🎓 Kuliah</option>
                                            <option value="kerja" className="text-gray-900">💼 Kerja</option>
                                            <option value="wirausaha" className="text-gray-900">🚀 Wirausaha</option>
                                        </select>
                                        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-emerald-300" />
                                    </div>
                                </div>
                            </div>

                            {/* 3. FIELD DINAMIS */}
                            {status && (
                                <div className="bg-white p-8 rounded-3xl border-2 border-emerald-500/20 shadow-lg animate-in fade-in slide-in-from-top-4 duration-500">
                                    <h3 className="font-space font-bold text-xl text-emerald-900 mb-6 flex items-center gap-2 border-b border-emerald-50 pb-4">
                                        <Rocket size={20} className="text-emerald-500" /> Detail {status.charAt(0).toUpperCase() + status.slice(1)}
                                    </h3>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        {status === "kuliah" && (
                                            <>
                                                <div className="space-y-2"><label className="text-sm font-bold text-gray-700">Instansi / Universitas</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900" /></div>
                                                <div className="space-y-2"><label className="text-sm font-bold text-gray-700">Program Studi</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900" /></div>
                                                <div className="space-y-2"><label className="text-sm font-bold text-gray-700">Jenjang (D3/S1/S2)</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900" /></div>
                                                <div className="space-y-2"><label className="text-sm font-bold text-gray-700">Kota Domisili Kampus</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900" /></div>
                                            </>
                                        )}
                                        {status === "kerja" && (
                                            <>
                                                <div className="space-y-2"><label className="text-sm font-bold text-gray-700">Pekerjaan</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900" /></div>
                                                <div className="space-y-2"><label className="text-sm font-bold text-gray-700">Jabatan</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900" /></div>
                                                <div className="space-y-2"><label className="text-sm font-bold text-gray-700">Bidang Industri</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900" /></div>
                                                <div className="space-y-2"><label className="text-sm font-bold text-gray-700">Instansi / Perusahaan</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900" /></div>
                                                <div className="space-y-2 md:col-span-2"><label className="text-sm font-bold text-gray-700">Kota Tempat Kerja</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900" /></div>
                                            </>
                                        )}
                                        {status === "wirausaha" && (
                                            <>
                                                <div className="space-y-2"><label className="text-sm font-bold text-gray-700">Nama Usaha</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900" /></div>
                                                <div className="space-y-2"><label className="text-sm font-bold text-gray-700">Bidang Usaha</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900" /></div>
                                                <div className="space-y-2"><label className="text-sm font-bold text-gray-700">Peran / Jabatan</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900" /></div>
                                                <div className="space-y-2"><label className="text-sm font-bold text-gray-700">Kota Lokasi Usaha</label><input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 text-gray-900" /></div>
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}

                            {/* 4. KONTAK */}
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                <h3 className="font-space font-bold text-xl text-emerald-900 mb-6 flex items-center gap-2 border-b border-emerald-50 pb-4">
                                    <Mail size={20} className="text-emerald-500" /> Informasi Kontak
                                </h3>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Email Aktif</label>
                                        <input type="email" placeholder="Contoh: alumni@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-gray-900" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-gray-700">Nomor WhatsApp</label>
                                        <input type="tel" placeholder="Contoh: 08123456789" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-gray-900" />
                                        <p className="text-[10px] text-gray-400 italic mt-1 font-medium">Data kontak hanya digunakan untuk keperluan internal alumni SMAN 4 Jember.</p>
                                    </div>
                                </div>
                            </div>

                            {/* 5. PENUTUP (No Upload) */}
                            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">
                                <h3 className="font-space font-bold text-xl text-emerald-900 mb-6 flex items-center gap-2 border-b border-emerald-50 pb-4">
                                    <MessageSquare size={20} className="text-emerald-500" /> Kesan untuk Almamater
                                </h3>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-gray-700">Pesan / Kesan</label>
                                    <textarea placeholder="Bagikan pengalaman berkesan Anda..." rows="4" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-emerald-200 outline-none transition-all text-gray-900"></textarea>
                                </div>
                            </div>

                            <button type="submit" className="w-full py-5 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl font-bold text-lg shadow-xl shadow-emerald-200 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                                Kirim Data Alumni <Rocket size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}
