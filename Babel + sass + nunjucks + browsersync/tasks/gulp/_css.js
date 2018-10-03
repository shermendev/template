const gulp = require('gulp')

const config = require('./../_config')

const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const csscomb = require('gulp-csscomb')
const groupCssMediiaQueries = require('gulp-group-css-media-queries')
const plumber = require('gulp-plumber')
const purgecss = require('gulp-purgecss')
const sass = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

function cssDev() {
  return gulp
    .src(config.src.sass)
    .pipe(plumber({
      errorHandler: config.errorHandler
    }))
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(sourcemaps.write(''))
    .pipe(csscomb())
    .pipe(gulp.dest(config.dest.css))
}

function cssBuild() {
  return gulp
    .src(config.src.sass)
    .pipe(plumber({
      errorHandler: config.errorHandler
    }))
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(groupCssMediiaQueries())
    .pipe(
      purgecss({
        content: config.src.purgeContent
      })
    )
    .pipe(
      cleanCSS({
        level: 2
      })
    )
    .pipe(gulp.dest(config.dest.css))
}

gulp.task('css:dev', cssDev)
gulp.task('css:build', cssBuild)
