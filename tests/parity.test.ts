/**
 * Teste de PARIDADE de conteúdo — a rede de segurança da migração SEM PERDA.
 *
 * Carrega os JSON dos 3 locales direto de src/content/ (independente do
 * runtime do Astro) e afirma as contagens e invariantes que precisam valer
 * identicamente nos três idiomas. NÃO compara literais traduzidos: só estrutura,
 * contagens e campos estáveis (slug/statusKey/group).
 */
import { describe, it, expect } from "vitest";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

import { DETAIL_LABELS } from "../src/i18n/detail";

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT = join(__dirname, "..", "src", "content");

const LOCALES = ["pt-BR", "en", "es"] as const;
type Locale = (typeof LOCALES)[number];

function load<T = any>(entity: string, locale: Locale): T {
  return JSON.parse(readFileSync(join(CONTENT, entity, `${locale}.json`), "utf8"));
}

describe("paridade de conteúdo entre pt-BR / en / es", () => {
  it("todos os arquivos existem e são JSON válido nos 3 locales", () => {
    for (const locale of LOCALES) {
      for (const entity of [
        "profile",
        "ui",
        "projects",
        "experience",
        "education",
        "languages",
        "skills",
        "notes",
        "projectDetails",
        "zenithcode",
      ]) {
        expect(() => load(entity, locale), `${entity}/${locale}`).not.toThrow();
      }
    }
  });

  it("18 projetos por locale", () => {
    for (const locale of LOCALES) {
      expect(load("projects", locale).items).toHaveLength(18);
    }
  });

  it("17 detalhes de projeto por locale", () => {
    for (const locale of LOCALES) {
      expect(Object.keys(load("projectDetails", locale))).toHaveLength(17);
    }
  });

  it("20 satélites por locale", () => {
    for (const locale of LOCALES) {
      expect(load("zenithcode", locale).satellites.items).toHaveLength(20);
    }
  });

  it("7 grupos de skills por locale", () => {
    for (const locale of LOCALES) {
      expect(load("skills", locale).items).toHaveLength(7);
    }
  });

  it("projetos: mesmos slugs e statusKey na mesma ordem nos 3 locales", () => {
    // links.details guarda slug ou 'zenithcode' (sem extensão); projectDetails
    // é um Record keyed por slug. A ordem autoritativa é a do array projects.
    const seqFor = (locale: Locale) =>
      load("projects", locale).items.map((p: any) => ({
        details: p.links?.details ?? null,
        statusKey: p.statusKey,
      }));

    const ref = JSON.stringify(seqFor("pt-BR"));
    for (const locale of LOCALES) {
      expect(JSON.stringify(seqFor(locale)), locale).toBe(ref);
    }
  });

  it("projectDetails tem exatamente os mesmos slugs que os projects com details (por locale)", () => {
    for (const locale of LOCALES) {
      const projSlugs = load("projects", locale)
        .items.map((p: any) => p.links?.details)
        .filter((d: string | null) => d && d !== "zenithcode")
        .sort();
      const detailKeys = Object.keys(load("projectDetails", locale)).sort();
      expect(detailKeys, locale).toEqual(projSlugs);
    }
  });

  it("resumeUrl (site compartilhado) tem as 3 chaves presentes (string ou null)", () => {
    const site = JSON.parse(
      readFileSync(join(CONTENT, "site", "shared.json"), "utf8"),
    );
    for (const key of ["pt-BR", "en", "es"] as const) {
      expect(site.resumeUrl, key).toHaveProperty(key);
      const value = site.resumeUrl[key];
      expect(value === null || typeof value === "string", key).toBe(true);
    }
  });

  it("ui.seo.metaDescription, socialDescription e footerNote presentes e não-vazios nos 3", () => {
    for (const locale of LOCALES) {
      const ui = load("ui", locale);
      expect(ui.seo.metaDescription?.trim(), `metaDescription/${locale}`).toBeTruthy();
      expect(ui.seo.socialDescription?.trim(), `socialDescription/${locale}`).toBeTruthy();
      expect(ui.footerNote?.trim(), `footerNote/${locale}`).toBeTruthy();
      // as DUAS descrições são strings distintas (requisito do review)
      expect(ui.seo.metaDescription, `distinct/${locale}`).not.toBe(ui.seo.socialDescription);
    }
  });

  it("satellites.items é contíguo por group (core, depois market, depois labs) e todo group existe em satellites.groups", () => {
    for (const locale of LOCALES) {
      const zc = load("zenithcode", locale);
      const groups = Object.keys(zc.satellites.groups);
      const seq: string[] = zc.satellites.items.map((s: any) => s.group);

      // todo item.group existe no dicionário de groups
      for (const g of seq) {
        expect(groups, `group "${g}" em groups/${locale}`).toContain(g);
      }

      // contiguidade: cada group aparece num único bloco contíguo
      const seen: string[] = [];
      let last: string | null = null;
      for (const g of seq) {
        if (g !== last) {
          expect(seen, `group "${g}" não-contíguo/${locale}`).not.toContain(g);
          seen.push(g);
          last = g;
        }
      }
    }
  });

  it("DETAIL_LABELS tem as 3 chaves não-vazias e distintas entre locales", () => {
    for (const key of ["allProjects", "prev", "next"] as const) {
      const values = LOCALES.map((l) => DETAIL_LABELS[l][key]);
      for (const v of values) expect(v?.trim(), key).toBeTruthy();
      expect(new Set(values).size, key).toBe(LOCALES.length);
    }
  });

  it("todo detalhe tem entrada em projects com statusKey válido e vizinhos formam ciclo de 17", () => {
    for (const locale of LOCALES) {
      const items = load("projects", locale).items;
      const order: string[] = items
        .map((p: any) => p.links?.details)
        .filter((d: string | null) => d && d !== "zenithcode");
      const slugs = Object.keys(load("projectDetails", locale));
      expect(order, locale).toHaveLength(17);
      for (const slug of slugs) {
        const entry = items.find((p: any) => p.links?.details === slug);
        expect(["production", "live", "development"], `${slug}/${locale}`).toContain(
          entry?.statusKey,
        );
      }
      // ciclo: seguindo "próximo" 17 vezes visita todos e volta ao início
      const seen = new Set<string>();
      let i = 0;
      for (let n = 0; n < order.length; n++) {
        const next = (i + 1) % order.length;
        expect(order[next], locale).not.toBe(order[i]);
        seen.add(order[i]);
        i = next;
      }
      expect(seen.size, locale).toBe(17);
      expect(i, locale).toBe(0);
    }
  });

  it("endpoints de projectDetails sempre têm role (string, default '')", () => {
    for (const locale of LOCALES) {
      const details = load("projectDetails", locale);
      for (const [slug, d] of Object.entries<any>(details)) {
        if (!d.endpoints) continue;
        for (const item of d.endpoints.items) {
          expect(typeof item.role, `${slug}.${item.name}/${locale}`).toBe("string");
        }
      }
    }
  });
});
