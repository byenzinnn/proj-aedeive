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

window.addEventListener('scroll', function() {
  const cards = document.querySelectorAll('.equipe-title');

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (cardTop < windowHeight * 0.90 && !card.classList.contains('animated')) {
      anime({
        targets: card,
        translateX: [-100, 0],
        duration: 800,
        easing: 'easeInOutBack',
        opacity: [0, 1]
      });
      card.classList.add('animated');
    }
  });
});
