'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let autoprefixer = require('gulp-autoprefixer');
let browserSync = require('browser-sync').create(); 

// SCSS compile
gulp.task('sass', function () {
	return gulp.src('scss/**/*.scss')
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest('css'))
		.pipe(browserSync.stream());
});

// BrowserSync (Live Reload)
gulp.task('browserSync', () => {
  	browserSync.init({
		server: {
      		baseDir: "./"
    	}
	});
});

gulp.task('watch', ['browserSync', 'sass'], function () {
	gulp.watch('./scss/**/*.scss', ['sass']);
	// Reloads the browser whenever HTML or JS files change
	gulp.watch('./*.html', browserSync.reload); 
	gulp.watch('./js/**/*.js', browserSync.reload); 
});

gulp.task('default', ['watch']);
