'use strict';

const gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    options = {
        port: 9005,
        root: ['src'],
        devBase: 'http://localhost:',
        browser: 'chrome',
    };

gulp.task('connect', () => (
    connect.server({
        root: options.root,
        port: options.port
    })
));

gulp.task('open', () => {
    const openOptions = {
        uri: `${options.devBase}${options.port}`,
        app: options.browser
    };
    gulp.src(__filename)
    .pipe(open(openOptions));
});

gulp.task('default', ['connect', 'open']);
