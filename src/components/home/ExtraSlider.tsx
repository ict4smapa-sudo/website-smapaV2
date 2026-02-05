import React, { useRef } from 'react';

// Interface untuk tipe data props (opsional, tapi baik untuk TypeScript)
interface ExtraSliderProps {
    extracurriculars: any[];
}

export default function ExtraSlider({ extracurriculars }: ExtraSliderProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    return (
        <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 overflow-hidden">
            <div className="container mx-auto px-6 mb-12">
                <div className="text-center">
                    <span className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-bold mb-4">
                        Ekstrakurikuler
                    </span>
                    <h2 className="font-space font-extrabold text-4xl md:text-5xl text-gray-900 mb-4">
                        Kembangkan Potensimu
                    </h2>
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                        Lebih dari 10 pilihan ekstrakurikuler untuk mengasah bakat dan minat siswa
                    </p>
                </div>
            </div>

            {/* Horizontal Scrolling Container */}
            <div className="relative">
                {/* Class 'animate-scroll' akan kita definisikan di global.css */}
                <div className="flex gap-6 animate-scroll" ref={scrollContainerRef}>
                    {/* Duplicate items for seamless loop */}
                    {[...extracurriculars, ...extracurriculars].map((item, index) => (
                        <div
                            key={index}
                            className="flex-shrink-0 w-80 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={item.data.image}
                                    alt={item.data.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                                        {item.data.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="font-space font-bold text-xl text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors">
                                    {item.data.name}
                                </h3>

                                {item.data.instructor && (
                                    <p className="text-sm text-gray-600 mb-2">
                                        <span className="font-semibold">Pembina:</span> {item.data.instructor}
                                    </p>
                                )}

                                {item.data.schedule && (
                                    <p className="text-sm text-gray-600 mb-4">
                                        <span className="font-semibold">Jadwal:</span> {item.data.schedule}
                                    </p>
                                )}

                                {item.data.description && (
                                    <p className="text-sm text-gray-500 line-clamp-2">
                                        {item.data.description}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}