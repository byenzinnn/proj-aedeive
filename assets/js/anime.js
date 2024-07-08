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
        duration: 1000,
        delay: 200,
        translateY: [50, 0],
        easing: 'linear',
    })
}