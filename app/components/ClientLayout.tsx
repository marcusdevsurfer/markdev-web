'use client';

import { LanguageProvider } from '../context/LanguageContext';
import { useEffect } from 'react';

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
    }, []);

    return (
        <LanguageProvider>
            {children}
        </LanguageProvider>
    );
}; 