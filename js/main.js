const themeIcon = document.getElementById('darkModeToggle');

function updateIcon() {
  if (body.classList.contains('dark-mode')) {
    themeIcon.classList.replace('fa-moon', 'fa-sun');
  } else {
    themeIcon.classList.replace('fa-sun', 'fa-moon');
  }
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  updateIcon();

  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('dark-mode', 'enabled');
  } else {
    localStorage.setItem('dark-mode', 'disabled');
  }
});

// Run on load
updateIcon();
