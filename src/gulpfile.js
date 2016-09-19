var gulp = require('gulp');
var stylus = require('gulp-stylus');
var bootstrap = require('bootstrap-styl');

gulp.task('compile',function () {
	gulp.src('assets/css/index.styl')
		.pipe(stylus({
			use: [bootstrap()]
		}))
		.pipe(gulp.dest('../public/static/css'));
});

gulp.task("watch:compile",function () {
	gulp.watch('**/*.styl',['compile']);
});