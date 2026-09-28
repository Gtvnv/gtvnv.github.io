/**
 * PROJECT_DETAILS — conteúdo das páginas dedicadas de projeto (projects/*.html).
 * Uma chave por slug de projeto, dentro de cada idioma. Pra adicionar uma nova
 * página: crie o objeto aqui (nos TRÊS idiomas), copie projects/_template.html
 * (ou outro arquivo existente) pro slug novo, e aponte o campo `details` do
 * projeto correspondente em js/projects-data.js pra esse arquivo. O renderer
 * é js/project-details.js — reaproveita as classes visuais de css/zenithcode.css.
 */
const PROJECT_DETAILS = {
  "pt-BR": {
    aegisprotocol: {
      meta: {
        title: "AegisProtocol — Gustavo Vianna",
        description: "Identity Provider Zero-Trust do ecossistema ZenithCode: autenticação, tokens JWT e políticas de acesso granulares.",
      },
      backLabel: "Portfólio",
      logo: "../assets/projetos/aegisprotocol.png",
      hero: {
        eyebrow: "Security & IAM Middleware · iniciativa ZenithCode",
        title: "AegisProtocol",
        subtitle: "Identity Provider Zero-Trust: nenhuma requisição é confiável por padrão",
        summary:
          "Middleware de segurança e Identity Provider (IdP) que centraliza autenticação, emissão de tokens criptografados e políticas de acesso granulares pra todo o ecossistema ZenithCode. É a manifestação real do satélite Themis do Z2A.",
        statusNote:
          "Nota: este repositório contém uma versão antiga do AegisProtocol, mantida pública como referência de arquitetura (Zero Trust, JWT RS256, revogação via Redis). O desenvolvimento ativo segue em repositório privado, liderado pela divisão N.Ú.C.L.E.O.",
      },
      about: {
        title: "Sobre o projeto",
        body: "O Aegis Core é um middleware de segurança projetado com arquitetura Zero Trust: nenhuma requisição é confiável por padrão, nem depois do login. Ele centraliza autenticação, emite tokens JWT assinados com RSA-2048 (RS256, assinatura assimétrica) e aplica políticas de acesso granulares via ABAC/RBAC — servindo como camada de identidade pros outros microsserviços satélites do ecossistema.",
      },
      stack: {
        title: "Stack técnica",
        items: ["Java 21", "Spring Boot 3.4", "Spring Security 6", "JWT (RS256)", "Redis", "PostgreSQL", "HashiCorp Vault (opcional)", "Docker"],
      },
      features: {
        title: "Recursos-chave",
        intro: "Cinco mecanismos que sustentam o modelo Zero Trust na prática.",
        items: [
          { title: "Arquitetura Zero Trust", mechanic: "Nenhuma requisição é confiável por padrão." },
          { title: "Soft Lock", mechanic: "Usuários conseguem logar, mas recursos sensíveis exigem verificação adicional baseada em claims." },
          { title: "Mitigação de ameaças", mechanic: "Rate limiting e detecção de anomalias no registro de novos usuários." },
          { title: "Revogação de token", mechanic: "Blacklist distribuída via Redis pra logout imediato em todos os dispositivos." },
          { title: "Pronto pra rotação de chaves", mechanic: "Arquitetura preparada pra trocar as chaves de assinatura sem downtime." },
        ],
      },
      endpoints: {
        title: "Endpoints principais",
        intro: "A superfície REST do Identity Provider.",
        items: [
          { name: "POST /auth/login", what: "Autenticação e emissão de JWT", role: "" },
          { name: "POST /auth/register", what: "Registro com proteção anti-spam", role: "" },
          { name: "POST /auth/refresh", what: "Renovação de sessão segura", role: "" },
          { name: "GET /auth/public-key", what: "Expõe a JWK pra microsserviços satélites validarem token sem chamar o Aegis a cada request", role: "" },
          { name: "GET /auth/consent/current-version", what: "Versão vigente dos termos exigidos no registro", role: "" },
        ],
      },
      security: {
        title: "Segurança e resiliência",
        body: "Opera sob Zero Trust: um GlobalExceptionHandler especializado evita o vazamento de metadados de infraestrutura nas respostas de erro, com mecanismos nativos contra Reflected XSS, Log Forging e validação rigorosa de claims na camada de autenticação.",
      },
      links: { repo: "https://github.com/Gtvnv/AegisProtocol-Core", live: null },
      footer: { backCta: "← Voltar ao portfólio" },
    },
  },
  en: {
    aegisprotocol: {
      meta: {
        title: "AegisProtocol — Gustavo Vianna",
        description: "Zero-Trust Identity Provider for the ZenithCode ecosystem: authentication, JWT tokens, and granular access policies.",
      },
      backLabel: "Portfolio",
      logo: "../assets/projetos/aegisprotocol.png",
      hero: {
        eyebrow: "Security & IAM Middleware · a ZenithCode initiative",
        title: "AegisProtocol",
        subtitle: "A Zero-Trust Identity Provider: no request is trusted by default",
        summary:
          "Security middleware and Identity Provider (IdP) that centralizes authentication, encrypted token issuance, and granular access policies for the whole ZenithCode ecosystem. It's the real-world manifestation of Z2A's Themis satellite.",
        statusNote:
          "Note: this repository holds an older version of AegisProtocol, kept public as an architecture reference (Zero Trust, JWT RS256, Redis-based revocation). Active development continues in a private repository, led by the N.Ú.C.L.E.O. division.",
      },
      about: {
        title: "About the project",
        body: "Aegis Core is a security middleware built on Zero-Trust architecture: no request is trusted by default, not even after login. It centralizes authentication, issues JWTs signed with RSA-2048 (RS256, asymmetric signing), and enforces granular access policies via ABAC/RBAC — serving as the identity layer for the ecosystem's other satellite microservices.",
      },
      stack: {
        title: "Tech stack",
        items: ["Java 21", "Spring Boot 3.4", "Spring Security 6", "JWT (RS256)", "Redis", "PostgreSQL", "HashiCorp Vault (optional)", "Docker"],
      },
      features: {
        title: "Key features",
        intro: "Five mechanisms that back the Zero-Trust model in practice.",
        items: [
          { title: "Zero-Trust architecture", mechanic: "No request is trusted by default." },
          { title: "Soft lock", mechanic: "Users can log in, but sensitive resources require additional claim-based verification." },
          { title: "Threat mitigation", mechanic: "Rate limiting and anomaly detection on registration." },
          { title: "Token revocation", mechanic: "Distributed blacklist via Redis for immediate logout across all devices." },
          { title: "Key-rotation ready", mechanic: "Architecture prepared to rotate signing keys without downtime." },
        ],
      },
      endpoints: {
        title: "Main endpoints",
        intro: "The Identity Provider's REST surface.",
        items: [
          { name: "POST /auth/login", what: "Authentication and JWT issuance", role: "" },
          { name: "POST /auth/register", what: "Registration with anti-spam protection", role: "" },
          { name: "POST /auth/refresh", what: "Secure session renewal", role: "" },
          { name: "GET /auth/public-key", what: "Exposes the JWK so satellite microservices can validate tokens without calling Aegis on every request", role: "" },
          { name: "GET /auth/consent/current-version", what: "Current version of the terms required at registration", role: "" },
        ],
      },
      security: {
        title: "Security & resilience",
        body: "Runs under Zero Trust: a specialized GlobalExceptionHandler prevents infrastructure metadata from leaking in error responses, with native mitigations against Reflected XSS, log forging, and strict claim validation at the authentication layer.",
      },
      links: { repo: "https://github.com/Gtvnv/AegisProtocol-Core", live: null },
      footer: { backCta: "← Back to the portfolio" },
    },
  },
  es: {
    aegisprotocol: {
      meta: {
        title: "AegisProtocol — Gustavo Vianna",
        description: "Identity Provider Zero-Trust del ecosistema ZenithCode: autenticación, tokens JWT y políticas de acceso granulares.",
      },
      backLabel: "Portafolio",
      logo: "../assets/projetos/aegisprotocol.png",
      hero: {
        eyebrow: "Security & IAM Middleware · una iniciativa ZenithCode",
        title: "AegisProtocol",
        subtitle: "Un Identity Provider Zero-Trust: ninguna solicitud es confiable por defecto",
        summary:
          "Middleware de seguridad e Identity Provider (IdP) que centraliza la autenticación, la emisión de tokens cifrados y las políticas de acceso granulares para todo el ecosistema ZenithCode. Es la manifestación real del satélite Themis del Z2A.",
        statusNote:
          "Nota: este repositorio contiene una versión antigua de AegisProtocol, mantenida pública como referencia de arquitectura (Zero Trust, JWT RS256, revocación vía Redis). El desarrollo activo continúa en un repositorio privado, liderado por la división N.Ú.C.L.E.O.",
      },
      about: {
        title: "Sobre el proyecto",
        body: "Aegis Core es un middleware de seguridad construido con arquitectura Zero-Trust: ninguna solicitud es confiable por defecto, ni siquiera después del login. Centraliza la autenticación, emite JWT firmados con RSA-2048 (RS256, firma asimétrica) y aplica políticas de acceso granulares vía ABAC/RBAC — sirviendo como capa de identidad para los demás microservicios satélite del ecosistema.",
      },
      stack: {
        title: "Stack técnica",
        items: ["Java 21", "Spring Boot 3.4", "Spring Security 6", "JWT (RS256)", "Redis", "PostgreSQL", "HashiCorp Vault (opcional)", "Docker"],
      },
      features: {
        title: "Funcionalidades clave",
        intro: "Cinco mecanismos que sostienen el modelo Zero-Trust en la práctica.",
        items: [
          { title: "Arquitectura Zero-Trust", mechanic: "Ninguna solicitud es confiable por defecto." },
          { title: "Soft lock", mechanic: "Los usuarios pueden iniciar sesión, pero los recursos sensibles exigen verificación adicional basada en claims." },
          { title: "Mitigación de amenazas", mechanic: "Rate limiting y detección de anomalías en el registro." },
          { title: "Revocación de tokens", mechanic: "Lista negra distribuida vía Redis para logout inmediato en todos los dispositivos." },
          { title: "Listo para rotación de claves", mechanic: "Arquitectura preparada para rotar las claves de firma sin downtime." },
        ],
      },
      endpoints: {
        title: "Endpoints principales",
        intro: "La superficie REST del Identity Provider.",
        items: [
          { name: "POST /auth/login", what: "Autenticación y emisión de JWT", role: "" },
          { name: "POST /auth/register", what: "Registro con protección anti-spam", role: "" },
          { name: "POST /auth/refresh", what: "Renovación segura de sesión", role: "" },
          { name: "GET /auth/public-key", what: "Expone la JWK para que los microservicios satélite validen tokens sin llamar a Aegis en cada request", role: "" },
          { name: "GET /auth/consent/current-version", what: "Versión vigente de los términos exigidos en el registro", role: "" },
        ],
      },
      security: {
        title: "Seguridad y resiliencia",
        body: "Opera bajo Zero Trust: un GlobalExceptionHandler especializado evita la fuga de metadatos de infraestructura en las respuestas de error, con mitigaciones nativas contra Reflected XSS, Log Forging y validación estricta de claims en la capa de autenticación.",
      },
      links: { repo: "https://github.com/Gtvnv/AegisProtocol-Core", live: null },
      footer: { backCta: "← Volver al portafolio" },
    },
  },
};
