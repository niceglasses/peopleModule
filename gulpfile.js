// grab gulp packages
var gulp = require('gulp'),
    gutil = require('gulp-util'),
    livereload = require('gulp-livereload');

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
  return gulp.src('source/javascript/script.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
})

// Move html
gulp.task('moveHTML', function() {
  return gulp.src('source/index.html')
    .pipe(gulp.dest('public'))
    .pipe(livereload());
    
})

// Compile Sass
gulp.task('sass', function() {
  return gulp.src('source/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/assets/stylesheets'))
    .pipe(livereload());
    // .pipe(livereload());
})

// Concat & Minify JS
gulp.task('scripts', function() {
  return gulp.src('source/javascript/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('public/assets/javascript'))
    .pipe(rename('all.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/assets/javascript'))
    .pipe(livereload());
    
});

// Watch files for changes
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch('source/*.html', ['moveHTML']);
  gulp.watch('source/javascript/*js', ['lint', 'scripts']);
  gulp.watch('source/scss/*.scss', ['sass']);
});

// Default task
// gulp.task('default', function() {
//   return gutil.log('Gulp is watching!');
// });
gulp.task('default', ['lint', 'sass', 'scripts', 'watch']);
