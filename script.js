ddEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const nav = document.getElementById('main-nav');

  // ---------- Mobile Menu Toggle ----------
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active'); // This adds or removes the class 'active' on nav
  });

  // ---------- Contact Form Validation ----------
  const form = document.getElementById('contact-form');
  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting for now

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    alert('Message sent successfully!');
    form.reset(); // Clear the form
  });

  // Helper function to validate email
  function validateEmail(email) {
    // Simple regex for basic email validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }
});
