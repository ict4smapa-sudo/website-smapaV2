import React, { useState } from 'react';
import { Video, PlayCircle, X } from 'lucide-react';

export default function VideoGalleryPage() {
    const [activeVideo, setActiveVideo] = useState(null);

    return (
        <div className="font-outfit text-gray-800 bg-gray-50 overflow-x-hidden">

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        .font-space { font-family: 'Space Grotesk', sans-serif; }
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}</style>

            {/* HERO SECTION - ADJUSTED SPACING (FIXED) */}
            <header className="relative pt-32 pb-16 lg:pb-24 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <Video size={14} className="inline mr-2" />
                        Koleksi Video
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        Galeri <span className="text-emerald-400">Video</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Kumpulan video kegiatan, profil, dan karya kreatif siswa
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none">
                    <svg className="block w-full h-16 sm:h-24 text-gray-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </header>

            {/* MAIN CONTENT - VIDEO GALLERY */}
            <main className="container mx-auto px-6 py-20 -mt-10 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">

                    {/* Video Gallery Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Video 1 */}
                        <div
                            className="group cursor-pointer"
                            onClick={() => setActiveVideo({
                                youtubeId: "dQw4w9WgXcQ",
                                title: "Profil SMAN 4 Jember 2025",
                                duration: "3:45"
                            })}
                        >
                            <div className="relative h-56 rounded-xl overflow-hidden shadow-lg mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80"
                                    alt="Profil SMAN 4 Jember"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                                        <PlayCircle size={32} className="text-white" fill="white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                    3:45
                                </div>
                            </div>
                            <h3 className="font-space font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                Profil SMAN 4 Jember 2025
                            </h3>
                            <p className="text-gray-500 text-sm">Video profil sekolah terbaru</p>
                        </div>

                        {/* Video 2 */}
                        <div
                            className="group cursor-pointer"
                            onClick={() => setActiveVideo({
                                youtubeId: "dQw4w9WgXcQ",
                                title: "Upacara HUT RI ke-79",
                                duration: "5:20"
                            })}
                        >
                            <div className="relative h-56 rounded-xl overflow-hidden shadow-lg mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=600&q=80"
                                    alt="Upacara HUT RI"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                                        <PlayCircle size={32} className="text-white" fill="white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                    5:20
                                </div>
                            </div>
                            <h3 className="font-space font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                Upacara HUT RI ke-79
                            </h3>
                            <p className="text-gray-500 text-sm">Peringatan kemerdekaan Indonesia</p>
                        </div>

                        {/* Video 3 */}
                        <div
                            className="group cursor-pointer"
                            onClick={() => setActiveVideo({
                                youtubeId: "dQw4w9WgXcQ",
                                title: "Final DBL East Java 2025",
                                duration: "8:15"
                            })}
                        >
                            <div className="relative h-56 rounded-xl overflow-hidden shadow-lg mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1546519638-68e109498ee2?auto=format&fit=crop&w=600&q=80"
                                    alt="Final DBL"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                                        <PlayCircle size={32} className="text-white" fill="white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                    8:15
                                </div>
                            </div>
                            <h3 className="font-space font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                Final DBL East Java 2025
                            </h3>
                            <p className="text-gray-500 text-sm">Highlights pertandingan final basket</p>
                        </div>

                        {/* Video 4 */}
                        <div
                            className="group cursor-pointer"
                            onClick={() => setActiveVideo({
                                youtubeId: "dQw4w9WgXcQ",
                                title: "Pentas Seni Budaya 2025",
                                duration: "12:30"
                            })}
                        >
                            <div className="relative h-56 rounded-xl overflow-hidden shadow-lg mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=600&q=80"
                                    alt="Pentas Seni"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                                        <PlayCircle size={32} className="text-white" fill="white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                    12:30
                                </div>
                            </div>
                            <h3 className="font-space font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                Pentas Seni Budaya 2025
                            </h3>
                            <p className="text-gray-500 text-sm">Pertunjukan seni dan budaya siswa</p>
                        </div>

                        {/* Video 5 */}
                        <div
                            className="group cursor-pointer"
                            onClick={() => setActiveVideo({
                                youtubeId: "dQw4w9WgXcQ",
                                title: "Praktikum Lab Kimia",
                                duration: "4:50"
                            })}
                        >
                            <div className="relative h-56 rounded-xl overflow-hidden shadow-lg mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=600&q=80"
                                    alt="Praktikum Kimia"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                                        <PlayCircle size={32} className="text-white" fill="white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                    4:50
                                </div>
                            </div>
                            <h3 className="font-space font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                Praktikum Lab Kimia
                            </h3>
                            <p className="text-gray-500 text-sm">Kegiatan praktikum siswa</p>
                        </div>

                        {/* Video 6 */}
                        <div
                            className="group cursor-pointer"
                            onClick={() => setActiveVideo({
                                youtubeId: "dQw4w9WgXcQ",
                                title: "Wisuda Kelas XII 2025",
                                duration: "15:00"
                            })}
                        >
                            <div className="relative h-56 rounded-xl overflow-hidden shadow-lg mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80"
                                    alt="Wisuda"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                                        <PlayCircle size={32} className="text-white" fill="white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                    15:00
                                </div>
                            </div>
                            <h3 className="font-space font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                Wisuda Kelas XII 2025
                            </h3>
                            <p className="text-gray-500 text-sm">Pelepasan siswa angkatan 2025</p>
                        </div>

                        {/* Video 7 */}
                        <div
                            className="group cursor-pointer"
                            onClick={() => setActiveVideo({
                                youtubeId: "dQw4w9WgXcQ",
                                title: "Class Meeting 2025",
                                duration: "6:40"
                            })}
                        >
                            <div className="relative h-56 rounded-xl overflow-hidden shadow-lg mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80"
                                    alt="Class Meeting"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                                        <PlayCircle size={32} className="text-white" fill="white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                    6:40
                                </div>
                            </div>
                            <h3 className="font-space font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                Class Meeting 2025
                            </h3>
                            <p className="text-gray-500 text-sm">Kompetisi antar kelas</p>
                        </div>

                        {/* Video 8 */}
                        <div
                            className="group cursor-pointer"
                            onClick={() => setActiveVideo({
                                youtubeId: "dQw4w9WgXcQ",
                                title: "Ekstrakurikuler Musik",
                                duration: "7:25"
                            })}
                        >
                            <div className="relative h-56 rounded-xl overflow-hidden shadow-lg mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=600&q=80"
                                    alt="Ekstrakurikuler Musik"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                                        <PlayCircle size={32} className="text-white" fill="white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                    7:25
                                </div>
                            </div>
                            <h3 className="font-space font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                Ekstrakurikuler Musik
                            </h3>
                            <p className="text-gray-500 text-sm">Latihan band dan paduan suara</p>
                        </div>

                        {/* Video 9 */}
                        <div
                            className="group cursor-pointer"
                            onClick={() => setActiveVideo({
                                youtubeId: "dQw4w9WgXcQ",
                                title: "Tour Fasilitas Sekolah",
                                duration: "9:10"
                            })}
                        >
                            <div className="relative h-56 rounded-xl overflow-hidden shadow-lg mb-4">
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
                                    alt="Tour Sekolah"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                                    <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center group-hover:scale-110 transition-transform shadow-2xl">
                                        <PlayCircle size={32} className="text-white" fill="white" />
                                    </div>
                                </div>
                                <div className="absolute bottom-3 right-3 bg-black/80 text-white text-xs px-2 py-1 rounded">
                                    9:10
                                </div>
                            </div>
                            <h3 className="font-space font-bold text-lg text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
                                Tour Fasilitas Sekolah
                            </h3>
                            <p className="text-gray-500 text-sm">Keliling fasilitas SMAN 4 Jember</p>
                        </div>
                    </div>
                </div>
            </main>

            {/* VIDEO MODAL */}
            {activeVideo && (
                <div
                    className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
                    onClick={() => setActiveVideo(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-emerald-400 transition-colors z-50"
                        onClick={() => setActiveVideo(null)}
                    >
                        <X size={36} />
                    </button>

                    <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
                        <div className="relative aspect-video rounded-xl overflow-hidden shadow-2xl">
                            <iframe
                                src={`https://www.youtube.com/embed/${activeVideo.youtubeId}?autoplay=1`}
                                title={activeVideo.title}
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                        <div className="mt-6 text-center text-white">
                            <h3 className="font-space font-bold text-2xl mb-2">
                                {activeVideo.title}
                            </h3>
                            <p className="text-emerald-400 text-sm">Durasi: {activeVideo.duration}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
