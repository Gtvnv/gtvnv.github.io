import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    // Testes de unit (localizedPath/withBase) e de paridade de conteúdo chegam
    // nas FEATs seguintes; nesta fundação o run deve passar mesmo sem testes.
    passWithNoTests: true,
    include: ["test/**/*.{test,spec}.ts", "src/**/*.{test,spec}.ts"],
  },
});
