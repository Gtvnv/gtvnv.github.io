// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://gtvnv.github.io",
  base: "/",
  integrations: [sitemap()],
  i18n: {
    locales: ["pt-BR", "en", "es"],
    defaultLocale: "pt-BR",
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
