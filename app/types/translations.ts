export type TranslationKey = 'en' | 'es';

export interface Translations {
    nav: Array<{ label: string; href: string }>;
    summary: {
        title: string;
        content: string;
    };
    skills: {
        title: string;
        subtitle: string;
        categories: {
            programming: { title: string; items: string[] };
            frameworks: { title: string; items: string[] };
            webTech: { title: string; items: string[] };
            database: { title: string; items: string[] };
            tools: { title: string; items: string[] };
        };
    };
    experience: {
        title: string;
        subtitle: string;
        roles: {
            [key: string]: {
                title: string;
                company: string;
                period: string;
                details: string[];
            };
        };
    };
    education: {
        title: string;
        subtitle: string;
        degree1: {
            title: string;
            school: string;
            period: string;
        };
        degree2: {
            title: string;
            school: string;
            period: string;
        };
        certification: {
            title: string;
            issuer: string;
        };
    };
    footer: {
        title: string;
        social: Array<{ label: string; href: string }>;
    };
    githubContributions: {
        title: string;
        description: string;
    };
} 