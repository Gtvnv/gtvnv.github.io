/**
 * ZENITHCODE — conteúdo da página de detalhe do meta-framework Z2A
 * (assets/z2a/). Destilado dos documentos internos de pesquisa; ver
 * ZenithCode OS-.../_ALINHAMENTO_V4.1/00_ENTRADA_TECNICA.md para a
 * versão completa (não publicada). Editar aqui não afeta o resto do
 * site — esta página tem seu próprio script (js/zenithcode.js).
 *
 * V4.1: 14 → 20 satélites, agrupados em 3 linhas de atuação (core /
 * market / labs — ver satellites.groups). Novas seções: topology
 * (as 3 camadas de dados), laws (leis/axiomas sociotécnicos) e
 * tooling (manifestação física em software). satellites.items deve
 * vir ordenado por grupo — zenithcode.js insere o header de grupo
 * quando o campo `group` muda de um item pro próximo.
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
        "É a base da pesquisa que pretendo aprofundar no Mestrado Profissional em Computação de Missão Crítica — com espaço pra virar tese de doutorado, se o piloto comprovar a tese.",
    },
    epistemic: {
      title: "Estatuto epistêmico",
      body: "Isto é um produto bem projetado, ainda não validado empiricamente. Nenhum mecanismo passou por piloto com grupo de controle. A única afirmação científica falseável hoje é: o gating determinístico reduz a densidade de defeitos sem penalizar o lead time além de um limiar pré-registrado. O protocolo experimental (baseline, grupo de controle, critérios de morte) já está redigido, seguindo o princípio de Honestidade Epistêmica (R6): toda regra do ecossistema carrega um Critério de Morte pré-registrado — se em 90 dias a métrica não melhorar, a regra é deletada, sem exceção. Resultado nulo é um resultado válido.",
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
    topology: {
      title: "Topologia de dados",
      intro: "Três camadas separam a fonte da verdade de como cada pessoa enxerga o sistema.",
      items: [
        {
          title: "Truth-Layer",
          body: "A fonte única da verdade (Lei de Segal). Matemática pura, logs imutáveis, Event Sourcing e métricas DORA — fica nos servidores e motores de banco de dados.",
        },
        {
          title: "HUD-Layer (Mitologia)",
          body: "A camada de interface sociotécnica. Usa metáforas mitológicas — os satélites — pra traduzir a complexidade do backend em conceitos cognitivamente ergonômicos pros humanos.",
        },
        {
          title: "Lentes de Contexto",
          body: "A visualização se adapta ao cargo: um Dev vê o board e a carga de trabalho; um CFO vê o OPEX e o fluxo do GECON; o CEO vê o Lead Time e o valor de mercado.",
        },
      ],
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
    laws: {
      title: "Leis, axiomas e protocolos",
      intro: "Regras de comportamento sociotécnico, acima do pipeline — governam pessoas e decisões, não só código.",
      items: [
        { title: "T.D.E. (Think-Document-Execute)", mechanic: "Ciclo inegociável de commit. Exige um racional arquitetural e um teste unitário escrito antes do código ser aceito." },
        { title: "A Lei de Gilbert (Accountability)", mechanic: "A responsabilidade pelo sucesso é do executor. Foco na solução e nos resultados estratégicos, eliminando transferência de culpa e justificativa processual." },
        { title: "A Lei de Steelbert (Trade-offs)", mechanic: "Toda melhoria esconde uma piora. Nenhuma mudança de arquitetura ou adoção de ferramenta avança sem um \"Atestado de Piora\" — o que vai degradar no processo." },
        { title: "Protocolo de Override Fiduciário", mechanic: "Se o gerente de negócio precisa forçar um lançamento por cima da arquitetura, o código sobe — mas o sistema debita 40% do Error Budget do time e revoga o suporte de emergência. O passivo é financeiro." },
        { title: "Resgate de Esquadrão em 3 Frentes", mechanic: "Solidariedade Algorítmica (arquitetos seniores assumem bounties de refatoração em troca de CNFs), Filtro Quimera (júnior CLT entra já pronto pra sprint) e Mercenário de Elite (PJ de tiro curto, pula o Catharsis, foca só nas travas de segurança)." },
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
      title: "Os 20 satélites",
      intro:
        "O núcleo (Z2A) é o kernel inviolável; cada satélite é um plugin opcional, acoplado só quando a empresa cruza um gatilho de dor real — nunca um monólito obrigatório.",
      groups: {
        core: "Núcleo Operacional & Infraestrutura",
        market: "Expansão de Mercado & Integração",
        labs: "Z2A Labs (P&D)",
      },
      items: [
        { id: "01", slug: "themis", name: "Themis", domain: "Segurança & Compliance", group: "core", gloss: "Gate determinístico de segurança: gera vulnerabilidade, o build quebra.",
          detail: "A manifestação prática é o AegisProtocol: um sidecar de identidade Zero-Trust que valida cada requisição por atributo (ABAC/RBAC) com cache local, então a latência de autorização fica perto de zero. Logs de auditoria são write-once (WORM): nem um administrador de banco consegue apagar um registro depois de gravado. Uma camada irmã (internamente chamada Sigma) roda SAST/DAST preventivo a cada commit, então a vulnerabilidade nunca chega a virar PR aberto — e o pipeline de CI trava o deploy automaticamente se a varredura falhar, sem opção de ignorar manualmente." },
        { id: "02", slug: "argus", name: "Árgus", domain: "FinOps / GECON", group: "core", gloss: "Motor contábil que administra as três moedas do sistema: Z-Points, Error Budget e CNF.",
          detail: "O GECON é o ledger que gerencia Z-Points (gamificação e bonificação), Error Budget (SLO/confiabilidade) e CNF — Commits Não Fungíveis, a moeda de reputação de quem resolveu o problema estrutural, não só escreveu a linha. Cada serviço carrega seu próprio orçamento de erro e seu custo real, calculado por TDABC automatizado. A meta é que decisão de arquitetura e decisão financeira usem o mesmo número, não dois relatórios que nunca se cruzam." },
        { id: "03", slug: "dk-ops", name: "DK-Ops", domain: "Plataforma / SRE / IDP", group: "core", gloss: "Internal Developer Platform que absorve a complexidade de infra — e sabe quando matar código morto.",
          detail: "Oferece \"golden paths\": infraestrutura como código (Pulumi) que já vem com guardrails de segurança e observabilidade embutidos, então o time de produto não precisa reinventar a esteira toda vez. Deploys são progressivos (canary/blue-green) com rollback automático se as métricas de erro subirem. Executa também a Apoptose: processo que identifica e desliga código legado sem tráfego real, em vez de deixar apodrecer no repositório. Manifestação real: o Vertex." },
        { id: "04", slug: "quiron", name: "Quíron", domain: "RH Sociotécnico / Ergonomia", group: "core", gloss: "Mede e protege a Dívida Humana e a Carga Cognitiva do esquadrão.",
          detail: "Trata carga cognitiva como métrica de engenharia, não opinião: número de contextos/sistemas diferentes tocados por semana, complexidade sob titularidade de cada dev. Ultrapassar o limiar aciona o Pouso de Triunfo — uma pausa obrigatória, não opcional — antes de virar esgotamento, e limita o WIP do time. Progressão de carreira é atrelada a evidência técnica registrada, não a tempo de casa." },
        { id: "05", slug: "evelyn", name: "E.V.E.L.Y.N.", domain: "IA Central + Edge", group: "core", gloss: "Modelos locais (SLMs) que sugerem, nunca decidem sozinhos.",
          detail: "Em vez de um modelo generalista único, treina modelos de linguagem pequenos (SLMs) especializados por domínio, cada um exposto só aos dados daquele domínio. Nenhuma sugestão de IA chega ao código sem passar pelos testes automatizados do pipeline, e cada resposta carrega a assinatura do modelo/parâmetros usados, pra ficar auditável depois. Toda atualização de modelo roda 2 semanas em modo sombra antes de ser promovida, e é bloqueada automaticamente se piorar em qualquer caso de um conjunto fixo de testes de segurança." },
        { id: "06", slug: "hefesto", name: "Hefesto", domain: "Hardware / IoT / Gêmeos Digitais", group: "core", gloss: "Simulação ciber-física antes de tocar hardware real.",
          detail: "Antes de qualquer mudança tocar um equipamento físico de verdade, ela roda primeiro contra um gêmeo digital, uma simulação do comportamento real do hardware. Atualizações chegam ao equipamento por OTA (over-the-air) com um circuit breaker físico que corta a operação se a telemetria sair da faixa esperada, evitando que um bug de software vire um incidente físico." },
        { id: "07", slug: "atlas", name: "Atlas", domain: "Governança Societária / Geográfica", group: "core", gloss: "Compliance-as-Code: cada jurisdição tem sua regra fiscal e trabalhista versionada.",
          detail: "Trata compliance fiscal e jurídico como código versionado, não como planilha de contador: cada jurisdição/CNPJ tem suas regras fiscais e trabalhistas (CLT/PJ) expressas como configuração testável, com risco jurídico calculado em vez de estimado no achismo. Isola o raio de impacto por entidade societária, então um incidente numa filial não derruba as outras." },
        { id: "08", slug: "prometeu", name: "Prometeu", domain: "Validação / Red Team", group: "core", gloss: "Conselho adversarial que tenta furar toda regra nova antes de valer.",
          detail: "Comitê de validação que avalia mudanças estruturais através do BADR antes de consumirem orçamento, com rigor calibrado pelo raio de impacto: mudanças no núcleo exigem consenso total, experimentos isolados rodam nos sandboxes VORTEX e FÊNIX contra uma fatia pequena de tráfego real antes de qualquer inovação queimar OPEX. Toda decisão vira um registro formal com o trade-off aceito." },
        { id: "09", slug: "catharsis", name: "Catharsis", domain: "Desconstrução de Mindset", group: "core", gloss: "Primeiro passo de quem entra: desaprender atalho antes de aprender arquitetura.",
          detail: "Onboarding obrigatório em três etapas: auditar um repositório real com falhas conhecidas de segurança, refatorar um módulo aplicando arquitetura limpa sob Abstinência Generativa — proibição total de IA no Core Domain, pra forçar o raciocínio estrutural antes de terceirizar pro modelo — e defender oralmente as decisões tomadas. Prestadores de curto prazo pulam essa etapa e a confiança fica só por conta de controles automatizados." },
        { id: "10", slug: "odyssey", name: "Odyssey", domain: "Onboarding de Elite", group: "core", gloss: "Testa o desenvolvedor nos Gateways de arquitetura antes de baixar a régua.",
          detail: "Certificação técnica por competência, não por tempo de casa: módulos avaliados por prova prática — desacoplar dependências externas, testar invasão/escalonamento de privilégio, analisar performance e aprender uma tecnologia nova só com a documentação oficial. Quem entra faz um deploy real em produção já no primeiro dia; terceiros de curto prazo cursam só o módulo de segurança." },
        { id: "11", slug: "oraculo", name: "Oráculo", domain: "Data Mesh / LGPD", group: "core", gloss: "Dado tratado como produto, com dono e ciclo de vida, não como despejo.",
          detail: "Cada dado tem um dono e um ciclo de vida definido, não fica solto num data lake sem responsável. Direito ao esquecimento (LGPD) é resolvido via crypto-shredding: destrói só a chave de criptografia daquele dado, que vira ruído matemático irrecuperável sem precisar tocar nos logs imutáveis de auditoria." },
        { id: "12", slug: "hermes", name: "Hermes", domain: "Supply Chain / Logística", group: "core", gloss: "Rastreabilidade ponta a ponta de tudo que é físico no sistema.",
          detail: "Rastreia cada item físico ponta a ponta, do fornecedor até o descarte, com telemetria de depreciação alimentando o cálculo de custo real do Árgus. Qualquer ruptura na cadeia (atraso, extravio) dispara alerta automático em vez de ser descoberta só na contagem de estoque." },
        { id: "13", slug: "apolo", name: "Apolo", domain: "Go-To-Market / Vendas", group: "market", gloss: "Gateway comercial: onde a arquitetura encontra o cliente.",
          detail: "Funciona como gateway comercial que traduz artefatos técnicos internos (controles de acesso, compliance, observabilidade) para a terminologia que um cliente ou auditor externo reconhece (ISO, RBAC/ABAC), sem alterar o registro técnico original — só a camada de apresentação muda. Cuida também dos contratos B2B, e exports para auditoria passam por redação automática que remove PII e identificadores internos antes de sair." },
        { id: "14", slug: "egide", name: "Égide", domain: "ITSM / Suporte", group: "market", gloss: "Camada que absorve o chão de fábrica: incidentes, contratos, suporte.",
          detail: "Suporte técnico em camadas (nível 1 autoatendimento, nível 2 triagem por runbook, e uma camada de observabilidade com acesso só-leitura ao banco) que isola engenheiros de interrupção direta; chamados sem informação padronizada são rejeitados automaticamente. Um incidente só fecha de verdade quando o teste de regressão daquela falha específica entra no pipeline." },
        { id: "15", slug: "iris", name: "Íris", domain: "Fronteira de Integração", group: "market", gloss: "A alfândega do ecossistema: fronteira controlada pra sistema legado de cliente entrar.",
          detail: "API Gateway que funciona como alfândega: permite que clientes externos plugem seus sistemas legados ao ecossistema sem expor o núcleo diretamente, isolando cada integração no seu próprio contrato. Nenhum sistema de fora fala direto com a Truth-Layer — tudo passa pela fronteira do Íris primeiro." },
        { id: "16", slug: "jano", name: "Jano", domain: "Fábrica de Spin-offs", group: "market", gloss: "Corta o cordão umbilical: extrai ferramenta interna madura e vira produto próprio.",
          detail: "Identifica ferramentas internas que amadureceram dentro da IDP, corta a dependência do núcleo corporativo e empacota a ferramenta como produto SaaS independente — com ciclo de release, cliente e responsabilidade financeira próprios, em vez de continuar como apêndice não documentado do sistema principal." },
        { id: "17", slug: "hestia", name: "Héstia", domain: "Hub Open-Source", group: "market", gloss: "Higieniza código interno e devolve pra comunidade, sem vazar segredo nenhum.",
          detail: "Antes de qualquer repositório interno virar open-source, passa por higienização que remove credenciais, dados internos e lógica proprietária. Depois de publicado, orquestra Bug Bounties e Developer Relations — o open-source vira canal de recrutamento e reputação técnica, não só caridade de código." },
        { id: "18", slug: "atena", name: "Atena", domain: "Customer Success Científico", group: "market", gloss: "O Pilar Zero: se o código não mexe a métrica de negócio em 30 dias, sai do ar.",
          detail: "Rastreia a North Star Metric de cada funcionalidade no mercado real, não só se ela rodou sem erro. Se um código enviado pra produção não alterar positivamente a métrica de negócio em 30 dias, a Atena dispara a ordem de remoção — o critério de sucesso nunca é \"não quebrou\", é \"gerou o resultado que prometeu\"." },
        { id: "19", slug: "cassandra", name: "Cassandra", domain: "Radar de Obsolescência", group: "labs", gloss: "Vigia o mercado pra prever quando a própria stack vai virar legado.",
          detail: "Inteligência voltada pra fora que varre continuamente o mercado de tecnologia, prevendo quando a stack atual da empresa vai se tornar obsoleta antes que isso vire crise. Agenda migrações antecipadas em vez de esperar o sistema legado explodir sob pressão de produção." },
        { id: "20", slug: "psique", name: "Psiquê", domain: "IHC e Neurométricas", group: "labs", gloss: "Traduz fricção de UX em ticket matemático de refatoração.",
          detail: "Mapeia o comportamento humano real — testes A/B, heatmaps, hesitação de clique — e converte fricção de experiência do usuário em tickets de engenharia com prioridade calculada, não em opinião de designer. A dor do usuário vira número, e o número vira backlog." },
      ],
    },
    tooling: {
      title: "Ferramental físico",
      intro: "Onde a mitologia vira binário: a manifestação concreta de cada camada em software real.",
      items: [
        { title: "CLI T.D.E. (z2a-cli)", mechanic: "O cão de guarda local na máquina do desenvolvedor." },
        { title: "DK-Ops Linter / Muro de Berlim", mechanic: "Esteira CI/CD com bloqueio AST em nuvem." },
        { title: "Árgus Ledger Core", mechanic: "Motor de Event Sourcing pra Error Budgets e telemetria financeira." },
        { title: "AegisProtocol Sidecar", mechanic: "API Gateway e malha local pra execução Zero-Trust — a manifestação real de Themis." },
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
      mastersNote: "It's the foundation of the research I plan to deepen in my Professional Master's in Mission-Critical Computing — with room to grow into a doctoral thesis, if the pilot proves the case.",
    },
    epistemic: {
      title: "Epistemic status",
      body: "This is a well-designed product, not yet empirically validated. No mechanism has gone through a controlled pilot. The one falsifiable scientific claim today: deterministic gating reduces defect density without penalizing lead time beyond a pre-registered threshold. The experimental protocol (baseline, control group, kill criteria) is already written, following the principle of Epistemic Honesty (R6): every rule in the ecosystem carries a pre-registered Kill Criterion — if the metric hasn't improved in 90 days, the rule gets deleted, no exceptions. A null result is a valid result.",
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
    topology: {
      title: "Data topology",
      intro: "Three layers separate the source of truth from how each person actually sees the system.",
      items: [
        {
          title: "Truth-Layer",
          body: "The single source of truth (Segal's Law). Pure math, immutable logs, Event Sourcing, and DORA metrics — lives on the servers and database engines.",
        },
        {
          title: "HUD-Layer (Mythology)",
          body: "The sociotechnical interface layer. Uses mythological metaphors — the satellites — to translate backend complexity into cognitively ergonomic concepts for humans.",
        },
        {
          title: "Context Lenses",
          body: "The view adapts to the role. A Dev sees the board and their workload; a CFO sees OPEX and the GECON flow; the CEO sees Lead Time and market value.",
        },
      ],
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
    laws: {
      title: "Laws, axioms, and protocols",
      intro: "Sociotechnical behavior rules that sit above the pipeline — governing people and decisions, not just code.",
      items: [
        { title: "T.D.E. (Think-Document-Execute)", mechanic: "A non-negotiable commit cycle. Requires an architectural rationale and a written unit test before code is accepted." },
        { title: "Gilbert's Law (Accountability)", mechanic: "Responsibility for success belongs to whoever executes. Focus on the solution and strategic outcomes, eliminating blame-shifting and procedural excuses." },
        { title: "Steelbert's Law (Trade-offs)", mechanic: "Every improvement hides a regression. No architecture change or tool adoption moves forward without a \"Certificate of Degradation\" — what will get worse in the process." },
        { title: "Fiduciary Override Protocol", mechanic: "If a business manager needs to force a release over the architecture's objection, the code ships — but the system debits 40% of the team's Error Budget and revokes emergency support. The liability is financial." },
        { title: "Three-Front Squad Rescue", mechanic: "Algorithmic Solidarity (senior architects take on refactoring bounties in exchange for CNFs), Chimera Filter (the junior hire arrives already sprint-ready), and Elite Mercenary (short-term contractor, skips Catharsis, focuses only on the deterministic security gates)." },
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
      title: "The 20 satellites",
      intro: "The core (Z2A) is the inviolable kernel; each satellite is an optional plugin, attached only once the company crosses a real pain trigger — never a mandatory monolith.",
      groups: {
        core: "Operational Core & Infrastructure",
        market: "Market Expansion & Integration",
        labs: "Z2A Labs (R&D)",
      },
      items: [
        { id: "01", slug: "themis", name: "Themis", domain: "Security & Compliance", group: "core", gloss: "Deterministic security gate: trigger a vulnerability, the build breaks.",
          detail: "Its real-world form is AegisProtocol: a Zero-Trust identity sidecar that validates every request by attribute (ABAC/RBAC) with a local cache, keeping authorization latency near zero. Audit logs are write-once (WORM) — not even a database admin can delete a record after it's written. A sibling layer (internally called Sigma) runs preventive SAST/DAST on every commit, so the vulnerability never makes it into an open PR — and the CI pipeline automatically blocks deploys on a failed scan, with no manual override." },
        { id: "02", slug: "argus", name: "Argus", domain: "FinOps / GECON", group: "core", gloss: "The accounting engine running the system's three currencies: Z-Points, Error Budget, and CNF.",
          detail: "GECON is the ledger that manages Z-Points (gamification and bonuses), Error Budget (SLO/reliability), and CNF — Non-Fungible Commits, the reputation currency for whoever fixed the structural problem, not just wrote the line. Every service carries its own error budget and its real cost, computed by automated TDABC. The goal is for architecture decisions and financial decisions to run off the same number instead of two reports that never meet." },
        { id: "03", slug: "dk-ops", name: "DK-Ops", domain: "Platform / SRE / IDP", group: "core", gloss: "An Internal Developer Platform that absorbs infra complexity — and knows when to kill dead code.",
          detail: "Offers \"golden paths\": infrastructure-as-code templates (Pulumi) with security and observability guardrails baked in, so product teams don't rebuild the pipeline from scratch. Deploys are progressive (canary/blue-green) with automatic rollback if error metrics spike. It also runs Apoptosis: a process that identifies and shuts down legacy code with no real traffic, instead of letting it rot in the repo forever. Its real manifestation is Vertex." },
        { id: "04", slug: "quiron", name: "Quiron", domain: "Sociotechnical HR / Ergonomics", group: "core", gloss: "Tracks and protects the squad's Human Debt and Cognitive Load.",
          detail: "Treats cognitive load as an engineering metric, not an opinion: how many different systems a person touches per week, the complexity they own. Crossing the threshold triggers a Victory Landing — a mandatory, non-optional pause — before it turns into burnout, and caps the team's WIP. Career progression is tied to recorded technical evidence, not tenure." },
        { id: "05", slug: "evelyn", name: "E.V.E.L.Y.N.", domain: "Central + Edge AI", group: "core", gloss: "Local models (SLMs) that suggest, never decide alone.",
          detail: "Instead of one general-purpose model, it trains small, domain-specialized language models (SLMs), each exposed only to that domain's data. No AI suggestion reaches production code without passing the pipeline's automated tests, and every response carries a signature of the model/parameters used, so it stays auditable later. Every model update runs two weeks in shadow mode before promotion, and is automatically blocked if it regresses on any case in a fixed security test set." },
        { id: "06", slug: "hefesto", name: "Hefesto", domain: "Hardware / IoT / Digital Twins", group: "core", gloss: "Cyber-physical simulation before touching real hardware.",
          detail: "Before any change touches real physical equipment, it first runs against a digital twin, a simulation of the hardware's real behavior. Updates reach the device over-the-air with a physical circuit breaker that cuts operation if telemetry drifts outside the expected range, so a software bug can't turn into a physical incident." },
        { id: "07", slug: "atlas", name: "Atlas", domain: "Corporate / Geographic Governance", group: "core", gloss: "Compliance-as-Code: every jurisdiction gets its tax and labor rules versioned.",
          detail: "Treats tax and legal compliance as versioned code, not an accountant's spreadsheet: each jurisdiction/legal entity has its tax and labor rules (contractor vs. employee) expressed as testable configuration, with legal risk calculated instead of guessed. It isolates blast radius by legal entity, so an incident in one subsidiary doesn't take down the others." },
        { id: "08", slug: "prometeu", name: "Prometeu", domain: "Validation / Red Team", group: "core", gloss: "An adversarial council that tries to break every new rule before it counts.",
          detail: "A validation committee that reviews structural changes through BADR before they consume budget, with rigor calibrated to blast radius: core changes require full consensus, isolated experiments run in the VORTEX and FÊNIX sandboxes against a small slice of real traffic before any innovation burns OPEX. Every decision becomes a formal record with the accepted trade-off." },
        { id: "09", slug: "catharsis", name: "Catharsis", domain: "Mindset Deconstruction", group: "core", gloss: "The first step for newcomers: unlearn shortcuts before learning architecture.",
          detail: "Mandatory onboarding in three steps: audit a real repository with known security flaws, refactor a module applying clean architecture under Generative Abstinence — a full ban on AI in the Core Domain, to force structural reasoning before outsourcing it to the model — then defend the decisions out loud. Short-term contractors skip this step, with trust resting entirely on automated controls instead." },
        { id: "10", slug: "odyssey", name: "Odyssey", domain: "Elite Onboarding", group: "core", gloss: "Tests the developer at the architecture Gateways before lowering the bar.",
          detail: "Competency-based technical certification, not tenure-based: modules assessed through hands-on tests — decoupling external dependencies, penetration/privilege-escalation testing, performance analysis, and learning a new technology from official docs alone. New hires ship a real production deploy on day one; short-term contractors only take the security module." },
        { id: "11", slug: "oraculo", name: "Oraculo", domain: "Data Mesh / LGPD", group: "core", gloss: "Data treated as a product, with an owner and a lifecycle, not a dumping ground.",
          detail: "Every piece of data has an owner and a defined lifecycle instead of sitting unaccounted for in a data lake. The right to be forgotten (LGPD/GDPR) is handled via crypto-shredding: destroying just that data's encryption key turns it into unrecoverable mathematical noise, without touching the immutable audit logs." },
        { id: "12", slug: "hermes", name: "Hermes", domain: "Supply Chain / Logistics", group: "core", gloss: "End-to-end traceability for everything physical in the system.",
          detail: "Tracks every physical item end-to-end, from supplier to disposal, feeding depreciation telemetry into Argus's real-cost calculation. Any break in the chain — delay, loss — triggers an automatic alert instead of being discovered only at inventory count." },
        { id: "13", slug: "apolo", name: "Apolo", domain: "Go-To-Market / Sales", group: "market", gloss: "Commercial gateway: where the architecture meets the customer.",
          detail: "Works as a commercial gateway that translates internal technical artifacts (access control, compliance, observability) into terminology a customer or external auditor recognizes (ISO, RBAC/ABAC), without touching the underlying technical record — only the presentation layer changes. Also handles B2B contracts, and exports for external audits go through automatic redaction that strips PII and internal identifiers before they leave." },
        { id: "14", slug: "egide", name: "Egide", domain: "ITSM / Support", group: "market", gloss: "The layer that absorbs the shop floor: incidents, contracts, support.",
          detail: "Layered technical support (tier-1 self-service, tier-2 runbook-driven triage, and a read-only observability layer) that shields engineers from direct interruptions; tickets missing standardized information are auto-rejected. An incident only truly closes when a regression test for that specific failure lands in the pipeline." },
        { id: "15", slug: "iris", name: "Iris", domain: "Integration Frontier", group: "market", gloss: "The ecosystem's customs checkpoint: a controlled border for a client's legacy system to come in.",
          detail: "An API Gateway that works like customs: lets external clients plug their legacy systems into the ecosystem without exposing the core directly, isolating each integration under its own contract. No outside system talks to the Truth-Layer directly — everything crosses Iris's border first." },
        { id: "16", slug: "jano", name: "Janus", domain: "Spin-off Factory", group: "market", gloss: "Cuts the umbilical cord: extracts a mature internal tool and turns it into its own product.",
          detail: "Identifies internal tools that matured inside the IDP, cuts the dependency on the corporate core, and packages the tool as an independent SaaS product — with its own release cycle, customers, and financial ownership, instead of staying an undocumented appendage of the main system." },
        { id: "17", slug: "hestia", name: "Hestia", domain: "Open-Source Hub", group: "market", gloss: "Sanitizes internal code and gives it back to the community, without leaking a single secret.",
          detail: "Before any internal repository goes open-source, it runs through a sanitization pass that strips credentials, internal data, and proprietary logic. Once published, it runs Bug Bounties and Developer Relations — open-source becomes a recruiting and technical-reputation channel, not just code charity." },
        { id: "18", slug: "atena", name: "Athena", domain: "Scientific Customer Success", group: "market", gloss: "Pillar Zero: if shipped code doesn't move the business metric in 30 days, it comes down.",
          detail: "Tracks each feature's North Star Metric in the real market, not just whether it ran without errors. If code shipped to production doesn't positively change the business metric within 30 days, Athena triggers the removal order — success is never \"it didn't break,\" it's \"it delivered what it promised.\"" },
        { id: "19", slug: "cassandra", name: "Cassandra", domain: "Obsolescence Radar", group: "labs", gloss: "Watches the market to predict when the stack itself will become legacy.",
          detail: "An outward-facing intelligence that continuously scans the technology market, predicting when the company's current stack will become obsolete before it turns into a crisis. Schedules migrations ahead of time instead of waiting for the legacy system to blow up under production pressure." },
        { id: "20", slug: "psique", name: "Psyche", domain: "HCI & Neurometrics", group: "labs", gloss: "Translates UX friction into a math-backed refactoring ticket.",
          detail: "Maps real human behavior — A/B tests, heatmaps, click hesitation — and converts user-experience friction into engineering tickets with a calculated priority, not a designer's opinion. The user's pain becomes a number, and the number becomes backlog." },
      ],
    },
    tooling: {
      title: "Physical tooling",
      intro: "Where the mythology turns into binary: the concrete manifestation of each layer in real software.",
      items: [
        { title: "T.D.E. CLI (z2a-cli)", mechanic: "The local watchdog on the developer's machine." },
        { title: "DK-Ops Linter / Berlin Wall", mechanic: "A CI/CD pipeline with cloud-side AST blocking." },
        { title: "Argus Ledger Core", mechanic: "An Event Sourcing engine for Error Budgets and financial telemetry." },
        { title: "AegisProtocol Sidecar", mechanic: "The API Gateway and local mesh for Zero-Trust execution — Themis's real-world manifestation." },
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
      mastersNote: "Es la base de la investigación que planeo profundizar en la Maestría Profesional en Computación de Misión Crítica — con espacio para convertirse en tesis doctoral, si el piloto comprueba la tesis.",
    },
    epistemic: {
      title: "Estatuto epistémico",
      body: "Esto es un producto bien diseñado, todavía no validado empíricamente. Ningún mecanismo pasó por un piloto con grupo de control. La única afirmación científica falseable hoy es: el gating determinístico reduce la densidad de defectos sin penalizar el lead time más allá de un umbral preregistrado. El protocolo experimental (línea base, grupo de control, criterios de muerte) ya está redactado, siguiendo el principio de Honestidad Epistémica (R6): toda regla del ecosistema lleva un Criterio de Muerte preregistrado — si en 90 días la métrica no mejora, la regla se elimina, sin excepciones. Un resultado nulo es un resultado válido.",
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
    topology: {
      title: "Topología de datos",
      intro: "Tres capas separan la fuente de la verdad de cómo cada persona ve realmente el sistema.",
      items: [
        {
          title: "Truth-Layer",
          body: "La fuente única de la verdad (Ley de Segal). Matemática pura, logs inmutables, Event Sourcing y métricas DORA — vive en los servidores y motores de base de datos.",
        },
        {
          title: "HUD-Layer (Mitología)",
          body: "La capa de interfaz sociotécnica. Usa metáforas mitológicas — los satélites — para traducir la complejidad del backend en conceptos cognitivamente ergonómicos para los humanos.",
        },
        {
          title: "Lentes de Contexto",
          body: "La visualización se adapta al cargo: un Dev ve el board y su carga de trabajo; un CFO ve el OPEX y el flujo del GECON; el CEO ve el Lead Time y el valor de mercado.",
        },
      ],
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
    laws: {
      title: "Leyes, axiomas y protocolos",
      intro: "Reglas de comportamiento sociotécnico por encima del pipeline — gobiernan personas y decisiones, no solo código.",
      items: [
        { title: "T.D.E. (Think-Document-Execute)", mechanic: "Ciclo inegociable de commit. Exige un racional arquitectónico y una prueba unitaria escrita antes de que el código sea aceptado." },
        { title: "La Ley de Gilbert (Accountability)", mechanic: "La responsabilidad por el éxito es de quien ejecuta. Foco en la solución y en los resultados estratégicos, eliminando la transferencia de culpa y las justificaciones procesales." },
        { title: "La Ley de Steelbert (Trade-offs)", mechanic: "Toda mejora esconde una desmejora. Ningún cambio de arquitectura o adopción de herramienta avanza sin un \"Certificado de Desmejora\" — qué se va a degradar en el proceso." },
        { title: "Protocolo de Override Fiduciario", mechanic: "Si el gerente de negocio necesita forzar un lanzamiento por encima de la arquitectura, el código sube — pero el sistema debita el 40% del Error Budget del equipo y revoca el soporte de emergencia. El pasivo es financiero." },
        { title: "Rescate de Escuadrón en 3 Frentes", mechanic: "Solidaridad Algorítmica (arquitectos sénior toman bounties de refactorización a cambio de CNFs), Filtro Quimera (el júnior entra ya listo para la sprint) y Mercenario de Élite (contratista de corto plazo, se salta el Catharsis, se enfoca solo en las trabas de seguridad)." },
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
      title: "Los 20 satélites",
      intro: "El núcleo (Z2A) es el kernel inviolable; cada satélite es un plugin opcional, que se acopla solo cuando la empresa cruza un disparador de dolor real, nunca un monolito obligatorio.",
      groups: {
        core: "Núcleo Operacional e Infraestructura",
        market: "Expansión de Mercado e Integración",
        labs: "Z2A Labs (I+D)",
      },
      items: [
        { id: "01", slug: "themis", name: "Themis", domain: "Seguridad y Cumplimiento", group: "core", gloss: "Gate determinístico de seguridad: genera vulnerabilidad, el build falla.",
          detail: "Su manifestación real es AegisProtocol: un sidecar de identidad Zero-Trust que valida cada solicitud por atributo (ABAC/RBAC) con caché local, manteniendo la latencia de autorización cerca de cero. Los logs de auditoría son de escritura única (WORM): ni un administrador de base de datos puede borrar un registro después de escrito. Una capa hermana (internamente llamada Sigma) corre SAST/DAST preventivo en cada commit, así la vulnerabilidad nunca llega a un PR abierto — y el pipeline de CI bloquea automáticamente el deploy si falla el escaneo, sin opción de anularlo manualmente." },
        { id: "02", slug: "argus", name: "Argus", domain: "FinOps / GECON", group: "core", gloss: "El motor contable que administra las tres monedas del sistema: Z-Points, Error Budget y CNF.",
          detail: "El GECON es el ledger que gestiona Z-Points (gamificación y bonificación), Error Budget (SLO/confiabilidad) y CNF — Commits No Fungibles, la moneda de reputación de quien resolvió el problema estructural, no solo escribió la línea. Cada servicio lleva su propio presupuesto de error y su costo real, calculado por TDABC automatizado. La meta es que la decisión de arquitectura y la financiera usen el mismo número, no dos informes que nunca se cruzan." },
        { id: "03", slug: "dk-ops", name: "DK-Ops", domain: "Plataforma / SRE / IDP", group: "core", gloss: "Una Internal Developer Platform que absorbe la complejidad de infra — y sabe cuándo matar código muerto.",
          detail: "Ofrece \"golden paths\": plantillas de infraestructura como código (Pulumi) con guardrails de seguridad y observabilidad ya incluidos, para que el equipo de producto no reconstruya el pipeline cada vez. Los deploys son progresivos (canary/blue-green) con rollback automático si las métricas de error suben. También ejecuta la Apoptosis: un proceso que identifica y apaga código legado sin tráfico real, en vez de dejarlo pudrirse en el repositorio. Su manifestación real es Vertex." },
        { id: "04", slug: "quiron", name: "Quirón", domain: "RRHH Sociotécnico / Ergonomía", group: "core", gloss: "Mide y protege la Deuda Humana y la Carga Cognitiva del escuadrón.",
          detail: "Trata la carga cognitiva como una métrica de ingeniería, no como opinión: cuántos sistemas distintos toca una persona por semana, la complejidad bajo su titularidad. Cruzar el umbral activa el Aterrizaje de Triunfo — una pausa obligatoria, no opcional — antes de que se convierta en agotamiento, y limita el WIP del equipo. La progresión de carrera se ata a evidencia técnica registrada, no a la antigüedad." },
        { id: "05", slug: "evelyn", name: "E.V.E.L.Y.N.", domain: "IA Central + Edge", group: "core", gloss: "Modelos locales (SLMs) que sugieren, nunca deciden solos.",
          detail: "En lugar de un modelo generalista único, entrena modelos de lenguaje pequeños (SLMs) especializados por dominio, cada uno expuesto solo a los datos de ese dominio. Ninguna sugerencia de IA llega al código de producción sin pasar por las pruebas automatizadas del pipeline, y cada respuesta lleva la firma del modelo/parámetros usados, para quedar auditable después. Cada actualización de modelo corre dos semanas en modo sombra antes de promoverse, y se bloquea automáticamente si empeora en cualquier caso de un conjunto fijo de pruebas de seguridad." },
        { id: "06", slug: "hefesto", name: "Hefesto", domain: "Hardware / IoT / Gemelos Digitales", group: "core", gloss: "Simulación ciberfísica antes de tocar hardware real.",
          detail: "Antes de que cualquier cambio toque un equipo físico real, corre primero contra un gemelo digital: una simulación del comportamiento real del hardware. Las actualizaciones llegan por OTA con un interruptor físico que corta la operación si la telemetría sale del rango esperado, evitando que un bug de software se convierta en un incidente físico." },
        { id: "07", slug: "atlas", name: "Atlas", domain: "Gobernanza Societaria / Geográfica", group: "core", gloss: "Compliance-as-Code: cada jurisdicción tiene su regla fiscal y laboral versionada.",
          detail: "Trata el cumplimiento fiscal y legal como código versionado, no como planilla de contador: cada jurisdicción/entidad legal tiene sus reglas fiscales y laborales (CLT/PJ) expresadas como configuración probable, con riesgo jurídico calculado en vez de estimado al ojo. Aísla el radio de impacto por entidad societaria, así un incidente en una filial no derriba a las demás." },
        { id: "08", slug: "prometeu", name: "Prometeo", domain: "Validación / Red Team", group: "core", gloss: "Un consejo adversarial que intenta romper cada regla nueva antes de que cuente.",
          detail: "Consejo de validación que evalúa cambios estructurales a través del BADR antes de que consuman presupuesto, con rigor calibrado por el radio de impacto: cambios en el núcleo exigen consenso total, experimentos aislados corren en los sandboxes VORTEX y FÉNIX contra una porción pequeña de tráfico real antes de que cualquier innovación queme OPEX. Cada decisión se convierte en un registro formal con el trade-off aceptado." },
        { id: "09", slug: "catharsis", name: "Catharsis", domain: "Deconstrucción de Mentalidad", group: "core", gloss: "El primer paso de quien llega: desaprender atajos antes de aprender arquitectura.",
          detail: "Onboarding obligatorio en tres etapas: auditar un repositorio real con fallas de seguridad conocidas, refactorizar un módulo aplicando arquitectura limpia bajo Abstinencia Generativa — prohibición total de IA en el Core Domain, para forzar el razonamiento estructural antes de tercerizarlo al modelo — y defender oralmente las decisiones tomadas. Los contratistas de corto plazo se saltan esta etapa y la confianza queda solo a cargo de controles automatizados." },
        { id: "10", slug: "odyssey", name: "Odyssey", domain: "Onboarding de Élite", group: "core", gloss: "Prueba al desarrollador en los Gateways de arquitectura antes de bajar el estándar.",
          detail: "Certificación técnica por competencia, no por antigüedad: módulos evaluados con pruebas prácticas — desacoplar dependencias externas, pruebas de intrusión/escalamiento de privilegios, análisis de rendimiento y aprender una tecnología nueva solo con la documentación oficial. Quien entra hace un deploy real en producción desde el primer día; los contratistas de corto plazo solo cursan el módulo de seguridad." },
        { id: "11", slug: "oraculo", name: "Oráculo", domain: "Data Mesh / LGPD", group: "core", gloss: "Dato tratado como producto, con dueño y ciclo de vida, no como vertedero.",
          detail: "Cada dato tiene un dueño y un ciclo de vida definido, no queda suelto en un data lake sin responsable. El derecho al olvido (LGPD/GDPR) se resuelve vía crypto-shredding: destruir solo la clave de cifrado de ese dato lo convierte en ruido matemático irrecuperable, sin tocar los logs de auditoría inmutables." },
        { id: "12", slug: "hermes", name: "Hermes", domain: "Supply Chain / Logística", group: "core", gloss: "Trazabilidad de punta a punta de todo lo físico en el sistema.",
          detail: "Rastrea cada ítem físico de punta a punta, desde el proveedor hasta el descarte, alimentando la telemetría de depreciación que usa Árgus para calcular el costo real. Cualquier ruptura en la cadena (retraso, extravío) dispara una alerta automática en vez de descubrirse recién en el conteo de inventario." },
        { id: "13", slug: "apolo", name: "Apolo", domain: "Go-To-Market / Ventas", group: "market", gloss: "Gateway comercial: donde la arquitectura encuentra al cliente.",
          detail: "Funciona como gateway comercial que traduce artefactos técnicos internos (control de acceso, compliance, observabilidad) a la terminología que un cliente o auditor externo reconoce (ISO, RBAC/ABAC), sin tocar el registro técnico original — solo cambia la capa de presentación. También gestiona los contratos B2B, y las exportaciones para auditoría externa pasan por redacción automática que elimina PII e identificadores internos antes de salir." },
        { id: "14", slug: "egide", name: "Égide", domain: "ITSM / Soporte", group: "market", gloss: "La capa que absorbe el piso de fábrica: incidentes, contratos, soporte.",
          detail: "Soporte técnico en capas (nivel 1 autoservicio, nivel 2 triage por runbook, y una capa de observabilidad con acceso de solo lectura a la base de datos) que aísla a los ingenieros de interrupciones directas; los tickets sin información estandarizada se rechazan automáticamente. Un incidente solo cierra de verdad cuando una prueba de regresión de esa falla específica entra al pipeline." },
        { id: "15", slug: "iris", name: "Iris", domain: "Frontera de Integración", group: "market", gloss: "La aduana del ecosistema: frontera controlada para que un sistema legado de cliente entre.",
          detail: "Un API Gateway que funciona como aduana: permite que clientes externos conecten sus sistemas legados al ecosistema sin exponer el núcleo directamente, aislando cada integración en su propio contrato. Ningún sistema externo habla directo con la Truth-Layer — todo pasa primero por la frontera de Iris." },
        { id: "16", slug: "jano", name: "Jano", domain: "Fábrica de Spin-offs", group: "market", gloss: "Corta el cordón umbilical: extrae una herramienta interna madura y la convierte en producto propio.",
          detail: "Identifica herramientas internas que maduraron dentro de la IDP, corta la dependencia del núcleo corporativo y empaqueta la herramienta como producto SaaS independiente — con su propio ciclo de lanzamiento, clientes y responsabilidad financiera, en vez de seguir como un apéndice no documentado del sistema principal." },
        { id: "17", slug: "hestia", name: "Hestia", domain: "Hub Open-Source", group: "market", gloss: "Higieniza código interno y lo devuelve a la comunidad, sin filtrar ni un secreto.",
          detail: "Antes de que cualquier repositorio interno se vuelva open-source, pasa por una higienización que elimina credenciales, datos internos y lógica propietaria. Una vez publicado, orquesta Bug Bounties y Developer Relations — el open-source se convierte en canal de reclutamiento y reputación técnica, no solo caridad de código." },
        { id: "18", slug: "atena", name: "Atenea", domain: "Customer Success Científico", group: "market", gloss: "El Pilar Cero: si el código no mueve la métrica de negocio en 30 días, se retira.",
          detail: "Rastrea la North Star Metric de cada funcionalidad en el mercado real, no solo si corrió sin errores. Si un código enviado a producción no altera positivamente la métrica de negocio en 30 días, Atenea dispara la orden de remoción — el criterio de éxito nunca es \"no se rompió\", es \"generó el resultado prometido\"." },
        { id: "19", slug: "cassandra", name: "Cassandra", domain: "Radar de Obsolescencia", group: "labs", gloss: "Vigila el mercado para predecir cuándo la propia stack se volverá legado.",
          detail: "Inteligencia orientada hacia afuera que escanea continuamente el mercado tecnológico, prediciendo cuándo la stack actual de la empresa se volverá obsoleta antes de que se convierta en una crisis. Agenda migraciones anticipadas en vez de esperar a que el sistema legado explote bajo presión de producción." },
        { id: "20", slug: "psique", name: "Psique", domain: "IHC y Neurométricas", group: "labs", gloss: "Traduce la fricción de UX en un ticket matemático de refactorización.",
          detail: "Mapea el comportamiento humano real — pruebas A/B, heatmaps, vacilación de clic — y convierte la fricción de experiencia de usuario en tickets de ingeniería con prioridad calculada, no en opinión de diseñador. El dolor del usuario se vuelve número, y el número se vuelve backlog." },
      ],
    },
    tooling: {
      title: "Herramental físico",
      intro: "Donde la mitología se vuelve binario: la manifestación concreta de cada capa en software real.",
      items: [
        { title: "CLI T.D.E. (z2a-cli)", mechanic: "El perro guardián local en la máquina del desarrollador." },
        { title: "DK-Ops Linter / Muro de Berlín", mechanic: "Esteira CI/CD con bloqueo AST en la nube." },
        { title: "Árgus Ledger Core", mechanic: "Motor de Event Sourcing para Error Budgets y telemetría financiera." },
        { title: "AegisProtocol Sidecar", mechanic: "API Gateway y malla local para ejecución Zero-Trust — la manifestación real de Themis." },
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
