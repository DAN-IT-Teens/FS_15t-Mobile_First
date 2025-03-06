const gulp = require('gulp');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');


function scriptTask() {
    return gulp.src("./src/scripts/*.js")
        .pipe(babel({ presets: ['@babel/preset-env'] }))
        .pipe(uglify())
        .pipe(gulp.dest('build/scripts'))
}

module.exports = {
    scriptTask
}