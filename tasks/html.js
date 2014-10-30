/**
 * Created by Davinci28 on 2014-10-29.
 */
'use strict'

var gulp = require('gulp')
var wiredep = require('wiredep').stream
var preprocess = require('gulp-preprocess')

gulp.task('inject', function() {
	return gulp.src('app/index.html')
		.pipe(wiredep({
			directory: 'app/lib'
		}))
		.pipe(preprocess())
		.pipe(gulp.dest('.tmp'))
})