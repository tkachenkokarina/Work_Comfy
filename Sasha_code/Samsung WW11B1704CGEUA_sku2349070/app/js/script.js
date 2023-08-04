const swiper = new Swiper('.swiper', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,    
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