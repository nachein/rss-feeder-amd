var gulp = require('gulp');
var gutil = require('gulp-util');
var processhtml = require('gulp-processhtml');
var config = require('../config');

gulp.task('processhtml', function() {
  gulp.src(config.processhtml.htmls)
    .pipe(processhtml('index.html'))
    .pipe(gulp.dest(config.processhtml.dest))
    .on('error', gutil.log);
});