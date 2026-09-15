/**
 * PROJETOS
 * Pra adicionar um projeto novo: copie o objeto inteiro nos TRÊS blocos de
 * idioma (mesma posição), e traduza status/summary/description. title, tags
 * e links normalmente ficam iguais nos três — statusKey NUNCA se traduz,
 * é ele que decide a cor do selo (veja css/style.css).
 *
 * statusKey válidos: "production" | "live" | "development" | "case-study"
 * featured: true dá destaque visual (card ocupa a largura toda) — use com moderação.
 * impact: linha curta opcional, destacada, tipo "prova social" (deixe de fora se não tiver nada concreto pra dizer).
 */
const PROJECTS = {
  "pt-BR": [
    {
      title: "Zyntra ERP",
      statusKey: "production",
      status: "EM PRODUÇÃO",
      featured: true,
      impact: "Em produção real desde jan. 2026 — ERP completo rodando numa indústria de verdade.",
      summary: "ERP SaaS industrial multi-tenant, com clientes reais desde janeiro de 2026.",
      description:
        "Plataforma que cobre o ciclo operacional completo de uma indústria: vendas, compras, PCP, financeiro, estoque, RH e emissão fiscal (NF-e via SEFAZ, CNAB 240). Atuo fullstack — do frontend às regras de negócio — com foco recente em reforçar o controle de acesso (RBAC) e reduzir a superfície de ataque dos módulos.",
      tags: ["Node.js", "Express", "MySQL", "Socket.IO", "PWA", "Android"],
      links: { live: "https://zyntraerp.com.br", repo: "https://github.com/jovemegidio/Zyntra" },
    },
    {
      title: "AKPL",
      statusKey: "live",
      status: "LIVE",
      featured: true,
      impact: "Nasceu de uma necessidade real minha — hoje roda a gestão da minha própria academia.",
      summary: "Plataforma de gestão acadêmica: portal do aluno, diário do professor e financeiro.",
      description:
        "Sistema com 6 perfis de acesso (administrador, secretaria, financeiro, professor, aluno...) cobrindo do cadastro de curso à cobrança: matriz curricular, diário do professor com notas e frequência, mensalidades em lote com renegociação de dívida, e um site institucional que se atualiza sozinho com o que a secretaria cadastra. Construído com atenção a acessibilidade (WCAG 2.1 AA) e segurança de sessão. Sou instrutor na Academia de Karatê Pedro Leopoldo e presido a Associação Ventura e Vianna, parceira da escola — foi essa necessidade real, de dentro do tatame, que motivou o projeto.",
      tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      links: { live: "https://karatepl.zyntraerp.com.br", repo: null },
    },
    {
      title: "Acesso Alunos",
      statusKey: "case-study",
      status: "CASE STUDY",
      summary: "Controle de acesso biométrico e automação financeira, em Arquitetura Hexagonal.",
      description:
        "Backend que decide, em tempo real, se libera a entrada de um aluno: cruza horário permitido com situação financeira ('EM_DIA'). Cadastra hash biométrico e se integra ao gateway de pagamento Asaas para gerar boleto/PIX e liberar o acesso automaticamente quando o pagamento é confirmado via webhook. O núcleo de regras de negócio (core) não conhece banco de dados, framework ou API externa — só interfaces (ports & adapters). Primeira versão do controle de acesso da AKPL, antes de eu migrar o projeto para a stack atual.",
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "OpenFeign", "Docker"],
      links: { live: null, repo: null },
    },
    {
      title: "AegisProtocol",
      statusKey: "development",
      status: "EM DESENVOLVIMENTO",
      summary: "Middleware de identidade e autenticação com arquitetura Zero Trust.",
      description:
        "Identity Provider próprio: emissão de tokens JWT assinados com RSA-2048, revogação distribuída via Redis (blacklist), políticas de acesso granulares (RBAC/ABAC) e nenhuma requisição confiável por padrão. Construído para servir como camada de autenticação de outros produtos do meu ecossistema.",
      tags: ["Java 21", "Spring Boot", "Spring Security", "JWT (RS256)", "Redis", "PostgreSQL"],
      links: { live: null, repo: "https://github.com/Gtvnv/AegisProtocol-Core" },
    },
    {
      title: "OmniShift",
      statusKey: "development",
      status: "EM DESENVOLVIMENTO",
      summary: "Motor de transformação de dados entre formatos e protocolos diferentes.",
      description:
        "Em vez de converter um formato direto para outro, o sistema traduz qualquer entrada para um modelo canônico em memória e depois serializa no formato de saída desejado — arquitetura hexagonal, então plugar um novo formato de entrada ou saída não exige tocar nas regras de negócio existentes.",
      tags: ["Java 21", "Spring Boot", "gRPC", "Protobuf", "Jackson"],
      links: { live: null, repo: "https://github.com/Gtvnv/OmniShift" },
    },
    {
      title: "Ultrafoot 26",
      statusKey: "development",
      status: "EM DESENVOLVIMENTO",
      summary: "Remake de um clássico jogo de futebol, como app desktop.",
      description:
        "Projeto pessoal fora do escopo corporativo: app desktop feito com Next.js empacotado em Tauri, com visualização de partida em 3D e um pipeline de release próprio — versão e assinatura via GitHub Actions, com auto-update no cliente instalado.",
      tags: ["Next.js", "Tauri", "TypeScript", "3D"],
      links: { live: "https://remake-ultrafoot.vercel.app", repo: "https://github.com/jovemegidio/Ultrafoot26" },
    },
  ],
  en: [
    {
      title: "Zyntra ERP",
      statusKey: "production",
      status: "IN PRODUCTION",
      featured: true,
      impact: "In real production since Jan 2026 — a full ERP running inside an actual factory.",
      summary: "Multi-tenant industrial SaaS ERP, with real customers since January 2026.",
      description:
        "A platform covering a factory's entire operating cycle: sales, purchasing, production planning, finance, inventory, HR, and tax filing (Brazilian e-invoicing via SEFAZ, CNAB 240 banking files). I work fullstack — from the frontend to business rules — recently focused on tightening access control (RBAC) and reducing the modules' attack surface.",
      tags: ["Node.js", "Express", "MySQL", "Socket.IO", "PWA", "Android"],
      links: { live: "https://zyntraerp.com.br", repo: "https://github.com/jovemegidio/Zyntra" },
    },
    {
      title: "AKPL",
      statusKey: "live",
      status: "LIVE",
      featured: true,
      impact: "Born out of a real need of mine — it now runs my own martial arts school.",
      summary: "Academic management platform: student portal, teacher gradebook, and finance.",
      description:
        "A system with 6 access profiles (admin, front office, finance, teacher, student...) covering everything from course setup to billing: curriculum management, a teacher gradebook with grades and attendance, batch tuition billing with debt renegotiation, and a public site that updates itself from whatever staff registers. Built with attention to accessibility (WCAG 2.1 AA) and session security. I'm an instructor at Academia de Karatê Pedro Leopoldo and preside over Associação Ventura e Vianna, a partner of the school — that real, on-the-mat need is what started this project.",
      tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      links: { live: "https://karatepl.zyntraerp.com.br", repo: null },
    },
    {
      title: "Acesso Alunos",
      statusKey: "case-study",
      status: "CASE STUDY",
      summary: "Biometric access control and payment automation, built in Hexagonal Architecture.",
      description:
        "A backend that decides, in real time, whether to let a student in: it checks allowed hours against payment status ('current'). It stores a biometric hash and integrates with the Asaas payment gateway to issue invoices/PIX and automatically unlock access once payment is confirmed via webhook. The business-rule core has no knowledge of the database, framework, or any external API — only interfaces (ports & adapters). This was AKPL's first access-control version, before I moved the project to its current stack.",
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "OpenFeign", "Docker"],
      links: { live: null, repo: null },
    },
    {
      title: "AegisProtocol",
      statusKey: "development",
      status: "IN DEVELOPMENT",
      summary: "Identity and authentication middleware built on Zero Trust architecture.",
      description:
        "A homegrown Identity Provider: JWT tokens signed with RSA-2048, distributed revocation via Redis (blacklist), granular access policies (RBAC/ABAC), and no request trusted by default. Built to serve as the authentication layer for other products in my ecosystem.",
      tags: ["Java 21", "Spring Boot", "Spring Security", "JWT (RS256)", "Redis", "PostgreSQL"],
      links: { live: null, repo: "https://github.com/Gtvnv/AegisProtocol-Core" },
    },
    {
      title: "OmniShift",
      statusKey: "development",
      status: "IN DEVELOPMENT",
      summary: "A data transformation engine between different formats and protocols.",
      description:
        "Instead of converting one format directly into another, the system translates any input into an in-memory canonical model and then serializes it into the desired output format — a hexagonal architecture, so plugging in a new input or output format never touches the existing business rules.",
      tags: ["Java 21", "Spring Boot", "gRPC", "Protobuf", "Jackson"],
      links: { live: null, repo: "https://github.com/Gtvnv/OmniShift" },
    },
    {
      title: "Ultrafoot 26",
      statusKey: "development",
      status: "IN DEVELOPMENT",
      summary: "A remake of a classic football game, shipped as a desktop app.",
      description:
        "A personal project outside the day job: a desktop app built with Next.js packaged in Tauri, with a 3D match viewer and its own release pipeline — versioning and signing via GitHub Actions, with auto-update on the installed client.",
      tags: ["Next.js", "Tauri", "TypeScript", "3D"],
      links: { live: "https://remake-ultrafoot.vercel.app", repo: "https://github.com/jovemegidio/Ultrafoot26" },
    },
  ],
  es: [
    {
      title: "Zyntra ERP",
      statusKey: "production",
      status: "EN PRODUCCIÓN",
      featured: true,
      impact: "En producción real desde ene. 2026 — un ERP completo dentro de una fábrica de verdad.",
      summary: "ERP SaaS industrial multi-tenant, con clientes reales desde enero de 2026.",
      description:
        "Plataforma que cubre el ciclo operativo completo de una industria: ventas, compras, planificación de producción, finanzas, inventario, RRHH y facturación fiscal (NF-e vía SEFAZ, CNAB 240). Trabajo fullstack — del frontend a las reglas de negocio — con foco reciente en reforzar el control de acceso (RBAC) y reducir la superficie de ataque de los módulos.",
      tags: ["Node.js", "Express", "MySQL", "Socket.IO", "PWA", "Android"],
      links: { live: "https://zyntraerp.com.br", repo: "https://github.com/jovemegidio/Zyntra" },
    },
    {
      title: "AKPL",
      statusKey: "live",
      status: "EN VIVO",
      featured: true,
      impact: "Nació de una necesidad real mía — hoy gestiona mi propia academia.",
      summary: "Plataforma de gestión académica: portal del alumno, diario del profesor y finanzas.",
      description:
        "Sistema con 6 perfiles de acceso (administrador, secretaría, finanzas, profesor, alumno...) que cubre desde el alta de cursos hasta el cobro: matriz curricular, diario del profesor con notas y asistencia, cobranza en lote con renegociación de deuda, y un sitio institucional que se actualiza solo con lo que la secretaría registra. Construido con atención a la accesibilidad (WCAG 2.1 AA) y seguridad de sesión. Soy instructor en la Academia de Karatê Pedro Leopoldo y presido la Associação Ventura e Vianna, socia de la escuela — esa necesidad real, desde el propio tatami, fue lo que motivó el proyecto.",
      tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      links: { live: "https://karatepl.zyntraerp.com.br", repo: null },
    },
    {
      title: "Acesso Alunos",
      statusKey: "case-study",
      status: "CASO DE ESTUDIO",
      summary: "Control de acceso biométrico y automatización financiera, en Arquitectura Hexagonal.",
      description:
        "Backend que decide, en tiempo real, si autoriza el ingreso de un alumno: cruza el horario permitido con la situación financiera ('al día'). Registra un hash biométrico y se integra con la pasarela de pago Asaas para generar boleto/PIX y liberar el acceso automáticamente cuando el pago se confirma vía webhook. El núcleo de reglas de negocio no conoce la base de datos, el framework ni ninguna API externa — solo interfaces (ports & adapters). Fue la primera versión del control de acceso de AKPL, antes de migrar el proyecto a la pila actual.",
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "OpenFeign", "Docker"],
      links: { live: null, repo: null },
    },
    {
      title: "AegisProtocol",
      statusKey: "development",
      status: "EN DESARROLLO",
      summary: "Middleware de identidad y autenticación con arquitectura Zero Trust.",
      description:
        "Identity Provider propio: tokens JWT firmados con RSA-2048, revocación distribuida vía Redis (lista negra), políticas de acceso granulares (RBAC/ABAC) y ninguna solicitud confiable por defecto. Construido para servir como capa de autenticación de otros productos de mi ecosistema.",
      tags: ["Java 21", "Spring Boot", "Spring Security", "JWT (RS256)", "Redis", "PostgreSQL"],
      links: { live: null, repo: "https://github.com/Gtvnv/AegisProtocol-Core" },
    },
    {
      title: "OmniShift",
      statusKey: "development",
      status: "EN DESARROLLO",
      summary: "Motor de transformación de datos entre formatos y protocolos distintos.",
      description:
        "En lugar de convertir un formato directamente a otro, el sistema traduce cualquier entrada a un modelo canónico en memoria y luego lo serializa al formato de salida deseado — arquitectura hexagonal, así que agregar un nuevo formato de entrada o salida no exige tocar las reglas de negocio existentes.",
      tags: ["Java 21", "Spring Boot", "gRPC", "Protobuf", "Jackson"],
      links: { live: null, repo: "https://github.com/Gtvnv/OmniShift" },
    },
    {
      title: "Ultrafoot 26",
      statusKey: "development",
      status: "EN DESARROLLO",
      summary: "Remake de un clásico juego de fútbol, como aplicación de escritorio.",
      description:
        "Proyecto personal fuera del ámbito corporativo: app de escritorio hecha con Next.js empaquetada en Tauri, con visualización de partidos en 3D y un pipeline de lanzamiento propio — versión y firma vía GitHub Actions, con auto-actualización en el cliente instalado.",
      tags: ["Next.js", "Tauri", "TypeScript", "3D"],
      links: { live: "https://remake-ultrafoot.vercel.app", repo: "https://github.com/jovemegidio/Ultrafoot26" },
    },
  ],
};
