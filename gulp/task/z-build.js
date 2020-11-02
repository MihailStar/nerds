const gulp = require('gulp');

gulp.task('build', gulp.series('image:sprite', gulp.parallel(
    'html',
    'image:main',
    'script:library',
    'script:main',
    'style'
)));