const gulp = require('gulp')

const config = require('./../_config')

const frontMatter = require('gulp-front-matter')
const htmlmin = require('gulp-htmlmin')
const nunjucksRender = require('gulp-nunjucks-render')
const plumber = require('gulp-plumber')
const prettify = require('gulp-prettify')

function htmlPreRender() {
  return gulp
    .src(config.src._htmlIncludes)
    .pipe(plumber({
      errorHandler: config.errorHandler
    }))
    .pipe(frontMatter({
      property: 'data'
    }))
    .pipe(nunjucksRender({
      path: config.src.htmlRender
    }))
    .pipe(gulp.dest(config.src.htmlIncludes))
}

function htmlDev() {
  return gulp
    .src(config.src.html)
    .pipe(plumber({
      errorHandler: config.errorHandler
    }))
    .pipe(frontMatter({
      property: 'data'
    }))
    .pipe(nunjucksRender({
      path: config.src.htmlRender
    }))
    .pipe(prettify({
      end_with_newline: true,
      indent_size: 2,
      preserve_newlines: false,
      wrap_attributes: 'auto',
    }))
    .pipe(gulp.dest(config.dest.html))
}

function htmlBuild() {
  return gulp
    .src(config.src.html)
    .pipe(plumber({
      errorHandler: config.errorHandler
    }))
    .pipe(nunjucksRender({
      path: config.src.htmlRender
    }))
    .pipe(
      htmlmin({
        collapseWhitespace: true,
        minifyURLs: true,
        removeComments: true,
        sortAttributes: true,
        sortClassName: true
      })
    )
    .pipe(gulp.dest(config.dest.html))
}

gulp.task('html:dev', gulp.series(htmlPreRender, htmlDev))
gulp.task('html:build', gulp.series(htmlPreRender, htmlBuild))
