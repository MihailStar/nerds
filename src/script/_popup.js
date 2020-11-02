$(function() {
    const $popup = $('#popup');
    const $openPopup = $('#open-popup');
    const $closePopup = $('#close-popup');
    const transitionDelay = 200 * 3;

    if ($popup.length) {
        $openPopup.magnificPopup({
            items: {
                src: $popup,
                type: 'inline'
            },
            removalDelay: transitionDelay,
            showCloseBtn: false
        });

        $closePopup.on('click', () => {
            $.magnificPopup.close();
        });
    }
});