var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('js:common', function () {
    return gulp.src('public/scroller.js')
        .pipe(uglify())
        .pipe(gulp.dest('assets'));
});

gulp.task('watch:js', ['js:common'], function () {
    gulp.watch([
        'public/scroller.js'
    ], ['js:common']);
});