// Select the theme dropdown
const themeSelector = document.getElementById('themeSelector');

// Function to apply the selected theme
function applyTheme(theme) {
  document.body.className = ''; // Reset all classes
  document.querySelector('header').className = ''; // Reset header classes

  if (theme === 'light') {
    document.body.classList.add('light-mode');
    document.querySelector('header').classList.add('light-mode');
  } else if (theme === 'dark') {
    document.body.classList.add('dark-mode');
    document.querySelector('header').classList.add('dark-mode');
  }
}

// Event listener for theme selection
themeSelector.addEventListener('change', (event) => {
  applyTheme(event.target.value);
});
// Select elements
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
