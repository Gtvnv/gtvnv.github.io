/**
 * PROJECT DETAILS — renderer genérico das páginas em projects/*.html.
 * Lê PROJECT_SLUG (definido inline no HTML de cada página, antes deste
 * script) + PROJECT_DETAILS (project-details-data.js) + UI (i18n.js) +
 * CONFIG_SHARED (config.js). Reaproveita as classes visuais de
 * css/zenithcode.css de propósito — mesmo padrão da página do Z2A.
 */
(function () {
  "use strict";

  let currentLocale = getLocale();
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

  function renderAll(locale) {
    currentLocale = locale;
    const ui = UI[locale];
    const p = PROJECT_DETAILS[locale] && PROJECT_DETAILS[locale][PROJECT_SLUG];
    if (!p) return;

    document.documentElement.lang = ui.htmlLang;
    document.title = p.meta.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", p.meta.description);

    document.querySelectorAll("[data-name]").forEach((n) => (n.textContent = CONFIG_SHARED.name));
    document.querySelectorAll("[data-year]").forEach((n) => (n.textContent = new Date().getFullYear()));
    document.querySelectorAll("[data-footer-note]").forEach((n) => (n.textContent = ui.footerNote));

    text("[data-back-label]", `← ${p.backLabel}`);

    const backToTop = document.querySelector("[data-back-to-top]");
    if (backToTop) {
      backToTop.setAttribute("aria-label", ui.backToTop);
      backToTop.setAttribute("title", ui.backToTop);
    }

    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === locale);
    });

    // ---- Hero ----
    const logo = document.querySelector("[data-pd-logo]");
    if (logo) logo.src = p.logo;
    text("[data-pd-eyebrow]", p.hero.eyebrow);
    text("[data-pd-title]", p.hero.title);
    text("[data-pd-subtitle]", p.hero.subtitle);
    text("[data-pd-summary]", p.hero.summary);
    const statusNote = document.querySelector("[data-pd-status-note]");
    if (statusNote) {
      if (p.hero.statusNote) {
        statusNote.textContent = p.hero.statusNote;
        statusNote.style.display = "";
      } else {
        statusNote.style.display = "none";
      }
    }

    // ---- Sobre ----
    text("[data-pd-about-title]", p.about.title);
    text("[data-pd-about-body]", p.about.body);

    // ---- Arquitetura ----
    const archSection = document.querySelector("[data-pd-architecture-section]");
    if (p.architecture) {
      if (archSection) archSection.style.display = "";
      text("[data-pd-architecture-title]", p.architecture.title);
      text("[data-pd-architecture-body]", p.architecture.body);
      const treeEl = document.querySelector("[data-pd-architecture-tree]");
      if (treeEl) {
        if (p.architecture.tree) {
          treeEl.textContent = p.architecture.tree.join("\n");
          treeEl.style.display = "";
        } else {
          treeEl.style.display = "none";
        }
      }
    } else if (archSection) {
      archSection.style.display = "none";
    }

    // ---- Stack ----
    text("[data-pd-stack-title]", p.stack.title);
    const stackGrid = document.querySelector("[data-pd-stack-grid]");
    if (stackGrid) {
      clear(stackGrid);
      p.stack.items.forEach((tag) => stackGrid.appendChild(el("span", "tag", tag)));
    }

    // ---- Recursos-chave ----
    text("[data-pd-features-title]", p.features.title);
    text("[data-pd-features-intro]", p.features.intro);
    renderCardGrid(document.querySelector("[data-pd-features-grid]"), p.features.items);

    // ---- Endpoints ----
    const endpointsSection = document.querySelector("[data-pd-endpoints-section]");
    if (p.endpoints) {
      if (endpointsSection) endpointsSection.style.display = "";
      text("[data-pd-endpoints-title]", p.endpoints.title);
      text("[data-pd-endpoints-intro]", p.endpoints.intro);
      const endpointsList = document.querySelector("[data-pd-endpoints-list]");
      if (endpointsList) {
        clear(endpointsList);
        p.endpoints.items.forEach((item) => {
          const row = el("div", "zc-measure-item");
          row.appendChild(el("span", "zc-measure-name", item.name));
          row.appendChild(el("span", "zc-measure-what", item.what));
          row.appendChild(el("span", "zc-measure-role", item.role || ""));
          endpointsList.appendChild(row);
        });
      }
    } else if (endpointsSection) {
      endpointsSection.style.display = "none";
    }

    // ---- Segurança ----
    const securitySection = document.querySelector("[data-pd-security-section]");
    if (p.security) {
      if (securitySection) securitySection.style.display = "";
      text("[data-pd-security-title]", p.security.title);
      text("[data-pd-security-body]", p.security.body);
    } else if (securitySection) {
      securitySection.style.display = "none";
    }

    // ---- Links ----
    const linksWrap = document.querySelector("[data-pd-links]");
    if (linksWrap) {
      clear(linksWrap);
      const labels = ui.projectLinks;
      if (p.links.live) {
        const a = el("a", null, labels.live);
        a.href = p.links.live;
        a.target = "_blank";
        a.rel = "noopener";
        linksWrap.appendChild(a);
      }
      if (p.links.repo) {
        const a = el("a", null, labels.repo);
        a.href = p.links.repo;
        a.target = "_blank";
        a.rel = "noopener";
        linksWrap.appendChild(a);
      }
    }

    // ---- CTA final ----
    text("[data-pd-back-cta]", p.footer.backCta);

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

  function setupHeroFade() {
    if (prefersReducedMotion) return;
    const hero = document.querySelector("[data-pd-hero]");
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
