/**
 * Unit — localizedPath (montagem de URL por locale) e withBase (base-aware).
 * Cobre a matriz home/zenithcode/project nos 3 locales + x-default, o
 * segmento "proyectos" exclusivo do es, e a robustez do withBase a base com/
 * sem barra e a path com/sem barra inicial.
 */
import { describe, it, expect } from "vitest";
import {
  LOCALES,
  DEFAULT_LOCALE,
  localizedPath,
  type Locale,
} from "../src/i18n/locales";
import { withBase } from "../src/lib/assets";

describe("localizedPath — home", () => {
  it("pt-BR (default) não recebe prefixo", () => {
    expect(localizedPath({ kind: "home" }, "pt-BR")).toBe("/");
  });
  it("en/es recebem prefixo", () => {
    expect(localizedPath({ kind: "home" }, "en")).toBe("/en/");
    expect(localizedPath({ kind: "home" }, "es")).toBe("/es/");
  });
});

describe("localizedPath — zenithcode", () => {
  it("monta /zenithcode por locale, sem traduzir o segmento", () => {
    expect(localizedPath({ kind: "zenithcode" }, "pt-BR")).toBe("/zenithcode");
    expect(localizedPath({ kind: "zenithcode" }, "en")).toBe("/en/zenithcode");
    expect(localizedPath({ kind: "zenithcode" }, "es")).toBe("/es/zenithcode");
  });
});

describe("localizedPath — project detail", () => {
  it("pt-BR e en usam 'projects'; es usa 'proyectos'", () => {
    expect(localizedPath({ kind: "project", slug: "zyntra" }, "pt-BR")).toBe(
      "/projects/zyntra",
    );
    expect(localizedPath({ kind: "project", slug: "zyntra" }, "en")).toBe(
      "/en/projects/zyntra",
    );
    expect(localizedPath({ kind: "project", slug: "zyntra" }, "es")).toBe(
      "/es/proyectos/zyntra",
    );
  });

  it("'proyectos' só aparece no es", () => {
    for (const locale of LOCALES) {
      const path = localizedPath({ kind: "project", slug: "vertexflow" }, locale);
      if (locale === "es") {
        expect(path).toContain("/proyectos/");
        expect(path).not.toContain("/projects/");
      } else {
        expect(path).toContain("/projects/");
        expect(path).not.toContain("/proyectos/");
      }
    }
  });
});

describe("localizedPath — x-default", () => {
  it("x-default corresponde ao caminho do DEFAULT_LOCALE (pt-BR)", () => {
    const keys = [
      { kind: "home" },
      { kind: "zenithcode" },
      { kind: "project", slug: "aegisprotocol" },
    ] as const;
    for (const key of keys) {
      expect(localizedPath(key, DEFAULT_LOCALE)).toBe(localizedPath(key, "pt-BR"));
    }
  });
});

describe("localizedPath — hreflang distintos por locale", () => {
  it("cada locale produz um href diferente para a mesma página", () => {
    const hrefs = LOCALES.map((l: Locale) =>
      localizedPath({ kind: "home" }, l),
    );
    expect(new Set(hrefs).size).toBe(LOCALES.length);
  });
});

describe("withBase", () => {
  it("prefixa a base (padrão '/') e normaliza a barra inicial do path", () => {
    expect(withBase("assets/og-image.png")).toBe("/assets/og-image.png");
    expect(withBase("/assets/og-image.png")).toBe("/assets/og-image.png");
    expect(withBase("favicon.svg")).toBe("/favicon.svg");
  });
});
