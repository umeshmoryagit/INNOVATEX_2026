export function initFormValidation() {
  const form = document.getElementById('registration-form');
  if (!form) return;

  const fullnameInput = document.getElementById('fullname');
  const emailInput = document.getElementById('email');
  const eventSelect = document.getElementById('event-select');
  const successMsg = document.getElementById('form-success');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Reset error messages
    clearErrors();

    // Validate Name
    if (!fullnameInput.value.trim()) {
      showError('fullname-error', 'Full name is required.');
      isValid = false;
    }

    // Validate Email
    if (!emailInput.value.trim()) {
      showError('email-error', 'Email address is required.');
      isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      showError('email-error', 'Please enter a valid email address.');
      isValid = false;
    }

    // Validate Selected Event
    if (!eventSelect.value) {
      showError('event-error', 'Please select an event track.');
      isValid = false;
    }

    if (isValid) {
      successMsg.textContent = '🎉 Registration submitted successfully!';
      form.reset();
      setTimeout(() => {
        successMsg.textContent = '';
      }, 5000);
    }
  });

  function showError(id, message) {
    const errorEl = document.getElementById(id);
    if (errorEl) errorEl.textContent = message;
  }

  function clearErrors() {
    document.querySelectorAll('.error-msg').forEach(el => el.textContent = '');
    successMsg.textContent = '';
  }

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
}