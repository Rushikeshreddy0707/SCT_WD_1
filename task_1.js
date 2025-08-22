// Change navbar style on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Toggle menu for mobile
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('nav ul');
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
});
