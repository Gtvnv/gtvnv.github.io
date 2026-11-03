export const LOCALES = ["pt-BR", "en", "es"] as const;

export const DEFAULT_LOCALE = "pt-BR" as const;

export type Locale = (typeof LOCALES)[number];

/**
 * Prefixo de rota por locale. pt-BR (default) não recebe prefixo
 * (prefixDefaultLocale: false); en/es usam /en e /es.
 */
const LOCALE_PREFIX: Record<Locale, string> = {
  "pt-BR": "",
  en: "/en",
  es: "/es",
};

/**
 * Segmento da rota de detalhe de projeto por locale. es usa a URL
 * localizada "proyectos"; pt-BR e en usam "projects".
 */
const PROJECTS_SEGMENT: Record<Locale, string> = {
  "pt-BR": "projects",
  en: "projects",
  es: "proyectos",
};

export type TranslationKey =
  | { kind: "home" }
  | { kind: "zenithcode" }
  | { kind: "project"; slug: string };

/**
 * Monta o caminho (relativo à raiz do site, sem base) equivalente a uma
 * página no locale alvo. A implementação completa é refinada na FEAT-004;
 * aqui cobrimos home/zenithcode/project para o build inicial.
 */
export function localizedPath(
  key: TranslationKey,
  targetLocale: Locale,
): string {
  const prefix = LOCALE_PREFIX[targetLocale];

  switch (key.kind) {
    case "home":
      return `${prefix}/`;
    case "zenithcode":
      return `${prefix}/zenithcode`;
    case "project":
      return `${prefix}/${PROJECTS_SEGMENT[targetLocale]}/${key.slug}`;
  }
}
