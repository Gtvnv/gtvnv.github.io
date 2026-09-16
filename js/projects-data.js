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
      title: "Vertex",
      statusKey: "development",
      status: "EM DESENVOLVIMENTO",
      summary: "Internal Developer Platform que transforma uma especificação YAML num microsserviço Go pronto pra rodar.",
      description:
        "Motor determinístico que lê uma especificação (Spec-Kit YAML) e gera um microsserviço em Go com Arquitetura Hexagonal — compila, passa no go vet e roda, com o núcleo da regra de negócio em branco pra ser preenchido. Tem uma camada opcional de IA local que traduz intenção em linguagem natural pra essa especificação, mas a IA nunca escreve código diretamente: só propõe, e um validador determinístico decide. Todo serviço gerado passa por verificação isolada (build e testes num container sem rede) antes de ser entregue, com um teste garantindo que o caminho crítico funciona mesmo com a IA totalmente offline.",
      tags: ["Go", "Internal Developer Platform", "Arquitetura Hexagonal", "IaC (Pulumi)"],
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
      title: "ZenithCode OS",
      statusKey: "development",
      status: "PESQUISA EM ANDAMENTO",
      featured: true,
      summary: "Meta-framework pessoal sobre governança, segurança e arquitetura de plataformas internas.",
      description:
        "Conjunto de padrões e decisões de arquitetura que venho documentando e testando informalmente no trabalho, pensando em transformar isso na pesquisa do meu mestrado: como organizar squads, política de segurança, observabilidade e ciclo de vida de código em plataformas internas de forma coerente, em vez de decidir cada projeto isoladamente. O Vertex é o primeiro pedaço desse estudo que virou código de verdade.",
      tags: ["Arquitetura de Plataformas", "DevSecOps", "Governança Técnica", "Pesquisa Acadêmica"],
      links: { live: null, repo: null },
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
      title: "Vertex",
      statusKey: "development",
      status: "IN DEVELOPMENT",
      summary: "An Internal Developer Platform that turns a YAML spec into a ready-to-run Go microservice.",
      description:
        "A deterministic engine that reads a Spec-Kit YAML file and generates a Go microservice in Hexagonal Architecture — it compiles, passes go vet, and runs, with the business-rule core left blank to be filled in. An optional local-LLM layer translates natural-language intent into that spec, but the AI never writes code directly — it only proposes, and a deterministic validator decides. Every generated service goes through isolated verification (build and tests in a network-less container) before it's handed over, with a dedicated test proving the critical path still works with the AI fully offline.",
      tags: ["Go", "Internal Developer Platform", "Hexagonal Architecture", "IaC (Pulumi)"],
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
      title: "ZenithCode OS",
      statusKey: "development",
      status: "ONGOING RESEARCH",
      featured: true,
      summary: "A personal meta-framework on governance, security, and internal platform architecture.",
      description:
        "A set of architecture patterns and decisions I've been documenting and testing informally at work, with an eye toward turning it into my master's research: how to organize squads, security policy, observability, and code lifecycle across internal platforms coherently, instead of deciding each project in isolation. Vertex is the first piece of this study that turned into real code.",
      tags: ["Platform Architecture", "DevSecOps", "Technical Governance", "Academic Research"],
      links: { live: null, repo: null },
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
      title: "Vertex",
      statusKey: "development",
      status: "EN DESARROLLO",
      summary: "Internal Developer Platform que convierte una especificación YAML en un microservicio Go listo para ejecutar.",
      description:
        "Motor determinístico que lee una especificación (Spec-Kit YAML) y genera un microservicio en Go con Arquitectura Hexagonal — compila, pasa el go vet y ejecuta, con el núcleo de la regla de negocio en blanco para completarse. Tiene una capa opcional de IA local que traduce intención en lenguaje natural a esa especificación, pero la IA nunca escribe código directamente: solo propone, y un validador determinístico decide. Cada servicio generado pasa por una verificación aislada (build y tests en un contenedor sin red) antes de entregarse, con una prueba que garantiza que el camino crítico funciona incluso con la IA completamente offline.",
      tags: ["Go", "Internal Developer Platform", "Arquitectura Hexagonal", "IaC (Pulumi)"],
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
      title: "ZenithCode OS",
      statusKey: "development",
      status: "INVESTIGACIÓN EN CURSO",
      featured: true,
      summary: "Meta-framework personal sobre gobernanza, seguridad y arquitectura de plataformas internas.",
      description:
        "Conjunto de patrones y decisiones de arquitectura que vengo documentando y probando de forma informal en el trabajo, pensando en convertirlo en la investigación de mi maestría: cómo organizar equipos, política de seguridad, observabilidad y ciclo de vida del código en plataformas internas de forma coherente, en lugar de decidir cada proyecto por separado. Vertex es el primer fragmento de este estudio que se convirtió en código real.",
      tags: ["Arquitectura de Plataformas", "DevSecOps", "Gobernanza Técnica", "Investigación Académica"],
      links: { live: null, repo: null },
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
