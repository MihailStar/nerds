const configuration = require('../configuration');
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const inject = require('gulp-inject');
const newer = require('gulp-newer');
const rename = require('gulp-rename');
const svgstore = require('gulp-svgstore');

const imageminConfiguration = [
    imagemin.gifsicle({
        interlaced: true
    }),
    imagemin.jpegtran({
        progressive: true
    }),
    imagemin.optipng({
        optimizationLevel: 5
    }),
    imagemin.svgo({
        plugins: [
            {
                cleanupIDs: false
            },
            {
                removeViewBox: false
            }
        ]
    })
];

gulp.task('image:main', () => {
    return gulp
        .src(configuration.path.input.image.main)
        .pipe(newer(configuration.path.output.image.main))
        .pipe(imagemin(imageminConfiguration))
        .pipe(gulp.dest(configuration.path.output.image.main));
});

gulp.task('image:sprite', () => {
    const spriteData = gulp
        .src(configuration.path.input.image.sprite)
        .pipe(rename({
            prefix: 'icon-'
        }))
        .pipe(imagemin(imageminConfiguration))
        .pipe(svgstore({
            inlineSvg: true
        }));
    return gulp
        .src(`${configuration.path.output.image.sprite}/_sprite.html`)
        .pipe(inject(spriteData, {
            transform: (filePath, file) => {
                return file.contents.toString();
            }
        }))
        .pipe(gulp.dest(configuration.path.output.image.sprite));
});