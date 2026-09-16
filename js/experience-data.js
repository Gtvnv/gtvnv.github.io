/**
 * EXPERIÊNCIA — mais recente primeiro. Pra adicionar um novo cargo,
 * acrescente um objeto no topo dos TRÊS arrays (mesma posição).
 * company e period podem mudar de formato por idioma; role e description
 * são o texto traduzido.
 */
const EXPERIENCE = {
  "pt-BR": [
    {
      role: "Analista Desenvolvedor de Software",
      company: "Agência do Japa",
      period: "dez. 2025 - atual",
      description:
        "Atuação fullstack em um ERP industrial em produção: diagnóstico e correção de módulos, melhoria do RBAC com foco em security by design, e desenvolvimento ponta a ponta - do frontend até APIs e regras de negócio complexas.",
    },
    {
      role: "Estagiário de Desenvolvimento",
      company: "Rumo Soluções",
      period: "jul. 2026 - atual",
      description:
        "Desenvolvimento e manutenção de aplicações em C# e .NET, estruturação de APIs e regras de negócio. Construção de interfaces web e mobile com Angular e Ionic, com foco em usabilidade e correção de bugs.",
    },
    {
      role: "Técnico de Suporte em TI",
      company: "R2 Internet",
      period: "fev. 2025 - jul. 2026",
      description:
        "Diagnóstico e resolução de falhas lógicas em sistemas e redes, manutenção remota para clientes e análise de causa raiz de incidentes em produção, isolando bugs de arquitetura de falhas de ambiente/rede. Construiu um protótipo em Python para automatizar tarefas do setor.",
    },
    {
      role: "Almoxarife",
      company: "Grupo CMD",
      period: "abr. 2024 - fev. 2025",
      description:
        "Controle e organização de estoque, com liderança na digitalização do processo - migração de planilhas para um sistema eletrônico, melhorando a acuracidade dos dados.",
    },
    {
      role: "Técnico de Manutenção",
      company: "Turrek Informática",
      period: "jun. 2023 - mar. 2024",
      description: "Manutenção e reparo de eletrônicos, controle de estoque e suporte ao cliente na loja.",
    },
  ],
  en: [
    {
      role: "Software Development Analyst",
      company: "Agência do Japa",
      period: "Dec 2025 - present",
      description:
        "Fullstack work on an industrial ERP in production: diagnosing and fixing modules, improving RBAC with a security-by-design focus, and end-to-end development - from the frontend to complex business rules and APIs.",
    },
    {
      role: "Development Intern",
      company: "Rumo Soluções",
      period: "Jul 2026 - present",
      description:
        "Development and maintenance of C# and .NET applications, structuring APIs and business rules. Built web and mobile interfaces with Angular and Ionic, with a focus on usability and bug fixing.",
    },
    {
      role: "IT Support Technician",
      company: "R2 Internet",
      period: "Feb 2025 - Jul 2026",
      description:
        "Diagnosed and resolved logic failures in systems and networks, remote maintenance for clients, and root-cause analysis of production incidents, isolating architecture bugs from environment/network failures. Built a Python prototype to automate departmental tasks.",
    },
    {
      role: "Warehouse Clerk",
      company: "Grupo CMD",
      period: "Apr 2024 - Feb 2025",
      description:
        "Inventory control and organization, leading the digitization of the process - migrating spreadsheets to an electronic system and improving data accuracy.",
    },
    {
      role: "Maintenance Technician",
      company: "Turrek Informática",
      period: "Jun 2023 - Mar 2024",
      description: "Electronics maintenance and repair, inventory control, and in-store customer support.",
    },
  ],
  es: [
    {
      role: "Analista Desarrollador de Software",
      company: "Agência do Japa",
      period: "dic. 2025 - actualidad",
      description:
        "Trabajo fullstack en un ERP industrial en producción: diagnóstico y corrección de módulos, mejora del RBAC con foco en security by design, y desarrollo de punta a punta - del frontend a reglas de negocio complejas y APIs.",
    },
    {
      role: "Pasante de Desarrollo",
      company: "Rumo Soluções",
      period: "jul. 2026 - actualidad",
      description:
        "Desarrollo y mantenimiento de aplicaciones en C# y .NET, estructurando APIs y reglas de negocio. Construcción de interfaces web y móviles con Angular e Ionic, con foco en usabilidad y corrección de errores.",
    },
    {
      role: "Técnico de Soporte en TI",
      company: "R2 Internet",
      period: "feb. 2025 - jul. 2026",
      description:
        "Diagnóstico y resolución de fallas lógicas en sistemas y redes, mantenimiento remoto para clientes y análisis de causa raíz de incidentes en producción, aislando errores de arquitectura de fallas de entorno/red. Construyó un prototipo en Python para automatizar tareas del sector.",
    },
    {
      role: "Auxiliar de Almacén",
      company: "Grupo CMD",
      period: "abr. 2024 - feb. 2025",
      description:
        "Control y organización de inventario, liderando la digitalización del proceso - migración de hojas de cálculo a un sistema electrónico, mejorando la precisión de los datos.",
    },
    {
      role: "Técnico de Mantenimiento",
      company: "Turrek Informática",
      period: "jun. 2023 - mar. 2024",
      description: "Mantenimiento y reparación de electrónicos, control de inventario y atención al cliente en tienda.",
    },
  ],
};
