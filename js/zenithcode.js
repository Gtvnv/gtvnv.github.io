/**
 * ZENITHCODE — renderer da página zenithcode.html. Separado do main.js
 * de propósito: essa página não usa PROJECTS/SKILLS/etc., só
 * ZENITHCODE (zenithcode-data.js) + UI (i18n.js) + CONFIG_SHARED
 * (config.js, só pro nome/rodapé). Trocar de idioma re-renderiza tudo.
 */
(function () {
  "use strict";

  let currentLocale = getLocale();
  // Forçado para false de propósito: as animações do site rodam sempre,
  // mesmo com "reduzir movimento" ativado no sistema do visitante.
  const prefersReducedMotion = false;

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function clear(node) {
    if (node) node.innerHTML = "";
  }

  function text(selector, value) {
    const node = document.querySelector(selector);
    if (node) node.textContent = value;
  }

  function renderAll(locale) {
    currentLocale = locale;
    const ui = UI[locale];
    const zc = ZENITHCODE[locale];

    document.documentElement.lang = ui.htmlLang;
    document.title = zc.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", zc.meta.description);

    document.querySelectorAll("[data-name]").forEach((n) => (n.textContent = CONFIG_SHARED.name));
    document.querySelectorAll("[data-year]").forEach((n) => (n.textContent = new Date().getFullYear()));
    document.querySelectorAll("[data-footer-note]").forEach((n) => (n.textContent = ui.footerNote));

    text("[data-back-label]", `← ${zc.backLabel}`);

    const backToTop = document.querySelector("[data-back-to-top]");
    if (backToTop) {
      backToTop.setAttribute("aria-label", ui.backToTop);
      backToTop.setAttribute("title", ui.backToTop);
    }

    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === locale);
    });

    // ---- Hero ----
    text("[data-zc-eyebrow]", zc.hero.eyebrow);
    text("[data-zc-title]", zc.hero.title);
    text("[data-zc-subtitle]", zc.hero.subtitle);
    text("[data-zc-summary]", zc.hero.summary);
    text("[data-zc-masters-note]", zc.hero.mastersNote);

    // ---- Estatuto epistêmico ----
    text("[data-zc-epistemic-title]", zc.epistemic.title);
    text("[data-zc-epistemic-body]", zc.epistemic.body);

    // ---- Problema ----
    text("[data-zc-problem-title]", zc.problem.title);
    text("[data-zc-problem-body]", zc.problem.body);

    // ---- Tese ----
    text("[data-zc-thesis-title]", zc.thesis.title);
    text("[data-zc-thesis-quote]", `"${zc.thesis.quote}"`);
    text("[data-zc-thesis-body]", zc.thesis.body);
    text("[data-zc-thesis-analogy]", zc.thesis.analogy);

    // ---- Grade genérica de cards numerados: reaproveitada pelo Núcleo
    // mínimo, Topologia de dados, Leis/axiomas e Ferramental físico —
    // todos têm o mesmo formato (título + um parágrafo de descrição).
    function renderCardGrid(gridEl, items) {
      if (!gridEl) return;
      clear(gridEl);
      items.forEach((item, i) => {
        const card = el("div", "zc-rule-card");
        card.appendChild(el("span", "zc-rule-num", String(i + 1).padStart(2, "0")));
        card.appendChild(el("h3", null, item.title));
        card.appendChild(el("p", null, item.mechanic || item.body));
        gridEl.appendChild(card);
      });
    }

    // ---- Núcleo mínimo (6 regras) ----
    text("[data-zc-rules-title]", zc.coreRules.title);
    text("[data-zc-rules-intro]", zc.coreRules.intro);
    renderCardGrid(document.querySelector("[data-zc-rules-grid]"), zc.coreRules.items);

    // ---- Topologia de dados (3 camadas) ----
    if (zc.topology) {
      text("[data-zc-topology-title]", zc.topology.title);
      text("[data-zc-topology-intro]", zc.topology.intro);
      renderCardGrid(document.querySelector("[data-zc-topology-grid]"), zc.topology.items);
    }

    // ---- Leis, axiomas e protocolos ----
    if (zc.laws) {
      text("[data-zc-laws-title]", zc.laws.title);
      text("[data-zc-laws-intro]", zc.laws.intro);
      renderCardGrid(document.querySelector("[data-zc-laws-grid]"), zc.laws.items);
    }

    // ---- Teste do Apagão ----
    text("[data-zc-blackout-tag]", zc.blackout.tag);
    text("[data-zc-blackout-title]", zc.blackout.title);
    text("[data-zc-blackout-whatis]", zc.blackout.whatIs);
    text("[data-zc-blackout-criterion]", zc.blackout.criterion);
    text("[data-zc-blackout-proves]", zc.blackout.proves);
    text("[data-zc-blackout-closing]", zc.blackout.closing);

    // ---- Como se mede ----
    text("[data-zc-measure-title]", zc.measurement.title);
    text("[data-zc-measure-intro]", zc.measurement.intro);
    const measureList = document.querySelector("[data-zc-measure-list]");
    if (measureList) {
      clear(measureList);
      zc.measurement.items.forEach((item) => {
        const row = el("div", "zc-measure-item");
        row.appendChild(el("span", "zc-measure-name", item.name));
        row.appendChild(el("span", "zc-measure-what", item.what));
        row.appendChild(el("span", "zc-measure-role", item.role));
        measureList.appendChild(row);
      });
    }

    // ---- Os 20 satélites, agrupados em 3 linhas de atuação ----
    // (Núcleo Operacional & Infraestrutura / Expansão de Mercado &
    // Integração / Z2A Labs — zc.satellites.groups). O array items
    // já vem ordenado por grupo; a cada troca de `group` a gente
    // fecha a grade atual e abre uma nova, com seu próprio header.
    text("[data-zc-satellites-title]", zc.satellites.title);
    text("[data-zc-satellites-intro]", zc.satellites.intro);
    const satWrap = document.querySelector("[data-zc-satellites-wrap]");
    if (satWrap) {
      clear(satWrap);
      let currentGrid = null;
      let lastGroup = null;
      zc.satellites.items.forEach((sat) => {
        if (sat.group !== lastGroup) {
          lastGroup = sat.group;
          satWrap.appendChild(el("h3", "zc-sat-group-title", zc.satellites.groups[sat.group] || sat.group));
          currentGrid = el("div", "zc-satellites-grid");
          satWrap.appendChild(currentGrid);
        }
        const card = el("div", "zc-satellite-card");
        card.id = sat.slug;
        card.tabIndex = 0;
        card.setAttribute("role", "button");
        card.setAttribute("aria-expanded", "false");
        const img = document.createElement("img");
        img.src = `assets/z2a/emblemas/${sat.id}_${sat.slug}.png`;
        img.alt = sat.name;
        img.loading = "lazy";
        card.appendChild(img);
        card.appendChild(el("span", "zc-sat-num", sat.id));
        card.appendChild(el("h3", null, sat.name));
        card.appendChild(el("span", "zc-sat-domain", sat.domain));
        card.appendChild(el("p", null, sat.gloss));
        if (sat.detail) {
          card.appendChild(el("p", "zc-sat-detail", sat.detail));
          card.appendChild(el("span", "zc-sat-chevron", "▾"));
          const toggle = () => {
            const expanded = card.classList.toggle("expanded");
            card.setAttribute("aria-expanded", String(expanded));
          };
          card.addEventListener("click", toggle);
          card.addEventListener("keydown", (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              toggle();
            }
          });
        }
        currentGrid.appendChild(card);
      });
    }

    // ---- Ferramental físico ----
    if (zc.tooling) {
      text("[data-zc-tooling-title]", zc.tooling.title);
      text("[data-zc-tooling-intro]", zc.tooling.intro);
      renderCardGrid(document.querySelector("[data-zc-tooling-grid]"), zc.tooling.items);
    }

    // ---- Quando não adotar ----
    text("[data-zc-whennot-title]", zc.whenNot.title);
    const whenNotList = document.querySelector("[data-zc-whennot-list]");
    if (whenNotList) {
      clear(whenNotList);
      zc.whenNot.items.forEach((item) => whenNotList.appendChild(el("li", null, item)));
    }

    // ---- CTA final ----
    text("[data-zc-vertex-note]", zc.footer.vertexNote);
    text("[data-zc-back-cta]", zc.footer.backCta);

    initScrollReveal();
  }

  function setupLangSwitch() {
    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const locale = btn.getAttribute("data-lang");
        if (!locale || locale === currentLocale) return;
        setLocale(locale);
        renderAll(locale);
      });
    });
  }

  function setupBackToTop() {
    const btn = document.querySelector("[data-back-to-top]");
    if (!btn) return;
    const toggleVisibility = () => {
      btn.classList.toggle("visible", window.scrollY > window.innerHeight * 0.6);
    };
    window.addEventListener("scroll", toggleVisibility, { passive: true });
    toggleVisibility();
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
    });
  }

  // Fade de entrada de 2s na hero, igual ao index.html — só a entrada,
  // sem parallax de scroll (esta página não tem foto/grid de fundo).
  function setupHeroFade() {
    if (prefersReducedMotion) return;
    const hero = document.querySelector("[data-zc-hero]");
    if (!hero) return;
    requestAnimationFrame(() => {
      hero.style.opacity = "1";
    });
  }

  function initScrollReveal() {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal]").forEach((n) => n.classList.add("revealed"));
      return;
    }
    const targets = document.querySelectorAll("[data-reveal]:not(.revealed)");
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach((t) => observer.observe(t));
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderAll(currentLocale);
    setupLangSwitch();
    setupBackToTop();
    setupHeroFade();
  });
})();
