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
var projectURL = 'code-gulpfile.o';

/**
 * Tasks
 *
 * 'default' - Check if everything is working fine
 * 'styles' - Compile source Sass files into CSS and put on their destination
 * 'npm-update-all' - Update all dependencies & devDependencies in package.json at once
 * 'zip' - Update all dependencies & devDependencies in package.json at once
 */


/////////////////////////////////////////////////////////////
// Script Tasks
////////////////////////////////////////////////////////////

// Check if everything is working fine
gulp.task('default', function () {
    console.log("Hey! I am here :)");
});

// Compile source Sass files into CSS and put on their destination
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

// Update all dependencies & devDependencies in package.json at once
gulp.task('npm-update-all', function () {
    var updateAll = require('npm-update-all');
    var json = require('./package.json');
    updateAll(json);
});

// Build project zip
gulp.task('zip', function () {
    return gulp.src( [
        // Include
        './**/*',

        // Exclude
        '!./prepros.cfg',
        '!./**/.DS_Store',
        '!./**/*.map',
        '!./**/*.scss',
        '!./scss/**/',
        '!./node_modules/**',
        '!./node_modules',
        '!./package.json',
        '!./package-lock.json',
        '!./bower_components/**',
        '!./bower_components',
        '!./bower.json',
        '!./gulpfile.js'
    ])
        .pipe ( zip ( 'project.zip' ) )
        .pipe ( gulp.dest ( '../' ) )
        .pipe ( notify ( {
            message : 'Project zip is ready.',
            onLast : true
        } ) );
});