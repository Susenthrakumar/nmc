    // Form submission and validation
    document.querySelector('.contact-form form').addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form from submitting normally
  
      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      const message = document.querySelector('#message').value;
  
      // Simple validation
      if (name && email && message) {
        alert('Your message has been sent successfully!');
        // Here, you can add code to submit the form via AJAX or clear the form fields
        document.querySelector('.contact-form form').reset(); // Reset form after successful submission
      } else {
        alert('Please fill in all fields!');
      }
    });
  
