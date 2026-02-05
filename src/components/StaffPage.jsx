import React, { useState, useEffect } from 'react';
import { Users, Search, ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function StaffPage() {
    // DATA & PAGINATION STATE
    const [searchTerm, setSearchTerm] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 16;

    // GENERATE 72 DUMMY TEACHERS
    const allTeachers = Array.from({ length: 72 }, (_, i) => {
        const subjects = ["Matematika", "Bahasa Indonesia", "Fisika", "Biologi", "Kimia", "Sejarah", "Ekonomi", "Seni Budaya", "PJOK", "Bimbingan Konseling", "Staff TU", "Bahasa Inggris"];
        return {
            id: i + 1,
            name: `Guru / Staff ${i + 1}`,
            mapel: subjects[i % subjects.length],
            img: `https://ui-avatars.com/api/?name=Guru+${i + 1}&background=random&color=fff&size=256`
        };
    });

    // FILTER LOGIC
    const filteredTeachers = allTeachers.filter(teacher =>
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        teacher.mapel.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // PAGINATION LOGIC
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentTeachers = filteredTeachers.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredTeachers.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Reset page to 1 when searching
    useEffect(() => {
        setCurrentPage(1);
    }, [searchTerm]);

    return (
        <div className="bg-gray-50">

            {/* HEADER */}
            <header className="relative pt-32 pb-20 bg-emerald-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                <div className="container mx-auto px-6 text-center relative z-10">
                    <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold tracking-widest uppercase mb-6 text-emerald-300 shadow-lg">
                        <Users size={14} className="inline mr-2" /> Direktori SDM
                    </span>
                    <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight">
                        Guru & <span className="text-emerald-400">Tenaga Pendidik</span>
                    </h1>
                    <p className="text-xl text-emerald-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Tim pendidik profesional dan berdedikasi SMAN 4 Jember
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
                {/* PRINCIPAL CARD (Static) */}
                <div className="max-w-4xl mx-auto mb-16">
                    <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row border border-gray-100">
                        <div className="md:w-1/3 bg-gray-200 relative">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                                alt="Kepala Sekolah"
                                className="w-full h-full object-cover min-h-[300px]"
                            />
                        </div>
                        <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                            <h3 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-2">Kepala Sekolah</h3>
                            <h2 className="text-3xl font-bold text-gray-900 font-space mb-4">Dora Indriana, S.Pd., M.Pd.</h2>
                            <p className="text-gray-600 italic mb-6">
                                "Pendidikan adalah senjata paling ampuh untuk mengubah dunia. Mari kita wujudkan generasi emas yang berkarakter, inovatif, dan berprestasi."
                            </p>
                            <div className="flex gap-4 flex-wrap">
                                <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-bold text-gray-600">NIP. 19750101 200003 2 001</div>
                                <div className="px-4 py-2 bg-emerald-100 rounded-lg text-sm font-bold text-emerald-700">Kepemimpinan sejak 2020</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEARCH BAR */}
                <div className="max-w-6xl mx-auto mb-8 flex justify-between items-center flex-wrap gap-4">
                    <h3 className="text-2xl font-bold font-space text-gray-800 border-l-4 border-emerald-500 pl-4">Dewan Guru ({filteredTeachers.length})</h3>
                    <div className="relative w-full md:w-80">
                        <input
                            type="text"
                            placeholder="Cari nama atau mapel..."
                            className="w-full pl-10 pr-10 py-3 rounded-full border border-gray-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 transition-all outline-none"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <Search className="absolute left-3 top-3.5 text-gray-400" size={20} />
                        {searchTerm && (
                            <button
                                onClick={() => setSearchTerm("")}
                                className="absolute right-3 top-3.5 text-gray-400 hover:text-gray-600"
                            >
                                <X size={20} />
                            </button>
                        )}
                    </div>
                </div>

                {/* TEACHERS GRID */}
                <div className="max-w-6xl mx-auto">
                    {currentTeachers.length > 0 ? (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                            {currentTeachers.map((guru) => (
                                <div key={guru.id} className="bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col h-full">
                                    <div className="h-56 overflow-hidden relative bg-gray-100">
                                        <img
                                            src={guru.img}
                                            alt={guru.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <div className="p-4 text-center flex-grow flex flex-col justify-center">
                                        <h4 className="font-bold text-gray-900 text-base leading-tight mb-1">{guru.name}</h4>
                                        <p className="text-sm text-emerald-600 font-medium bg-emerald-50 inline-block px-3 py-1 rounded-full mx-auto mt-2">{guru.mapel}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200">
                            <Users size={48} className="mx-auto text-gray-300 mb-4" />
                            <p className="text-gray-500 font-medium">Tidak ada guru ditemukan dengan kata kunci "{searchTerm}"</p>
                            <button
                                onClick={() => setSearchTerm("")}
                                className="mt-4 px-6 py-2 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition-colors"
                            >
                                Reset Pencarian
                            </button>
                        </div>
                    )}

                    {/* PAGINATION CONTROLS */}
                    {totalPages > 1 && (
                        <div className="flex justify-center items-center mt-12 gap-2 flex-wrap">
                            <button
                                onClick={() => paginate(currentPage - 1)}
                                disabled={currentPage === 1}
                                className="p-2 rounded-full border border-gray-300 hover:bg-emerald-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => paginate(i + 1)}
                                    className={`w-10 h-10 rounded-full font-bold text-sm transition-all ${currentPage === i + 1
                                        ? 'bg-emerald-600 text-white shadow-lg scale-110'
                                        : 'bg-white text-gray-600 hover:bg-emerald-50 border border-gray-200'
                                        }`}
                                >
                                    {i + 1}
                                </button>
                            ))}

                            <button
                                onClick={() => paginate(currentPage + 1)}
                                disabled={currentPage === totalPages}
                                className="p-2 rounded-full border border-gray-300 hover:bg-emerald-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    )}

                    {/* STATS SECTION */}
                    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100">
                            <div className="text-4xl font-bold text-emerald-600 mb-2">70+</div>
                            <p className="text-gray-600 font-medium">Tenaga Pendidik</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100">
                            <div className="text-4xl font-bold text-emerald-600 mb-2">20+</div>
                            <p className="text-gray-600 font-medium">Tenaga Kependidikan</p>
                        </div>
                        <div className="bg-white rounded-2xl shadow-md p-6 text-center border border-gray-100">
                            <div className="text-4xl font-bold text-emerald-600 mb-2">85%</div>
                            <p className="text-gray-600 font-medium">Berkualifikasi S2</p>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    );
}
