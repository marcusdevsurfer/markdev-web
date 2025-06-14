'use client';

import { useLanguage } from '../context/LanguageContext';

export const Education = () => {
    const { t } = useLanguage();

    return (
        <section id="education" className="py-12 md:py-20 px-4">
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black">{t.education.title}</h2>
                <p className="mt-4 text-base md:text-lg text-gray-600">{t.education.subtitle}</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="space-y-4 md:space-y-8">
                    {t.education.degree1 && (
                        <div className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-md border border-gray-200">
                            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{t.education.degree1.title}</h3>
                            <p className="text-gray-600 mb-2">{t.education.degree1.school}</p>
                            <p className="text-gray-500 text-sm md:text-base">{t.education.degree1.period}</p>
                        </div>
                    )}
                    {t.education.degree2 && (
                        <div className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-md border border-gray-200">
                            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{t.education.degree2.title}</h3>
                            <p className="text-gray-600 mb-2">{t.education.degree2.school}</p>
                            <p className="text-gray-500 text-sm md:text-base">{t.education.degree2.period}</p>
                        </div>
                    )}
                    {t.education.certification && (
                        <div className="bg-gray-50 p-4 md:p-6 rounded-xl shadow-md border border-gray-200">
                            <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2">{t.education.certification.title}</h3>
                            <p className="text-gray-600 mb-2">{t.education.certification.issuer}</p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}; 