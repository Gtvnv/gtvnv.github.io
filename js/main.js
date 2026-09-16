/**
 * MAIN — lê os arquivos de dados para o idioma ativo e monta a página.
 * Trocar de idioma re-renderiza tudo sem recarregar. Você não precisa
 * editar este arquivo pra atualizar conteúdo — edite os arquivos em js/.
 */
(function () {
  "use strict";

  let currentLocale = getLocale();
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  function clear(node) {
    if (node) node.innerHTML = "";
  }

  // ---------- UI estática (nav, títulos de seção, botões) ----------
  function renderUI(locale) {
    const ui = UI[locale];
    document.documentElement.lang = ui.htmlLang;
    document.title = ui.pageTitle(CONFIG_SHARED.name, CONFIG[locale].role);

    const navMap = {
      "[data-nav-sobre]": ui.nav.sobre,
      "[data-nav-experiencia]": ui.nav.experiencia,
      "[data-nav-projetos]": ui.nav.projetos,
      "[data-nav-notas]": ui.nav.notas,
      "[data-nav-formacao]": ui.nav.formacao,
      "[data-nav-idiomas]": ui.nav.idiomas,
      "[data-nav-contato]": ui.nav.contato,
    };
    Object.entries(navMap).forEach(([selector, text]) => {
      const node = document.querySelector(selector);
      if (node) node.textContent = text;
    });

    const toggle = document.querySelector(".nav-toggle");
    if (toggle) toggle.setAttribute("aria-label", ui.navToggleLabel);

    document.querySelectorAll("[data-btn-projects]").forEach((n) => (n.textContent = ui.heroButtons.projects));
    document.querySelectorAll("[data-btn-contact]").forEach((n) => (n.textContent = ui.heroButtons.contact));
    document.querySelectorAll("[data-btn-resume]").forEach((n) => (n.textContent = ui.heroButtons.resume));

    document.querySelectorAll("[data-meta-location-label]").forEach((n) => (n.textContent = ui.heroMeta.location));
    document.querySelectorAll("[data-meta-stack-label]").forEach((n) => (n.textContent = ui.heroMeta.stack));

    const sectionKeys = ["sobre", "experiencia", "projetos", "notas", "formacao", "idiomas", "contato"];
    sectionKeys.forEach((key) => {
      const indexNode = document.querySelector(`[data-section-index="${key}"]`);
      const titleNode = document.querySelector(`[data-section-title="${key}"]`);
      if (indexNode) indexNode.textContent = ui.sections[key].index;
      if (titleNode) titleNode.textContent = ui.sections[key].title;
    });

    const copyBtn = document.querySelector("[data-copy-email]");
    if (copyBtn) copyBtn.textContent = ui.copyEmail.idle;
    const copyPhoneBtn = document.querySelector("[data-copy-phone]");
    if (copyPhoneBtn) copyPhoneBtn.textContent = ui.copyPhone.idle;

    document.querySelectorAll("[data-footer-note]").forEach((n) => (n.textContent = ui.footerNote));

    const backToTop = document.querySelector("[data-back-to-top]");
    if (backToTop) {
      backToTop.setAttribute("aria-label", ui.backToTop);
      backToTop.setAttribute("title", ui.backToTop);
    }

    document.querySelectorAll(".lang-switch button").forEach((btn) => {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === locale);
    });
  }

  // ---------- Config / hero / sobre / contato ----------
  function renderConfig(locale) {
    const cfg = CONFIG[locale];

    document.querySelectorAll("[data-name]").forEach((n) => (n.textContent = CONFIG_SHARED.name));
    document.querySelectorAll("[data-fullname]").forEach((n) => (n.textContent = CONFIG_SHARED.fullName));
    document.querySelectorAll("[data-role]").forEach((n) => (n.textContent = cfg.role));
    document.querySelectorAll("[data-status]").forEach((n) => (n.textContent = cfg.status));
    document.querySelectorAll("[data-location]").forEach((n) => (n.textContent = CONFIG_SHARED.location));
    document.querySelectorAll("[data-summary]").forEach((n) => (n.textContent = cfg.heroSummary));
    document.querySelectorAll("[data-email]").forEach((n) => {
      n.textContent = CONFIG_SHARED.email;
      n.href = `mailto:${CONFIG_SHARED.email}`;
    });
    document.querySelectorAll("[data-phone]").forEach((n) => {
      n.textContent = CONFIG_SHARED.phone;
      n.href = `tel:${CONFIG_SHARED.phoneDial}`;
    });

    const linkedin = document.querySelector("[data-linkedin]");
    if (linkedin) linkedin.href = CONFIG_SHARED.social.linkedin;
    const github = document.querySelector("[data-github]");
    if (github) github.href = CONFIG_SHARED.social.github;
    const whatsapp = document.querySelector("[data-whatsapp]");
    if (whatsapp) whatsapp.href = CONFIG_SHARED.social.whatsapp;

    const resumeLink = document.querySelector("[data-resume]");
    if (resumeLink) {
      const url = CONFIG_SHARED.resumeUrl[locale];
      if (url) {
        resumeLink.href = url;
        resumeLink.style.display = "";
      } else {
        resumeLink.style.display = "none";
      }
    }

    const aboutContainer = document.querySelector("[data-about-text]");
    if (aboutContainer) {
      clear(aboutContainer);
      cfg.aboutParagraphs.forEach((paragraph) => aboutContainer.appendChild(el("p", null, paragraph)));
    }

    document.querySelectorAll("[data-year]").forEach((n) => (n.textContent = new Date().getFullYear()));
  }

  // ---------- Skills ----------
  function renderSkills(locale) {
    const container = document.querySelector("[data-skills]");
    if (!container) return;
    clear(container);
    SKILLS[locale].forEach((group) => {
      const block = el("div", "skill-category");
      block.appendChild(el("h3", null, group.category));
      const tagWrap = el("div", "skill-tags");
      group.items.forEach((item) => tagWrap.appendChild(el("span", "tag", item)));
      block.appendChild(tagWrap);
      container.appendChild(block);
    });
  }

  // ---------- Languages ----------
  function renderLanguages(locale) {
    const container = document.querySelector("[data-languages]");
    if (!container) return;
    clear(container);
    LANGUAGES[locale].forEach((entry) => {
      const item = el("div", "language-item");
      item.appendChild(el("span", "language-name", entry.language));
      item.appendChild(el("span", "language-level", entry.level));
      container.appendChild(item);
    });
  }

  // ---------- Experience ----------
  function renderExperience(locale) {
    const container = document.querySelector("[data-experience]");
    if (!container) return;
    clear(container);
    EXPERIENCE[locale].forEach((job) => {
      const item = el("div", "timeline-item");
      item.appendChild(el("span", "timeline-period", job.period));
      item.appendChild(el("h3", "timeline-role", job.role));
      item.appendChild(el("span", "timeline-company", job.company));
      item.appendChild(el("p", "timeline-desc", job.description));
      container.appendChild(item);
    });
  }

  // ---------- Education ----------
  function renderEducation(locale) {
    const container = document.querySelector("[data-education]");
    if (!container) return;
    clear(container);
    EDUCATION[locale].forEach((entry) => {
      const item = el("div", "education-item");
      const left = el("div");
      left.appendChild(el("div", "education-degree", entry.degree));
      left.appendChild(el("div", "education-institution", entry.institution));
      item.appendChild(left);
      item.appendChild(el("span", "education-period", entry.period));
      container.appendChild(item);
    });
  }

  // ---------- Technical notes ----------
  function renderNotes(locale) {
    const container = document.querySelector("[data-notes]");
    if (!container || typeof NOTES === "undefined") return;
    clear(container);
    NOTES[locale].forEach((note) => {
      const item = el("div", "note-item");
      item.appendChild(el("h3", "note-title", note.title));
      item.appendChild(el("p", "note-body", note.body));
      if (note.link) {
        const a = el("a", "note-link", UI[locale].noteLink);
        a.href = note.link;
        a.target = "_blank";
        a.rel = "noopener";
        item.appendChild(a);
      }
      container.appendChild(item);
    });
  }

  // ---------- Projects ----------
  function renderProjects(locale) {
    const container = document.querySelector("[data-projects]");
    if (!container) return;
    clear(container);
    const labels = UI[locale].projectLinks;
    PROJECTS[locale].forEach((project) => {
      const card = el("article", "project-card");
      if (project.featured) card.classList.add("featured");

      const head = el("div", "project-head");
      head.appendChild(el("h3", "project-title", project.title));
      const pill = el("span", "status-pill", project.status);
      pill.setAttribute("data-status-key", project.statusKey);
      head.appendChild(pill);
      card.appendChild(head);

      card.appendChild(el("p", "project-summary", project.summary));

      if (project.impact) {
        card.appendChild(el("p", "project-impact", `↳ ${project.impact}`));
      }

      card.appendChild(el("p", "project-desc", project.description));

      const tags = el("div", "project-tags");
      project.tags.forEach((tag) => tags.appendChild(el("span", "tag", tag)));
      card.appendChild(tags);

      const links = el("div", "project-links");
      if (project.links.live) {
        const a = el("a", null, labels.live);
        a.href = project.links.live;
        a.target = "_blank";
        a.rel = "noopener";
        links.appendChild(a);
      }
      if (project.links.repo) {
        const a = el("a", null, labels.repo);
        a.href = project.links.repo;
        a.target = "_blank";
        a.rel = "noopener";
        links.appendChild(a);
      }
      if (links.children.length) card.appendChild(links);

      container.appendChild(card);
    });
  }

  // ---------- Render pipeline ----------
  function renderAll(locale) {
    currentLocale = locale;
    renderUI(locale);
    renderConfig(locale);
    renderSkills(locale);
    renderLanguages(locale);
    renderExperience(locale);
    renderEducation(locale);
    renderProjects(locale);
    renderNotes(locale);
    initScrollReveal(); // novos nós entraram no DOM — observa de novo
  }

  // ---------- Interactions ----------
  function setupNavToggle() {
    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".main-nav");
    if (!toggle || !nav) return;
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
    nav.querySelectorAll("a").forEach((link) =>
      link.addEventListener("click", () => nav.classList.remove("open"))
    );
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

  // Botão genérico de "copiar X" — usado para e-mail e telefone. `uiKey` é a
  // chave em UI[locale] com os textos { idle, done } daquele botão.
  function setupCopyButton(selector, value, uiKey) {
    const btn = document.querySelector(selector);
    if (!btn) return;
    btn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(value);
        btn.textContent = UI[currentLocale][uiKey].done;
        setTimeout(() => (btn.textContent = UI[currentLocale][uiKey].idle), 1800);
      } catch (e) {
        // Clipboard indisponível — o link mailto/tel acima já resolve.
      }
    });
  }

  // Destaca no menu a seção visível durante o scroll.
  function setupScrollSpy() {
    const sections = Array.from(document.querySelectorAll("main > section[id]"));
    const navLinks = Array.from(document.querySelectorAll(".main-nav a"));
    if (!sections.length || !navLinks.length || !("IntersectionObserver" in window)) return;

    const linkFor = (id) => navLinks.find((a) => a.getAttribute("href") === `#${id}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const link = linkFor(entry.target.id);
          if (!link) return;
          if (entry.isIntersecting) {
            navLinks.forEach((a) => a.classList.remove("active"));
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
  }

  // Botão de voltar ao topo: aparece depois de rolar além da hero.
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

  // Parallax da hero (grid de fundo + foto) e fade do topo conforme rola.
  // Desativado se o visitante pedir menos movimento (prefers-reduced-motion).
  //
  // Importante: NUNCA aplicar esse deslocamento no .lava-bg — ele é
  // position:fixed cobrindo exatamente o viewport (inset:0); mover seu
  // transform via scroll desloca esse retângulo pra fora do viewport e
  // expõe um vão branco (o fundo default de html/body) no topo da tela.
  function setupParallax() {
    if (prefersReducedMotion) return;
    const grid = document.querySelector("[data-parallax]");
    const heroContent = document.querySelector(".hero-content");
    const heroPhoto = document.querySelector(".hero-photo-wrap");
    const hero = document.querySelector(".hero");
    if (!grid && !heroContent && !heroPhoto) return;

    let ticking = false;
    function update() {
      const scrollY = window.scrollY;
      const heroHeight = hero ? hero.offsetHeight : window.innerHeight;

      if (grid) grid.style.transform = `translate3d(0, ${scrollY * 0.25}px, 0)`;
      if (heroPhoto) heroPhoto.style.transform = `translate3d(0, ${scrollY * 0.12}px, 0)`;

      // Foto e texto da hero somem suavemente até ~85% da altura da hero,
      // sem chegar a opacidade zero (evita um "sumiço" abrupto).
      const fadeProgress = Math.min(scrollY / (heroHeight * 0.85), 1);
      const heroOpacity = 1 - fadeProgress * 0.9;
      if (heroContent) heroContent.style.opacity = String(heroOpacity);
      if (heroPhoto) heroPhoto.style.opacity = String(heroOpacity);

      ticking = false;
    }
    window.addEventListener(
      "scroll",
      () => {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );

    // No carregamento, a hero está com opacity:0 (ver CSS) e essa primeira
    // chamada de update() já manda opacity:1 — como o elemento tem
    // transition:opacity definida, isso já basta pra reproduzir o fade de
    // entrada de 2s. Depois de tocar, removemos a transition pra que os
    // ajustes de opacidade ao rolar (feitos acima) fiquem instantâneos,
    // sem "arrastar" atrás da posição do scroll.
    update();
    setTimeout(() => {
      if (heroContent) heroContent.style.transition = "none";
      if (heroPhoto) heroPhoto.style.transition = "none";
    }, 2050);
  }

  // Revela seções e cards suavemente conforme entram na tela.
  function initScrollReveal() {
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      document.querySelectorAll("[data-reveal], .project-card, .timeline-item, .note-item").forEach((n) =>
        n.classList.add("revealed")
      );
      return;
    }
    const targets = document.querySelectorAll(
      "[data-reveal]:not(.revealed), .project-card:not(.revealed), .timeline-item:not(.revealed), .note-item:not(.revealed)"
    );
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
    setupNavToggle();
    setupLangSwitch();
    setupCopyButton("[data-copy-email]", CONFIG_SHARED.email, "copyEmail");
    setupCopyButton("[data-copy-phone]", CONFIG_SHARED.phone, "copyPhone");
    setupScrollSpy();
    setupBackToTop();
    setupParallax();
  });
})();
