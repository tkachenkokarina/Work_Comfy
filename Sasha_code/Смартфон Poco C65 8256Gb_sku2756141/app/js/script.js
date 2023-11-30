const swiper = new Swiper('.swiper', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplayDelay: 2500,
    autoplayDisableOnInteraction: false,   
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    
});