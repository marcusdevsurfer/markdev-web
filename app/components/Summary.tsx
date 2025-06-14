'use client';

import { useLanguage } from '../context/LanguageContext';

export const Summary = () => {
    const { t } = useLanguage();

    return (
        <section id="summary" className="py-12 md:py-20 px-4">
            <div className="text-center mb-8 md:mb-12">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-black mb-4">Marcus Ivan Gonzalez Martinez</h1>
            </div>
            <div className="text-center max-w-3xl mx-auto px-4">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-gray-800 mb-4">{t.summary.title}</h2>
                <p className="text-base md:text-lg text-gray-600 leading-relaxed">{t.summary.content}</p>
            </div>
        </section>
    );
}; 