/**
 * Content Collections (Astro 5, Content Layer API) + schemas zod.
 *
 * Modelagem i18n: cada entidade é uma collection carregada via glob() a partir
 * de src/content/<entidade>/*.json; o id de cada entry é o nome do arquivo, ou
 * seja, o locale ("pt-BR" | "en" | "es"). Entidades de lista usam um wrapper
 * { items: [...] } para que o arquivo seja UMA entry (objeto único), já que o
 * glob() trataria um JSON array como várias entries.
 *
 * O zod aqui é a rede de segurança de integração: qualquer divergência de
 * schema entre os 3 locales quebra `astro build`.
 */
import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const localeGlob = (entity: string) =>
  glob({ pattern: "*.json", base: `./src/content/${entity}` });

/* ---------------- site (único, sem locale) ---------------- */
const siteSchema = z.object({
  name: z.string(),
  fullName: z.string(),
  location: z.string(),
  email: z.string(),
  phone: z.string(),
  phoneDial: z.string(),
  social: z.object({
    linkedin: z.string(),
    github: z.string(),
    whatsapp: z.string(),
  }),
  resumeUrl: z.object({
    "pt-BR": z.string().nullable(),
    en: z.string().nullable(),
    es: z.string().nullable(),
  }),
});

/* ---------------- profile (por locale) ---------------- */
const profileSchema = z.object({
  role: z.string(),
  status: z.string(),
  heroSummary: z.string(),
  heroProof: z.array(z.object({ value: z.string(), label: z.string() })),
  aboutParagraphs: z.array(z.string()),
});

/* ---------------- ui (por locale) ---------------- */
const uiSchema = z.object({
  htmlLang: z.string(),
  nav: z.object({
    sobre: z.string(),
    experiencia: z.string(),
    projetos: z.string(),
    notas: z.string(),
    formacao: z.string(),
    idiomas: z.string(),
    contato: z.string(),
  }),
  navToggleLabel: z.string(),
  heroButtons: z.object({
    projects: z.string(),
    contact: z.string(),
    resume: z.string(),
  }),
  heroMeta: z.object({ location: z.string(), stack: z.string() }),
  sections: z.object({
    sobre: z.object({ index: z.string(), title: z.string() }),
    experiencia: z.object({ index: z.string(), title: z.string() }),
    projetos: z.object({ index: z.string(), title: z.string() }),
    notas: z.object({ index: z.string(), title: z.string() }),
    formacao: z.object({ index: z.string(), title: z.string() }),
    idiomas: z.object({ index: z.string(), title: z.string() }),
    contato: z.object({ index: z.string(), title: z.string() }),
  }),
  projectLinks: z.object({
    live: z.string(),
    repo: z.string(),
    details: z.string(),
  }),
  noteLink: z.string(),
  satelliteLabel: z.string(),
  copyEmail: z.object({ idle: z.string(), done: z.string() }),
  copyPhone: z.object({ idle: z.string(), done: z.string() }),
  footerNote: z.string(),
  backToTop: z.string(),
  seo: z.object({
    metaDescription: z.string(),
    socialDescription: z.string(),
    ogTitle: z.string().optional(),
  }),
});

/* ---------------- projects (por locale, wrapper items) ---------------- */
const emblem = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
});

const projectSchema = z
  .object({
    title: z.string(),
    statusKey: z.enum(["production", "live", "development"]),
    status: z.string(),
    featured: z.boolean().default(false),
    impact: z.string().optional(),
    summary: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    links: z.object({
      live: z.string().nullable().optional(),
      liveExtra: z
        .array(z.object({ href: z.string(), label: z.string() }))
        .optional(),
      repo: z.string().nullable().optional(),
      details: z.string().nullable().optional(),
    }),
    satellite: emblem.optional(),
    badge: emblem.optional(),
  })
  .refine((p) => !(p.satellite && p.badge), {
    message: "Um projeto não pode ter satellite E badge ao mesmo tempo.",
  });

const projectsSchema = z.object({ items: z.array(projectSchema) });

/* ---------------- experience / education / languages / skills / notes ---------------- */
const experienceSchema = z.object({
  items: z.array(
    z.object({
      role: z.string(),
      company: z.string(),
      period: z.string(),
      logo: z.string().optional(),
      description: z.string(),
    }),
  ),
});

const educationSchema = z.object({
  items: z.array(
    z.object({
      degree: z.string(),
      institution: z.string(),
      period: z.string(),
    }),
  ),
});

const languagesSchema = z.object({
  items: z.array(z.object({ language: z.string(), level: z.string() })),
});

const skillsSchema = z.object({
  items: z.array(
    z.object({ category: z.string(), items: z.array(z.string()) }),
  ),
});

