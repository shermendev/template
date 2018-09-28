const gulp = require('gulp')

const config = require('./../_config')

function copyFonts() {
  return gulp
    .src(config.src.allFonts)
    .pipe(gulp.dest(config.dest.fonts))
}

gulp.task('copyFonts', copyFonts)
