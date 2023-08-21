const swiper = new Swiper('.swiper', {
    speed: 500,
    slidesPerView: 'auto',
    spaceBetween: 20,
    autoheight: true,
    navigation: {
        nextEl: '.samsung-ue__next',
        prevEl: '.samsung-ue__prev',
    },
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