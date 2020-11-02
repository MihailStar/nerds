$(function() {
    const $preloader = $('#preloader');
    const transitionDelay = 200 * 3;

    if ($preloader.length) {
        $(window).on('load', () => {
            $preloader.fadeOut(transitionDelay);
        });
    }
});