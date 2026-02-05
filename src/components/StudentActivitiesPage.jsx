import React from 'react';
import { Calendar, Users, ArrowRight, Camera, MapPinned } from 'lucide-react';

export default function StudentActivitiesPage() {

    // Student Activities data
    const ACTIVITIES = [
        {
            id: 1,
            title: "LDKS OSIS 2025",
            date: "15-17 Januari 2025",
            location: "Puncak, Bogor",
            desc: "Latihan Dasar Kepemimpinan Siswa untuk pengurus OSIS periode 2025/2026 dengan tema 'Membangun Karakter Pemimpin Masa Depan'. Kegiatan meliputi outbound, leadership training, dan team building.",
            img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80",
            participants: "60 Peserta"
        },
        {
            id: 2,
            title: "Classmeeting Semester Ganjil 2024",
            date: "18-20 Desember 2024",
            location: "Lapangan SMAPA",
            desc: "Kompetisi antar kelas dalam berbagai cabang olahraga dan seni meliputi futsal, basket, voli, badminton, dan lomba kreativitas. Memperkuat kebersamaan dan sportivitas antar siswa.",
            img: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?auto=format&fit=crop&w=800&q=80",
            participants: "800+ Siswa"
        },
        {
            id: 3,
            title: "Pentas Seni HUT Sekolah ke-47",
            date: "10 Maret 2024",
            location: "Aula SMAPA",
            desc: "Perayaan ulang tahun sekolah dengan penampilan seni dari siswa meliputi tari tradisional, band, paduan suara, drama, dan fashion show. Menampilkan bakat siswa di bidang seni dan budaya.",
            img: "https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?auto=format&fit=crop&w=800&q=80",
            participants: "300+ Penampil"
        },
        {
            id: 4,
            title: "Upacara Hari Pahlawan",
            date: "10 November 2024",
            location: "Lapangan Upacara",
            desc: "Upacara memperingati Hari Pahlawan dengan mengenang jasa para pahlawan Indonesia. Diikuti seluruh siswa, guru, dan staff sekolah dengan khidmat dan penuh semangat nasionalisme.",
            img: "https://images.unsplash.com/photo-1589578527966-fdac0f44566c?auto=format&fit=crop&w=800&q=80",
            participants: "1000+ Peserta"
        },
        {
            id: 5,
            title: "Study Tour ke Bali",
            date: "20-23 Agustus 2024",
            location: "Bali",
            desc: "Kunjungan edukasi kelas XII ke berbagai tempat bersejarah dan edukatif di Bali termasuk museum, situs budaya, dan pusat penelitian. Menambah wawasan dan pengalaman siswa.",
            img: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80",
            participants: "250 Siswa"
        },
        {
            id: 6,
            title: "Bazar Ramadan 1445 H",
            date: "25-28 Maret 2024",
            location: "Halaman SMAPA",
            desc: "Bazar makanan dan produk kreatif siswa dalam rangka menyambut bulan suci Ramadan. Mengembangkan jiwa entrepreneurship dan kreativitas siswa dengan bimbingan guru.",
            img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
            participants: "50+ Booth"
        },
        {
            id: 7,
            title: "Lomba Kreativitas MOPD",
            date: "15-17 Juli 2024",
            location: "Lingkungan SMAPA",
            desc: "Masa Orientasi Peserta Didik dengan berbagai lomba kreativitas antar kelas seperti yel-yel, poster, dan video kreatif. Menyambut siswa baru dengan kegiatan yang menyenangkan.",
            img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
            participants: "400+ Siswa Baru"
        },
        {
            id: 8,
            title: "Festival Budaya Nusantara",
            date: "17 Agustus 2024",
            location: "Aula dan Lapangan",
            desc: "Perayaan kemerdekaan Indonesia dengan menampilkan keanekaragaman budaya nusantara melalui tarian daerah, pameran kerajinan, dan kuliner tradisional dari berbagai provinsi.",
            img: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80",
            participants: "600+ Siswa"
        }
    ];



    return (
        <div className="bg-gray-50">

            {/* HERO SECTION */}
            <header className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <Camera size={14} className="inline mr-2" />
                        Student Life
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        Kegiatan <span className="text-emerald-400">Siswa</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Dokumentasi aktivitas dan kreativitas siswa SMAN 4 Jember dalam berbagai kegiatan akademik dan non-akademik.
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
                        <h2 className="font-space font-bold text-3xl text-gray-900 mb-4">Dokumentasi Kegiatan Siswa</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Berbagai aktivitas dan kreativitas siswa dalam mengembangkan potensi di luar pembelajaran akademik.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ACTIVITIES.map((activity) => (
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
                                        <MapPinned size={14} className="text-emerald-500" />
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
