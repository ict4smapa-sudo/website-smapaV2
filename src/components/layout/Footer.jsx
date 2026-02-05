import React from 'react';
import { MapPin, Phone, Mail, Youtube, Instagram } from 'lucide-react';
import { schoolContact, socialMedia } from '../../constants/navigation';

export default function Footer() {
    return (
        <footer id="kontak" className="bg-[#0B1120] text-gray-300 pt-12 pb-0 mt-0 border-t border-white/5">
            <div className="container mx-auto px-6 mb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                    {/* Col 1: Profile */}
                    <div className="col-span-1">
                        <div className="flex items-center space-x-3 mb-6">
                            <div className="w-12 h-12 rounded-xl overflow-hidden shadow-lg border border-white/10">
                                <img src="/image/logo_smapa.PNG" alt="Logo SMAN 4 Jember" className="w-full h-full object-contain" />
                            </div>
                            <div className="flex flex-col">
                                <span className="font-extrabold text-2xl text-white tracking-wide font-space uppercase">SMAN 4 JEMBER</span>
                                <span className="text-sm text-emerald-400 tracking-widest font-bold">Est. 1977</span>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed mb-6 text-gray-400">
                            Sekolah menengah atas yang berkomitmen mencetak generasi unggul, berkarakter, dan berprestasi di tingkat nasional maupun global.
                        </p>
                    </div>

                    {/* Col 2: Menu Utama */}
                    <div className="col-span-1">
                        <h4 className="text-white font-bold text-lg mb-6 font-space border-l-4 border-emerald-500 pl-4">Menu Utama</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Beranda", link: "/" },
                                { label: "Prestasi", link: "/prestasi" },
                                { label: "Informasi", link: "/informasi/pengumuman" },
                                { label: "Galeri Foto", link: "/galeri/foto" },
                                { label: "PPDB 2026", link: "/ppdb" }
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 group-hover:scale-125 transition-transform"></span>
                                    <a href={item.link} className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Tautan Penting */}
                    <div className="col-span-1">
                        <h4 className="text-white font-bold text-lg mb-6 font-space border-l-4 border-emerald-500 pl-4">Tautan Penting</h4>
                        <ul className="space-y-3">
                            {[
                                { label: "Profil Sekolah", link: "/profil/sejarah" },
                                { label: "Visi & Misi", link: "/profil/visi-misi" },
                                { label: "Tenaga Pendidik", link: "/profil/personalia" },
                                { label: "Ekstrakurikuler", link: "/kegiatan/ekstrakurikuler" },
                                { label: "E-Library", link: "/fasilitas/e-library" }
                            ].map((item, idx) => (
                                <li key={idx} className="flex items-center group">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-3 group-hover:scale-125 transition-transform"></span>
                                    <a href={item.link} className="text-sm text-gray-400 hover:text-emerald-400 transition-colors">{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 4: Contact & Precise Map */}
                    <div className="col-span-1">
                        <h4 className="text-white font-bold text-lg mb-6 font-space border-l-4 border-emerald-500 pl-4">Hubungi Kami</h4>
                        <div className="space-y-3 mb-6">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-emerald-500 mt-0.5 shrink-0" size={18} />
                                <span className="text-sm text-gray-400 leading-snug">{schoolContact.address}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone className="text-emerald-500 shrink-0" size={18} />
                                <span className="text-sm text-gray-400">{schoolContact.phone}</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail className="text-emerald-500 shrink-0" size={18} />
                                <span className="text-sm text-gray-400">{schoolContact.email}</span>
                            </div>
                        </div>
                        <div className="w-full h-32 rounded-xl overflow-hidden border border-gray-700 shadow-lg relative group hover:border-emerald-500/50 transition-all duration-500">
                            <iframe
                                src={schoolContact.mapsUrl}
                                className="w-full h-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 border-0"
                                allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>

            {/* Motto Section */}
            <div className="container mx-auto px-6">
                <div className="flex justify-center border-t border-gray-800/50">
                    <div className="max-w-2xl w-full text-center">
                        <p className="text-xl md:text-2xl font-serif text-white/90 tracking-widest py-8 opacity-90 border-t border-b border-gray-800/50 uppercase">
                            Berkarakter <span className="text-emerald-500 mx-2 text-lg">•</span> Inovatif <span className="text-emerald-500 mx-2 text-lg">•</span> Berprestasi
                        </p>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Copyright & Social Media */}
            <div className="bg-black/40 backdrop-blur-sm py-6 border-t border-emerald-900/30 relative mt-4">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:pr-24">
                        <p className="text-xs text-gray-500">
                            © 2016 – 2026, SMA Negeri 4 Jember. All rights reserved.
                        </p>
                        <div className="flex items-center space-x-6">
                            <span className="text-gray-400 font-medium text-xs tracking-wider hidden md:inline uppercase">Follow us in Social Media</span>
                            <div className="flex space-x-4">
                                <a href={socialMedia.youtube} target="_blank" rel="noreferrer" className="group relative w-8 h-8 flex items-center justify-center transition-all duration-300">
                                    <div className="absolute inset-0 bg-red-600 rounded-full opacity-20 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></div>
                                    <div className="relative w-8 h-8 rounded-full bg-gray-800 group-hover:bg-red-600 flex items-center justify-center text-gray-400 group-hover:text-white transition-all border border-gray-700">
                                        <Youtube size={14} fill="currentColor" />
                                    </div>
                                </a>
                                <a href={socialMedia.instagram} target="_blank" rel="noreferrer" className="group relative w-8 h-8 flex items-center justify-center transition-all duration-300">
                                    <div className="absolute inset-0 bg-pink-600 rounded-full opacity-20 group-hover:opacity-100 group-hover:blur-md transition-all duration-300"></div>
                                    <div className="relative w-8 h-8 rounded-full bg-gray-800 group-hover:bg-gradient-to-tr group-hover:from-yellow-400 group-hover:via-red-500 group-hover:to-purple-500 flex items-center justify-center text-gray-400 group-hover:text-white transition-all border border-gray-700">
                                        <Instagram size={14} />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
