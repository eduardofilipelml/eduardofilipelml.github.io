// HTML Component Loader
class ComponentLoader {
    static async loadComponent(componentName, targetId) {
        try {
            const response = await fetch(`components/${componentName}.html`);
            if (!response.ok) {
                throw new Error(`Failed to load ${componentName} component`);
            }
            const html = await response.text();
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.innerHTML = html;
            }
        } catch (error) {
            console.error(`Error loading component ${componentName}:`, error);
        }
    }

    static async loadComponents(components) {
        const promises = components.map(({ name, target }) => 
            this.loadComponent(name, target)
        );
        await Promise.all(promises);
    }
}

// Auto-load components when DOM is ready
document.addEventListener('DOMContentLoaded', async () => {    const components = [
        { name: 'navigation', target: 'nav-container' },
        { name: 'hero', target: 'hero-container' },
        { name: 'experience', target: 'experience-container' },
        { name: 'portfolio', target: 'portfolio-container' },
        { name: 'contact', target: 'contact-container' },
        { name: 'footer', target: 'footer-container' }
    ];

    await ComponentLoader.loadComponents(components);
    
    // Initialize other functionality after components are loaded
    initializeWebsite();
});

function initializeWebsite() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Contact form handling
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', handleContactForm);
    }
}

function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Here you would typically send the data to a server
    console.log('Contact form data:', data);
    
    // Show success message
    alert('Thank you for your message! I\'ll get back to you soon.');
    e.target.reset();
}
