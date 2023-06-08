var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".header").classList.remove("header-hidden");
  } else {
    document.querySelector(".header").classList.add("header-hidden");
  }
  prevScrollpos = currentScrollPos;
}

function scrollToSectioninButton(section) {
  const destino = document.getElementById(section);
  const contenedor = destino.closest("main");
  destino.scrollIntoView({ behavior: "smooth" });
}
function scrollToSection(event) {
  event.preventDefault();
  
  const destino = document.querySelector(event.target.getAttribute('href'));
  destino.scrollIntoView({ behavior: "smooth" });
} 