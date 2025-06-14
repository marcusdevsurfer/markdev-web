'use client';

import { useLanguage } from '../context/LanguageContext';

export const Experience = () => {
    const { t } = useLanguage();

    const experienceData = Object.entries(t.experience.roles).map(([id, role]) => ({
        id,
        ...role
    }));

    return (
        <section id="experience" className="py-12 md:py-20 px-4">
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black">{t.experience.title}</h2>
                <p className="mt-4 text-base md:text-lg text-gray-600">{t.experience.subtitle}</p>
            </div>
            <div className="max-w-4xl mx-auto">
                <div className="space-y-6">
                    {experienceData.map((role) => (
                        <div key={role.id} className="bg-gray-50 p-6 rounded-xl shadow-md border border-gray-200">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">{role.title}</h3>
                                    <p className="text-gray-600">{role.company}</p>
                                </div>
                                <p className="text-gray-500 mt-2 md:mt-0">{role.period}</p>
                            </div>
                            <ul className="space-y-2">
                                {role.details.map((detail, index) => (
                                    <li key={index} className="flex items-start text-gray-600">
                                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2"></span>
                                        <span>{detail}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}; 