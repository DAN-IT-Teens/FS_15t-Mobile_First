const browserSync = require('browser-sync').create();
const { watch } = require("../watchers/watch.js");

function initProject() {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    })

    watch(browserSync);
}

module.exports = {
    initProject
}