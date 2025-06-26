// Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Navigation highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section[id]');

    function updateActiveNavLink() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                const navHeight = document.querySelector('.nav').offsetHeight;
                const targetPosition = targetSection.offsetTop - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll event listener
    window.addEventListener('scroll', updateActiveNavLink);
    updateActiveNavLink();

    // Timeline animations
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.1 });

    timelineItems.forEach(item => {
        item.style.animationPlayState = 'paused';
        timelineObserver.observe(item);
    });

    // Translation functionality
    const translations = {
        en: {
            'nav.home': 'Home',
            'nav.about': 'About',
            'nav.experience': 'Experience',
            'nav.projects': 'Projects',
            'nav.contact': 'Contact',
            'hero.role': 'Java Software Developer & AI Explorer',
            'hero.location': 'Mafra / Lisbon, Portugal',
            'hero.tagline': 'Letting curiosity lead—where nature, code, and AI meet, logic and imagination grow, and every line becomes a story.',
            'about.title': 'About Me',
            'about.bio': "I'm Eduardo—a passionate developer who bridges the gap between complex technical challenges and elegant solutions. With deep expertise spanning from satellite data systems for ESA space missions to sophisticated financial platforms, I craft code that not only works beautifully but solves real-world problems. My journey through computer science, from academic foundations to cutting-edge AI exploration, is driven by an unwavering curiosity and belief that every line of code can make a meaningful impact.",
            'about.stats.java': 'Years Java',
            'about.stats.tech': 'Years Tech',
            'about.stats.curiosity': 'Curiosity Level',
            'experience.title': 'Experience',
            'projects.title': 'Projects',
            'contact.title': 'Contact',
            'contact.intro': "Ready to explore new dimensions together? Whether you're curious about technology, seeking collaboration, or simply want to share ideas—let's connect and create something extraordinary.",
            'contact.email.title': 'Direct Connect',
            'contact.linkedin.title': 'Professional Network',
            'contact.linkedin.subtitle': 'LinkedIn Profile',
            'contact.github.title': 'Code Repository',
            'contact.github.subtitle': 'GitHub Profile',
            'footer.quote': '"In the symphony of code and creativity, every bug is just a note waiting to find its harmony."',
            'footer.copyright': '© 2025 Eduardo Meireles Lopes • Rooted in nature, growing through code 🌱'
        },
        pt: {
            'nav.home': 'Início',
            'nav.about': 'Sobre',
            'nav.experience': 'Experiência',
            'nav.projects': 'Projectos',
            'nav.contact': 'Contacto',
            'hero.role': 'Programador Java & Explorador de IA',
            'hero.location': 'Mafra / Lisboa, Portugal',
            'hero.tagline': 'Deixando a curiosidade liderar—onde a natureza, código e IA se encontram, lógica e imaginação crescem, e cada linha torna-se uma história.',
            'about.title': 'Sobre Mim',
            'about.bio': 'Sou o Eduardo—um programador apaixonado que faz a ponte entre desafios técnicos complexos e soluções elegantes. Com experiência profunda que vai desde sistemas de dados de satélite para missões espaciais da ESA até plataformas financeiras sofisticadas, desenvolvo código que não só funciona lindamente como resolve problemas do mundo real. A minha jornada pela ciência da computação, desde fundações académicas até à exploração de IA de vanguarda, é movida por uma curiosidade inabalável e pela crença de que cada linha de código pode ter um impacto significativo.',
            'about.stats.java': 'Anos Java',
            'about.stats.tech': 'Anos Tech',
            'about.stats.curiosity': 'Nível Curiosidade',
            'experience.title': 'Experiência',
            'projects.title': 'Projectos',
            'contact.title': 'Contacto',
            'contact.intro': 'Pronto para explorar novas dimensões em conjunto? Seja por curiosidade sobre tecnologia, procura de colaboração, ou simplesmente para partilhar ideias—vamos conectar-nos e criar algo extraordinário.',
            'contact.email.title': 'Contacto Directo',
            'contact.linkedin.title': 'Rede Profissional',
            'contact.linkedin.subtitle': 'Perfil LinkedIn',
            'contact.github.title': 'Repositório de Código',
            'contact.github.subtitle': 'Perfil GitHub',
            'footer.quote': '"Na sinfonia do código e criatividade, cada erro é apenas uma nota à espera de encontrar a sua harmonia."',
            'footer.copyright': '© 2025 Eduardo Meireles Lopes • Enraizado na natureza, crescendo através do código 🌱'
        }
    };

    let currentLang = 'en';

    function translatePage(lang) {
        currentLang = lang;
        
        // Update all translated elements
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            } else {
                console.warn(`Missing translation for key: "${key}" in language: "${lang}"`);
                element.textContent = '[Missing translation]';
            }
        });

        // Update button states
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        document.querySelector(`[data-lang="${lang}"]`).classList.add('active');

        // Save preference
        localStorage.setItem('language', lang);
    }

    // Set up language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const lang = this.getAttribute('data-lang');
            translatePage(lang);
        });
    });

    // Initialize with saved language or default to English
    const savedLang = localStorage.getItem('language') || 'en';
    translatePage(savedLang);
});
