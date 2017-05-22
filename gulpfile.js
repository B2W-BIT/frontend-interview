var gulp 	   = require('gulp'),
		plumber  = require('gulp-plumber'),
		logger   = require('gulp-logger'),
		sass 	   = require('gulp-sass'),
		uglify   = require('gulp-uglify'),
		concat   = require('gulp-concat')
		jshint   = require('gulp-jshint'),
		imagemin = require('gulp-imagemin'),
		htmlmin  = require('gulp-html-minifier'),
		server   = require('gulp-webserver'),
		zip 		 = require('gulp-zip');

// gulp plumber error handler
var onError = function (error) {
  console.log(error.message);
  this.emit('end');
}

// compile scss
gulp.task('sass', function(){
	return gulp.src('src/scss/**/*.scss')
		.pipe(plumber({errorHandler: onError}))
		.pipe(logger({
			before: 'starting sass task...',
			after: 'sass task complete!',
			extname: '.scss',
			showChange: true
		}))
		.pipe(sass({outputStyle: 'compressed'}))
		.pipe(gulp.dest('app/assets/css/'));
});

// js minification and concatenation
gulp.task('scripts', function() {
  return gulp.src([
		'src/js/functions.js',
		'src/js/counters.js',
		'src/js/followers.js',
		'src/js/medias.js',
		'src/js/profile.js',
		'src/js/timeline.js',
    'src/js/trends.js'
  ])
  	.pipe(plumber({errorHandler: onError}))
		.pipe(logger({
			before: 'starting scripts task...',
			after: 'scripts task complete!',
			extname: '.js',
			showChange: true
		}))
	  .pipe(concat('app.min.js'))
	  .pipe(uglify())
	  .pipe(gulp.dest('app/assets/js/'));
});

// js hint
gulp.task('hint', function(){
	return gulp.src('src/js/**/*.js')
		.pipe(plumber({errorHandler: onError}))
		.pipe(logger({
			before: 'starting hint task...',
			after: 'hint task complete!',
			showChange: true
		}))
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// image optimization
gulp.task('images', function(){
	return gulp.src('src/img/**/*')
		.pipe(plumber({errorHandler: onError}))
		.pipe(logger({
			before: 'starting images task...',
			after: 'images task complete!',
			showChange: true
		}))
		.pipe(imagemin({
		  interlaced: true,
		  progressive: true,
		  optimizationLevel: 7,
		  svgoPlugins: [{removeViewBox: true}]
		}))
		.pipe(gulp.dest('app/assets/img/'))
});

// watch files
gulp.task('watch', function(){
	gulp.watch('src/js/**/*.js', ['scripts']);
	gulp.watch('src/js/**/*.js', ['hint']);
	gulp.watch('src/scss/**/*.scss', ['sass']);
	gulp.watch('src/img/**/*', ['images']);
});

// server
gulp.task('server', function(){
	return gulp.src('app')
		.pipe(server({
			port: '4000',
			livereload: true,
			open: true
		}));
});

// default task
gulp.task('default', ['sass', 'scripts', 'hint', 'images', 'watch', 'server']);