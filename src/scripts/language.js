/**
 * Language Switching Module
 * Handles language switching functionality
 */

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

// Export functions for use in other modules
window.LanguageModule = {
  setup: setupLanguageSwitcher,
  switch: switchLanguage
};
