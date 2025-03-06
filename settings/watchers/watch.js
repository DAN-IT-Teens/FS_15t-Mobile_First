const gulp = require('gulp');
const { htmlTask } = require("../tasks/html.js");
const { styleTask } = require("../tasks/style.js");
const { scriptTask } = require("../tasks/script.js");

function watch(browserSync) {
    gulp.watch("src/*.html", htmlTask).on("change", browserSync.reload);
    gulp.watch("src/style/*.scss", styleTask).on("change", browserSync.reload);
    gulp.watch("src/scripts/*.js", scriptTask).on("change", browserSync.reload);
}

module.exports = {
    watch
}