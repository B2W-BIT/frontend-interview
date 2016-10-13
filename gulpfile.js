const gulp = require('gulp');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
 
gulp.task('sass', () => {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS({keepSpecialComments: 0}))
    .pipe(gulp.dest('./public/dist/css'));
});
 
gulp.task('sass:watch', () => {
  gulp.watch('./src/sass/**/*.scss', ['sass']);

  gulp.src("./node_modules/bootstrap-sass/assets/fonts/bootstrap/**.*")
      .pipe(gulp.dest('./public/dist/fonts/'));
});

gulp.task('default', ['sass', 'sass:watch']);