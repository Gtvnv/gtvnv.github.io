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
        details: "projects/zyntra.html",
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
      links: { live: "https://karatepl.zyntraerp.com.br", repo: null, details: "projects/akpl.html" },
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
      links: { live: null, repo: null, details: "projects/vertexflow.html" },
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
      links: { live: null, repo: "https://github.com/Gtvnv/AegisProtocol-Core", details: "projects/aegisprotocol.html" },
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
      links: { live: null, repo: "https://github.com/Gtvnv/OmniShift", details: "projects/omnishift.html" },
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
      links: { live: null, repo: null, details: "projects/panoptes.html" },
      satellite: { id: "02", slug: "argus", name: "Árgus" },
    },
    {
      title: "Nidhogg",
      statusKey: "development",
      status: "EM DESENVOLVIMENTO",
      summary: "Motor de pricing e proteção de margem em Java: cruza o custo real da operação com a volatilidade do mercado externo pra manter a rentabilidade do ecossistema Z2A.",
      description:
        "O motor financeiro, de controladoria e de regras de negócio estratégicas do ecossistema Z2A: cruza o custo real da operação técnica com a volatilidade do mercado externo pra garantir saúde financeira e rentabilidade. Define e ajusta preços dinamicamente, reagindo tanto ao aumento de custo computacional interno (reportado pelo Panoptes) quanto a movimentos da concorrência, com travas rígidas contra qualquer operação que resulte em margem de contribuição negativa, a menos que exista uma política deliberada de exceção. Também funciona como ponte entre CTO e CFO: traduz telemetria e custo de infraestrutura pra linguagem de unit economics, e monitora o cenário macro pra alertar sobre ameaças ao break-even. Blindado por Arquitetura Hexagonal e DDD, roda em Java 21 + Spring Boot + PostgreSQL, ingerindo os eventos de custo do Panoptes de forma assíncrona via mensageria — com espaço pra acoplar workers em Python quando precisar rodar algoritmos preditivos de mercado.",
      tags: ["Java 21", "Spring Boot 3", "Arquitetura Hexagonal", "DDD", "PostgreSQL"],
      links: { live: null, repo: null, details: "projects/nidhogg.html" },
      satellite: { id: "08", slug: "prometeu", name: "Prometeu" },
    },
    {
      title: "Fafnir",
      statusKey: "development",
      status: "EM DESENVOLVIMENTO",
      summary: "O terceiro motor da trindade financeira do Z2A: um SLM sugere a classificação fiscal, uma regra determinística decide se aplica.",
      description:
        "Completa a trindade financeira do Z2A ao lado do Panoptes (custo interno) e do Nidhogg (pricing e proteção de margem): o Fafnir intercepta a transação antes do Split Payment fatiar o pagamento, usa um SLM pra sugerir a classificação fiscal correta (NCM) a partir da descrição do produto, e só aplica a otimização se um motor de regras determinístico validar contra as tabelas oficiais (Sefaz, IBPT) — a mesma tese do Z2A aplicada à contabilidade: a IA sugere, a regra decide. Arquitetura Hexagonal + DDD, com o núcleo isolado de qualquer detalhe de framework.",
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "SLM (Ollama)", "Arquitetura Hexagonal", "DDD"],
      links: { live: null, repo: null, details: "projects/fafnir.html" },
      satellite: { id: "07", slug: "atlas", name: "Atlas" },
    },
    {
      title: "Kinetix Eros",
      statusKey: "development",
      status: "EM DESENVOLVIMENTO",
      summary: "Hub de orquestração de vídeo B2B: roteia cada job entre GPUs próprias (ComfyUI), motores de volume (MoneyPrinterTurbo) e avatares hiper-realistas (HeyGen) por trás de uma única API.",
      description:
        "A plataforma SaaS de geração de vídeo do ecossistema Aetherium/ZenithCode: um Control Plane em Java 21 recebe o job do cliente B2B, debita créditos do Ledger e despacha pro motor certo via Strategy Pattern — GPUs serverless no RunPod rodando ComfyUI pra arte generativa pesada, um worker de MoneyPrinterTurbo pra vídeos faceless em volume, ou um proxy autenticado pro HeyGen quando o cliente precisa de um porta-voz hiper-realista. RabbitMQ amortece a carga entre a API e as GPUs, com uma Dead Letter Queue estornando crédito automaticamente (e devolvendo o saldo direto na Stripe se a fatura do mês já tiver fechado) sempre que um provedor de IA falha de forma irrecuperável. A experiência do cliente B2B é trabalho da Psiquê, o satélite de UX e neurométricas do Z2A — reaproveitado aqui como codinome da camada de interface que traduz toda essa complexidade de orquestração em algo fluido de usar.",
      tags: ["Java 21", "Spring Boot 3", "RabbitMQ", "AWS Fargate", "Terraform", "PostgreSQL"],
      links: { live: null, repo: null, details: "projects/kinetixeros.html" },
      satellite: { id: "20", slug: "psique", name: "Psiquê" },
    },
    {
      title: "Heimdall",
      statusKey: "development",
      status: "EM DESENVOLVIMENTO",
      summary: "SIEM + NOC unificado do ecossistema Z2A: agrega a telemetria de todos os satélites, aciona auto-healing de rede e revoga acesso em tempo real se detectar anomalia.",
      description:
        "Os olhos e ouvidos da infraestrutura: um middleware de observabilidade e segurança ativa dividido em três domínios. O Gjallarhorn (NOC) não só alerta sobre degradação de rede, ele age — enfileira comandos de failover e reinício de containers via RabbitMQ pra workers Python, reduzindo o tempo de mitigação de minutos pra milissegundos. O Olho de Asgard estende o Zero Trust pra além do login: monitora o comportamento das requisições em tempo real e, se detectar uma anomalia numa sessão ativa, aciona o AegisProtocol via gRPC pra revogar o token na hora. E a Bifrost Telemetry é o endpoint único de ingestão de logs de toda a frota — com uma SLM local (Ollama) resumindo a causa raiz de um erro em linguagem natural, direto no painel, em vez do engenheiro caçar log por container.",
      tags: ["Java 21", "Spring Boot", "Python", "RabbitMQ", "Docker", "Ollama"],
      links: { live: null, repo: null, details: "projects/heimdall.html" },
      satellite: { id: "03", slug: "dk-ops", name: "DK-Ops" },
    },
    {
      title: "Alexandria (Axios)",
      statusKey: "development",
      status: "EM DESENVOLVIMENTO",
      summary: "Copiloto socrático de ensino de lógica de programação: o motor scriptado valida o código, uma SLM local intervém só quando o aluno trava — e nunca entrega a resposta pronta.",
      description:
        "Nasceu pra ajudar colegas da faculdade e virou um estudo de arquitetura híbrida: uma camada scriptada determinística (Java/Spring, Clean Architecture) controla a trilha de evolução do aluno e roda os testes unitários ocultos do exercício; quando o teste falha três vezes seguidas, um orquestrador de IA em Python (FastAPI + Ollama) entra em cena como tutor socrático — o system prompt proíbe explicitamente dar a resposta pronta, só pode fazer a pergunta que leva o aluno a perceber o próprio erro. A resposta da SLM chega token a token via streaming gRPC, mascarando a latência da inferência local, enquanto RabbitMQ isola o processamento pesado (compilar e testar o código num container Docker efêmero) do chat em tempo real. Projetado pra começar em Lógica de Programação e se estender a Idiomas e História — ensinar o 'porquê' de um paradigma existir, não só a sintaxe.",
      tags: ["Java 21", "Spring Boot", "Python", "FastAPI", "Angular", "gRPC", "RabbitMQ", "Ollama"],
      links: { live: null, repo: null, details: "projects/alexandria.html" },
      satellite: { id: "05", slug: "evelyn", name: "E.V.E.L.Y.N." },
    },
    {
      title: "Inari Trails",
      statusKey: "development",
      status: "EM DESENVOLVIMENTO",
      summary: "Turismo estilo Pokémon Go: o usuário 'platina' bairros fotografando pontos de interesse reais, enquanto comércios locais pagam pra virar Stop em destaque.",
      description:
        "Transforma roteiro turístico engessado em colecionismo: cada ponto de interesse é um Stop com raio de proximidade (PostgreSQL + PostGIS, índice GiST pra consulta espacial rápida), e o acervo de fotos do usuário funciona como uma Pokédex pessoal de lugares descobertos. A divisão entre acervo público e privado corta o custo de moderação pela raiz — o diário pessoal é instantâneo, só o que vira público entra no pipeline: upload via Pre-signed URL direto pro S3, um worker que arranca o EXIF e reconverte a imagem pra WebP (o que já destrói qualquer script malicioso embutido no arquivo original), e só então uma API de visão computacional libera a publicação. Uma Dead Letter Queue no RabbitMQ garante que uma foto corrompida ou uma IA de moderação fora do ar nunca trava o resto da fila. Do lado de negócio, comércios locais assinam pra aparecer em destaque na geração automática de roteiros — monetizando o fluxo de pedestre que o app já gera de graça.",
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "PostGIS", "RabbitMQ", "AWS S3", "Redis"],
      links: { live: null, repo: null, details: "projects/inaritrails.html" },
      satellite: { id: "20", slug: "psique", name: "Psiquê" },
    },
    {
      title: "Terminus Horizon",
      statusKey: "development",
      status: "EM DESENVOLVIMENTO",
      summary: "Motor matemático de missão crítica em Python: audita funções simbolicamente pra achar saltos, pólos e Jerk infinito antes que o hardware sinta o impacto.",
      description:
        "Um Domain Service puro (Arquitetura Hexagonal, zero I/O) que usa computação simbólica — SymPy, não ponto flutuante — pra provar matematicamente a sanidade de uma função antes dela chegar num atuador real. O SignalContinuityAnalyzer compara os limites laterais num ponto crítico: se divergem, é um salto (choque físico); se tendem ao infinito, é um pólo (ressonância catastrófica). O KinematicStressAnalyzer vai além da aceleração e deriva a trajetória até o Jerk (a 3ª derivada da posição) — se uma parada de aceleração for abrupta demais, o Jerk diverge, o equivalente matemático de uma martelada na engrenagem, e a operação é abortada antes do motor ser energizado. Uma API em FastAPI expõe esses serviços como Driving Adapter, com o Pydantic validando o payload na fronteira (Zero Trust) antes de qualquer dado tocar o núcleo matemático.",
      tags: ["Python", "SymPy", "FastAPI", "Pydantic", "NumPy", "SciPy", "Arquitetura Hexagonal"],
      links: { live: null, repo: null, details: "projects/terminushorizon.html" },
      satellite: { id: "06", slug: "hefesto", name: "Hefesto" },
    },
    {
      title: "Ultrafoot 26",
      statusKey: "live",
      status: "LIVE",
      summary: "Remake de um clássico jogo de futebol, agora multiplataforma: desktop e mobile, com versão free e paga.",
      description:
        "Projeto pessoal fora do escopo corporativo, já rodando online. Tem duas versões, cada uma com stack própria: desktop (Windows, Mac e Linux) em Next.js empacotado com Tauri, e mobile em C#, ambas com visualização de partida em 3D. O desktop tem pipeline de release próprio (versão e assinatura via GitHub Actions, com auto-update no cliente instalado), e as duas versões compartilham um sistema de licenças que distingue quem usa a versão free de quem tem a versão completa.",
      tags: ["Next.js", "Tauri", "TypeScript", "C#", "3D"],
      links: { live: "https://remake-ultrafoot.vercel.app", repo: "https://github.com/jovemegidio/Ultrafoot26", details: "projects/ultrafoot26.html" },
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
        details: "projects/zyntra.html",
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
      links: { live: "https://karatepl.zyntraerp.com.br", repo: null, details: "projects/akpl.html" },
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
      links: { live: null, repo: null, details: "projects/vertexflow.html" },
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
      links: { live: null, repo: "https://github.com/Gtvnv/AegisProtocol-Core", details: "projects/aegisprotocol.html" },
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
      links: { live: null, repo: "https://github.com/Gtvnv/OmniShift", details: "projects/omnishift.html" },
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
      links: { live: null, repo: null, details: "projects/panoptes.html" },
      satellite: { id: "02", slug: "argus", name: "Argus" },
    },
    {
      title: "Nidhogg",
      statusKey: "development",
      status: "IN DEVELOPMENT",
      summary: "A Java pricing and margin-protection engine that weighs the operation's real cost against external market volatility to keep the Z2A ecosystem profitable.",
      description:
        "The financial engine, controllership layer, and strategic business-rule brain of the Z2A ecosystem: it weighs the technical operation's real cost against external market volatility to protect financial health and profitability. It sets and dynamically adjusts pricing, reacting to both rising internal compute cost (reported by Panoptes) and competitor moves, with hard locks against any operation that would land on negative contribution margin, short of a deliberate exception policy. It also bridges CTO and CFO: translating telemetry and infrastructure cost into unit-economics language, and watching the macro picture to flag threats to break-even. Shielded by Hexagonal Architecture and DDD, it runs on Java 21 + Spring Boot + PostgreSQL, ingesting Panoptes's cost events asynchronously via messaging — with room to bolt on Python workers when it needs to run predictive market algorithms.",
      tags: ["Java 21", "Spring Boot 3", "Hexagonal Architecture", "DDD", "PostgreSQL"],
      links: { live: null, repo: null, details: "projects/nidhogg.html" },
      satellite: { id: "08", slug: "prometeu", name: "Prometeu" },
    },
    {
      title: "Fafnir",
      statusKey: "development",
      status: "IN DEVELOPMENT",
      summary: "The third engine of Z2A's financial trinity: an SLM suggests the tax classification, a deterministic rule decides whether it applies.",
      description:
        "Completes Z2A's financial trinity alongside Panoptes (internal cost) and Nidhogg (pricing and margin protection): Fafnir intercepts the transaction before Split Payment slices the payment, uses an SLM to suggest the correct tax classification (NCM) from the product description, and only applies the optimization if a deterministic rule engine validates it against the official tables (Sefaz, IBPT) — the same Z2A thesis applied to accounting: the AI suggests, the rule decides. Hexagonal Architecture + DDD, with the core isolated from any framework detail.",
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "SLM (Ollama)", "Hexagonal Architecture", "DDD"],
      links: { live: null, repo: null, details: "projects/fafnir.html" },
      satellite: { id: "07", slug: "atlas", name: "Atlas" },
    },
    {
      title: "Kinetix Eros",
      statusKey: "development",
      status: "IN DEVELOPMENT",
      summary: "A B2B video orchestration hub: routes every job across owned GPUs (ComfyUI), volume engines (MoneyPrinterTurbo), and hyper-realistic avatars (HeyGen) behind a single API.",
      description:
        "The video-generation SaaS platform of the Aetherium/ZenithCode ecosystem: a Java 21 Control Plane takes the B2B client's job, debits credits from the Ledger, and dispatches it to the right engine via a Strategy Pattern — serverless RunPod GPUs running ComfyUI for heavy generative art, a MoneyPrinterTurbo worker for high-volume faceless videos, or an authenticated proxy to HeyGen when the client needs a hyper-realistic spokesperson. RabbitMQ buffers the load between the API and the GPUs, with a Dead Letter Queue automatically refunding credits (and crediting the balance straight to Stripe if that month's invoice already closed) whenever an AI provider fails unrecoverably. The B2B client's experience is Psyche's job — Z2A's UX and neurometrics satellite, reused here as the codename for the interface layer that turns all that orchestration complexity into something that feels effortless.",
      tags: ["Java 21", "Spring Boot 3", "RabbitMQ", "AWS Fargate", "Terraform", "PostgreSQL"],
      links: { live: null, repo: null, details: "projects/kinetixeros.html" },
      satellite: { id: "20", slug: "psique", name: "Psyche" },
    },
    {
      title: "Heimdall",
      statusKey: "development",
      status: "IN DEVELOPMENT",
      summary: "A unified SIEM + NOC for the Z2A ecosystem: aggregates telemetry from every satellite, triggers network auto-healing, and revokes access in real time if it spots an anomaly.",
      description:
        "The infrastructure's eyes and ears: an observability and active-security middleware split into three domains. Gjallarhorn (NOC) doesn't just alert on network degradation, it acts — queuing failover and container-restart commands over RabbitMQ to Python workers, cutting mitigation time from minutes to milliseconds. The Eye of Asgard extends Zero Trust past login: it watches request behavior in real time, and if it flags an anomaly in a live session, it calls AegisProtocol over gRPC to revoke the token on the spot. And Bifrost Telemetry is the single ingestion endpoint for the whole fleet's logs — with a local SLM (Ollama) summarizing an error's root cause in plain language right on the dashboard, instead of an engineer hunting log-by-log across containers.",
      tags: ["Java 21", "Spring Boot", "Python", "RabbitMQ", "Docker", "Ollama"],
      links: { live: null, repo: null, details: "projects/heimdall.html" },
      satellite: { id: "03", slug: "dk-ops", name: "DK-Ops" },
    },
    {
      title: "Alexandria (Axios)",
      statusKey: "development",
      status: "IN DEVELOPMENT",
      summary: "A Socratic copilot for teaching programming logic: the scripted engine validates the code, a local SLM steps in only when the student gets stuck — and never hands over the answer.",
      description:
        "Born to help college friends, it turned into a study in hybrid architecture: a deterministic scripted layer (Java/Spring, Clean Architecture) controls the student's learning track and runs the exercise's hidden unit tests; when a test fails three times in a row, a Python AI orchestrator (FastAPI + Ollama) steps in as a Socratic tutor — its system prompt explicitly forbids handing over the answer, it can only ask the question that leads the student to spot their own mistake. The SLM's reply arrives token by token over a gRPC stream, masking local-inference latency, while RabbitMQ keeps the heavy lifting (compiling and testing the code in an ephemeral Docker container) off the real-time chat path. Designed to start with Programming Logic and expand into Languages and History — teaching the 'why' behind a paradigm, not just its syntax.",
      tags: ["Java 21", "Spring Boot", "Python", "FastAPI", "Angular", "gRPC", "RabbitMQ", "Ollama"],
      links: { live: null, repo: null, details: "projects/alexandria.html" },
      satellite: { id: "05", slug: "evelyn", name: "E.V.E.L.Y.N." },
    },
    {
      title: "Inari Trails",
      statusKey: "development",
      status: "IN DEVELOPMENT",
      summary: "Pokémon-Go-style tourism: users 'platinum' neighborhoods by photographing real points of interest, while local businesses pay to become a featured Stop.",
      description:
        "Turns a rigid tourist itinerary into collecting: every point of interest is a Stop with a proximity radius (PostgreSQL + PostGIS, GiST index for fast spatial queries), and each user's photo archive works like a personal Pokédex of discovered places. Splitting the archive into public and private cuts moderation cost at the root — the personal diary is instant, only what gets marked public enters the pipeline: upload via a pre-signed URL straight to S3, a worker that strips EXIF and re-encodes the image to WebP (which alone destroys any script embedded in the original file), and only then does a computer-vision API clear it for publication. A Dead Letter Queue on RabbitMQ makes sure a corrupted photo or a moderation API that's down never stalls the rest of the queue. On the business side, local shops subscribe to appear featured in auto-generated routes — monetizing the foot traffic the app already generates for free.",
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "PostGIS", "RabbitMQ", "AWS S3", "Redis"],
      links: { live: null, repo: null, details: "projects/inaritrails.html" },
      satellite: { id: "20", slug: "psique", name: "Psyche" },
    },
    {
      title: "Terminus Horizon",
      statusKey: "development",
      status: "IN DEVELOPMENT",
      summary: "A mission-critical math engine in Python: symbolically audits functions for jumps, poles, and infinite jerk before the hardware ever feels the impact.",
      description:
        "A pure Domain Service (Hexagonal Architecture, zero I/O) that uses symbolic computation — SymPy, not floating point — to mathematically prove a function is sane before it ever reaches a real actuator. SignalContinuityAnalyzer compares the one-sided limits at a critical point: if they diverge, that's a jump (physical shock); if they tend to infinity, that's a pole (catastrophic resonance). KinematicStressAnalyzer goes past acceleration and differentiates the trajectory all the way to jerk (the 3rd derivative of position) — if a deceleration is too abrupt, jerk diverges, the mathematical equivalent of a hammer blow to the gears, and the operation is aborted before the motor is ever energized. A FastAPI layer exposes these services as a Driving Adapter, with Pydantic validating the payload at the boundary (Zero Trust) before any data touches the mathematical core.",
      tags: ["Python", "SymPy", "FastAPI", "Pydantic", "NumPy", "SciPy", "Hexagonal Architecture"],
      links: { live: null, repo: null, details: "projects/terminushorizon.html" },
      satellite: { id: "06", slug: "hefesto", name: "Hefesto" },
    },
    {
      title: "Ultrafoot 26",
      statusKey: "live",
      status: "LIVE",
      summary: "A remake of a classic football game, now cross-platform: desktop and mobile, with a free and a paid tier.",
      description:
        "A personal project outside the day job, already live. It ships as two versions, each with its own stack: desktop (Windows, Mac, and Linux) built with Next.js packaged in Tauri, and mobile built in C#, both with a 3D match viewer. The desktop version has its own release pipeline (versioning and signing via GitHub Actions, with auto-update on the installed client), and both versions share a licensing system that distinguishes free users from full-version users.",
      tags: ["Next.js", "Tauri", "TypeScript", "C#", "3D"],
      links: { live: "https://remake-ultrafoot.vercel.app", repo: "https://github.com/jovemegidio/Ultrafoot26", details: "projects/ultrafoot26.html" },
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
        details: "projects/zyntra.html",
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
      links: { live: "https://karatepl.zyntraerp.com.br", repo: null, details: "projects/akpl.html" },
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
      links: { live: null, repo: null, details: "projects/vertexflow.html" },
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
      links: { live: null, repo: "https://github.com/Gtvnv/AegisProtocol-Core", details: "projects/aegisprotocol.html" },
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
      links: { live: null, repo: "https://github.com/Gtvnv/OmniShift", details: "projects/omnishift.html" },
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
      links: { live: null, repo: null, details: "projects/panoptes.html" },
      satellite: { id: "02", slug: "argus", name: "Argus" },
    },
    {
      title: "Nidhogg",
      statusKey: "development",
      status: "EN DESARROLLO",
      summary: "Motor de pricing y protección de margen en Java que cruza el costo real de la operación con la volatilidad del mercado externo para mantener la rentabilidad del ecosistema Z2A.",
      description:
        "El motor financiero, de controladoría y de reglas de negocio estratégicas del ecosistema Z2A: cruza el costo real de la operación técnica con la volatilidad del mercado externo para garantizar salud financiera y rentabilidad. Define y ajusta precios dinámicamente, reaccionando tanto al aumento del costo computacional interno (reportado por Panoptes) como a movimientos de la competencia, con trabas rígidas contra cualquier operación que resulte en margen de contribución negativo, salvo que exista una política deliberada de excepción. También funciona como puente entre CTO y CFO: traduce telemetría y costo de infraestructura a lenguaje de unit economics, y monitorea el escenario macro para alertar sobre amenazas al break-even. Blindado por Arquitectura Hexagonal y DDD, corre en Java 21 + Spring Boot + PostgreSQL, ingiriendo los eventos de costo de Panoptes de forma asíncrona vía mensajería — con espacio para acoplar workers en Python cuando necesite correr algoritmos predictivos de mercado.",
      tags: ["Java 21", "Spring Boot 3", "Arquitectura Hexagonal", "DDD", "PostgreSQL"],
      links: { live: null, repo: null, details: "projects/nidhogg.html" },
      satellite: { id: "08", slug: "prometeu", name: "Prometeo" },
    },
    {
      title: "Fafnir",
      statusKey: "development",
      status: "EN DESARROLLO",
      summary: "El tercer motor de la trinidad financiera del Z2A: un SLM sugiere la clasificación fiscal, una regla determinística decide si se aplica.",
      description:
        "Completa la trinidad financiera del Z2A junto al Panoptes (costo interno) y al Nidhogg (pricing y protección de margen): el Fafnir intercepta la transacción antes de que el Split Payment fraccione el pago, usa un SLM para sugerir la clasificación fiscal correcta (NCM) a partir de la descripción del producto, y solo aplica la optimización si un motor de reglas determinístico la valida contra las tablas oficiales (Sefaz, IBPT) — la misma tesis del Z2A aplicada a la contabilidad: la IA sugiere, la regla decide. Arquitectura Hexagonal + DDD, con el núcleo aislado de cualquier detalle de framework.",
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "SLM (Ollama)", "Arquitectura Hexagonal", "DDD"],
      links: { live: null, repo: null, details: "projects/fafnir.html" },
      satellite: { id: "07", slug: "atlas", name: "Atlas" },
    },
    {
      title: "Kinetix Eros",
      statusKey: "development",
      status: "EN DESARROLLO",
      summary: "Un hub de orquestación de video B2B: enruta cada trabajo entre GPUs propias (ComfyUI), motores de volumen (MoneyPrinterTurbo) y avatares hiperrealistas (HeyGen) detrás de una única API.",
      description:
        "La plataforma SaaS de generación de video del ecosistema Aetherium/ZenithCode: un Control Plane en Java 21 recibe el trabajo del cliente B2B, descuenta créditos del Ledger y lo despacha al motor correcto vía un patrón Strategy — GPUs serverless en RunPod corriendo ComfyUI para arte generativo pesado, un worker de MoneyPrinterTurbo para videos faceless en volumen, o un proxy autenticado hacia HeyGen cuando el cliente necesita un portavoz hiperrealista. RabbitMQ amortigua la carga entre la API y las GPUs, con una Dead Letter Queue que devuelve créditos automáticamente (y acredita el saldo directo en Stripe si la factura del mes ya cerró) cuando un proveedor de IA falla de forma irrecuperable. La experiencia del cliente B2B es responsabilidad de Psique, el satélite de UX y neurométricas del Z2A — reutilizado aquí como el nombre en clave de la capa de interfaz que traduce toda esa complejidad de orquestación en algo fluido de usar.",
      tags: ["Java 21", "Spring Boot 3", "RabbitMQ", "AWS Fargate", "Terraform", "PostgreSQL"],
      links: { live: null, repo: null, details: "projects/kinetixeros.html" },
      satellite: { id: "20", slug: "psique", name: "Psique" },
    },
    {
      title: "Heimdall",
      statusKey: "development",
      status: "EN DESARROLLO",
      summary: "Un SIEM + NOC unificado para el ecosistema Z2A: agrega la telemetría de todos los satélites, dispara auto-healing de red y revoca el acceso en tiempo real si detecta una anomalía.",
      description:
        "Los ojos y oídos de la infraestructura: un middleware de observabilidad y seguridad activa dividido en tres dominios. Gjallarhorn (NOC) no solo alerta sobre degradación de red, actúa — encola comandos de failover y reinicio de contenedores vía RabbitMQ para workers en Python, reduciendo el tiempo de mitigación de minutos a milisegundos. El Ojo de Asgard extiende el Zero Trust más allá del login: monitorea el comportamiento de las solicitudes en tiempo real y, si detecta una anomalía en una sesión activa, llama a AegisProtocol vía gRPC para revocar el token al instante. Y Bifrost Telemetry es el endpoint único de ingesta de logs de toda la flota — con una SLM local (Ollama) resumiendo la causa raíz de un error en lenguaje natural, directo en el panel, en vez de que el ingeniero tenga que cazar logs contenedor por contenedor.",
      tags: ["Java 21", "Spring Boot", "Python", "RabbitMQ", "Docker", "Ollama"],
      links: { live: null, repo: null, details: "projects/heimdall.html" },
      satellite: { id: "03", slug: "dk-ops", name: "DK-Ops" },
    },
    {
      title: "Alexandria (Axios)",
      statusKey: "development",
      status: "EN DESARROLLO",
      summary: "Un copiloto socrático para enseñar lógica de programación: el motor scripteado valida el código, una SLM local interviene solo cuando el alumno se traba — y nunca entrega la respuesta.",
      description:
        "Nació para ayudar a compañeros de la universidad y se convirtió en un estudio de arquitectura híbrida: una capa scripteada determinística (Java/Spring, Clean Architecture) controla la trayectoria de evolución del alumno y corre los tests unitarios ocultos del ejercicio; cuando un test falla tres veces seguidas, un orquestador de IA en Python (FastAPI + Ollama) entra en escena como tutor socrático — su system prompt prohíbe explícitamente dar la respuesta, solo puede hacer la pregunta que lleve al alumno a notar su propio error. La respuesta de la SLM llega token a token vía streaming gRPC, enmascarando la latencia de la inferencia local, mientras RabbitMQ aísla el procesamiento pesado (compilar y testear el código en un contenedor Docker efímero) del chat en tiempo real. Diseñado para empezar con Lógica de Programación y expandirse a Idiomas e Historia — enseñando el 'por qué' de un paradigma, no solo su sintaxis.",
      tags: ["Java 21", "Spring Boot", "Python", "FastAPI", "Angular", "gRPC", "RabbitMQ", "Ollama"],
      links: { live: null, repo: null, details: "projects/alexandria.html" },
      satellite: { id: "05", slug: "evelyn", name: "E.V.E.L.Y.N." },
    },
    {
      title: "Inari Trails",
      statusKey: "development",
      status: "EN DESARROLLO",
      summary: "Turismo estilo Pokémon Go: el usuario 'platina' barrios fotografiando puntos de interés reales, mientras comercios locales pagan para volverse un Stop destacado.",
      description:
        "Convierte un itinerario turístico rígido en colección: cada punto de interés es un Stop con radio de proximidad (PostgreSQL + PostGIS, índice GiST para consultas espaciales rápidas), y el acervo de fotos de cada usuario funciona como una Pokédex personal de lugares descubiertos. Dividir el acervo en público y privado reduce el costo de moderación de raíz — el diario personal es instantáneo, solo lo que se marca como público entra al pipeline: subida vía Pre-signed URL directo a S3, un worker que arranca el EXIF y reconvierte la imagen a WebP (lo que ya destruye cualquier script malicioso incrustado en el archivo original), y solo entonces una API de visión computacional habilita la publicación. Una Dead Letter Queue en RabbitMQ garantiza que una foto corrupta o una IA de moderación caída nunca traben el resto de la cola. Del lado de negocio, los comercios locales se suscriben para aparecer destacados en la generación automática de rutas — monetizando el flujo de peatones que la app ya genera gratis.",
      tags: ["Java 21", "Spring Boot", "PostgreSQL", "PostGIS", "RabbitMQ", "AWS S3", "Redis"],
      links: { live: null, repo: null, details: "projects/inaritrails.html" },
      satellite: { id: "20", slug: "psique", name: "Psique" },
    },
    {
      title: "Terminus Horizon",
      statusKey: "development",
      status: "EN DESARROLLO",
      summary: "Un motor matemático de misión crítica en Python: audita funciones simbólicamente para encontrar saltos, polos y Jerk infinito antes de que el hardware sienta el impacto.",
      description:
        "Un Domain Service puro (Arquitectura Hexagonal, cero I/O) que usa computación simbólica — SymPy, no punto flotante — para probar matemáticamente la sanidad de una función antes de que llegue a un actuador real. El SignalContinuityAnalyzer compara los límites laterales en un punto crítico: si divergen, es un salto (choque físico); si tienden a infinito, es un polo (resonancia catastrófica). El KinematicStressAnalyzer va más allá de la aceleración y deriva la trayectoria hasta el Jerk (la 3ª derivada de la posición) — si una desaceleración es demasiado abrupta, el Jerk diverge, el equivalente matemático de un martillazo en el engranaje, y la operación se aborta antes de que el motor sea energizado. Una API en FastAPI expone estos servicios como Driving Adapter, con Pydantic validando el payload en la frontera (Zero Trust) antes de que cualquier dato toque el núcleo matemático.",
      tags: ["Python", "SymPy", "FastAPI", "Pydantic", "NumPy", "SciPy", "Arquitectura Hexagonal"],
      links: { live: null, repo: null, details: "projects/terminushorizon.html" },
      satellite: { id: "06", slug: "hefesto", name: "Hefesto" },
    },
    {
      title: "Ultrafoot 26",
      statusKey: "live",
      status: "EN VIVO",
      summary: "Remake de un clásico juego de fútbol, ahora multiplataforma: escritorio y móvil, con versión gratuita y de pago.",
      description:
        "Proyecto personal fuera del ámbito corporativo, ya en funcionamiento. Tiene dos versiones, cada una con su propia stack: escritorio (Windows, Mac y Linux) hecho con Next.js empaquetado en Tauri, y móvil en C#, ambas con visualización de partidos en 3D. La versión de escritorio tiene su propio pipeline de lanzamiento (versión y firma vía GitHub Actions, con auto-actualización en el cliente instalado), y las dos versiones comparten un sistema de licencias que distingue entre quien usa la versión gratuita y quien tiene la versión completa.",
      tags: ["Next.js", "Tauri", "TypeScript", "C#", "3D"],
      links: { live: "https://remake-ultrafoot.vercel.app", repo: "https://github.com/jovemegidio/Ultrafoot26", details: "projects/ultrafoot26.html" },
    },
  ],
};
