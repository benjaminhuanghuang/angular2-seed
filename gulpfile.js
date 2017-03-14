var gulp = require('gulp'),
    gp_clean = require('gulp-clean'),
    gp_typescript = require('gulp-typescript');

/// Define paths
var srcPaths = {
    app: ['app']
};

var destPaths = {
    app: 'wwwroot/app/'
};
    
// Delete wwwroot/app contents
gulp.task('app_clean', function () {
    return gulp.src(srcPaths.app + "*.js", {
            read: false
        })
        .pipe(gp_clean({
            force: true
        }));
});

// gulp.task('default', ['app', 'js', 'watch']);