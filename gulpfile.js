import gulp from 'gulp';
import concat from 'gulp-concat';
import babel from 'gulp-babel-minify';
import imageMin from 'gulp-imagemin';
import cssMin from 'gulp-css-minify';
import order from 'gulp-order';

const SRC_FOLDER = './app';
const BUILD_FOLDER = './build';
const JS_FILES_PATH = SRC_FOLDER + '/js/**/*.js'
const IMG_FILES_PATH = SRC_FOLDER + '/img/**'
const CSS_FILES_PATH = SRC_FOLDER + '/css/**/*.css'


async function jsCompilation() {
    gulp.src(JS_FILES_PATH)
        .pipe(babel())
        .pipe(order([
            'burgers.js',
            'app.js'
        ]))
        .pipe(concat('result.js'))
        .pipe(gulp.dest(BUILD_FOLDER))
}
async function imgCompilation() {
	gulp.src(IMG_FILES_PATH)
		.pipe(imageMin())
		.pipe(gulp.dest(BUILD_FOLDER + '/img'))
}
async function cssCompilation() {
	gulp.src(CSS_FILES_PATH)
		.pipe(cssMin())
		.pipe(gulp.dest(BUILD_FOLDER + '/css'))
}
gulp.task('watch-js', function () {
    gulp.watch(JS_FILES_PATH, jsCompilation);
})
gulp.task('watch-img', function () {
    gulp.watch(IMG_FILES_PATH, imgCompilation);
})
gulp.task('watch-css', function () {
    gulp.watch(CSS_FILES_PATH, cssCompilation);
})
gulp.task('watch', gulp.parallel('watch-js', 'watch-img', 'watch-css'));
gulp.task('default', gulp.parallel(jsCompilation, imgCompilation, cssCompilation));