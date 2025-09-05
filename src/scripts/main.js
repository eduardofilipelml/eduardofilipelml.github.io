/**
 * Main Application Entry Point
 * Initializes all modules and functionality
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all modules in the correct order
  initializeApplication();
});

/**
 * Initialize the entire application
 */
function initializeApplication() {
  try {
    // Initialize CV components first (needs to be before other modules)
    if (window.CVComponents) {
      window.CVComponents.initialize();
    }

    // Initialize language switching
    if (window.LanguageModule) {
      window.LanguageModule.setup();
    }

    // Initialize animations
    if (window.AnimationsModule) {
      window.AnimationsModule.init();
      window.AnimationsModule.initTimeline();
      window.AnimationsModule.initPulse();
    }

    // Initialize card flip functionality
    if (window.CardFlipModule) {
      window.CardFlipModule.setup();
    }

    // Add smooth scroll polyfill for Safari
    if (!('scrollBehavior' in document.documentElement.style)) {
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js';
      script.onload = function() {
        window.__forceSmoothScrollPolyfill__ = true;
      };
      document.head.appendChild(script);
    }

    console.log('Portfolio application initialized successfully');
  } catch (error) {
    console.error('Error initializing application:', error);
  }
}

// Global error handler
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

// Global unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});
