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
      "A virada pra desenvolvimento veio junto com a decisão de estudar engenharia de software a sério — hoje esse é o fio condutor de tudo o que faço. Concilio a faculdade com dois trabalhos ainda no início de carreira: na Agência do Japa, ajudo no dia a dia de um ERP industrial real; na Rumo Soluções, desenvolvo com C#/.NET e Angular/Ionic. É bastante aprendizado prático em paralelo com a teoria.",
      "Nas horas livres, estudo construindo — um middleware de identidade, um motor de transformação de dados, um gerador de microsserviços e a AKPL, uma plataforma de gestão acadêmica que hoje roda numa escola real. É o jeito que encontrei de testar na prática o que a faculdade ainda não chegou a cobrir.",
      "Fora do código, sou instrutor de karatê e presido a Associação Ventura e Vianna, parceira da Academia de Karatê Pedro Leopoldo. Foi de dentro do tatame que a AKPL nasceu — eu precisava resolver, na prática, o controle de acesso e a gestão da minha própria academia.",
      "Estou combinando isso com formação em segurança da informação e gestão financeira, e devagar venho estudando padrões de arquitetura de plataformas — um tema que pretendo aprofundar futuramente num mestrado. Ainda é chão de fábrica: erro bastante e aprendo revendo as próprias decisões.",
    ],
  },
  en: {
    role: "Software Engineer",
    status: "Open to opportunities",
    heroSummary:
      "I build backends and SaaS products with a focus on clean architecture, security by design, and business viability. These days I move between Java/Spring, the JS/TS ecosystem, and C#/.NET — always looking at the whole system, not just the code.",
    aboutParagraphs: [
      "I started in the wrong place for the classic script: a warehouse, then technical support, fixing networks and hardware hands-on. That's where I learned to diagnose root cause before applying a fix — a habit I still carry into code today.",
      "The shift to development came together with the decision to study software engineering seriously — that's still the thread running through everything I do. I balance college with two early-career jobs: at Agência do Japa, I help out day-to-day on a real industrial ERP; at Rumo Soluções, I develop with C#/.NET and Angular/Ionic. Lots of hands-on learning alongside the theory.",
      "In my free time, I study by building — an identity middleware, a data transformation engine, a microservice generator, and AKPL, an academic management platform that now runs a real school. It's how I get to test, in practice, what college hasn't gotten to yet.",
      "Outside of code, I'm a karate instructor and preside over Associação Ventura e Vianna, a partner organization of Academia de Karatê Pedro Leopoldo. AKPL was born on the mat — I needed to solve access control and school management for my own academy, in practice.",
      "I'm combining all of this with studies in information security and financial management, and slowly working through platform architecture patterns — something I'd like to dig into further in a master's down the line. It's still early days: I get a lot wrong and learn by revisiting my own decisions.",
    ],
  },
  es: {
    role: "Ingeniero de Software",
    status: "Abierto a oportunidades",
    heroSummary:
      "Construyo backends y productos SaaS con foco en arquitectura limpia, seguridad desde el diseño y viabilidad de negocio. Hoy transito entre Java/Spring, el ecosistema JS/TS y C#/.NET — siempre mirando el sistema completo, no solo el código.",
    aboutParagraphs: [
      "Empecé por el lado equivocado del guion clásico: almacén, después soporte técnico, resolviendo red y hardware en la práctica. Ahí aprendí a diagnosticar la causa raíz antes de aplicar una corrección — un hábito que sigo llevando al código hasta hoy.",
      "El giro hacia el desarrollo llegó junto con la decisión de estudiar ingeniería de software en serio — hoy sigue siendo el hilo conductor de todo lo que hago. Combino la universidad con dos trabajos todavía al inicio de carrera: en Agência do Japa, ayudo en el día a día de un ERP industrial real; en Rumo Soluções, desarrollo con C#/.NET y Angular/Ionic. Bastante aprendizaje práctico junto con la teoría.",
      "En mi tiempo libre, estudio construyendo — un middleware de identidad, un motor de transformación de datos, un generador de microservicios y AKPL, una plataforma de gestión académica que hoy funciona en una escuela real. Es la forma que encontré de probar en la práctica lo que la universidad todavía no cubre.",
      "Fuera del código, soy instructor de kárate y presido la Associação Ventura e Vianna, socia de la Academia de Karatê Pedro Leopoldo. AKPL nació desde el propio tatami — necesitaba resolver, en la práctica, el control de acceso y la gestión de mi propia academia.",
      "Estoy combinando esto con formación en seguridad de la información y gestión financiera, y de a poco vengo estudiando patrones de arquitectura de plataformas — un tema que me gustaría profundizar más adelante en una maestría. Todavía es un proceso de aprendizaje: me equivoco bastante y aprendo revisando mis propias decisiones.",
    ],
  },
};
