const gulp = require('gulp')

const config = require('./../_config')

const cache = require('gulp-cache')
const imagemin = require('gulp-imagemin')
const imageminMozjpeg = require('imagemin-mozjpeg')
const imageminPngquant = require('imagemin-pngquant')
const imageminZopfli = require('imagemin-zopfli')
const plumber = require('gulp-plumber')

function imagesDev() {
  return gulp
    .src(config.src.imgNoSprites)
    .pipe(plumber({
      errorHandler: config.errorHandler
    }))
    .pipe(gulp.dest(config.dest.img))
}

function imagesBuild() {
  return gulp
    .src(config.src.imgNoSprites)
    .pipe(plumber({
      errorHandler: config.errorHandler
    }))
    .pipe(
      cache(
        imagemin([
          imageminPngquant({
            quality: 98,
            speed: 1
          }),
          imageminZopfli({
            iterations: 50,
            more: true
          }),
          imagemin.svgo({
            plugins: [{
              removeViewBox: false
            }]
          }),
          imagemin.jpegtran({
            progressive: true
          }),
          imageminMozjpeg({
            quality: 90
          })
        ])
      )
    )
    .pipe(gulp.dest(config.dest.img))
}

gulp.task('images:build', imagesBuild)
gulp.task('images:dev', imagesDev)

gulp.task('images:watch', function () {
  gulp.watch(config.src.imgNoSprites, gulp.series('images:dev'))
})
