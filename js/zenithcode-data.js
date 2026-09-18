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
        { id: "01", slug: "themis", name: "Themis", domain: "Segurança & Compliance", gloss: "Gate determinístico de segurança: gera vulnerabilidade, o build quebra.",
          detail: "A manifestação prática é o AegisProtocol: um sidecar de identidade Zero-Trust que valida cada requisição por atributo (ABAC/RBAC) com cache local, então a latência de autorização fica perto de zero. Logs de auditoria são write-once (WORM): nem um administrador de banco consegue apagar um registro depois de gravado. O pipeline de CI trava o deploy automaticamente se a varredura SAST/dependências falhar, sem opção de ignorar manualmente." },
        { id: "02", slug: "argus", name: "Árgus", domain: "FinOps / Orçamento", gloss: "Orçamento como código: cada serviço carrega seu próprio custo real.",
          detail: "Cada serviço carrega seu próprio orçamento de erro (Error Budget) e seu custo real calculado por TDABC automatizado, telemetria que atribui custo de infraestrutura a cada objeto de negócio, não só ao time de TI. Estourar o orçamento de confiabilidade convertido em orçamento financeiro trava novas features até a equipe restaurar o SLO. A meta é que decisão de arquitetura e decisão financeira usem o mesmo número, não dois relatórios que nunca se cruzam." },
        { id: "03", slug: "dk-ops", name: "DK-Ops", domain: "Plataforma / SRE / IDP", gloss: "Plataforma interna que absorve a complexidade de infra do time de produto.",
          detail: "Plataforma interna de desenvolvimento (IDP) que oferece \"golden paths\": modelos prontos de infraestrutura como código (Pulumi) que já vêm com guardrails de segurança e observabilidade embutidos, então o time de produto não precisa reinventar a esteira toda vez. Deploys são progressivos (canary/blue-green) com rollback automático se as métricas de erro subirem. Manifestação real: o Vertex, o Internal Developer Platform que já roda como projeto de verdade." },
        { id: "04", slug: "quiron", name: "Quíron", domain: "RH Sociotécnico / Ergonomia", gloss: "Carga cognitiva e progressão de carreira tratadas como métrica de engenharia.",
          detail: "Trata carga cognitiva como uma métrica de engenharia, não como opinião: mede proxies objetivos como número de contextos/sistemas diferentes que uma pessoa precisa tocar por semana e a complexidade sob titularidade de cada dev. Ultrapassar o limiar aciona redistribuição de trabalho antes de virar esgotamento, e a progressão de carreira é atrelada a evidência técnica registrada, não a tempo de casa." },
        { id: "05", slug: "hefesto", name: "Hefesto", domain: "Hardware / IoT / Gêmeos Digitais", gloss: "Simulação ciber-física antes de tocar hardware real.",
          detail: "Antes de qualquer mudança tocar um equipamento físico de verdade, ela roda primeiro contra um gêmeo digital, uma simulação do comportamento real do hardware. Atualizações chegam ao equipamento por OTA (over-the-air) com um circuit breaker físico que corta a operação se a telemetria sair da faixa esperada, evitando que um bug de software vire um incidente físico." },
        { id: "06", slug: "evelyn", name: "E.V.E.L.Y.N.", domain: "IA Central + Edge", gloss: "Modelos locais (SLMs) que sugerem, nunca decidem sozinhos.",
          detail: "Em vez de um modelo generalista único, treina modelos de linguagem pequenos (SLMs) especializados por domínio, cada um exposto só aos dados daquele domínio. Nenhuma sugestão de IA chega ao código sem passar pelos testes automatizados do pipeline, e cada resposta carrega a assinatura do modelo/parâmetros usados, pra ficar auditável depois. Toda atualização de modelo roda 2 semanas em modo sombra antes de ser promovida, e é bloqueada automaticamente se piorar em qualquer caso de um conjunto fixo de testes de segurança." },
        { id: "07", slug: "apolo", name: "Apolo", domain: "Go-To-Market / Vendas", gloss: "Gateway comercial: onde a arquitetura encontra o cliente.",
          detail: "Funciona como um gateway comercial que traduz artefatos técnicos internos (controles de acesso, compliance, observabilidade) para a terminologia que um cliente ou auditor externo reconhece (ISO, RBAC/ABAC), sem alterar o registro técnico original: só a camada de apresentação muda. Exports para auditoria passam por redação automática que remove PII e identificadores internos antes de sair." },
        { id: "08", slug: "prometeu", name: "Prometeu", domain: "Validação / Red Team", gloss: "Conselho adversarial que tenta furar toda regra nova antes de valer.",
          detail: "Comitê de validação que avalia mudanças estruturais antes de consumirem orçamento, com o rigor calibrado pelo raio de impacto: mudanças no núcleo exigem consenso total, experimentos isolados seguem um rito simplificado testado numa fatia pequena do tráfego real. Toda decisão vira um registro formal com o trade-off aceito, e revisões excepcionais são auditadas por engenheiros sêniores que colocam a própria reputação em jogo ao aprovar." },
        { id: "09", slug: "atlas", name: "Atlas", domain: "Governança Societária / Geográfica", gloss: "Compliance fiscal e jurídico como código, não como planilha.",
          detail: "Trata compliance fiscal e jurídico como código versionado, não como planilha de contador: cada jurisdição/CNPJ tem suas regras fiscais expressas como configuração testável. Isola o raio de impacto por entidade societária, então um incidente numa filial não derruba as outras." },
        { id: "10", slug: "catharsis", name: "Catharsis", domain: "Desconstrução de Mindset", gloss: "Primeiro passo de quem entra: desaprender atalho antes de aprender arquitetura.",
          detail: "Onboarding obrigatório em três etapas: auditar um repositório real com falhas conhecidas de segurança, refatorar um módulo aplicando arquitetura limpa e testes automatizados sem usar IA generativa, e defender oralmente as decisões tomadas. A ideia é desaprender o atalho antes de aprender o padrão: prestadores de curto prazo pulam essa etapa e a confiança fica só por conta de controles automatizados." },
        { id: "11", slug: "hermes", name: "Hermes", domain: "Supply Chain / Logística", gloss: "Rastreabilidade ponta a ponta de tudo que é físico no sistema.",
          detail: "Rastreia cada item físico ponta a ponta, do fornecedor até o descarte, com telemetria de depreciação alimentando o cálculo de custo real do Árgus. Qualquer ruptura na cadeia (atraso, extravio) dispara alerta automático em vez de ser descoberta só na contagem de estoque." },
        { id: "12", slug: "odyssey", name: "Odyssey", domain: "Onboarding de Elite", gloss: "Cockpits setoriais que aceleram quem chega sem baixar a régua.",
          detail: "Certificação técnica por competência, não por tempo de casa: quatro módulos avaliados por prova prática, desacoplar dependências externas, testar invasão/escalonamento de privilégio, analisar performance e aprender uma tecnologia nova só com a documentação oficial. Quem entra faz um deploy real em produção já no primeiro dia; terceiros de curto prazo cursam só o módulo de segurança." },
        { id: "13", slug: "oraculo", name: "Oráculo", domain: "Data Mesh / LGPD", gloss: "Dado tratado como produto, com dono e ciclo de vida, não como despejo.",
          detail: "Cada dado tem um dono e um ciclo de vida definido, não fica solto num data lake sem responsável. Direito ao esquecimento (LGPD) é resolvido via crypto-shredding: destrói só a chave de criptografia daquele dado, que vira ruído matemático irrecuperável sem precisar tocar nos logs imutáveis de auditoria." },
        { id: "14", slug: "egide", name: "Égide", domain: "ITSM / Suporte", gloss: "Camada que absorve o chão de fábrica: incidentes, contratos, suporte.",
          detail: "Suporte técnico em camadas (autoatendimento, triagem por runbook, e uma camada de observabilidade com acesso só-leitura ao banco) que isola engenheiros de interrupção direta; chamados sem informação padronizada (passos de reprodução, evidência, impacto) são rejeitados automaticamente. Um incidente só fecha de verdade quando um teste de regressão daquela falha específica entra no pipeline, não quando alguém marca o chamado como resolvido." },
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
        { id: "01", slug: "themis", name: "Themis", domain: "Security & Compliance", gloss: "Deterministic security gate: trigger a vulnerability, the build breaks.",
          detail: "Its real-world form is AegisProtocol: a Zero-Trust identity sidecar that validates every request by attribute (ABAC/RBAC) with a local cache, keeping authorization latency near zero. Audit logs are write-once (WORM) — not even a database admin can delete a record after it's written. The CI pipeline automatically blocks deploys on a failed SAST/dependency scan, with no manual override." },
        { id: "02", slug: "argus", name: "Argus", domain: "FinOps / Budget", gloss: "Budget as code: every service carries its own real cost.",
          detail: "Every service carries its own error budget and its real cost, computed by automated TDABC telemetry that attributes infrastructure spend to business objects, not just to the IT line item. Blowing the reliability budget converts into a financial one and freezes new features until the team restores the SLO. The goal is for architecture decisions and financial decisions to run off the same number instead of two reports that never meet." },
        { id: "03", slug: "dk-ops", name: "DK-Ops", domain: "Platform / SRE / IDP", gloss: "Internal platform that absorbs infra complexity for the product team.",
          detail: "An internal developer platform (IDP) offering \"golden paths\": ready-made infrastructure-as-code templates (Pulumi) with security and observability guardrails baked in, so product teams don't rebuild the pipeline from scratch each time. Deploys are progressive (canary/blue-green) with automatic rollback if error metrics spike. Its real manifestation is Vertex, the Internal Developer Platform already running as an actual project." },
        { id: "04", slug: "quiron", name: "Quiron", domain: "Sociotechnical HR / Ergonomics", gloss: "Cognitive load and career progression treated as an engineering metric.",
          detail: "Treats cognitive load as an engineering metric, not an opinion: it tracks objective proxies like how many different systems a person touches per week and the complexity they own. Crossing the threshold triggers workload redistribution before it turns into burnout, and career progression is tied to recorded technical evidence, not tenure." },
        { id: "05", slug: "hefesto", name: "Hefesto", domain: "Hardware / IoT / Digital Twins", gloss: "Cyber-physical simulation before touching real hardware.",
          detail: "Before any change touches real physical equipment, it first runs against a digital twin, a simulation of the hardware's real behavior. Updates reach the device over-the-air with a physical circuit breaker that cuts operation if telemetry drifts outside the expected range, so a software bug can't turn into a physical incident." },
        { id: "06", slug: "evelyn", name: "E.V.E.L.Y.N.", domain: "Central + Edge AI", gloss: "Local models (SLMs) that suggest, never decide alone.",
          detail: "Instead of one general-purpose model, it trains small, domain-specialized language models (SLMs), each exposed only to that domain's data. No AI suggestion reaches production code without passing the pipeline's automated tests, and every response carries a signature of the model/parameters used, so it stays auditable later. Every model update runs two weeks in shadow mode before promotion, and is automatically blocked if it regresses on any case in a fixed security test set." },
        { id: "07", slug: "apolo", name: "Apolo", domain: "Go-To-Market / Sales", gloss: "Commercial gateway: where the architecture meets the customer.",
          detail: "Works as a commercial gateway that translates internal technical artifacts (access control, compliance, observability) into terminology a customer or external auditor recognizes (ISO, RBAC/ABAC), without touching the underlying technical record — only the presentation layer changes. Exports for external audits go through automatic redaction that strips PII and internal identifiers before they leave." },
        { id: "08", slug: "prometeu", name: "Prometeu", domain: "Validation / Red Team", gloss: "An adversarial council that tries to break every new rule before it counts.",
          detail: "A validation council that reviews structural changes before they consume budget, with review rigor calibrated to blast radius: core changes require full consensus, isolated experiments follow a lighter process tested against a small slice of real traffic. Every decision becomes a formal record with the accepted trade-off, and exceptional reviews are audited by senior engineers who stake their own reputation on approving it." },
        { id: "09", slug: "atlas", name: "Atlas", domain: "Corporate / Geographic Governance", gloss: "Tax and legal compliance as code, not as a spreadsheet.",
          detail: "Treats tax and legal compliance as versioned code, not an accountant's spreadsheet: each jurisdiction/legal entity has its fiscal rules expressed as testable configuration. It isolates blast radius by legal entity, so an incident in one subsidiary doesn't take down the others." },
        { id: "10", slug: "catharsis", name: "Catharsis", domain: "Mindset Deconstruction", gloss: "The first step for newcomers: unlearn shortcuts before learning architecture.",
          detail: "Mandatory onboarding in three steps: audit a real repository with known security flaws, refactor a module applying clean architecture and automated tests without generative AI, then defend the decisions out loud. The point is unlearning the shortcut before learning the pattern: short-term contractors skip this step, with trust resting entirely on automated controls instead." },
        { id: "11", slug: "hermes", name: "Hermes", domain: "Supply Chain / Logistics", gloss: "End-to-end traceability for everything physical in the system.",
          detail: "Tracks every physical item end-to-end, from supplier to disposal, feeding depreciation telemetry into Argus's real-cost calculation. Any break in the chain — delay, loss — triggers an automatic alert instead of being discovered only at inventory count." },
        { id: "12", slug: "odyssey", name: "Odyssey", domain: "Elite Onboarding", gloss: "Sector-specific cockpits that fast-track newcomers without lowering the bar.",
          detail: "Competency-based technical certification, not tenure-based: four modules assessed through hands-on tests — decoupling external dependencies, penetration/privilege-escalation testing, performance analysis, and learning a new technology from official docs alone. New hires ship a real, if small, production deploy on day one; short-term contractors only take the security module." },
        { id: "13", slug: "oraculo", name: "Oraculo", domain: "Data Mesh / LGPD", gloss: "Data treated as a product, with an owner and a lifecycle, not a dumping ground.",
          detail: "Every piece of data has an owner and a defined lifecycle instead of sitting unaccounted for in a data lake. The right to be forgotten (LGPD/GDPR) is handled via crypto-shredding: destroying just that data's encryption key turns it into unrecoverable mathematical noise, without touching the immutable audit logs." },
        { id: "14", slug: "egide", name: "Egide", domain: "ITSM / Support", gloss: "The layer that absorbs the shop floor: incidents, contracts, support.",
          detail: "Layered technical support (self-service, runbook-driven triage, and a read-only observability layer) that shields engineers from direct interruptions; tickets missing standardized information (repro steps, evidence, impact) are auto-rejected. An incident only truly closes when an automated regression test for that specific failure lands in the pipeline, not when someone marks the ticket resolved." },
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
        { id: "01", slug: "themis", name: "Themis", domain: "Seguridad y Cumplimiento", gloss: "Gate determinístico de seguridad: genera vulnerabilidad, el build falla.",
          detail: "Su manifestación real es AegisProtocol: un sidecar de identidad Zero-Trust que valida cada solicitud por atributo (ABAC/RBAC) con caché local, manteniendo la latencia de autorización cerca de cero. Los logs de auditoría son de escritura única (WORM): ni un administrador de base de datos puede borrar un registro después de escrito. El pipeline de CI bloquea automáticamente el deploy si falla el escaneo SAST/dependencias, sin opción de anularlo manualmente." },
        { id: "02", slug: "argus", name: "Argus", domain: "FinOps / Presupuesto", gloss: "Presupuesto como código: cada servicio lleva su propio costo real.",
          detail: "Cada servicio lleva su propio presupuesto de error y su costo real, calculado por telemetría TDABC automatizada que atribuye el gasto de infraestructura a objetos de negocio, no solo a la línea de TI. Agotar el presupuesto de confiabilidad se convierte en uno financiero y congela funciones nuevas hasta restaurar el SLO. La meta es que la decisión de arquitectura y la financiera usen el mismo número, no dos informes que nunca se cruzan." },
        { id: "03", slug: "dk-ops", name: "DK-Ops", domain: "Plataforma / SRE / IDP", gloss: "Plataforma interna que absorbe la complejidad de infra del equipo de producto.",
          detail: "Plataforma interna de desarrollo (IDP) que ofrece \"golden paths\": plantillas listas de infraestructura como código (Pulumi) con guardrails de seguridad y observabilidad ya incluidos, para que el equipo de producto no reconstruya el pipeline cada vez. Los deploys son progresivos (canary/blue-green) con rollback automático si las métricas de error suben. Su manifestación real es Vertex, la Internal Developer Platform que ya corre como proyecto de verdad." },
        { id: "04", slug: "quiron", name: "Quirón", domain: "RRHH Sociotécnico / Ergonomía", gloss: "Carga cognitiva y progresión de carrera tratadas como métrica de ingeniería.",
          detail: "Trata la carga cognitiva como una métrica de ingeniería, no como opinión: mide proxies objetivos como cuántos sistemas distintos toca una persona por semana y la complejidad bajo su titularidad. Cruzar el umbral activa redistribución de trabajo antes de que se convierta en agotamiento, y la progresión de carrera se ata a evidencia técnica registrada, no a la antigüedad." },
        { id: "05", slug: "hefesto", name: "Hefesto", domain: "Hardware / IoT / Gemelos Digitales", gloss: "Simulación ciberfísica antes de tocar hardware real.",
          detail: "Antes de que cualquier cambio toque un equipo físico real, corre primero contra un gemelo digital: una simulación del comportamiento real del hardware. Las actualizaciones llegan por OTA con un interruptor físico que corta la operación si la telemetría sale del rango esperado, evitando que un bug de software se convierta en un incidente físico." },
        { id: "06", slug: "evelyn", name: "E.V.E.L.Y.N.", domain: "IA Central + Edge", gloss: "Modelos locales (SLMs) que sugieren, nunca deciden solos.",
          detail: "En lugar de un modelo generalista único, entrena modelos de lenguaje pequeños (SLMs) especializados por dominio, cada uno expuesto solo a los datos de ese dominio. Ninguna sugerencia de IA llega al código de producción sin pasar por las pruebas automatizadas del pipeline, y cada respuesta lleva la firma del modelo/parámetros usados, para quedar auditable después. Cada actualización de modelo corre dos semanas en modo sombra antes de promoverse, y se bloquea automáticamente si empeora en cualquier caso de un conjunto fijo de pruebas de seguridad." },
        { id: "07", slug: "apolo", name: "Apolo", domain: "Go-To-Market / Ventas", gloss: "Gateway comercial: donde la arquitectura encuentra al cliente.",
          detail: "Funciona como un gateway comercial que traduce artefactos técnicos internos (control de acceso, compliance, observabilidad) a la terminología que un cliente o auditor externo reconoce (ISO, RBAC/ABAC), sin tocar el registro técnico original: solo cambia la capa de presentación. Las exportaciones para auditoría externa pasan por redacción automática que elimina PII e identificadores internos antes de salir." },
        { id: "08", slug: "prometeu", name: "Prometeo", domain: "Validación / Red Team", gloss: "Consejo adversarial que intenta romper cada regla nueva antes de que cuente.",
          detail: "Consejo de validación que evalúa cambios estructurales antes de que consuman presupuesto, con el rigor calibrado por el radio de impacto: cambios en el núcleo exigen consenso total, experimentos aislados siguen un rito más simple probado en una porción pequeña de tráfico real. Cada decisión se convierte en un registro formal con el trade-off aceptado, y las revisiones excepcionales las auditan ingenieros sénior que ponen su propia reputación en juego al aprobar." },
        { id: "09", slug: "atlas", name: "Atlas", domain: "Gobernanza Societaria / Geográfica", gloss: "Cumplimiento fiscal y legal como código, no como planilla.",
          detail: "Trata el cumplimiento fiscal y legal como código versionado, no como planilla de contador: cada jurisdicción/entidad legal tiene sus reglas fiscales expresadas como configuración probable. Aísla el radio de impacto por entidad societaria, así un incidente en una filial no derriba a las demás." },
        { id: "10", slug: "catharsis", name: "Catharsis", domain: "Deconstrucción de Mentalidad", gloss: "El primer paso de quien llega: desaprender atajos antes de aprender arquitectura.",
          detail: "Onboarding obligatorio en tres etapas: auditar un repositorio real con fallas de seguridad conocidas, refactorizar un módulo aplicando arquitectura limpia y pruebas automatizadas sin usar IA generativa, y defender oralmente las decisiones tomadas. La idea es desaprender el atajo antes de aprender el patrón: los contratistas de corto plazo se saltan esta etapa y la confianza queda solo a cargo de controles automatizados." },
        { id: "11", slug: "hermes", name: "Hermes", domain: "Supply Chain / Logística", gloss: "Trazabilidad de punta a punta de todo lo físico en el sistema.",
          detail: "Rastrea cada ítem físico de punta a punta, desde el proveedor hasta el descarte, alimentando la telemetría de depreciación que usa Árgus para calcular el costo real. Cualquier ruptura en la cadena (retraso, extravío) dispara una alerta automática en vez de descubrirse recién en el conteo de inventario." },
        { id: "12", slug: "odyssey", name: "Odyssey", domain: "Onboarding de Élite", gloss: "Cabinas sectoriales que aceleran a quien llega sin bajar el estándar.",
          detail: "Certificación técnica por competencia, no por antigüedad: cuatro módulos evaluados con pruebas prácticas, desacoplar dependencias externas, pruebas de intrusión/escalamiento de privilegios, análisis de rendimiento y aprender una tecnología nueva solo con la documentación oficial. Quien entra hace un deploy real, aunque pequeño, en producción desde el primer día; los contratistas de corto plazo solo cursan el módulo de seguridad." },
        { id: "13", slug: "oraculo", name: "Oráculo", domain: "Data Mesh / LGPD", gloss: "Dato tratado como producto, con dueño y ciclo de vida, no como vertedero.",
          detail: "Cada dato tiene un dueño y un ciclo de vida definido, no queda suelto en un data lake sin responsable. El derecho al olvido (LGPD/GDPR) se resuelve vía crypto-shredding: destruir solo la clave de cifrado de ese dato lo convierte en ruido matemático irrecuperable, sin tocar los logs de auditoría inmutables." },
        { id: "14", slug: "egide", name: "Égide", domain: "ITSM / Soporte", gloss: "La capa que absorbe el piso de fábrica: incidentes, contratos, soporte.",
          detail: "Soporte técnico en capas (autoservicio, triage por runbook, y una capa de observabilidad con acceso de solo lectura a la base de datos) que aísla a los ingenieros de interrupciones directas; los tickets sin información estandarizada (pasos de reproducción, evidencia, impacto) se rechazan automáticamente. Un incidente solo cierra de verdad cuando una prueba de regresión de esa falla específica entra al pipeline, no cuando alguien marca el ticket como resuelto." },
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
