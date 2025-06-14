'use client';

import { LanguageProvider } from '../context/LanguageContext';

export const ClientLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <LanguageProvider>
            {children}
        </LanguageProvider>
    );
}; 