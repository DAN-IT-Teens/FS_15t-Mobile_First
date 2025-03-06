const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

function htmlTask() {
    return gulp.src("./src/*.html")
        .pipe(htmlmin({
            collapseWhitespace: true,
            removeComments: true,
            removeEmptyAttributes: true,
            removeRedundantAttributes: true,
        }))
        .pipe(gulp.dest('build'))
}

module.exports = {
    htmlTask
}