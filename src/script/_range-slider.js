$(function() {
    const $rangeSlider = $('#range-slider');
    const $minimum = $('#minimum');
    const $maximum = $('#maximum');

    const min = Number($rangeSlider.data('min'));
    const max = Number($rangeSlider.data('max'));
    const step = Number($rangeSlider.data('step'));

    if ($rangeSlider.length) {
        noUiSlider.create($rangeSlider[0], {
            connect: true,
            range: {
                min,
                max
            },
            start: [
                Number($rangeSlider.data('init-min')),
                Number($rangeSlider.data('init-max'))
            ],
            step
        });

        $rangeSlider[0].noUiSlider.on('update', (values) => {
            const [currentMin, currentMax] = values;

            $minimum.val(currentMin.slice(0, -3));
            $maximum.val(currentMax.slice(0, -3));
        });

        $rangeSlider
            .find('.noUi-handle-lower')
            .on('keydown', (event) => {
                const [currentMin] = $rangeSlider[0].noUiSlider.get()
                    .map(Number);
                const keyCode = event.keyCode || event.which;

                if (keyCode === 37 || keyCode === 40) {
                    event.preventDefault();

                    $rangeSlider[0].noUiSlider.set(
                        [currentMin - step, null]
                    );
                }

                if (keyCode === 38 || keyCode === 39) {
                    event.preventDefault();

                    $rangeSlider[0].noUiSlider.set(
                        [currentMin + step, null]
                    );
                }
            });

        $rangeSlider
            .find('.noUi-handle-upper')
            .on('keydown', (event) => {
                const [, currentMax] = $rangeSlider[0].noUiSlider.get()
                    .map(Number);
                const keyCode = event.keyCode || event.which;

                if (keyCode === 37 || keyCode === 40) {
                    event.preventDefault();

                    $rangeSlider[0].noUiSlider.set(
                        [null, currentMax - step]
                    );
                }

                if (keyCode === 38 || keyCode === 39) {
                    event.preventDefault();

                    $rangeSlider[0].noUiSlider.set(
                        [null, currentMax + step]
                    );
                }
            });

        $minimum.on('change', () => {
            const [currentMin, currentMax] = [
                $minimum.val(),
                $maximum.val()
            ].map(Number);

            let values = {
                min: null,
                max: null
            };

            if (currentMin < min) {
                values.min = min;
            } else if (currentMin > max) {
                values.min = values.max = max;
            } else {
                values.min = currentMin;
                if (currentMin > currentMax) {
                    values.max = currentMin;
                }
            }

            $rangeSlider[0].noUiSlider.set(
                [values.min, values.max]
            );
        });

        $maximum.on('change', () => {
            const [currentMin, currentMax] = [
                $minimum.val(),
                $maximum.val()
            ].map(Number);

            let values = {
                min: null,
                max: null
            };

            if (currentMax > max) {
                values.max = max;
            } else if (currentMax < min) {
                values.max = values.min = min;
            } else {
                values.max = currentMax;
                if (currentMax < currentMin) {
                    values.min = currentMax;
                }
            }

            $rangeSlider[0].noUiSlider.set(
                [values.min, values.max]
            );
        });
    }
});