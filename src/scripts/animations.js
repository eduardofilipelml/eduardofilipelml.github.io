/**
 * Animations Module
 * Handles all animation-related functionality
 */

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
 * Timeline animations
 */
function initTimelineAnimations() {
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
}

/**
 * Pulse animation for stat values
 */
function initPulseAnimations() {
  const pulseElements = document.querySelectorAll('.pulse');
  pulseElements.forEach(el => {
    el.style.animation = 'pulse 1.5s ease-in-out infinite';
  });
}

// Export functions for use in other modules
window.AnimationsModule = {
  init: initAnimations,
  initTimeline: initTimelineAnimations,
  initPulse: initPulseAnimations
};
