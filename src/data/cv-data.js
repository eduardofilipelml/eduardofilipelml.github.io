/**
 * CV Data Configuration
 * Contains all the content data for the portfolio
 */

// Make cvData available globally
window.cvData = {
  personal: {
    name: "Eduardo Meireles Lopes",
    title: {
      en: "Software Engineer | Product Engineer",
      pt: "Engenheiro de Software | Engenheiro de Produto"
    },
    location: {
      en: "Mafra / Lisbon, Portugal",
      pt: "Mafra / Lisboa, Portugal"
    },
    email: "eduardofilipelml@gmail.com",
    linkedin: "https://www.linkedin.com/in/eduardomeireleslopes/",
    github: "https://github.com/eduardofilipelml"
  },

  about: {
    en: "Software Engineer with 8+ years building and maintaining Java solutions in fintech and space-tech environments. I deliver reliable software across implementation, automated testing, and CI/CD, and I use AI-assisted workflows pragmatically to improve development speed and code quality.",
    pt: "Engenheiro de Software com 8+ anos a desenvolver e manter soluções Java em ambientes fintech e space-tech. Entrego software fiável em todo o ciclo de implementação, testes automatizados e CI/CD, usando fluxos de trabalho assistidos por IA de forma pragmática para melhorar velocidade e qualidade de código."
  },

  hero: {
    tagline: {
      en: "Building production-ready software with strong engineering fundamentals and practical AI-assisted development.",
      pt: "Construo software pronto para produção com bases sólidas de engenharia e desenvolvimento assistido por IA de forma prática."
    },
    stats: [
      { value: "8+", label: { en: "Years Java", pt: "Anos Java" } },
      { value: "15+", label: { en: "Years Tech", pt: "Anos Tech" } },
      { value: "2", label: { en: "Core Domains", pt: "Domínios Core" } }
    ]
  },

  skills: [
    {
      category: { en: "Languages & Frameworks", pt: "Linguagens e Frameworks" },
      items: ["Java", "Swing", "Eclipse RCP", "Spring", "JavaScript", "React", "Vite", "HTML", "CSS", "XML", "C++"]
    },
    {
      category: { en: "Testing & Quality", pt: "Testes e Qualidade" },
      items: ["JUnit", "QF-Test", "Test Automation", "Regression Testing"]
    },
    {
      category: { en: "DevOps & Workflow", pt: "DevOps e Workflow" },
      items: ["Git", "CI/CD", "Podman", "Agile Delivery"]
    },
    {
      category: { en: "AI-Assisted Engineering", pt: "Engenharia Assistida por IA" },
      items: ["GitHub Copilot", "ChatGPT", "Cursor", "Claude Code", "Prompt Design"]
    }
  ],

  languages: [
    {
      language: { en: "Portuguese", pt: "Portugues" },
      level: { en: "Native", pt: "Nativo" }
    },
    {
      language: { en: "English", pt: "Ingles" },
      level: { en: "Professional working proficiency", pt: "Proficiência profissional" }
    }
  ],

  experience: [
    {
      title: "Software Developer",
      company: "Profidata AG",
      period: "2021 - Present",
      description: {
        en: "Contribute to core modules of Xentis, an investment management platform supporting portfolio operations, compliance workflows, and fund administration.",
        pt: "Contribuo para modulos core do Xentis, uma plataforma de gestao de investimentos que suporta operacoes de portfolio, fluxos de compliance e administracao de fundos."
      },
      achievements: {
        en: [
          "Expanded automated UI and regression coverage with QF-Test and JUnit to increase release confidence.",
          "Improved delivery reliability through CI/CD and containerized development workflows.",
          "Delivered production changes for regulated financial workflows with high correctness requirements."
        ],
        pt: [
          "Expansao da cobertura de testes UI e regressao com QF-Test e JUnit para aumentar a confianca em release.",
          "Melhoria da fiabilidade de entrega atraves de CI/CD e workflows de desenvolvimento containerizados.",
          "Entrega de alteracoes em producao para fluxos financeiros regulados com elevada exigencia de correcao."
        ]
      },
      technologies: ["Java", "Spring", "Swing", "Eclipse RCP", "QF-Test", "JUnit", "Podman", "CI/CD", "Git", "Fintech"]
    },
    {
      title: "Software Engineer",
      company: "Deimos Engenharia",
      period: "2017 - 2021",
      description: {
        en: "Contributed to ESA Earth Observation applications including S2G, ESOV, DFDL4S, and geospatial tooling for mission data analysis.",
        pt: "Contribui para aplicacoes ESA de Observacao da Terra, incluindo S2G, ESOV, DFDL4S e ferramentas geoespaciais para analise de dados de missao."
      },
      achievements: {
        en: [
          "Built and maintained Java-based desktop tools for satellite telemetry visualization and data inspection.",
          "Supported engineering quality with automated tests and CI practices in mission-critical contexts.",
          "Delivered geospatial interfaces for technical users working with CCSDS-compliant datasets."
        ],
        pt: [
          "Desenvolvimento e manutencao de ferramentas desktop em Java para visualizacao de telemetria e inspecao de dados.",
          "Suporte a qualidade de engenharia com testes automatizados e praticas de CI em contextos mission-critical.",
          "Entrega de interfaces geoespaciais para utilizadores tecnicos com datasets compativeis com CCSDS."
        ]
      },
      technologies: ["Java", "Swing", "Eclipse RCP", "JUnit", "CI/CD", "Git", "C++", "OpenLayers", "Leaflet", "ESA"]
    },
    {
      title: "Freelance Web Developer",
      company: "Independent Projects",
      period: "2025 - Present",
      description: {
        en: "Delivered custom websites for small businesses, owning implementation from requirements to release.",
        pt: "Entreguei websites personalizados para pequenas empresas, assegurando implementacao desde requisitos ate release."
      },
      achievements: {
        en: [
          "Built responsive interfaces focused on clarity, performance, and maintainability.",
          "Structured reusable frontend components to accelerate iteration and future updates.",
          "Provided end-to-end delivery including stakeholder alignment and go-live support."
        ],
        pt: [
          "Construcao de interfaces responsivas focadas em clareza, performance e manutenibilidade.",
          "Estruturacao de componentes frontend reutilizaveis para acelerar iteracao e evolucoes futuras.",
          "Entrega end-to-end com alinhamento de stakeholders e suporte ao go-live."
        ]
      },
      technologies: ["React", "Vite", "JavaScript", "HTML", "CSS", "Client Delivery"]
    }
  ],

  projects: [
    {
      title: "Xentis Investment Management",
      status: "CURRENT",
      description: {
        en: "Enterprise platform for portfolio management, compliance, and fund administration in regulated financial environments.",
        pt: "Plataforma enterprise para gestao de portfolios, compliance e administracao de fundos em ambientes financeiros regulados."
      },
      technologies: ["Java", "Swing", "Eclipse RCP", "QF-Test"],
      link: "https://www.profidata.com/en/solutions/xentis-suite"
    },
    {
      title: "ESOV NG Visualization",
      status: "ESA",
      description: {
        en: "Visualization tooling for ESA satellite orbits and instrument swaths used in mission analysis workflows.",
        pt: "Ferramenta de visualizacao para orbitas de satelites ESA e faixas de instrumentos usada em fluxos de analise de missao."
      },
      technologies: ["Java", "Swing", "XML"],
      link: "https://earth.esa.int/eogateway/tools/esov-software-tools-esov-ng-"
    },
    {
      title: "DFDL4S Data Format",
      status: "ESA",
      description: {
        en: "Binary data binding library enabling read and write operations for CCSDS space packets.",
        pt: "Biblioteca de data binding binario que permite operacoes de leitura e escrita para pacotes espaciais CCSDS."
      },
      technologies: ["Java", "JNI", "C++"],
      link: "https://eop-cfi.esa.int/index.php/applications/dfdl4s"
    },
    {
      title: "S2G Earth Observation",
      status: "ESA",
      description: {
        en: "Desktop viewer for inspection of CCSDS-compliant satellite telemetry data.",
        pt: "Visualizador desktop para inspecao de dados de telemetria de satelite compativeis com CCSDS."
      },
      technologies: ["Java", "Eclipse RCP", "XML"],
      link: "https://earth.esa.int/eogateway/tools/s2g-data-viewer"
    },
    {
      title: "Carbon Solutions",
      status: "WEB",
      description: {
        en: "Business website focused on clear service positioning and maintainable frontend structure.",
        pt: "Website empresarial com foco em posicionamento claro de servicos e estrutura frontend manutenivel."
      },
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://www.carbonsolutions.pt/"
    },
    {
      title: "Yoga Flow Tribe",
      status: "WEB",
      description: {
        en: "Community website with structured content and responsive experience across devices.",
        pt: "Website de comunidade com conteudo estruturado e experiencia responsiva em multiplos dispositivos."
      },
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://www.yogaflowtribe.com/"
    },
    {
      title: "Catarina Lopes Yoga",
      status: "WEB",
      description: {
        en: "Service website optimized for readability, trust signals, and straightforward contact flow.",
        pt: "Website de servicos otimizado para legibilidade, sinais de confianca e fluxo de contacto direto."
      },
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://catarinalopesyoga.com/"
    }
  ],

  education: [
    {
      title: { en: "Master in Computer Science", pt: "Mestrado em Engenharia Informatica" },
      institution: "FCT-UNL",
      period: "2015 - 2020",
      description: {
        en: "Focus areas: web development, data analysis, machine learning, and visualization.",
        pt: "Areas de foco: desenvolvimento web, analise de dados, machine learning e visualizacao."
      }
    },
    {
      title: { en: "Bachelor in Computer Science", pt: "Licenciatura em Engenharia Informatica" },
      institution: "FCT-UNL",
      period: "2010 - 2015",
      description: {
        en: "Core training in software engineering, algorithms, and object-oriented programming.",
        pt: "Formacao base em engenharia de software, algoritmos e programacao orientada a objetos."
      }
    }
  ]
};
