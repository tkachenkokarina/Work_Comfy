const swiper = new Swiper('.swiper', {    
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
    breakpoints: {
        320: {
            spaceBetween: 32
        },        
        600.98: {
            spaceBetween: 50
        },
        767.98: {
            spaceBetween: 76
        }
    }
});