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
    en: "Software Engineer with 8+ years of experience building enterprise software across fintech, space technology, and web applications. Experienced in designing reliable, maintainable systems spanning desktop, backend integrations, and modern web interfaces, with a pragmatic approach to AI-assisted software development.",
    pt: "Engenheiro de Software com 8+ anos de experiencia a construir software empresarial em fintech, tecnologia espacial e aplicacoes web. Experiente no desenho de sistemas fiaveis e manuteniveis em desktop, integracoes backend e interfaces web modernas, com uma abordagem pragmatica ao desenvolvimento assistido por IA."
  },

  hero: {
    tagline: {
      en: "Building reliable software across desktop, backend integration, and modern web delivery.",
      pt: "Construo software fiavel em desktop, integracao backend e entrega web moderna."
    },
    stats: [
      { value: "8+", label: { en: "Years Java", pt: "Anos Java" } },
      { value: "15+", label: { en: "Years Tech", pt: "Anos Tech" } },
      { value: "2", label: { en: "Core Domains", pt: "Domínios Core" } }
    ]
  },

  skills: [
    {
      category: { en: "Core Engineering", pt: "Engenharia Core" },
      items: ["Java", "Swing", "Eclipse RCP", "Spring", "C++", "XML"]
    },
    {
      category: { en: "Web Engineering", pt: "Engenharia Web" },
      items: ["JavaScript", "React", "Vite", "HTML", "CSS"]
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
    },
    {
      language: { en: "Spanish", pt: "Espanhol" },
      level: { en: "Beginner", pt: "Iniciante" }
    }
  ],

  experience: [
    {
      title: "Software Developer",
      company: "Profidata AG",
      period: "2021 - Present",
      description: {
        en: "Delivered and evolved core Xentis modules supporting portfolio operations, compliance workflows, and fund administration in regulated financial contexts.",
        pt: "Entreguei e evolui modulos core do Xentis que suportam operacoes de portfolio, fluxos de compliance e administracao de fundos em contextos financeiros regulados."
      },
      achievements: {
        en: [
          "Expanded automated regression and UI coverage, increasing release confidence while reducing manual validation effort.",
          "Improved delivery consistency through CI/CD and containerized development workflows.",
          "Delivered production changes for regulated workflows with strict correctness requirements."
        ],
        pt: [
          "Expansao da cobertura de regressao e UI, aumentando confianca em release e reduzindo esforco de validacao manual.",
          "Melhoria da consistencia de entrega atraves de CI/CD e workflows de desenvolvimento containerizados.",
          "Entrega de alteracoes em producao para fluxos regulados com exigencia elevada de correcao."
        ]
      },
      technologies: ["Java", "Spring", "Swing", "Eclipse RCP", "QF-Test", "JUnit", "Podman", "CI/CD", "Git", "Fintech"]
    },
    {
      title: "Software Engineer",
      company: "Deimos Engenharia",
      period: "2017 - 2021",
      description: {
        en: "Delivered engineering contributions to ESA Earth Observation applications, including S2G, ESOV, DFDL4S, and geospatial tooling for mission data analysis.",
        pt: "Entreguei contribuicoes de engenharia para aplicacoes ESA de Observacao da Terra, incluindo S2G, ESOV, DFDL4S e tooling geoespacial para analise de dados de missao."
      },
      achievements: {
        en: [
          "Built and evolved Java desktop tools that improved telemetry visualization and technical data inspection workflows.",
          "Strengthened engineering quality through automated testing and CI practices in mission-critical contexts.",
          "Delivered geospatial interfaces for technical users working with CCSDS-compliant datasets."
        ],
        pt: [
          "Desenvolvimento e evolucao de ferramentas desktop em Java, melhorando fluxos de visualizacao de telemetria e inspecao tecnica de dados.",
          "Reforco da qualidade de engenharia com testes automatizados e praticas de CI em contextos mission-critical.",
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
        en: "Enterprise platform supporting portfolio management, compliance, and fund administration in regulated financial environments.",
        pt: "Plataforma enterprise para portfolio management, compliance e administracao de fundos em ambientes financeiros regulados."
      },
      technologies: ["Java", "Swing", "Eclipse RCP", "QF-Test"],
      link: "https://www.profidata.com/en/solutions/xentis-suite"
    },
    {
      title: "ESOV NG Visualization",
      status: "ESA",
      description: {
        en: "Visualization tooling for ESA satellite orbits and instrument swaths used in mission analysis workflows.",
        pt: "Tooling de visualizacao para orbitas de satelites ESA e faixas de instrumentos usado em fluxos de analise de missao."
      },
      technologies: ["Java", "Swing", "XML"],
      link: "https://earth.esa.int/eogateway/tools/esov-software-tools-esov-ng-"
    },
    {
      title: "DFDL4S Data Format",
      status: "ESA",
      description: {
        en: "Binary data binding library enabling read and write operations for CCSDS space packets.",
        pt: "Biblioteca de data binding binario para operacoes de leitura e escrita em pacotes espaciais CCSDS."
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
        en: "Business website with clear service positioning and maintainable frontend structure.",
        pt: "Website empresarial com posicionamento claro de servicos e estrutura frontend manutenivel."
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
        en: "Service website optimized for readability, trust signals, and direct contact flow.",
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
