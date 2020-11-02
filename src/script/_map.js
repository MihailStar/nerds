$(function() {
    const $map = $('#map');

    if ($map.length) {
        ymaps.ready(() => {
            const map = new ymaps.Map($map[0], {
                center: [59.939130, 30.321540], // [↓x↑, ←y→]
                controls: [],
                zoom: 17
            }, {
                suppressMapOpenBlock: true
            });

            map.behaviors.disable('scrollZoom');

            const placemark = new ymaps.Placemark([59.938750, 30.323150], {}, {
                cursor: 'auto',
                iconImageHref: './image/placemark.png',
                iconImageOffset: [-50, -190],
                iconImageSize: [232, 190],
                iconLayout: 'default#image'
            });

            map.geoObjects.add(placemark);
        });
    }
});