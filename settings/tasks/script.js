const gulp = require('gulp');
const uglify = require('gulp-uglify');

function scriptTask() {
    return gulp.src("./src/scripts/*.js")
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts'))
}

module.exports = {
    scriptTask
}