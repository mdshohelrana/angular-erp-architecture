var gulp = require('gulp');
var runSequence = require('run-sequence');
var config = require('../gulp.config')();
var inject = require('gulp-inject');
var useref = require('gulp-useref');
var gulpif = require('gulp-if');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var mainBowerFiles = require('main-bower-files');
var Builder = require('systemjs-builder');
var zip = require('gulp-zip');

gulp.task('build', function (done) {
    runSequence('clean', 'compile', 'copy-assets', buildSJS);
    function buildSJS () {
        var builder = new Builder({ defaultJSExtensions: true, baseUrl: '.'});
        builder.loadConfig('./systemjs.conf.js')
        .then(function() {
            return builder.bundle('app/main', config.bundleName, config.systemJs.builder);
        })
        .then(function() {
            console.log('Build complete');
            done();
        })
        .catch(function (ex) {
            console.log('error:', ex);
            done('Build failed.');
        });
    }
});

gulp.task('create-zip',function(done){
    return gulp.src(config.zip.path)
		.pipe(zip(config.zip.archive))
		.pipe(gulp.dest(config.zip.dest));
});

gulp.task('copy-assets', function (done) {
    for(var fileIndex =0; fileIndex< config.files.length; fileIndex++){
        var fileItem=config.files[fileIndex];
        var dest = config.app + fileItem.src;
        console.log("Copying file "+ dest); 
        gulp.src(dest, {
            base: config.app
        })
        .pipe(gulp.dest(config.build.app));
    }
    
	gulp.src(config.root + 'web.config', {
        base: config.root
    }).pipe(gulp.dest(config.build.path));
	
    gulp.src(config.app + '**/*.html', {
        base: config.app
    })
    .pipe(gulp.dest(config.build.app));

    gulp.src(config.app + '**/*.css', {
        base: config.app
    })
    .pipe(cssnano())
    .pipe(gulp.dest(config.build.app));

    gulp.src(config.assetsPath.images + '**/*.*', {
        base: config.assetsPath.images
    })
    .pipe(gulp.dest(config.build.assetPath + 'images'));

    return gulp.src(config.index)
        .pipe(useref())
        .pipe(gulpif('*.js', uglify()))
        .pipe(gulpif('*.css', cssnano()))
        .pipe(gulpif('!*.html', rev()))
        .pipe(revReplace())
        .pipe(gulp.dest(config.build.path));
});