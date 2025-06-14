"use client"

import React, { useState, useEffect, createContext, useContext } from 'react';

// Language Context
const LanguageContext = createContext<{
  language: string;
  setLanguage: (lang: string) => void;
  toggleLanguage: () => void;
}>({
  language: 'en',
  setLanguage: () => { },
  toggleLanguage: () => { }
});

const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => useContext(LanguageContext);

// Language Switcher Component
const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-blue-900/50 hover:bg-blue-800/50 text-blue-200 hover:text-blue-100 transition-colors border border-blue-700/50"
    >
      {language === 'en' ? (
        <>
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
            <rect width="20" height="20" rx="2" fill="#1E40AF" />
            <path d="M0 0H20V3.33H0V0Z" fill="#E5E7EB" />
            <path d="M0 8.33H20V11.67H0V8.33Z" fill="#E5E7EB" />
            <path d="M0 16.67H20V20H0V16.67Z" fill="#E5E7EB" />
            <path d="M0 0H3.33V20H0V0Z" fill="#E5E7EB" />
            <path d="M8.33 0H11.67V20H8.33V0Z" fill="#E5E7EB" />
            <path d="M16.67 0H20V20H16.67V0Z" fill="#E5E7EB" />
            <path d="M0 0L20 20H16.67L0 3.33V0Z" fill="#1E40AF" />
            <path d="M0 20L20 0V3.33L3.33 20H0Z" fill="#1E40AF" />
          </svg>
          <span>EN</span>
        </>
      ) : (
        <>
          <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
            <rect width="20" height="20" rx="2" fill="#1E40AF" />
            <path d="M0 0H6.67V20H0V0Z" fill="#E5E7EB" />
            <path d="M13.33 0H20V20H13.33V0Z" fill="#E5E7EB" />
            <circle cx="10" cy="10" r="3.33" fill="#1E40AF" />
          </svg>
          <span>ES</span>
        </>
      )}
    </button>
  );
};

// Actualizar la interfaz de traducciones
interface Translations {
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
      readonly [key: string]: {
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
    readonly degree1: {
      readonly title: string;
      readonly school: string;
      readonly period: string;
    };
    readonly degree2: {
      readonly title: string;
      readonly school: string;
      readonly period: string;
    };
    readonly certification: {
      readonly title: string;
      readonly issuer: string;
    };
  };
  footer: {
    readonly contact: string;
    readonly social: string;
  };
}

