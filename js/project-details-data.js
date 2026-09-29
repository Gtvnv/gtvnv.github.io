/**
 * PROJECT_DETAILS — conteúdo das páginas dedicadas de projeto (projects/*.html).
 * Uma chave por slug de projeto, dentro de cada idioma. Pra adicionar uma nova
 * página: crie o objeto aqui (nos TRÊS idiomas), copie projects/_template.html
 * (ou outro arquivo existente) pro slug novo, e aponte o campo `details` do
 * projeto correspondente em js/projects-data.js pra esse arquivo. O renderer
 * é js/project-details.js — reaproveita as classes visuais de css/zenithcode.css.
 */
const PROJECT_DETAILS = {
  "pt-BR": {
    aegisprotocol: {
      meta: {
        title: "AegisProtocol — Gustavo Vianna",
        description: "Identity Provider Zero-Trust do ecossistema ZenithCode: autenticação, tokens JWT e políticas de acesso granulares.",
      },
      backLabel: "Portfólio",
      logo: "../assets/projetos/aegisprotocol.png",
      hero: {
        eyebrow: "Security & IAM Middleware · iniciativa ZenithCode",
        title: "AegisProtocol",
        subtitle: "Identity Provider Zero-Trust: nenhuma requisição é confiável por padrão",
        summary:
          "Middleware de segurança e Identity Provider (IdP) que centraliza autenticação, emissão de tokens criptografados e políticas de acesso granulares pra todo o ecossistema ZenithCode. É a manifestação real do satélite Themis do Z2A.",
        statusNote:
          "Nota: este repositório contém uma versão antiga do AegisProtocol, mantida pública como referência de arquitetura (Zero Trust, JWT RS256, revogação via Redis). O desenvolvimento ativo segue em repositório privado, liderado pela divisão N.Ú.C.L.E.O.",
      },
      about: {
        title: "Sobre o projeto",
        body: "O Aegis Core é um middleware de segurança projetado com arquitetura Zero Trust: nenhuma requisição é confiável por padrão, nem depois do login. Ele centraliza autenticação, emite tokens JWT assinados com RSA-2048 (RS256, assinatura assimétrica) e aplica políticas de acesso granulares via ABAC/RBAC — servindo como camada de identidade pros outros microsserviços satélites do ecossistema. Distribuído sob licença MIT.",
      },
      architecture: {
        title: "Arquitetura",
        body: "Sidecar de identidade rodando sobre Spring Security 6 com uma filter chain 100% stateless: cada request é validado isoladamente, sem sessão guardada em memória. Expõe a chave pública (JWK) pra que os microsserviços satélites validem o JWT localmente, sem chamar o Aegis a cada requisição — só a emissão e a revogação passam pelo serviço central. A revogação usa uma blacklist distribuída em Redis, e o KMS é opcional: por padrão a chave fica em arquivo local, com HashiCorp Vault como alternativa (`aegis.jwt.key-source=vault`) pra ambientes que já centralizam segredos.",
      },
      stack: {
        title: "Stack técnica",
        items: ["Java 21", "Spring Boot 3.4", "Spring Security 6", "JWT (RS256)", "Redis", "PostgreSQL", "HashiCorp Vault (opcional)", "Docker"],
      },
      features: {
        title: "Recursos-chave",
        intro: "Cinco mecanismos que sustentam o modelo Zero Trust na prática.",
        items: [
          { title: "Arquitetura Zero Trust", mechanic: "Nenhuma requisição é confiável por padrão." },
          { title: "Soft Lock", mechanic: "Usuários conseguem logar, mas recursos sensíveis exigem verificação adicional baseada em claims." },
          { title: "Mitigação de ameaças", mechanic: "Rate limiting e detecção de anomalias no registro de novos usuários." },
          { title: "Revogação de token", mechanic: "Blacklist distribuída via Redis pra logout imediato em todos os dispositivos." },
          { title: "Pronto pra rotação de chaves", mechanic: "Arquitetura preparada pra trocar as chaves de assinatura sem downtime." },
        ],
      },
      endpoints: {
        title: "Endpoints principais",
        intro: "A superfície REST do Identity Provider.",
        items: [
          { name: "POST /auth/login", what: "Autenticação e emissão de JWT", role: "" },
          { name: "POST /auth/register", what: "Registro com proteção anti-spam", role: "" },
          { name: "POST /auth/refresh", what: "Renovação de sessão segura", role: "" },
          { name: "GET /auth/public-key", what: "Expõe a JWK pra microsserviços satélites validarem token sem chamar o Aegis a cada request", role: "" },
          { name: "GET /auth/consent/current-version", what: "Versão vigente dos termos exigidos no registro", role: "" },
        ],
      },
      security: {
        title: "Segurança e resiliência",
        body: "Opera sob Zero Trust: um GlobalExceptionHandler especializado evita o vazamento de metadados de infraestrutura nas respostas de erro, com mecanismos nativos contra Reflected XSS, Log Forging e validação rigorosa de claims na camada de autenticação.",
      },
      links: { repo: "https://github.com/Gtvnv/AegisProtocol-Core", live: null },
      footer: { backCta: "← Voltar ao portfólio" },
    },
    akpl: {
      meta: {
        title: "AKPL — Acesso & Financeiro — Gustavo Vianna",
        description: "Módulo de controle de acesso biométrico e cobrança automática da AKPL, em Arquitetura Hexagonal.",
      },
      backLabel: "Portfólio",
      logo: "../assets/projetos/akpl.png",
      hero: {
        eyebrow: "Módulo de Acesso & Financeiro · Arquitetura Hexagonal",
        title: "AKPL — Acesso & Financeiro",
        subtitle: "Catraca biométrica simulada + cobrança automática via PIX/Boleto",
        summary:
          "Módulo backend da AKPL que resolve dois problemas concretos: controle físico de acesso via hash biométrico e inadimplência financeira, com as regras de negócio isoladas de banco de dados e gateway de pagamento pela Arquitetura Hexagonal. É a camada backend por trás da plataforma de gestão acadêmica que já roda a Academia de Karatê Pedro Leopoldo.",
      },
      about: {
        title: "Sobre o projeto",
        body: "Resolve dois problemas concretos: o controle físico de acesso (simulação de catraca via hash biométrico, validado contra horário permitido e status financeiro \"em dia\") e a inadimplência. A arquitetura blinda o núcleo de regras de negócio de qualquer dependência externa — banco de dados, gateway de pagamento — então trocar um desses detalhes de implementação nunca exige tocar na regra.",
      },
      architecture: {
        title: "Arquitetura",
        body: "Ports & Adapters (Hexagonal) aplicado à risca: o Core não conhece framework, banco ou API externa — só interfaces (ports). A infraestrutura é quem se adapta ao domínio, nunca o contrário.",
        tree: [
          "core/",
          "├── domain/model        Aluno, RegistroAcesso, CPF, Email (Value Objects)",
          "├── domain/policies     regras isoladas, ex: PoliticaInadimplencia",
          "└── ports               contratos de entrada/saída",
          "application/",
          "├── usecases            LiberarAcessoUseCase e afins",
          "└── dtos                blindagem do domínio",
          "infrastructure/",
          "├── adapters/input      REST Controllers + MQTT (IoT)",
          "└── adapters/output     Hardware (catraca), Postgres, Asaas (pagamento)",
        ],
      },
      stack: {
        title: "Stack técnica",
        items: ["Java 21", "Spring Boot 3.4", "PostgreSQL", "OpenFeign", "Docker", "GitHub Actions"],
      },
      features: {
        title: "Recursos-chave",
        intro: "Do cadastro de aluno à catraca liberando sozinha quando o pagamento confirma.",
        items: [
          { title: "Controle de acesso", mechanic: "Validação de entrada baseada em regras de negócio: horário permitido e status financeiro \"em dia\"." },
          { title: "Gestão de alunos", mechanic: "Cadastro completo com persistência segura de hash biométrico." },
          { title: "Integração Asaas", mechanic: "Geração automática de boleto/PIX, cadastro de cliente no gateway, e liberação imediata da catraca via webhook de pagamento confirmado." },
          { title: "CI/CD com versionamento semântico", mechanic: "Conventional Commits + GitHub Actions geram release automática (fix → patch, feat → minor, BREAKING CHANGE → major)." },
        ],
      },
      endpoints: {
        title: "Endpoints principais",
        intro: "A superfície REST do módulo.",
        items: [
          { name: "POST /api/financeiro/cobranca", what: "Gera cobrança (boleto ou PIX) por CPF e valor", role: "" },
          { name: "POST /api/financeiro/webhook", what: "Recebe confirmação de pagamento do Asaas e libera o acesso", role: "" },
          { name: "POST /api/alunos", what: "Cadastra aluno com hash biométrico", role: "" },
        ],
      },
      links: { repo: "https://github.com/Gtvnv/acesso-alunos", live: "https://karatepl.zyntraerp.com.br" },
      footer: { backCta: "← Voltar ao portfólio" },
    },
    nidhogg: {
      meta: {
        title: "Nidhogg — Gustavo Vianna",
        description: "Motor de pricing e proteção de margem da trindade financeira do Z2A, em Java com Arquitetura Hexagonal e DDD.",
      },
      backLabel: "Portfólio",
      logo: "../assets/projetos/nidhogg.png",
      hero: {
        eyebrow: "Pricing & Proteção de Margem · trindade financeira do Z2A",
        title: "Nidhogg",
        subtitle: "Cruza o custo real da operação com a volatilidade do mercado externo",
        summary:
          "O motor financeiro, de controladoria e de regras de negócio estratégicas do ecossistema Z2A: define e ajusta preços dinamicamente, protege margem de contribuição e traduz telemetria de infraestrutura em unit economics pra ponte entre CTO e CFO.",
      },
      about: {
        title: "Sobre o projeto",
        body: "Reage tanto ao aumento de custo computacional interno (reportado pelo Panoptes) quanto a movimentos da concorrência, com travas rígidas contra qualquer operação que resulte em margem de contribuição negativa, a menos que exista uma política deliberada de exceção. Faz parte da trindade financeira do Z2A, ao lado do Panoptes (custo interno) e do Fafnir (elisão fiscal).",
      },
      architecture: {
        title: "Arquitetura",
        body: "Hexagonal + DDD: o domínio (MarketPositionEngine) não importa nada de Spring ou JPA, testável sem subir contexto nenhum — a infraestrutura é quem se adapta. A peça concreta já implementada é o motor de benchmarking: compara o valor interno de um subject (salário, bônus, encargo, modelo de contratação) contra a distribuição de mercado (p25/mediana/p75) e classifica abaixo, na média ou acima do mercado, dentro de uma banda de tolerância configurável — a base sobre a qual as regras de pricing e proteção de margem se apoiam.",
        tree: [
          "domain/                    núcleo, sem dependência de framework",
          "├── model                  Money, MarketBenchmark, MarketEvaluation, EvaluationHold",
          "├── service                MarketPositionEngine — a política de classificação",
          "└── port (in/out)          casos de uso + EvaluationSubjectRepository",
          "application/usecase        MarketEvaluationService, MarketDataImportService",
          "infrastructure/",
          "├── adapter.in.web         REST controllers",
          "├── adapter.out.persistence  JPA + Postgres",
          "└── adapter.out.marketdata   CsvMarketDataProvider (ingestão de survey)",
        ],
      },
      stack: {
        title: "Stack técnica",
        items: ["Java 21", "Spring Boot 3.3", "PostgreSQL", "Flyway", "DDD", "Arquitetura Hexagonal"],
      },
      features: {
        title: "Recursos-chave",
        intro: "O freio de emergência é tão importante quanto o motor de classificação em si.",
        items: [
          { title: "Freio de emergência (hold)", mechanic: "Congela qualquer classificação de um subject sob suspeita, até um operador liberar manualmente — a liberação nunca é automática." },
          { title: "Gancho com o Panoptes", mechanic: "Quando o Panoptes detecta uma anomalia (ex: burn-rate de folha fora da curva), aciona o hold automaticamente via API." },
          { title: "Ingestão de dados de mercado", mechanic: "Importa benchmarks via CSV hoje (p25/mediana/p75 por marketKey), com a porta pronta pra plugar um scraper ou API de mercado real depois, sem tocar em domínio ou controller." },
          { title: "Precisão monetária", mechanic: "PostgreSQL com BigDecimal ponta a ponta — nenhum arredondamento de float na comparação de valores." },
        ],
      },
      endpoints: {
        title: "API",
        intro: "A superfície REST do motor.",
        items: [
          { name: "POST /api/v1/subjects", what: "Registra um subject com valor interno inicial", role: "" },
          { name: "PATCH .../internal-value", what: "Atualiza o valor interno (ex: vindo do Panoptes)", role: "" },
          { name: "PUT .../market-benchmark", what: "Define o benchmark de mercado (p25/p50/p75)", role: "" },
          { name: "POST .../evaluate", what: "Classifica o valor interno contra o mercado", role: "" },
          { name: "POST .../hold", what: "Congela a avaliação do subject", role: "" },
          { name: "DELETE .../hold", what: "Libera a avaliação (ação manual de um operador)", role: "" },
        ],
      },
      links: { repo: null, live: null },
      footer: { backCta: "← Voltar ao portfólio" },
    },
    omnishift: {
      meta: {
        title: "OmniShift — Gustavo Vianna",
        description: "Motor universal de transformação de dados, em Java com Arquitetura Hexagonal e plugins via SPI.",
      },
      backLabel: "Portfólio",
      logo: "../assets/projetos/omnishift.png",
      hero: {
        eyebrow: "Universal Data Transformation Engine · iniciativa ZenithCode",
        title: "OmniShift",
        subtitle: "Converte qualquer formato de entrada em qualquer formato de saída",
        summary:
          "Middleware de alta performance que traduz qualquer formato de entrada pra um modelo canônico em memória e depois serializa no formato de saída desejado — plugar um formato novo nunca exige tocar nas regras de negócio existentes.",
        statusNote: "Liderado pela divisão P.O.N.T.E. da ZenithCode.",
      },
      about: {
        title: "Sobre o projeto",
        body: "Em vez de converter um formato direto pro outro (JSON→XML), o OmniShift traduz qualquer entrada pra uma árvore de objetos em memória (o Modelo Canônico OmniNode), e só depois serializa essa árvore pro formato de saída. REST e gRPC como entrada; JSON, XML, YAML, CSV e SQL (MySQL/PostgreSQL/Oracle/SQL Server) como saída.",
      },
      architecture: {
        title: "Arquitetura",
        body: "Multi-módulo Maven: o núcleo de domínio (omnishift-core) não depende de Spring nem Jackson, e cada formato novo entra como plugin isolado, descoberto via Java SPI em tempo de execução — nenhuma classe central precisa saber que um formato novo existe.",
        tree: [
          "omnishift-core                    modelo canônico (OmniNode), portas, orquestração — zero dependência",
          "omnishift-grpc-api                contrato gRPC (.proto) + stubs",
          "omnishift-adapter-json/xml/yaml    parsers/serializers via Jackson",
          "omnishift-adapter-csv              via Apache Commons CSV",
          "omnishift-adapter-sql              gera INSERT por dialeto (MySQL/Postgres/Oracle/SQL Server)",
          "omnishift-runtime-spring          runtime executável: expõe REST + gRPC",
        ],
      },
      stack: {
        title: "Stack técnica",
        items: ["Java 21", "Spring Boot 3.3", "gRPC", "Protobuf", "Jackson", "Maven multi-módulo"],
      },
      features: {
        title: "Recursos-chave",
        intro: "Performance e segurança tratadas como parte do design, não como afterthought.",
        items: [
          { title: "Streaming de payloads grandes", mechanic: "REST lê/escreve como stream de bytes em vez de materializar tudo em memória; gRPC ganha uma RPC bidirecional pra contornar o limite de ~4MB por mensagem." },
          { title: "Reformatação via perfil de mapeamento", mechanic: "Cliente referencia um perfil pré-configurado (X-Mapping-Profile) em vez de enviar instrução de mapeamento no corpo — a API continua 100% agnóstica a dados." },
          { title: "Segurança em profundidade", mechanic: "XXE bloqueado, limite de profundidade de aninhamento, e mitigação de CSV Injection e SQL Injection testada com payload malicioso real." },
          { title: "Observabilidade nativa", mechanic: "Métrica única (omnishift.conversions) com contagem e latência por formato de origem/destino e sucesso/erro, exposta via Prometheus." },
          { title: "API key obrigatória", mechanic: "Nenhuma requisição passa sem X-Api-Key — seguro por padrão, não \"aberto até alguém lembrar de fechar\"." },
        ],
      },
      endpoints: {
        title: "Endpoints principais",
        intro: "Uma rota central, dirigida por headers.",
        items: [
          { name: "POST /api/v1/shift", what: "Converte o payload: formato de origem/destino definidos por header (X-Source-Format/X-Target-Format)", role: "" },
          { name: "GET /actuator/health", what: "Health check — única rota sem exigência de API key", role: "" },
          { name: "GET /actuator/prometheus", what: "Métricas no formato Prometheus", role: "" },
        ],
      },
      links: { repo: "https://github.com/Gtvnv/OmniShift", live: null },
      footer: { backCta: "← Voltar ao portfólio" },
    },
    panoptes: {
      meta: {
        title: "Panoptes — Gustavo Vianna",
        description: "Ingestor de telemetria e custo em Go, o primeiro motor da trindade financeira do Z2A.",
      },
      backLabel: "Portfólio",
      logo: "../assets/projetos/panoptes.png",
      hero: {
        eyebrow: "Auditoria Interna · trindade financeira do Z2A",
        title: "Panoptes",
        subtitle: "Resolve o custo de cada evento de telemetria em tempo real",
        summary:
          "Serviço de auditoria interna que ingere telemetria operacional em alta velocidade, resolve o custo de cada evento e mantém uma trilha em série temporal pra auditar a saúde da operação e prever gargalos financeiros. É o primeiro dos três motores da trindade financeira do Z2A — os outros são o Nidhogg (mercado) e o Fafnir (elisão fiscal).",
      },
      about: {
        title: "Sobre o projeto",
        body: "Decisão consciente de arquitetura: o Panoptes não implementa gateway de API, tradução de protocolo nem autenticação Zero-Trust — isso já existe como middleware compartilhado no ecossistema Z2A. Fica magro e focado só no próprio domínio: resolver custo e detectar anomalia de consumo.",
      },
      architecture: {
        title: "Arquitetura",
        body: "Hexagonal (Ports & Adapters) em Go, com contratos gRPC como fonte da verdade (o código é gerado a partir do .proto via buf). Cada evento de telemetria resolve seu custo numa de três bases: reported (quem envia já sabe o custo), converted (existe uma regra de conversão métrica→custo cadastrada) ou estimated (fallback configurável, com alarme de baixa confiança).",
        tree: [
          "api/proto/                     contratos gRPC (fonte da verdade)",
          "internal/domain/               entidades e regras de negócio puras",
          "internal/application/          casos de uso, orquestram portas",
          "internal/adapters/inbound/     gRPC + scheduler (tickers)",
          "internal/adapters/outbound/    TimescaleDB, exportação pro Nidhogg, notificação de anomalia",
        ],
      },
      stack: {
        title: "Stack técnica",
        items: ["Go", "gRPC", "TimescaleDB", "PostgreSQL", "Event-Driven"],
      },
      features: {
        title: "Recursos-chave",
        intro: "Telemetria que já nasce como métrica financeira.",
        items: [
          { title: "Burn rate por hora", mechanic: "Continuous Aggregate do TimescaleDB: rollup por source+moeda, combinando dado materializado com ingestão em tempo real." },
          { title: "Exportação automática pro Nidhogg", mechanic: "Roda em background: consolida o custo médio por evento e envia via PATCH pro Nidhogg, sem esperar polling." },
          { title: "Detecção de anomalia de consumo", mechanic: "Compara o bucket mais recente com a baseline das últimas horas; um spike acima do limite trava vendas do produto até liberação manual." },
          { title: "Health check real", mechanic: "Reflete a conectividade de verdade com o banco (checada a cada 10s), não só se o processo está de pé." },
        ],
      },
      endpoints: {
        title: "Serviços gRPC",
        intro: "A superfície do serviço, toda em gRPC.",
        items: [
          { name: "TelemetryIngestService", what: "Ingest / IngestStream — ingestão de eventos, unária ou em streaming pra alto throughput", role: "" },
          { name: "PricingAdminService", what: "CRUD das regras de conversão métrica → custo", role: "" },
          { name: "BurnRateService", what: "GetBurnRate — consulta o burn rate consolidado, filtrável por source e intervalo", role: "" },
        ],
      },
      links: { repo: null, live: null },
      footer: { backCta: "← Voltar ao portfólio" },
    },
    vertexflow: {
      meta: {
        title: "VertexFlow — Gustavo Vianna",
        description: "Internal Developer Platform que transforma um Spec-Kit YAML num microsserviço Go pronto — implementação de referência do Z2A.",
      },
      backLabel: "Portfólio",
      logo: "../assets/projetos/vertexflow.png",
      hero: {
        eyebrow: "Internal Developer Platform · implementação de referência do Z2A",
        title: "VertexFlow",
        subtitle: "De um Spec-Kit YAML a um microsserviço Go pronto — sem a IA nunca escrever código direto",
        summary:
          "IDP que lê um Spec-Kit YAML e gera um microsserviço Hexagonal em Go que compila, passa no go vet e roda, com o núcleo do Use Case vazio esperando a regra de negócio. Por baixo do nome comercial, o módulo Go e todo o vocabulário (satélites, \"a IA sugere; a regra decide\") ainda usam o nome original z2a-idp — é a implementação de referência do Z2A.",
        statusNote: "340 funções de teste em 32 pacotes, go build/go vet/gofmt limpos nesta revisão. Sem dependências externas — stdlib pura, tanto no gerador quanto no serviço gerado.",
      },
      about: {
        title: "Sobre o projeto",
        body: "Em volta do gerador (M1) cresceu um funil completo de ~13 gates determinísticos — arquitetura, segurança, LGPD, FinOps, observabilidade, infraestrutura — mais uma camada de agentes (EVELYN, Prometeu, Quíron) sempre engaiolados por eles. Filosofia central: a IA sugere, a regra decide. A EVELYN (SLM local) traduz intenção em linguagem natural pra YAML, mas se alucinar, o YAML é rejeitado e o erro realimenta o modelo — a IA nunca escreve código nem decide sozinha.",
      },
      architecture: {
        title: "Como funciona (o funil)",
        body: "Um pipeline linear e determinístico, onde cada etapa só passa adiante o que já foi validado:",
        tree: [
          "intenção (linguagem natural)  [opcional]",
          "  └─ EVELYN/SLM + RAG          Ollama + few-shot → YAML (com autocorreção)",
          "YAML (Spec-Kit)",
          "  └─ parser + Anticorrupção    decode + Validate() — YAML inválido é rejeitado aqui",
          "SpecKitConfig 100% válido",
          "  └─ Tribunal (opcional)       Prometeu estressa os requisitos antes de gerar",
          "  └─ generator                 text/template + registry, gofmt embutido",
          "projeto Hexagonal em Go (miolo vazio)",
          "  └─ Fábrica (opcional)        agentes preenchem o Use Case, em loop com a jaula",
          "  └─ jaula                     go build+test em container efêmero (rede off)",
          "  └─ gates estáticos           apagão · sigma · arch · secops · opagate · oráculo · árgus",
          "serviço entregue",
        ],
      },
      stack: {
        title: "Stack técnica",
        items: ["Go", "YAML (Spec-Kit)", "gRPC", "Docker", "Pulumi", "Ollama (SLM local)"],
      },
      features: {
        title: "Recursos-chave",
        intro: "Cinco mecanismos que provam a tese na prática, não só no discurso.",
        items: [
          { title: "Teste do Apagão", mechanic: "Todo serviço gerado nasce com um teste que roda o caminho crítico com 100% da IA offline. Se depender de um componente probabilístico pra completar, o build quebra." },
          { title: "Jaula de segurança", mechanic: "Compila e testa o projeto gerado isolado num container efêmero, sem rede, com limites de memória/CPU — a imagem base vem fixada por digest, supply chain imutável mesmo sem configuração." },
          { title: "Réplicas efêmeras (melhor-de-N)", mechanic: "--agents N roda N tentativas isoladas em paralelo; só os arquivos da vencedora voltam ao projeto, e todas as cópias somem depois." },
          { title: "Interop provada por teste com o AegisProtocol", mechanic: "O JWT gerado pro serviço Zero-Trust nunca compartilha código com a referência — a prova de que não divergiram é um teste que assina um token real e roda a jaula sobre o serviço gerado." },
          { title: "Analyze: diagnóstico pra repositório existente", mechanic: "Aponta os mesmos gates determinísticos pra um repo Go que o VertexFlow nunca gerou, e devolve um plano de melhoria — zero chamada de rede, zero LLM." },
        ],
      },
      endpoints: {
        title: "Comandos principais",
        intro: "A CLI é a interface — sem servidor, sem API.",
        items: [
          { name: "z2a-cli --spec spec.yaml --out ./out", what: "Gera o serviço a partir do Spec-Kit", role: "" },
          { name: "z2a-cli --spec spec.yaml --out ./out --verify", what: "Gera e roda todos os gates determinísticos", role: "" },
          { name: "z2a-cli --intent \"...\" --model llama3", what: "Traduz intenção em linguagem natural pra Spec-Kit via EVELYN", role: "" },
          { name: "z2a-cli --spec spec.yaml --fill --sandbox docker", what: "Fábrica Autônoma: agente preenche o Use Case, validado em loop pela jaula", role: "" },
          { name: "z2a-cli analyze ./repo-existente", what: "Roda os gates determinísticos sobre um repositório Go já existente", role: "" },
        ],
      },
      links: { repo: null, live: null },
      footer: { backCta: "← Voltar ao portfólio" },
    },
    zyntra: {
      meta: {
        title: "Zyntra ERP — Gustavo Vianna",
        description: "ERP SaaS industrial multi-tenant em produção real: vendas, compras, PCP, financeiro, RH e emissão fiscal numa única plataforma.",
      },
      backLabel: "Portfólio",
      logo: "../assets/projetos/zyntra.png",
      hero: {
        eyebrow: "ERP SaaS Industrial · em produção real",
        title: "Zyntra ERP",
        subtitle: "Multi-tenant, do pedido de venda à emissão fiscal, numa stack sem framework de frontend",
        summary:
          "Plataforma ERP SaaS completa e em produção pra indústrias e empresas de médio porte: cobre todo o ciclo operacional, do pedido de venda à NF-e, do chão de fábrica ao financeiro, numa única plataforma multi-tenant. Em produção ativa com clientes reais desde janeiro de 2026.",
      },
      about: {
        title: "Sobre o projeto",
        body: "85+ páginas de frontend em HTML/CSS/JS vanilla — sem framework, por decisão de performance — cobrindo 11 módulos: dashboard executivo, vendas, compras, PCP, financeiro, RH, NF-e/NFS-e, estoque, clientes, logística e mais de 50 categorias de configuração por tenant.",
      },
      architecture: {
        title: "Arquitetura multi-tenant",
        body: "Isolamento por empresa com JWT + refresh tokens e ACL granular por módulo, todo contexto de tenant extraído do próprio JWT a cada requisição. Deploy automatizado pra VPS via PM2, com Nginx como reverse proxy e Redis pra rate limiting e cache de sessão.",
        tree: [
          "empresas_tenant          plano, trial de 14 dias, status",
          "usuarios_empresas        vínculo N:N usuário ↔ empresa",
          "middleware/empresa.js    contexto de tenant extraído do JWT por requisição",
          "JWT + refresh tokens     autenticação com rastreamento completo de sessão",
          "ACL granular             permissões por módulo e função",
        ],
      },
      stack: {
        title: "Stack técnica",
        items: ["Node.js 18", "Express 4", "MySQL 8", "Socket.IO 4", "PM2", "Redis", "PWA", "Capacitor (Android)"],
      },
      features: {
        title: "Recursos-chave",
        intro: "Onze módulos, mas cinco recursos que mais diferenciam a plataforma.",
        items: [
          { title: "Zyntra Teams", mechanic: "Chat corporativo embutido em Socket.IO, com a Axios (Bob) como assistente de suporte 24/7 — canais, DMs, áudio, arquivos, indicador de digitação em tempo real." },
          { title: "Integração fiscal completa", mechanic: "NF-e/NFS-e via SEFAZ, CNAB 240 remessa/retorno, PIX e boleto, tudo em produção real." },
          { title: "36 automações via n8n", mechanic: "Cobranças automáticas, projeção de fluxo de caixa, alertas de estoque crítico, auditoria de anomalias e relatórios diários, todos com dashboard, retry e log." },
          { title: "72+ relatórios", mechanic: "Vendas, financeiro, PCP, NF-e, faturamento, compras e RH, cada módulo com sua central de relatórios." },
          { title: "App Android nativo", mechanic: "Via Capacitor, com splash profissional, ícones adaptativos e push notifications." },
        ],
      },
      security: {
        title: "Segurança",
        body: "JWT com refresh tokens e rotação automática, bcrypt pra senhas, CSRF tokens, rate limiting via Redis, sanitização contra XSS, criptografia de PII pra conformidade LGPD, e audit trail completo — toda ação relevante fica registrada.",
      },
      links: { repo: null, live: "https://zyntraerp.com.br" },
      footer: { backCta: "← Voltar ao portfólio" },
    },
    fafnir: {
      meta: {
        title: "Fafnir — Gustavo Vianna",
        description: "Motor de elisão fiscal via SLM: intercepta a transação antes do Split Payment, com um motor de regras determinístico decidindo a última palavra.",
      },
      backLabel: "Portfólio",
      logo: "../assets/projetos/fafnir.png",
      hero: {
        eyebrow: "Elisão Fiscal via SLM · trindade financeira do Z2A",
        title: "Fafnir",
        subtitle: "Intercepta a transação antes do Split Payment fatiar o pagamento errado",
        summary:
          "O terceiro motor da trindade financeira do Z2A: usa um SLM pra sugerir a classificação fiscal correta (NCM) de um produto a partir da descrição, mas só aplica a otimização se um motor de regras determinístico validar a sugestão contra as tabelas oficiais (Sefaz, IBPT). Nomeado em referência ao dragão da mitologia nórdica que protege ferozmente seu tesouro.",
        statusNote: "Ainda em fase de design — arquitetura desenhada, implementação não iniciada.",
      },
      about: {
        title: "Sobre o projeto",
        body: "Nasceu de um problema concreto: gateways de Split Payment frequentemente cobram imposto errado porque não têm o contexto exato do produto, só o valor bruto da transação — bitributação e perda de isenções (como produtos monofásicos de PIS/COFINS) são comuns. O Fafnir resolve isso no momento da transação, não na apuração mensal: aplica o conceito de Shift-Left (como em segurança) pra contabilidade, corrigindo a classificação fiscal antes do dinheiro ser fatiado.",
      },
      architecture: {
        title: "Arquitetura",
        body: "Hexagonal + DDD: o núcleo (TaxOptimizationService) não sabe se está processando uma API REST, um evento de mensageria ou um XML de nota fiscal — só se importa com a regra de negócio. Um pipeline de 4 etapas, cada uma só passando adiante o que já foi validado:",
        tree: [
          "1. Ingestão e sanitização     normaliza o payload (pré-faturamento ou XML de NF-e)",
          "2. Enriquecimento via SLM     modelo sugere NCM + confidence_score a partir da descrição",
          "3. Validação determinística   abaixo do limiar, descarta; acima, cruza com Sefaz/IBPT",
          "4. Orquestração do split      calcula a carga tributária real e chama o Gateway de Pagamento",
        ],
      },
      stack: {
        title: "Stack técnica",
        items: ["Java 21", "Spring Boot", "PostgreSQL", "SLM (Llama 3 8B / Phi-3)", "Ollama", "QLoRA (Unsloth)"],
      },
      features: {
        title: "Recursos-chave",
        intro: "A IA sugere; a regra decide — a mesma tese do Z2A, aplicada à contabilidade.",
        items: [
          { title: "Elisão, não evasão", mechanic: "O SLM nunca decide sozinho: abaixo de um limiar de confiança, a sugestão é descartada e o NCM original é mantido." },
          { title: "Fine-tuning local, serving na nuvem", mechanic: "QLoRA treina o modelo numa GPU doméstica (12GB de VRAM já bastam pra um Llama 3 8B); o resultado exportado em GGUF roda via Ollama numa instância cloud sem GPU." },
          { title: "Dataset com LGPD desde a ingestão", mechanic: "O pipeline de ETL descarta as tags de cliente, fornecedor e valores totais dos XMLs de nota fiscal antes de qualquer dado chegar perto do ambiente de treinamento." },
          { title: "Ground truth por consenso", mechanic: "Quando uma descrição de produto tem NCMs divergentes no histórico, o pipeline usa a classificação majoritária e descarta as exceções como ruído, não como verdade." },
          { title: "Motor de regras como policy enforcement point", mechanic: "Mesmo raciocínio do Zero Trust: a carga tributária não é confiável até o motor determinístico validar a regra do estado/governo." },
        ],
      },
      security: {
        title: "Elisão vs. evasão: a fronteira jurídica",
        body: "Classificar um produto corretamente pra aproveitar uma isenção é elisão fiscal — 100% legal. O risco técnico é que modelos de linguagem são probabilísticos: se o SLM classificar errado pra otimizar o imposto, isso pode ser interpretado como evasão fiscal. Por isso o SLM nunca tem a palavra final — ele funciona como um oráculo que sugere, e a decisão de aplicar a alíquota sempre passa por um motor de regras determinístico.",
      },
      links: { repo: null, live: null },
      footer: { backCta: "← Voltar ao portfólio" },
    },
    ultrafoot26: {
      meta: {
        title: "Ultrafoot 26 — Gustavo Vianna",
        description: "Management + Tycoon + Roguelike: remake de um clássico jogo de futebol com gestão de crise de verdade.",
      },
      backLabel: "Portfólio",
      logo: "../assets/projetos/ultrafoot26.png",
      hero: {
        eyebrow: "Management + Tycoon + Roguelike · remake de um clássico",
        title: "Ultrafoot 26",
        subtitle: "Não é mais um gerenciador de planilhas: é gestão de crise de um clube de futebol de verdade",
        summary:
          "Remake de um clássico jogo de futebol que funde a jogabilidade direta de um Management com a profundidade de infraestrutura e crise de um Tycoon. O jogador assume não só o papel de técnico, mas de gestor: bastidores políticos, psicologia do elenco, segurança de dados e as pressões reais do futebol moderno.",
        statusNote: "Já rodando online — desktop (Windows/Mac/Linux) e mobile, com versão free e paga.",
      },
      about: {
        title: "Sobre o projeto",
        body: "O MVP prioriza um core sólido antes de qualquer complexidade: motor de partidas com calendário FIFA real, sistema de sócio-torcedor (a receita flutua com a moral do time), fator casa/fora com modificadores mentais por idade do jogador, e scouting básico. A complexidade de Tycoon e os eventos aleatórios entram depois, em cima de uma base testada — a arquitetura evita processamento pesado (sem motor 3D de física de partida) e usa simulação matemática simplificada pros times controlados pela máquina.",
      },
      architecture: {
        title: "Arquitetura",
        body: "Hexagonal + DDD isola o motor do jogo (as regras de negócio) da interface: o cálculo de uma partida e os modificadores de atributo nunca precisam abrir a tela pra serem testados. Efeitos de status (traumas, moral, pressão de patrocínio) são modelados como uma lista de modificadores na entidade Jogador — o motor da partida só soma os atributos base e subtrai os ativos, sem saber a regra de negócio por trás de cada um. Eventos de domínio conectam módulos (marketing, saúde, moral) sem acoplar o código entre eles.",
        tree: [
          "Frontend desktop     Tauri + TypeScript — Windows, Mac, Linux",
          "Frontend mobile      C# — versão nativa",
          "Motor do jogo        Java 21 + Spring Boot, orientado a eventos",
          "Banco de dados       PostgreSQL — jogadores, histórico, cláusulas contratuais",
        ],
      },
      stack: {
        title: "Stack técnica",
        items: ["Next.js", "Tauri", "TypeScript", "C#", "Java 21", "Spring Boot", "PostgreSQL"],
      },
      features: {
        title: "Mecânicas de destaque",
        intro: "Cinco sistemas que fogem do lugar-comum dos gerenciadores de futebol.",
        items: [
          { title: "Traumas e virtudes persistentes", mechanic: "Um \"Maracanaço\" vira uma condição fixa no perfil dos jogadores envolvidos — um debuff de -15% que só sai com uma conquista específica, não com o tempo passando." },
          { title: "Fator geográfico", mechanic: "Jogar em altitude aplica um multiplicador real de consumo de estamina, forçando rodízio no elenco ou compra de consumíveis." },
          { title: "Guerra de dados entre clubes", mechanic: "Se a infraestrutura de segurança do clube for fraca, times rivais podem interceptar os relatórios dos seus olheiros — a mesma lógica de Zero Trust aplicada à espionagem esportiva." },
          { title: "Panelinhas no vestiário", mechanic: "O motor identifica afinidades (nacionalidade, idade, clube de origem) e forma grupos; punir o líder de um grupo derruba a moral de todos ao redor dele." },
          { title: "Marketing de risco", mechanic: "Campanhas agressivas injetam verba rápido, mas criam cláusulas de desempenho — quebrar a expectativa dobra a pressão da torcida e pode romper patrocínios." },
        ],
      },
      endpoints: {
        title: "Roadmap",
        intro: "MVP primeiro, complexidade depois — pra não sofrer de feature creep.",
        items: [
          { name: "Fase 1 — Core (MVP)", what: "Motor de partidas, calendário FIFA, sócio-torcedor, fator casa/fora, scouting básico", role: "" },
          { name: "Fase 2 — Tycoon", what: "Infraestrutura do estádio, segurança privada, fator geográfico/altitude", role: "" },
          { name: "Fase 3 — Fator humano", what: "Traumas e virtudes, eventos de crise, panelinhas de vestiário", role: "" },
          { name: "Fase 4 — Futebol moderno", what: "Transição associação→SAF, guerra de dados, contratos tóxicos, banco híbrido real+procedural", role: "" },
        ],
      },
      links: { repo: "https://github.com/jovemegidio/Ultrafoot26", live: "https://remake-ultrafoot.vercel.app" },
      footer: { backCta: "← Voltar ao portfólio" },
    },
  },
  en: {
    aegisprotocol: {
      meta: {
        title: "AegisProtocol — Gustavo Vianna",
        description: "Zero-Trust Identity Provider for the ZenithCode ecosystem: authentication, JWT tokens, and granular access policies.",
      },
      backLabel: "Portfolio",
      logo: "../assets/projetos/aegisprotocol.png",
      hero: {
        eyebrow: "Security & IAM Middleware · a ZenithCode initiative",
        title: "AegisProtocol",
        subtitle: "A Zero-Trust Identity Provider: no request is trusted by default",
        summary:
          "Security middleware and Identity Provider (IdP) that centralizes authentication, encrypted token issuance, and granular access policies for the whole ZenithCode ecosystem. It's the real-world manifestation of Z2A's Themis satellite.",
        statusNote:
          "Note: this repository holds an older version of AegisProtocol, kept public as an architecture reference (Zero Trust, JWT RS256, Redis-based revocation). Active development continues in a private repository, led by the N.Ú.C.L.E.O. division.",
      },
      about: {
        title: "About the project",
        body: "Aegis Core is a security middleware built on Zero-Trust architecture: no request is trusted by default, not even after login. It centralizes authentication, issues JWTs signed with RSA-2048 (RS256, asymmetric signing), and enforces granular access policies via ABAC/RBAC — serving as the identity layer for the ecosystem's other satellite microservices. Distributed under the MIT license.",
      },
      architecture: {
        title: "Architecture",
        body: "An identity sidecar running on Spring Security 6 with a fully stateless filter chain: every request is validated independently, no session kept in memory. It exposes its public key (JWK) so satellite microservices can validate the JWT locally, without calling Aegis on every request — only issuance and revocation go through the central service. Revocation uses a distributed blacklist in Redis, and the KMS is optional: by default the key lives in a local file, with HashiCorp Vault as an alternative (`aegis.jwt.key-source=vault`) for environments that already centralize secrets.",
      },
      stack: {
        title: "Tech stack",
        items: ["Java 21", "Spring Boot 3.4", "Spring Security 6", "JWT (RS256)", "Redis", "PostgreSQL", "HashiCorp Vault (optional)", "Docker"],
      },
      features: {
        title: "Key features",
        intro: "Five mechanisms that back the Zero-Trust model in practice.",
        items: [
          { title: "Zero-Trust architecture", mechanic: "No request is trusted by default." },
          { title: "Soft lock", mechanic: "Users can log in, but sensitive resources require additional claim-based verification." },
          { title: "Threat mitigation", mechanic: "Rate limiting and anomaly detection on registration." },
          { title: "Token revocation", mechanic: "Distributed blacklist via Redis for immediate logout across all devices." },
          { title: "Key-rotation ready", mechanic: "Architecture prepared to rotate signing keys without downtime." },
        ],
      },
      endpoints: {
        title: "Main endpoints",
        intro: "The Identity Provider's REST surface.",
        items: [
          { name: "POST /auth/login", what: "Authentication and JWT issuance", role: "" },
          { name: "POST /auth/register", what: "Registration with anti-spam protection", role: "" },
          { name: "POST /auth/refresh", what: "Secure session renewal", role: "" },
          { name: "GET /auth/public-key", what: "Exposes the JWK so satellite microservices can validate tokens without calling Aegis on every request", role: "" },
          { name: "GET /auth/consent/current-version", what: "Current version of the terms required at registration", role: "" },
        ],
      },
      security: {
        title: "Security & resilience",
        body: "Runs under Zero Trust: a specialized GlobalExceptionHandler prevents infrastructure metadata from leaking in error responses, with native mitigations against Reflected XSS, log forging, and strict claim validation at the authentication layer.",
      },
      links: { repo: "https://github.com/Gtvnv/AegisProtocol-Core", live: null },
      footer: { backCta: "← Back to the portfolio" },
    },
    akpl: {
      meta: {
        title: "AKPL — Access & Billing — Gustavo Vianna",
        description: "AKPL's biometric access-control and automatic billing module, built with Hexagonal Architecture.",
      },
      backLabel: "Portfolio",
      logo: "../assets/projetos/akpl.png",
      hero: {
        eyebrow: "Access & Billing Module · Hexagonal Architecture",
        title: "AKPL — Access & Billing",
        subtitle: "Simulated biometric turnstile + automatic PIX/invoice billing",
        summary:
          "AKPL's backend module that solves two concrete problems: physical access control via biometric hash and payment delinquency, with business rules isolated from the database and payment gateway by Hexagonal Architecture. It's the backend layer behind the academic-management platform already running Academia de Karatê Pedro Leopoldo.",
      },
      about: {
        title: "About the project",
        body: "Solves two concrete problems: physical access control (a simulated turnstile via biometric hash, validated against allowed time windows and \"current\" payment status) and delinquency. The architecture shields the core business rules from any external dependency — database, payment gateway — so swapping one of those implementation details never requires touching the rule.",
      },
      architecture: {
        title: "Architecture",
        body: "Ports & Adapters (Hexagonal) applied strictly: the Core knows nothing about frameworks, databases, or external APIs — only interfaces (ports). Infrastructure adapts to the domain, never the other way around.",
        tree: [
          "core/",
          "├── domain/model        Aluno, RegistroAcesso, CPF, Email (Value Objects)",
          "├── domain/policies     isolated rules, e.g. PoliticaInadimplencia",
          "└── ports               input/output contracts",
          "application/",
          "├── usecases            LiberarAcessoUseCase and friends",
          "└── dtos                domain shielding",
          "infrastructure/",
          "├── adapters/input      REST Controllers + MQTT (IoT)",
          "└── adapters/output     Hardware (turnstile), Postgres, Asaas (payments)",
        ],
      },
      stack: {
        title: "Tech stack",
        items: ["Java 21", "Spring Boot 3.4", "PostgreSQL", "OpenFeign", "Docker", "GitHub Actions"],
      },
      features: {
        title: "Key features",
        intro: "From student registration to the turnstile unlocking itself once payment clears.",
        items: [
          { title: "Access control", mechanic: "Entry validation based on business rules: allowed time window and \"current\" payment status." },
          { title: "Student management", mechanic: "Full registration with secure biometric-hash persistence." },
          { title: "Asaas integration", mechanic: "Automatic invoice/PIX generation, customer registration at the gateway, and immediate turnstile unlock via payment-confirmed webhook." },
          { title: "CI/CD with semantic versioning", mechanic: "Conventional Commits + GitHub Actions generate automatic releases (fix → patch, feat → minor, BREAKING CHANGE → major)." },
        ],
      },
      endpoints: {
        title: "Main endpoints",
        intro: "The module's REST surface.",
        items: [
          { name: "POST /api/financeiro/cobranca", what: "Generates a charge (invoice or PIX) by CPF and amount", role: "" },
          { name: "POST /api/financeiro/webhook", what: "Receives Asaas's payment confirmation and unlocks access", role: "" },
          { name: "POST /api/alunos", what: "Registers a student with a biometric hash", role: "" },
        ],
      },
      links: { repo: "https://github.com/Gtvnv/acesso-alunos", live: "https://karatepl.zyntraerp.com.br" },
      footer: { backCta: "← Back to the portfolio" },
    },
    nidhogg: {
      meta: {
        title: "Nidhogg — Gustavo Vianna",
        description: "The pricing and margin-protection engine in Z2A's financial trinity, built in Java with Hexagonal Architecture and DDD.",
      },
      backLabel: "Portfolio",
      logo: "../assets/projetos/nidhogg.png",
      hero: {
        eyebrow: "Pricing & Margin Protection · Z2A's financial trinity",
        title: "Nidhogg",
        subtitle: "Weighs the operation's real cost against external market volatility",
        summary:
          "The financial engine, controllership layer, and strategic business-rule brain of the Z2A ecosystem: it sets and dynamically adjusts pricing, protects contribution margin, and translates infrastructure telemetry into unit economics as a bridge between CTO and CFO.",
      },
      about: {
        title: "About the project",
        body: "Reacts to both rising internal compute cost (reported by Panoptes) and competitor moves, with hard locks against any operation that would land on negative contribution margin, short of a deliberate exception policy. Part of Z2A's financial trinity, alongside Panoptes (internal cost) and Fafnir (tax planning).",
      },
      architecture: {
        title: "Architecture",
        body: "Hexagonal + DDD: the domain (MarketPositionEngine) imports nothing from Spring or JPA, testable without spinning up any context — infrastructure adapts to it. The piece already implemented is the benchmarking engine: it compares a subject's internal value (salary, bonus, payroll charge, hiring model) against the market distribution (p25/median/p75) and classifies it below, at, or above market, within a configurable tolerance band — the foundation the pricing and margin-protection rules build on.",
        tree: [
          "domain/                    core, no framework dependency",
          "├── model                  Money, MarketBenchmark, MarketEvaluation, EvaluationHold",
          "├── service                MarketPositionEngine — the classification policy",
          "└── port (in/out)          use cases + EvaluationSubjectRepository",
          "application/usecase        MarketEvaluationService, MarketDataImportService",
          "infrastructure/",
          "├── adapter.in.web         REST controllers",
          "├── adapter.out.persistence  JPA + Postgres",
          "└── adapter.out.marketdata   CsvMarketDataProvider (survey ingestion)",
        ],
      },
      stack: {
        title: "Tech stack",
        items: ["Java 21", "Spring Boot 3.3", "PostgreSQL", "Flyway", "DDD", "Hexagonal Architecture"],
      },
      features: {
        title: "Key features",
        intro: "The emergency brake matters as much as the classification engine itself.",
        items: [
          { title: "Emergency brake (hold)", mechanic: "Freezes any classification for a subject under suspicion, until an operator releases it manually — release is never automatic." },
          { title: "Hook with Panoptes", mechanic: "When Panoptes detects an anomaly (e.g. payroll burn rate off the curve), it triggers the hold automatically via API." },
          { title: "Market data ingestion", mechanic: "Imports benchmarks via CSV today (p25/median/p75 by marketKey), with the port ready to plug in a scraper or a real market API later, without touching domain or controller." },
          { title: "Monetary precision", mechanic: "PostgreSQL with BigDecimal end to end — no float rounding in value comparisons." },
        ],
      },
      endpoints: {
        title: "API",
        intro: "The engine's REST surface.",
        items: [
          { name: "POST /api/v1/subjects", what: "Registers a subject with an initial internal value", role: "" },
          { name: "PATCH .../internal-value", what: "Updates the internal value (e.g. coming from Panoptes)", role: "" },
          { name: "PUT .../market-benchmark", what: "Sets the market benchmark (p25/p50/p75)", role: "" },
          { name: "POST .../evaluate", what: "Classifies the internal value against the market", role: "" },
          { name: "POST .../hold", what: "Freezes the subject's evaluation", role: "" },
          { name: "DELETE .../hold", what: "Releases the evaluation (a manual operator action)", role: "" },
        ],
      },
      links: { repo: null, live: null },
      footer: { backCta: "← Back to the portfolio" },
    },
    omnishift: {
      meta: {
        title: "OmniShift — Gustavo Vianna",
        description: "A universal data transformation engine in Java, built with Hexagonal Architecture and SPI-based plugins.",
      },
      backLabel: "Portfolio",
      logo: "../assets/projetos/omnishift.png",
      hero: {
        eyebrow: "Universal Data Transformation Engine · a ZenithCode initiative",
        title: "OmniShift",
        subtitle: "Converts any input format into any output format",
        summary:
          "High-performance middleware that translates any input format into an in-memory canonical model and then serializes it into the desired output format — plugging in a new format never requires touching existing business rules.",
        statusNote: "Led by ZenithCode's P.O.N.T.E. division.",
      },
      about: {
        title: "About the project",
        body: "Instead of converting one format directly into another (JSON→XML), OmniShift translates any input into an in-memory object tree (the OmniNode canonical model), then serializes that tree into the output format. REST and gRPC as input; JSON, XML, YAML, CSV, and SQL (MySQL/PostgreSQL/Oracle/SQL Server) as output.",
      },
      architecture: {
        title: "Architecture",
        body: "Multi-module Maven: the domain core (omnishift-core) depends on neither Spring nor Jackson, and each new format enters as an isolated plugin, discovered via Java SPI at runtime — no central class needs to know a new format exists.",
        tree: [
          "omnishift-core                    canonical model (OmniNode), ports, orchestration — zero dependencies",
          "omnishift-grpc-api                gRPC contract (.proto) + stubs",
          "omnishift-adapter-json/xml/yaml    parsers/serializers via Jackson",
          "omnishift-adapter-csv              via Apache Commons CSV",
          "omnishift-adapter-sql              generates INSERT per dialect (MySQL/Postgres/Oracle/SQL Server)",
          "omnishift-runtime-spring          executable runtime: exposes REST + gRPC",
        ],
      },
      stack: {
        title: "Tech stack",
        items: ["Java 21", "Spring Boot 3.3", "gRPC", "Protobuf", "Jackson", "Multi-module Maven"],
      },
      features: {
        title: "Key features",
        intro: "Performance and security treated as part of the design, not an afterthought.",
        items: [
          { title: "Streaming large payloads", mechanic: "REST reads/writes as a byte stream instead of materializing everything in memory; gRPC gets a bidirectional RPC to work around the ~4MB per-message limit." },
          { title: "Reshaping via mapping profile", mechanic: "The client references a pre-configured profile (X-Mapping-Profile) instead of sending mapping instructions in the body — the API stays 100% data-agnostic." },
          { title: "Defense in depth", mechanic: "XXE blocked, nesting-depth limit enforced, and CSV Injection and SQL Injection mitigations tested with real malicious payloads." },
          { title: "Native observability", mechanic: "A single metric (omnishift.conversions) with count and latency by source/target format and success/error, exposed via Prometheus." },
          { title: "Mandatory API key", mechanic: "No request gets through without X-Api-Key — secure by default, not \"open until someone remembers to lock it down\"." },
        ],
      },
      endpoints: {
        title: "Main endpoints",
        intro: "One central route, driven by headers.",
        items: [
          { name: "POST /api/v1/shift", what: "Converts the payload: source/target format set via header (X-Source-Format/X-Target-Format)", role: "" },
          { name: "GET /actuator/health", what: "Health check — the only route exempt from the API key requirement", role: "" },
          { name: "GET /actuator/prometheus", what: "Metrics in Prometheus format", role: "" },
        ],
      },
      links: { repo: "https://github.com/Gtvnv/OmniShift", live: null },
      footer: { backCta: "← Back to the portfolio" },
    },
    panoptes: {
      meta: {
        title: "Panoptes — Gustavo Vianna",
        description: "A telemetry and cost ingestor in Go, the first engine in Z2A's financial trinity.",
      },
      backLabel: "Portfolio",
      logo: "../assets/projetos/panoptes.png",
      hero: {
        eyebrow: "Internal Audit · Z2A's financial trinity",
        title: "Panoptes",
        subtitle: "Resolves the cost of every telemetry event in real time",
        summary:
          "Internal audit service that ingests operational telemetry at high speed, resolves the cost of every event, and keeps a time-series trail for auditing operational health and forecasting financial bottlenecks. It's the first of the three engines in Z2A's financial trinity — the others are Nidhogg (market) and Fafnir (tax planning).",
      },
      about: {
        title: "About the project",
        body: "A conscious architectural decision: Panoptes doesn't implement an API gateway, protocol translation, or Zero-Trust authentication — that already exists as shared middleware in the Z2A ecosystem. It stays lean and focused on its own domain: resolving cost and detecting consumption anomalies.",
      },
      architecture: {
        title: "Architecture",
        body: "Hexagonal (Ports & Adapters) in Go, with gRPC contracts as the source of truth (code generated from the .proto via buf). Every telemetry event resolves its cost on one of three bases: reported (the sender already knows the cost), converted (a metric→cost conversion rule exists), or estimated (a configurable fallback, with a low-confidence alarm).",
        tree: [
          "api/proto/                     gRPC contracts (source of truth)",
          "internal/domain/               pure entities and business rules",
          "internal/application/          use cases, orchestrate ports",
          "internal/adapters/inbound/     gRPC + scheduler (tickers)",
          "internal/adapters/outbound/    TimescaleDB, export to Nidhogg, anomaly notification",
        ],
      },
      stack: {
        title: "Tech stack",
        items: ["Go", "gRPC", "TimescaleDB", "PostgreSQL", "Event-Driven"],
      },
      features: {
        title: "Key features",
        intro: "Telemetry that's born as a financial metric.",
        items: [
          { title: "Hourly burn rate", mechanic: "A TimescaleDB Continuous Aggregate: hourly rollup by source+currency, combining materialized data with real-time ingestion." },
          { title: "Automatic export to Nidhogg", mechanic: "Runs in the background: consolidates the average cost per event and sends it via PATCH to Nidhogg, without waiting for polling." },
          { title: "Consumption anomaly detection", mechanic: "Compares the latest bucket against the baseline of the last few hours; a spike above the threshold locks the product's sales until manually released." },
          { title: "Real health check", mechanic: "Reflects actual database connectivity (checked every 10s), not just whether the process is up." },
        ],
      },
      endpoints: {
        title: "gRPC services",
        intro: "The service's entire surface is gRPC.",
        items: [
          { name: "TelemetryIngestService", what: "Ingest / IngestStream — event ingestion, unary or streaming for high throughput", role: "" },
          { name: "PricingAdminService", what: "CRUD for metric→cost conversion rules", role: "" },
          { name: "BurnRateService", what: "GetBurnRate — queries consolidated burn rate, filterable by source and interval", role: "" },
        ],
      },
      links: { repo: null, live: null },
      footer: { backCta: "← Back to the portfolio" },
    },
    vertexflow: {
      meta: {
        title: "VertexFlow — Gustavo Vianna",
        description: "An Internal Developer Platform that turns a YAML Spec-Kit into a ready-to-run Go microservice — Z2A's reference implementation.",
      },
      backLabel: "Portfolio",
      logo: "../assets/projetos/vertexflow.png",
      hero: {
        eyebrow: "Internal Developer Platform · Z2A's reference implementation",
        title: "VertexFlow",
        subtitle: "From a YAML Spec-Kit to a ready-to-run Go microservice — with AI never writing code directly",
        summary:
          "An IDP that reads a Spec-Kit YAML file and generates a Hexagonal Go microservice that compiles, passes go vet, and runs, with the Use Case core left empty, waiting for the business rule. Under the product name, the Go module and its whole vocabulary (satellites, \"AI suggests; the rule decides\") still use the original name z2a-idp — it's Z2A's reference implementation.",
        statusNote: "340 test functions across 32 packages, clean go build/go vet/gofmt as of this revision. No external dependencies — pure stdlib, in both the generator and the generated service.",
      },
      about: {
        title: "About the project",
        body: "Around the generator (M1) grew a full funnel of ~13 deterministic gates — architecture, security, LGPD, FinOps, observability, infrastructure — plus a layer of agents (EVELYN, Prometeu, Quíron) always caged by them. Core philosophy: AI suggests, the rule decides. EVELYN (a local SLM) translates natural-language intent into YAML, but if it hallucinates, the YAML is rejected and the error feeds back into the model — AI never writes code or decides on its own.",
      },
      architecture: {
        title: "How it works (the funnel)",
        body: "A linear, deterministic pipeline, where each stage only passes forward what's already been validated:",
        tree: [
          "intent (natural language)  [optional]",
          "  └─ EVELYN/SLM + RAG        Ollama + few-shot → YAML (with self-correction)",
          "YAML (Spec-Kit)",
          "  └─ parser + Anti-corruption  decode + Validate() — invalid YAML is rejected here",
          "SpecKitConfig, 100% valid",
          "  └─ Tribunal (optional)      Prometeu stress-tests requirements before generating",
          "  └─ generator                 text/template + registry, gofmt built in",
          "Hexagonal project in Go (empty core)",
          "  └─ Factory (optional)       agents fill in the Use Case, in a loop with the cage",
          "  └─ the cage                  go build+test in an ephemeral container (network off)",
          "  └─ static gates              blackout · sigma · arch · secops · opagate · oraculo · argus",
          "delivered service",
        ],
      },
      stack: {
        title: "Tech stack",
        items: ["Go", "YAML (Spec-Kit)", "gRPC", "Docker", "Pulumi", "Ollama (local SLM)"],
      },
      features: {
        title: "Key features",
        intro: "Five mechanisms that prove the thesis in practice, not just on paper.",
        items: [
          { title: "The Blackout Test", mechanic: "Every generated service is born with a test that runs the critical path with 100% of AI offline. If it depends on a probabilistic component to complete, the build breaks." },
          { title: "Security cage", mechanic: "Compiles and tests the generated project in isolation, inside an ephemeral, network-less container with memory/CPU limits — the base image comes pinned by digest, immutable supply chain even with zero configuration." },
          { title: "Ephemeral replicas (best-of-N)", mechanic: "--agents N runs N isolated attempts in parallel; only the winner's files return to the project, and every copy disappears afterward." },
          { title: "Interop proven by test with AegisProtocol", mechanic: "The JWT generated for the Zero-Trust service never shares Go code with the reference — the proof they haven't drifted apart is a test that signs a real token and runs the cage over the generated service." },
          { title: "Analyze: diagnostics for an existing repo", mechanic: "Points the same deterministic gates at a Go repository VertexFlow never generated, and returns a prioritized improvement plan — zero network calls, zero LLM." },
        ],
      },
      endpoints: {
        title: "Main commands",
        intro: "The CLI is the interface — no server, no API.",
        items: [
          { name: "z2a-cli --spec spec.yaml --out ./out", what: "Generates the service from the Spec-Kit", role: "" },
          { name: "z2a-cli --spec spec.yaml --out ./out --verify", what: "Generates and runs every deterministic gate", role: "" },
          { name: "z2a-cli --intent \"...\" --model llama3", what: "Translates natural-language intent into a Spec-Kit via EVELYN", role: "" },
          { name: "z2a-cli --spec spec.yaml --fill --sandbox docker", what: "Autonomous Factory: an agent fills in the Use Case, validated in a loop by the cage", role: "" },
          { name: "z2a-cli analyze ./existing-repo", what: "Runs the deterministic gates over an existing Go repository", role: "" },
        ],
      },
      links: { repo: null, live: null },
      footer: { backCta: "← Back to the portfolio" },
    },
    zyntra: {
      meta: {
        title: "Zyntra ERP — Gustavo Vianna",
        description: "A multi-tenant industrial SaaS ERP in real production: sales, purchasing, production planning, finance, HR, and tax filing in one platform.",
      },
      backLabel: "Portfolio",
      logo: "../assets/projetos/zyntra.png",
      hero: {
        eyebrow: "Industrial SaaS ERP · in real production",
        title: "Zyntra ERP",
        subtitle: "Multi-tenant, from the sales order to tax filing, on a stack with no frontend framework",
        summary:
          "A complete, in-production SaaS ERP platform for factories and mid-sized companies: covers the entire operating cycle, from the sales order to Brazilian e-invoicing, from the shop floor to finance, in a single multi-tenant platform. In active production with real customers since January 2026.",
      },
      about: {
        title: "About the project",
        body: "85+ frontend pages in vanilla HTML/CSS/JS — no framework, a deliberate performance choice — covering 11 modules: an executive dashboard, sales, purchasing, production planning, finance, HR, e-invoicing, inventory, customers, logistics, and 50+ configuration categories per tenant.",
      },
      architecture: {
        title: "Multi-tenant architecture",
        body: "Per-company isolation with JWT + refresh tokens and granular per-module ACLs, with tenant context extracted from the JWT itself on every request. Automated deployment to a VPS via PM2, with Nginx as a reverse proxy and Redis for rate limiting and session caching.",
        tree: [
          "empresas_tenant          plan, 14-day trial, status",
          "usuarios_empresas        N:N user ↔ company link",
          "middleware/empresa.js    tenant context extracted from the JWT per request",
          "JWT + refresh tokens     authentication with full session tracking",
          "ACL granular             per-module, per-role permissions",
        ],
      },
      stack: {
        title: "Tech stack",
        items: ["Node.js 18", "Express 4", "MySQL 8", "Socket.IO 4", "PM2", "Redis", "PWA", "Capacitor (Android)"],
      },
      features: {
        title: "Key features",
        intro: "Eleven modules, but five features that stand out the most.",
        items: [
          { title: "Zyntra Teams", mechanic: "A corporate chat built into Socket.IO, with Axios (Bob) as a 24/7 support assistant — channels, DMs, audio, files, real-time typing indicators." },
          { title: "Full tax integration", mechanic: "Brazilian e-invoicing via SEFAZ, CNAB 240 banking files, PIX, and invoices, all in real production." },
          { title: "36 n8n automations", mechanic: "Automatic collections, cash-flow forecasting, critical-stock alerts, anomaly audits, and daily reports, each with a dashboard, retry, and log." },
          { title: "72+ reports", mechanic: "Sales, finance, production planning, e-invoicing, billing, purchasing, and HR, each module with its own report center." },
          { title: "Native Android app", mechanic: "Via Capacitor, with a professional splash screen, adaptive icons, and push notifications." },
        ],
      },
      security: {
        title: "Security",
        body: "JWT with refresh tokens and automatic rotation, bcrypt for passwords, CSRF tokens, Redis-based rate limiting, XSS sanitization, PII encryption for LGPD compliance, and a full audit trail — every meaningful action gets logged.",
      },
      links: { repo: null, live: "https://zyntraerp.com.br" },
      footer: { backCta: "← Back to the portfolio" },
    },
    fafnir: {
      meta: {
        title: "Fafnir — Gustavo Vianna",
        description: "A tax-elision engine via SLM: intercepts the transaction before Split Payment, with a deterministic rules engine having the final word.",
      },
      backLabel: "Portfolio",
      logo: "../assets/projetos/fafnir.png",
      hero: {
        eyebrow: "Tax Elision via SLM · Z2A's financial trinity",
        title: "Fafnir",
        subtitle: "Intercepts the transaction before Split Payment slices up the wrong amount",
        summary:
          "The third engine in Z2A's financial trinity: uses an SLM to suggest the correct tax classification (NCM) for a product from its description, but only applies the optimization if a deterministic rules engine validates the suggestion against the official tables (Sefaz, IBPT). Named after the dragon from Norse mythology that fiercely guards its treasure.",
        statusNote: "Still in the design phase — architecture drawn up, implementation not yet started.",
      },
      about: {
        title: "About the project",
        body: "Born from a concrete problem: Split Payment gateways often charge the wrong tax because they lack the product's exact context, only the transaction's gross value — double taxation and lost exemptions (like single-phase PIS/COFINS products) are common. Fafnir fixes this at the moment of the transaction, not at monthly filing: it applies the Shift-Left concept (like in security) to accounting, correcting the tax classification before the money gets sliced.",
      },
      architecture: {
        title: "Architecture",
        body: "Hexagonal + DDD: the core (TaxOptimizationService) doesn't know whether it's processing a REST API, a messaging event, or an NF-e XML file — it only cares about the business rule. A 4-step pipeline, each stage only passing forward what's already validated:",
        tree: [
          "1. Ingestion and sanitization   normalizes the payload (pre-invoice or NF-e XML)",
          "2. SLM enrichment               the model suggests an NCM + confidence_score from the description",
          "3. Deterministic validation     below the threshold it's discarded; above it, cross-checked against Sefaz/IBPT",
          "4. Split orchestration          calculates the real tax burden and calls the Payment Gateway",
        ],
      },
      stack: {
        title: "Tech stack",
        items: ["Java 21", "Spring Boot", "PostgreSQL", "SLM (Llama 3 8B / Phi-3)", "Ollama", "QLoRA (Unsloth)"],
      },
      features: {
        title: "Key features",
        intro: "AI suggests; the rule decides — Z2A's own thesis, applied to accounting.",
        items: [
          { title: "Elision, not evasion", mechanic: "The SLM never decides alone: below a confidence threshold, the suggestion is discarded and the original NCM is kept." },
          { title: "Local fine-tuning, cloud serving", mechanic: "QLoRA trains the model on a home GPU (12GB of VRAM is enough for a Llama 3 8B); the resulting GGUF export runs via Ollama on a GPU-less cloud instance." },
          { title: "LGPD-compliant dataset from ingestion", mechanic: "The ETL pipeline strips customer, supplier, and total-value tags from the invoice XMLs before any data gets near the training environment." },
          { title: "Ground truth by consensus", mechanic: "When a product description has conflicting NCMs in the history, the pipeline uses the majority classification and discards the exceptions as noise, not truth." },
          { title: "Rules engine as policy enforcement point", mechanic: "Same reasoning as Zero Trust: the tax burden isn't trusted until the deterministic engine validates the state/government's rule." },
        ],
      },
      security: {
        title: "Elision vs. evasion: the legal boundary",
        body: "Classifying a product correctly to claim an exemption is tax elision — 100% legal. The technical risk is that language models are probabilistic: if the SLM misclassifies something to optimize the tax, that can look like evasion. That's why the SLM never has the final word — it acts as an oracle that suggests, and the decision to apply the tax rate always goes through a deterministic rules engine.",
      },
      links: { repo: null, live: null },
      footer: { backCta: "← Back to the portfolio" },
    },
    ultrafoot26: {
      meta: {
        title: "Ultrafoot 26 — Gustavo Vianna",
        description: "Management + Tycoon + Roguelike: a remake of a classic football game with real crisis management.",
      },
      backLabel: "Portfolio",
      logo: "../assets/projetos/ultrafoot26.png",
      hero: {
        eyebrow: "Management + Tycoon + Roguelike · remake of a classic",
        title: "Ultrafoot 26",
        subtitle: "Not just another spreadsheet manager: real crisis management for a football club",
        summary:
          "A remake of a classic football game that fuses the direct gameplay of a Management sim with the infrastructure and crisis depth of a Tycoon. The player takes on not just the role of coach, but of manager: political backstage, squad psychology, data security, and the real pressures of modern football.",
        statusNote: "Already live — desktop (Windows/Mac/Linux) and mobile, with a free and a paid tier.",
      },
      about: {
        title: "About the project",
        body: "The MVP prioritizes a solid core before any added complexity: a match engine with a real FIFA calendar, a fan-club membership system (revenue floats with team morale), home/away factors with age-based mental modifiers, and basic scouting. Tycoon-level complexity and random events come later, on top of a tested foundation — the architecture avoids heavy processing (no 3D match-physics engine) and uses simplified math simulation for CPU-controlled teams.",
      },
      architecture: {
        title: "Architecture",
        body: "Hexagonal + DDD isolates the game engine (the business rules) from the interface: calculating a match and its attribute modifiers never needs to open the game screen to be tested. Status effects (traumas, morale, sponsor pressure) are modeled as a list of modifiers on the Player entity — the match engine just sums base attributes and subtracts the active ones, with no knowledge of the business rule behind each. Domain events connect modules (marketing, health, morale) without coupling their code.",
        tree: [
          "Desktop frontend     Tauri + TypeScript — Windows, Mac, Linux",
          "Mobile frontend      C# — native version",
          "Game engine          Java 21 + Spring Boot, event-driven",
          "Database             PostgreSQL — players, history, contract clauses",
        ],
      },
      stack: {
        title: "Tech stack",
        items: ["Next.js", "Tauri", "TypeScript", "C#", "Java 21", "Spring Boot", "PostgreSQL"],
      },
      features: {
        title: "Standout mechanics",
        intro: "Five systems that break from the football-manager status quo.",
        items: [
          { title: "Persistent traumas and virtues", mechanic: "A crushing collapse becomes a fixed condition on the involved players' profile — a -15% debuff removed only by a specific achievement, not by time passing." },
          { title: "Geographic factor", mechanic: "Playing at altitude applies a real stamina-consumption multiplier, forcing squad rotation or consumable purchases." },
          { title: "Inter-club data warfare", mechanic: "If a club's security infrastructure is weak, rival teams can intercept your scouts' reports — the same Zero-Trust logic applied to sports espionage." },
          { title: "Locker-room cliques", mechanic: "The engine detects affinities (nationality, age, former club) and forms groups; punishing a group's leader tanks morale for everyone around him." },
          { title: "High-risk marketing", mechanic: "Aggressive campaigns inject cash fast but create performance clauses — breaking the expectation doubles fan pressure and can void sponsorships." },
        ],
      },
      endpoints: {
        title: "Roadmap",
        intro: "MVP first, complexity later — to avoid feature creep.",
        items: [
          { name: "Phase 1 — Core (MVP)", what: "Match engine, FIFA calendar, fan-club system, home/away factor, basic scouting", role: "" },
          { name: "Phase 2 — Tycoon", what: "Stadium infrastructure, private security, geographic/altitude factor", role: "" },
          { name: "Phase 3 — Human factor", what: "Traumas and virtues, crisis events, locker-room cliques", role: "" },
          { name: "Phase 4 — Modern football", what: "Association-to-corporate-ownership transition, data warfare, toxic contracts, hybrid real+procedural database", role: "" },
        ],
      },
      links: { repo: "https://github.com/jovemegidio/Ultrafoot26", live: "https://remake-ultrafoot.vercel.app" },
      footer: { backCta: "← Back to the portfolio" },
    },
  },
  es: {
    aegisprotocol: {
      meta: {
        title: "AegisProtocol — Gustavo Vianna",
        description: "Identity Provider Zero-Trust del ecosistema ZenithCode: autenticación, tokens JWT y políticas de acceso granulares.",
      },
      backLabel: "Portafolio",
      logo: "../assets/projetos/aegisprotocol.png",
      hero: {
        eyebrow: "Security & IAM Middleware · una iniciativa ZenithCode",
        title: "AegisProtocol",
        subtitle: "Un Identity Provider Zero-Trust: ninguna solicitud es confiable por defecto",
        summary:
          "Middleware de seguridad e Identity Provider (IdP) que centraliza la autenticación, la emisión de tokens cifrados y las políticas de acceso granulares para todo el ecosistema ZenithCode. Es la manifestación real del satélite Themis del Z2A.",
        statusNote:
          "Nota: este repositorio contiene una versión antigua de AegisProtocol, mantenida pública como referencia de arquitectura (Zero Trust, JWT RS256, revocación vía Redis). El desarrollo activo continúa en un repositorio privado, liderado por la división N.Ú.C.L.E.O.",
      },
      about: {
        title: "Sobre el proyecto",
        body: "Aegis Core es un middleware de seguridad construido con arquitectura Zero-Trust: ninguna solicitud es confiable por defecto, ni siquiera después del login. Centraliza la autenticación, emite JWT firmados con RSA-2048 (RS256, firma asimétrica) y aplica políticas de acceso granulares vía ABAC/RBAC — sirviendo como capa de identidad para los demás microservicios satélite del ecosistema. Distribuido bajo licencia MIT.",
      },
      architecture: {
        title: "Arquitectura",
        body: "Un sidecar de identidad que corre sobre Spring Security 6 con una filter chain totalmente stateless: cada solicitud se valida de forma independiente, sin sesión guardada en memoria. Expone su clave pública (JWK) para que los microservicios satélite validen el JWT localmente, sin llamar a Aegis en cada solicitud — solo la emisión y la revocación pasan por el servicio central. La revocación usa una lista negra distribuida en Redis, y el KMS es opcional: por defecto la clave vive en un archivo local, con HashiCorp Vault como alternativa (`aegis.jwt.key-source=vault`) para entornos que ya centralizan secretos.",
      },
      stack: {
        title: "Stack técnica",
        items: ["Java 21", "Spring Boot 3.4", "Spring Security 6", "JWT (RS256)", "Redis", "PostgreSQL", "HashiCorp Vault (opcional)", "Docker"],
      },
      features: {
        title: "Funcionalidades clave",
        intro: "Cinco mecanismos que sostienen el modelo Zero-Trust en la práctica.",
        items: [
          { title: "Arquitectura Zero-Trust", mechanic: "Ninguna solicitud es confiable por defecto." },
          { title: "Soft lock", mechanic: "Los usuarios pueden iniciar sesión, pero los recursos sensibles exigen verificación adicional basada en claims." },
          { title: "Mitigación de amenazas", mechanic: "Rate limiting y detección de anomalías en el registro." },
          { title: "Revocación de tokens", mechanic: "Lista negra distribuida vía Redis para logout inmediato en todos los dispositivos." },
          { title: "Listo para rotación de claves", mechanic: "Arquitectura preparada para rotar las claves de firma sin downtime." },
        ],
      },
      endpoints: {
        title: "Endpoints principales",
        intro: "La superficie REST del Identity Provider.",
        items: [
          { name: "POST /auth/login", what: "Autenticación y emisión de JWT", role: "" },
          { name: "POST /auth/register", what: "Registro con protección anti-spam", role: "" },
          { name: "POST /auth/refresh", what: "Renovación segura de sesión", role: "" },
          { name: "GET /auth/public-key", what: "Expone la JWK para que los microservicios satélite validen tokens sin llamar a Aegis en cada request", role: "" },
          { name: "GET /auth/consent/current-version", what: "Versión vigente de los términos exigidos en el registro", role: "" },
        ],
      },
      security: {
        title: "Seguridad y resiliencia",
        body: "Opera bajo Zero Trust: un GlobalExceptionHandler especializado evita la fuga de metadatos de infraestructura en las respuestas de error, con mitigaciones nativas contra Reflected XSS, Log Forging y validación estricta de claims en la capa de autenticación.",
      },
      links: { repo: "https://github.com/Gtvnv/AegisProtocol-Core", live: null },
      footer: { backCta: "← Volver al portafolio" },
    },
    akpl: {
      meta: {
        title: "AKPL — Acceso y Financiero — Gustavo Vianna",
        description: "Módulo de control de acceso biométrico y cobro automático de AKPL, en Arquitectura Hexagonal.",
      },
      backLabel: "Portafolio",
      logo: "../assets/projetos/akpl.png",
      hero: {
        eyebrow: "Módulo de Acceso y Financiero · Arquitectura Hexagonal",
        title: "AKPL — Acceso y Financiero",
        subtitle: "Torniquete biométrico simulado + cobro automático vía PIX/Boleto",
        summary:
          "Módulo backend de AKPL que resuelve dos problemas concretos: control físico de acceso vía hash biométrico y morosidad financiera, con las reglas de negocio aisladas de la base de datos y el gateway de pago por Arquitectura Hexagonal. Es la capa backend detrás de la plataforma de gestión académica que ya gestiona la Academia de Karatê Pedro Leopoldo.",
      },
      about: {
        title: "Sobre el proyecto",
        body: "Resuelve dos problemas concretos: el control físico de acceso (simulación de torniquete vía hash biométrico, validado contra el horario permitido y el estado financiero \"al día\") y la morosidad. La arquitectura blinda el núcleo de reglas de negocio de cualquier dependencia externa — base de datos, gateway de pago — así que cambiar uno de esos detalles de implementación nunca exige tocar la regla.",
      },
      architecture: {
        title: "Arquitectura",
        body: "Ports & Adapters (Hexagonal) aplicado estrictamente: el Core no conoce framework, base de datos ni API externa — solo interfaces (ports). La infraestructura es quien se adapta al dominio, nunca al revés.",
        tree: [
          "core/",
          "├── domain/model        Aluno, RegistroAcesso, CPF, Email (Value Objects)",
          "├── domain/policies     reglas aisladas, ej: PoliticaInadimplencia",
          "└── ports               contratos de entrada/salida",
          "application/",
          "├── usecases            LiberarAcessoUseCase y similares",
          "└── dtos                blindaje del dominio",
          "infrastructure/",
          "├── adapters/input      REST Controllers + MQTT (IoT)",
          "└── adapters/output     Hardware (torniquete), Postgres, Asaas (pago)",
        ],
      },
      stack: {
        title: "Stack técnica",
        items: ["Java 21", "Spring Boot 3.4", "PostgreSQL", "OpenFeign", "Docker", "GitHub Actions"],
      },
      features: {
        title: "Funcionalidades clave",
        intro: "Del registro del alumno al torniquete liberándose solo cuando el pago se confirma.",
        items: [
          { title: "Control de acceso", mechanic: "Validación de entrada basada en reglas de negocio: horario permitido y estado financiero \"al día\"." },
          { title: "Gestión de alumnos", mechanic: "Registro completo con persistencia segura del hash biométrico." },
          { title: "Integración Asaas", mechanic: "Generación automática de boleto/PIX, registro del cliente en el gateway, y liberación inmediata del torniquete vía webhook de pago confirmado." },
          { title: "CI/CD con versionado semántico", mechanic: "Conventional Commits + GitHub Actions generan release automática (fix → patch, feat → minor, BREAKING CHANGE → major)." },
        ],
      },
      endpoints: {
        title: "Endpoints principales",
        intro: "La superficie REST del módulo.",
        items: [
          { name: "POST /api/financeiro/cobranca", what: "Genera un cobro (boleto o PIX) por CPF y monto", role: "" },
          { name: "POST /api/financeiro/webhook", what: "Recibe la confirmación de pago de Asaas y libera el acceso", role: "" },
          { name: "POST /api/alunos", what: "Registra un alumno con hash biométrico", role: "" },
        ],
      },
      links: { repo: "https://github.com/Gtvnv/acesso-alunos", live: "https://karatepl.zyntraerp.com.br" },
      footer: { backCta: "← Volver al portafolio" },
    },
    nidhogg: {
      meta: {
        title: "Nidhogg — Gustavo Vianna",
        description: "Motor de pricing y protección de margen de la trinidad financiera del Z2A, en Java con Arquitectura Hexagonal y DDD.",
      },
      backLabel: "Portafolio",
      logo: "../assets/projetos/nidhogg.png",
      hero: {
        eyebrow: "Pricing y Protección de Margen · trinidad financiera del Z2A",
        title: "Nidhogg",
        subtitle: "Cruza el costo real de la operación con la volatilidad del mercado externo",
        summary:
          "El motor financiero, de controladoría y de reglas de negocio estratégicas del ecosistema Z2A: define y ajusta precios dinámicamente, protege el margen de contribución y traduce la telemetría de infraestructura a unit economics como puente entre CTO y CFO.",
      },
      about: {
        title: "Sobre el proyecto",
        body: "Reacciona tanto al aumento del costo computacional interno (reportado por Panoptes) como a movimientos de la competencia, con trabas rígidas contra cualquier operación que resulte en margen de contribución negativo, salvo que exista una política deliberada de excepción. Forma parte de la trinidad financiera del Z2A, junto al Panoptes (costo interno) y al Fafnir (planificación tributaria).",
      },
      architecture: {
        title: "Arquitectura",
        body: "Hexagonal + DDD: el dominio (MarketPositionEngine) no importa nada de Spring ni JPA, testeable sin levantar ningún contexto — la infraestructura es quien se adapta. La pieza concreta ya implementada es el motor de benchmarking: compara el valor interno de un subject (salario, bono, carga, modelo de contratación) contra la distribución de mercado (p25/mediana/p75) y lo clasifica por debajo, en la media o por encima del mercado, dentro de una banda de tolerancia configurable — la base sobre la que se apoyan las reglas de pricing y protección de margen.",
        tree: [
          "domain/                    núcleo, sin dependencia de framework",
          "├── model                  Money, MarketBenchmark, MarketEvaluation, EvaluationHold",
          "├── service                MarketPositionEngine — la política de clasificación",
          "└── port (in/out)          casos de uso + EvaluationSubjectRepository",
          "application/usecase        MarketEvaluationService, MarketDataImportService",
          "infrastructure/",
          "├── adapter.in.web         REST controllers",
          "├── adapter.out.persistence  JPA + Postgres",
          "└── adapter.out.marketdata   CsvMarketDataProvider (ingesta de survey)",
        ],
      },
      stack: {
        title: "Stack técnica",
        items: ["Java 21", "Spring Boot 3.3", "PostgreSQL", "Flyway", "DDD", "Arquitectura Hexagonal"],
      },
      features: {
        title: "Funcionalidades clave",
        intro: "El freno de emergencia importa tanto como el propio motor de clasificación.",
        items: [
          { title: "Freno de emergencia (hold)", mechanic: "Congela cualquier clasificación de un subject bajo sospecha, hasta que un operador lo libere manualmente — la liberación nunca es automática." },
          { title: "Gancho con Panoptes", mechanic: "Cuando Panoptes detecta una anomalía (ej: burn-rate de nómina fuera de curva), dispara el hold automáticamente vía API." },
          { title: "Ingesta de datos de mercado", mechanic: "Importa benchmarks vía CSV hoy (p25/mediana/p75 por marketKey), con el puerto listo para conectar un scraper o una API de mercado real después, sin tocar dominio ni controlador." },
          { title: "Precisión monetaria", mechanic: "PostgreSQL con BigDecimal de punta a punta — sin redondeo de float en la comparación de valores." },
        ],
      },
      endpoints: {
        title: "API",
        intro: "La superficie REST del motor.",
        items: [
          { name: "POST /api/v1/subjects", what: "Registra un subject con valor interno inicial", role: "" },
          { name: "PATCH .../internal-value", what: "Actualiza el valor interno (ej: proveniente de Panoptes)", role: "" },
          { name: "PUT .../market-benchmark", what: "Define el benchmark de mercado (p25/p50/p75)", role: "" },
          { name: "POST .../evaluate", what: "Clasifica el valor interno contra el mercado", role: "" },
          { name: "POST .../hold", what: "Congela la evaluación del subject", role: "" },
          { name: "DELETE .../hold", what: "Libera la evaluación (acción manual de un operador)", role: "" },
        ],
      },
      links: { repo: null, live: null },
      footer: { backCta: "← Volver al portafolio" },
    },
    omnishift: {
      meta: {
        title: "OmniShift — Gustavo Vianna",
        description: "Motor universal de transformación de datos, en Java con Arquitectura Hexagonal y plugins vía SPI.",
      },
      backLabel: "Portafolio",
      logo: "../assets/projetos/omnishift.png",
      hero: {
        eyebrow: "Universal Data Transformation Engine · iniciativa ZenithCode",
        title: "OmniShift",
        subtitle: "Convierte cualquier formato de entrada en cualquier formato de salida",
        summary:
          "Middleware de alto rendimiento que traduce cualquier formato de entrada a un modelo canónico en memoria y luego lo serializa en el formato de salida deseado — agregar un formato nuevo nunca exige tocar las reglas de negocio existentes.",
        statusNote: "Liderado por la división P.O.N.T.E. de ZenithCode.",
      },
      about: {
        title: "Sobre el proyecto",
        body: "En vez de convertir un formato directo a otro (JSON→XML), OmniShift traduce cualquier entrada a un árbol de objetos en memoria (el Modelo Canónico OmniNode), y solo después serializa ese árbol al formato de salida. REST y gRPC como entrada; JSON, XML, YAML, CSV y SQL (MySQL/PostgreSQL/Oracle/SQL Server) como salida.",
      },
      architecture: {
        title: "Arquitectura",
        body: "Multi-módulo Maven: el núcleo de dominio (omnishift-core) no depende de Spring ni de Jackson, y cada formato nuevo entra como plugin aislado, descubierto vía Java SPI en tiempo de ejecución — ninguna clase central necesita saber que un formato nuevo existe.",
        tree: [
          "omnishift-core                    modelo canónico (OmniNode), puertos, orquestación — cero dependencias",
          "omnishift-grpc-api                contrato gRPC (.proto) + stubs",
          "omnishift-adapter-json/xml/yaml    parsers/serializers vía Jackson",
          "omnishift-adapter-csv              vía Apache Commons CSV",
          "omnishift-adapter-sql              genera INSERT por dialecto (MySQL/Postgres/Oracle/SQL Server)",
          "omnishift-runtime-spring          runtime ejecutable: expone REST + gRPC",
        ],
      },
      stack: {
        title: "Stack técnica",
        items: ["Java 21", "Spring Boot 3.3", "gRPC", "Protobuf", "Jackson", "Maven multi-módulo"],
      },
      features: {
        title: "Funcionalidades clave",
        intro: "Rendimiento y seguridad tratados como parte del diseño, no como ocurrencia tardía.",
        items: [
          { title: "Streaming de payloads grandes", mechanic: "REST lee/escribe como stream de bytes en vez de materializar todo en memoria; gRPC gana una RPC bidireccional para sortear el límite de ~4MB por mensaje." },
          { title: "Remapeo vía perfil de mapeo", mechanic: "El cliente referencia un perfil preconfigurado (X-Mapping-Profile) en vez de enviar la instrucción de mapeo en el cuerpo — la API sigue siendo 100% agnóstica a los datos." },
          { title: "Seguridad en profundidad", mechanic: "XXE bloqueado, límite de profundidad de anidamiento, y mitigación de CSV Injection y SQL Injection probada con payload malicioso real." },
          { title: "Observabilidad nativa", mechanic: "Una única métrica (omnishift.conversions) con conteo y latencia por formato de origen/destino y éxito/error, expuesta vía Prometheus." },
          { title: "API key obligatoria", mechanic: "Ninguna solicitud pasa sin X-Api-Key — seguro por defecto, no \"abierto hasta que alguien se acuerde de cerrarlo\"." },
        ],
      },
      endpoints: {
        title: "Endpoints principales",
        intro: "Una ruta central, dirigida por headers.",
        items: [
          { name: "POST /api/v1/shift", what: "Convierte el payload: formato de origen/destino definidos por header (X-Source-Format/X-Target-Format)", role: "" },
          { name: "GET /actuator/health", what: "Health check — la única ruta exenta del requisito de API key", role: "" },
          { name: "GET /actuator/prometheus", what: "Métricas en formato Prometheus", role: "" },
        ],
      },
      links: { repo: "https://github.com/Gtvnv/OmniShift", live: null },
      footer: { backCta: "← Volver al portafolio" },
    },
    panoptes: {
      meta: {
        title: "Panoptes — Gustavo Vianna",
        description: "Ingestor de telemetría y costo en Go, el primer motor de la trinidad financiera del Z2A.",
      },
      backLabel: "Portafolio",
      logo: "../assets/projetos/panoptes.png",
      hero: {
        eyebrow: "Auditoría Interna · trinidad financiera del Z2A",
        title: "Panoptes",
        subtitle: "Resuelve el costo de cada evento de telemetría en tiempo real",
        summary:
          "Servicio de auditoría interna que ingiere telemetría operativa a alta velocidad, resuelve el costo de cada evento y mantiene un rastro en series temporales para auditar la salud de la operación y prever cuellos de botella financieros. Es el primero de los tres motores de la trinidad financiera del Z2A — los otros son el Nidhogg (mercado) y el Fafnir (planificación tributaria).",
      },
      about: {
        title: "Sobre el proyecto",
        body: "Decisión consciente de arquitectura: Panoptes no implementa gateway de API, traducción de protocolo ni autenticación Zero-Trust — eso ya existe como middleware compartido en el ecosistema Z2A. Se mantiene delgado y enfocado solo en su propio dominio: resolver costo y detectar anomalías de consumo.",
      },
      architecture: {
        title: "Arquitectura",
        body: "Hexagonal (Ports & Adapters) en Go, con contratos gRPC como fuente de la verdad (el código se genera desde el .proto vía buf). Cada evento de telemetría resuelve su costo en una de tres bases: reported (quien envía ya sabe el costo), converted (existe una regla de conversión métrica→costo registrada) o estimated (fallback configurable, con alarma de baja confianza).",
        tree: [
          "api/proto/                     contratos gRPC (fuente de la verdad)",
          "internal/domain/               entidades y reglas de negocio puras",
          "internal/application/          casos de uso, orquestan puertos",
          "internal/adapters/inbound/     gRPC + scheduler (tickers)",
          "internal/adapters/outbound/    TimescaleDB, exportación a Nidhogg, notificación de anomalías",
        ],
      },
      stack: {
        title: "Stack técnica",
        items: ["Go", "gRPC", "TimescaleDB", "PostgreSQL", "Event-Driven"],
      },
      features: {
        title: "Funcionalidades clave",
        intro: "Telemetría que nace ya como métrica financiera.",
        items: [
          { title: "Burn rate por hora", mechanic: "Continuous Aggregate de TimescaleDB: rollup por source+moneda, combinando datos materializados con ingesta en tiempo real." },
          { title: "Exportación automática a Nidhogg", mechanic: "Corre en segundo plano: consolida el costo promedio por evento y lo envía vía PATCH a Nidhogg, sin esperar polling." },
          { title: "Detección de anomalías de consumo", mechanic: "Compara el bucket más reciente con la línea base de las últimas horas; un pico por encima del límite bloquea las ventas del producto hasta liberación manual." },
          { title: "Health check real", mechanic: "Refleja la conectividad real con la base de datos (verificada cada 10s), no solo si el proceso está de pie." },
        ],
      },
      endpoints: {
        title: "Servicios gRPC",
        intro: "La superficie del servicio, toda en gRPC.",
        items: [
          { name: "TelemetryIngestService", what: "Ingest / IngestStream — ingesta de eventos, unaria o en streaming para alto throughput", role: "" },
          { name: "PricingAdminService", what: "CRUD de las reglas de conversión métrica → costo", role: "" },
          { name: "BurnRateService", what: "GetBurnRate — consulta el burn rate consolidado, filtrable por source e intervalo", role: "" },
        ],
      },
      links: { repo: null, live: null },
      footer: { backCta: "← Volver al portafolio" },
    },
    vertexflow: {
      meta: {
        title: "VertexFlow — Gustavo Vianna",
        description: "Internal Developer Platform que transforma un Spec-Kit YAML en un microservicio Go listo para ejecutar — implementación de referencia del Z2A.",
      },
      backLabel: "Portafolio",
      logo: "../assets/projetos/vertexflow.png",
      hero: {
        eyebrow: "Internal Developer Platform · implementación de referencia del Z2A",
        title: "VertexFlow",
        subtitle: "De un Spec-Kit YAML a un microservicio Go listo — sin que la IA escriba código directamente",
        summary:
          "IDP que lee un Spec-Kit YAML y genera un microservicio Hexagonal en Go que compila, pasa el go vet y ejecuta, con el núcleo del Use Case vacío esperando la regla de negocio. Bajo el nombre comercial, el módulo Go y todo el vocabulario (satélites, \"la IA sugiere; la regla decide\") todavía usan el nombre original z2a-idp — es la implementación de referencia del Z2A.",
        statusNote: "340 funciones de prueba en 32 paquetes, go build/go vet/gofmt limpios en esta revisión. Sin dependencias externas — stdlib pura, tanto en el generador como en el servicio generado.",
      },
      about: {
        title: "Sobre el proyecto",
        body: "Alrededor del generador (M1) creció un funil completo de ~13 gates determinísticos — arquitectura, seguridad, LGPD, FinOps, observabilidad, infraestructura — más una capa de agentes (EVELYN, Prometeu, Quíron) siempre enjaulados por ellos. Filosofía central: la IA sugiere, la regla decide. La EVELYN (SLM local) traduce intención en lenguaje natural a YAML, pero si alucina, el YAML se rechaza y el error realimenta al modelo — la IA nunca escribe código ni decide sola.",
      },
      architecture: {
        title: "Cómo funciona (el funil)",
        body: "Un pipeline lineal y determinístico, donde cada etapa solo pasa adelante lo que ya fue validado:",
        tree: [
          "intención (lenguaje natural)  [opcional]",
          "  └─ EVELYN/SLM + RAG          Ollama + few-shot → YAML (con autocorrección)",
          "YAML (Spec-Kit)",
          "  └─ parser + Anticorrupción   decode + Validate() — YAML inválido se rechaza aquí",
          "SpecKitConfig, 100% válido",
          "  └─ Tribunal (opcional)       Prometeu estresa los requisitos antes de generar",
          "  └─ generator                 text/template + registry, gofmt incorporado",
          "proyecto Hexagonal en Go (núcleo vacío)",
          "  └─ Fábrica (opcional)        agentes completan el Use Case, en loop con la jaula",
          "  └─ la jaula                  go build+test en contenedor efímero (red apagada)",
          "  └─ gates estáticos           apagón · sigma · arch · secops · opagate · oráculo · árgus",
          "servicio entregado",
        ],
      },
      stack: {
        title: "Stack técnica",
        items: ["Go", "YAML (Spec-Kit)", "gRPC", "Docker", "Pulumi", "Ollama (SLM local)"],
      },
      features: {
        title: "Funcionalidades clave",
        intro: "Cinco mecanismos que prueban la tesis en la práctica, no solo en el discurso.",
        items: [
          { title: "La Prueba del Apagón", mechanic: "Todo servicio generado nace con una prueba que corre el camino crítico con el 100% de la IA offline. Si depende de un componente probabilístico para completarse, el build falla." },
          { title: "Jaula de seguridad", mechanic: "Compila y prueba el proyecto generado aislado en un contenedor efímero, sin red, con límites de memoria/CPU — la imagen base viene fijada por digest, supply chain inmutable incluso sin configuración." },
          { title: "Réplicas efímeras (mejor-de-N)", mechanic: "--agents N corre N intentos aislados en paralelo; solo los archivos del ganador vuelven al proyecto, y todas las copias desaparecen después." },
          { title: "Interoperabilidad probada por test con AegisProtocol", mechanic: "El JWT generado para el servicio Zero-Trust nunca comparte código Go con la referencia — la prueba de que no divergieron es un test que firma un token real y corre la jaula sobre el servicio generado." },
          { title: "Analyze: diagnóstico para repositorio existente", mechanic: "Apunta los mismos gates determinísticos a un repositorio Go que VertexFlow nunca generó, y devuelve un plan de mejora priorizado — cero llamadas de red, cero LLM." },
        ],
      },
      endpoints: {
        title: "Comandos principales",
        intro: "La CLI es la interfaz — sin servidor, sin API.",
        items: [
          { name: "z2a-cli --spec spec.yaml --out ./out", what: "Genera el servicio a partir del Spec-Kit", role: "" },
          { name: "z2a-cli --spec spec.yaml --out ./out --verify", what: "Genera y corre todos los gates determinísticos", role: "" },
          { name: "z2a-cli --intent \"...\" --model llama3", what: "Traduce intención en lenguaje natural a Spec-Kit vía EVELYN", role: "" },
          { name: "z2a-cli --spec spec.yaml --fill --sandbox docker", what: "Fábrica Autónoma: un agente completa el Use Case, validado en loop por la jaula", role: "" },
          { name: "z2a-cli analyze ./repo-existente", what: "Corre los gates determinísticos sobre un repositorio Go ya existente", role: "" },
        ],
      },
      links: { repo: null, live: null },
      footer: { backCta: "← Volver al portafolio" },
    },
    zyntra: {
      meta: {
        title: "Zyntra ERP — Gustavo Vianna",
        description: "ERP SaaS industrial multi-tenant en producción real: ventas, compras, planificación de producción, finanzas, RRHH y facturación fiscal en una sola plataforma.",
      },
      backLabel: "Portafolio",
      logo: "../assets/projetos/zyntra.png",
      hero: {
        eyebrow: "ERP SaaS Industrial · en producción real",
        title: "Zyntra ERP",
        subtitle: "Multi-tenant, del pedido de venta a la facturación fiscal, en una stack sin framework de frontend",
        summary:
          "Plataforma ERP SaaS completa y en producción para industrias y empresas medianas: cubre todo el ciclo operativo, del pedido de venta a la factura fiscal, del piso de fábrica a las finanzas, en una sola plataforma multi-tenant. En producción activa con clientes reales desde enero de 2026.",
      },
      about: {
        title: "Sobre el proyecto",
        body: "85+ páginas de frontend en HTML/CSS/JS puro — sin framework, por decisión de rendimiento — cubriendo 11 módulos: dashboard ejecutivo, ventas, compras, planificación de producción, finanzas, RRHH, facturación fiscal, inventario, clientes, logística y más de 50 categorías de configuración por tenant.",
      },
      architecture: {
        title: "Arquitectura multi-tenant",
        body: "Aislamiento por empresa con JWT + refresh tokens y ACL granular por módulo, con el contexto de tenant extraído del propio JWT en cada solicitud. Despliegue automatizado a un VPS vía PM2, con Nginx como reverse proxy y Redis para rate limiting y caché de sesión.",
        tree: [
          "empresas_tenant          plan, prueba de 14 días, estado",
          "usuarios_empresas        vínculo N:N usuario ↔ empresa",
          "middleware/empresa.js    contexto de tenant extraído del JWT por solicitud",
          "JWT + refresh tokens     autenticación con seguimiento completo de sesión",
          "ACL granular             permisos por módulo y función",
        ],
      },
      stack: {
        title: "Stack técnica",
        items: ["Node.js 18", "Express 4", "MySQL 8", "Socket.IO 4", "PM2", "Redis", "PWA", "Capacitor (Android)"],
      },
      features: {
        title: "Funcionalidades clave",
        intro: "Once módulos, pero cinco funcionalidades que más destacan.",
        items: [
          { title: "Zyntra Teams", mechanic: "Chat corporativo integrado con Socket.IO, con Axios (Bob) como asistente de soporte 24/7 — canales, DMs, audio, archivos, indicador de escritura en tiempo real." },
          { title: "Integración fiscal completa", mechanic: "Facturación electrónica vía SEFAZ, CNAB 240 de remesa/retorno, PIX y boleto, todo en producción real." },
          { title: "36 automatizaciones vía n8n", mechanic: "Cobros automáticos, proyección de flujo de caja, alertas de stock crítico, auditoría de anomalías e informes diarios, todos con dashboard, retry y log." },
          { title: "72+ reportes", mechanic: "Ventas, finanzas, producción, facturación fiscal, facturación, compras y RRHH, cada módulo con su propia central de reportes." },
          { title: "App Android nativa", mechanic: "Vía Capacitor, con splash profesional, íconos adaptativos y notificaciones push." },
        ],
      },
      security: {
        title: "Seguridad",
        body: "JWT con refresh tokens y rotación automática, bcrypt para contraseñas, tokens CSRF, rate limiting vía Redis, sanitización contra XSS, cifrado de PII para cumplimiento LGPD, y audit trail completo — toda acción relevante queda registrada.",
      },
      links: { repo: null, live: "https://zyntraerp.com.br" },
      footer: { backCta: "← Volver al portafolio" },
    },
    fafnir: {
      meta: {
        title: "Fafnir — Gustavo Vianna",
        description: "Motor de elisión fiscal vía SLM: intercepta la transacción antes del Split Payment, con un motor de reglas determinístico teniendo la última palabra.",
      },
      backLabel: "Portafolio",
      logo: "../assets/projetos/fafnir.png",
      hero: {
        eyebrow: "Elisión Fiscal vía SLM · trinidad financiera del Z2A",
        title: "Fafnir",
        subtitle: "Intercepta la transacción antes de que el Split Payment fraccione el monto equivocado",
        summary:
          "El tercer motor de la trinidad financiera del Z2A: usa un SLM para sugerir la clasificación fiscal correcta (NCM) de un producto a partir de su descripción, pero solo aplica la optimización si un motor de reglas determinístico valida la sugerencia contra las tablas oficiales (Sefaz, IBPT). Nombrado en referencia al dragón de la mitología nórdica que protege ferozmente su tesoro.",
        statusNote: "Todavía en fase de diseño — arquitectura definida, implementación aún no iniciada.",
      },
      about: {
        title: "Sobre el proyecto",
        body: "Nació de un problema concreto: los gateways de Split Payment a menudo cobran el impuesto equivocado porque no tienen el contexto exacto del producto, solo el valor bruto de la transacción — la doble tributación y la pérdida de exenciones (como productos monofásicos de PIS/COFINS) son comunes. El Fafnir resuelve esto en el momento de la transacción, no en la declaración mensual: aplica el concepto de Shift-Left (como en seguridad) a la contabilidad, corrigiendo la clasificación fiscal antes de que el dinero se fraccione.",
      },
      architecture: {
        title: "Arquitectura",
        body: "Hexagonal + DDD: el núcleo (TaxOptimizationService) no sabe si está procesando una API REST, un evento de mensajería o un XML de factura — solo le importa la regla de negocio. Un pipeline de 4 etapas, cada una pasando adelante solo lo que ya fue validado:",
        tree: [
          "1. Ingesta y sanitización     normaliza el payload (prefactura o XML de NF-e)",
          "2. Enriquecimiento vía SLM    el modelo sugiere un NCM + confidence_score a partir de la descripción",
          "3. Validación determinística  por debajo del umbral se descarta; por encima, se cruza con Sefaz/IBPT",
          "4. Orquestación del split     calcula la carga tributaria real y llama al Gateway de Pago",
        ],
      },
      stack: {
        title: "Stack técnica",
        items: ["Java 21", "Spring Boot", "PostgreSQL", "SLM (Llama 3 8B / Phi-3)", "Ollama", "QLoRA (Unsloth)"],
      },
      features: {
        title: "Funcionalidades clave",
        intro: "La IA sugiere; la regla decide — la misma tesis del Z2A, aplicada a la contabilidad.",
        items: [
          { title: "Elisión, no evasión", mechanic: "El SLM nunca decide solo: por debajo de un umbral de confianza, la sugerencia se descarta y se mantiene el NCM original." },
          { title: "Fine-tuning local, serving en la nube", mechanic: "QLoRA entrena el modelo en una GPU doméstica (12GB de VRAM alcanzan para un Llama 3 8B); el resultado exportado en GGUF corre vía Ollama en una instancia cloud sin GPU." },
          { title: "Dataset con LGPD desde la ingesta", mechanic: "El pipeline de ETL descarta las etiquetas de cliente, proveedor y valores totales de los XML de factura antes de que cualquier dato se acerque al entorno de entrenamiento." },
          { title: "Ground truth por consenso", mechanic: "Cuando una descripción de producto tiene NCMs divergentes en el histórico, el pipeline usa la clasificación mayoritaria y descarta las excepciones como ruido, no como verdad." },
          { title: "Motor de reglas como policy enforcement point", mechanic: "Mismo razonamiento que Zero Trust: la carga tributaria no es confiable hasta que el motor determinístico valida la regla del estado/gobierno." },
        ],
      },
      security: {
        title: "Elisión vs. evasión: la frontera jurídica",
        body: "Clasificar un producto correctamente para aprovechar una exención es elisión fiscal — 100% legal. El riesgo técnico es que los modelos de lenguaje son probabilísticos: si el SLM clasifica mal para optimizar el impuesto, eso puede interpretarse como evasión fiscal. Por eso el SLM nunca tiene la última palabra — funciona como un oráculo que sugiere, y la decisión de aplicar la alícuota siempre pasa por un motor de reglas determinístico.",
      },
      links: { repo: null, live: null },
      footer: { backCta: "← Volver al portafolio" },
    },
    ultrafoot26: {
      meta: {
        title: "Ultrafoot 26 — Gustavo Vianna",
        description: "Management + Tycoon + Roguelike: remake de un clásico juego de fútbol con gestión de crisis real.",
      },
      backLabel: "Portafolio",
      logo: "../assets/projetos/ultrafoot26.png",
      hero: {
        eyebrow: "Management + Tycoon + Roguelike · remake de un clásico",
        title: "Ultrafoot 26",
        subtitle: "No es otro gestor de planillas: es gestión de crisis real de un club de fútbol",
        summary:
          "Remake de un clásico juego de fútbol que fusiona la jugabilidad directa de un Management con la profundidad de infraestructura y crisis de un Tycoon. El jugador asume no solo el rol de técnico, sino de gestor: bastidores políticos, psicología del plantel, seguridad de datos y las presiones reales del fútbol moderno.",
        statusNote: "Ya en funcionamiento — escritorio (Windows/Mac/Linux) y móvil, con versión gratuita y de pago.",
      },
      about: {
        title: "Sobre el proyecto",
        body: "El MVP prioriza un núcleo sólido antes de cualquier complejidad agregada: motor de partidos con calendario FIFA real, sistema de socio-hincha (el ingreso fluctúa con la moral del equipo), factores de local/visitante con modificadores mentales según edad, y scouting básico. La complejidad de Tycoon y los eventos aleatorios llegan después, sobre una base ya probada — la arquitectura evita procesamiento pesado (sin motor 3D de física de partido) y usa simulación matemática simplificada para los equipos controlados por la máquina.",
      },
      architecture: {
        title: "Arquitectura",
        body: "Hexagonal + DDD aísla el motor del juego (las reglas de negocio) de la interfaz: calcular un partido y sus modificadores de atributos nunca necesita abrir la pantalla del juego para probarse. Los efectos de estado (traumas, moral, presión de patrocinio) se modelan como una lista de modificadores en la entidad Jugador — el motor del partido solo suma los atributos base y resta los activos, sin conocer la regla de negocio detrás de cada uno. Los eventos de dominio conectan módulos (marketing, salud, moral) sin acoplar el código entre ellos.",
        tree: [
          "Frontend de escritorio   Tauri + TypeScript — Windows, Mac, Linux",
          "Frontend móvil           C# — versión nativa",
          "Motor del juego          Java 21 + Spring Boot, orientado a eventos",
          "Base de datos            PostgreSQL — jugadores, historial, cláusulas contractuales",
        ],
      },
      stack: {
        title: "Stack técnica",
        items: ["Next.js", "Tauri", "TypeScript", "C#", "Java 21", "Spring Boot", "PostgreSQL"],
      },
      features: {
        title: "Mecánicas destacadas",
        intro: "Cinco sistemas que se alejan del lugar común de los gestores de fútbol.",
        items: [
          { title: "Traumas y virtudes persistentes", mechanic: "Un colapso colectivo se convierte en una condición fija en el perfil de los jugadores involucrados — un debuff de -15% que solo se quita con un logro específico, no con el paso del tiempo." },
          { title: "Factor geográfico", mechanic: "Jugar en altitud aplica un multiplicador real de consumo de resistencia, forzando rotación de plantel o compra de consumibles." },
          { title: "Guerra de datos entre clubes", mechanic: "Si la infraestructura de seguridad del club es débil, equipos rivales pueden interceptar los informes de tus ojeadores — la misma lógica de Zero Trust aplicada al espionaje deportivo." },
          { title: "Grupos de afinidad en el vestuario", mechanic: "El motor detecta afinidades (nacionalidad, edad, club de origen) y forma grupos; castigar al líder de un grupo hunde la moral de todos a su alrededor." },
          { title: "Marketing de riesgo", mechanic: "Campañas agresivas inyectan dinero rápido, pero crean cláusulas de desempeño — romper la expectativa duplica la presión de la hinchada y puede anular patrocinios." },
        ],
      },
      endpoints: {
        title: "Roadmap",
        intro: "MVP primero, complejidad después — para no sufrir de feature creep.",
        items: [
          { name: "Fase 1 — Core (MVP)", what: "Motor de partidos, calendario FIFA, socio-hincha, factor local/visitante, scouting básico", role: "" },
          { name: "Fase 2 — Tycoon", what: "Infraestructura del estadio, seguridad privada, factor geográfico/altitud", role: "" },
          { name: "Fase 3 — Factor humano", what: "Traumas y virtudes, eventos de crisis, grupos de afinidad", role: "" },
          { name: "Fase 4 — Fútbol moderno", what: "Transición asociación→SAF, guerra de datos, contratos tóxicos, base de datos híbrida real+procedural", role: "" },
        ],
      },
      links: { repo: "https://github.com/jovemegidio/Ultrafoot26", live: "https://remake-ultrafoot.vercel.app" },
      footer: { backCta: "← Volver al portafolio" },
    },
  },
};
