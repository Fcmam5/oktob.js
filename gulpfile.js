var gulp = require('gulp');
var rename = require('gulp-rename');
var stripCode = require('gulp-strip-code');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('clean-test-api', function (cb) {
    pump([
        gulp.src(['src/oktob.js']),
        stripCode({
            start_comment: "start-test-block",
            end_comment: "end-test-block"
        }),
        gulp.dest('dist')
    ], cb);
});

gulp.task('compress', function (cb) {
    pump([
        gulp.src('src/oktob.js'),
        stripCode({
            start_comment: "start-test-block",
            end_comment: "end-test-block"
        }),
        uglify(),
        rename({ suffix: '.min' }),
        gulp.dest('dist/')
    ],
        cb
    );
});
gulp.task('default', ['clean-test-api', 'compress']);