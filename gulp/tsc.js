'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var ts = require('gulp-typescript');

gulp.task('ts-compile', function () {
    return gulp.src(path.join(conf.paths.src, '/**/*.ts'))
        .pipe(ts({
            noImplicitAny: true,
            target: 'es5'
        }))
        .pipe(gulp.dest(path.join(conf.paths.src, '/app/middlewares')));
});