const extend = require('deep-extend')

function devDependenciesJson(files = {}) {
    extend(files.pkg, {
        "devDependencies": {
            "aliasify": "^2.0.0",
            "ansi-html": "^0.0.7",
            "autoprefixer": "^7.0.0",
            "babel-cli": "^6.24.1",
            "babel-core": "^6.5.2",
            "babel-eslint": "^7.1.1",
            "babel-loader": "^7.0.0",
            "babel-plugin-transform-runtime": "^6.15.0",
            "babel-preset-env": "^1.4.0",
            "babel-preset-es2015": "^6.5.0",
            "babel-preset-es2015-native-modules": "^6.9.4",
            "babel-runtime": "^6.11.6",
            "babelify": "^7.2.0",
            "browser-sync": "^2.11.8",
            "browserify": "^14.0.0",
            "browserify-shim": "^3.8.12",
            "chalk": "^1.1.3",
            "critical": "^0.8.4",
            "cssnano": "^3.5.2",
            "del": "^2.2.0",
            "eslint": "^3.15.0",
            "eslint-config-airbnb": "^15.0.1",
            "eslint-config-airbnb-base": "^11.1.0",
            "eslint-config-vue": "^2.0.2",
            "eslint-plugin-html": "^2.0.1",
            "eslint-plugin-import": "^2.2.0",
            "eslint-plugin-jsx-a11y": "^5.0.3",
            "eslint-plugin-react": "^7.0.1",
            "eslint-plugin-vue": "^2.0.1",
            "fancy-log": "^1.3.0",
            "fg-loadcss": "^1.3.1",
            "gulp": "^3.9.1",
            "gulp-changed": "^3.0.0",
            "gulp-cheerio": "^0.6.2",
            "gulp-concat": "^2.6.0",
            "gulp-data": "^1.2.1",
            "gulp-debug": "^3.0.0",
            "gulp-favicons": "^2.2.7",
            "gulp-if": "^2.0.2",
            "gulp-imagemin": "^3.3.0",
            "gulp-load-plugins": "^1.2.0",
            "gulp-modernizr": "0.0.0",
            "gulp-notify": "^3.0.0",
            "gulp-plumber": "^1.1.0",
            "gulp-postcss": "^7.0.0",
            "gulp-rename": "^1.2.2",
            "gulp-sass": "^3.0.0",
            "gulp-size": "^2.0.0",
            "gulp-sourcemaps": "^2.6.0",
            "gulp-stylelint": "^3.7.0",
            "gulp-svg-sprite": "^1.2.19",
            "gulp-twig": "^0.7.0",
            "gulp-uglify": "^3.0.0",
            "gulp-util": "^3.0.7",
            "gulp-watch": "^4.3.5",
            "imagemin-gifsicle": "^5.1.0",
            "imagemin-jpeg-recompress": "^5.0.0",
            "imagemin-jpegtran": "^5.0.2",
            "imagemin-optipng": "^5.2.1",
            "imagemin-pngquant": "^5.0.0",
            "imagemin-svgo": "^5.0.0",
            "postcss-assets": "^4.1.0",
            "postcss-flexbugs-fixes": "^3.0.0",
            "postcss-normalize": "^3.0.0",
            "postcss-responsive-type": "^0.5.1",
            "postcss-selector-matches": "^3.0.1",
            "postcss-short-size": "^3.0.0",
            "postcss-svg": "^2.0.0",
            "require-dir": "^0.3.2",
            "run-sequence": "^1.1.5",
            "stylelint": "^7.8.0",
            "stylelint-config-sass-guidelines": "^2.0.0",
            "stylelint-order": "^0.4.4",
            "stylelint-scss": "^1.4.1",
            "stylelint-selector-bem-pattern": "^1.0.0",
            "utils-merge": "^1.0.0",
            "vinyl-buffer": "^1.0.0",
            "vinyl-source-stream": "^1.1.0",
            "watchify": "^3.7.0",
            "yargs": "^8.0.1"
        }
    })
}

module.exports = devDependenciesJson
