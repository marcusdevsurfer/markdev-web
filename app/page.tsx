"use client"

import React, { useState, useEffect, createContext, useContext } from 'react';

// Language Context
const LanguageContext = createContext({
    language: 'en',
    setLanguage: (lang: string) => {},
});

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState('en');

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

const useLanguage = () => useContext(LanguageContext);

// Language Switcher Component
const LanguageSwitcher = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <button
            onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
            className="px-3 py-1 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
        >
            {language === 'en' ? 'ES' : 'EN'}
        </button>
    );
};

// Translations
const translations = {
    en: {
        nav: {
            summary: 'Summary',
            experience: 'Experience',
            skills: 'Skills',
            education: 'Education',
        },
        summary: {
            title: 'Professional Summary',
            content: 'About 7 years of experience in Software Development and Support, with a strong expertise in Java (versions 8 and 11). Proficient in developing and maintaining back-end and front-end components, designing and consuming REST APIs, and working with microservice architecture. Currently, focusing on incident management, service monitoring, and developing automation to handle routine tasks in a large financial institution. Fluently communicate in English with multicultural teams.',
        },
        skills: {
            title: 'Technical Skills',
            subtitle: 'A detailed breakdown of my technical abilities by category.',
            categories: {
                programming: 'Programming',
                frameworks: 'Frameworks',
                webTech: 'Web Technologies & API',
                database: 'Database & Testing',
                tools: 'Tools & Methodologies',
            },
        },
        experience: {
            title: 'Professional Experience',
            subtitle: 'An interactive timeline of my career. Click on a role to see the details.',
            roles: {
                apexon: {
                    title: 'Engineer II',
                    company: 'APEXON (Goldman Sachs)',
                    period: 'July 2024 – Present',
                    details: [
                        'Responsible for production support and monitoring in an agile environment.',
                        'Actively participating in a team specialized in managing and resolving disputes.',
                        'Constant communication with global teams, adapting to IST hours.',
                        'Daily use of key tools for incident management and service monitoring, including:',
                        'PagerDuty for incident administration.',
                        'Splunk for log analysis.',
                        'Confluence for runbook visualization and administration.',
                        'Grafana for messaging services dashboard visualization.',
                        'DataDog for trace visualization.',
                        'Snowflake for running queries.',
                        'Appian (Designer) for task and process visualization.',
                        'Jira and ServiceNow for project and ticket management.',
                        'Microsoft Teams and Outlook for communication.'
                    ]
                },
                ibm: {
                    title: 'Java Developer',
                    company: 'IBM',
                    period: 'Sept 2023 – Present',
                    details: [
                        'Collaboration in a Scrum environment, participating in ceremonies like Sprint Planning, Daily Scrum, and Sprint Review.',
                        'Member of an international team with all communication in English.',
                        'Java development with a focus on advanced Object-Oriented Programming (OOP).',
                        'Unit testing with JUnit 5 and Mockito, applying good use of annotations.',
                        'Project management with Maven.',
                        'Code quality assurance with Jacoco for code coverage.'
                    ]
                },
                hcl_dev: {
                    title: 'Software Engineer (Internal Project)',
                    company: 'HCLTECH',
                    period: 'May 2023 – Sept 2023',
                    details: [
                        'Worked in a SCRUM environment for agile progress.',
                        'Developed using Java 8, including operations with Streams and ArrayLists.',
                        'Used Maven for project builds and dependency management.',
                        'Handled CSV file I/O using OpenCSV dependency.',
                        'Generated HTML dashboards from CSV data using Java.',
                        'Created responsive user interfaces with HTML, CSS (media queries), and JavaScript (listeners, jQuery).'
                    ]
                },
                hcl_support: {
                    title: 'Software Engineer (E-commerce Support)',
                    company: 'HCLTECH',
                    period: 'Jan 2022 – May 2023',
                    details: [
                        'Worked in an agile, multicultural team (India, US).',
                        'Used Java 8 (Collections, Streams, Lambdas) as the main language.',
                        'Project based on a microservices architecture with Spring Boot (Security, Web) deployed in containers.',
                        'Handled user stories to develop new features and perform code reviews.',
                        'Developed solutions for bugs and defects, managing tickets in Jira.',
                        'Used Kibana for debugging services in the production environment.'
                    ]
                },
                cava: {
                    title: 'Systems Engineer',
                    company: 'GRUPO CAVA S.A. DE C.V.',
                    period: 'Jan 2020 – Jan 2022',
                    details: [
                        'Created a web application for registering employee request tickets.',
                        'Developed front-end with HTML, CSS, JavaScript, and Bootstrap.',
                        'Developed back-end with PHP, handling authentication, sessions, and MD5 encryption.',
                        'Used MySQL to store all system data, performing CRUD operations.',
                        'Managed application versioning with Git.'
                    ]
                },
                tracing: {
                    title: 'Systems Area Developer',
                    company: 'TRACING LOGISTICS MZO',
                    period: 'Jan 2019 – Jan 2020',
                    details: [
                        'Developed a company website based on customer requirements.',
                        'Created web interfaces from mockups using HTML, CSS, and JavaScript.',
                        'Used PHP to create an administrator panel with blog-like functionality.',
                        'Utilized MySQL to store user and post data.',
                        'Implemented Git for project version control.'
                    ]
                }
            }
        },
        education: {
            title: 'Education & Certifications',
            degree1: {
                title: 'SOFTWARE DEVELOPMENT AND MANAGEMENT ENGINEERING',
                school: 'Technological University of Manzanillo, Manzanillo, Colima, Mexico',
                period: '2018 – 2022'
            },
            degree2: {
                title: 'OFFICE TECHNICIAN',
                school: 'Center for Industrial Technological Studies and Services #84',
                period: '2014 – 2017'
            },
            certification: {
                title: 'AWS Cloud Practitioner Essentials Certificate',
                issuer: 'Amazon Web Services'
            }
        },
        footer: {
            contact: 'Contact',
            social: 'Social Media',
            rights: 'All Rights Reserved'
        }
    },
    es: {
        nav: {
            summary: 'Resumen',
            experience: 'Experiencia',
            skills: 'Habilidades',
            education: 'Educación',
        },
        summary: {
            title: 'Resumen Profesional',
            content: 'Aproximadamente 7 años de experiencia en Desarrollo de Software y Soporte, con un fuerte dominio en Java (versiones 8 y 11). Experto en desarrollar y mantener componentes back-end y front-end, diseñar y consumir APIs REST, y trabajar con arquitectura de microservicios. Actualmente, enfocado en la gestión de incidentes, monitoreo de servicios y desarrollo de automatización para manejar tareas rutinarias en una gran institución financiera. Comunicación fluida en inglés con equipos multiculturales.',
        },
        skills: {
            title: 'Habilidades Técnicas',
            subtitle: 'Un desglose detallado de mis habilidades técnicas por categoría.',
            categories: {
                programming: 'Programación',
                frameworks: 'Frameworks',
                webTech: 'Tecnologías Web & API',
                database: 'Base de Datos & Testing',
                tools: 'Herramientas & Metodologías',
            },
        },
        experience: {
            title: 'Experiencia Profesional',
            subtitle: 'Una línea de tiempo interactiva de mi carrera. Haz clic en un rol para ver los detalles.',
            roles: {
                apexon: {
                    title: 'Ingeniero II',
                    company: 'APEXON (Goldman Sachs)',
                    period: 'Julio 2024 – Presente',
                    details: [
                        'Responsable del soporte y monitoreo de producción en un entorno ágil.',
                        'Participación activa en un equipo especializado en gestión y resolución de disputas.',
                        'Comunicación constante con equipos globales, adaptándose al horario IST.',
                        'Uso diario de herramientas clave para gestión de incidentes y monitoreo de servicios, incluyendo:',
                        'PagerDuty para administración de incidentes.',
                        'Splunk para análisis de logs.',
                        'Confluence para visualización y administración de runbooks.',
                        'Grafana para visualización de dashboards de servicios de mensajería.',
                        'DataDog para visualización de trazas.',
                        'Snowflake para ejecución de consultas.',
                        'Appian (Designer) para visualización de tareas y procesos.',
                        'Jira y ServiceNow para gestión de proyectos y tickets.',
                        'Microsoft Teams y Outlook para comunicación.'
                    ]
                },
                ibm: {
                    title: 'Desarrollador Java',
                    company: 'IBM',
                    period: 'Septiembre 2023 – Presente',
                    details: [
                        'Colaboración en un entorno Scrum, participando en ceremonias como Sprint Planning, Daily Scrum y Sprint Review.',
                        'Miembro de un equipo internacional con toda la comunicación en inglés.',
                        'Desarrollo en Java con enfoque en Programación Orientada a Objetos (POO) avanzada.',
                        'Pruebas unitarias con JUnit 5 y Mockito, aplicando buen uso de anotaciones.',
                        'Gestión de proyectos con Maven.',
                        'Aseguramiento de calidad de código con Jacoco para cobertura de código.'
                    ]
                },
                hcl_dev: {
                    title: 'Ingeniero de Software (Proyecto Interno)',
                    company: 'HCLTECH',
                    period: 'Mayo 2023 – Septiembre 2023',
                    details: [
                        'Trabajó en un entorno SCRUM para progreso ágil.',
                        'Desarrollo usando Java 8, incluyendo operaciones con Streams y ArrayLists.',
                        'Uso de Maven para builds de proyecto y gestión de dependencias.',
                        'Manejo de I/O de archivos CSV usando la dependencia OpenCSV.',
                        'Generación de dashboards HTML desde datos CSV usando Java.',
                        'Creación de interfaces de usuario responsivas con HTML, CSS (media queries) y JavaScript (listeners, jQuery).'
                    ]
                },
                hcl_support: {
                    title: 'Ingeniero de Software (Soporte E-commerce)',
                    company: 'HCLTECH',
                    period: 'Enero 2022 – Mayo 2023',
                    details: [
                        'Trabajó en un equipo ágil multicultural (India, EE.UU.).',
                        'Uso de Java 8 (Collections, Streams, Lambdas) como lenguaje principal.',
                        'Proyecto basado en arquitectura de microservicios con Spring Boot (Security, Web) desplegado en contenedores.',
                        'Manejo de historias de usuario para desarrollar nuevas características y realizar revisiones de código.',
                        'Desarrollo de soluciones para bugs y defectos, gestionando tickets en Jira.',
                        'Uso de Kibana para depuración de servicios en el entorno de producción.'
                    ]
                },
                cava: {
                    title: 'Ingeniero de Sistemas',
                    company: 'GRUPO CAVA S.A. DE C.V.',
                    period: 'Enero 2020 – Enero 2022',
                    details: [
                        'Creación de una aplicación web para registro de tickets de solicitudes de empleados.',
                        'Desarrollo de front-end con HTML, CSS, JavaScript y Bootstrap.',
                        'Desarrollo de back-end con PHP, manejando autenticación, sesiones y encriptación MD5.',
                        'Uso de MySQL para almacenar todos los datos del sistema, realizando operaciones CRUD.',
                        'Gestión de versionado de la aplicación con Git.'
                    ]
                },
                tracing: {
                    title: 'Desarrollador de Área de Sistemas',
                    company: 'TRACING LOGISTICS MZO',
                    period: 'Enero 2019 – Enero 2020',
                    details: [
                        'Desarrollo de sitio web corporativo basado en requerimientos del cliente.',
                        'Creación de interfaces web desde mockups usando HTML, CSS y JavaScript.',
                        'Uso de PHP para crear un panel de administrador con funcionalidad tipo blog.',
                        'Utilización de MySQL para almacenar datos de usuarios y publicaciones.',
                        'Implementación de Git para control de versiones del proyecto.'
                    ]
                }
            }
        },
        education: {
            title: 'Educación & Certificaciones',
            degree1: {
                title: 'INGENIERÍA EN DESARROLLO Y GESTIÓN DE SOFTWARE',
                school: 'Universidad Tecnológica de Manzanillo, Manzanillo, Colima, México',
                period: '2018 – 2022'
            },
            degree2: {
                title: 'TÉCNICO EN OFIMÁTICA',
                school: 'Centro de Estudios Tecnológicos Industriales y de Servicios #84',
                period: '2014 – 2017'
            },
            certification: {
                title: 'Certificado AWS Cloud Practitioner Essentials',
                issuer: 'Amazon Web Services'
            }
        },
        footer: {
            contact: 'Contacto',
            social: 'Redes Sociales',
            rights: 'Todos los derechos reservados'
        }
    }
};

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { language } = useLanguage();
    const t = translations[language as keyof typeof translations];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const navLinks = [
        { name: t.nav.summary, href: '#summary' },
        { name: t.nav.experience, href: '#experience' },
        { name: t.nav.skills, href: '#skills' },
        { name: t.nav.education, href: '#education' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('main section');
            const navElements = document.querySelectorAll('.nav-link');
            let currentActive = '';

            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.scrollY >= sectionTop - 100 && window.scrollY < sectionTop + sectionHeight - 100) {
                    currentActive = section.id;
                }
            });

            navElements.forEach(link => {
                link.classList.remove('font-semibold', 'text-indigo-600'); // Eliminar azul fuerte anterior
                if (link.href.includes(currentActive)) {
                    link.classList.add('font-semibold', 'text-indigo-600'); // Añadir acento índigo
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Llamada inicial para establecer el enlace activo al cargar

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="bg-white sticky top-0 z-50 border-b border-gray-200 shadow-sm">
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <span className="font-bold text-xl text-gray-900">Marcus Ivan Gonzalez Martinez</span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="nav-link px-3 py-2 rounded-md text-sm font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ))}
                            <LanguageSwitcher />
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {navLinks.map(link => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="nav-link block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-100"
                                    onClick={toggleMobileMenu}
                                >
                                    {link.name}
                                </a>
                            ))}
                            <div className="px-3 py-2">
                                <LanguageSwitcher />
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

const Summary = () => {
    const { language } = useLanguage();
    const t = translations[language as keyof typeof translations];

    return (
        <section id="summary" className="mb-16 scroll-mt-24">
            <div className="text-center bg-white p-8 rounded-xl shadow-md">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">MARCUS IVAN GONZALEZ MARTINEZ</h1>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-x-6 text-sm text-gray-600">
                    <span className="flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                        </svg>
                        Manzanillo, Colima, Mexico
                    </span>
                    <span className="flex items-center justify-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>
                        marcus.sea13@gmail.com
                    </span>
                </div>
                <div className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-900">{t.summary.title}</h2>
                    <p className="mt-4 max-w-3xl mx-auto text-lg leading-8 text-gray-700">
                        {t.summary.content}
                    </p>
                </div>
            </div>
        </section>
    );
};

const Skills = () => {
    const { language } = useLanguage();
    const t = translations[language as keyof typeof translations];

    return (
        <section id="skills" className="mb-16 scroll-mt-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.skills.title}</h2>
                <p className="mt-4 text-lg text-gray-700">{t.skills.subtitle}</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="p-4 bg-indigo-50 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg text-indigo-700 mb-2">{t.skills.categories.programming}</h3>
                    <div className="flex flex-wrap gap-2 text-gray-800">
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Java 8 & 11</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">PHP</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">JavaScript</span>
                    </div>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg text-indigo-700 mb-2">{t.skills.categories.frameworks}</h3>
                    <div className="flex flex-wrap gap-2 text-gray-800">
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Spring</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Spring Boot</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Bootstrap</span>
                    </div>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg text-indigo-700 mb-2">{t.skills.categories.webTech}</h3>
                    <div className="flex flex-wrap gap-2 text-gray-800">
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">HTML/CSS</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">jQuery</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">React fundamentals</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">REST API</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Microservice Architecture</span>
                    </div>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg text-indigo-700 mb-2">{t.skills.categories.database}</h3>
                    <div className="flex flex-wrap gap-2 text-gray-800">
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">MySQL</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Snowflake</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">JUnit</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Mockito</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Jacoco</span>
                    </div>
                </div>
                <div className="p-4 bg-indigo-50 rounded-lg shadow-sm md:col-span-2 lg:col-span-1">
                    <h3 className="font-bold text-lg text-indigo-700 mb-2">{t.skills.categories.tools}</h3>
                    <div className="flex flex-wrap gap-2 text-gray-800">
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">AWS Cloud Practitioner Certificate</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Maven</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Git</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Kibana</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Jira</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Docker fundamentals</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">PagerDuty</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Splunk</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Confluence</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Grafana</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">DataDog</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Appian (Designer)</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">ServiceNow</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Microsoft Teams</span>
                        <span className="px-3 py-1 bg-white rounded-full shadow-xs text-sm">Outlook</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

const Experience = () => {
    const [selectedJob, setSelectedJob] = useState('apexon');
    const { language } = useLanguage();
    const t = translations[language as keyof typeof translations];

    const experienceData = Object.entries(t.experience.roles).map(([id, role]) => ({
        id,
        ...role
    }));

    return (
        <section id="experience" className="mb-16 scroll-mt-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.experience.title}</h2>
                <p className="mt-4 text-lg text-gray-700">{t.experience.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <div className="md:col-span-1 lg:col-span-1">
                    <div className="space-y-4">
                        {experienceData.map(job => (
                            <div
                                key={job.id}
                                className={`timeline-item p-4 rounded-lg border-2 border-gray-200 cursor-pointer hover:border-indigo-500 hover:bg-indigo-50 transition-all ${selectedJob === job.id ? 'active border-indigo-600 bg-indigo-100' : ''}`}
                                onClick={() => setSelectedJob(job.id)}
                            >
                                <p className="font-bold text-gray-900">{job.title}</p>
                                <p className="text-sm text-gray-700">{job.company}</p>
                                <p className="text-xs text-gray-600 mt-1">{job.period}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="md:col-span-2 lg:col-span-3">
                    <div className="bg-white p-6 rounded-xl shadow-md sticky top-24 min-h-[300px]">
                        {selectedJob ? (
                            <>
                                <h3 className="text-xl font-bold text-gray-900">{t.experience.roles[selectedJob as keyof typeof t.experience.roles].title}</h3>
                                <p className="text-md font-semibold text-indigo-600">{t.experience.roles[selectedJob as keyof typeof t.experience.roles].company}</p>
                                <p className="text-sm text-gray-600 mb-4">{t.experience.roles[selectedJob as keyof typeof t.experience.roles].period}</p>
                                <ul className="space-y-2 text-gray-700 list-disc list-inside">
                                    {t.experience.roles[selectedJob as keyof typeof t.experience.roles].details.map((detail: string, index: number) => (
                                        <li key={index}>{detail}</li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <p className="text-gray-500 text-center flex items-center justify-center h-full">Select a role from the timeline to view details here.</p>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

const Education = () => {
    const { language } = useLanguage();
    const t = translations[language as keyof typeof translations];

    return (
        <section id="education" className="mb-16 scroll-mt-24">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t.education.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900">{t.education.degree1.title}</h3>
                    <p className="text-md font-semibold text-indigo-600">{t.education.degree1.school}</p>
                    <p className="text-sm text-gray-600 mb-4">{t.education.degree1.period}</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900">{t.education.degree2.title}</h3>
                    <p className="text-md font-semibold text-indigo-600">{t.education.degree2.school}</p>
                    <p className="text-sm text-gray-600 mb-4">{t.education.degree2.period}</p>
                </div>
                <div className="md:col-span-2 bg-white p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900">{t.education.certification.title}</h3>
                    <p className="text-md font-semibold text-indigo-600">{t.education.certification.issuer}</p>
                </div>
            </div>
        </section>
    );
};

const Footer = () => {
    const { language } = useLanguage();
    const t = translations[language as keyof typeof translations];

    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-indigo-400 mb-4">{t.footer.contact}</h3>
                        <div className="space-y-2">
                            <p className="flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-indigo-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                </svg>
                                marcus.sea13@gmail.com
                            </p>
                            <p className="flex items-center justify-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-indigo-400">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                </svg>
                                Manzanillo, Colima, México
                            </p>
                        </div>
                    </div>
                    <div className="text-center">
                        <h3 className="text-lg font-semibold text-indigo-400 mb-4">{t.footer.social}</h3>
                        <div className="flex justify-center space-x-4">
                            <a href="https://www.linkedin.com/in/marcusgonzalez1399/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>
                            <a href="https://github.com/marcusdevsurfer" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                    <p className="text-sm">&copy; 2025 {t.footer.rights}</p>
                </div>
            </div>
        </footer>
    );
};

export default function Home() {
    return (
        <LanguageProvider>
            <div className="min-h-screen bg-gray-50 text-gray-800">
                <Header />
                <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
                    <Summary />
                    <Skills />
                    <Experience />
                    <Education />
                </main>
                <Footer />
            </div>
        </LanguageProvider>
    );
}





