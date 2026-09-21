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
      impact: "Em produção real desde jan. 2026, hoje atende dois perfis de cliente bem diferentes: uma indústria e uma agência.",
      summary: "ERP SaaS industrial multi-tenant, com clientes reais desde janeiro de 2026.",
      description:
        "Plataforma que cobre o ciclo operacional completo de uma indústria: vendas, compras, PCP, financeiro, estoque, RH e emissão fiscal (NF-e via SEFAZ, CNAB 240). Atuo fullstack (do frontend às regras de negócio) com foco recente em reforçar o controle de acesso (RBAC) e reduzir a superfície de ataque dos módulos. Ganhou recentemente um módulo de chat interno (o Concord, inspirado no Discord), com um assistente de suporte via IA embutido — a Axios, batizada de Bob pelos usuários — que já abre e acompanha chamados de TI direto na conversa.",
      tags: ["Node.js", "Express", "MySQL", "Socket.IO", "SLM (Python)", "PWA", "Android"],
      links: {
        live: "https://zyntraerp.com.br",
        liveExtra: [{ href: "https://agenciadojapa.zyntraerp.com.br", label: "Ver (Agência) ↗" }],
        repo: "https://github.com/jovemegidio/Zyntra",
      },
    },
    {
      title: "AKPL",
      statusKey: "live",
      status: "LIVE",
      featured: true,
      impact: "Nasceu de uma necessidade real minha: hoje roda a gestão da minha própria academia.",
      summary: "Plataforma de gestão acadêmica: portal do aluno, diário do professor e financeiro.",
      description:
        "Sistema com 6 perfis de acesso (administrador, secretaria, financeiro, professor, aluno...) cobrindo do cadastro de curso à cobrança: matriz curricular, diário do professor com notas e frequência, mensalidades em lote com renegociação de dívida, e um site institucional que se atualiza sozinho com o que a secretaria cadastra. Construído com atenção a acessibilidade (WCAG 2.1 AA) e segurança de sessão. Sou instrutor na Academia de Karatê Pedro Leopoldo e presido a Associação Ventura e Vianna, parceira da escola. Foi essa necessidade real, de dentro do tatame, que motivou o projeto.",
      tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      links: { live: "https://karatepl.zyntraerp.com.br", repo: null },
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
      links: { live: null, repo: null, details: "zenithcode.html" },
      badge: { id: "21", slug: "zenithcode", name: "ZenithCode" },
    },
    {
      title: "Vertex",
      statusKey: "development",
      status: "EM DESENVOLVIMENTO",
      summary: "Internal Developer Platform que transforma uma especificação YAML num microsserviço Go pronto pra rodar.",
      description:
        "Motor determinístico que lê uma especificação (Spec-Kit YAML) e gera um microsserviço em Go com Arquitetura Hexagonal: compila, passa no go vet e roda, com o núcleo da regra de negócio em branco pra ser preenchido. Tem uma camada opcional de IA local que traduz intenção em linguagem natural pra essa especificação, mas a IA nunca escreve código diretamente: só propõe, e um validador determinístico decide. Todo serviço gerado passa por verificação isolada (build e testes num container sem rede) antes de ser entregue, com um teste garantindo que o caminho crítico funciona mesmo com a IA totalmente offline.",
      tags: ["Go", "Internal Developer Platform", "Arquitetura Hexagonal", "IaC (Pulumi)"],
      links: { live: null, repo: null },
      satellite: { id: "03", slug: "dk-ops", name: "DK-Ops" },
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
      satellite: { id: "01", slug: "themis", name: "Themis" },
    },
    {
      title: "OmniShift",
      statusKey: "development",
      status: "EM DESENVOLVIMENTO",
      summary: "Motor de transformação de dados entre formatos e protocolos diferentes.",
      description:
        "Em vez de converter um formato direto para outro, o sistema traduz qualquer entrada para um modelo canônico em memória e depois serializa no formato de saída desejado: arquitetura hexagonal, então plugar um novo formato de entrada ou saída não exige tocar nas regras de negócio existentes.",
      tags: ["Java 21", "Spring Boot", "gRPC", "Protobuf", "Jackson"],
      links: { live: null, repo: "https://github.com/Gtvnv/OmniShift" },
      satellite: { id: "11", slug: "oraculo", name: "Oráculo" },
    },
    {
      title: "Panoptes",
      statusKey: "development",
      status: "EM DESENVOLVIMENTO",
      summary: "Ingestor de métricas em Go: controladoria e gestão financeira interna em tempo real.",
      description:
        "Sistema de controladoria que escuta telemetria e eventos operacionais de múltiplas fontes ao mesmo tempo (arquitetura pipes-and-filters orientada a eventos), filtra e consolida isso em métricas de custo, publicando o pacote de custo unitário num message broker pro Nidhogg consumir de forma assíncrona. Uso Go pela concorrência via goroutines (throughput alto, footprint baixo na infra) e PostgreSQL com TimescaleDB pra tratar burn rate e telemetria como série temporal de verdade. É de uso estritamente interno — sem tela ou API voltada a cliente externo, serve só a controladoria da própria empresa.",
      tags: ["Go", "PostgreSQL", "TimescaleDB", "Event-Driven"],
      links: { live: null, repo: null },
      satellite: { id: "02", slug: "argus", name: "Árgus" },
    },
    {
      title: "Nidhogg",
      statusKey: "development",
      status: "EM DESENVOLVIMENTO",
      summary: "Motor de pricing e planejamento tributário em Java: audita a \"economia perfeita interna\" do Panoptes contra o mercado real e projeta o futuro fiscal da empresa.",
      description:
        "Motor financeiro que consome os dados de custo consolidados pelo Panoptes e aplica regras de precificação e proteção de margem com Arquitetura Hexagonal, isolando esse domínio complexo (mesmo padrão que uso no OmniShift e no AegisProtocol). A comunicação entre os dois sistemas é desacoplada: se o Nidhogg cair ou for atualizado, o Panoptes continua calculando custo sem travar; consultas síncronas em tempo real, quando precisam existir, passam por gRPC. A função central é validação: minerar dados do mercado externo pra checar se a economia interna calculada é de fato a forma mais eficiente de operar, ou só parece ser. Também age como planejador tributário: projeta cenários de carga fiscal e antecipa o impacto de decisões de negócio no futuro da organização, em vez de descobrir o estrago só no fechamento contábil.",
      tags: ["Java 21", "Spring Boot 3", "Arquitetura Hexagonal", "PostgreSQL", "gRPC"],
      links: { live: null, repo: null },
      satellite: { id: "08", slug: "prometeu", name: "Prometeu" },
    },
    {
      title: "Ultrafoot 26",
      statusKey: "live",
      status: "LIVE",
      summary: "Remake de um clássico jogo de futebol, agora multiplataforma: desktop e mobile, com versão free e paga.",
      description:
        "Projeto pessoal fora do escopo corporativo, já rodando online. Tem duas versões, cada uma com stack própria: desktop (Windows, Mac e Linux) em Next.js empacotado com Tauri, e mobile em C#, ambas com visualização de partida em 3D. O desktop tem pipeline de release próprio (versão e assinatura via GitHub Actions, com auto-update no cliente instalado), e as duas versões compartilham um sistema de licenças que distingue quem usa a versão free de quem tem a versão completa.",
      tags: ["Next.js", "Tauri", "TypeScript", "C#", "3D"],
      links: { live: "https://remake-ultrafoot.vercel.app", repo: "https://github.com/jovemegidio/Ultrafoot26" },
    },
  ],
  en: [
    {
      title: "Zyntra ERP",
      statusKey: "production",
      status: "IN PRODUCTION",
      featured: true,
      impact: "In real production since Jan 2026, now serving two very different client profiles: a factory and an agency.",
      summary: "Multi-tenant industrial SaaS ERP, with real customers since January 2026.",
      description:
        "A platform covering a factory's entire operating cycle: sales, purchasing, production planning, finance, inventory, HR, and tax filing (Brazilian e-invoicing via SEFAZ, CNAB 240 banking files). I work fullstack (from the frontend to business rules), recently focused on tightening access control (RBAC) and reducing the modules' attack surface. It recently gained an internal chat module (Concord, modeled on Discord), with a built-in AI support assistant — Axios, nicknamed Bob by users — that already opens and tracks IT tickets right inside the conversation.",
      tags: ["Node.js", "Express", "MySQL", "Socket.IO", "SLM (Python)", "PWA", "Android"],
      links: {
        live: "https://zyntraerp.com.br",
        liveExtra: [{ href: "https://agenciadojapa.zyntraerp.com.br", label: "View (Agency) ↗" }],
        repo: "https://github.com/jovemegidio/Zyntra",
      },
    },
    {
      title: "AKPL",
      statusKey: "live",
      status: "LIVE",
      featured: true,
      impact: "Born out of a real need of mine: it now runs my own martial arts school.",
      summary: "Academic management platform: student portal, teacher gradebook, and finance.",
      description:
        "A system with 6 access profiles (admin, front office, finance, teacher, student...) covering everything from course setup to billing: curriculum management, a teacher gradebook with grades and attendance, batch tuition billing with debt renegotiation, and a public site that updates itself from whatever staff registers. Built with attention to accessibility (WCAG 2.1 AA) and session security. I'm an instructor at Academia de Karatê Pedro Leopoldo and preside over Associação Ventura e Vianna, a partner of the school. That real, on-the-mat need is what started this project.",
      tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      links: { live: "https://karatepl.zyntraerp.com.br", repo: null },
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
      links: { live: null, repo: null, details: "zenithcode.html" },
      badge: { id: "21", slug: "zenithcode", name: "ZenithCode" },
    },
    {
      title: "Vertex",
      statusKey: "development",
      status: "IN DEVELOPMENT",
      summary: "An Internal Developer Platform that turns a YAML spec into a ready-to-run Go microservice.",
      description:
        "A deterministic engine that reads a Spec-Kit YAML file and generates a Go microservice in Hexagonal Architecture: it compiles, passes go vet, and runs, with the business-rule core left blank to be filled in. An optional local-LLM layer translates natural-language intent into that spec, but the AI never writes code directly, it only proposes, and a deterministic validator decides. Every generated service goes through isolated verification (build and tests in a network-less container) before it's handed over, with a dedicated test proving the critical path still works with the AI fully offline.",
      tags: ["Go", "Internal Developer Platform", "Hexagonal Architecture", "IaC (Pulumi)"],
      links: { live: null, repo: null },
      satellite: { id: "03", slug: "dk-ops", name: "DK-Ops" },
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
      satellite: { id: "01", slug: "themis", name: "Themis" },
    },
    {
      title: "OmniShift",
      statusKey: "development",
      status: "IN DEVELOPMENT",
      summary: "A data transformation engine between different formats and protocols.",
      description:
        "Instead of converting one format directly into another, the system translates any input into an in-memory canonical model and then serializes it into the desired output format: a hexagonal architecture, so plugging in a new input or output format never touches the existing business rules.",
      tags: ["Java 21", "Spring Boot", "gRPC", "Protobuf", "Jackson"],
      links: { live: null, repo: "https://github.com/Gtvnv/OmniShift" },
      satellite: { id: "11", slug: "oraculo", name: "Oraculo" },
    },
    {
      title: "Panoptes",
      statusKey: "development",
      status: "IN DEVELOPMENT",
      summary: "A Go-based metrics ingestor: real-time internal controllership and financial management.",
      description:
        "A controllership system that listens to telemetry and operational events from multiple sources at once (an event-driven pipes-and-filters architecture), filters and consolidates it into cost metrics, and publishes the unit-cost package to a message broker for Nidhogg to consume asynchronously. I use Go for goroutine-based concurrency (high throughput, low infra footprint) and PostgreSQL with TimescaleDB to treat burn rate and telemetry as proper time-series data. It's strictly internal — no screen or API facing external clients, it only feeds the company's own controllership.",
      tags: ["Go", "PostgreSQL", "TimescaleDB", "Event-Driven"],
      links: { live: null, repo: null },
      satellite: { id: "02", slug: "argus", name: "Argus" },
    },
    {
      title: "Nidhogg",
      statusKey: "development",
      status: "IN DEVELOPMENT",
      summary: "A Java pricing and tax-planning engine that audits Panoptes's \"perfect internal economy\" against the real market and projects the company's fiscal future.",
      description:
        "A financial engine that consumes the cost data consolidated by Panoptes and applies pricing and margin-protection rules using Hexagonal Architecture, isolating that complex domain (the same pattern I use in OmniShift and AegisProtocol). Communication between the two systems is fully decoupled: if Nidhogg goes down or gets updated, Panoptes keeps calculating cost without blocking; synchronous real-time queries, when needed, go through gRPC. Its core job is validation: mining external market data to check whether the calculated internal economy is actually the most efficient way to operate, or just looks like it. It also acts as a tax planner: it projects tax-burden scenarios and forecasts how business decisions will play out for the organization's future, instead of finding out the damage only at the accounting close.",
      tags: ["Java 21", "Spring Boot 3", "Hexagonal Architecture", "PostgreSQL", "gRPC"],
      links: { live: null, repo: null },
      satellite: { id: "08", slug: "prometeu", name: "Prometeu" },
    },
    {
      title: "Ultrafoot 26",
      statusKey: "live",
      status: "LIVE",
      summary: "A remake of a classic football game, now cross-platform: desktop and mobile, with a free and a paid tier.",
      description:
        "A personal project outside the day job, already live. It ships as two versions, each with its own stack: desktop (Windows, Mac, and Linux) built with Next.js packaged in Tauri, and mobile built in C#, both with a 3D match viewer. The desktop version has its own release pipeline (versioning and signing via GitHub Actions, with auto-update on the installed client), and both versions share a licensing system that distinguishes free users from full-version users.",
      tags: ["Next.js", "Tauri", "TypeScript", "C#", "3D"],
      links: { live: "https://remake-ultrafoot.vercel.app", repo: "https://github.com/jovemegidio/Ultrafoot26" },
    },
  ],
  es: [
    {
      title: "Zyntra ERP",
      statusKey: "production",
      status: "EN PRODUCCIÓN",
      featured: true,
      impact: "En producción real desde ene. 2026, hoy atiende a dos perfiles de cliente bien distintos: una industria y una agencia.",
      summary: "ERP SaaS industrial multi-tenant, con clientes reales desde enero de 2026.",
      description:
        "Plataforma que cubre el ciclo operativo completo de una industria: ventas, compras, planificación de producción, finanzas, inventario, RRHH y facturación fiscal (NF-e vía SEFAZ, CNAB 240). Trabajo fullstack (del frontend a las reglas de negocio) con foco reciente en reforzar el control de acceso (RBAC) y reducir la superficie de ataque de los módulos. Ganó recientemente un módulo de chat interno (Concord, al estilo Discord), con un asistente de soporte por IA integrado — Axios, apodada Bob por los usuarios — que ya abre y da seguimiento a tickets de TI directo en la conversación.",
      tags: ["Node.js", "Express", "MySQL", "Socket.IO", "SLM (Python)", "PWA", "Android"],
      links: {
        live: "https://zyntraerp.com.br",
        liveExtra: [{ href: "https://agenciadojapa.zyntraerp.com.br", label: "Ver (Agencia) ↗" }],
        repo: "https://github.com/jovemegidio/Zyntra",
      },
    },
    {
      title: "AKPL",
      statusKey: "live",
      status: "EN VIVO",
      featured: true,
      impact: "Nació de una necesidad real mía: hoy gestiona mi propia academia.",
      summary: "Plataforma de gestión académica: portal del alumno, diario del profesor y finanzas.",
      description:
        "Sistema con 6 perfiles de acceso (administrador, secretaría, finanzas, profesor, alumno...) que cubre desde el alta de cursos hasta el cobro: matriz curricular, diario del profesor con notas y asistencia, cobranza en lote con renegociación de deuda, y un sitio institucional que se actualiza solo con lo que la secretaría registra. Construido con atención a la accesibilidad (WCAG 2.1 AA) y seguridad de sesión. Soy instructor en la Academia de Karatê Pedro Leopoldo y presido la Associação Ventura e Vianna, socia de la escuela. Esa necesidad real, desde el propio tatami, fue lo que motivó el proyecto.",
      tags: ["Next.js 15", "TypeScript", "Prisma", "PostgreSQL", "Tailwind CSS"],
      links: { live: "https://karatepl.zyntraerp.com.br", repo: null },
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
      links: { live: null, repo: null, details: "zenithcode.html" },
      badge: { id: "21", slug: "zenithcode", name: "ZenithCode" },
    },
    {
      title: "Vertex",
      statusKey: "development",
      status: "EN DESARROLLO",
      summary: "Internal Developer Platform que convierte una especificación YAML en un microservicio Go listo para ejecutar.",
      description:
        "Motor determinístico que lee una especificación (Spec-Kit YAML) y genera un microservicio en Go con Arquitectura Hexagonal: compila, pasa el go vet y ejecuta, con el núcleo de la regla de negocio en blanco para completarse. Tiene una capa opcional de IA local que traduce intención en lenguaje natural a esa especificación, pero la IA nunca escribe código directamente: solo propone, y un validador determinístico decide. Cada servicio generado pasa por una verificación aislada (build y tests en un contenedor sin red) antes de entregarse, con una prueba que garantiza que el camino crítico funciona incluso con la IA completamente offline.",
      tags: ["Go", "Internal Developer Platform", "Arquitectura Hexagonal", "IaC (Pulumi)"],
      links: { live: null, repo: null },
      satellite: { id: "03", slug: "dk-ops", name: "DK-Ops" },
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
      satellite: { id: "01", slug: "themis", name: "Themis" },
    },
    {
      title: "OmniShift",
      statusKey: "development",
      status: "EN DESARROLLO",
      summary: "Motor de transformación de datos entre formatos y protocolos distintos.",
      description:
        "En lugar de convertir un formato directamente a otro, el sistema traduce cualquier entrada a un modelo canónico en memoria y luego lo serializa al formato de salida deseado: arquitectura hexagonal, así que agregar un nuevo formato de entrada o salida no exige tocar las reglas de negocio existentes.",
      tags: ["Java 21", "Spring Boot", "gRPC", "Protobuf", "Jackson"],
      links: { live: null, repo: "https://github.com/Gtvnv/OmniShift" },
      satellite: { id: "11", slug: "oraculo", name: "Oráculo" },
    },
    {
      title: "Panoptes",
      statusKey: "development",
      status: "EN DESARROLLO",
      summary: "Ingestor de métricas en Go: controladoría y gestión financiera interna en tiempo real.",
      description:
        "Sistema de controladoría que escucha telemetría y eventos operativos de múltiples fuentes a la vez (arquitectura pipes-and-filters orientada a eventos), filtra y consolida todo en métricas de costo, publicando el paquete de costo unitario en un message broker para que Nidhogg lo consuma de forma asíncrona. Uso Go por la concurrencia vía goroutines (alto throughput, bajo footprint de infraestructura) y PostgreSQL con TimescaleDB para tratar el burn rate y la telemetría como series temporales de verdad. Es de uso estrictamente interno — sin pantalla ni API orientada a cliente externo, solo alimenta la controladoría de la propia empresa.",
      tags: ["Go", "PostgreSQL", "TimescaleDB", "Event-Driven"],
      links: { live: null, repo: null },
      satellite: { id: "02", slug: "argus", name: "Argus" },
    },
    {
      title: "Nidhogg",
      statusKey: "development",
      status: "EN DESARROLLO",
      summary: "Motor de pricing y planificación tributaria en Java que audita la \"economía perfecta interna\" de Panoptes contra el mercado real y proyecta el futuro fiscal de la empresa.",
      description:
        "Motor financiero que consume los datos de costo consolidados por Panoptes y aplica reglas de precificación y protección de margen con Arquitectura Hexagonal, aislando ese dominio complejo (el mismo patrón que uso en OmniShift y AegisProtocol). La comunicación entre los dos sistemas es totalmente desacoplada: si Nidhogg cae o se actualiza, Panoptes sigue calculando el costo sin bloquearse; las consultas síncronas en tiempo real, cuando hacen falta, pasan por gRPC. Su función central es de validación: minar datos del mercado externo para comprobar si la economía interna calculada es realmente la forma más eficiente de operar, o solo lo parece. También actúa como planificador tributario: proyecta escenarios de carga fiscal y anticipa el impacto de decisiones de negocio en el futuro de la organización, en vez de descubrir el daño recién en el cierre contable.",
      tags: ["Java 21", "Spring Boot 3", "Arquitectura Hexagonal", "PostgreSQL", "gRPC"],
      links: { live: null, repo: null },
      satellite: { id: "08", slug: "prometeu", name: "Prometeo" },
    },
    {
      title: "Ultrafoot 26",
      statusKey: "live",
      status: "EN VIVO",
      summary: "Remake de un clásico juego de fútbol, ahora multiplataforma: escritorio y móvil, con versión gratuita y de pago.",
      description:
        "Proyecto personal fuera del ámbito corporativo, ya en funcionamiento. Tiene dos versiones, cada una con su propia stack: escritorio (Windows, Mac y Linux) hecho con Next.js empaquetado en Tauri, y móvil en C#, ambas con visualización de partidos en 3D. La versión de escritorio tiene su propio pipeline de lanzamiento (versión y firma vía GitHub Actions, con auto-actualización en el cliente instalado), y las dos versiones comparten un sistema de licencias que distingue entre quien usa la versión gratuita y quien tiene la versión completa.",
      tags: ["Next.js", "Tauri", "TypeScript", "C#", "3D"],
      links: { live: "https://remake-ultrafoot.vercel.app", repo: "https://github.com/jovemegidio/Ultrafoot26" },
    },
  ],
};
