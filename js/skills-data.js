/**
 * SKILLS — agrupadas por categoria, uma lista por idioma.
 * Pra adicionar uma skill: ache a categoria e acrescente o item nos
 * TRÊS blocos de idioma (mesma posição, texto traduzido quando fizer sentido —
 * nomes de tecnologia geralmente ficam iguais nos três).
 */
const SKILLS = {
  "pt-BR": [
    {
      category: "Backend & Arquitetura",
      items: [
        "Java 17+ / Spring Boot",
        "Spring Security",
        "Node.js / Express",
        "C# / .NET",
        "Clean Architecture",
        "Arquitetura Hexagonal",
        "DDD",
        "SOLID",
      ],
    },
    {
      category: "Segurança & Identidade",
      items: ["Zero Trust", "IAM", "RBAC / ABAC", "OAuth2 / JWT", "OWASP", "LGPD / Proteção de dados"],
    },
    {
      category: "Frontend",
      items: ["Angular", "Next.js", "React", "JavaScript / TypeScript", "Ionic"],
    },
    {
      category: "Dados & Infraestrutura",
      items: [
        "PostgreSQL",
        "MySQL",
        "SQL Server",
        "Redis",
        "AWS",
        "Azure",
        "Docker",
        "Linux",
        "CI/CD (GitHub Actions)",
        "Socket.IO",
      ],
    },
    {
      category: "IA & Automação",
      items: [
        "IA Generativa / LLMs",
        "Prompt Engineering",
        "Spec-Driven Development (SDD)",
        "GitHub Copilot / Claude Code",
        "Power Platform (PowerApps / Power Automate)",
      ],
    },
    {
      category: "Governança & Negócio",
      items: ["FinOps", "Gestão de riscos", "Compliance", "Scrum / Kanban"],
    },
  ],
  en: [
    {
      category: "Backend & Architecture",
      items: [
        "Java 17+ / Spring Boot",
        "Spring Security",
        "Node.js / Express",
        "C# / .NET",
        "Clean Architecture",
        "Hexagonal Architecture",
        "DDD",
        "SOLID",
      ],
    },
    {
      category: "Security & Identity",
      items: ["Zero Trust", "IAM", "RBAC / ABAC", "OAuth2 / JWT", "OWASP", "GDPR-style / Data protection"],
    },
    {
      category: "Frontend",
      items: ["Angular", "Next.js", "React", "JavaScript / TypeScript", "Ionic"],
    },
    {
      category: "Data & Infrastructure",
      items: [
        "PostgreSQL",
        "MySQL",
        "SQL Server",
        "Redis",
        "AWS",
        "Azure",
        "Docker",
        "Linux",
        "CI/CD (GitHub Actions)",
        "Socket.IO",
      ],
    },
    {
      category: "AI & Automation",
      items: [
        "Generative AI / LLMs",
        "Prompt Engineering",
        "Spec-Driven Development (SDD)",
        "GitHub Copilot / Claude Code",
        "Power Platform (PowerApps / Power Automate)",
      ],
    },
    {
      category: "Governance & Business",
      items: ["FinOps", "Risk management", "Compliance", "Scrum / Kanban"],
    },
  ],
  es: [
    {
      category: "Backend y Arquitectura",
      items: [
        "Java 17+ / Spring Boot",
        "Spring Security",
        "Node.js / Express",
        "C# / .NET",
        "Clean Architecture",
        "Arquitectura Hexagonal",
        "DDD",
        "SOLID",
      ],
    },
    {
      category: "Seguridad e Identidad",
      items: ["Zero Trust", "IAM", "RBAC / ABAC", "OAuth2 / JWT", "OWASP", "Protección de datos"],
    },
    {
      category: "Frontend",
      items: ["Angular", "Next.js", "React", "JavaScript / TypeScript", "Ionic"],
    },
    {
      category: "Datos e Infraestructura",
      items: [
        "PostgreSQL",
        "MySQL",
        "SQL Server",
        "Redis",
        "AWS",
        "Azure",
        "Docker",
        "Linux",
        "CI/CD (GitHub Actions)",
        "Socket.IO",
      ],
    },
    {
      category: "IA y Automatización",
      items: [
        "IA Generativa / LLMs",
        "Prompt Engineering",
        "Spec-Driven Development (SDD)",
        "GitHub Copilot / Claude Code",
        "Power Platform (PowerApps / Power Automate)",
      ],
    },
    {
      category: "Gobernanza y Negocio",
      items: ["FinOps", "Gestión de riesgos", "Compliance", "Scrum / Kanban"],
    },
  ],
};
