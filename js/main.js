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
 * Set up card flip functionality
 */
function setupCardFlip() {
    const flipBtn = document.getElementById('flip-btn');
    const returnBtn = document.getElementById('return-btn');
    const cardFlip = document.querySelector('.card-flip');
    
    // Flip to CV side
    if (flipBtn && returnBtn && cardFlip) {
        flipBtn.addEventListener('click', () => {
            cardFlip.classList.add('flipped');
            
            // Announce to screen readers
            announceScreenReaderMessage('CV view activated');
        });
        
        // Return to profile side
        returnBtn.addEventListener('click', () => {
            cardFlip.classList.remove('flipped');
            
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
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.contact': 'Contact',
        'hero.role': 'Java Software Developer & Creative AI User',
        'hero.location': 'Mafra / Lisbon, Portugal',
        'hero.tagline': 'Turning curiosity into creation—where code meets imagination, and AI expands what\'s possible.',
        'about.title': 'About Me',
        'about.bio': 'With a foundation in computer science and a career spanning space technology and finance, I thrive on bridging the gap between intricate problems and clear, creative solutions. My journey is fueled by curiosity and a belief that every line of code can shape something valuable—especially when inspired by the possibilities of AI.',
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
        'footer.copyright': '© 2025 Eduardo Meireles Lopes • Rooted in nature, growing through code 🌱',
        'cv.back': 'Back to Profile',
        'cv.download': 'Want the full CV? Download it or contact me.',
        'cv.pdf': 'Download PDF'
    },
    pt: {
        'nav.home': 'Início',
        'nav.about': 'Sobre',
        'nav.experience': 'Experiência',
        'nav.projects': 'Projectos',
        'nav.contact': 'Contacto',
        'hero.role': 'Programador Java & Utilizador Criativo de IA',
        'hero.location': 'Mafra / Lisboa, Portugal',
        'hero.tagline': 'Transformo curiosidade em criação—onde o código encontra a imaginação e a IA amplia o possível.',
        'about.title': 'Sobre Mim',
        'about.bio': 'Com uma base sólida em ciência da computação e uma carreira que abrange tecnologia espacial e finanças, prospero ao fazer a ponte entre problemas complexos e soluções claras e criativas. A minha jornada é movida pela curiosidade e pela crença de que cada linha de código pode criar algo valioso—especialmente quando inspirada pelas possibilidades da IA.',
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
        'footer.copyright': '© 2025 Eduardo Meireles Lopes • Enraizado na natureza, crescendo através do código 🌱',
        'cv.back': 'Voltar ao Perfil',
        'cv.download': 'Quer o CV completo? Descarregue-o ou contacte-me.',
        'cv.pdf': 'Descarregar PDF'
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