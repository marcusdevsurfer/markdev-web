export type TranslationKey = 'en' | 'es';

export interface Translations {
    nav: ReadonlyArray<{
        readonly label: string;
        readonly href: string;
    }>;
    summary: {
        readonly title: string;
        readonly content: string;
    };
    skills: {
        readonly title: string;
        readonly subtitle: string;
        readonly categories: {
            readonly programming: {
                readonly title: string;
                readonly items: readonly string[];
            };
            readonly frameworks: {
                readonly title: string;
                readonly items: readonly string[];
            };
            readonly webTech: {
                readonly title: string;
                readonly items: readonly string[];
            };
            readonly database: {
                readonly title: string;
                readonly items: readonly string[];
            };
            readonly tools: {
                readonly title: string;
                readonly items: readonly string[];
            };
        };
    };
    experience: {
        readonly title: string;
        readonly subtitle: string;
        readonly roles: {
            readonly [key: string]: {
                readonly title: string;
                readonly company: string;
                readonly period: string;
                readonly details: readonly string[];
            };
        };
    };
    education: {
        readonly title: string;
        readonly subtitle: string;
        readonly degree1?: {
            readonly title: string;
            readonly school: string;
            readonly period: string;
        };
        readonly degree2?: {
            readonly title: string;
            readonly school: string;
            readonly period: string;
        };
        readonly certification?: {
            readonly title: string;
            readonly issuer: string;
        };
    };
    footer: {
        readonly title: string;
        readonly social: ReadonlyArray<{
            readonly label: string;
            readonly href: string;
        }>;
    };
} 