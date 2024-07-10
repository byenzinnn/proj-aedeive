const animeStart = () => {
    anime({
        targets: '.navbar',
        translateY: [-50, 0],
        easing: 'easeInOutBack',
        delay: 0,
        duration: 600,
        opacity: [0, 1]
    });
    anime({
        targets: '.main-title p:nth-child(1)',
        opacity: [0, 1],
        duration: 800,
        delay: 400,
        translateY: [50, 0],
        easing: 'easeInOutBack',
    });
    anime({
        targets: '.main-title p:nth-child(2)',
        opacity: [0, 1],
        duration: 600,
        delay: 600,
        translateY: [50, 0],
        easing: 'easeInOutBack',
    });
}