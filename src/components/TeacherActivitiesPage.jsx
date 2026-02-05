import React from 'react';
import { Users, Calendar, MapPin, ArrowRight, Briefcase } from 'lucide-react';

export default function TeacherActivitiesPage() {
    const TEACHER_ACTIVITIES = [
        {
            id: 1,
            title: "Workshop Kurikulum Merdeka 2025",
            date: "12-14 Januari 2025",
            location: "Aula SMAPA",
            desc: "Pelatihan implementasi Kurikulum Merdeka untuk seluruh guru dengan narasumber dari Dinas Pendidikan Provinsi Jawa Timur dan praktisi pendidikan.",
            img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80",
            participants: "80 Guru"
        },
        {
            id: 2,
            title: "In-House Training Teknologi Digital",
            date: "20 November 2024",
            location: "Lab Komputer",
            desc: "Pelatihan penggunaan platform pembelajaran digital seperti Google Classroom, Canva, dan tools multimedia untuk meningkatkan kualitas pembelajaran.",
            img: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
            participants: "65 Guru"
        },
        {
            id: 3,
            title: "Rapat Kerja Tahunan 2024",
            date: "2-3 Juli 2024",
            location: "Hotel Aston Jember",
            desc: "Evaluasi kinerja tahun ajaran 2023/2024 dan perencanaan program kerja tahun ajaran 2024/2025 dengan seluruh guru dan staff sekolah.",
            img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80",
            participants: "120 Peserta"
        },
        {
            id: 4,
            title: "Pertemuan MGMP Kabupaten Jember",
            date: "15 September 2024",
            location: "SMAN 4 Jember",
            desc: "Forum Musyawarah Guru Mata Pelajaran untuk berbagi best practices dan strategi pembelajaran efektif antar sekolah se-Kabupaten Jember.",
            img: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
            participants: "150+ Guru"
        },
        {
            id: 5,
            title: "Pelatihan Media Pembelajaran Interaktif",
            date: "8-9 Agustus 2024",
            location: "Ruang Multimedia",
            desc: "Workshop pembuatan media pembelajaran interaktif menggunakan PowerPoint, Prezi, dan aplikasi desain grafis untuk meningkatkan engagement siswa.",
            img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80",
            participants: "55 Guru"
        },
        {
            id: 6,
            title: "Seminar Nasional Pendidikan Karakter",
            date: "22 Maret 2024",
            location: "Universitas Jember",
            desc: "Partisipasi guru dalam seminar nasional tentang strategi penguatan pendidikan karakter di era digital dengan narasumber dari berbagai universitas.",
            img: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?auto=format&fit=crop&w=800&q=80",
            participants: "30 Guru"
        },
        {
            id: 7,
            title: "Pelatihan Asesmen Kompetensi",
            date: "18 Oktober 2024",
            location: "Aula SMAPA",
            desc: "Training penyusunan instrumen asesmen sesuai dengan standar Kurikulum Merdeka dan teknik evaluasi berbasis kompetensi.",
            img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
            participants: "70 Guru"
        },
        {
            id: 8,
            title: "Study Banding ke SMA Unggulan",
            date: "5-6 Mei 2024",
            location: "Surabaya",
            desc: "Kunjungan studi ke sekolah unggulan di Surabaya untuk benchmarking sistem manajemen sekolah dan best practices pembelajaran.",
            img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
            participants: "25 Guru"
        },
        {
            id: 9,
            title: "Sosialisasi P5 Kurikulum Merdeka",
            date: "10 Februari 2025",
            location: "Aula SMAPA",
            desc: "Pelatihan implementasi Projek Penguatan Profil Pelajar Pancasila (P5) dengan tema-tema kontekstual dan strategi asesmen.",
            img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80",
            participants: "85 Guru"
        }
    ];

    return (
        <div className="bg-gray-50">
            {/* HERO SECTION */}
            <header className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <Briefcase size={14} className="inline mr-2" />
                        Professional Development
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        Kegiatan Guru <span className="text-emerald-400">&amp; Staff</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Dokumentasi pengembangan kompetensi dan profesionalisme tenaga pendidik SMAN 4 Jember.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none">
                    <svg className="block w-full h-16 sm:h-24 text-gray-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </header>

            {/* MAIN CONTENT - GRID LAYOUT */}
            <main className="container mx-auto px-6 py-12 -mt-10 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">

                    <div className="text-center mb-12">
                        <h2 className="font-space font-bold text-3xl text-gray-900 mb-4">Program Pengembangan Profesional</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Berbagai kegiatan pelatihan, workshop, dan seminar untuk meningkatkan kompetensi tenaga pendidik.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {TEACHER_ACTIVITIES.map((activity) => (
                            <div key={activity.id} className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full">
                                {/* Image with fixed height */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={activity.img}
                                        alt={activity.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

                                    {/* Date Badge */}
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md flex items-center gap-1">
                                            <Calendar size={12} /> {activity.date}
                                        </span>
                                    </div>

                                    {/* Participants Badge */}
                                    <div className="absolute bottom-4 right-4">
                                        <span className="bg-white/90 backdrop-blur-sm text-emerald-700 text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                                            <Users size={12} /> {activity.participants}
                                        </span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-emerald-600 transition-colors">
                                        {activity.title}
                                    </h3>

                                    <div className="flex items-center text-gray-500 text-sm mb-4 gap-2">
                                        <MapPin size={14} className="text-emerald-500" />
                                        <span>{activity.location}</span>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                                        {activity.desc}
                                    </p>

                                    <button className="w-full py-2.5 rounded-lg border border-emerald-100 text-emerald-700 font-bold text-sm hover:bg-emerald-50 transition-colors flex items-center justify-center gap-2 group-hover:border-emerald-200">
                                        Lihat Detail <ArrowRight size={14} />
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
