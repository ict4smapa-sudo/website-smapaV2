import React from 'react';
import { BookOpen } from 'lucide-react';

export default function HistoryPage() {

    return (
        <div className="bg-gray-50">

            {/* HERO SECTION */}
            <header className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <BookOpen size={14} className="inline mr-2" />
                        Profil Sekolah
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        Sejarah <span className="text-emerald-400">Sekolah</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Perjalanan SMAN 4 Jember dari masa ke masa
                    </p>
                </div>

                <div className="absolute bottom-0 left-0 w-full leading-none z-20 pointer-events-none">
                    <svg className="block w-full h-16 sm:h-24 text-gray-50" viewBox="0 0 1440 320" preserveAspectRatio="none">
                        <path fill="currentColor" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    </svg>
                </div>
            </header>

            {/* MAIN CONTENT - PROSE LAYOUT */}
            <main className="container mx-auto px-6 py-20 -mt-10 relative z-20">
                <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">

                    <div className="prose prose-lg max-w-none">
                        <h2 className="font-space font-bold text-3xl text-gray-900 mb-6">Awal Berdiri (1977)</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            SMA Negeri 4 Jember didirikan pada tahun <strong>1977</strong> sebagai bagian dari upaya Pemerintah Kabupaten Jember untuk memenuhi kebutuhan pendidikan menengah atas yang berkualitas. Berlokasi strategis di Jl. Hayam Wuruk No. 145, Sempusari, Kaliwates, sekolah ini sejak awal dirancang untuk menjadi pusat pendidikan unggulan di wilayah Jember.
                        </p>

                        <h2 className="font-space font-bold text-3xl text-gray-900 mb-6 mt-12">Perkembangan dan Prestasi</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Selama lebih dari <strong>45 tahun</strong> beroperasi, SMAN 4 Jember telah mengalami perkembangan pesat dalam berbagai aspek. Mulai dari infrastruktur, kualitas tenaga pengajar, hingga prestasi akademik dan non-akademik siswa. Sekolah ini telah meluluskan ribuan alumni yang kini tersebar di berbagai universitas ternama dan perusahaan besar di Indonesia maupun mancanegara.
                        </p>

                        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl my-8">
                            <p className="text-emerald-900 font-medium italic">
                                "SMAN 4 Jember berkomitmen untuk terus berinovasi dan meningkatkan kualitas pendidikan, menghasilkan lulusan yang tidak hanya cerdas secara akademik, tetapi juga berkarakter kuat dan siap menghadapi tantangan global."
                            </p>
                        </div>

                        <h2 className="font-space font-bold text-3xl text-gray-900 mb-6 mt-12">Akreditasi dan Pengakuan</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Kualitas pendidikan di SMAN 4 Jember telah diakui melalui akreditasi <strong>A (Unggul)</strong> dari Badan Akreditasi Nasional Sekolah/Madrasah (BAN-S/M). Pencapaian ini merupakan bukti nyata dari dedikasi seluruh civitas akademika dalam memberikan pelayanan pendidikan terbaik.
                        </p>

                        <h2 className="font-space font-bold text-3xl text-gray-900 mb-6 mt-12">Era Digital dan Masa Depan</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Memasuki era digital, SMAN 4 Jember terus bertransformasi dengan mengintegrasikan teknologi dalam proses pembelajaran. Fasilitas modern seperti laboratorium komputer, e-library, dan platform pembelajaran online telah tersedia untuk mendukung siswa dalam mengembangkan kompetensi abad 21.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Dengan fondasi sejarah yang kuat dan visi yang jelas, SMAN 4 Jember optimis akan terus menjadi salah satu sekolah unggulan di Jawa Timur, mencetak generasi penerus bangsa yang unggul, berkarakter, dan berprestasi.
                        </p>
                    </div>

                </div>
            </main>

        </div>
    );
}
