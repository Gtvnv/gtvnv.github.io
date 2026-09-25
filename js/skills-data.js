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
        "Java 17+/21+ / Spring Boot",
        "Spring Security",
        "Node.js / Express",
        "C# / .NET",
        "Golang / Gin",
        "Python / FastAPI",
        "Clean Architecture",
        "Backend for Frontend (BFF)",
        "Monólitos Modulares & Microsserviços",
        "Software-Defined Everything (SDx)",
        "Arquitetura Hexagonal",
        "DDD",
        "SOLID",
      ],
    },
    {
      category: "Segurança & Identidade",
      items: ["Zero Trust", "IAM", "RBAC / ABAC", "OAuth2 / JWT", "OIDC (OpenID Connect)", "Keycloak", "OWASP", "LGPD / Proteção de dados"],
    },
    {
      category: "Frontend",
      items: ["Angular", "Next.js", "React", "JavaScript / TypeScript", "Tauri", "Ionic", "Capacitor", "TailwindCSS", "Material UI", "Bootstrap"],
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
        "Azure DevOps",
        "Docker",
        "Linux",
        "CI/CD (GitHub Actions)",
        "Socket.IO",
        "Terraform / OpenTofu (IaC)",
        "Kubernetes / OpenShift",
        "Pulumi"
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
        "Ollama / LM Studio",
        "LangChain / LlamaIndex",
        "Auto-GPT / BabyAGI",
        "RAG (Retrieval-Augmented Generation)",
      ],
    },
    {
      category: "Governança & Negócio",
      items: ["FinOps", "Gestão de riscos", "Compliance", "Scrum / Kanban"],
    },
    {
      category: "Simulações & Motores",
      items: [
        "Unity 3D",
        "Unreal Engine",
        "Godot",
      ],
    },
  ],
  en: [
    {
      category: "Backend & Architecture",
      items: [
        "Java 17+/21+ / Spring Boot",
        "Spring Security",
        "Node.js / Express",
        "C# / .NET",
        "Golang / Gin",
        "Python / FastAPI",
        "Clean Architecture",
        "Backend for Frontend (BFF)",
        "Modular Monoliths & Microservices",
        "Software-Defined Everything (SDx)",
        "Hexagonal Architecture",
        "DDD",
        "SOLID",
      ],
    },
    {
      category: "Security & Identity",
      items: ["Zero Trust", "IAM", "RBAC / ABAC", "OAuth2 / JWT", "OIDC (OpenID Connect)", "Keycloak", "OWASP", "GDPR-style / Data protection"],
    },
    {
      category: "Frontend",
      items: ["Angular", "Next.js", "React", "JavaScript / TypeScript", "Tauri", "Ionic", "Capacitor", "TailwindCSS", "Material UI", "Bootstrap"],
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
        "Azure DevOps",
        "Docker",
        "Linux",
        "CI/CD (GitHub Actions)",
        "Socket.IO",
        "Terraform / OpenTofu (IaC)",
        "Kubernetes / OpenShift",
        "Pulumi"
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
        "Ollama / LM Studio",
        "LangChain / LlamaIndex",
        "Auto-GPT / BabyAGI",
        "RAG (Retrieval-Augmented Generation)",
      ],
    },
    {
      category: "Governance & Business",
      items: ["FinOps", "Risk management", "Compliance", "Scrum / Kanban"],
    },
    {
      category: "Simulations & Engines",
      items: [
        "Unity 3D",
        "Unreal Engine",
        "Godot",
      ],
    },
  ],
  es: [
    {
      category: "Backend y Arquitectura",
      items: [
        "Java 17+/21+ / Spring Boot",
        "Spring Security",
        "Node.js / Express",
        "C# / .NET",
        "Golang / Gin",
        "Python / FastAPI",
        "Clean Architecture",
        "Backend for Frontend (BFF)",
        "Monolitos Modulares y Microservicios",
        "Software-Defined Everything (SDx)",
        "Arquitectura Hexagonal",
        "DDD",
        "SOLID",
      ],
    },
    {
      category: "Seguridad e Identidad",
      items: ["Zero Trust", "IAM", "RBAC / ABAC", "OAuth2 / JWT", "OIDC (OpenID Connect)", "Keycloak", "OWASP", "Protección de datos"],
    },
    {
      category: "Frontend",
      items: ["Angular", "Next.js", "React", "JavaScript / TypeScript", "Tauri", "Ionic", "Capacitor", "TailwindCSS", "Material UI", "Bootstrap"],
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
        "Azure DevOps",
        "Docker",
        "Linux",
        "CI/CD (GitHub Actions)",
        "Socket.IO",
        "Terraform / OpenTofu (IaC)",
        "Kubernetes / OpenShift",
        "Pulumi"
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
        "Ollama / LM Studio",
        "LangChain / LlamaIndex",
        "Auto-GPT / BabyAGI",
        "RAG (Retrieval-Augmented Generation)",
      ],
    },
    {
      category: "Gobernanza y Negocio",
      items: ["FinOps", "Gestión de riesgos", "Compliance", "Scrum / Kanban"],
    },
    {
      category: "Simulaciones y Motores",
      items: [
        "Unity 3D",
        "Unreal Engine",
        "Godot",
      ],
    },
  ], 
};
