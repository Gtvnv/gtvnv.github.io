/**
 * Monta a URL de um asset/rota respeitando `base` do Astro
 * (`import.meta.env.BASE_URL`). Robusto a base com ou sem barra final e a
 * paths com ou sem barra inicial. Ex.: com base "/" e path "assets/x.png"
 * retorna "/assets/x.png"; com base "/portfolio/" retorna
 * "/portfolio/assets/x.png".
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? "/";
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  const normalizedPath = path.replace(/^\//, "");
  return `${normalizedBase}${normalizedPath}`;
}
