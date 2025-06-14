'use client';

import { useLanguage } from '../context/LanguageContext';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { GithubContributions } from './GithubContributions';

export const Footer = () => {
    const { t } = useLanguage();

    const getIcon = (label: string) => {
        switch (label.toLowerCase()) {
            case 'github':
                return <FaGithub className="w-6 h-6" />;
            case 'linkedin':
                return <FaLinkedin className="w-6 h-6" />;
            case 'twitter':
                return <FaTwitter className="w-6 h-6" />;
            case 'email':
                return <FaEnvelope className="w-6 h-6" />;
            default:
                return null;
        }
    };

    return (
        <footer className="bg-gray-50">
            <div className="max-w-4xl mx-auto px-4">
                {/* Sección de contribuciones de GitHub */}
                <div className="py-12 border-b border-gray-200">
                    <div className="text-center mb-8">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">
                            {t.githubContributions?.title || 'Mi Actividad en GitHub'}
                        </h3>
                        <p className="text-gray-600">
                            {t.githubContributions?.description || 'Sigue mi progreso y contribuciones en tiempo real'}
                        </p>
                    </div>
                    
                    <GithubContributions />
                </div>

                {/* Sección de redes sociales */}
                <div className="py-8">
                    <div className="text-center">
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">{t.footer.title}</h3>
                        <div className="flex justify-center space-x-6">
                            {t.footer.social.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-2"
                                    aria-label={item.label}
                                >
                                    {getIcon(item.label)}
                                    <span className="hidden sm:inline">{item.label}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}; 