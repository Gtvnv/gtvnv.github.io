/**
 * NAV — hambúrguer mobile + scroll-spy (seção ativa destacada via underline
 * animada). O scroll-spy usa IntersectionObserver; a underline é puramente
 * CSS (classe .active no link). Idempotente entre navegações.
 */
let navCleanup: (() => void) | null = null;
let spyObserver: IntersectionObserver | null = null;

export function initNav(): void {
  if (navCleanup) {
    navCleanup();
    navCleanup = null;
  }
  if (spyObserver) {
    spyObserver.disconnect();
    spyObserver = null;
  }

  setupNavToggle();
  setupScrollSpy();
}

function setupNavToggle(): void {
  const toggle = document.querySelector<HTMLButtonElement>(".nav-toggle");
  const nav = document.querySelector<HTMLElement>(".main-nav");
  if (!toggle || !nav) return;

  const onToggle = () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  };
  toggle.addEventListener("click", onToggle);

  const links = Array.from(nav.querySelectorAll<HTMLAnchorElement>("a"));
  const onLinkClick = () => nav.classList.remove("open");
  links.forEach((link) => link.addEventListener("click", onLinkClick));

  navCleanup = () => {
    toggle.removeEventListener("click", onToggle);
    links.forEach((link) => link.removeEventListener("click", onLinkClick));
  };
}

function setupScrollSpy(): void {
  const sections = Array.from(
    document.querySelectorAll<HTMLElement>("main section[id]"),
  );
  const navLinks = Array.from(
    document.querySelectorAll<HTMLAnchorElement>(".main-nav a"),
  );
  if (!sections.length || !navLinks.length || !("IntersectionObserver" in window))
    return;

  const linkFor = (id: string) =>
    navLinks.find((a) => a.getAttribute("href") === `#${id}`);

  spyObserver = new IntersectionObserver(
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
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
  );

  sections.forEach((s) => spyObserver!.observe(s));
}
