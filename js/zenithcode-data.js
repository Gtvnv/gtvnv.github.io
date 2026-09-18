/**
 * ZENITHCODE — conteúdo da página de detalhe do meta-framework Z2A
 * (assets/z2a/). Destilado dos documentos internos de pesquisa; ver
 * ZenithCode OS-.../_ALINHAMENTO_V4.1/00_ENTRADA_TECNICA.md para a
 * versão completa (não publicada). Editar aqui não afeta o resto do
 * site — esta página tem seu próprio script (js/zenithcode.js).
 */
const ZENITHCODE = {
  "pt-BR": {
    meta: {
      title: "ZenithCode OS / Z2A — Gustavo Vianna",
      description:
        "Governança determinística de IA no ciclo de desenvolvimento: a pesquisa por trás do meta-framework pessoal Z2A.",
    },
    backLabel: "Portfólio",
    hero: {
      eyebrow: "Pesquisa em andamento · meta-framework pessoal",
      title: "ZenithCode OS",
      subtitle: "Governança determinística de IA no ciclo de desenvolvimento de software",
      summary:
        "Assistentes de IA aceleram a produção de código, mas a literatura empírica mostra aumento de defeitos, vulnerabilidades e dívida técnica. O Z2A é o conjunto de padrões que venho documentando e testando informalmente no trabalho pra tratar a IA como componente probabilístico não-autoritativo — nunca como o caminho crítico do sistema.",
      mastersNote:
        "É a base da pesquisa que pretendo aprofundar no Mestrado Profissional em Computação de Missão Crítica.",
    },
    epistemic: {
      title: "Estatuto epistêmico",
      body: "Isto é um produto bem projetado, ainda não validado empiricamente. Nenhum mecanismo passou por piloto com grupo de controle. A única afirmação científica falseável hoje é: o gating determinístico reduz a densidade de defeitos sem penalizar o lead time além de um limiar pré-registrado. O protocolo experimental (baseline, grupo de controle, critérios de morte) já está redigido. Resultado nulo é um resultado válido.",
    },
    problem: {
      title: "O problema",
      body: "A indústria respondeu ao código gerado por IA com quality gates isolados (linters, SAST, políticas de CI soltas). Falta um modelo de governança que trate a IA como sugestão probabilística, decida a integração de forma determinística, e garanta que o caminho crítico do negócio opera mesmo sem IA nenhuma.",
    },
    thesis: {
      title: "A tese central",
      quote: "A IA sugere; a regra decide.",
      body: "A IA generativa atua como sugestão probabilística não-autoritativa. Quem decide se algo entra no build são regras determinísticas sobre a Árvore Sintática Abstrata (AST) e contratos de dependência — nunca o modelo.",
      analogy:
        "Analogia: um estagiário extremamente criativo (o LLM) propõe centenas de linhas por minuto; um advogado rígido (o gate determinístico via AST) só assina o contrato se todas as cláusulas estiverem corretas. Se o estagiário alucina, a porta não abre.",
    },
    coreRules: {
      title: "Núcleo mínimo — o que roda desde o dia 1",
      intro:
        "Um squad de 5 pessoas roda só isto, sem plataforma, IA central ou economia interna — seis configurações de CI/CD, custo cognitivo ~zero.",
      items: [
        { title: "Racional + teste obrigatórios", mechanic: "PR exige cabeçalho de racional arquitetural; o build quebra se as linhas alteradas tiverem 0% de cobertura." },
        { title: "Gate de dependência via AST", mechanic: "Regra estática (ex.: ArchUnit) barra import infraestrutura → domínio; violou, o deploy é bloqueado." },
        { title: "Error Budget (SLO)", mechanic: "Orçamento de confiabilidade. Estourou, o squad congela features novas até restaurar." },
        { title: "Post-incident review com prevenção", mechanic: "Fechar um incidente exige a regra automatizada que previne a recidiva — mitigar não basta." },
        { title: "Firewall de dependências", mechanic: "Proibido baixar biblioteca direto; tudo passa por registry interno com varredura de CVE/licença." },
        { title: "Limite de WIP", mechanic: "Teto explícito de trabalho em progresso; nenhuma demanda entra em squad saturado." },
      ],
    },
    blackout: {
      title: "O Teste do Apagão",
      tag: "a prova central",
      whatIs:
        "Um job cíclico no pipeline que desliga 100% da IA (ou injeta respostas corrompidas) e executa os fluxos críticos de negócio: autenticação, faturamento, emissão fiscal, deploy.",
      criterion: "Se qualquer caminho crítico depender de um componente probabilístico pra completar, o build quebra.",
      proves:
        "Prova que a IA é acelerador, não caminho crítico. A operação sobrevive a um blackout de IA, a um envenenamento de modelo, a uma alucinação sistêmica ou à queda do fornecedor.",
      closing: "Se o negócio sobrevive ao apagão, a tese se prova. É falseável e automatizável — não uma promessa.",
    },
    measurement: {
      title: "Como se mede",
      intro: "As dimensões humana e financeira não são teses paralelas — são os instrumentos que medem o impacto da governança de IA.",
      items: [
        { name: "DORA", what: "lead time, change failure rate, MTTR, deploy frequency", role: "evidência primária" },
        { name: "Densidade de defeitos", what: "defeitos/KLOC + violações de dependência", role: "evidência primária" },
        { name: "Custeio TDABC automatizado", what: "custo real por objeto de custo, via telemetria", role: "evidência comercial (ROI)" },
        { name: "Carga cognitiva", what: "proxies de artefato: contextos tocados, complexidade sob titularidade", role: "evidência secundária" },
      ],
    },
    satellites: {
      title: "Os 14 satélites",
      intro:
        "O núcleo (Z2A) é o kernel inviolável; cada satélite é um plugin opcional, acoplado só quando a empresa cruza um gatilho de dor real — nunca um monólito obrigatório.",
      items: [
        { id: "01", slug: "themis", name: "Themis", domain: "Segurança & Compliance", gloss: "Gate determinístico de segurança: gera vulnerabilidade, o build quebra." },
        { id: "02", slug: "argus", name: "Árgus", domain: "FinOps / Orçamento", gloss: "Orçamento como código: cada serviço carrega seu próprio custo real." },
        { id: "03", slug: "dk-ops", name: "DK-Ops", domain: "Plataforma / SRE / IDP", gloss: "Plataforma interna que absorve a complexidade de infra do time de produto." },
        { id: "04", slug: "quiron", name: "Quíron", domain: "RH Sociotécnico / Ergonomia", gloss: "Carga cognitiva e progressão de carreira tratadas como métrica de engenharia." },
        { id: "05", slug: "hefesto", name: "Hefesto", domain: "Hardware / IoT / Gêmeos Digitais", gloss: "Simulação ciber-física antes de tocar hardware real." },
        { id: "06", slug: "evelyn", name: "E.V.E.L.Y.N.", domain: "IA Central + Edge", gloss: "Modelos locais (SLMs) que sugerem, nunca decidem sozinhos." },
        { id: "07", slug: "apolo", name: "Apolo", domain: "Go-To-Market / Vendas", gloss: "Gateway comercial: onde a arquitetura encontra o cliente." },
        { id: "08", slug: "prometeu", name: "Prometeu", domain: "Validação / Red Team", gloss: "Conselho adversarial que tenta furar toda regra nova antes de valer." },
        { id: "09", slug: "atlas", name: "Atlas", domain: "Governança Societária / Geográfica", gloss: "Compliance fiscal e jurídico como código, não como planilha." },
        { id: "10", slug: "catharsis", name: "Catharsis", domain: "Desconstrução de Mindset", gloss: "Primeiro passo de quem entra: desaprender atalho antes de aprender arquitetura." },
        { id: "11", slug: "hermes", name: "Hermes", domain: "Supply Chain / Logística", gloss: "Rastreabilidade ponta a ponta de tudo que é físico no sistema." },
        { id: "12", slug: "odyssey", name: "Odyssey", domain: "Onboarding de Elite", gloss: "Cockpits setoriais que aceleram quem chega sem baixar a régua." },
        { id: "13", slug: "oraculo", name: "Oráculo", domain: "Data Mesh / LGPD", gloss: "Dado tratado como produto, com dono e ciclo de vida, não como despejo." },
        { id: "14", slug: "egide", name: "Égide", domain: "ITSM / Suporte", gloss: "Camada que absorve o chão de fábrica: incidentes, contratos, suporte." },
      ],
    },
    whenNot: {
      title: "Quando não adotar",
      items: [
        "Startup pré-PMF — precisa de velocidade e descoberta; o gating não compensa quando o custo do defeito é baixo.",
        "Times de 2 a 5 pessoas — o overhead esmaga o benefício; adote só as 6 regras do núcleo.",
        "Protótipos e projetos descartáveis.",
        "Organizações sem massa crítica pra operar telemetria e plataforma.",
      ],
    },
    footer: {
      vertexNote: "O Vertex é o primeiro pedaço desse estudo que virou código de verdade.",
      backCta: "← Voltar ao portfólio",
    },
  },

  en: {
    meta: {
      title: "ZenithCode OS / Z2A — Gustavo Vianna",
      description: "Deterministic AI governance across the development lifecycle: the research behind the personal Z2A meta-framework.",
    },
    backLabel: "Portfolio",
    hero: {
      eyebrow: "Ongoing research · personal meta-framework",
      title: "ZenithCode OS",
      subtitle: "Deterministic AI governance across the software development lifecycle",
      summary:
        "AI assistants speed up code production, but empirical literature shows rising defects, vulnerabilities, and technical debt. Z2A is the set of patterns I've been documenting and testing informally at work to treat AI as a non-authoritative probabilistic component — never the system's critical path.",
      mastersNote: "It's the foundation of the research I plan to deepen in my Professional Master's in Mission-Critical Computing.",
    },
    epistemic: {
      title: "Epistemic status",
      body: "This is a well-designed product, not yet empirically validated. No mechanism has gone through a controlled pilot. The one falsifiable scientific claim today: deterministic gating reduces defect density without penalizing lead time beyond a pre-registered threshold. The experimental protocol (baseline, control group, kill criteria) is already written. A null result is a valid result.",
    },
    problem: {
      title: "The problem",
      body: "The industry responded to AI-generated code with isolated quality gates (linters, SAST, loose CI policies). What's missing is a governance model that treats AI as a probabilistic suggestion, decides integration deterministically, and guarantees the business's critical path runs even with zero AI.",
    },
    thesis: {
      title: "The central thesis",
      quote: "AI suggests; the rule decides.",
      body: "Generative AI acts as a non-authoritative probabilistic suggestion. What decides whether something ships is deterministic rules over the Abstract Syntax Tree (AST) and dependency contracts — never the model.",
      analogy:
        "Analogy: an extremely creative intern (the LLM) proposes hundreds of lines a minute; a rigid lawyer (the deterministic AST gate) only signs the contract if every clause checks out. If the intern hallucinates, the door doesn't open.",
    },
    coreRules: {
      title: "Minimum core — what runs from day one",
      intro: "A 5-person squad runs on just this, no platform, no central AI, no internal economy — six CI/CD settings, near-zero cognitive cost.",
      items: [
        { title: "Mandatory rationale + test", mechanic: "The PR requires an architectural-rationale header; the build breaks if changed lines have 0% coverage." },
        { title: "AST dependency gate", mechanic: "A static rule (e.g. ArchUnit) blocks infrastructure → domain imports; violate it and deploy is blocked." },
        { title: "Error Budget (SLO)", mechanic: "A reliability budget. Blow it and the squad freezes new features until it recovers." },
        { title: "Post-incident review with prevention", mechanic: "Closing an incident requires the automated rule that prevents recurrence — mitigation alone isn't enough." },
        { title: "Dependency firewall", mechanic: "No direct public library downloads; everything routes through an internal registry with CVE/license scanning." },
        { title: "WIP limit", mechanic: "An explicit cap on work in progress; no new demand enters a saturated squad." },
      ],
    },
    blackout: {
      title: "The Blackout Test",
      tag: "the central proof",
      whatIs: "A cyclical pipeline job that switches off 100% of AI (or injects corrupted responses) and runs the critical business flows: authentication, billing, tax filing, deploy.",
      criterion: "If any critical path depends on a probabilistic component to complete, the build breaks.",
      proves: "Proves AI is an accelerator, not a critical path. The operation survives an AI blackout, a model-poisoning event, a systemic hallucination, or the vendor going down.",
      closing: "If the business survives the blackout, the thesis holds. It's falsifiable and automatable — not a promise.",
    },
    measurement: {
      title: "How it's measured",
      intro: "The human and financial dimensions aren't parallel theses — they're the instruments that measure the impact of AI governance.",
      items: [
        { name: "DORA", what: "lead time, change failure rate, MTTR, deploy frequency", role: "primary evidence" },
        { name: "Defect density", what: "defects/KLOC + dependency violations", role: "primary evidence" },
        { name: "Automated TDABC costing", what: "real cost per cost object, via telemetry", role: "commercial evidence (ROI)" },
        { name: "Cognitive load", what: "artifact proxies: contexts touched, complexity under ownership", role: "secondary evidence" },
      ],
    },
    satellites: {
      title: "The 14 satellites",
      intro: "The core (Z2A) is the inviolable kernel; each satellite is an optional plugin, attached only once the company crosses a real pain trigger — never a mandatory monolith.",
      items: [
        { id: "01", slug: "themis", name: "Themis", domain: "Security & Compliance", gloss: "Deterministic security gate: trigger a vulnerability, the build breaks." },
        { id: "02", slug: "argus", name: "Argus", domain: "FinOps / Budget", gloss: "Budget as code: every service carries its own real cost." },
        { id: "03", slug: "dk-ops", name: "DK-Ops", domain: "Platform / SRE / IDP", gloss: "Internal platform that absorbs infra complexity for the product team." },
        { id: "04", slug: "quiron", name: "Quiron", domain: "Sociotechnical HR / Ergonomics", gloss: "Cognitive load and career progression treated as an engineering metric." },
        { id: "05", slug: "hefesto", name: "Hefesto", domain: "Hardware / IoT / Digital Twins", gloss: "Cyber-physical simulation before touching real hardware." },
        { id: "06", slug: "evelyn", name: "E.V.E.L.Y.N.", domain: "Central + Edge AI", gloss: "Local models (SLMs) that suggest, never decide alone." },
        { id: "07", slug: "apolo", name: "Apolo", domain: "Go-To-Market / Sales", gloss: "Commercial gateway: where the architecture meets the customer." },
        { id: "08", slug: "prometeu", name: "Prometeu", domain: "Validation / Red Team", gloss: "An adversarial council that tries to break every new rule before it counts." },
        { id: "09", slug: "atlas", name: "Atlas", domain: "Corporate / Geographic Governance", gloss: "Tax and legal compliance as code, not as a spreadsheet." },
        { id: "10", slug: "catharsis", name: "Catharsis", domain: "Mindset Deconstruction", gloss: "The first step for newcomers: unlearn shortcuts before learning architecture." },
        { id: "11", slug: "hermes", name: "Hermes", domain: "Supply Chain / Logistics", gloss: "End-to-end traceability for everything physical in the system." },
        { id: "12", slug: "odyssey", name: "Odyssey", domain: "Elite Onboarding", gloss: "Sector-specific cockpits that fast-track newcomers without lowering the bar." },
        { id: "13", slug: "oraculo", name: "Oraculo", domain: "Data Mesh / LGPD", gloss: "Data treated as a product, with an owner and a lifecycle, not a dumping ground." },
        { id: "14", slug: "egide", name: "Egide", domain: "ITSM / Support", gloss: "The layer that absorbs the shop floor: incidents, contracts, support." },
      ],
    },
    whenNot: {
      title: "When not to adopt it",
      items: [
        "Pre-PMF startups — you need speed and discovery; gating doesn't pay off when the cost of a defect is low.",
        "Teams of 2 to 5 people — the overhead crushes the benefit; adopt just the 6 core rules.",
        "Prototypes and throwaway projects.",
        "Organizations without the critical mass to run telemetry and a platform.",
      ],
    },
    footer: {
      vertexNote: "Vertex is the first piece of this study that turned into real code.",
      backCta: "← Back to the portfolio",
    },
  },

  es: {
    meta: {
      title: "ZenithCode OS / Z2A — Gustavo Vianna",
      description: "Gobernanza determinística de IA en el ciclo de desarrollo: la investigación detrás del meta-framework personal Z2A.",
    },
    backLabel: "Portafolio",
    hero: {
      eyebrow: "Investigación en curso · meta-framework personal",
      title: "ZenithCode OS",
      subtitle: "Gobernanza determinística de IA en el ciclo de desarrollo de software",
      summary:
        "Los asistentes de IA aceleran la producción de código, pero la literatura empírica muestra un aumento de defectos, vulnerabilidades y deuda técnica. Z2A es el conjunto de patrones que vengo documentando y probando de forma informal en el trabajo para tratar la IA como un componente probabilístico no autoritativo, nunca como el camino crítico del sistema.",
      mastersNote: "Es la base de la investigación que planeo profundizar en la Maestría Profesional en Computación de Misión Crítica.",
    },
    epistemic: {
      title: "Estatuto epistémico",
      body: "Esto es un producto bien diseñado, todavía no validado empíricamente. Ningún mecanismo pasó por un piloto con grupo de control. La única afirmación científica falseable hoy es: el gating determinístico reduce la densidad de defectos sin penalizar el lead time más allá de un umbral preregistrado. El protocolo experimental (línea base, grupo de control, criterios de muerte) ya está redactado. Un resultado nulo es un resultado válido.",
    },
    problem: {
      title: "El problema",
      body: "La industria respondió al código generado por IA con quality gates aislados (linters, SAST, políticas de CI sueltas). Falta un modelo de gobernanza que trate la IA como sugerencia probabilística, decida la integración de forma determinística y garantice que el camino crítico del negocio funcione incluso sin IA.",
    },
    thesis: {
      title: "La tesis central",
      quote: "La IA sugiere; la regla decide.",
      body: "La IA generativa actúa como sugerencia probabilística no autoritativa. Quien decide si algo entra al build son reglas determinísticas sobre el Árbol de Sintaxis Abstracta (AST) y contratos de dependencia, nunca el modelo.",
      analogy:
        "Analogía: un pasante extremadamente creativo (el LLM) propone cientos de líneas por minuto; un abogado rígido (el gate determinístico vía AST) solo firma el contrato si todas las cláusulas están correctas. Si el pasante alucina, la puerta no se abre.",
    },
    coreRules: {
      title: "Núcleo mínimo — lo que corre desde el día 1",
      intro: "Un squad de 5 personas corre solo con esto, sin plataforma, IA central ni economía interna: seis configuraciones de CI/CD, costo cognitivo ~cero.",
      items: [
        { title: "Racional + prueba obligatorios", mechanic: "El PR exige un encabezado de racional arquitectónico; el build falla si las líneas modificadas tienen 0% de cobertura." },
        { title: "Gate de dependencia vía AST", mechanic: "Una regla estática (ej. ArchUnit) bloquea el import infraestructura → dominio; si se viola, se bloquea el deploy." },
        { title: "Error Budget (SLO)", mechanic: "Presupuesto de confiabilidad. Si se agota, el squad congela funciones nuevas hasta restaurarlo." },
        { title: "Revisión post-incidente con prevención", mechanic: "Cerrar un incidente exige la regla automatizada que previene la recurrencia; mitigar no basta." },
        { title: "Firewall de dependencias", mechanic: "Prohibido bajar librerías públicas directo; todo pasa por un registry interno con escaneo de CVE/licencia." },
        { title: "Límite de WIP", mechanic: "Tope explícito de trabajo en progreso; ninguna demanda entra a un squad saturado." },
      ],
    },
    blackout: {
      title: "La Prueba del Apagón",
      tag: "la prueba central",
      whatIs: "Un job cíclico en el pipeline que apaga el 100% de la IA (o inyecta respuestas corruptas) y ejecuta los flujos críticos del negocio: autenticación, facturación, emisión fiscal, deploy.",
      criterion: "Si cualquier camino crítico depende de un componente probabilístico para completarse, el build falla.",
      proves: "Prueba que la IA es un acelerador, no un camino crítico. La operación sobrevive a un apagón de IA, a un envenenamiento de modelo, a una alucinación sistémica o a la caída del proveedor.",
      closing: "Si el negocio sobrevive al apagón, la tesis se prueba. Es falseable y automatizable, no una promesa.",
    },
    measurement: {
      title: "Cómo se mide",
      intro: "Las dimensiones humana y financiera no son tesis paralelas: son los instrumentos que miden el impacto de la gobernanza de IA.",
      items: [
        { name: "DORA", what: "lead time, change failure rate, MTTR, deploy frequency", role: "evidencia primaria" },
        { name: "Densidad de defectos", what: "defectos/KLOC + violaciones de dependencia", role: "evidencia primaria" },
        { name: "Costeo TDABC automatizado", what: "costo real por objeto de costo, vía telemetría", role: "evidencia comercial (ROI)" },
        { name: "Carga cognitiva", what: "proxies de artefacto: contextos tocados, complejidad bajo titularidad", role: "evidencia secundaria" },
      ],
    },
    satellites: {
      title: "Los 14 satélites",
      intro: "El núcleo (Z2A) es el kernel inviolable; cada satélite es un plugin opcional, que se acopla solo cuando la empresa cruza un disparador de dolor real, nunca un monolito obligatorio.",
      items: [
        { id: "01", slug: "themis", name: "Themis", domain: "Seguridad y Cumplimiento", gloss: "Gate determinístico de seguridad: genera vulnerabilidad, el build falla." },
        { id: "02", slug: "argus", name: "Argus", domain: "FinOps / Presupuesto", gloss: "Presupuesto como código: cada servicio lleva su propio costo real." },
        { id: "03", slug: "dk-ops", name: "DK-Ops", domain: "Plataforma / SRE / IDP", gloss: "Plataforma interna que absorbe la complejidad de infra del equipo de producto." },
        { id: "04", slug: "quiron", name: "Quirón", domain: "RRHH Sociotécnico / Ergonomía", gloss: "Carga cognitiva y progresión de carrera tratadas como métrica de ingeniería." },
        { id: "05", slug: "hefesto", name: "Hefesto", domain: "Hardware / IoT / Gemelos Digitales", gloss: "Simulación ciberfísica antes de tocar hardware real." },
        { id: "06", slug: "evelyn", name: "E.V.E.L.Y.N.", domain: "IA Central + Edge", gloss: "Modelos locales (SLMs) que sugieren, nunca deciden solos." },
        { id: "07", slug: "apolo", name: "Apolo", domain: "Go-To-Market / Ventas", gloss: "Gateway comercial: donde la arquitectura encuentra al cliente." },
        { id: "08", slug: "prometeu", name: "Prometeo", domain: "Validación / Red Team", gloss: "Consejo adversarial que intenta romper cada regla nueva antes de que cuente." },
        { id: "09", slug: "atlas", name: "Atlas", domain: "Gobernanza Societaria / Geográfica", gloss: "Cumplimiento fiscal y legal como código, no como planilla." },
        { id: "10", slug: "catharsis", name: "Catharsis", domain: "Deconstrucción de Mentalidad", gloss: "El primer paso de quien llega: desaprender atajos antes de aprender arquitectura." },
        { id: "11", slug: "hermes", name: "Hermes", domain: "Supply Chain / Logística", gloss: "Trazabilidad de punta a punta de todo lo físico en el sistema." },
        { id: "12", slug: "odyssey", name: "Odyssey", domain: "Onboarding de Élite", gloss: "Cabinas sectoriales que aceleran a quien llega sin bajar el estándar." },
        { id: "13", slug: "oraculo", name: "Oráculo", domain: "Data Mesh / LGPD", gloss: "Dato tratado como producto, con dueño y ciclo de vida, no como vertedero." },
        { id: "14", slug: "egide", name: "Égide", domain: "ITSM / Soporte", gloss: "La capa que absorbe el piso de fábrica: incidentes, contratos, soporte." },
      ],
    },
    whenNot: {
      title: "Cuándo no adoptarlo",
      items: [
        "Startups pre-PMF — necesitan velocidad y descubrimiento; el gating no compensa cuando el costo del defecto es bajo.",
        "Equipos de 2 a 5 personas — el overhead aplasta el beneficio; adopten solo las 6 reglas del núcleo.",
        "Prototipos y proyectos descartables.",
        "Organizaciones sin masa crítica para operar telemetría y plataforma.",
      ],
    },
    footer: {
      vertexNote: "Vertex es el primer fragmento de este estudio que se convirtió en código real.",
      backCta: "← Volver al portafolio",
    },
  },
};
