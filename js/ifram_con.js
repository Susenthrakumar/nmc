
  // Function to check if an element is in the viewport
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
  }

  // Function to add 'visible' class when the element is in view
  function handleScrollAnimations() {
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form');
    const mapIframe = document.querySelector('.map-container iframe');

    if (isElementInViewport(contactInfo)) {
      contactInfo.classList.add('visible');
    }
    if (isElementInViewport(contactForm)) {
      contactForm.classList.add('visible');
    }
    if (isElementInViewport(mapIframe)) {
      mapIframe.classList.add('visible');
    }
  }

  // Call the function on scroll and on page load
  window.addEventListener('scroll', handleScrollAnimations);
  document.addEventListener('DOMContentLoaded', handleScrollAnimations); // Ensure animations work after the page is loaded

  // Initial check to handle page load
  handleScrollAnimations();