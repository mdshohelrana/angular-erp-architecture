var gulp = require('gulp');
var config = require('../gulp.config')();
var del = require('del');

/* Run all clean tasks */
gulp.task('clean', ['clean-build']);

/* delete dist folder */
gulp.task('clean-build', function () {
    return del([config.build.path]);
});