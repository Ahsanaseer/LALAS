document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;

  const applyTheme = (theme) => {
    body.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);

    if (typeof updateThemeLogos === 'function') {
      updateThemeLogos(theme);
    }
  };

  const initialTheme = localStorage.getItem('theme') || 'dark';
  applyTheme(initialTheme);

  const loginForm = document.getElementById('loginForm');
  const passwordInput = document.getElementById('loginPassword');
  const togglePasswordBtn = document.querySelector('.auth-input-toggle');
  const eyeOpen = togglePasswordBtn?.querySelector('.auth-eye-open');
  const eyeClosed = togglePasswordBtn?.querySelector('.auth-eye-closed');

  togglePasswordBtn?.addEventListener('click', () => {
    const isPassword = passwordInput.type === 'password';
    passwordInput.type = isPassword ? 'text' : 'password';
    eyeOpen?.classList.toggle('hidden', !isPassword);
    eyeClosed?.classList.toggle('hidden', isPassword);
  });

  loginForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(loginForm);
    console.log('Login submitted', Object.fromEntries(formData));
  });
});

