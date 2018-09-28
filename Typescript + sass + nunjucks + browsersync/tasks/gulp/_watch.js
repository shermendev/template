const gulp = require('gulp')

const config = require('./../_config')

function watch() {
  const watchCss = gulp.watch(config.src.allSass)
  watchCss.on('all', gulp.series('css:dev'))

  const watchHtml = gulp.watch(config.src.allHtml)
  watchHtml.on('all', gulp.series('html:dev'))

  const watchImages = gulp.watch(config.src.allImgNoSprites)
  watchImages.on('all', gulp.series('images:dev'))

  const watchSprite = gulp.watch(config.src.allIcons)
  watchSprite.on('all', gulp.series('generate sprites'))

  const watchFonts = gulp.watch(config.src.allFonts)
  watchFonts.on('all', gulp.series('copyFonts'))
}

gulp.task('watch', watch)
