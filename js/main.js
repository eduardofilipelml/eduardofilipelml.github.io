/**
 * Modern Portfolio JavaScript
 * Author: Eduardo Meireles Lopes
 * Version: 2.0.0
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    initAnimations();
    
    // Set up language switcher
    setupLanguageSwitcher();
    
    // Set up card flip functionality
    setupCardFlip();
    
    // Test for 3D transform support
    checkFor3DSupport();
});

/**
 * Initialize staggered animations
 */
function initAnimations() {
    // Add animated elements with delay
    const animatedElements = document.querySelectorAll('.animate, .animate-left, .animate-right, .animate-scale');
    
    // Observer for elements entering viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Keep animation class
                entry.target.style.animationPlayState = 'running';
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    
    // Observe all animated elements
    animatedElements.forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
    });
}

/**
 * Set up language switching functionality
 */
function setupLanguageSwitcher() {
    const enBtn = document.getElementById('en-btn');
    const ptBtn = document.getElementById('pt-btn');
    
    // Set up event listeners for language buttons
    if (enBtn && ptBtn) {
        enBtn.addEventListener('click', () => switchLanguage('en'));
        ptBtn.addEventListener('click', () => switchLanguage('pt'));
        
        // Check for stored language preference or browser language
        const storedLang = localStorage.getItem('preferredLanguage');
        const browserLang = navigator.language.substring(0, 2);
        
        // Set initial language
        if (storedLang) {
            switchLanguage(storedLang);
        } else if (browserLang === 'pt') {
            switchLanguage('pt');
        }
    }
}

/**
 * Switch language across the site
 */
function switchLanguage(lang) {
    const enBtn = document.getElementById('en-btn');
    const ptBtn = document.getElementById('pt-btn');
    
    // Update active button state
    if (lang === 'en') {
        enBtn.classList.add('active');
        ptBtn.classList.remove('active');
    } else {
        ptBtn.classList.add('active');
        enBtn.classList.remove('active');
    }
    
    // Save preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update all translatable elements
    const translatableElements = document.querySelectorAll(`[data-${lang}]`);
    translatableElements.forEach(el => {
        el.textContent = el.getAttribute(`data-${lang}`);
    });
}

/**
 * Set up card flip functionality with dynamic scrolling
 */
function setupCardFlip() {
    const flipBtn = document.getElementById('flip-btn');
    const returnBtn = document.getElementById('return-btn');
    const cardFlip = document.querySelector('.card-flip');
    const body = document.body;
    
    // Initialize with front card active
    body.classList.add('front-card-active');
    body.classList.remove('back-card-active');
    
    // Flip to CV side
    if (flipBtn && returnBtn && cardFlip) {
        flipBtn.addEventListener('click', () => {
            cardFlip.classList.add('flipped');
            
            // Update body classes for dynamic scrolling
            body.classList.remove('front-card-active');
            body.classList.add('back-card-active');
            
            // Reset scroll position when switching to back card
            window.scrollTo(0, 0);
            
            // Announce to screen readers
            announceScreenReaderMessage('CV view activated');
        });
        
        // Return to profile side
        returnBtn.addEventListener('click', () => {
            cardFlip.classList.remove('flipped');
            
            // Update body classes for dynamic scrolling
            body.classList.remove('back-card-active');
            body.classList.add('front-card-active');
            
            // Reset scroll position when switching to front card
            window.scrollTo(0, 0);
            
            // Announce to screen readers
            announceScreenReaderMessage('Profile view activated');
        });
        
        // Keyboard support (Space and Enter) for buttons
        [flipBtn, returnBtn].forEach(btn => {
            btn.addEventListener('keydown', (e) => {
                if (e.key === ' ' || e.key === 'Enter') {
                    e.preventDefault();
                    btn.click();
                }
            });
        });
    }
}

/**
 * Screen reader announcements for accessibility
 */
function announceScreenReaderMessage(message) {
    const announcer = document.createElement('div');
    announcer.setAttribute('aria-live', 'polite');
    announcer.setAttribute('aria-atomic', 'true');
    announcer.classList.add('sr-only');
    announcer.textContent = message;
    
    document.body.appendChild(announcer);
    
    // Remove after announcement
    setTimeout(() => {
        document.body.removeChild(announcer);
    }, 3000);
}

/**
 * Check for 3D transform support
 */
function checkFor3DSupport() {
    const isSupported = 'transform-style' in document.documentElement.style &&
        'perspective' in document.documentElement.style;
    
    if (!isSupported) {
        document.body.classList.add('no-preserve-3d');
    }
}