// Translations
const translations = {
  en: {
    nav: [
      { label: 'Summary', href: '#summary' },
      { label: 'Experience', href: '#experience' },
      { label: 'Skills', href: '#skills' },
      { label: 'Education', href: '#education' },
      { label: 'Contact', href: '#contact' }
    ],
    summary: {
      title: 'Professional Summary',
      content: 'Experienced software developer with a strong background in Java development and cloud technologies. Currently working as a Software Engineer at Apexon, focusing on developing and maintaining enterprise applications. Skilled in full-stack development, microservices architecture, and cloud platforms.'
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'A detailed breakdown of my technical abilities by category.',
      categories: {
        programming: {
          title: 'Programming Languages',
          items: ['Java 8 & 11', 'PHP', 'JavaScript']
        },
        frameworks: {
          title: 'Frameworks & Libraries',
          items: ['Spring', 'Spring Boot', 'Bootstrap']
        },
        webTech: {
          title: 'Web Technologies',
          items: ['HTML/CSS', 'jQuery', 'React fundamentals', 'REST API', 'Microservice Architecture']
        },
        database: {
          title: 'Databases & Testing',
          items: ['MySQL', 'Snowflake', 'JUnit', 'Mockito', 'Jacoco']
        },
        tools: {
          title: 'Tools & Platforms',
          items: [
            'AWS Cloud Practitioner Certificate',
            'Maven',
            'Git',
            'Kibana',
            'Jira',
            'Docker fundamentals',
            'PagerDuty',
            'Splunk',
            'Confluence',
            'Grafana',
            'DataDog',
            'Appian (Designer)',
            'ServiceNow',
            'Microsoft Teams',
            'Outlook'
          ]
        }
      }
    },
    experience: {
      title: 'Experience',
      subtitle: 'My professional journey and key achievements',
      roles: {
        apexon: {
          title: 'Engineer II',
          company: 'APEXON (Goldman Sachs)',
          period: 'July 2024 - Present',
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
      title: 'Education',
      subtitle: 'My academic background and certifications.',
      degree1: {
        title: 'Bachelor of Science in Computer Science',
        school: 'Technological University of Manzanillo',
        period: '2019 - 2023'
      },
      degree2: {
        title: 'Technical Degree in Programming',
        school: 'CETIS #84',
        period: '2016 - 2019'
      },
      certification: {
        title: 'AWS Cloud Practitioner',
        issuer: 'Amazon Web Services'
      }
    },
    footer: {
      contact: 'Contact',
      social: 'Social Media',
      rights: 'All rights reserved'
    }
  },
  es: {
    nav: [
      { label: 'Resumen', href: '#summary' },
      { label: 'Experiencia', href: '#experience' },
      { label: 'Habilidades', href: '#skills' },
      { label: 'Educación', href: '#education' },
      { label: 'Contacto', href: '#contact' }
    ],
    summary: {
      title: 'Resumen Profesional',
      content: 'Desarrollador de software con amplia experiencia en desarrollo Java y tecnologías cloud. Actualmente trabajando como Ingeniero de Software en Apexon, enfocado en el desarrollo y mantenimiento de aplicaciones empresariales. Experto en desarrollo full-stack, arquitectura de microservicios y plataformas cloud.'
    },
    skills: {
      title: 'Habilidades Técnicas',
      subtitle: 'Un desglose detallado de mis habilidades técnicas por categoría.',
      categories: {
        programming: {
          title: 'Lenguajes de Programación',
          items: ['Java 8 & 11', 'PHP', 'JavaScript']
        },
        frameworks: {
          title: 'Frameworks y Librerías',
          items: ['Spring', 'Spring Boot', 'Bootstrap']
        },
        webTech: {
          title: 'Tecnologías Web',
          items: ['HTML/CSS', 'jQuery', 'React fundamentals', 'REST API', 'Arquitectura de Microservicios']
        },
        database: {
          title: 'Bases de Datos y Testing',
          items: ['MySQL', 'Snowflake', 'JUnit', 'Mockito', 'Jacoco']
        },
        tools: {
          title: 'Herramientas y Plataformas',
          items: [
            'Certificado AWS Cloud Practitioner',
            'Maven',
            'Git',
            'Kibana',
            'Jira',
            'Fundamentos de Docker',
            'PagerDuty',
            'Splunk',
            'Confluence',
            'Grafana',
            'DataDog',
            'Appian (Designer)',
            'ServiceNow',
            'Microsoft Teams',
            'Outlook'
          ]
        }
      }
    },
    experience: {
      title: 'Experiencia',
      subtitle: 'Mi trayectoria profesional y logros clave',
      roles: {
        apexon: {
          title: 'Ingeniero II',
          company: 'APEXON (Goldman Sachs)',
          period: 'Julio 2024 - Presente',
          details: [
            'Responsable del soporte y monitoreo de producción en un entorno ágil.',
            'Participación activa en un equipo especializado en la gestión y resolución de disputas.',
            'Comunicación constante con equipos globales, adaptándose a horarios IST.',
            'Uso diario de herramientas clave para la gestión de incidentes y monitoreo de servicios, incluyendo:',
            'PagerDuty para la administración de incidentes.',
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
      title: 'Educación',
      subtitle: 'Mi formación académica y certificaciones.',
      degree1: {
        title: 'Licenciatura en Ciencias de la Computación',
        school: 'Universidad Tecnologica de Manzanillo',
        period: '2019 - 2023'
      },
      degree2: {
        title: 'Técnico en Programación',
        school: 'CETIS #84',
        period: '2016 - 2019'
      },
      certification: {
        title: 'AWS Cloud Practitioner',
        issuer: 'Amazon Web Services'
      }
    },
    footer: {
      contact: 'Contacto',
      social: 'Redes Sociales',
      rights: 'Todos los derechos reservados'
    }
  }
} as const;

type TranslationKey = keyof typeof translations;
type TranslationValue = (typeof translations)[TranslationKey];

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language } = useLanguage();
  const t = translations[language as TranslationKey] as Translations;

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
        link.classList.remove('font-semibold', 'text-emerald-600'); // Eliminar verde fuerte anterior
        if (link.href.includes(currentActive)) {
          link.classList.add('font-semibold', 'text-emerald-600'); // Añadir acento verde
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llamada inicial para establecer el enlace activo al cargar

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-gray-900/80 backdrop-blur-md border-b border-blue-800">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <a href="#" className="text-2xl font-bold text-blue-400">MG</a>
            <div className="hidden md:flex space-x-6">
              {t.nav.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-300 hover:text-blue-400 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LanguageSwitcher />
          </div>
        </div>
      </nav>
    </header>
  );
};

const Summary = () => {
  const { language } = useLanguage();
  const t = translations[language as TranslationKey] as Translations;

  return (
    <section id="summary" className="mb-16 scroll-mt-24">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-4">Marcus Ivan Gonzalez Martinez</h1>
      </div>
      <div className=" text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold tracking-tight text-blue-400 sm:text-4xl">{t.summary.title}</h2>

        <p className="text-lg text-gray-300 leading-relaxed">{t.summary.content}</p>
      </div>
    </section>
  );
};

const Skills = () => {
  const { language } = useLanguage();
  const t = translations[language as TranslationKey] as Translations;

  return (
    <section id="skills" className="mb-16 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.skills.title}</h2>
        <p className="mt-4 text-lg text-gray-300">{t.skills.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(t.skills.categories).map(([key, category]) => (
          <div key={key} className="bg-gray-800/50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-blue-800/50">
            <h3 className="text-xl font-bold text-blue-400 mb-4">{category.title}</h3>
            <ul className="space-y-2">
              {category.items.map((skill: string, index: number) => (
                <li key={index} className="flex items-center text-gray-300">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  const [selectedJob, setSelectedJob] = useState('apexon');
  const { language } = useLanguage();
  const t = translations[language as TranslationKey] as Translations;

  const experienceData = Object.entries(t.experience.roles).map(([id, role]) => ({
    id,
    ...role
  }));

  return (
    <section id="experience" className="mb-16 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.experience.title}</h2>
        <p className="mt-4 text-lg text-gray-300">{t.experience.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        <div className="md:col-span-1 lg:col-span-1">
          <div className="space-y-4">
            {experienceData.map(job => (
              <div
                key={job.id}
                className={`timeline-item p-4 rounded-lg border-2 border-blue-800/50 cursor-pointer hover:border-blue-500 hover:bg-blue-900/30 transition-all ${selectedJob === job.id ? 'active border-blue-500 bg-blue-900/50' : 'bg-gray-800/50'}`}
                onClick={() => setSelectedJob(job.id)}
              >
                <p className="font-bold text-white">{job.title}</p>
                <p className="text-sm text-gray-300">{job.company}</p>
                <p className="text-xs text-gray-400 mt-1">{job.period}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-3">
          <div className="bg-gray-800/50 p-6 rounded-xl shadow-md sticky top-24 min-h-[300px] border border-blue-800/50">
            {selectedJob ? (
              <>
                <h3 className="text-xl font-bold text-white">{t.experience.roles[selectedJob as keyof typeof t.experience.roles].title}</h3>
                <p className="text-md font-semibold text-blue-400">{t.experience.roles[selectedJob as keyof typeof t.experience.roles].company}</p>
                <p className="text-sm text-gray-400 mb-4">{t.experience.roles[selectedJob as keyof typeof t.experience.roles].period}</p>
                <ul className="space-y-2 text-gray-300 list-disc list-inside">
                  {t.experience.roles[selectedJob as keyof typeof t.experience.roles].details.map((detail: string, index: number) => (
                    <li key={index}>{detail}</li>
                  ))}
                </ul>
              </>
            ) : (
              <p className="text-gray-400 text-center flex items-center justify-center h-full">Select a role from the timeline to view details here.</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Education = () => {
  const { language } = useLanguage();
  const t = translations[language as TranslationKey] as Translations;

  return (
    <section id="education" className="mb-16 scroll-mt-24">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{t.education.title}</h2>
        <p className="mt-4 text-lg text-gray-300">{t.education.subtitle}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-800/50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-blue-800/50">
          <h3 className="text-xl font-bold text-white">{t.education.degree1.title}</h3>
          <p className="text-md font-semibold text-blue-400">{t.education.degree1.school}</p>
          <p className="text-sm text-gray-400 mb-4">{t.education.degree1.period}</p>
        </div>
        <div className="bg-gray-800/50 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-blue-800/50">
          <h3 className="text-xl font-bold text-white">{t.education.degree2.title}</h3>
          <p className="text-md font-semibold text-blue-400">{t.education.degree2.school}</p>
          <p className="text-sm text-gray-400 mb-4">{t.education.degree2.period}</p>
        </div>
        <div className="md:col-span-2 bg-gray-800/50 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-shadow border border-blue-800/50">
          <h3 className="text-xl font-bold text-white">{t.education.certification.title}</h3>
          <p className="text-md font-semibold text-blue-400">{t.education.certification.issuer}</p>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language as TranslationKey] as Translations;

  return (
    <footer className="bg-gray-900/80 border-t border-blue-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">{t.footer.contact}</h3>
            <div className="space-y-2">
              <p className="flex items-center justify-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                <span>Manzanillo, Colima, Mexico</span>
              </p>
              <p className="flex items-center justify-center text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-blue-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>marcus.sea13@gmail.com</span>
              </p>
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">{t.footer.social}</h3>
            <div className="flex justify-center space-x-4">
              <a href="https://www.linkedin.com/in/marcus-gonzalez-/" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://github.com/marcusgonzalez" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400 transition-colors">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-blue-800/50 text-center text-gray-400">
          <p>© 2024 Marcus Ivan Gonzalez Martinez. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
        <div className="relative">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
          <div className="relative">
            <Header />
            <main className="container mx-auto px-4 py-8">
              <Summary />
              <Skills />
              <Experience />
              <Education />
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </LanguageProvider>
  );
}





