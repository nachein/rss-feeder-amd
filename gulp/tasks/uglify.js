var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var config = require('../config');

gulp.task('uglify', ['lint', 'build'], function () { //, 
  var srcs = [config.uglify.src];

  gulp.src(srcs)
    .pipe(concat('bundle.min.js'))
    .pipe(gulp.dest(config.uglify.dest))
    .pipe(uglify({outSourceMaps: false}))
    .pipe(gulp.dest(config.uglify.dest));
});