var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('webserver', function() {
  connect.server({
    port: 8000,
    livereload: false,
    root: 'app'    
  })
});

gulp.task('html', function() {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

// Apparently, AMP doesn't like LiveReload

gulp.task('default', ['webserver']);
