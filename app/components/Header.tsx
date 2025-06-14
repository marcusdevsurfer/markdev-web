'use client';

import { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { LanguageSwitcher } from './LanguageSwitcher';

export const Header = () => {
    const { t } = useLanguage();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex justify-between items-center">
                    <div className="text-2xl font-bold text-black">MG</div>
                    
                    {/* Menú móvil */}
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            {isMenuOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>

                    {/* Menú desktop */}
                    <div className="hidden md:flex items-center space-x-8">
                        {t.nav.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="text-gray-600 hover:text-black transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                        <LanguageSwitcher />
                    </div>
                </div>

                {/* Menú móvil expandido */}
                {isMenuOpen && (
                    <div className="md:hidden mt-4 space-y-4 pb-4">
                        {t.nav.map((item) => (
                            <a
                                key={item.href}
                                href={item.href}
                                className="block text-gray-600 hover:text-black transition-colors"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.label}
                            </a>
                        ))}
                        <div className="pt-2">
                            <LanguageSwitcher />
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}; 