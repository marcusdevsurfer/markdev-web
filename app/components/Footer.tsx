'use client';

import { useLanguage } from '../context/LanguageContext';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

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
        </footer>
    );
}; 