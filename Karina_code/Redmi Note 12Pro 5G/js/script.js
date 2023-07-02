let bigColor = new Swiper('.big-color-note125g__slider', {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

let smColor = new Swiper('.sm-color-note125g__slider', {
    speed: 600,
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

smColor.controller.control = bigColor;
bigColor.controller.control = smColor;