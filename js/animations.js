/**
 * Efeito de "tela trava e vai revelando aos poucos": pina uma seção na
 * tela e vai liberando seus itens conforme o usuário continua rolando,
 * em vez de tudo surgir junto quando a seção entra na viewport. Usado
 * hoje em Formação (item a item) e Projetos (linha a linha, pra
 * respeitar o grid de 2 colunas sem pinar uma eternidade por 13 cards).
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

  let gsapReady = false;
  const triggers = {}; // key -> instância atual do ScrollTrigger

  function ensureGsap() {
    if (gsapReady) return true;
    if (typeof window.gsap === "undefined" || typeof window.ScrollTrigger === "undefined") return false;
    window.gsap.registerPlugin(window.ScrollTrigger);
    gsapReady = true;
    return true;
  }

  // Agrupa itens por linha visual (mesmo offsetTop, com margem de erro),
  // pra revelar um grid de N colunas "linha a linha" em vez de item a
  // item — com 1 coluna (mobile) cada grupo acaba tendo 1 item só.
  function groupByRow(items) {
    const groups = [];
    let lastTop = null;
    items.forEach((item) => {
      const top = item.offsetTop;
      if (lastTop === null || Math.abs(top - lastTop) > 4) {
        groups.push([item]);
        lastTop = top;
      } else {
        groups[groups.length - 1].push(item);
      }
    });
    return groups;
  }

  function initPinReveal(key, { sectionSelector, itemSelector, distancePerStep, groupRows }) {
    const section = document.querySelector(sectionSelector);
    const items = Array.from(document.querySelectorAll(itemSelector));

    if (triggers[key]) {
      triggers[key].kill();
      triggers[key] = null;
    }

    // Poucos itens: não vale pinar a tela por tão pouco.
    if (!section || items.length < 2) {
      items.forEach((item) => item.classList.add("revealed"));
      return;
    }

    if (prefersReducedMotion() || !ensureGsap()) {
      items.forEach((item) => item.classList.add("revealed"));
      return;
    }

    items.forEach((item) => item.classList.remove("revealed"));
    const steps = groupRows ? groupByRow(items) : items.map((item) => [item]);
    let revealedSteps = 0;

    triggers[key] = window.ScrollTrigger.create({
      trigger: section,
      start: "top top+=64",
      end: "+=" + steps.length * distancePerStep,
      pin: true,
      pinSpacing: true,
      anticipatePin: 1,
      onUpdate: (self) => {
        const target = Math.min(steps.length, Math.ceil(self.progress * steps.length));
        if (target > revealedSteps) {
          for (let i = revealedSteps; i < target; i++) steps[i].forEach((el) => el.classList.add("revealed"));
        } else if (target < revealedSteps) {
          for (let i = revealedSteps - 1; i >= target; i--) steps[i].forEach((el) => el.classList.remove("revealed"));
        }
        revealedSteps = target;
      },
      onLeaveBack: () => {
        items.forEach((item) => item.classList.remove("revealed"));
        revealedSteps = 0;
      },
    });
  }

  function refresh() {
    // Pequeno delay pra garantir que o layout já assentou (ex: depois de
    // uma troca de idioma, antes do ScrollTrigger medir as posições).
    requestAnimationFrame(() => {
      initPinReveal("formacao", {
        sectionSelector: "#formacao",
        itemSelector: ".education-item",
        distancePerStep: 220,
        groupRows: false,
      });
      initPinReveal("projetos", {
        sectionSelector: "#projetos",
        itemSelector: ".project-card",
        distancePerStep: 140,
        groupRows: true,
      });
      if (window.ScrollTrigger) window.ScrollTrigger.refresh();
    });
  }

  window.ZCAnimations = { refresh };

  document.addEventListener("DOMContentLoaded", refresh);
})();
