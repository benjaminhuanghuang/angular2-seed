## watch
gulp.task('watch', function () {
    gulp.watch([srcPaths.src+"/**/*.html"], ['html']);
});