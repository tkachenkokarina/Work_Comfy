let myGlowLeft = new Swiper('.glow-oppoa18-left__slider', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination-left',
        type: 'bullets',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

let myGlowRight = new Swiper('.glow-oppoa18-right__slider', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});
myGlowLeft.controller.control = myGlowRight;
myGlowRight.controller.control = myGlowLeft;


let myFotoLeft = new Swiper('.foto-oppoa18-left__slider', {
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});

let myFotoRight = new Swiper('.foto-oppoa18-right__slider', {
    speed: 800,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.foto-oppoa18-right-pagination',
        type: 'bullets',
        clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
});