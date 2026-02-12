// Ocultar/mostrar navbar al hacer scroll
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").classList.remove("header-hidden");
  } else {
    document.querySelector(".header").classList.add("header-hidden");
  }
  prevScrollpos = currentScrollPos;

  // Actualizar enlace activo basado en la sección visible
  updateActiveLink();
}

// Función para actualizar el enlace activo
function updateActiveLink() {
  const sections = document.querySelectorAll('main section');
  const navLinks = document.querySelectorAll('.header nav ul li a');

  let currentSection = '';

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.pageYOffset >= (sectionTop - 100)) {
      currentSection = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('seleccionado');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('seleccionado');
    }
  });
}

// Scroll suave al hacer clic en los enlaces
function scrollToSection(event) {
  event.preventDefault();

  const destino = document.querySelector(event.target.getAttribute('href'));
  destino.scrollIntoView({ behavior: "smooth" });

  // Actualizar clase seleccionado inmediatamente
  const navLinks = document.querySelectorAll('.header nav ul li a');
  navLinks.forEach(link => link.classList.remove('seleccionado'));
  event.target.classList.add('seleccionado');

  // Cerrar menú móvil si está abierto
  const nav = document.getElementById('nav');
  if (nav && nav.classList.contains('responsive')) {
    nav.classList.remove('responsive');
  }
}

function scrollToSectioninButton(section) {
  const destino = document.getElementById(section);
  const contenedor = destino.closest("main");
  destino.scrollIntoView({ behavior: "smooth" });
}

// Toggle menú móvil
document.addEventListener('DOMContentLoaded', function () {
  const iconoNav = document.getElementById('icono-nav');
  const nav = document.getElementById('nav');

  if (iconoNav) {
    iconoNav.addEventListener('click', function () {
      nav.classList.toggle('responsive');
    });
  }

  // Establecer el enlace activo al cargar la página
  updateActiveLink();
});
