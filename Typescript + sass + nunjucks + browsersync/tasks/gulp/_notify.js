const gulp = require('gulp')

const notifier = require('node-notifier')

function notify(done) {
  notifier.notify({
    icon: './node_modules/gulp-notify/assets/gulp.png',
    message: 'Build Completed',
    sound: 'Submarine',
    title: 'Gulp'
  })

  done()
}

gulp.task('notify', notify)