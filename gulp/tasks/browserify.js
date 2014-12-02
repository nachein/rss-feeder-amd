var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream')
var config = require('../config');

gulp.task('browserify', function(){
	var bundleStream = browserify(config.browserify.entryPoint).bundle();
	    return bundleStream
	        .pipe(source('bundle.js'))
	        //.pipe(streamify(uglify()))
	        .pipe(gulp.dest(config.browserify.dest));
});