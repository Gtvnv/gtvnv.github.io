/**
 * Getters tipados sobre as Content Collections. Toda página/componente do
 * Astro consome o conteúdo por aqui (nunca lendo JSON direto), para herdar a
 * tipagem gerada pelos schemas zod de src/content.config.ts.
 *
 * Modelagem i18n: o id de cada entry é o locale ("pt-BR" | "en" | "es"); o
 * payload fica em entry.data. Cada getter devolve o .data já desembrulhado.
 */
import { getEntry } from "astro:content";
import type { Locale } from "../i18n/locales";

async function dataOf<C extends Parameters<typeof getEntry>[0]>(
  collection: C,
  id: string,
) {
  const entry = await getEntry(collection as any, id);
  if (!entry) {
    throw new Error(`Content ausente: collection "${String(collection)}" id "${id}".`);
  }
  return (entry as { data: unknown }).data;
}

/** Dados compartilhados sem locale (nome, contato, redes, currículos). */
export async function getSite() {
  return dataOf("site", "shared");
}

export async function getProfile(locale: Locale) {
  return dataOf("profile", locale);
}

export async function getUi(locale: Locale) {
  return dataOf("ui", locale);
}

export async function getProjects(locale: Locale) {
  const data = (await dataOf("projects", locale)) as { items: unknown[] };
  return data.items;
}

export async function getExperience(locale: Locale) {
  const data = (await dataOf("experience", locale)) as { items: unknown[] };
  return data.items;
}

export async function getEducation(locale: Locale) {
  const data = (await dataOf("education", locale)) as { items: unknown[] };
  return data.items;
}

export async function getLanguages(locale: Locale) {
  const data = (await dataOf("languages", locale)) as { items: unknown[] };
  return data.items;
}

export async function getSkills(locale: Locale) {
  const data = (await dataOf("skills", locale)) as { items: unknown[] };
  return data.items;
}

export async function getNotes(locale: Locale) {
  const data = (await dataOf("notes", locale)) as { items: unknown[] };
  return data.items;
}

/** Record<slug, projectDetail> do locale. */
export async function getProjectDetails(locale: Locale) {
  return (await dataOf("projectDetails", locale)) as Record<string, unknown>;
}

export async function getProjectDetail(locale: Locale, slug: string) {
  const details = await getProjectDetails(locale);
  return details[slug];
}

export async function getZenithcode(locale: Locale) {
  return dataOf("zenithcode", locale);
}

/**
 * getStaticPaths compartilhado das páginas de detalhe de projeto: deriva os
 * 17 slugs das chaves de projectDetails/<locale>.json. O segmento de rota
 * (projects/proyectos) é só a pasta da página; o slug vem daqui.
 */
export async function getProjectDetailPaths(locale: Locale) {
  const details = await getProjectDetails(locale);
  return Object.keys(details).map((slug) => ({
    params: { slug },
    props: { locale, slug },
  }));
}

export interface ProjectNeighbor {
  slug: string;
  title: string;
}

export interface ProjectNav {
  status?: { key: string; label: string };
  prev: ProjectNeighbor;
  next: ProjectNeighbor;
}

/**
 * Navegação de uma página de detalhe: status do projeto e vizinhos
 * anterior/próximo (com wrap-around). A ordem é a de projects/<locale>.json
 * filtrada aos itens que têm página de detalhe própria (exclui 'zenithcode').
 */
export async function getProjectNav(
  locale: Locale,
  slug: string,
): Promise<ProjectNav> {
  const items = (await getProjects(locale)) as {
    title: string;
    statusKey: string;
    status: string;
    links?: { details?: string | null };
  }[];
  const withDetail = items.filter(
    (p) => p.links?.details && p.links.details !== "zenithcode",
  );
  const idx = withDetail.findIndex((p) => p.links?.details === slug);
  if (idx === -1) {
    throw new Error(`Projeto sem entrada em projects/${locale}.json: "${slug}".`);
  }
  const at = (i: number): ProjectNeighbor => {
    const p = withDetail[(i + withDetail.length) % withDetail.length];
    return { slug: p.links!.details as string, title: p.title };
  };
  const self = withDetail[idx];
  return {
    status: { key: self.statusKey, label: self.status },
    prev: at(idx - 1),
    next: at(idx + 1),
  };
}

/**
 * Getter genérico por entidade + locale. `entity` deve ser uma das collections
 * por-locale. Devolve entry.data cru (sem desembrulhar `items`).
 */
export type LocaleEntity =
  | "profile"
  | "ui"
  | "projects"
  | "experience"
  | "education"
  | "languages"
  | "skills"
  | "notes"
  | "projectDetails"
  | "zenithcode";

export async function getContent(entity: LocaleEntity, locale: Locale) {
  return dataOf(entity, locale);
}
