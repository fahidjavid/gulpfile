/////////////////////////////////////////////////////////////
// Required
////////////////////////////////////////////////////////////
var gulp = require('gulp');
var sass = require('gulp-sass'); // Gulp plugin for SASS
var sourcemaps = require('gulp-sourcemaps');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var zip = require('gulp-zip');
var browserSync = require('browser-sync').create(); // Reloads browser and injects CSS. Time-saving synchronised browser testing.
var reload = browserSync.reload; // For manual browser reload.
var rename = require("gulp-rename");

/////////////////////////////////////////////////////////////
// Global utility variables
////////////////////////////////////////////////////////////
var styleWatchFiles = 'scss/**/*.scss';
var PHPWatchFiles = './**/*.php';
var projectURL = 'code-gulpfile.o'

/**
 * Tasks
 *
 * 'default' - task to check if everything is working fine
 */


/////////////////////////////////////////////////////////////
// Script Tasks
////////////////////////////////////////////////////////////

// Checks if everything running fine.
gulp.task('default', function () {
    console.log("Hey! I am here :)");
});

gulp.task('styles', function () {

    var cssDestination = 'css';

    gulp.src([styleWatchFiles])
        .pipe(sourcemaps.init())
        .pipe(sass({
            errLogToConsole: true,
            outputStyle: 'compact',
            // outputStyle: 'compressed',
            // outputStyle: 'nested',
            // outputStyle: 'expanded',
            precision: 10
        }))
        .on('error', console.error.bind(console))

        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest(cssDestination))

        .pipe(browserSync.stream()) // Reloads style.css if that is enqueued.

        .pipe(gulp.dest(cssDestination))
        .pipe(notify({message: 'TASK: "styles" Completed! 💯', onLast: true}))
});