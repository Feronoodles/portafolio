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