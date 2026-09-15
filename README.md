# Portfólio — Gustavo Vianna

Site pessoal em HTML, CSS e JavaScript puro — sem build step, sem framework,
pronto para o GitHub Pages. Disponível em **PT-BR, EN e ES**, com um seletor
de idioma no cabeçalho (PT · EN · ES) que troca tudo sem recarregar a página.

## Estrutura

```
index.html               estrutura da página (raramente precisa editar)
css/style.css             todo o visual
js/i18n.js                idiomas suportados + todos os textos fixos da interface
js/config.js              nome, cargo, bio, e-mail, redes sociais, link do currículo
js/skills-data.js         skills, por categoria
js/languages-data.js      idiomas que você fala (seção "Idiomas")
js/experience-data.js     experiência profissional (timeline)
js/education-data.js      formação acadêmica
js/projects-data.js       projetos (o arquivo que você mais vai editar)
js/notes-data.js          notas técnicas curtas (seção "Por que eu construo assim")
js/main.js                lê os arquivos acima e monta a página — não precisa mexer
assets/                   currículos em PDF, favicon, imagem de compartilhamento
```

## Idioma do visitante

Na primeira visita (sem preferência salva ainda), o site tenta adivinhar o
idioma pelo navegador do visitante (`navigator.language`) — português vira
PT-BR, espanhol vira ES, qualquer outra coisa vira EN, e sem informação cai
no padrão PT-BR. Depois que a pessoa troca de idioma manualmente, essa
escolha fica salva (localStorage) e passa a valer sobre a detecção automática.

## Como funciona o multi-idioma

Cada arquivo de dado (exceto `config.js`, que separa o que muda por idioma do
que não muda) é um objeto com uma chave por idioma:

```js
const EXEMPLO = {
  "pt-BR": [ /* conteúdo em português */ ],
  en: [ /* conteúdo em inglês */ ],
  es: [ /* conteúdo em espanhol */ ],
};
```

`js/main.js` lê o idioma ativo (salvo no navegador do visitante) e renderiza
a partir do bloco correspondente. Trocar de idioma no seletor do topo chama
`setLocale()` e re-renderiza tudo na hora.

## Como adicionar um projeto novo

Abra `js/projects-data.js` e copie um bloco inteiro **nos três idiomas**
(mesma posição no array), traduzindo `status`, `summary` e `description`.
`title`, `tags` e `links` normalmente ficam iguais nos três.

```js
{
  title: "Nome do Projeto",
  statusKey: "production", // "production" | "live" | "development" | "case-study" — NUNCA traduza isso, é o que colore o selo
  status: "EM PRODUÇÃO",   // versão traduzida do statusKey, é o texto que aparece
  featured: true,          // opcional — card ocupa a largura toda, com mais destaque. Use em 1-2 projetos no máximo.
  impact: "Uma frase curta de prova social real.", // opcional — deixe de fora se não tiver nada concreto pra dizer, nunca invente número
  summary: "Uma frase sobre o que é.",
  description: "2 a 4 frases sobre o que você construiu e por quê.",
  tags: ["Tecnologia 1", "Tecnologia 2"],
  links: {
    live: "https://...", // ou null se não tiver
    repo: "https://github.com/...", // ou null se não tiver
  },
},
```

`statusKey` é o que decide a cor do selo (verde para produção, âmbar para
live) — ele é o mesmo nos três idiomas; só o texto exibido (`status`) muda.
`featured` e `impact` são opcionais; use com moderação para não perder o
efeito de destaque.

## Como atualizar o resto

- **Nome, e-mail, redes sociais, link do currículo:** `js/config.js` →
  `CONFIG_SHARED` (não muda com idioma) e `CONFIG` (cargo/bio, por idioma)
- **Skills:** `js/skills-data.js` — edite os três blocos
- **Idiomas que você fala:** `js/languages-data.js`
- **Experiência:** `js/experience-data.js` — adicione no topo dos três arrays
- **Formação:** `js/education-data.js` — mesma lógica
- **Notas técnicas:** `js/notes-data.js` — adicione `{ title, body }` nos três blocos
- **Textos fixos da interface** (menu, títulos de seção, botões): `js/i18n.js`

## Recursos de UX incluídos

- **Menu ativo durante o scroll** — destaca a seção que está visível no momento
- **Botão "voltar ao topo"** — aparece depois que a pessoa rola além da hero
- **Parallax sutil** no fundo da hero e **animação de entrada** nos cards/seções
  ao rolar a página — ambos desligados automaticamente se o visitante tiver
  "reduzir movimento" ativado no sistema operacional
- **Detecção de idioma do navegador** na primeira visita (ver seção acima)

## Compartilhamento (Open Graph) e favicon

- `assets/favicon.svg` — ícone da aba do navegador (monograma "GV")
- `assets/og-image.png` (+ `-en.png` / `-es.png`) — imagem que aparece quando
  o link é compartilhado no LinkedIn, WhatsApp etc. Gerada programaticamente;
  se quiser uma nova versão (com foto, por exemplo), é só pedir.
- **Importante:** depois do deploy, abra `index.html` e troque
  `SEU-USUARIO.github.io/SEU-REPO` pela URL real nas tags `og:image` e
  `og:url` no `<head>`. Sem isso, o preview do link não funciona — esses
  serviços não executam JavaScript, então só enxergam a tag como está escrita
  no HTML (e sempre mostram a versão em PT-BR, mesmo que o site tenha 3 idiomas).

## Currículo em PDF

Já tem um PDF por idioma em `assets/`:
`curriculo-gustavo-vianna-pt.pdf`, `-en.pdf` e `-es.pdf`. O botão "Currículo"
no site baixa a versão certa automaticamente, de acordo com o idioma
selecionado (configurado em `CONFIG_SHARED.resumeUrl` no `config.js`).

Pra atualizar o conteúdo do currículo, os PDFs foram gerados com um script
Python (reportlab) — se quiser que eu gere novas versões depois de alguma
mudança na experiência ou projetos, é só pedir.

## Rodando localmente

Não precisa de instalação. Duas opções:

- Abra `index.html` direto no navegador, ou
- Rode um servidor local simples (evita alguns bloqueios de CORS do navegador):
  ```
  python3 -m http.server 8000
  ```
  e acesse `http://localhost:8000`

## Deploy no GitHub Pages

1. Crie um repositório no GitHub chamado `SEU-USUARIO.github.io`
   (isso já publica automaticamente na raiz do domínio) — ou use qualquer nome
   de repositório e ative o Pages depois.
2. Suba estes arquivos para o repositório:
   ```
   git init
   git add .
   git commit -m "primeira versão do portfólio"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```
3. Se o repositório **não** for `SEU-USUARIO.github.io`: vá em
   **Settings → Pages**, em "Source" selecione a branch `main` e a pasta `/root`,
   salve. O site fica em `https://SEU-USUARIO.github.io/SEU-REPO/`.
4. Se for `SEU-USUARIO.github.io`: o Pages já ativa sozinho na primeira push,
   e o site fica em `https://SEU-USUARIO.github.io/`.

## Domínio próprio (opcional)

Crie um arquivo `CNAME` na raiz com o seu domínio dentro (uma linha, sem
`http://`), e aponte um registro `CNAME` do seu domínio para
`SEU-USUARIO.github.io` no seu provedor de DNS.
