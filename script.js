document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Input fields
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const message = document.getElementById('message');

  // Error fields
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  const formSuccess = document.getElementById('formSuccess');

  let isValid = true;

  // Clear previous messages
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';
  formSuccess.textContent = '';

  // Name validation
  if (name.value.trim() === '') {
    nameError.textContent = 'Name is required.';
    isValid = false;
  }

  // Email validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value.trim())) {
    emailError.textContent = 'Enter a valid email.';
    isValid = false;
  }

  // Message validation
  if (message.value.trim().length < 10) {
    messageError.textContent = 'Message must be at least 10 characters.';
    isValid = false;
  }

  // If valid, show success message
  if (isValid) {
    formSuccess.textContent = 'Message sent successfully!';
    name.value = '';
    email.value = '';
    message.value = '';
  }
});
