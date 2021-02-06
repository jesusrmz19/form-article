const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

// The following will compilre scss into css
function style() {
    // 1. Where is the scss file
    return gulp.src('./scss/**/*.scss')
    // 2. Pass the file through the sass compiler
    .pipe(sass())
    // 3. Where do I save the compiled CSS?
    .pipe(gulp.dest('./css'))
    // 4. Stream changes to all browser
    .pipe(browserSync.stream())
}

// The following function watch for changes and update automatically

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
    gulp.watch('./js/**/*.js').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;