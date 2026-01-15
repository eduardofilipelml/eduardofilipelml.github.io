/**
 * CV Data Configuration
 * Contains all the content data for the portfolio
 */

// Make cvData available globally
window.cvData = {
  personal: {
    name: "Eduardo Meireles Lopes",
    title: {
      en: "Software Engineer & Creative AI User",
      pt: "Engenheiro de Software & Utilizador Criativo de IA"
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
    en: "With a background in Computer Science and experience spanning from space technology to the financial sector, I excel at turning complex challenges into clear, effective, and creative solutions. My journey is driven by curiosity and by the belief that every line of code can create real impact, especially when inspired by the possibilities of Artificial Intelligence.",
    pt: "Com formação em Engenharia Informática e experiência que abrange desde a tecnologia espacial ao setor financeiro, destaco-me na transformação de desafios complexos em soluções claras, eficazes e criativas. A minha jornada é impulsionada pela curiosidade e pela convicção de que cada linha de código pode criar um impacto real, especialmente quando inspirada pelas possibilidades da Inteligência Artificial."
  },
  hero: {
    tagline: {
      en: "Turning curiosity into creation—where code meets imagination, and AI expands what's possible.",
      pt: "Transformo curiosidade em criação—onde o código encontra a imaginação e a IA amplia o possível."
    },
    stats: [
      { value: "8+", label: { en: "Years Java", pt: "Anos Java" } },
      { value: "15+", label: { en: "Years Tech", pt: "Anos Tech" } },
      { value: "∞", label: { en: "Curiosity Level", pt: "Nível de Curiosidade" } }
    ]
  },

  experience: [
    {
      title: "Web Development",
      company: "Freelancer",
      period: "2025 - Present",
      description: {
        en: "Web projects and custom solutions for clients.",
        pt: "Projetos web e soluções personalizadas para clientes."
      },
      technologies: ["HTML", "CSS", "JavaScript", "React", "Vite"]
    },
    {
      title: "Software Developer",
      company: "Profidata AG",
      period: "2021 - Present",
      description: {
        en: "Development and maintenance of Xentis software.",
        pt: "Desenvolvimento e manutenção do software Xentis."
      },
      technologies: ["Java", "Spring", "Swing", "Eclipse RCP", "QF-Test", "JUnit", "Podman", "CI/CD", "Git"]
    },
    {
      title: "Software Engineer",
      company: "Deimos Engenharia",
      period: "2017 - 2021",
      description: {
        en: "ESA Earth Observation Applications: S2G, ESOV, DFDL4S, and Geoportals.",
        pt: "Aplicações de Observação da Terra ESA: S2G, ESOV, DFDL4S e Geoportais."
      },
      technologies: ["Java", "Swing", "Eclipse RCP", "JUnit", "CI/CD", "Git", "C++", "OpenLayers", "Leaflet", "HTML", "JS", "CSS"]
    }
  ],

  projects: [
    {
      title: "Xentis Investment Management",
      status: "CURRENT",
      description: {
        en: "Integrated platform for portfolio management, compliance and fund administration.",
        pt: "Plataforma integrada para gestão de portfólios, conformidade e administração de fundos."
      },
      technologies: ["Java", "Swing", "Eclipse RCP", "QF-Test"],
      link: "https://www.profidata.com/en/solutions/xentis-suite"
    },
    {
      title: "ESOV NG Visualization",
      status: "ESA",
      description: {
        en: "Visualization tool for ESA satellite orbits and instrument swaths.",
        pt: "Ferramenta de visualização para órbitas de satélites ESA e faixas de instrumentos."
      },
      technologies: ["Java", "Swing", "XML"],
      link: "https://earth.esa.int/eogateway/tools/esov-software-tools-esov-ng-"
    },
    {
      title: "DFDL4S Data Format",
      status: "ESA",
      description: {
        en: "Binary data binding library for reading and writing CCSDS space packets.",
        pt: "Biblioteca de vinculação de dados binários para leitura e escrita de pacotes espaciais CCSDS."
      },
      technologies: ["Java", "JNI", "C++"],
      link: "https://eop-cfi.esa.int/index.php/applications/dfdl4s"
    },
    {
      title: "S2G Earth Observation",
      status: "ESA",
      description: {
        en: "Viewer for inspecting CCSDS-compliant satellite telemetry data.",
        pt: "Visualizador para inspeção de dados de telemetria de satélite compatíveis com CCSDS."
      },
      technologies: ["Java", "Eclipse RCP", "XML"],
      link: "https://earth.esa.int/eogateway/tools/s2g-data-viewer"
    },
    {
      title: "Carbon Solutions",
      status: "WEB",
      description: {
        en: "Climate mitigation consultancy specializing in nature-based solutions.",
        pt: "Consultoria de mitigação climática especializada em soluções baseadas na natureza."
      },
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://www.carbonsolutions.pt/"
    },
    {
      title: "Yoga Flow Tribe",
      status: "WEB",
      description: {
        en: "Community yoga platform with class schedules and teacher profiles.",
        pt: "Plataforma de yoga comunitária com horários de aulas e perfis de professores."
      },
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://www.yogaflowtribe.com/"
    },
    {
      title: "Catarina Lopes Yoga",
      status: "WEB",
      description: {
        en: "Yoga teacher website with class schedules and private session booking.",
        pt: "Website de professora de yoga com horários de aulas e reservas de sessões privadas."
      },
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "https://catarinalopesyoga.com/"
    }
  ],

  education: [
    {
      title: { en: "Master in Computer Science", pt: "Mestrado em Engenharia Informática" },
      institution: "FCT-UNL",
      period: "2015 - 2020",
      description: {
        en: "Web development, data analysis, machine learning, visualization",
        pt: "Desenvolvimento web, análise de dados, aprendizagem automática, visualização"
      }
    },
    {
      title: { en: "Bachelor in Computer Science", pt: "Licenciatura em Engenharia Informática" },
      institution: "FCT-UNL",
      period: "2010 - 2015",
      description: {
        en: "Software development, algorithms, OOP",
        pt: "Desenvolvimento de software, algoritmos, POO"
      }
    }
  ]
};
