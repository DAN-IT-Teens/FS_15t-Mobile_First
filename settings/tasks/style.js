const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass')(require('sass'));

function styleTask() {
    return gulp.src("./src/style/*.scss")
        .pipe(sass({
            errorLogToConsole: true
        }))
        .pipe(cleanCSS())
        .pipe(gulp.dest('build/css'));
}

module.exports = {
    styleTask
}
