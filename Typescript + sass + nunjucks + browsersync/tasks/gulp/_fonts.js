const gulp = require('gulp')

const config = require('./../_config')

function fonts() {
  return gulp
    .src(config.src.fonts + '/**/*.{ttf,woff,woff2,svg,eot}')
    .pipe(gulp.dest(config.dest.fonts))
}

gulp.task('fonts', fonts)

gulp.task('fonts:watch', function () {
  gulp.watch(config.src.fonts + '/**/*.{ttf,woff,woff2,svg,eot}', gulp.series('fonts'))
})
