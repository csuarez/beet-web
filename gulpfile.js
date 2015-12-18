var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass({outputStyle: 'compressed'}))
        .pipe(gulp.dest('./css/'));
});


//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
});