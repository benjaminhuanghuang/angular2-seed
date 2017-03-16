var gulp = require('gulp'),
    gp_clean = require('gulp-clean'),
    gp_typescript = require('gulp-typescript');

/// Define paths
var srcPaths = {
    src: ['src']
};

var destPaths = {
    app: 'app/'
};
    
// Delete wwwroot/app contents
gulp.task('clean', function () {
    return gulp.src(srcPaths.app + "*", {
            read: false
        })
        .pipe(gp_clean({
            force: true
        }));
});

// Copy all JS files from external libraries to wwwroot/js
gulp.task('html', function () {
    gulp.src(srcPaths.src + "/**/*.html")
        .pipe(gulp.dest(destPaths.app));
});

gulp.task('watch', function () {
    gulp.watch([srcPaths.src+"/**/*.html"], ['html']);
});
gulp.task('default', ['html', 'watch']);