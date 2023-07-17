const swiper = new Swiper('.swiper', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.slider-buton-next',
        prevEl: '.slider-button-prev',
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