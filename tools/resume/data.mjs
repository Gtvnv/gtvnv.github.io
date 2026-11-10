/**
 * Conteúdo dos currículos (pt, en, es). Fonte única: edite aqui e rode
 * `node resume/build.mjs`. Estrutura igual nos 3 idiomas.
 */
const CONTACT =
  "Pedro Leopoldo, MG · (31) 98566-7466 · dgprimeweb@gmail.com · linkedin.com/in/gtvnv · github.com/Gtvnv";

export const resumes = {
  pt: {
    lang: "pt-BR",
    file: "curriculo-gustavo-vianna-pt.pdf",
    title: "Gustavo Ventura Nery Vianna — Currículo",
    role: "Engenheiro de Software — Backend, Arquitetura & Segurança",
    contact: CONTACT,
    summary: {
      h: "Resumo",
      text: "Engenheiro de software com atuação fullstack em um ERP industrial em produção e experiência anterior em suporte técnico e infraestrutura. Fora do trabalho formal, arquiteto e construo produtos próprios (identidade, dados, gestão acadêmica) com foco em Clean Architecture e segurança desde o design. Também sou instrutor de karatê e presido a Associação Ventura e Vianna, parceira da escola onde a AKPL nasceu.",
    },
    skills: {
      h: "Competências Técnicas",
      items: [
        ["Linguagens & Frameworks:", "Java (Spring Boot, Spring Security), C# / .NET, JavaScript / TypeScript (Next.js, Angular, Ionic), Python, SQL"],
        ["Arquitetura & Design:", "Clean Architecture, Arquitetura Hexagonal, DDD, SOLID, Microsserviços"],
        ["Segurança & Identidade:", "Zero Trust, OAuth2 / JWT, RBAC / ABAC, OWASP"],
        ["Infraestrutura & Dados:", "Docker, PostgreSQL, MySQL, Redis, CI/CD (GitHub Actions), Git"],
      ],
    },
    experience: {
      h: "Experiência Profissional",
      jobs: [
        {
          title: "Analista Desenvolvedor de Software", date: "dez. 2025 — atual", company: "Agência do Japa",
          bullets: [
            "Atuo fullstack em um ERP industrial em produção (Zyntra ERP), do frontend a regras de negócio complexas e integrações.",
            "Reforcei o RBAC com foco em security by design, reduzindo a superfície de acesso.",
            "Criei CRM (Concord), agentes de IA (Cleo, Bob e Evelyn) e jogos digitais, como o UltraFoot.",
            "Diagnostiquei e corrigi anomalias em produção, sustentando a disponibilidade.",
          ],
        },
        {
          title: "Desenvolvedor de Sustentação", date: "jul. 2026 — atual", company: "Rumo Soluções",
          bullets: [
            "Desenvolvi e mantive aplicações em C# e .NET, estruturando APIs e regras de negócio.",
            "Desenvolvi aplicações financeiras e robôs de captura web, usados em sistemas de pricing para locadoras e concessionárias.",
            "Construí interfaces web e mobile com Angular e Ionic, com foco em usabilidade.",
          ],
        },
        {
          title: "Presidente", date: "2025 — atual", company: "Associação Ventura e Vianna",
          bullets: [
            "Presido a associação, com atuação em ajuda social, e sou instrutor de karatê.",
            "Duas leis aprovadas na Prefeitura de Pedro Leopoldo: karatê como patrimônio cultural e mais professores de educação física nos anos iniciais, tirando a tarefa das professoras.",
          ],
        },
        {
          title: "Técnico de Suporte em TI", date: "fev. 2025 — jul. 2026", company: "R2 Internet",
          bullets: [
            "Diagnostiquei e resolvi falhas lógicas em sistemas e redes, com análise de causa raiz em incidentes de produção, isolando bugs de arquitetura de falhas de ambiente.",
            "Construí um protótipo em Python para automatizar tarefas do setor com segurança.",
          ],
        },
        {
          title: "Almoxarife", date: "abr. 2024 — fev. 2025", company: "Grupo CMD", compact: true,
          bullets: [],
        },
        {
          title: "Técnico de Manutenção", date: "jun. 2023 — mar. 2024", company: "Turrek Informática", compact: true,
          bullets: [],
        },
      ],
    },
    projects: {
      h: "Projetos Pessoais",
      items: [
        {
          title: "AKPL — Plataforma de Gestão Acadêmica", tags: "Next.js 15 · TypeScript · Prisma · PostgreSQL",
          desc: "Sistema com 6 perfis de acesso cobrindo matrícula, diário do professor, financeiro com cobrança em lote e site institucional. Uma implantação está no ar para uma escola real.",
          url: "https://karatepl.zyntraerp.com.br",
        },
        {
          title: "Vertex — Internal Developer Platform", tags: "Go · Arquitetura Hexagonal · IaC (Pulumi)",
          desc: "Gera um microsserviço Go (Arquitetura Hexagonal) pronto pra rodar a partir de uma especificação YAML. A IA local propõe código; um validador determinístico decide.",
        },
        {
          title: "AegisProtocol — Middleware de Identidade Zero Trust", tags: "Java 21 · JWT · Redis",
          desc: "Identity Provider próprio: tokens assinados com RSA-2048, revogação distribuída e políticas de acesso granulares (RBAC/ABAC).",
          url: "https://github.com/Gtvnv/AegisProtocol-Core",
        },
      ],
    },
    education: {
      h: "Formação Acadêmica",
      rows: [
        ["MBA em Gestão Financeira e Controladoria", "Descomplica Faculdade Digital", "mai. 2026 — out. 2026"],
        ["MBA em Segurança da Informação", "Descomplica Faculdade Digital", "mar. 2026 — jun. 2026"],
        ["Bacharelado em Engenharia de Software", "Descomplica Faculdade Digital", "set. 2025 — mai. 2028"],
        ["Especialização em Computer Software Engineering", "Faculdade Famart", "set. 2025 — abr. 2026"],
        ["Tecnólogo em Análise e Desenvolvimento de Sistemas", "UniCesumar", "fev. 2023 — ago. 2025"],
      ],
    },
    languages: {
      h: "Idiomas",
      items: [["Português", "Nativo"], ["Inglês", "Intermediário (B1)"], ["Espanhol", "Básico-Intermediário (A2-B1)"]],
    },
  },

  en: {
    lang: "en",
    file: "curriculo-gustavo-vianna-en.pdf",
    title: "Gustavo Ventura Nery Vianna — Resume",
    role: "Software Engineer — Backend, Architecture & Security",
    contact: CONTACT,
    summary: {
      h: "Summary",
      text: "Software engineer with fullstack experience on an industrial ERP in production, and prior background in technical support and infrastructure. Outside my day job, I architect and build my own products (identity, data, academic management) focused on Clean Architecture and security by design. I'm also a karate instructor and president of Associação Ventura e Vianna, a partner of the school where AKPL was born.",
    },
    skills: {
      h: "Technical Skills",
      items: [
        ["Languages & Frameworks:", "Java (Spring Boot, Spring Security), C# / .NET, JavaScript / TypeScript (Next.js, Angular, Ionic), Python, SQL"],
        ["Architecture & Design:", "Clean Architecture, Hexagonal Architecture, DDD, SOLID, Microservices"],
        ["Security & Identity:", "Zero Trust, OAuth2 / JWT, RBAC / ABAC, OWASP"],
        ["Infrastructure & Data:", "Docker, PostgreSQL, MySQL, Redis, CI/CD (GitHub Actions), Git"],
      ],
    },
    experience: {
      h: "Professional Experience",
      jobs: [
        {
          title: "Software Development Analyst", date: "Dec 2025 — present", company: "Agência do Japa",
          bullets: [
            "Work fullstack on an industrial ERP in production (Zyntra ERP), from the frontend to complex business rules and integrations.",
            "Hardened the RBAC with a security-by-design focus, reducing the access surface.",
            "Built CRM (Concord), AI agents (Cleo, Bob and Evelyn) and digital games, such as UltraFoot.",
            "Diagnosed and fixed anomalies in production, sustaining availability.",
          ],
        },
        {
          title: "Sustaining Developer", date: "Jul 2026 — present", company: "Rumo Soluções",
          bullets: [
            "Developed and maintained C# and .NET applications, structuring APIs and business rules.",
            "Developed financial applications and web-scraping bots used in pricing systems for rental companies and dealerships.",
            "Built web and mobile interfaces with Angular and Ionic, focused on usability.",
          ],
        },
        {
          title: "President", date: "2025 — present", company: "Associação Ventura e Vianna",
          bullets: [
            "I preside over the association, working in social aid, and I am a karate instructor.",
            "Two laws approved by the Pedro Leopoldo city government: karate as cultural heritage, and more physical education teachers in the early grades, relieving classroom teachers.",
          ],
        },
        {
          title: "IT Support Technician", date: "Feb 2025 — Jul 2026", company: "R2 Internet",
          bullets: [
            "Diagnosed and resolved logic failures in systems and networks, with root-cause analysis of production incidents, isolating architecture bugs from environment failures.",
            "Built a Python prototype to safely automate departmental tasks.",
          ],
        },
        {
          title: "Warehouse Clerk", date: "Apr 2024 — Feb 2025", company: "Grupo CMD", compact: true,
          bullets: [],
        },
        {
          title: "Maintenance Technician", date: "Jun 2023 — Mar 2024", company: "Turrek Informática", compact: true,
          bullets: [],
        },
      ],
    },
    projects: {
      h: "Personal Projects",
      items: [
        {
          title: "AKPL — Academic Management Platform", tags: "Next.js 15 · TypeScript · Prisma · PostgreSQL",
          desc: "A system with 6 access profiles covering enrollment, teacher gradebook, batch tuition billing, and a public site. A live deployment is running for a real school.",
          url: "https://karatepl.zyntraerp.com.br",
        },
        {
          title: "Vertex — Internal Developer Platform", tags: "Go · Hexagonal Architecture · IaC (Pulumi)",
          desc: "Generates a ready-to-run Go microservice (Hexagonal Architecture) from a YAML spec. A local AI proposes code; a deterministic validator decides.",
        },
        {
          title: "AegisProtocol — Zero Trust Identity Middleware", tags: "Java 21 · JWT · Redis",
          desc: "A homegrown Identity Provider: tokens signed with RSA-2048, distributed revocation, and granular access policies (RBAC/ABAC).",
          url: "https://github.com/Gtvnv/AegisProtocol-Core",
        },
      ],
    },
    education: {
      h: "Education",
      rows: [
        ["MBA in Financial Management and Controllership", "Descomplica Faculdade Digital", "May 2026 — Oct 2026"],
        ["MBA in Information Security", "Descomplica Faculdade Digital", "Mar 2026 — Jun 2026"],
        ["B.Eng. in Software Engineering", "Descomplica Faculdade Digital", "Sep 2025 — May 2028"],
        ["Postgraduate Specialization in Computer Software Engineering", "Faculdade Famart", "Sep 2025 — Apr 2026"],
        ["Associate Degree in Systems Analysis and Development", "UniCesumar", "Feb 2023 — Aug 2025"],
      ],
    },
    languages: {
      h: "Languages",
      items: [["Portuguese", "Native"], ["English", "Intermediate (B1)"], ["Spanish", "Pre-Intermediate (A2-B1)"]],
    },
  },

  es: {
    lang: "es",
    file: "curriculo-gustavo-vianna-es.pdf",
    title: "Gustavo Ventura Nery Vianna — Currículum",
    role: "Ingeniero de Software — Backend, Arquitectura & Seguridad",
    contact: CONTACT,
    summary: {
      h: "Resumen",
      text: "Ingeniero de software con experiencia fullstack en un ERP industrial en producción, y experiencia previa en soporte técnico e infraestructura. Fuera del trabajo formal, diseño y construyo productos propios (identidad, datos, gestión académica) con foco en Clean Architecture y seguridad desde el diseño. También soy instructor de karáte y presido la Associação Ventura e Vianna, socia de la escuela donde nació AKPL.",
    },
    skills: {
      h: "Competencias Técnicas",
      items: [
        ["Lenguajes y Frameworks:", "Java (Spring Boot, Spring Security), C# / .NET, JavaScript / TypeScript (Next.js, Angular, Ionic), Python, SQL"],
        ["Arquitectura y Diseño:", "Clean Architecture, Arquitectura Hexagonal, DDD, SOLID, Microservicios"],
        ["Seguridad e Identidad:", "Zero Trust, OAuth2 / JWT, RBAC / ABAC, OWASP"],
        ["Infraestructura y Datos:", "Docker, PostgreSQL, MySQL, Redis, CI/CD (GitHub Actions), Git"],
      ],
    },
    experience: {
      h: "Experiencia Profesional",
      jobs: [
        {
          title: "Analista Desarrollador de Software", date: "dic. 2025 — actualidad", company: "Agência do Japa",
          bullets: [
            "Trabajo fullstack en un ERP industrial en producción (Zyntra ERP), del frontend a reglas de negocio complejas e integraciones.",
            "Reforcé el RBAC con foco en security by design, reduciendo la superficie de acceso.",
            "Creé CRM (Concord), agentes de IA (Cleo, Bob y Evelyn) y juegos digitales, como UltraFoot.",
            "Diagnostiqué y corregí anomalías en producción, sosteniendo la disponibilidad.",
          ],
        },
        {
          title: "Desarrollador de Sostenimiento", date: "jul. 2026 — actualidad", company: "Rumo Soluções",
          bullets: [
            "Desarrollé y mantuve aplicaciones en C# y .NET, estructurando APIs y reglas de negocio.",
            "Desarrollé aplicaciones financieras y robots de captura web, usados en sistemas de pricing para locadoras y concesionarias.",
            "Construí interfaces web y móviles con Angular e Ionic, con foco en usabilidad.",
          ],
        },
        {
          title: "Presidente", date: "2025 — actualidad", company: "Associação Ventura e Vianna",
          bullets: [
            "Presido la asociación, con actuación en ayuda social, y soy instructor de kárate.",
            "Dos leyes aprobadas en la Alcaldía de Pedro Leopoldo: kárate como patrimonio cultural y más profesores de educación física en los primeros años, quitando esa tarea a las maestras.",
          ],
        },
        {
          title: "Técnico de Soporte en TI", date: "feb. 2025 — jul. 2026", company: "R2 Internet",
          bullets: [
            "Diagnostiqué y resolví fallas lógicas en sistemas y redes, con análisis de causa raíz en incidentes de producción, aislando errores de arquitectura de fallas de entorno.",
            "Construí un prototipo en Python para automatizar tareas del sector de forma segura.",
          ],
        },
        {
          title: "Auxiliar de Almacén", date: "abr. 2024 — feb. 2025", company: "Grupo CMD", compact: true,
          bullets: [],
        },
        {
          title: "Técnico de Mantenimiento", date: "jun. 2023 — mar. 2024", company: "Turrek Informática", compact: true,
          bullets: [],
        },
      ],
    },
    projects: {
      h: "Proyectos Personales",
      items: [
        {
          title: "AKPL — Plataforma de Gestión Académica", tags: "Next.js 15 · TypeScript · Prisma · PostgreSQL",
          desc: "Sistema con 6 perfiles de acceso que cubre matrícula, diario del profesor, cobranza en lote y sitio institucional. Hay una implementación real en producción para una escuela.",
          url: "https://karatepl.zyntraerp.com.br",
        },
        {
          title: "Vertex — Internal Developer Platform", tags: "Go · Arquitectura Hexagonal · IaC (Pulumi)",
          desc: "Genera un microservicio Go (Arquitectura Hexagonal) listo para ejecutar a partir de una especificación YAML. La IA local propone código; un validador determinístico decide.",
        },
        {
          title: "AegisProtocol — Middleware de Identidad Zero Trust", tags: "Java 21 · JWT · Redis",
          desc: "Identity Provider propio: tokens firmados con RSA-2048, revocación distribuida y políticas de acceso granulares (RBAC/ABAC).",
          url: "https://github.com/Gtvnv/AegisProtocol-Core",
        },
      ],
    },
    education: {
      h: "Formación Académica",
      rows: [
        ["MBA en Gestión Financiera y Controladuría", "Descomplica Faculdade Digital", "may. 2026 — oct. 2026"],
        ["MBA en Seguridad de la Información", "Descomplica Faculdade Digital", "mar. 2026 — jun. 2026"],
        ["Ingeniería en Software (Bachillerato)", "Descomplica Faculdade Digital", "set. 2025 — may. 2028"],
        ["Especialización en Computer Software Engineering", "Faculdade Famart", "set. 2025 — abr. 2026"],
        ["Tecnólogo en Análisis y Desarrollo de Sistemas", "UniCesumar", "feb. 2023 — ago. 2025"],
      ],
    },
    languages: {
      h: "Idiomas",
      items: [["Portugués", "Nativo"], ["Inglés", "Intermedio (B1)"], ["Español", "Básico-Intermedio (A2-B1)"]],
    },
  },
};
