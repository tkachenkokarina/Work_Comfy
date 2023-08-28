$(document).ready(function () {
    $('.question-philipsais__title').click(function (event) {
        if ($('.question-philipsais-1').hasClass('one')) {
            $('.question-philipsais__title').not($(this)).removeClass('active');
            $('.question-philipsais__text').not($(this).next()).slideUp(300);
        }
        $(this).toggleClass('active').next().slideToggle(300);
    });
});

// $(document).ready(function () {
//     $('.block__title').click(function (event) {
//         if ($('.block').hasClass('one')) {
//             $('.block__title').not($(this)).removeClass('active');
//             $('.block__text').not($(this).next()).slideUp(300);
//         }
//         $(this).toggleClass('active').next().slideToggle(300);
//     });
// });