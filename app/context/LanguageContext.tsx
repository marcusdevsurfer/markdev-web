'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';
import { TranslationKey, Translations } from '../types/translations';

interface LanguageContextType {
    language: TranslationKey;
    setLanguage: (lang: TranslationKey) => void;
    t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<TranslationKey>('en');

    useEffect(() => {
        // Intentar obtener el idioma guardado
        const savedLanguage = localStorage.getItem('language') as TranslationKey;
        if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'es')) {
            setLanguage(savedLanguage);
        } else {
            // Si no hay idioma guardado, intentar detectar el idioma del navegador
            const browserLang = navigator.language.split('-')[0];
            if (browserLang === 'es') {
                setLanguage('es');
            } else {
                setLanguage('en');
            }
        }
    }, []);

    const handleSetLanguage = (lang: TranslationKey) => {
        setLanguage(lang);
        localStorage.setItem('language', lang);
        // Actualizar el atributo lang del HTML para accesibilidad
        document.documentElement.lang = lang;
    };

    const value = {
        language,
        setLanguage: handleSetLanguage,
        t: translations[language]
    };

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage debe ser usado dentro de un LanguageProvider');
    }
    return context;
}; 