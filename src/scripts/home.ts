/**
 * Entrada única dos scripts de interação da home. Registra todos de forma
 * idempotente em astro:page-load, que dispara no primeiro carregamento E
 * após cada navegação por View Transitions (<ClientRouter />) — garantindo
 * que reveal/parallax/nav/clipboard/back-to-top sobrevivam à troca de rota.
 *
 * Cada init* checa prefers-reduced-motion por conta própria e não inicializa
 * parallax/reveal/smooth-scroll quando reduzido, deixando o conteúdo em
 * estado final (design.md §8.1).
 */
import { initReveal } from "./reveal";
import { initParallax } from "./parallax";
import { initNav } from "./nav";
import { initClipboard } from "./clipboard";
import { initBackToTop } from "./backToTop";

function initAll(): void {
  initNav();
  initClipboard();
  initBackToTop();
  initReveal();
  initParallax();
}

document.addEventListener("astro:page-load", initAll);
