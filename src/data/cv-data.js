/**
 * CV Data Configuration
 * Contains all the content data for the portfolio
 */

// Make cvData available globally
window.cvData = {
  personal: {
    name: "Eduardo Meireles Lopes",
    title: {
      en: "Java Software Developer & Creative AI User",
      pt: "Programador Java & Utilizador Criativo de IA"
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
    en: "With a background in Computer Science and experience spanning from space technology to the financial sector, I excel at turning complex challenges into clear, effective, and creative solutions. My journey is driven by curiosity and by the belief that every line of code can create real impact — especially when inspired by the possibilities of Artificial Intelligence.",
    pt: "Com formação em Ciência da Computação e experiência que abrange desde a tecnologia espacial até ao setor financeiro, destaco-me por transformar desafios complexos em soluções claras, eficazes e criativas. A minha trajetória é guiada pela curiosidade e pela convicção de que cada linha de código pode gerar impacto real — sobretudo quando inspirada pelo potencial da Inteligência Artificial."
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
      title: "Java Developer",
      company: "Profidata • Xentis System",
      period: "2021 - Present",
      description: {
        en: "Development and maintenance of Xentis software (Java, Spring, Swing, Eclipse RCP, QF-Test, JUnit, Podman, CI/CD, Git)",
        pt: "Desenvolvimento e manutenção do software Xentis (Java, Spring, Swing, Eclipse RCP, QF-Test, JUnit, Podman, CI/CD, Git)"
      },
      technologies: ["Java", "Spring", "Swing", "Eclipse RCP", "QF-Test", "JUnit", "Podman", "CI/CD", "Git"]
    },
    {
      title: "Software Engineer",
      company: "Deimos Engenharia • ESA Projects",
      period: "2017 - 2021",
      description: {
        en: "ESA Earth Observation Applications: S2G, ESOV, DFDL4S, Geoportals (Java, Swing, Eclipse RCP, JUnit, CI/CD, Git, C++, OpenLayers, Leaflet, HTML, JS and CSS)",
        pt: "Aplicações de Observação da Terra ESA: S2G, ESOV, DFDL4S, Geoportais (Java, Swing, Eclipse RCP, JUnit, CI/CD, Git, C++, OpenLayers, Leaflet, HTML, JS and CSS)"
      },
      technologies: ["Java", "Swing", "Eclipse RCP", "JUnit", "CI/CD", "Git", "C++", "OpenLayers", "Leaflet", "HTML", "JS", "CSS"]
    }
  ],

  projects: [
    {
      title: "Xentis Investment Management",
      status: "CURRENT",
      description: {
        en: "Enterprise financial software for investment management (Java, Spring, Swing, Eclipse RCP, QF-Test)",
        pt: "Software financeiro empresarial para gestão de investimentos (Java, Spring, Swing, Eclipse RCP, QF-Test)"
      },
      technologies: ["Java", "Spring", "Swing", "Eclipse RCP", "QF-Test"],
      link: "https://www.profidata.com/products/xentis/"
    },
    {
      title: "ESOV NG Visualization",
      status: "ESA",
      description: {
        en: "Visualization of ESA satellite swaths and orbits (Java, Swing, Eclipse RCP, XML)",
        pt: "Visualização de órbitas e faixas de satélite ESA (Java, Swing, Eclipse RCP, XML)"
      },
      technologies: ["Java", "Swing", "Eclipse RCP", "XML"],
      link: "https://earth.esa.int/eogateway/tools/esov-software-tools-esov-ng-"
    },
    {
      title: "DFDL4S Data Format",
      status: "ESA",
      description: {
        en: "Binary data binding library for space data (Java, C++, XML)",
        pt: "Biblioteca de vinculação de dados binários para dados espaciais (Java, C++, XML)"
      },
      technologies: ["Java", "C++", "XML"],
      link: "https://eop-cfi.esa.int/index.php/applications/dfdl4s"
    },
    {
      title: "S2G Earth Observation",
      status: "ESA",
      description: {
        en: "Inspection of CCSDS-compliant satellite data (Java, Eclipse RCP, JNI)",
        pt: "Inspeção de dados de satélite compatíveis com CCSDS (Java, Eclipse RCP, JNI)"
      },
      technologies: ["Java", "Eclipse RCP", "JNI"],
      link: "https://earth.esa.int/eogateway/tools/s2g-data-viewer"
    }
  ],

  education: [
    {
      title: { en: "Master in Computer Science", pt: "Mestrado em Ciências da Computação" },
      institution: "FCT-UNL",
      period: "2015 - 2020",
      description: {
        en: "Web development, data analysis, machine learning, visualization",
        pt: "Desenvolvimento web, análise de dados, aprendizagem automática, visualização"
      }
    },
    {
      title: { en: "Bachelor in Computer Science", pt: "Licenciatura em Ciências da Computação" },
      institution: "FCT-UNL",
      period: "2010 - 2015",
      description: {
        en: "Software development, algorithms, OOP",
        pt: "Desenvolvimento de software, algoritmos, POO"
      }
    },
    {
      title: { en: "Socio-Economic Sciences", pt: "Ciências Socioeconómicas" },
      institution: "Forte da Casa High School",
      period: "2007 - 2010",
      description: {
        en: "Foundation studies",
        pt: "Estudos de base"
      }
    }
  ]
};
