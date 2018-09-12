var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css'),
    rename = require("gulp-rename"),
    uglify = require('gulp-uglify'),
    pkg = require('./package.json'),
    runSequence = require('run-sequence'),
    watch = require('gulp-watch'),
    imagemin = require('gulp-imagemin'),
    cssnano  = require('gulp-cssnano'),
    concat  = require('gulp-concat');
// Set source paths
var src = {
    scripts: 'js/*.js',
    images: 'img/*',
    css: 'css/*.css',
};

gulp.task('build', function(cb) {
    runSequence('watch', 'minify-css', 'minify-js','style-vendors', 'script-vendors', cb);
});

gulp.task('default', function(cb) {
    runSequence('build', 'server', 'watch', cb);
});

// Minify compiled CSS
gulp.task('minify-css', function() {
     return gulp.src([
            'css/main.css',
        ])
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('css'))
        .pipe(browserSync.reload({
            stream: true
        }))
});


gulp.task('style-vendors', function() {
    return gulp.src([
       'vendor/bootstrap/css/bootstrap.min.css',
       //'node_modules/bootstrap/dist/css/bootstrap.min.css',
        'plugin/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.min.css',
    ])
        .pipe(concat('vendors.css'))
        .pipe(cssnano())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('css'))
});

gulp.task('script-vendors', function(done) {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
       //'node_modules/bootstrap/dist/js/bootstrap.min.js',
        'vendor/bootstrap/js/bootstrap.min.js',
        'node_modules/jquery-lazyload/jquery.lazyload.js',
        'plugin/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.concat.min.js'
    ])
        .pipe(concat('vendors.js'))
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('js'))
});


// Minify JS
gulp.task('minify-js', function() {
    return gulp.src([
            'js/main.js',
            'js/stars.js',
        ])
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('js'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

//Optimize Images
gulp.task('images', function() {
    return gulp.src(src.images)
      .pipe(imagemin({
        interlaced: true,
        progressive: true,
        svgoPlugins: [{removeViewBox: false}]
      }))
      .pipe(gulp.dest('img'))
});

// Configure the browserSync task
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: ''
        },
    })
})

gulp.task('server', function() {
    browserSync.init({
        proxy: 'local.edem',
        reloadOnRestart: true,
        reloadDelay: 100,
        open: false,
        notify: false
    });
});

gulp.task('watch', function() {
    gulp.watch('css/*.css', ['minify-css']);
    gulp.watch('js/*.js', ['minify-js']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('js/**/*.js', browserSync.reload);
});
