var gulp = require('gulp');
var config = require('../gulp.config')();
var ts = require('gulp-typescript');
var tslint = require('gulp-tslint');
var sourcemaps = require('gulp-sourcemaps');
var path = require('path');
var preprocess = require('gulp-preprocess');
var wait = require('gulp-wait');

/* Initialize TS Project */
var tsProject = ts.createProject(config.root + 'tsconfig.json');
var typingFiles = [
    'typings/browser.d.ts'
];
var tsFiles = [].concat(config.tsFiles);

gulp.task('compile', [], function () {
    return compileTs(config.tsFiles);
});

function compileTs(files, watchMode) {
    watchMode = watchMode || false;
    var allFiles = [].concat(files, typingFiles);
    var res = gulp.src(allFiles, {
            base: '.'
        })
        .pipe(tslint())
        .pipe(tslint.report('prose', {
            summarizeFailureOutput: true,
            emitError: !watchMode
        }))
        .pipe(preprocess())
        .pipe(sourcemaps.init())
        .pipe(ts(tsProject))
        .on('error', function () {
            process.exit(1);
        });
    return res.js
        .pipe(sourcemaps.write('.', {
              // Return relative source map root directories per file.
              includeContent: false,
              sourceRoot: function (file) {
                var sourceFile = path.join(file.cwd, file.sourceMap.file);
                return path.relative(path.dirname(sourceFile), file.cwd);
              }
            }))
        .pipe(gulp.dest(config.root));
}