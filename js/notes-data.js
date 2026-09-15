/**
 * NOTAS TÉCNICAS — textos curtos (1 parágrafo) explicando decisões de
 * arquitetura, não só listando tecnologia. Pra adicionar uma nota nova,
 * acrescente um objeto { title, body } nos TRÊS blocos de idioma.
 */
const NOTES = {
  "pt-BR": [
    {
      title: "Por que Clean Architecture",
      body: "Toda vez que uma regra de negócio depende diretamente de um framework, de um banco específico ou de uma API externa, ela fica presa a essa decisão pra sempre. Clean Architecture — e Hexagonal, no caso do Acesso Alunos e do AegisProtocol — resolve isso invertendo a dependência: o núcleo do sistema define interfaces, e é a infraestrutura que se adapta a ele, nunca o contrário. Na prática, dá pra trocar o banco, o gateway de pagamento ou até o framework web sem reescrever uma linha de regra de negócio. Custa mais tempo no início. Paga a diferença na primeira vez que algo externo muda — e sempre muda.",
    },
    {
      title: "Por que Zero Trust",
      body: "A maioria dos sistemas ainda confia por padrão em tudo que está 'dentro da rede'. Zero Trust parte do oposto: nenhuma requisição é confiável até provar quem é, mesmo vindo de dentro. No AegisProtocol isso vira token assinado com RSA-2048, expiração curta, revogação distribuída via Redis e política de acesso granular por recurso — não por usuário. É mais fricção pra implementar. É a diferença entre um vazamento de credencial custar uma sessão e custar o sistema inteiro.",
    },
  ],
  en: [
    {
      title: "Why Clean Architecture",
      body: "Every time a business rule depends directly on a framework, a specific database, or an external API, it stays locked into that decision forever. Clean Architecture — and Hexagonal, in the case of Acesso Alunos and AegisProtocol — fixes this by inverting the dependency: the core defines interfaces, and infrastructure adapts to it, never the other way around. In practice, that means swapping the database, the payment gateway, or even the web framework without rewriting a single line of business logic. It costs more time up front. It pays off the first time something external changes — and it always does.",
    },
    {
      title: "Why Zero Trust",
      body: "Most systems still trust everything 'inside the network' by default. Zero Trust starts from the opposite assumption: no request is trusted until it proves who it is, even from the inside. In AegisProtocol that becomes RSA-2048-signed tokens, short expiry, distributed revocation via Redis, and access policy scoped per resource — not per user. It's more friction to implement. It's the difference between a leaked credential costing one session versus costing the entire system.",
    },
  ],
  es: [
    {
      title: "Por qué Clean Architecture",
      body: "Cada vez que una regla de negocio depende directamente de un framework, de una base de datos específica o de una API externa, queda atada a esa decisión para siempre. Clean Architecture — y Hexagonal, en el caso de Acesso Alunos y AegisProtocol — resuelve esto invirtiendo la dependencia: el núcleo define interfaces, y es la infraestructura la que se adapta a él, nunca al revés. En la práctica, se puede cambiar la base de datos, la pasarela de pago o incluso el framework web sin reescribir una sola línea de regla de negocio. Cuesta más tiempo al principio. Se paga la diferencia la primera vez que algo externo cambia — y siempre cambia.",
    },
    {
      title: "Por qué Zero Trust",
      body: "La mayoría de los sistemas todavía confía por defecto en todo lo que está 'dentro de la red'. Zero Trust parte de lo contrario: ninguna solicitud es confiable hasta que prueba quién es, incluso viniendo de adentro. En AegisProtocol eso se traduce en tokens firmados con RSA-2048, expiración corta, revocación distribuida vía Redis y políticas de acceso granulares por recurso — no por usuario. Cuesta más fricción implementarlo. Es la diferencia entre que una credencial filtrada cueste una sesión o cueste el sistema entero.",
    },
  ],
};
