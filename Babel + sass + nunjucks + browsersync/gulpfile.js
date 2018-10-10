require('require-dir')('./tasks/gulp')

const gulp = require('gulp')

gulp.task(
  'default',
  gulp.series(
    gulp.parallel('html:dev', 'fonts', gulp.series('sprites', 'images:dev', 'css:dev')),
    'notify',
    'watch'
  )
)

gulp.task(
  'build',
  gulp.series(
    gulp.parallel('fonts', gulp.series('sprites', 'images:build', 'favicon', 'html:build', 'css:build')),
    'notify'
  )
)
