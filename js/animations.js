/**
 * Efeito dedicado da seção Formação: pina a seção na tela e revela cada
 * item da lista conforme o usuário continua rolando ("trava e vai
 * aparecendo aos poucos"), em vez de tudo surgir junto quando a seção
 * entra na viewport.
 *
 * Enhancement puramente opcional por cima do reveal genérico do main.js —
 * se o GSAP/ScrollTrigger não carregar (CDN fora do ar) ou o usuário
 * pedir menos movimento, cai pro fallback e mostra tudo direto. Nunca
 * deixa os itens presos invisíveis.
 */
(function () {
  "use strict";

  const reduceMotionQuery = window.matchMedia
    ? window.matchMedia("(prefers-reduced-motion: reduce)")
    : null;
  const prefersReducedMotion = () => !!(reduceMotionQuery && reduceMotionQuery.matches);

  const DISTANCE_PER_ITEM = 220; // px de scroll "consumidos" por item revelado

  let gsapReady = false;
  let educationTrigger = null;

  function ensureGsap() {
    if (gsapReady) return true;
    if (typeof window.gsap === "undefined" || typeof window.ScrollTrigger === "undefined") return false;
    window.gsap.registerPlugin(window.ScrollTrigger);
    gsapReady = true;
    return true;
  }

  function initEducationPin() {
    const section = document.querySelector("#formacao");
    const items = Array.from(document.querySelectorAll(".education-item"));

    if (educationTrigger) {
      educationTrigger.kill();
      educationTrigger = null;
    }

    // Poucos itens ou sem seção: não vale pinar a tela por tão pouco.
    if (!section || items.length < 2) {
      items.forEach((item) => item.classList.add("revealed"));
      return;
    }

    if (prefersReducedMotion() || !ensureGsap()) {
      items.forEach((item) => item.classList.add("revealed"));
      return;
    }

    items.forEach((item) => item.classList.remove("revealed"));
    let revealedCount = 0;

    educationTrigger = window.ScrollTrigger.create({
      trigger: section,
      start: "top top+=64",
      end: "+=" + items.length * DISTANCE_PER_ITEM,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const target = Math.min(items.length, Math.ceil(self.progress * items.length));
        if (target > revealedCount) {
          for (let i = revealedCount; i < target; i++) items[i].classList.add("revealed");
        } else if (target < revealedCount) {
          for (let i = revealedCount - 1; i >= target; i--) items[i].classList.remove("revealed");
        }
        revealedCount = target;
      },
      onLeaveBack: () => {
        items.forEach((item) => item.classList.remove("revealed"));
        revealedCount = 0;
      },
    });
  }

  function refresh() {
    // Pequeno delay pra garantir que o layout já assentou (ex: depois de
    // uma troca de idioma, antes do ScrollTrigger medir as posições).
    requestAnimationFrame(() => {
      initEducationPin();
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    });
  }

  window.ZCAnimations = { refresh };

  document.addEventListener("DOMContentLoaded", refresh);
})();
