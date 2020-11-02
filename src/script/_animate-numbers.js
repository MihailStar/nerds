$(function() {
    const $numbers = $('#animate-numbers').find('span');
    const transitionDelay = 200 * 3;

    if ($numbers.length) {
        $numbers.each((_, number) => {
            const $number = $(number);
            const to = $number.text();

            $number.text('0');
            $number.appear(() => {
                $number.animateNumber({
                    number: to
                }, transitionDelay);
            }, {
                accY: -200
            });
        });
    }
});