const directory = {
    input: 'src',
    output: 'dist'
};

const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV === 'development';

const path = {
    input: {
        data: `./${directory.input}/data/data.json`,
        html: `./${directory.input}/*.html`,
        image: {
            main: [
                `./${directory.input}/image/**/*.*`,
                `!./${directory.input}/image/sprite/**/*.*`
            ],
            sprite: `./${directory.input}/image/sprite/**/*.svg`
        },
        script: {
            library: [
                './node_modules/jquery/dist/jquery.min.js',
                './node_modules/jquery.animate-number/jquery.animateNumber.min.js',
                './node_modules/jquery.appear/jquery.appear.js',
                './node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
                './node_modules/nouislider/distribute/nouislider.min.js',
                './node_modules/slick-carousel/slick/slick.min.js'
            ],
            main: `./${directory.input}/script/**/*.js`
        },
        style: `./${directory.input}/style/main.scss`
    },
    output: {
        html: `./${directory.output}`,
        image: {
            main: `./${directory.output}/image`,
            sprite: `./${directory.input}/template`
        },
        script: `./${directory.output}/script`,
        style: `./${directory.output}/style`
    },
    watch: {
        data: `./${directory.input}/data/data.json`,
        html: `./${directory.input}/**/*.html`,
        image: {
            main: [
                `./${directory.input}/image/**/*.*`,
                `!./${directory.input}/image/sprite/**/*.*`
            ],
            sprite: `./${directory.input}/image/sprite/**/*.svg`
        },
        script: `./${directory.input}/script/**/*.js`,
        style: `./${directory.input}/style/**/*.scss`
    }
};

const port = 3000;

module.exports.directory = directory;
module.exports.isDevelopment = isDevelopment;
module.exports.path = path;
module.exports.port = port;