import React, { useState, useEffect } from 'react';

const slides = [
    {
        id: 1,
        title: "Ekstrakurikuler Beragam",
        description: "Wadah pengembangan bakat dan minat siswa di bidang akademik, seni, dan olahraga.",
        tag: "SMAN 4 JEMBER"
    },
    {
        id: 2,
        title: "Generasi Unggul & Berkarakter",
        description: "Membentuk siswa yang berprestasi di tingkat nasional maupun global dengan akhlak mulia.",
        tag: "VISI MISI"
    }
];

export default function HeroSlider() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full h-[550px] md:h-[650px] bg-[#022c22] overflow-hidden flex items-center justify-center">
            {/* Background Pattern (Optional) */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>

            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 flex flex-col items-center justify-center text-center px-6 transition-all duration-1000 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                        }`}
                >
                    <span className="px-4 py-1.5 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-bold tracking-widest mb-6 uppercase">
                        {slide.tag}
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-7xl text-white mb-6 max-w-4xl leading-tight">
                        {slide.title}
                    </h1>
                    <p className="text-emerald-50/70 text-lg md:text-xl max-w-2xl mb-10 font-light leading-relaxed">
                        {slide.description}
                    </p>
                    <div className="flex gap-4">
                        <button className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white rounded-full font-bold transition-all transform hover:scale-105">
                            Tentang Kami
                        </button>
                        <button className="px-8 py-3 border border-white/30 text-white rounded-full font-bold hover:bg-white/10 transition-all">
                            Info PPDB
                        </button>
                    </div>
                </div>
            ))}

            {/* Dots Indicator */}
            <div className="absolute bottom-10 flex gap-2">
                {slides.map((_, i) => (
                    <div key={i} className={`h-1.5 rounded-full transition-all ${i === currentSlide ? "bg-emerald-400 w-8" : "bg-white/20 w-2"}`}></div>
                ))}
            </div>
        </section>
    );
}