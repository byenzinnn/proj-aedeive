const animeStart = () => {
    anime({
        targets: '.navbar',
        translateY: [-50, 0],
        easing: 'linear',
        delay: 0,
        duration: 800,
        opacity: [0, 1]
    });
    anime({
        targets: '.main-title',
        opacity: [0, 1],
        duration: 1500,
        delay: 400,
        translateY: [50, 0],
        easing: 'linear',
    })
}