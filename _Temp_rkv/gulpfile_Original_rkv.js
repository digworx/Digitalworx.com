// Gulp workflow

// Include gulp
var gulp = require('gulp');

// Include plugins
var jshint = require('gulp-jshint');
var plumber = require('gulp-plumber');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var pump = require('pump');
var del = require('del');
var rename = require("gulp-rename");
var newer = require('gulp-newer');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cached');
var gulpIf = require('gulp-if');
var useref = require('gulp-useref');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var reload = browserSync.reload;
var notify = require("gulp-notify");
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps")
var autoprefixer = require("gulp-autoprefixer")
var minifyCSS = require("gulp-minify-css")

// Compress images variables
var imgSrc = 'img/**';
var imgDest = 'dist/img';


// Delete existing files in Dist folder before running Gulp tasks
gulp.task('clean:dist', function() {
  return del([
	  'dist/**/*', 
	  '!dist/img/**'
  ]);
});


// Compress images
 gulp.task('images', function() {
  return gulp.src(imgSrc)
  	.pipe(newer(imgDest))
    .pipe(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true, verbose: true }))
    .pipe(gulp.dest(imgDest))
	.pipe(notify({ message: "Image Optimize: Success", onLast: true }));
});

// Styles
gulp.task('styles', function() {
	console.log('Starting Styles Task')
	return gulp.src(['css/normalize.css', 'css/hamburger.css', 'css/flexslider.css', 'css/awwwards.css', 'css/animate.css', 'css/main.css'])
		.pipe(plumber(function (err){
			console.log('Styles Task Error');
			console.log(err);
			this.emit('end');
	}))
		.pipe(sourcemaps.init())
		.pipe(autoprefixer())
		.pipe(concat('styles.css'))
		.pipe(minifyCSS())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dist'))
		.pipe(notify({ message: "Style sourcemaps, concat and minify: Success", onLast: true }));
});

// Minifys CSS
gulp.task('minify-css', function() {
  return gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
//  	.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'))
  	.pipe(notify({ message: "Minify CSS: Success", onLast: true }));
});


// Check all javascript files for errors
gulp.task('lint', function() {
  return gulp.src('./js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
	.pipe(notify({ message: "JShint: Finished", onLast: true }));
});


// Compress js files
gulp.task('compress', function () {
  pump([
        gulp.src(['js/*.js', '!js/**/*.min.js', '!js/**/*-min.js']),
//	    plumber(),
        uglify(),
//	    jshint(),
//	  	rename({suffix: '.min'}),
        gulp.dest('dist/js'),
	    notify({ message: "Minify Javascript: Success", onLast: true })
    ]
  );
});


// Initiate BrowserSync, set up base directory, select Chrome browser
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    },
	  browser: "google chrome"
  })
});


// Set up Watched files for BrowserSync
gulp.task('watch', ['browserSync'], function (){
  // Reloads the browser whenever CSS files change
  gulp.watch('css/*.css', browserSync.reload); 
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('*.html', browserSync.reload); 
  gulp.watch('js/*.js', browserSync.reload);
  gulp.watch('img/**', browserSync.reload); 	
});


// Production build task
gulp.task('build', function (callback) {
  runSequence('clean:dist', 
    ['lint', 'minify-css', 'compress', 'images'],
    callback
  )
});


// Default task
gulp.task('default', function (callback) {
  runSequence(['styles', 'browserSync', 'watch'],
    callback
  )
});


// Concatenate and minify JS files
////gulp.task('useref', function(){
////  return gulp.src('index.html')
////    .pipe(useref())
////    // Minifies only if it's a JavaScript file
////    .pipe(gulpIf('*.js', uglify()))
////    // Minifies only if it's a CSS file
////    .pipe(gulpIf('*.css', cleanCSS({compatibility: '*'})))
////    .pipe(gulp.dest('dist'));
////});

