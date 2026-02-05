import React from 'react';
import { Star, UserCheck, Clock, ArrowRight } from 'lucide-react';

export default function ExtracurricularPage() {
    const EXTRACURRICULARS = [
        {
            id: 1, name: "Pramuka", category: "Kepramukaan", schedule: "Jumat, 14:00 - 16:00", coach: "Pembina Senior",
            desc: "Gerakan Pramuka untuk membentuk karakter, kedisiplinan, dan jiwa kepemimpinan siswa melalui kegiatan outdoor dan sosial.",
            img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
            members: "80+ Anggota"
        },
        {
            id: 2, name: "Basket", category: "Olahraga", schedule: "Selasa & Kamis, 15:30 - 17:30", coach: "Coach Arif",
            desc: "Tim basket putra dan putri yang telah meraih berbagai prestasi di tingkat provinsi dengan program latihan profesional.",
            img: "https://images.unsplash.com/photo-1546519638-68e109498ee2?auto=format&fit=crop&w=600&q=80",
            members: "45 Atlet"
        },
        {
            id: 3, name: "Voli", category: "Olahraga", schedule: "Rabu & Jumat, 15:30 - 17:30", coach: "Coach Dina",
            desc: "Ekstrakurikuler bola voli dengan pelatihan teknik dasar hingga strategi permainan tingkat kompetisi.",
            img: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?auto=format&fit=crop&w=600&q=80",
            members: "40 Atlet"
        },
        {
            id: 4, name: "Futsal", category: "Olahraga", schedule: "Senin & Kamis, 16:00 - 18:00", coach: "Coach Budi",
            desc: "Tim futsal SMAPA yang aktif mengikuti kompetisi antar sekolah dengan lapangan indoor berkualitas.",
            img: "https://images.unsplash.com/photo-1571734731359-9b2dfda7e21d?auto=format&fit=crop&w=600&q=80",
            members: "35 Atlet"
        },
        {
            id: 5, name: "PMR (Palang Merah Remaja)", category: "Sosial", schedule: "Sabtu, 08:00 - 12:00", coach: "Ibu Sari",
            desc: "Organisasi kepalangmerahan yang melatih siswa dalam pertolongan pertama, donor darah, dan kegiatan kemanusiaan.",
            img: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=600&q=80",
            members: "50+ Relawan"
        },
        {
            id: 6, name: "KIR (Karya Ilmiah Remaja)", category: "Sains", schedule: "Rabu, 15:00 - 17:00", coach: "Pak Hendra",
            desc: "Wadah penelitian ilmiah siswa dengan bimbingan intensif untuk lomba karya ilmiah tingkat nasional.",
            img: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80",
            members: "30 Peneliti"
        },
        {
            id: 7, name: "Paduan Suara", category: "Seni", schedule: "Selasa & Jumat, 15:00 - 17:00", coach: "Bu Rina",
            desc: "Kelompok paduan suara yang telah tampil di berbagai event sekolah dan kompetisi musik vokal.",
            img: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?auto=format&fit=crop&w=600&q=80",
            members: "60 Penyanyi"
        },
        {
            id: 8, name: "Tari Tradisional", category: "Seni", schedule: "Rabu & Sabtu, 14:00 - 16:00", coach: "Bu Dewi",
            desc: "Sanggar tari yang melestarikan budaya nusantara melalui tarian tradisional dan kreasi modern.",
            img: "https://images.unsplash.com/photo-1508700929628-666bc8bd84ea?auto=format&fit=crop&w=600&q=80",
            members: "35 Penari"
        },
        {
            id: 9, name: "Paskibra", category: "Baris-Berbaris", schedule: "Sabtu, 06:00 - 10:00", coach: "Pak Agus",
            desc: "Pasukan Pengibar Bendera yang menjaga semangat nasionalisme dengan latihan kedisiplinan tinggi.",
            img: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=600&q=80",
            members: "25 Anggota"
        },
        {
            id: 10, name: "Remaja Masjid", category: "Keagamaan", schedule: "Jumat, 13:00 - 15:00", coach: "Ustadz Hamid",
            desc: "Organisasi kerohanian Islam yang mengadakan kajian, tahfidz, dan kegiatan sosial keagamaan.",
            img: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?auto=format&fit=crop&w=600&q=80",
            members: "70+ Anggota"
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* HERO SECTION */}
            <header className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <Star size={14} className="inline mr-2" />
                        Beyond Academics
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        Ekstrakurikuler <span className="text-emerald-400">SMAPA</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Wadah pengembangan bakat dan minat siswa di luar akademik untuk membentuk karakter unggul dan berprestasi.
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
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">

                    <div className="text-center mb-12">
                        <h2 className="font-space font-bold text-3xl text-gray-900 mb-4">10 Ekstrakurikuler Pilihan</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Bergabunglah dengan komunitas yang sesuai dengan minat dan bakatmu untuk mengembangkan potensi maksimal.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {EXTRACURRICULARS.map((item) => (
                            <div key={item.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                                <div className="relative h-56 overflow-hidden">
                                    <div className="absolute top-4 left-4 z-10">
                                        <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                                            {item.category}
                                        </span>
                                    </div>
                                    <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                    <div className="absolute bottom-4 right-4 z-10">
                                        <span className="bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                                            <UserCheck size={12} /> {item.members}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                                        {item.name}
                                    </h3>

                                    <div className="flex items-center text-gray-500 text-sm mb-2 gap-2">
                                        <Clock size={14} className="text-emerald-500" />
                                        <span>{item.schedule}</span>
                                    </div>

                                    <div className="flex items-center text-gray-500 text-sm mb-4 gap-2">
                                        <UserCheck size={14} className="text-emerald-500" />
                                        <span>Pelatih: {item.coach}</span>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                                        {item.desc}
                                    </p>

                                    <button className="w-full py-2.5 rounded-lg border border-emerald-100 text-emerald-700 font-bold text-sm hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2 group-hover:border-emerald-200">
                                        Selengkapnya <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
