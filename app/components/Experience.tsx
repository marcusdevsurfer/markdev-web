'use client';

import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Experience = () => {
    const { t } = useLanguage();
    const [activeRole, setActiveRole] = useState('apexon');
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const experienceData = Object.entries(t.experience.roles).map(([id, role]) => ({
        id,
        ...role
    }));

    // Función para centrar el botón activo
    const scrollToActiveButton = (buttonId: string) => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const activeButton = container.querySelector(`[data-role-id="${buttonId}"]`);
            if (activeButton) {
                const containerWidth = container.offsetWidth;
                const buttonLeft = (activeButton as HTMLElement).offsetLeft;
                const buttonWidth = (activeButton as HTMLElement).offsetWidth;
                const scrollLeft = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
                container.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        }
    };

    // Efecto para centrar el botón activo cuando cambia
    useEffect(() => {
        scrollToActiveButton(activeRole);
    }, [activeRole]);

    return (
        <section id="experience" className="py-15 md:py-25 px-4 bg-white">
            <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-black">{t.experience.title}</h2>
                <p className="mt-4 text-base md:text-lg text-gray-600">{t.experience.subtitle}</p>
            </div>

            <div className="max-w-5xl mx-auto">
                {/* Navegación de roles */}
                <div 
                    ref={scrollContainerRef}
                    className="flex md:flex-wrap justify-start md:justify-center gap-2 md:gap-4 mb-8 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0"
                >
                    {experienceData.map((role) => (
                        <button
                            key={role.id}
                            data-role-id={role.id}
                            onClick={() => setActiveRole(role.id)}
                            className={`px-3 md:px-6 py-2 md:py-3 rounded-lg transition-all duration-300 transform hover:scale-105 flex flex-col items-center min-w-[120px] md:min-w-[160px] flex-shrink-0 ${
                                activeRole === role.id
                                    ? 'bg-gray-800 text-white shadow-lg'
                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                        >
                            <span className="font-medium text-sm md:text-base truncate w-full text-center">{role.company}</span>
                            <span className="text-xs md:text-sm mt-1 opacity-80 truncate w-full text-center">{role.period}</span>
                        </button>
                    ))}
                </div>

                {/* Contenido de la experiencia */}
                <div className="relative min-h-[400px] md:min-h-[500px]">
                    {experienceData.map((role) => (
                        <div
                            key={role.id}
                            className={`transition-all duration-500 ease-in-out absolute inset-0 ${
                                activeRole === role.id
                                    ? 'opacity-100'
                                    : 'opacity-0 pointer-events-none'
                            }`}
                        >
                            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden h-full flex flex-col">
                                {/* Encabezado */}
                                <div className="bg-gray-50 border-b border-gray-200 p-4 md:p-6">
                                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-gray-800">{role.title}</h3>
                                            <p className="text-gray-600 text-base md:text-lg mt-1">{role.company}</p>
                                        </div>
                                        <div className="mt-3 md:mt-0">
                                            <span className="inline-block px-3 py-1 md:px-4 md:py-2 bg-gray-800 text-white rounded-lg text-sm font-medium">
                                                {role.period}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Detalles */}
                                <div className="flex-1 overflow-hidden">
                                    <div className="prose prose-gray max-w-none h-full overflow-y-auto p-4 md:p-6">
                                        <ul className="space-y-3 md:space-y-4">
                                            {role.details.map((detail, idx) => (
                                                <li 
                                                    key={idx} 
                                                    className="flex items-start text-gray-600"
                                                >
                                                    <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                                    <span className="text-base leading-relaxed">{detail}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Indicador de progreso */}
                <div className="mt-8 flex justify-center space-x-2">
                    {experienceData.map((role) => (
                        <button
                            key={role.id}
                            onClick={() => setActiveRole(role.id)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                activeRole === role.id ? 'bg-gray-800 w-6' : 'bg-gray-300 hover:bg-gray-400'
                            }`}
                            aria-label={`Ver experiencia en ${role.company}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}; 