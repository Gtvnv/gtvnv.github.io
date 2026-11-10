/**
 * Gera os currículos (PDF A4, uma página) em pt, en e es.
 *
 *   node tools/resume/build.mjs [pastaDeSaidaDosPdfs]
 *
 * Fonte do conteúdo: tools/resume/data.mjs. Estilo: tools/resume/style.css.
 * Usa o Chrome/Edge instalado em modo headless (sem dependência npm).
 * Sem argumento, grava os PDFs em public/assets (nomes curriculo-...-{pt,en,es}.pdf).
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { resumes } from "./data.mjs";

const HERE = dirname(fileURLToPath(import.meta.url));
// tools/resume/ -> sobe dois níveis até a raiz do projeto -> public/assets
const OUT_PDF = resolve(process.argv[2] ?? join(HERE, "..", "..", "public", "assets"));
const OUT_HTML = join(HERE, ".build");
const CSS = readFileSync(join(HERE, "style.css"), "utf8");

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function html(r, css = CSS) {
  const section = (title, body) => `<section><h2>${esc(title)}</h2>${body}</section>`;

  const skills = r.skills.items
    .map(([label, text]) => `<p><b>${esc(label)}</b> ${esc(text)}</p>`)
    .join("");

  // `compact: true` desenha o cargo numa linha só (cargo · empresa ... data),
  // sem bullets — usado nos cargos mais antigos para economizar altura.
  const jobs = r.experience.jobs
    .map((j) =>
      j.compact
        ? `<article class="job job-compact">
<div class="job-head"><h3 class="job-title">${esc(j.title)}<span class="job-co"> · ${esc(j.company)}</span></h3><span class="job-date">${esc(j.date)}</span></div>
</article>`
        : `<article class="job">
<div class="job-head"><h3 class="job-title">${esc(j.title)}</h3><span class="job-date">${esc(j.date)}</span></div>
<p class="job-company">${esc(j.company)}</p>
<ul>${j.bullets.map((b) => `<li>${esc(b)}</li>`).join("")}</ul>
</article>`
    )
    .join("");

  const projects = r.projects.items
    .map(
      (p) => `<article class="project">
<h3 class="project-title">${esc(p.title)} <span class="project-tags">— ${esc(p.tags)}</span></h3>
<p>${esc(p.desc)}</p>${p.url ? `<a class="project-link" href="${p.url}">${esc(p.url)}</a>` : ""}
</article>`
    )
    .join("");

  const edu = r.education.rows
    .map(
      ([deg, inst, date]) =>
        `<div class="edu-row"><span class="edu-main"><b class="edu-degree">${esc(deg)}</b><span class="edu-inst">${esc(inst)}</span></span><span class="edu-date">${esc(date)}</span></div>`
    )
    .join("");

  const langs = r.languages.items
    .map(([name, level]) => `<b>${esc(name)}</b> — ${esc(level)}`)
    .join('<span class="sep">·</span>');

  return `<!doctype html>
<html lang="${r.lang}"><head><meta charset="utf-8"><title>${esc(r.title)}</title>
<style>${css}</style></head>
<body><main class="page">
<header><h1>Gustavo Ventura Nery Vianna</h1><p class="role">${esc(r.role)}</p><p class="contact">${esc(r.contact)}</p></header>
${section(r.summary.h, `<p>${esc(r.summary.text)}</p>`)}
${section(r.skills.h, `<div class="skills">${skills}</div>`)}
${section(r.experience.h, jobs)}
${section(r.projects.h, projects)}
${section(r.education.h, `<div class="edu">${edu}</div>`)}
${section(r.languages.h, `<p class="langs">${langs}</p>`)}
</main></body></html>`;
}

export function findBrowser() {
  const c = [
    "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    "C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  ].find((p) => existsSync(p));
  if (!c) throw new Error("Chrome/Edge não encontrado. Instale um deles.");
  return c;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  mkdirSync(OUT_HTML, { recursive: true });
  mkdirSync(OUT_PDF, { recursive: true });
  const browser = findBrowser();
  
  for (const [key, r] of Object.entries(resumes)) {
    const htmlPath = join(OUT_HTML, `cv-${key}.html`);
    const pdfPath = join(OUT_PDF, r.file);
    writeFileSync(htmlPath, html(r), "utf8");
    execFileSync(browser, [
      "--headless=new",
      "--disable-gpu",
      "--no-pdf-header-footer",
      `--print-to-pdf=${pdfPath}`,
      pathToFileURL(htmlPath).href,
    ], { stdio: "ignore" });
    console.log(`ok  ${key}  ->  ${pdfPath}`);
  }
  
}

