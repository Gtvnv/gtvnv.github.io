/**
 * I18N — idiomas suportados e todos os textos "fixos" da interface
 * (menu, títulos de seção, botões, rótulos). Conteúdo de verdade
 * (bio, projetos, experiência...) mora nos outros arquivos js/*-data.js,
 * cada um também organizado por idioma.
 *
 * Pra adicionar um idioma novo: adicione a sigla em SUPPORTED_LOCALES e
 * um bloco em UI aqui, e um bloco correspondente em cada arquivo *-data.js.
 */
const SUPPORTED_LOCALES = ["pt-BR", "en", "es"];
const DEFAULT_LOCALE = "pt-BR";
const LOCALE_STORAGE_KEY = "portfolio-locale";

const LOCALE_LABELS = {
  "pt-BR": "PT",
  en: "EN",
  es: "ES",
};

const UI = {
  "pt-BR": {
    htmlLang: "pt-BR",
    pageTitle: (name, role) => `${name}, ${role}`,
    nav: {
      sobre: "Sobre",
      experiencia: "Experiência",
      projetos: "Projetos",
      notas: "Notas Técnicas",
      formacao: "Formação",
      idiomas: "Idiomas",
      contato: "Contato",
    },
    navToggleLabel: "Abrir menu",
    heroButtons: { projects: "Ver projetos", contact: "Entrar em contato", resume: "Currículo" },
    heroMeta: { location: "Local", stack: "Stack" },
    sections: {
      sobre: { index: "01 / Sobre", title: "Como cheguei até aqui" },
      experiencia: { index: "02 / Experiência", title: "Trajetória profissional" },
      projetos: { index: "03 / Projetos", title: "O que eu construí" },
      notas: { index: "04 / Notas Técnicas", title: "Por que eu construo assim" },
      formacao: { index: "05 / Formação", title: "Formação" },
      idiomas: { index: "06 / Idiomas", title: "Idiomas" },
      contato: { index: "07 / Contato", title: "Vamos conversar" },
    },
    projectLinks: { live: "Ver ao vivo ↗", repo: "Código ↗" },
    noteLink: "Ler artigo completo ↗",
    copyEmail: { idle: "copiar e-mail", done: "Copiado ✓" },
    copyPhone: { idle: "copiar telefone", done: "Copiado ✓" },
    footerNote: "Construído com HTML, CSS e JS puro",
    backToTop: "Voltar ao topo",
  },
  en: {
    htmlLang: "en",
    pageTitle: (name, role) => `${name}, ${role}`,
    nav: {
      sobre: "About",
      experiencia: "Experience",
      projetos: "Projects",
      notas: "Technical Notes",
      formacao: "Education",
      idiomas: "Languages",
      contato: "Contact",
    },
    navToggleLabel: "Open menu",
    heroButtons: { projects: "View projects", contact: "Get in touch", resume: "Résumé" },
    heroMeta: { location: "Location", stack: "Stack" },
    sections: {
      sobre: { index: "01 / About", title: "How I got here" },
      experiencia: { index: "02 / Experience", title: "Professional background" },
      projetos: { index: "03 / Projects", title: "What I've built" },
      notas: { index: "04 / Technical Notes", title: "Why I build it this way" },
      formacao: { index: "05 / Education", title: "Education" },
      idiomas: { index: "06 / Languages", title: "Languages" },
      contato: { index: "07 / Contact", title: "Let's talk" },
    },
    projectLinks: { live: "View live ↗", repo: "Code ↗" },
    noteLink: "Read the full paper ↗",
    copyEmail: { idle: "copy email", done: "Copied ✓" },
    copyPhone: { idle: "copy phone", done: "Copied ✓" },
    footerNote: "Built with plain HTML, CSS and JS",
    backToTop: "Back to top",
  },
  es: {
    htmlLang: "es",
    pageTitle: (name, role) => `${name}, ${role}`,
    nav: {
      sobre: "Sobre mí",
      experiencia: "Experiencia",
      projetos: "Proyectos",
      notas: "Notas Técnicas",
      formacao: "Formación",
      idiomas: "Idiomas",
      contato: "Contacto",
    },
    navToggleLabel: "Abrir menú",
    heroButtons: { projects: "Ver proyectos", contact: "Contactarme", resume: "Currículum" },
    heroMeta: { location: "Ubicación", stack: "Stack" },
    sections: {
      sobre: { index: "01 / Sobre mí", title: "Cómo llegué hasta aquí" },
      experiencia: { index: "02 / Experiencia", title: "Trayectoria profesional" },
      projetos: { index: "03 / Proyectos", title: "Lo que he construido" },
      notas: { index: "04 / Notas Técnicas", title: "Por qué construyo así" },
      formacao: { index: "05 / Formación", title: "Formación" },
      idiomas: { index: "06 / Idiomas", title: "Idiomas" },
      contato: { index: "07 / Contacto", title: "Hablemos" },
    },
    projectLinks: { live: "Ver en vivo ↗", repo: "Código ↗" },
    noteLink: "Leer el artículo completo ↗",
    copyEmail: { idle: "copiar correo", done: "Copiado ✓" },
    copyPhone: { idle: "copiar teléfono", done: "Copiado ✓" },
    footerNote: "Construido con HTML, CSS y JS puro",
    backToTop: "Volver arriba",
  },
};

/**
 * Idioma ativo: 1) o que o visitante já escolheu antes (salvo no navegador),
 * 2) senão, tenta adivinhar pelo idioma do navegador, 3) senão, o padrão.
 */
function getLocale() {
  try {
    const saved = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (saved && SUPPORTED_LOCALES.includes(saved)) return saved;
  } catch (e) {
    /* localStorage indisponível — segue tentando outras fontes */
  }

  const browserLocales = (navigator.languages && navigator.languages.length
    ? navigator.languages
    : [navigator.language || ""]
  ).map((l) => l.toLowerCase());

  for (const lang of browserLocales) {
    if (lang.startsWith("pt")) return "pt-BR";
    if (lang.startsWith("es")) return "es";
    if (lang.startsWith("en")) return "en";
  }

  return DEFAULT_LOCALE;
}

function setLocale(locale) {
  if (!SUPPORTED_LOCALES.includes(locale)) return;
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch (e) {
    /* ignora — a troca ainda funciona só nesta sessão */
  }
}
