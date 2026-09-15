/**
 * CONFIG — informações pessoais.
 *
 * CONFIG_SHARED: coisas que não mudam com o idioma (nome, e-mail, redes).
 * CONFIG[idioma]: textos que mudam com o idioma (cargo, resumo, bio).
 * Edite os dois conforme o caso — não precisa tocar em HTML.
 */
const CONFIG_SHARED = {
  name: "Gustavo Vianna",
  fullName: "Gustavo Ventura Nery Vianna",
  location: "Pedro Leopoldo, Minas Gerais, Brasil",
  email: "dgprimeweb@gmail.com",
  social: {
    linkedin: "https://www.linkedin.com/in/gtvnv",
    github: "https://github.com/Gtvnv",
  },
  // Um PDF por idioma. Coloque o arquivo em assets/ e aponte o caminho aqui.
  // Deixe uma entrada como null se ainda não tiver o currículo naquele idioma.
  resumeUrl: {
    "pt-BR": "assets/curriculo-gustavo-vianna-pt.pdf",
    en: "assets/curriculo-gustavo-vianna-en.pdf",
    es: "assets/curriculo-gustavo-vianna-es.pdf",
  },
};

const CONFIG = {
  "pt-BR": {
    role: "Engenheiro de Software",
    status: "Aberto a oportunidades",
    heroSummary:
      "Construo backends e produtos SaaS com foco em arquitetura limpa, segurança desde o design e viabilidade de negócio. Hoje transito entre Java/Spring, o ecossistema JS/TS e C#/.NET — sempre olhando pro sistema inteiro, não só pro código.",
    aboutParagraphs: [
      "Comecei na área errada pro roteiro clássico: almoxarifado, depois suporte técnico, resolvendo rede e hardware na prática. Foi ali que aprendi a diagnosticar causa raiz antes de sair aplicando correção — hábito que carrego pra dentro do código até hoje.",
      "A virada pra desenvolvimento veio junto com a decisão de estudar engenharia de software a sério. Hoje concilio a faculdade com duas frentes de trabalho: na Agência do Japa, atuo fullstack em um ERP industrial real, mexendo em regras de negócio, segurança (RBAC) e integrações; na Rumo Soluções, desenvolvo com C#/.NET e Angular/Ionic.",
      "Em paralelo, arquiteto produtos próprios — um middleware de identidade Zero Trust, um motor de transformação de dados e a AKPL, uma plataforma de gestão acadêmica já em produção. É o espaço onde testo, sem freio de mão, como eu acho que sistemas corporativos deveriam ser construídos.",
      "Fora do código, sou instrutor de karatê e presido a Associação Ventura e Vianna, parceira da Academia de Karatê Pedro Leopoldo. Foi de dentro do tatame que a AKPL nasceu — eu precisava resolver, na prática, o controle de acesso e a gestão da minha própria academia.",
      "Estou combinando isso com formação em segurança da informação e gestão financeira, porque acho que a decisão técnica mais cara é sempre a que ninguém calculou o custo antes de tomar.",
    ],
  },
  en: {
    role: "Software Engineer",
    status: "Open to opportunities",
    heroSummary:
      "I build backends and SaaS products with a focus on clean architecture, security by design, and business viability. These days I move between Java/Spring, the JS/TS ecosystem, and C#/.NET — always looking at the whole system, not just the code.",
    aboutParagraphs: [
      "I started in the wrong place for the classic script: a warehouse, then technical support, fixing networks and hardware hands-on. That's where I learned to diagnose root cause before applying a fix — a habit I still carry into code today.",
      "The shift to development came together with the decision to study software engineering seriously. Today I balance college with two jobs: at Agência do Japa, I work fullstack on a real industrial ERP, touching business rules, security (RBAC), and integrations; at Rumo Soluções, I develop with C#/.NET and Angular/Ionic.",
      "In parallel, I architect my own products — a Zero Trust identity middleware, a data transformation engine, and AKPL, an academic management platform already in production. It's where I get to test, without a safety net, how I think corporate systems should be built.",
      "Outside of code, I'm a karate instructor and preside over Associação Ventura e Vianna, a partner organization of Academia de Karatê Pedro Leopoldo. AKPL was born on the mat — I needed to solve access control and school management for my own academy, in practice.",
      "I'm combining all of this with studies in information security and financial management, because I think the most expensive technical decision is always the one nobody costed out before making it.",
    ],
  },
  es: {
    role: "Ingeniero de Software",
    status: "Abierto a oportunidades",
    heroSummary:
      "Construyo backends y productos SaaS con foco en arquitectura limpia, seguridad desde el diseño y viabilidad de negocio. Hoy transito entre Java/Spring, el ecosistema JS/TS y C#/.NET — siempre mirando el sistema completo, no solo el código.",
    aboutParagraphs: [
      "Empecé por el lado equivocado del guion clásico: almacén, después soporte técnico, resolviendo red y hardware en la práctica. Ahí aprendí a diagnosticar la causa raíz antes de aplicar una corrección — un hábito que sigo llevando al código hasta hoy.",
      "El giro hacia el desarrollo llegó junto con la decisión de estudiar ingeniería de software en serio. Hoy combino la universidad con dos frentes de trabajo: en Agência do Japa, trabajo fullstack en un ERP industrial real, tocando reglas de negocio, seguridad (RBAC) e integraciones; en Rumo Soluções, desarrollo con C#/.NET y Angular/Ionic.",
      "En paralelo, diseño productos propios — un middleware de identidad Zero Trust, un motor de transformación de datos y AKPL, una plataforma de gestión académica ya en producción. Es el espacio donde pruebo, sin red de seguridad, cómo creo que deberían construirse los sistemas corporativos.",
      "Fuera del código, soy instructor de kárate y presido la Associação Ventura e Vianna, socia de la Academia de Karatê Pedro Leopoldo. AKPL nació desde el propio tatami — necesitaba resolver, en la práctica, el control de acceso y la gestión de mi propia academia.",
      "Estoy combinando esto con formación en seguridad de la información y gestión financiera, porque creo que la decisión técnica más cara siempre es la que nadie calculó antes de tomarla.",
    ],
  },
};
