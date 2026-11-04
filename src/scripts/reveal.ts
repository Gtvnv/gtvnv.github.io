/**
 * SCROLL REVEAL — enfeite progressivo. O conteúdo JÁ está no HTML (SSR);
 * este script só adiciona o fade de entrada quando o movimento é permitido.
 *
 * Diferença-chave vs. legado: o estado inicial escondido ([data-reveal]
 * opacity:0) só passa a valer DEPOIS que marcamos <html class="js-reveal-ready">,
 * e isso só acontece quando prefers-reduced-motion é false. Com reduced motion
 * ou JS quebrado, os cards aparecem — eliminando a causa raiz do bug
 * "cards não aparecem em alguns navegadores".
 */
const SELECTOR = "[data-reveal]";

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function initReveal(): void {
  // Sob reduced motion: não aplica o estado escondido; conteúdo em estado final.
  if (prefersReducedMotion()) {
    document.documentElement.classList.remove("js-reveal-ready");
    document
      .querySelectorAll<HTMLElement>(SELECTOR)
      .forEach((n) => n.classList.add("is-revealed"));
    return;
  }

  if (!("IntersectionObserver" in window)) {
    document
      .querySelectorAll<HTMLElement>(SELECTOR)
      .forEach((n) => n.classList.add("is-revealed"));
    return;
  }

  // Só agora declaramos que o estado inicial escondido pode valer.
  document.documentElement.classList.add("js-reveal-ready");

  const targets = document.querySelectorAll<HTMLElement>(
    `${SELECTOR}:not(.is-revealed)`,
  );

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  targets.forEach((t) => observer.observe(t));

  // Rede de segurança — SÓ para o que já está visível na tela. Em alguns
  // navegadores o IntersectionObserver calcula a posição antes do layout
  // estabilizar e marca um elemento já visível como "fora da tela" até o
  // próximo scroll, deixando-o preso invisível. Não revelamos tudo de uma
  // vez (isso acenderia os cards abaixo da dobra antes do scroll).
  window.setTimeout(() => {
    const viewportH = window.innerHeight || document.documentElement.clientHeight;
    document.querySelectorAll<HTMLElement>(SELECTOR).forEach((node) => {
      const rect = node.getBoundingClientRect();
      if (rect.top < viewportH && rect.bottom > 0) {
        node.classList.add("is-revealed");
        observer.unobserve(node);
      }
    });
  }, 1200);
}
