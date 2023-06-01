var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector(".contenido-header").classList.remove("contenido-header-hidden");
  } else {
    document.querySelector(".contenido-header").classList.add("contenido-header-hidden");
  }
  prevScrollpos = currentScrollPos;
}