function toggleMenu() {
    var navLinks = document.getElementById("navLinks");
    navLinks.classList.toggle("active");
    anime({
        targets: '.nav-links',
        translateY: [-300, 0],
        easing: 'easeInOutSine',
        duration: 500
    });
}

/* When the user scrolls down, hide the navbar. When the user scrolls up, show the navbar */
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.transform = "translateY(0px)";
  } else {
    document.getElementById("navbar").style.transform = "translateY(-300px)";
  }
  prevScrollpos = currentScrollPos;
}
