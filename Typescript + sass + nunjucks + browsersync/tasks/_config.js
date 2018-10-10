const notify = require('gulp-notify')

const destPath = './dist'
const srcPath = './src'

const config = {
  dest: {
    root: destPath,
    css: destPath + '/css',
    favicon: destPath + '/img/favicon',
    fonts: destPath + '/fonts',
    html: destPath,
    img: destPath + '/img',
    js: destPath + '/js'
  },
  errorHandler: function () {
    var args = Array.prototype.slice.call(arguments)
    notify.onError({
      message: '<%= error.message %>',
      sound: 'Submarine',
      title: 'Gulp'
    }).apply(this, args)
    this.emit('end')
  },
  src: {
    root: srcPath,
    fonts: srcPath + '/fonts',
    html: srcPath + '/html',
    // #region trick to enable frontMatter on includes
    htmlIncludes: srcPath + '/html/includes',
    _htmlIncludes: srcPath + '/html/_includes',
    // #endregion
    htmlGenerated: srcPath + '/html/generated',
    img: srcPath + '/img',
    imgNoSprites: [srcPath + '/img/**/*.{png,jpg,svg}', '!' + srcPath + '/img/sprite/**/*'],
    sass: srcPath + '/sass',
    sassGenerated: srcPath + '/sass/generated',
    sprite: srcPath + '/img/sprite',
    ts: srcPath + '/ts'
  }
}

module.exports = config
