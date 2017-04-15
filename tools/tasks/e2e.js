var gulp = require('gulp');
var protractor = require("gulp-protractor").protractor;
var e2eConfig = require("../protractor.config");
var browserSync=require("browser-sync");
gulp.task('e2e', function (done) {
    // var browserSyncInstance = browserSync.create();
    // browserSyncInstance.init({
    //     server:{
    //         baseDir:e2eConfig.config.baseDir,
    //         open: false
    //     }
    // });
    gulp.src(e2eConfig.config.specs)
    .pipe(protractor({
        configFile:"protractor.config.js",
        args:["--baseUrl",e2eConfig.config.server]
    })).on(
        "error",function(e){console.log(e);}
    );
});