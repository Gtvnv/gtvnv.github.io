/**
 * Script de migração ÚNICA dos dados legados (js/*-data.js, config.js, i18n.js)
 * para JSON por locale sob src/content/. Executa os arquivos legados num
 * contexto vm (sem browser) e serializa os globais verbatim em JSON.
 *
 * NÃO faz parte do build do Astro nem dos testes. É uma ferramenta de migração
 * reproduzível (rodar: `node scripts/migrate-content.mjs`).
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const JS = join(ROOT, "js");
const CONTENT = join(ROOT, "src", "content");

const LOCALES = ["pt-BR", "en", "es"];

/** Roda os arquivos legados num sandbox e devolve os globais declarados. */
function loadLegacy() {
  const sandbox = { navigator: { language: "pt-BR", languages: ["pt-BR"] }, localStorage: undefined, console };
  const ctx = vm.createContext(sandbox);
  const files = [
    "config.js",
    "i18n.js",
    "projects-data.js",
    "project-details-data.js",
    "zenithcode-data.js",
    "skills-data.js",
    "experience-data.js",
    "education-data.js",
    "languages-data.js",
    "notes-data.js",
  ];
  // Concatena todos os legados num único script para que os `const X = ...`
  // de topo fiquem no mesmo escopo léxico e o trecho de expose consiga lê-los
  // (const não vira propriedade do contexto, nem persiste entre runInContext).
  const combined =
    files.map((f) => readFileSync(join(JS, f), "utf8")).join("\n;\n") +
    `\n;globalThis.__OUT = {
      CONFIG_SHARED, CONFIG, UI, SUPPORTED_LOCALES, DEFAULT_LOCALE,
      PROJECTS, PROJECT_DETAILS, ZENITHCODE, SKILLS, EXPERIENCE, EDUCATION, LANGUAGES, NOTES
    };`;
  vm.runInContext(combined, ctx, { filename: "legacy-combined.js" });
  return ctx.__OUT;
}

function writeJson(entity, locale, data) {
  const dir = join(CONTENT, entity);
  mkdirSync(dir, { recursive: true });
  writeFileSync(join(dir, `${locale}.json`), JSON.stringify(data, null, 2) + "\n", "utf8");
}

/** links.details: 'projects/zyntra.html' -> 'zyntra'; 'zenithcode.html' -> 'zenithcode'. */
function normalizeDetails(details) {
  if (details == null) return details;
  let d = String(details);
  d = d.replace(/^projects\//, "");
  d = d.replace(/\.html$/, "");
  return d;
}

function transformProject(p) {
  const next = { ...p };
  if (next.links) {
    next.links = { ...next.links };
    if ("details" in next.links) {
      next.links.details = normalizeDetails(next.links.details);
    }
  }
  return next;
}

const SEO = {
  "pt-BR": {
    metaDescription:
      "Gustavo Vianna, engenheiro de software focado em arquitetura, segurança e sistemas SaaS em produção.",
    socialDescription: "Arquiteturas seguras, sistemas que aguentam produção.",
    ogTitle: "Gustavo Vianna, Engenheiro de Software",
  },
  en: {
    metaDescription:
      "Gustavo Vianna, software engineer focused on architecture, security, and production SaaS systems.",
    socialDescription: "Secure architectures, systems that hold up in production.",
    ogTitle: "Gustavo Vianna, Software Engineer",
  },
  es: {
    metaDescription:
      "Gustavo Vianna, ingeniero de software enfocado en arquitectura, seguridad y sistemas SaaS en producción.",
    socialDescription: "Arquitecturas seguras, sistemas que aguantan producción.",
    ogTitle: "Gustavo Vianna, Ingeniero de Software",
  },
};

const FOOTER_NOTE = {
  "pt-BR": "Construído com Astro",
  en: "Built with Astro",
  es: "Construido con Astro",
};

function main() {
  const L = loadLegacy();

  // siteShared (um único arquivo, sem locale)
  mkdirSync(join(CONTENT, "site"), { recursive: true });
  writeFileSync(
    join(CONTENT, "site", "shared.json"),
    JSON.stringify(L.CONFIG_SHARED, null, 2) + "\n",
    "utf8",
  );

  for (const locale of LOCALES) {
    const cfg = L.CONFIG[locale];
    const ui = L.UI[locale];

    // profile
    writeJson("profile", locale, {
      role: cfg.role,
      status: cfg.status,
      heroSummary: cfg.heroSummary,
      heroProof: cfg.heroProof,
      aboutParagraphs: cfg.aboutParagraphs,
    });

    // ui (sem pageTitle, que é função -> continua `${name}, ${role}` no layout)
    writeJson("ui", locale, {
      htmlLang: ui.htmlLang,
      nav: ui.nav,
      navToggleLabel: ui.navToggleLabel,
      heroButtons: ui.heroButtons,
      heroMeta: ui.heroMeta,
      sections: ui.sections,
      projectLinks: ui.projectLinks,
      noteLink: ui.noteLink,
      satelliteLabel: ui.satelliteLabel,
      copyEmail: ui.copyEmail,
      copyPhone: ui.copyPhone,
      footerNote: FOOTER_NOTE[locale],
      backToTop: ui.backToTop,
      seo: SEO[locale],
    });

    // projects (wrapper { items })
    writeJson("projects", locale, {
      items: L.PROJECTS[locale].map(transformProject),
    });

    // experience / education / languages / skills / notes (wrapper { items })
    writeJson("experience", locale, { items: L.EXPERIENCE[locale] });
    writeJson("education", locale, { items: L.EDUCATION[locale] });
    writeJson("languages", locale, { items: L.LANGUAGES[locale] });
    writeJson("skills", locale, { items: L.SKILLS[locale] });
    writeJson("notes", locale, { items: L.NOTES[locale] });

    // projectDetails (Record<slug, detail>)
    writeJson("projectDetails", locale, L.PROJECT_DETAILS[locale]);

    // zenithcode
    writeJson("zenithcode", locale, L.ZENITHCODE[locale]);
  }

  console.log("Migração concluída.");
}

main();
