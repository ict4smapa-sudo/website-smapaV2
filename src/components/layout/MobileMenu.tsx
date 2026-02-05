import React, { useState, useEffect } from 'react';
import { GraduationCap } from 'lucide-react';
import { NAVIGATION_MENU } from '@/lib/constants';

export default function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState<number | null>(null);

    useEffect(() => {
        const handleToggle = () => setIsOpen(prev => !prev);
        document.addEventListener('toggleMobileMenu', handleToggle);
        return () => document.removeEventListener('toggleMobileMenu', handleToggle);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-white border-t border-emerald-100 shadow-2xl overflow-y-auto z-40 animate-in slide-in-from-top-5 lg:hidden">
            <div className="p-6 flex flex-col gap-2 pb-20">
                {NAVIGATION_MENU.map((item, idx) => (
                    <div key={idx} className="border-b border-gray-100 last:border-none">
                        {item.items ? (
                            <div>
                                <button
                                    onClick={() => setActiveSubmenu(activeSubmenu === idx ? null : idx)}
                                    className="w-full flex justify-between items-center py-3 px-2 rounded-lg hover:bg-emerald-50 font-bold text-emerald-800 text-left"
                                >
                                    {item.label}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="18"
                                        height="18"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className={`transform transition-transform duration-300 ${activeSubmenu === idx ? 'rotate-180' : ''}`}
                                    >
                                        <path d="m6 9 6 6 6-6" />
                                    </svg>
                                </button>

                                <div
                                    className={`overflow-hidden transition-all duration-300 bg-gray-50 rounded-lg ${activeSubmenu === idx ? 'max-h-96 opacity-100 mt-1 mb-2' : 'max-h-0 opacity-0'
                                        }`}
                                >
                                    {item.items.map((subItem, subIdx) => (
                                        <a
                                            key={subIdx}
                                            href={subItem.link}
                                            className="block px-6 py-3 text-sm text-gray-600 hover:text-emerald-600 border-l-2 border-transparent hover:border-emerald-500"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {subItem.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <a
                                href={item.link}
                                className="w-full text-left py-3 px-2 rounded-lg font-bold text-emerald-800 hover:bg-emerald-50 block"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.label}
                            </a>
                        )}
                    </div>
                ))}

                <a
                    href="/ppdb"
                    className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white py-4 rounded-xl font-bold shadow-lg mt-4 flex justify-center items-center gap-2"
                    onClick={() => setIsOpen(false)}
                >
                    <GraduationCap size={20} /> Daftar PPDB Sekarang
                </a>
            </div>
        </div>
    );
}
