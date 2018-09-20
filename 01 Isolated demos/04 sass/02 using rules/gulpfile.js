'use strict';

const gulp = require('gulp'),
    connect = require('gulp-connect'),
    open = require('gulp-open'),
    sass = require('gulp-sass'),
    options = {
        port: 9005,
        root: ['src'],
        devBase: 'http://localhost:',
        browser: 'chrome',
        sassFolder: './src/sass/**/*.scss',
        cssCompile: './src/content/compile_css'
    };

gulp.task('connect', () => {
    connect.server({
        root: options.root,
        port: options.port
    });
});

gulp.task('open', () => {
    const openOptions = {
        uri: options.devBase + options.port,
        app: options.browser
    };
    gulp.src(__filename)
        .pipe(open(openOptions));
});

gulp.task('sass', () =>
    gulp.src(options.sassFolder)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest(options.cssCompile))
);

// gulp.task('copy', function () {
//     gulp.src('./node_modules/bootstrap-sass/assets/javascripts/bootstrap.js')
//         .pipe(gulp.dest('src/js'));

//     gulp.src('./node_modules/jquery/dist/jquery.js')
//         .pipe(gulp.dest('src/js'));
// })

gulp.task('watch', function () {
    gulp.watch(options.sassFolder, ['sass']);
});

gulp.task('default', ['connect', 'open', 'watch']);


