const gulp = require('gulp')

gulp.task(
  'watch',
  gulp.parallel(
    'css:watch',
    'html:watch',
    'images:watch',
    'sprites:watch',
    'fonts:watch'
  )
)
