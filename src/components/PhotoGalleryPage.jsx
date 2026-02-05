import React, { useState } from 'react';
import { Image as ImageIcon, Calendar, Camera, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function PhotoGalleryPage() {
    // STATE FOR ALBUM LIGHTBOX
    const [activeAlbum, setActiveAlbum] = useState(null);
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

    // MOCK DATA: PHOTO ALBUMS
    const albums = [
        {
            id: 1,
            title: "Peringatan HUT RI Ke-80",
            date: "17 Agustus 2025",
            cover: "https://images.unsplash.com/photo-1561489396-888724a1543d?auto=format&fit=crop&w=600&q=80",
            count: 12,
            photos: [
                "https://images.unsplash.com/photo-1561489396-888724a1543d?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80"
            ]
        },
        {
            id: 2,
            title: "Classmeeting Semester Ganjil",
            date: "15 Desember 2025",
            cover: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=600&q=80",
            count: 24,
            photos: [
                "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?auto=format&fit=crop&w=1200&q=80"
            ]
        },
        {
            id: 3,
            title: "Kunjungan Studi Banding",
            date: "10 November 2025",
            cover: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
            count: 8,
            photos: [
                "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
            ]
        },
        {
            id: 4,
            title: "Pentas Seni Sekolah",
            date: "20 Oktober 2025",
            cover: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=600&q=80",
            count: 30,
            photos: [
                "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1514525253440-b393452e8220?auto=format&fit=crop&w=1200&q=80"
            ]
        },
        {
            id: 5,
            title: "Kegiatan Pramuka",
            date: "14 Agustus 2025",
            cover: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=600&q=80",
            count: 15,
            photos: [
                "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1504609813442-a8924e83f76e?auto=format&fit=crop&w=1200&q=80"
            ]
        },
        {
            id: 6,
            title: "Wisuda Angkatan 2025",
            date: "15 Mei 2025",
            cover: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=600&q=80",
            count: 45,
            photos: [
                "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
                "https://images.unsplash.com/photo-1627556592933-ffe99c1cd9eb?auto=format&fit=crop&w=1200&q=80"
            ]
        }
    ];

    const openAlbum = (album) => {
        setActiveAlbum(album);
        setCurrentPhotoIndex(0);
    };

    const nextPhoto = (e) => {
        e.stopPropagation();
        if (activeAlbum) {
            setCurrentPhotoIndex((prev) => (prev + 1) % activeAlbum.photos.length);
        }
    };

    const prevPhoto = (e) => {
        e.stopPropagation();
        if (activeAlbum) {
            setCurrentPhotoIndex((prev) => (prev - 1 + activeAlbum.photos.length) % activeAlbum.photos.length);
        }
    };

    return (
        <div className="bg-gray-50">

            {/* HERO SECTION */}
            <header className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <Camera size={14} className="inline mr-2" />
                        Dokumentasi Kegiatan
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        Galeri <span className="text-emerald-400">Foto</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Momen-momen berharga dan dokumentasi visual kegiatan keluarga besar SMAN 4 Jember.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none">
                    <svg className="block w-full h-16 sm:h-24 text-gray-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </header>

            {/* MAIN CONTENT - ALBUM GRID */}
            <main className="container mx-auto px-6 py-20 -mt-10 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 md:p-10">

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {albums.map((album) => (
                            <div
                                key={album.id}
                                className="group cursor-pointer bg-gray-50 rounded-2xl p-4 border border-gray-100 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
                                onClick={() => openAlbum(album)}
                            >
                                {/* Album Cover Stack Effect */}
                                <div className="relative">
                                    <div className="absolute top-0 left-2 right-2 h-full bg-gray-200 rounded-xl transform -translate-y-2 z-0"></div>
                                    <div className="relative h-64 rounded-xl overflow-hidden shadow-md z-10">
                                        <img
                                            src={album.cover}
                                            alt={album.title}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                        />
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>

                                        {/* Count Badge */}
                                        <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                                            <ImageIcon size={12} /> {album.count} Foto
                                        </div>
                                    </div>
                                </div>

                                {/* Album Info */}
                                <div className="mt-6 px-1">
                                    <div className="flex items-center gap-2 text-xs text-emerald-600 font-bold mb-2 uppercase tracking-wide">
                                        <Calendar size={12} /> {album.date}
                                    </div>
                                    <h3 className="font-space font-bold text-xl text-gray-900 group-hover:text-emerald-700 transition-colors leading-tight">
                                        {album.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </main>

            {/* LIGHTBOX MODAL */}
            {activeAlbum && (
                <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col animate-in fade-in duration-300">
                    {/* Toolbar */}
                    <div className="flex justify-between items-center p-6 text-white z-50">
                        <div>
                            <h3 className="font-bold text-lg">{activeAlbum.title}</h3>
                            <p className="text-xs text-gray-400">{currentPhotoIndex + 1} dari {activeAlbum.photos.length}</p>
                        </div>
                        <button
                            onClick={() => setActiveAlbum(null)}
                            className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                        >
                            <X size={24} />
                        </button>
                    </div>

                    {/* Main Image Area */}
                    <div className="flex-grow flex items-center justify-center relative p-4" onClick={() => setActiveAlbum(null)}>
                        <img
                            src={activeAlbum.photos[currentPhotoIndex]}
                            alt="Gallery View"
                            className="max-h-[80vh] max-w-full object-contain shadow-2xl rounded-lg"
                            onClick={(e) => e.stopPropagation()} // Prevent close on image click
                        />

                        {/* Nav Buttons */}
                        <button
                            onClick={prevPhoto}
                            className="absolute left-4 md:left-10 p-3 bg-black/50 text-white rounded-full hover:bg-emerald-600 transition-all backdrop-blur-sm"
                        >
                            <ChevronLeft size={32} />
                        </button>
                        <button
                            onClick={nextPhoto}
                            className="absolute right-4 md:right-10 p-3 bg-black/50 text-white rounded-full hover:bg-emerald-600 transition-all backdrop-blur-sm"
                        >
                            <ChevronRight size={32} />
                        </button>
                    </div>

                    {/* Thumbnail Strip (Optional cosmetic) */}
                    <div className="h-20 bg-black/50 flex items-center justify-center gap-2 p-2 overflow-x-auto">
                        {activeAlbum.photos.map((photo, idx) => (
                            <div
                                key={idx}
                                onClick={(e) => { e.stopPropagation(); setCurrentPhotoIndex(idx); }}
                                className={`h-14 w-20 flex-shrink-0 cursor-pointer rounded-md overflow-hidden border-2 transition-all ${idx === currentPhotoIndex ? 'border-emerald-500 opacity-100' : 'border-transparent opacity-50 hover:opacity-100'}`}
                            >
                                <img src={photo} className="w-full h-full object-cover" alt="thumb" />
                            </div>
                        ))}
                    </div>
                </div>
            )}

        </div>
    );
}
