// var gulp        = require('gulp');
// exports.default = style;

function browserSync (browserSync) {
    var browserSync = require('browser-sync').create();
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
}

function defaultTask(cb) {
    // place code for your default task here
    cb();
  }
  
  exports.default = browserSync
  exports.default = defaultTask