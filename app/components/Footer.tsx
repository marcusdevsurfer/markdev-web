'use client';

import { useLanguage } from '../context/LanguageContext';

export const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-50 py-8 md:py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center">
                    <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">{t.footer.title}</h3>
                    <div className="flex justify-center space-x-6">
                        {t.footer.social.map((item, index) => (
                            <a
                                key={index}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}; 