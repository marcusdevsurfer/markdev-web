'use client';

import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';

export const GithubContributions = () => {
    const { t } = useLanguage();
    const username = 'marcusdevsurfer';

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-xl font-bold mb-4">{t.githubContributions.title}</h3>
            <p className="text-gray-600 mb-4">{t.githubContributions.description}</p>
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl"></div>
                <Image
                    src={`https://ghchart.rshah.org/${username}`}
                    alt="GitHub Contributions"
                    width={800}
                    height={200}
                    className="w-full h-auto rounded-lg relative z-10"
                    unoptimized
                />
            </div>
        </div>
    );
}; 