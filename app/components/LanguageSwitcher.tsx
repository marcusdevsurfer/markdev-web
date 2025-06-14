'use client';

import { useLanguage } from '../context/LanguageContext';

export const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <div className="flex items-center space-x-2">
            <button
                onClick={() => setLanguage('en')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    language === 'en' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
                <span className="text-lg">🇺🇸</span>
                <span className="hidden sm:inline">English</span>
            </button>
            <button
                onClick={() => setLanguage('es')}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
                    language === 'es' 
                        ? 'bg-blue-100 text-blue-700' 
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
                <span className="text-lg">🇲🇽</span>
                <span className="hidden sm:inline">Español</span>
            </button>
        </div>
    );
}; 