'use client';

import { useLanguage } from '../context/LanguageContext';

export const Skills = () => {
    const { t } = useLanguage();

    const categoryColors = {
        programming: {
            bg: 'bg-gray-100',
            hover: 'hover:bg-gray-200',
            text: 'text-gray-700'
        },
        frameworks: {
            bg: 'bg-gray-200',
            hover: 'hover:bg-gray-300',
            text: 'text-gray-800'
        },
        webTech: {
            bg: 'bg-gray-300',
            hover: 'hover:bg-gray-400',
            text: 'text-gray-900'
        },
        database: {
            bg: 'bg-gray-400',
            hover: 'hover:bg-gray-500',
            text: 'text-white'
        },
        tools: {
            bg: 'bg-gray-500',
            hover: 'hover:bg-gray-600',
            text: 'text-white'
        }
    };

    return (
        <section id="skills" className="py-15 md:py-25 px-4">
            <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black">{t.skills.title}</h2>
                <p className="mt-4 text-base md:text-lg text-gray-600">{t.skills.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
                {Object.entries(t.skills.categories).map(([key, category]) => (
                    <div key={key} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-gray-200">
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">{category.title}</h3>
                        <ul className="flex flex-wrap gap-2">
                            {category.items.map((skill: string, index: number) => (
                                <li key={index}>
                                    <span className={`px-3 py-1.5 ${categoryColors[key as keyof typeof categoryColors].bg} ${categoryColors[key as keyof typeof categoryColors].hover} ${categoryColors[key as keyof typeof categoryColors].text} rounded-full text-sm font-medium transition-colors cursor-default`}>
                                        {skill}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}; 