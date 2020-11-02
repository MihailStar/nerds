$(function() {
    const $carousel = $('#carousel');
    const transitionDelay = 200 * 3;

    if ($carousel.length) {
        $carousel.slick({
            arrows: false,
            dots: true,
            speed: transitionDelay
        });

        $carousel
            .find('.slick-dots button')
            .wrapInner('<span class="visually-hidden"></span>');
    }
});