// Add smooth scroll polyfill for Safari
if (!('scrollBehavior' in document.documentElement.style)) {
    // Use script tag approach instead of import
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
    script.onload = function() {
        window.__forceSmoothScrollPolyfill__ = true;
    };
    document.head.appendChild(script);
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
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        
        // Hero section
        'hero.role': 'Java Software Developer & Creative AI User',
        'hero.location': 'Mafra / Lisbon, Portugal',
        'hero.tagline': 'Turning curiosity into creation—where code meets imagination, and AI expands what\'s possible.',
        
        // About section
        'about.title': 'About Me',
        'about.bio': 'With a foundation in computer science and a career spanning space technology and finance, I thrive on bridging the gap between intricate problems and clear, creative solutions. My journey is fueled by curiosity and a belief that every line of code can shape something valuable—especially when inspired by the possibilities of AI.',
        'about.stats.java': 'Years Java',
        'about.stats.tech': 'Years Tech',
        'about.stats.curiosity': 'Curiosity Level',
        
        // Experience section
        'experience.title': 'Experience',
        'experience.education1.period': '2007-2010',
        'experience.education1.title': 'Socio-Economic Sciences',
        'experience.education1.org': 'Forte da Casa High School',
        'experience.education1.desc': 'Foundation studies',
        
        'experience.education2.period': '2010-2015',
        'experience.education2.title': 'Bachelor in Computer Science',
        'experience.education2.org': 'FCT-UNL',
        'experience.education2.desc': 'Software development, algorithms, OOP',
        
        'experience.education3.period': '2015-2020',
        'experience.education3.title': 'Master in Computer Science',
        'experience.education3.org': 'FCT-UNL',
        'experience.education3.desc': 'Web development, data analysis, machine learning, visualization',
        
        'experience.job1.period': '2017-2021',
        'experience.job1.title': 'Software Engineer',
        'experience.job1.org': 'Deimos Engenharia • ESA Projects',
        'experience.job1.desc': 'ESA Earth Observation Applications: S2G, ESOV, DFDL4S, Geoportals',
        
        'experience.job2.period': '2021-PRESENT',
        'experience.job2.title': 'Java Developer',
        'experience.job2.org': 'Profidata • Xentis System',
        'experience.job2.desc': 'Enterprise financial software for investment management',
        
        // Projects section
        'projects.title': 'Projects',
        'projects.xentis.title': 'Xentis Investment Management',
        'projects.xentis.status': 'CURRENT',
        'projects.xentis.desc': 'Enterprise financial software for complex investment scenarios.',
        'projects.xentis.tech': 'Java Spring Swing',
        
        'projects.esov.title': 'ESOV NG Visualization',
        'projects.esov.status': 'ESA',
        'projects.esov.desc': 'Satellite data visualization tools for space missions.',
        'projects.esov.tech': 'Java Eclipse RCP',
        
        'projects.dfdl.title': 'DFDL4S Data Format',
        'projects.dfdl.status': 'ESA',
        'projects.dfdl.desc': 'Binary data binding library for space data management.',
        'projects.dfdl.tech': 'Java C++ XML',
        
        'projects.s2g.title': 'S2G Earth Observation',
        'projects.s2g.status': 'ESA',
        'projects.s2g.desc': 'Sentinel-2 satellite data processing and visualization platform.',
        'projects.s2g.tech': 'Java GIS Satellite Data',
        
        // Contact section
        'contact.title': 'Contact',
        'contact.intro': "Ready to explore new dimensions together? Whether you're curious about technology, seeking collaboration, or simply want to share ideas—let's connect and create something extraordinary.",
        'contact.email.title': 'Direct Connect',
        'contact.linkedin.title': 'Professional Network',
        'contact.linkedin.subtitle': 'LinkedIn Profile',
        'contact.github.title': 'Code Repository',
        'contact.github.subtitle': 'GitHub Profile',
        
        // Footer
        'footer.quote': '"In the symphony of code and creativity, every bug is just a note waiting to find its harmony."',
        'footer.author': '— Eduardo Meireles Lopes',
        'footer.copyright': '© 2025 Eduardo Meireles Lopes • Rooted in nature, growing through code 🌱',
        
        // CV
        'cv.back': 'Back to Profile'
    },
    pt: {
        // Navigation
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.experience': 'Experiência',
        'nav.projects': 'Projetos',
        'nav.contact': 'Contacto',
        
        // Hero section
        'hero.role': 'Programador Java & Utilizador Criativo de IA',
        'hero.location': 'Mafra / Lisboa, Portugal',
        'hero.tagline': 'Transformo curiosidade em criação—onde o código encontra a imaginação e a IA amplia o possível.',
        
        // About section
        'about.title': 'Sobre Mim',
        'about.bio': 'Com uma base sólida em ciência da computação e uma carreira que abrange tecnologia espacial e finanças, prospero ao fazer a ponte entre problemas complexos e soluções claras e criativas. A minha jornada é movida pela curiosidade e pela crença de que cada linha de código pode criar algo valioso—especialmente quando inspirada pelas possibilidades da IA.',
        'about.stats.java': 'Anos Java',
        'about.stats.tech': 'Anos Tech',
        'about.stats.curiosity': 'Nível Curiosidade',
        
        // Experience section
        'experience.title': 'Experiência',
        'experience.education1.period': '2007-2010',
        'experience.education1.title': 'Ciências Socio-Económicas',
        'experience.education1.org': 'Escola Secundária de Forte da Casa',
        'experience.education1.desc': 'Estudos base',
        
        'experience.education2.period': '2010-2015',
        'experience.education2.title': 'Licenciatura em Ciências da Computação',
        'experience.education2.org': 'FCT-UNL',
        'experience.education2.desc': 'Desenvolvimento de software, algoritmos, POO',
        
        'experience.education3.period': '2015-2020',
        'experience.education3.title': 'Mestrado em Ciências da Computação',
        'experience.education3.org': 'FCT-UNL',
        'experience.education3.desc': 'Desenvolvimento web, análise de dados, aprendizagem automática, visualização',
        
        'experience.job1.period': '2017-2021',
        'experience.job1.title': 'Engenheiro de Software',
        'experience.job1.org': 'Deimos Engenharia • Projetos ESA',
        'experience.job1.desc': 'Aplicações de Observação da Terra ESA: S2G, ESOV, DFDL4S, Geoportais',
        
        'experience.job2.period': '2021-PRESENTE',
        'experience.job2.title': 'Programador Java',
        'experience.job2.org': 'Profidata • Sistema Xentis',
        'experience.job2.desc': 'Software financeiro empresarial para gestão de investimentos',
        
        // Projects section
        'projects.title': 'Projetos',
        'projects.xentis.title': 'Gestão de Investimentos Xentis',
        'projects.xentis.status': 'ATUAL',
        'projects.xentis.desc': 'Software financeiro empresarial para cenários complexos de investimento.',
        'projects.xentis.tech': 'Java Spring Swing',
        
        'projects.esov.title': 'Visualização ESOV NG',
        'projects.esov.status': 'ESA',
        'projects.esov.desc': 'Ferramentas de visualização de dados de satélite para missões espaciais.',
        'projects.esov.tech': 'Java Eclipse RCP',
        
        'projects.dfdl.title': 'Formato de Dados DFDL4S',
        'projects.dfdl.status': 'ESA',
        'projects.dfdl.desc': 'Biblioteca de vinculação de dados binários para gestão de dados espaciais.',
        'projects.dfdl.tech': 'Java C++ XML',
        
        'projects.s2g.title': 'Observação da Terra S2G',
        'projects.s2g.status': 'ESA',
        'projects.s2g.desc': 'Plataforma de processamento e visualização de dados do satélite Sentinel-2.',
        'projects.s2g.tech': 'Java SIG Dados de Satélite',
        
        // Contact section
        'contact.title': 'Contacto',
        'contact.intro': 'Pronto para explorar novas dimensões em conjunto? Seja por curiosidade sobre tecnologia, procura de colaboração, ou simplesmente para partilhar ideias—vamos conectar-nos e criar algo extraordinário.',
        'contact.email.title': 'Contacto Direto',
        'contact.linkedin.title': 'Rede Profissional',
        'contact.linkedin.subtitle': 'Perfil LinkedIn',
        'contact.github.title': 'Repositório de Código',
        'contact.github.subtitle': 'Perfil GitHub',
        
        // Footer
        'footer.quote': '"Na sinfonia do código e criatividade, cada erro é apenas uma nota à espera de encontrar a sua harmonia."',
        'footer.author': '— Eduardo Meireles Lopes',
        'footer.copyright': '© 2025 Eduardo Meireles Lopes • Enraizado na natureza, crescendo através do código 🌱',
        
        // CV
        'cv.back': 'Voltar ao Perfil'
    }
};

let currentLang = 'en';

function translatePage(lang) {
    currentLang = lang;
    // Update <html lang> attribute for accessibility/SEO
    document.documentElement.setAttribute('lang', lang);
    
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
    const activeLangButton = document.querySelector(`[data-lang="${lang}"]`);
    if (activeLangButton) {
        activeLangButton.classList.add('active');
    }

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