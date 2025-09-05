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
    
    // Flip to CV side
    if (flipBtn && returnBtn && cardFlip) {
        flipBtn.addEventListener('click', () => {
            cardFlip.classList.add('flipped');
            
            // Reset scroll position when switching to back card
            window.scrollTo(0, 0);
            
            // Announce to screen readers
            announceScreenReaderMessage('CV view activated');
        });
        
        // Return to profile side
        returnBtn.addEventListener('click', () => {
            cardFlip.classList.remove('flipped');
            
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
        // CV
        'cv.back': 'Back to Profile'
    },
    pt: {
        // CV
        'cv.back': 'Voltar ao Perfil'
    }
};

let currentLang = 'en';

// Set up language buttons
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        switchLanguage(lang);
    });
});