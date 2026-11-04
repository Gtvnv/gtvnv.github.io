/**
 * PARALLAX DO HERO — único momento de parallax do site (grid-field + leve
 * deslocamento da foto) e o fade de entrada/scroll da hero.
 *
 * NUNCA aplicar no .lava-bg (position:fixed inset:0; mover expõe um vão no
 * topo). Desligado sob prefers-reduced-motion (conteúdo em estado final).
 *
 * Calibração do fade (pedido do usuário: "revela antes de chegar no scroll"):
 * a opacidade da hero só começa a cair APÓS um limiar de scroll, não no load.
 */
function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

// Guarda de cleanup entre navegações por View Transitions.
let cleanup: (() => void) | null = null;

export function initParallax(): void {
  // Remove listeners de uma inicialização anterior (idempotência).
  if (cleanup) {
    cleanup();
    cleanup = null;
  }

  if (prefersReducedMotion()) {
    // Garante hero em estado final (o CSS já cobre, mas reforçamos).
    document.documentElement.classList.remove("js-hero-ready");
    return;
  }

  const grid = document.querySelector<HTMLElement>("[data-parallax]");
  const heroContent = document.querySelector<HTMLElement>(".hero-content");
  const heroPhoto = document.querySelector<HTMLElement>(".hero-photo-wrap");
  const hero = document.querySelector<HTMLElement>(".hero");
  if (!grid && !heroContent && !heroPhoto) return;

  // Marca a página como pronta para o estado inicial escondido da hero valer.
  document.documentElement.classList.add("js-hero-ready");

  // Limiar: a hero só começa a desaparecer depois de rolar este tanto —
  // evita o "revela antes de chegar no scroll".
  const fadeStart = () =>
    (hero ? hero.offsetHeight : window.innerHeight) * 0.25;

  let ticking = false;
  function update() {
    const scrollY = window.scrollY;
    const heroHeight = hero ? hero.offsetHeight : window.innerHeight;

    if (grid) grid.style.transform = `translate3d(0, ${scrollY * 0.25}px, 0)`;
    if (heroPhoto)
      heroPhoto.style.transform = `translate3d(0, ${scrollY * 0.12}px, 0)`;

    const start = fadeStart();
    const fadeProgress = Math.min(
      Math.max(scrollY - start, 0) / (heroHeight * 0.85),
      1,
    );
    const heroOpacity = 1 - fadeProgress * 0.9;
    if (heroContent) heroContent.style.opacity = String(heroOpacity);
    if (heroPhoto) heroPhoto.style.opacity = String(heroOpacity);

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  window.addEventListener("scroll", onScroll, { passive: true });

  // Primeira chamada: a hero está em opacity:0 (CSS) e esta chamada manda
  // opacity:1 — com a transition de 2s definida, reproduz o fade de entrada.
  // Depois removemos a transition pra que o ajuste de opacidade ao rolar seja
  // instantâneo, sem "arrastar" atrás do scroll.
  update();
  const transitionTimer = window.setTimeout(() => {
    if (heroContent) heroContent.style.transition = "none";
    if (heroPhoto) heroPhoto.style.transition = "none";
  }, 2050);

  cleanup = () => {
    window.removeEventListener("scroll", onScroll);
    window.clearTimeout(transitionTimer);
  };
}
