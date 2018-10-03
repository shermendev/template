require('require-dir')('./tasks/gulp')

const gulp = require('gulp')

gulp.task(
  'default',
  gulp.series(
    gulp.parallel('html:dev', 'copyFonts', gulp.series('generate sprites', 'images:dev', 'css:dev')),
    'notify',
    'watch'
  )
)

gulp.task(
  'build',
  gulp.series(
    gulp.parallel('copyFonts', 'html:build', gulp.series('generate sprites', 'images:build', 'css:build')),
    'notify'
  )
)