const notesSchema = z.object({
  items: z.array(
    z.object({ title: z.string(), body: z.string(), link: z.string().optional() }),
  ),
});

/* ---------------- projectDetails (por locale, Record<slug, detail>) ---------------- */
const ruleCard = z.object({
  title: z.string(),
  mechanic: z.string().optional(),
  body: z.string().optional(),
});

const endpointItem = z.object({
  name: z.string(),
  what: z.string(),
  role: z.string().default(""),
});

const projectDetailSchema = z.object({
  meta: z.object({ title: z.string(), description: z.string() }),
  backLabel: z.string(),
  logo: z.string(),
  hero: z.object({
    eyebrow: z.string(),
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    statusNote: z.string().optional(),
  }),
  about: z.object({ title: z.string(), body: z.string() }),
  architecture: z
    .object({
      title: z.string(),
      body: z.string(),
      tree: z.array(z.string()).optional(),
    })
    .optional(),
  stack: z.object({ title: z.string(), items: z.array(z.string()) }),
  features: z.object({
    title: z.string(),
    intro: z.string(),
    items: z.array(ruleCard),
  }),
  endpoints: z
    .object({
      title: z.string(),
      intro: z.string(),
      items: z.array(endpointItem),
    })
    .optional(),
  security: z.object({ title: z.string(), body: z.string() }).optional(),
  links: z.object({
    live: z.string().nullable().optional(),
    repo: z.string().nullable().optional(),
  }),
  footer: z.object({ backCta: z.string() }),
});

const projectDetailsSchema = z.record(z.string(), projectDetailSchema);

/* ---------------- zenithcode (por locale) ---------------- */
const zcCardSection = z.object({
  title: z.string(),
  intro: z.string(),
  items: z.array(ruleCard),
});

const satelliteItem = z.object({
  id: z.string(),
  slug: z.string(),
  name: z.string(),
  domain: z.string(),
  group: z.string(),
  gloss: z.string(),
  detail: z.string().optional(),
});

const zenithcodeSchema = z.object({
  meta: z.object({ title: z.string(), description: z.string() }),
  backLabel: z.string(),
  hero: z.object({
    eyebrow: z.string(),
    title: z.string(),
    subtitle: z.string(),
    summary: z.string(),
    mastersNote: z.string(),
  }),
  epistemic: z.object({ title: z.string(), body: z.string() }),
  problem: z.object({ title: z.string(), body: z.string() }),
  thesis: z.object({
    title: z.string(),
    quote: z.string(),
    body: z.string(),
    analogy: z.string(),
  }),
  topology: zcCardSection.optional(),
  coreRules: zcCardSection,
  laws: zcCardSection.optional(),
  blackout: z.object({
    tag: z.string(),
    title: z.string(),
    whatIs: z.string(),
    criterion: z.string(),
    proves: z.string(),
    closing: z.string(),
  }),
  measurement: z.object({
    title: z.string(),
    intro: z.string(),
    items: z.array(
      z.object({ name: z.string(), what: z.string(), role: z.string() }),
    ),
  }),
  satellites: z.object({
    title: z.string(),
    intro: z.string(),
    groups: z.record(z.string(), z.string()),
    items: z.array(satelliteItem),
  }),
  tooling: zcCardSection.optional(),
  whenNot: z.object({ title: z.string(), items: z.array(z.string()) }),
  footer: z.object({ vertexNote: z.string(), backCta: z.string() }),
});

/* ---------------- collections ---------------- */
export const collections = {
  // entry id = "shared" (único arquivo, sem locale).
  site: defineCollection({
    loader: glob({ pattern: "*.json", base: "./src/content/site" }),
    schema: siteSchema,
  }),
  profile: defineCollection({ loader: localeGlob("profile"), schema: profileSchema }),
  ui: defineCollection({ loader: localeGlob("ui"), schema: uiSchema }),
  projects: defineCollection({ loader: localeGlob("projects"), schema: projectsSchema }),
  experience: defineCollection({ loader: localeGlob("experience"), schema: experienceSchema }),
  education: defineCollection({ loader: localeGlob("education"), schema: educationSchema }),
  languages: defineCollection({ loader: localeGlob("languages"), schema: languagesSchema }),
  skills: defineCollection({ loader: localeGlob("skills"), schema: skillsSchema }),
  notes: defineCollection({ loader: localeGlob("notes"), schema: notesSchema }),
  projectDetails: defineCollection({
    loader: localeGlob("projectDetails"),
    schema: projectDetailsSchema,
  }),
  zenithcode: defineCollection({ loader: localeGlob("zenithcode"), schema: zenithcodeSchema }),
};
