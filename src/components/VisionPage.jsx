import React from 'react';
import { Target, Star } from 'lucide-react';

export default function VisionPage() {
    // REAL DATA: VISI & MISI
    const visi = "Terwujudnya lulusan yang berkarakter, inovatif, dan berprestasi.";

    const misi = [
        "Mewujudkan kehidupan warga sekolah yang beriman dan bertakwa kepada Tuhan YME, serta berakhlak mulia.",
        "Mewujudkan warga sekolah yang berjiwa Bhinneka Tunggal Ika, cinta tanah air dan bangsa, menjunjung tinggi nilai persatuan dan kesatuan, menghargai perbedaan agama/kepercayaan dan suku.",
        "Membangun jiwa kemandirian: tidak bergantung pada orang lain, memiliki etos kerja yang baik, tangguh, berdaya juang, profesional, kreatif, keberanian, dan menjadi pembelajar sepanjang hayat.",
        "Mewujudkan warga sekolah yang memiliki budaya gotong royong: saling menghargai dan menghormati, musyawarah untuk mufakat, bekerja sama, dan tolong menolong, memiliki empati dan rasa solidaritas, anti diskriminasi, anti kekerasan, dan sikap kerelawanan.",
        "Mewujudkan warga sekolah yang memiliki integritas (komitmen, kejujuran, konsistensi) dan bertanggung jawab.",
        "Mewujudkan warga sekolah yang kreatif dan inovatif (imajinatif, menyukai tantangan, adaptif), kolaboratif, komunikatif berbasis seni dan kewirausahaan (School Based Art and Entrepreneurship).",
        "Mewujudkan warga sekolah yang mampu menguasai pengetahuan dan teknologi abad 21.",
        "Mewujudkan warga sekolah yang mampu menjuarai lomba akademik dan non-akademik di tingkat nasional dan internasional."
    ];

    return (
        <div className="bg-gray-50">

            {/* HERO SECTION */}
            <header className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <Target size={14} className="inline mr-2" />
                        Cita-Cita Luhur
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        Visi & <span className="text-emerald-400">Misi</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Landasan utama dalam setiap langkah pendidikan di SMAN 4 Jember.
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none">
                    <svg className="block w-full h-16 sm:h-24 text-gray-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </header>

            {/* MAIN CONTENT */}
            <main className="container mx-auto px-6 py-16 -mt-10 relative z-20">
                <div className="grid md:grid-cols-1 gap-12 max-w-5xl mx-auto">

                    {/* VISI CARD */}
                    <div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-3xl shadow-2xl p-8 md:p-12 text-center relative overflow-hidden group hover:scale-[1.01] transition-transform duration-500">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32"></div>
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full -ml-20 -mb-20"></div>

                        <div className="relative z-10">
                            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 border border-white/30">
                                <Star size={32} className="text-yellow-300" fill="currentColor" />
                            </div>
                            <h2 className="text-xl font-bold font-space mb-6 tracking-[0.2em] opacity-90 uppercase">Visi Sekolah</h2>
                            <p className="text-2xl md:text-4xl font-bold leading-relaxed font-space">
                                "{visi}"
                            </p>
                        </div>
                    </div>

                    {/* MISI LIST */}
                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
                        <div className="text-center mb-10">
                            <h2 className="text-3xl font-bold font-space text-emerald-900 inline-block border-b-4 border-emerald-500 pb-2">Misi Sekolah</h2>
                        </div>

                        <div className="space-y-6">
                            {misi.map((item, i) => (
                                <div key={i} className="flex gap-4 items-start group p-4 rounded-xl hover:bg-emerald-50 transition-colors border border-transparent hover:border-emerald-100">
                                    <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 text-emerald-700 font-bold font-space text-lg shadow-sm group-hover:bg-emerald-600 group-hover:text-white transition-all">
                                        {i + 1}
                                    </div>
                                    <p className="text-gray-700 leading-relaxed text-lg pt-1 group-hover:text-gray-900">
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>

        </div>
    );
}
