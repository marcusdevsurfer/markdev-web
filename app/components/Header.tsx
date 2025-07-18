'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Header = () => {
    const { t, language, setLanguage } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleLanguage = () => {
        setLanguage(language === 'en' ? 'es' : 'en');
    };

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center gap-3">
                    <div className="text-2xl font-bold text-black">MG</div>

                    {/* Menú móvil */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className=" ms-auto md:hidden rounded-lg hover:bg-gray-100"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    <div className="block md:hidden ">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-2 gap-1 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                        >
                            <span className="text-lg m-0">{language === 'en' ? '🇲🇽' : '🇺🇸'}</span>
                            <span className="hidden sm:inline">{language === 'en' ? 'Español' : 'English'}</span>
                        </button>
                    </div>


                    {/* Menú desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        {t.nav.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-gray-600 hover:text-black transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 transition-colors"
                        >
                            <span className="text-lg">{language === 'en' ? '🇲🇽' : '🇺🇸'}</span>
                            <span className="hidden sm:inline">{language === 'en' ? 'Español' : 'English'}</span>
                        </button>
                    </div>
                </div>

                {/* Menú móvil expandido */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 space-y-4 pb-4">
                        {t.nav.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="block text-gray-600 hover:text-black transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}

                    </div>
                )}
            </nav>
        </header>
    );
}; 