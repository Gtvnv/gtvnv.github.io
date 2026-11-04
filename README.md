# Portfólio — Gustavo Vianna

Site pessoal construído com **[Astro](https://astro.build/)** (geração estática),
disponível em **PT-BR, EN e ES** com uma rota por idioma. O conteúdo vive em
JSON (Content Collections validadas por schema), o visual é montado sobre tokens
de CSS e o deploy é automatizado via GitHub Actions para o GitHub Pages.

## Stack

- **Astro** (SSG) — cada página é renderizada em HTML no build (`./dist`), então
  o conteúdo textual está no HTML mesmo com o JavaScript desligado.
- **Content Collections + Zod** — o conteúdo dos 3 idiomas mora em JSON e é
  validado por schema a cada build; um erro de conteúdo quebra o build.
- **i18n por rota** — `pt-BR` na raiz (sem prefixo), `en` em `/en/…` e `es` em
  `/es/…`. O segmento de projetos é `projects` (pt-BR/en) e `proyectos` (es).
- **CSS por tokens** — todo o visual consome os tokens de `src/styles/tokens.css`
  (paleta, escala tipográfica, espaçamento, raios, durações). Sem Tailwind.
- **@astrojs/sitemap** — gera `sitemap-index.xml` no build.
- **Vitest** — testes unitários (helpers de i18n/assets) e um validador de
  paridade que carrega os JSON dos 3 locales.

## Estrutura

```
astro.config.mjs            site, base, i18n e integração de sitemap
package.json                dependências e scripts (build/test)
.github/workflows/deploy.yml  pipeline de build + deploy no GitHub Pages
public/                     binários servidos como estão (favicon, assets/**)
src/
  content.config.ts         schema zod das Content Collections
  content/**/*.json         conteúdo por entidade e locale (pt-BR/en/es)
  i18n/                     locales suportados e localizedPath()
  lib/                      helpers (content.ts, assets.ts com withBase())
  styles/                   tokens.css, base.css, home.css, detail.css
  components/               componentes (incl. home/ e detail/)
  layouts/                  BaseLayout e DetailLayout
  pages/                    rotas (raiz pt-BR + en/ + es/)
  scripts/                  interações client-side (reveal, back-to-top…)
```

## Conteúdo (Content Collections)

Cada entidade (projetos, skills, experiência, etc.) tem um JSON por locale
(`pt-BR.json` / `en.json` / `es.json`). O getter `getContent(entity, locale)`
em `src/lib/content.ts` carrega o bloco correto. O schema zod em
`src/content.config.ts` valida tudo no build, então um campo faltando ou um
`statusKey` inválido falha a compilação antes de ir para produção.

Para adicionar ou editar conteúdo, altere o JSON da entidade nos três locales
(mantendo a mesma posição/estrutura) e rode `npm run build` para validar.

## Assets

Os binários ficam em `public/assets/**` e são referenciados via `withBase()`
(`src/lib/assets.ts`), que monta o caminho a partir de `import.meta.env.BASE_URL`.
Isso inclui prints de projetos, emblemas do ZenithCode, PDFs de currículo,
`og-image.png`, as fotos de perfil e o `favicon.svg`.

## Rodando localmente

Requer Node 20 (o CI usa a mesma versão).

```
npm ci            # instala as dependências a partir do package-lock.json
npm run dev       # servidor de desenvolvimento
npm run build     # gera ./dist (mesma saída publicada no deploy)
npm run preview   # serve o ./dist gerado
npx vitest run    # roda os testes (unit + paridade)
```

## Deploy no GitHub Pages (GitHub Actions)

O deploy é feito pelo workflow `.github/workflows/deploy.yml`, que usa as
actions oficiais do Pages:

1. `build` — `actions/checkout`, `actions/setup-node` (Node 20, cache npm),
   `npm ci`, `npm run build`, `actions/configure-pages` e
   `actions/upload-pages-artifact` (publica o `./dist`).
2. `deploy` — `actions/deploy-pages` publica o artefato no ambiente
   `github-pages`.

O workflow dispara em `push` na `main` (e manualmente via `workflow_dispatch`).

> **Importante:** no repositório, vá em **Settings → Pages** e selecione
> **GitHub Actions** como "Source" (não "Deploy from a branch"). Sem isso o
> workflow não consegue publicar.

O site é publicado em `https://gtvnv.github.io/` (user page, `base: "/"`), sem
domínio customizado — não existe arquivo `CNAME`.

## Fluxo de contribuição

Toda mudança nasce em uma branch de trabalho e chega à `main` **somente via Pull
Request revisado por um humano** — nunca com commit/push direto na `main`. O
merge do PR na base é o que dispara o workflow de deploy e publica o site.
