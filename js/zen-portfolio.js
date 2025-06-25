// Zen Portfolio - Minimal & Tranquil JavaScript
document.addEventListener('DOMContentLoaded', function() {
  
  // Navigation Dots Functionality
  const navDots = document.querySelectorAll('.nav-dot');
  const sections = document.querySelectorAll('.section');
  
  // Update active navigation dot
  function updateActiveNav(sectionId) {
    navDots.forEach(dot => {
      dot.classList.toggle('active', dot.dataset.section === sectionId);
    });
  }
  
  // Smooth scroll to section
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }
  
  // Navigation dot click handlers
  navDots.forEach(dot => {
    dot.addEventListener('click', () => {
      const sectionId = dot.dataset.section;
      scrollToSection(sectionId);
      updateActiveNav(sectionId);
    });
  });
  
  // Intersection Observer for section visibility
  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };
  
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateActiveNav(entry.target.id);
      }
    });
  }, observerOptions);
  
  // Observe all sections
  sections.forEach(section => {
    sectionObserver.observe(section);
  });
  
  // Gentle reveal animations for elements
  const observeElements = document.querySelectorAll('.timeline-item, .project-card, .skill-category');
  
  const elementObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  
  observeElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    elementObserver.observe(el);
  });
  
  // Profile image orbit animation on scroll
  const profileOrbit = document.querySelector('.profile-orbit');
  let scrollY = 0;
  
  function updateOrbit() {
    scrollY = window.scrollY;
    if (profileOrbit) {
      const rotation = scrollY * 0.1;
      profileOrbit.style.transform = `rotate(${rotation}deg)`;
    }
  }
  
  // Throttled scroll handler
  let ticking = false;
  function onScroll() {
    if (!ticking) {
      requestAnimationFrame(updateOrbit);
      ticking = true;
      setTimeout(() => { ticking = false; }, 16);
    }
  }
  
  window.addEventListener('scroll', onScroll);
  
  // Project card hover effects
  const projectCards = document.querySelectorAll('.project-card');
  
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'translateY(-4px)';
    });
    
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'translateY(0)';
    });
  });
  
  // Zen scroll hint animation
  const scrollHint = document.querySelector('.scroll-hint');
  if (scrollHint) {
    // Hide scroll hint after user starts scrolling
    let hasScrolled = false;
    window.addEventListener('scroll', () => {
      if (!hasScrolled && window.scrollY > 50) {
        hasScrolled = true;
        scrollHint.style.opacity = '0';
        scrollHint.style.transform = 'translateY(10px)';
      }
    });
  }
  
  // Smooth parallax effect for hero background
  const hero = document.querySelector('.hero-zen');
  if (hero) {
    window.addEventListener('scroll', () => {
      const scrolled = window.scrollY;
      const parallax = scrolled * 0.3;
      hero.style.transform = `translateY(${parallax}px)`;
    });
  }
  
});
