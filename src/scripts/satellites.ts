/**
 * SATÉLITES — expand/collapse dos cards de satélite na página ZenithCode OS.
 * Reproduz o comportamento legado (js/zenithcode.js): clicar ou teclar
 * Enter/Espaço num card COM detalhe alterna a classe .expanded e o
 * aria-expanded. Cards sem detalhe (sem [data-sat-toggle]) ficam estáticos.
 *
 * Idempotente entre navegações por View Transitions e no-op nas páginas que
 * não têm cards de satélite (todas as demais rotas).
 */
let cleanup: (() => void) | null = null;

export function initSatellites(): void {
  if (cleanup) {
    cleanup();
    cleanup = null;
  }

  const cards = Array.from(
    document.querySelectorAll<HTMLElement>(".zc-satellite-card[data-sat-toggle]"),
  );
  if (!cards.length) return;

  const disposers: Array<() => void> = [];

  cards.forEach((card) => {
    const toggle = () => {
      const expanded = card.classList.toggle("expanded");
      card.setAttribute("aria-expanded", String(expanded));
    };
    const onKeydown = (e: KeyboardEvent) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggle();
      }
    };
    card.addEventListener("click", toggle);
    card.addEventListener("keydown", onKeydown);
    disposers.push(() => {
      card.removeEventListener("click", toggle);
      card.removeEventListener("keydown", onKeydown);
    });
  });

  cleanup = () => disposers.forEach((d) => d());
}
