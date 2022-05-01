'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('workflow', function(){
    gulp.src('./src/styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
    .pipe(gulp.dest('./styles/css/'))
});

gulp.task('default', function(){
    gulp.watch('./src/styles/**/*.scss',['workflow']);    
});