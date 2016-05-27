var gulp = require('gulp');
var react = require('gulp-react');
var concat = require('gulp-concat');
var browserify = require('gulp-browserify');

gulp.task('html', function () {
	return gulp.src('app/index.html')
		.pipe(gulp.dest('dist'));
});
gulp.task('js', function () {
	return gulp.src('app/js/**/*')
		.pipe(react())
    .pipe(concat('app.js'))
    .pipe(browserify({
		  insertGlobals : true
		}))
		.pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['html', 'js']);
