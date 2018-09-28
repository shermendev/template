const gulp = require('gulp')

const run = require('gulp-run-command').default

function concurrentlyBuildWebpack() {
  return run('webpack --config webpack.prod.js')
}

function concurrentlyBuildGulp() {
  return run('gulp build')
}

function concurrentlyDev() {
  return run('concurrently "webpack --config webpack.dev.js -w" "gulp"')
}

// purgecss requires a ready js build
gulp.task('concurrently:build', gulp.series('clean', concurrentlyBuildWebpack(), concurrentlyBuildGulp()))
gulp.task('concurrently:dev', gulp.series(concurrentlyDev()))
