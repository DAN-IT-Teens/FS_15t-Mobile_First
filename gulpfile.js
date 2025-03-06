const { initProject } = require("./settings/tasks/init.js");
const { htmlTask } = require("./settings/tasks/html.js");
const { styleTask } = require("./settings/tasks/style.js");
const { scriptTask } = require("./settings/tasks/script.js");
const gulp = require('gulp');

exports.default = gulp.series(htmlTask, styleTask, scriptTask, initProject);