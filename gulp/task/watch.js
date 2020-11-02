const configuration = require('../configuration');
const gulp = require('gulp');

gulp.task('watch', () => {
    gulp.watch([configuration.path.watch.data, configuration.path.watch.html], gulp.series('html', 'server:reload'));
    gulp.watch(configuration.path.watch.image.main, gulp.series('image:main', 'server:reload'));
    gulp.watch(configuration.path.watch.image.sprite, gulp.series('image:sprite', 'server:reload'));
    gulp.watch(configuration.path.watch.script, gulp.series('script:main', 'server:reload'));
    gulp.watch(configuration.path.watch.style, gulp.series('style'));
});