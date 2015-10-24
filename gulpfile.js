// grab gulp packages
var gulp = require('gulp'),
    gutil = require('gulp-util');

// Include our plugins
// General
var concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');

// CSS
var sass = require('gulp-sass');

// Concatenate and minify JS
var jshint = require('gulp-jshint');


// Lint task
gulp.task('lint', function() {
  return gulp.src('source/javscript/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
})

// Compile Sass
gulp.task('sass', function() {
  return gulp.src('source/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/assets/stylesheets'));
})

// Concat & Minify JS
gulp.task('scripts', function() {
  return gulp.src('source/javascript/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/assets/javascript'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/assets/javascript'));
});

// Watch files for changes

// Default task


gulp.task('default', function() {
  return gutil.log('Gulp is running!');
});


gulp.watch('');