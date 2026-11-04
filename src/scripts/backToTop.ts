/**
 * BACK TO TOP — o botão aparece depois que o usuário rola além da dobra
 * (>60% da altura do viewport) e volta ao topo ao clicar. O scroll suave
 * respeita prefers-reduced-motion (usa "auto" quando ativo). Idempotente.
 */
let cleanup: (() => void) | null = null;

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function initBackToTop(): void {
  if (cleanup) {
    cleanup();
    cleanup = null;
  }

  const btn = document.querySelector<HTMLButtonElement>("[data-back-to-top]");
  if (!btn) return;

  const toggleVisibility = () => {
    btn.classList.toggle("visible", window.scrollY > window.innerHeight * 0.6);
  };

  const onClick = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion() ? "auto" : "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisibility, { passive: true });
  btn.addEventListener("click", onClick);
  toggleVisibility();

  cleanup = () => {
    window.removeEventListener("scroll", toggleVisibility);
    btn.removeEventListener("click", onClick);
  };
}
