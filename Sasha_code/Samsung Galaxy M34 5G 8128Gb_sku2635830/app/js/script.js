const swiper = new Swiper('.samsungm34__swiper', {    
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
            spaceBetween: 36
        },        
        600.98: {
            spaceBetween: 50
        },
        767.98: {
            spaceBetween: 76
        }
    }
});

const swiperCamera = new Swiper('.samsungm34-colors__swiper', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.samsungm34-colors__next',
        prevEl: '.samsungm34-colors__prev',
    },
    pagination: {
        el: '.samsungm34-colors__pagination',
        type: 'bullets',
        clickable: true,
    },    
    
});