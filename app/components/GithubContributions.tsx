'use client';

import { useLanguage } from '../context/LanguageContext';

export const GithubContributions = () => {
    const { t } = useLanguage();
    const username = 'marcusdevsurfer';

    return (
        <div className="bg-white rounded-xl shadow-lg p-6 transform hover:scale-[1.02] transition-transform duration-300">
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg blur-xl"></div>
                <img
                    src={`https://ghchart.rshah.org/${username}`}
                    alt="GitHub Contributions"
                    className="w-full h-auto rounded-lg relative z-10"
                />
            </div>
        </div>
    );
}; 