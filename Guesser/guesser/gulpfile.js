'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
    sass:['./src/styles/scss/**/*.scss'],
    sassComponents: ['./src/components/**/*.scss']
}

gulp.task('sass', function(done){
    gulp.src('./src/styles/scss/**/*.scss')
        .pipe(sass()
        .on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(cssnano())
    .pipe(gulp.dest('./src/styles/css/'))
    .on('end', done);
});

gulp.task('watch', function(){
    gulp.watch(paths.sass, gulp.series('sass'));
    gulp.watch(paths.sassComponents, gulp.series('sass'));    
});

gulp.task('default', gulp.series('watch'));