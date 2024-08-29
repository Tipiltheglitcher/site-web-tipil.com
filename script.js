document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.getElementById('menuToggle');
  const menu = document.getElementById('menu');

  menuToggle.addEventListener('click', function() {
    menu.classList.toggle('show');
  });
});

document.addEventListener('keydown', function(event) {
  if (event.ctrlKey && event.key.toLowerCase() === 'u') {
    event.preventDefault();
  }
  if (event.ctrlKey && event.shiftKey && ['I', 'C', 'J'].includes(event.key.toUpperCase())) {
    event.preventDefault();
  }
  if (event.key === 'F12' || event.keyCode === 123) {
    event.preventDefault();
  }
});
document.addEventListener('contextmenu', function(event) {
  event.preventDefault();
});