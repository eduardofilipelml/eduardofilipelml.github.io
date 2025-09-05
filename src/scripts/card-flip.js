/**
 * Card Flip Module
 * Handles card flip functionality and navigation
 */

/**
 * Set up card flip functionality with dynamic scrolling
 */
function setupCardFlip() {
  const flipBtn = document.getElementById('flip-btn');
  const returnBtn = document.getElementById('return-btn');
  const cardFlip = document.querySelector('.card-flip');
  
  let isFlipping = false; // Prevent multiple clicks during animation

  // Flip to CV side
  if (flipBtn && returnBtn && cardFlip) {
    flipBtn.addEventListener('click', () => {
      if (isFlipping) return;
      
      isFlipping = true;
      cardFlip.classList.add('flipped');

      // Reset scroll position when switching to back card
      setTimeout(() => {
        window.scrollTo(0, 0);
        isFlipping = false;
      }, 400); // Half of the transition time

      // Announce to screen readers
      announceScreenReaderMessage('CV view activated');
    });

    // Return to profile side
    returnBtn.addEventListener('click', () => {
      if (isFlipping) return;
      
      isFlipping = true;
      cardFlip.classList.remove('flipped');

      // Reset scroll position when switching to front card
      setTimeout(() => {
        window.scrollTo(0, 0);
        isFlipping = false;
      }, 400); // Half of the transition time

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

// Export functions for use in other modules
window.CardFlipModule = {
  setup: setupCardFlip,
  announce: announceScreenReaderMessage
};
