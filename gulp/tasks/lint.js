var gulp = require('gulp');
var jshint = require('gulp-jshint');
var gutil = require('gulp-util');
var config = require('../config');

gulp.task('lint', function() {
  gulp.src(config.lint.files)
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .on('error', gutil.log);
});