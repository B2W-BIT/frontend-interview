var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('server', function (cb) {
  exec('node app.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
});

gulp.task('default', ['server'], function() {
  // place code for your default task here
});