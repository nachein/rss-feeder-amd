var gulp = require('gulp')
,	amdOptimize = require('amd-optimize')
,	concat = require('gulp-concat')
,	config = require('../config').javascript;

console.log(config.amdConfig);
gulp.task('javascript', function() {
  gulp.src(config.src)
    .pipe(amdOptimize(config.entryPoint, config.amdConfig))
    .pipe(concat(config.destFile))
    .pipe(gulp.dest(config.dest));
});