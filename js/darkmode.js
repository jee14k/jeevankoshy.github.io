// Dark Mode Toggle Script

const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;
const icon = toggleButton.querySelector('i');

// Load initial theme from localStorage
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
  icon.classList.remove('fa-moon');
  icon.classList.add('fa-sun');
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  
  // Toggle icon
  if (body.classList.contains('dark-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
    localStorage.setItem('theme', 'dark');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
    localStorage.setItem('theme', 'light');
  }
});
