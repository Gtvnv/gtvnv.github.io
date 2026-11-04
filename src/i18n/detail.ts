import type { Locale } from "./locales";

/**
 * Rótulos de UI exclusivos das páginas de detalhe (crumb e pager). Ficam em
 * TS (como src/i18n/home.ts) para não tocar nos JSON de conteúdo. Tipado por
 * Record<Locale, ...>: faltar um locale quebra o typecheck do build.
 */
export const DETAIL_LABELS: Record<
  Locale,
  { allProjects: string; prev: string; next: string }
> = {
  "pt-BR": {
    allProjects: "Todos os projetos",
    prev: "Projeto anterior",
    next: "Próximo projeto",
  },
  en: {
    allProjects: "All projects",
    prev: "Previous project",
    next: "Next project",
  },
  es: {
    allProjects: "Todos los proyectos",
    prev: "Proyecto anterior",
    next: "Proyecto siguiente",
  },
};
