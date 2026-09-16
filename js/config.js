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
  phone: "+55 11 92090-6946",
  phoneDial: "+5511920906946",
  social: {
    linkedin: "https://www.linkedin.com/in/gtvnv",
    github: "https://github.com/Gtvnv",
    whatsapp: "https://wa.me/5511920906946",
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
      "Construo backends e produtos SaaS com foco em arquitetura limpa, segurança desde o design e viabilidade de negócio. Hoje transito entre Java/Spring, o ecossistema JS/TS e C#/.NET, sempre olhando pro sistema inteiro, não só pro código.",
    aboutParagraphs: [
      "Minha primeira inclinação acadêmica foi a Física, mas a decisão pela TI me trouxe um fascínio que eu não esperava: a capacidade de entender como as coisas funcionam na realidade e conseguir traduzir isso para o meio digital.",
      "Minha base em tecnologia refletiu muito essa relação com o mundo físico. Antes do código, passei pelo almoxarifado e pelo suporte técnico. Lidando com infraestrutura, hardware e redes, aprendi a diagnosticar o problema na origem antes de aplicar qualquer correção, uma mentalidade de análise de causa raiz que se tornou a base da minha visão sobre arquitetura de software e o que me levou, naturalmente, a me especializar em segurança da informação.",
      "Atualmente, a engenharia de software é o que conecta todas as minhas rotinas. Divido meu dia a dia entre o desenvolvimento com C#/.NET e Angular/Ionic na Rumo Soluções e os desafios de um ERP industrial na Agência do Japa. Lidar diariamente com essas regras de negócio me fez perceber que o código, por si só, não basta. Foi essa vivência que me impulsionou a buscar o MBA em Gestão Financeira e Controladoria: eu queria entender o software pela ótica estratégica e financeira da empresa.",
      "Como a teoria da faculdade sozinha não cobre tudo, meu método de aprendizado contínuo é a construção. No meu tempo livre, estudo criando ferramentas reais: de middlewares de identidade a motores de transformação de dados. O maior reflexo prático disso é a AKPL. Fora da tecnologia, sou instrutor de karatê e presidente da Associação Ventura e Vianna: eu precisava resolver a gestão e o controle de acesso do meu próprio tatame, então fiz o que mais gosto: peguei uma necessidade palpável da minha realidade e a modelei em um sistema que hoje opera na prática.",
      "Meu objetivo de longo prazo é consolidar essa vivência prática e acadêmica em um Mestrado Profissional em Computação de Missão Crítica, aprofundando ainda mais em arquitetura de plataformas. Enquanto isso, sigo trabalhando com a consciência de quem entende o \"chão de fábrica\": iterando rápido e aprendendo ao rever as próprias decisões.",
    ],
  },
  en: {
    role: "Software Engineer",
    status: "Open to opportunities",
    heroSummary:
      "I build backends and SaaS products with a focus on clean architecture, security by design, and business viability. These days I move between Java/Spring, the JS/TS ecosystem, and C#/.NET, always looking at the whole system, not just the code.",
    aboutParagraphs: [
      "My first academic inclination was Physics, but choosing IT brought me a fascination I didn't expect: the ability to understand how things actually work and translate that into the digital world.",
      "My technical background closely reflects that relationship with the physical world. Before code, I went through the warehouse and technical support. Working with infrastructure, hardware, and networks, I learned to diagnose the problem at its source before applying any fix, a root-cause mindset that became the foundation of how I think about software architecture, and what naturally led me to specialize in information security.",
      "Today, software engineering is what connects all my routines. I split my day between developing with C#/.NET and Angular/Ionic at Rumo Soluções and the challenges of an industrial ERP at Agência do Japa. Dealing with those business rules daily made me realize code alone isn't enough. That experience is what pushed me to pursue an MBA in Financial Management and Controllership: I wanted to understand software through the company's strategic and financial lens.",
      "Since college theory alone doesn't cover everything, my method for continuous learning is building. In my free time, I study by creating real tools: from identity middleware to data transformation engines. The biggest practical outcome of that is AKPL. Outside of tech, I'm a karate instructor and president of Associação Ventura e Vianna: I needed to solve access control and management for my own dojo, so I did what I like best: took a concrete need from my own reality and modeled it into a system that now runs in practice.",
      "My long-term goal is to consolidate this practical and academic experience in a Professional Master's in Mission-Critical Computing, digging deeper into platform architecture. In the meantime, I keep working with the awareness of someone who understands the \"shop floor\": iterating fast and learning by revisiting my own decisions.",
    ],
  },
  es: {
    role: "Ingeniero de Software",
    status: "Abierto a oportunidades",
    heroSummary:
      "Construyo backends y productos SaaS con foco en arquitectura limpia, seguridad desde el diseño y viabilidad de negocio. Hoy transito entre Java/Spring, el ecosistema JS/TS y C#/.NET, siempre mirando el sistema completo, no solo el código.",
    aboutParagraphs: [
      "Mi primera inclinación académica fue la Física, pero la decisión de ir por TI me trajo una fascinación que no esperaba: la capacidad de entender cómo funcionan las cosas en la realidad y lograr traducir eso al mundo digital.",
      "Mi base en tecnología reflejó bastante esa relación con el mundo físico. Antes del código, pasé por el almacén y por el soporte técnico. Trabajando con infraestructura, hardware y redes, aprendí a diagnosticar el problema en su origen antes de aplicar cualquier corrección, una mentalidad de análisis de causa raíz que se convirtió en la base de mi visión sobre arquitectura de software y lo que me llevó, naturalmente, a especializarme en seguridad de la información.",
      "Actualmente, la ingeniería de software es lo que conecta todas mis rutinas. Divido mi día a día entre el desarrollo con C#/.NET y Angular/Ionic en Rumo Soluções y los desafíos de un ERP industrial en Agência do Japa. Lidiar a diario con esas reglas de negocio me hizo notar que el código, por sí solo, no basta. Fue esa vivencia la que me impulsó a buscar el MBA en Gestión Financiera y Controladuría: quería entender el software desde la óptica estratégica y financiera de la empresa.",
      "Como la teoría de la universidad sola no lo cubre todo, mi método de aprendizaje continuo es construir. En mi tiempo libre, estudio creando herramientas reales: desde middlewares de identidad hasta motores de transformación de datos. El mayor reflejo práctico de eso es AKPL. Fuera de la tecnología, soy instructor de kárate y presidente de la Associação Ventura e Vianna: necesitaba resolver la gestión y el control de acceso de mi propio tatami, así que hice lo que más me gusta: tomé una necesidad concreta de mi realidad y la modelé en un sistema que hoy funciona en la práctica.",
      "Mi objetivo a largo plazo es consolidar esta vivencia práctica y académica en una Maestría Profesional en Computación de Misión Crítica, profundizando aún más en arquitectura de plataformas. Mientras tanto, sigo trabajando con la conciencia de quien entiende el \"piso de fábrica\": iterando rápido y aprendiendo al revisar mis propias decisiones.",
    ],
  },
};
