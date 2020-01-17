
`use strict`;

var gulp = require('gulp'),
    browserSync = require('browser-sync');
const sass = require('gulp-sass');
const pug = require('gulp-pug');
const webp = require('gulp-webp');
const imagemin = require(`gulp-imagemin`);




gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'dist'
    },
    browser: 'google chrome',
    notify: false
  });
});

gulp.task('images', function () {
  return gulp.src(['app/img/**/*.{png,jpg,svg}', '!app/img/icons/**/*.svg'])
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
      imagemin.svgo(),
    ]))
    .pipe(gulp.dest('dist/img'));
});
/*
gulp.task('webp', function () {
  return gulp.src('app/img/*.jpg')
  .pipe(webp({
      quality: 80,
      preset: 'photo',
      method: 6
  }))
  .pipe(gulp.dest('dist/img'))    
});*/

gulp.task('js', function() {
  return gulp.src('app/js/*.js')
  .pipe(gulp.dest('dist/js'))
  .pipe(browserSync.stream())
});

gulp.task('sass', function(){
  return gulp.src('app/styles/*.scss')
    .pipe(sass()) 
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
});

gulp.task('pug', function() {
  return gulp.src("app/pug/*.pug")
      .pipe(pug({pretty: true}))
      .pipe(gulp.dest("dist"))
      .pipe(browserSync.stream())
});

function reload(done) {
  browserSync.reload();
  done();
}
gulp.task('watch', function() {
  gulp.watch('app/styles/*.scss', gulp.parallel('sass') )
  gulp.watch('app/js/*.js', gulp.parallel('js') )
  gulp.watch('app/pug/*.pug', gulp.parallel('pug') )
  reload;
});

gulp.task( 'default', gulp.parallel('images', 'js', 'sass', 'pug', 'browser-sync', 'watch') );
