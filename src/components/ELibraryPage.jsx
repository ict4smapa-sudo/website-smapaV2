import React, { useState, useEffect } from 'react';
import { BookOpen, Search, Users, Clock, Construction, ArrowRight } from 'lucide-react';

export default function ELibraryPage() {

    return (
        <div className="font-outfit text-gray-800 bg-gray-50 overflow-x-hidden">

            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
        .font-space { font-family: 'Space Grotesk', sans-serif; }
        .font-outfit { font-family: 'Outfit', sans-serif; }
      `}</style>

            {/* FULL HEIGHT COMING SOON SECTION */}
            <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-50 flex flex-col relative overflow-hidden">
                {/* Spacer for fixed navbar */}
                <div className="h-20"></div>
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")' }}></div>

                {/* Floating Book Icons */}
                <div className="absolute top-20 left-10 opacity-10 animate-pulse">
                    <BookOpen size={80} className="text-emerald-600" />
                </div>
                <div className="absolute bottom-20 right-10 opacity-10 animate-pulse" style={{ animationDelay: '1s' }}>
                    <BookOpen size={60} className="text-emerald-600" />
                </div>


                {/* Main Content */}
                <div className="flex-1 flex items-center justify-center py-20 px-6">
                    <div className="container mx-auto text-center relative z-10">
                        <div className="max-w-3xl mx-auto">
                            {/* Large Icon */}
                            <div className="mb-8 flex justify-center">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-3xl animate-pulse"></div>
                                    <div className="relative w-32 h-32 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-emerald-500/30 transform hover:scale-105 transition-transform duration-300">
                                        <Construction size={64} className="text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Badge */}
                            <div className="mb-6">
                                <span className="inline-block px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-full text-xs font-bold tracking-widest uppercase text-emerald-700">
                                    <Clock size={14} className="inline mr-2" />
                                    Segera Hadir
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="font-space font-extrabold text-4xl md:text-6xl mb-6 leading-tight text-gray-900">
                                E-Library <span className="text-emerald-600">Sedang Disiapkan</span>
                            </h1>

                            {/* Subtitle */}
                            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed mb-12">
                                Kami sedang membangun perpustakaan digital untuk memudahkan akses literasi siswa SMAN 4 Jember.
                            </p>

                            {/* Features Preview */}
                            <div className="grid md:grid-cols-3 gap-6 mb-12">
                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <BookOpen size={24} className="text-emerald-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Koleksi Digital</h3>
                                    <p className="text-sm text-gray-600">Ribuan buku & jurnal dalam format digital</p>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <Search size={24} className="text-emerald-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Pencarian Mudah</h3>
                                    <p className="text-sm text-gray-600">Sistem pencarian cerdas dan filter kategori</p>
                                </div>

                                <div className="bg-white rounded-2xl p-6 shadow-lg border border-emerald-100 hover:shadow-xl transition-all duration-300">
                                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                                        <Users size={24} className="text-blue-600" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 mb-2">Akses 24/7</h3>
                                    <p className="text-sm text-gray-600">Belajar kapan saja, dimana saja</p>
                                </div>
                            </div>

                            {/* Back Button */}
                            <a
                                href="/"
                                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg shadow-emerald-500/30 transition-all transform hover:scale-105 active:scale-95"
                            >
                                <ArrowRight size={20} className="rotate-180" />
                                Kembali ke Beranda
                            </a>

                            {/* Info Text */}
                            <p className="mt-8 text-gray-500 text-sm">
                                Estimated Launch: <span className="font-bold text-emerald-600">Q2 2026</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
