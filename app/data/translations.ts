import { Translations } from '../types/translations';

export const translations: Record<string, Translations> = {
    en: {
        nav: [
            { label: 'Summary', href: '#summary' },
            { label: 'Skills', href: '#skills' },
            { label: 'Experience', href: '#experience' },
            { label: 'Education', href: '#education' }
        ],
        summary: {
            title: 'Professional Summary',
            content: 'About 6 years of experience in Software Development and Support, with a strong expertise in Java (versions 8 and 11). Proficient in developing and maintaining back-end and front-end components, designing and consuming REST APIs, and working with microservice architecture. Currently, focusing on incident management, service monitoring, and developing automation to handle routine tasks in a large financial institution. Fluently communicate in English with multicultural teams.'
        },
        skills: {
            title: 'Technical Skills',
            subtitle: 'A comprehensive overview of my technical expertise',
            categories: {
                programming: {
                    title: 'Programming Languages',
                    items: ['Java 8 & 11', 'PHP', 'JavaScript']
                },
                frameworks: {
                    title: 'Frameworks',
                    items: ['Spring', 'Spring Boot', 'Bootstrap']
                },
                webTech: {
                    title: 'Web Technologies & API',
                    items: ['HTML/CSS', 'jQuery', 'React fundamentals', 'REST API', 'Microservice Architecture']
                },
                database: {
                    title: 'Database & Testing',
                    items: ['MySQL', 'Snowflake', 'JUnit', 'Mockito', 'Jacoco']
                },
                tools: {
                    title: 'Tools & Methodologies',
                    items: [
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
            title: 'Work Experience',
            subtitle: 'My professional journey and achievements',
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
                    company: 'IBM (USAA)',
                    period: 'Sept 2023 – July 2024',
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
                    company: 'HCLTECH (Verizon)',
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
                    company: 'HCLTECH (Verizon)',
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
            subtitle: 'My academic background and certifications',
            degree1: {
                title: 'Engineering in Software Management and Development',
                school: 'Technological University of Manzanillo',
                period: '2019 - 2023'
            },
            degree2: {
                title: 'Technical Career in Office Automation',
                school: 'Center for Industrial and Service Technology Studies #84',
                period: '2017 - 2019'
            },
            certification: {
                title: 'AWS Cloud Practitioner Essentials',
                issuer: 'AWS on 10/31/2022'
            }
        },
        footer: {
            title: 'Connect with me',
            social: [
                {
                    label: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/marcusgonzalez1399/'
                },
                {
                    label: 'GitHub',
                    href: 'https://github.com/marcusdevsurfer'
                }
            ]
        },
        githubContributions: {
            title: 'GitHub Activity',
            description: 'Track my coding journey and contributions in real-time'
        }
    },
    es: {
        nav: [
            { label: 'Resumen', href: '#summary' },
            { label: 'Habilidades', href: '#skills' },
            { label: 'Experiencia', href: '#experience' },
            { label: 'Educación', href: '#education' }
        ],
        summary: {
            title: 'Resumen Profesional',
            content: 'Cerca de 6 años de experiencia en Desarrollo y Soporte de Software, con un fuerte dominio en Java (versiones 8 y 11). Experto en el desarrollo y mantenimiento de componentes back-end y front-end, diseño y consumo de APIs REST, y trabajo con arquitectura de microservicios. Actualmente, enfocado en la gestión de incidentes, monitoreo de servicios y desarrollo de automatización para manejar tareas rutinarias en una gran institución financiera. Comunicación fluida en inglés con equipos multiculturales.'
        },
        skills: {
            title: 'Habilidades Técnicas',
            subtitle: 'Una visión general de mi experiencia técnica',
            categories: {
                programming: {
                    title: 'Lenguajes de Programación',
                    items: ['Java 8 & 11', 'PHP', 'JavaScript']
                },
                frameworks: {
                    title: 'Frameworks',
                    items: ['Spring', 'Spring Boot', 'Bootstrap']
                },
                webTech: {
                    title: 'Tecnologías Web & API',
                    items: ['HTML/CSS', 'jQuery', 'React fundamentals', 'REST API', 'Arquitectura de Microservicios']
                },
                database: {
                    title: 'Base de Datos & Testing',
                    items: ['MySQL', 'Snowflake', 'JUnit', 'Mockito', 'Jacoco']
                },
                tools: {
                    title: 'Herramientas & Metodologías',
                    items: [
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
            title: 'Experiencia Laboral',
            subtitle: 'Mi trayectoria profesional y logros',
            roles: {
                apexon: {
                    title: 'Ingeniero II',
                    company: 'APEXON (Goldman Sachs)',
                    period: 'Julio 2024 – Presente',
                    details: [
                        'Responsable del soporte y monitoreo de producción en un entorno ágil.',
                        'Participación activa en un equipo especializado en gestión y resolución de disputas.',
                        'Comunicación constante con equipos globales, adaptándose a horarios IST.',
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
                    company: 'IBM (USAA)',
                    period: 'Sept 2023 – Julio 2024',
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
                    company: 'HCLTECH (Verizon)',
                    period: 'Mayo 2023 – Sept 2023',
                    details: [
                        'Trabajo en un entorno SCRUM para progreso ágil.',
                        'Desarrollo usando Java 8, incluyendo operaciones con Streams y ArrayLists.',
                        'Uso de Maven para builds de proyecto y gestión de dependencias.',
                        'Manejo de I/O de archivos CSV usando la dependencia OpenCSV.',
                        'Generación de dashboards HTML a partir de datos CSV usando Java.',
                        'Creación de interfaces de usuario responsivas con HTML, CSS (media queries) y JavaScript (listeners, jQuery).'
                    ]
                },
                hcl_support: {
                    title: 'Ingeniero de Software (Soporte E-commerce)',
                    company: 'HCLTECH (Verizon)',
                    period: 'Ene 2022 – Mayo 2023',
                    details: [
                        'Trabajo en un equipo ágil y multicultural (India, US).',
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
                    period: 'Ene 2020 – Ene 2022',
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
                    period: 'Ene 2019 – Ene 2020',
                    details: [
                        'Desarrollo de sitio web de la empresa basado en requerimientos del cliente.',
                        'Creación de interfaces web a partir de mockups usando HTML, CSS y JavaScript.',
                        'Uso de PHP para crear un panel de administrador con funcionalidad tipo blog.',
                        'Utilización de MySQL para almacenar datos de usuarios y publicaciones.',
                        'Implementación de Git para control de versiones del proyecto.'
                    ]
                }
            }
        },
        education: {
            title: 'Educación',
            subtitle: 'Mi formación académica y certificaciones',
            degree1: {
                title: 'Ingenieria en Gestion y Desarrollo de Software',
                school: 'Universidad Tecnologica de Manzanillo',
                period: '2019 - 2023'
            },
            degree2: {
                title: 'Carrera Tecnica en Ofimatica',
                school: 'Centro de Estudios Tecnologicos Industriales y de Servicios #84',
                period: '2017 - 2019'
            },
            certification: {
                title: 'AWS Cloud Practitioner Essentials',
                issuer: 'AWS en 10/31/2022'
            }
        },
        footer: {
            title: 'Conéctate conmigo',
            social: [
                {
                    label: 'LinkedIn',
                    href: 'https://www.linkedin.com/in/marcusgonzalez1399/'
                },
                {
                    label: 'GitHub',
                    href: 'https://github.com/marcusdevsurfer'
                }
            ]
        },
        githubContributions: {
            title: 'Actividad en GitHub',
            description: 'Sigue mi progreso y contribuciones en tiempo real'
        }
    }
} as const; 