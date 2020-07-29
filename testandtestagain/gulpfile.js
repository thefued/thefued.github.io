
`use strict`;

var gulp = require('gulp'),
    browserSync = require('browser-sync');
const sass = require('gulp-sass');
const webp = require('gulp-webp');
const imagemin = require(`gulp-imagemin`);   
const html = require('gulp-copy');    
const fonts = require('gulp-copy');   
const files = require('gulp-copy'); 
const normalize = require('gulp-copy'); 

var svgSprite = require('gulp-svg-sprite'),
  svgmin = require('gulp-svgmin'),
  cheerio = require('gulp-cheerio'),
  replace = require('gulp-replace');

var autoprefixer = require('gulp-autoprefixer');

gulp.task('svgSpriteBuild', function () {
  return gulp.src('app/img/icon/*.svg')
  // minify svg
    .pipe(svgmin({
      js2svg: {
        pretty: true
      }
    }))
    // remove all fill, style and stroke declarations in out shapes
    .pipe(cheerio({
      run: function ($) {
        //$('[fill]').removeAttr('fill');
        //$('[stroke]').removeAttr('stroke');
        //$('[style]').removeAttr('style');
      },
      parserOptions: {xmlMode: true}
    }))
    // cheerio plugin create unnecessary string '&gt;', so replace it.
    .pipe(replace('&gt;', '>'))
    // build svg sprite
    .pipe(svgSprite({
      mode: {
        symbol: {
          sprite: "sprite.svg",
          render: {
            scss: {
              dest:"_sprite.scss"
            }
          }
        }
      }
    }))
    .pipe(gulp.dest('dist/img/sprite/'));
});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
      baseDir: 'dist'
    },
    browser: 'chrome',
    notify: false
  });
});

gulp.task('images', function () {
  return gulp.src(['app/img/**/*.{png,jpg,svg}', '!app/img/icon/**/*.svg'])
    .pipe(imagemin([
      imagemin.optipng({optimizationLevel: 3}),
      imagemin.jpegtran({progressive: true}),
    ]))
    .pipe(gulp.dest('dist/img'));
});
gulp.task('copy', function() {
       gulp.src(['app/*.*'])
           .pipe(copy('dist/', { prefix: 3}));

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
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream())
});

gulp.task('html', function () {
  return gulp.src(['app/*.html'])
    .pipe(gulp.dest('dist/'))
    .pipe(browserSync.stream())
});
gulp.task('fonts', function () {
  return gulp.src(['app/fonts/**/*.*'])
    .pipe(gulp.dest('dist/fonts/'))
    .pipe(browserSync.stream())
});
gulp.task('normalize', function () {
  return gulp.src(['app/styles/*.css'])
    .pipe(gulp.dest('dist/css/'))
});

function reload(done) {
  browserSync.reload();
  done();
}
gulp.task('watch', function() {
  gulp.watch('app/styles/*.scss', gulp.parallel('sass') )
  gulp.watch('app/js/*.js', gulp.parallel('js') )
  gulp.watch('app/*.html', gulp.parallel('html'));
  reload;
});

gulp.task( 'default', gulp.parallel('svgSpriteBuild', 'normalize', 'fonts', 'images', 'js', 'sass', 'html', 'browser-sync', 'watch') );
