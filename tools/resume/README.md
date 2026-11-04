# Currículo (fonte dos PDFs)

Fonte editável dos currículos servidos pelo site em `public/assets/curriculo-gustavo-vianna-{pt,en,es}.pdf`.

## Como atualizar

1. Edite o conteúdo em [`data.mjs`](./data.mjs) — um objeto por idioma (`pt`, `en`, `es`),
   com resumo, competências, experiência, projetos, formação e idiomas. É a única
   fonte de verdade do texto: ajuste aqui, não no PDF.
2. Ajuste o visual, se precisar, em [`style.css`](./style.css). As medidas são em `pt`
   e os espaçamentos verticais estão em variáveis no `:root` para afinar sem caçar valor.
3. Gere os três PDFs:

   ```bash
   node tools/resume/build.mjs
   ```

   Sem argumento, grava em `public/assets/`. Para gerar em outra pasta (ex.: revisar antes
   de publicar): `node tools/resume/build.mjs ./rascunho`.

## Requisitos

- Node (o mesmo do projeto).
- Google Chrome **ou** Microsoft Edge instalado — o script usa o navegador em modo headless
  para imprimir o HTML em PDF. Sem dependência npm; nada é instalado.

## Notas

- O layout é calibrado para caber em **uma página A4**. Ao adicionar muito texto, confira
  se não transbordou para uma segunda página (o build não falha nesse caso — é verificação visual).
- `build.mjs` também exporta `html()` e `findBrowser()` para reaproveitamento; rodar o
  arquivo diretamente é o fluxo normal.
- A pasta `.build/` (HTML intermediário) é gerada ao rodar e pode ser ignorada/apagada.
