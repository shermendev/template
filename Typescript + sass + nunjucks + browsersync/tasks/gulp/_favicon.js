const gulp = require('gulp')

const config = require('./../_config')

const favicons = require('favicons').stream
const plumber = require('gulp-plumber')

function faviconBuild() {
  return gulp
    .src(config.src.img + '/favicon.svg', {
      allowEmpty: true
    })
    .pipe(plumber({
      errorHandler: config.errorHandler
    }))
    .pipe(
      favicons({
        html: 'favicon.html',
        path: 'img/favicon',
        pipeHTML: true,
      })
    )
    .pipe(gulp.dest(config.dest.favicon))
}

function copyGeneratedFaviconHtml() {
  return gulp
    .src(config.dest.favicon + '/favicon.html', {
      allowEmpty: true
    })
    .pipe(plumber({
      errorHandler: config.errorHandler
    }))
    .pipe(gulp.dest(config.src.htmlGenerated))
}

gulp.task('favicon', gulp.series(faviconBuild, copyGeneratedFaviconHtml))
