const gulp = require('gulp')
const del = require('del')

const config = require('./../_config')

function clean() {
  return del([
    config.dest.root,
    '!src'
  ], {
    force: true
  })
}

gulp.task('clean', clean)
