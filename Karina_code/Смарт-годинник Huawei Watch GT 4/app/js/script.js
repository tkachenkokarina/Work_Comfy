const swiper = new Swiper('.clockface-smarthuaweigt__slider', {
    speed: 1000,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
    },
});

// $(document).ready(function () {
//     $('.sleep-smarthuaweigt__card-title').click(function (event) {
//         if ($('.sleep-smarthuaweigt__card').hasClass('one')) {
//             $('.sleep-smarthuaweigt__card-title').not($(this)).removeClass('active');
//             $('.sleep-smarthuaweigt__card-text').not($(this).next()).slideUp(300);
//         }
//         $(this).toggleClass('active').next().slideToggle(300);
//     });
// });