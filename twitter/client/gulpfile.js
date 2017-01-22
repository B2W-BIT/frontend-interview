const angularTemplateCache = require('gulp-angular-templatecache');
const concat = require('gulp-concat');
const gulp = require('gulp');
const minifyCss = require('gulp-minify-css');
const minifyHtml = require('gulp-minify-html');
const ngAnnotate = require('gulp-ng-annotate');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps')
const uglify = require('gulp-uglify');

const DEST = './../server/public';

gulp.task('app:stylesheets', function () {
    return gulp.src(['stylesheets/**/*.scss'])
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('app.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest(DEST + '/stylesheets'));
});

gulp.task('app:scripts', function () {
    return gulp.src(['!node_modules/**/*', '!gulpfile.js', '**/*.js'])
        .pipe(sourcemaps.init())
            .pipe(concat('app.min.js'))
            .pipe(ngAnnotate())
            // .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(DEST + '/scripts'));
});

gulp.task('app:index', function () {
    return gulp.src('index.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest(DEST));
});

gulp.task('vendor:fonts', function () {
    return gulp.src(['node_modules/bootstrap/fonts/**/*', 'node_modules/font-awesome/fonts/**/*'])
        .pipe(gulp.dest(DEST + '/fonts'));
});

gulp.task('app:images', function () {
    return gulp.src(['images/**/*'])
        .pipe(gulp.dest(DEST + '/images'));
});

gulp.task('app:views', function () {
    return gulp.src('views/**/*.html')
        .pipe(minifyHtml())
        .pipe(angularTemplateCache('views.min.js', {'module' : 'app.views'}))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest(DEST + '/scripts'));
});

gulp.task('vendor:stylesheets', function () {
    return gulp.src(['node_modules/bootstrap/dist/css/bootstrap.min.css', 'node_modules/font-awesome/css/font-awesome.min.css'])
        .pipe(concat('vendor.min.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest(DEST + '/stylesheets'));
});

gulp.task('vendor:scripts', function () {
    return gulp.src(['node_modules/angular/angular.min.js', 'node_modules/angular-route/angular-route.min.js', 'node_modules/angular-resource/angular-resource.min.js', 'node_modules/ng-infinite-scroll/build/ng-infinite-scroll.min.js'])
        .pipe(concat('vendor.min.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(gulp.dest(DEST + '/scripts'));
});

gulp.task('app', ['app:scripts', 'app:stylesheets', 'app:index', 'app:views', 'app:images']);

gulp.task('vendor', ['vendor:scripts', 'vendor:stylesheets', 'vendor:fonts']);

gulp.task('build', ['vendor', 'app']);

gulp.task('watch', ['build'], function () {
    gulp.watch(['**/*', '!node_modules/**/*', '!gulpfile.js'], ['app']);
});

