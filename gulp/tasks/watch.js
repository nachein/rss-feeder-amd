var gulp = require('gulp');
var config = require('../config');

gulp.task('watch', function () {
  gulp.watch(config.watch.js, ['lint']);
  gulp.watch([config.watch.html, config.watch.js], ['html']);
});