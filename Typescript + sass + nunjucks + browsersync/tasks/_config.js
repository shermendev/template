const notify = require('gulp-notify')

const destPath = './dist'
const srcPath = './src'

const config = {
  dest: {
    css: destPath + '/css',
    fonts: destPath + '/fonts',
    html: destPath,
    img: destPath + '/img',
    js: destPath + '/js',
    root: destPath
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
    _htmlIncludes: srcPath + '/html/_includes/**/*.html',
    allFonts: srcPath + '/fonts/**/*.{ttf,woff,woff2,svg,eot}',
    allHtml: [srcPath + '/html/**/*.html', '!' + srcPath + '/html/includes/**/*.html'],
    allIcons: srcPath + '/img/sprite/**/*.{png,svg}',
    allImgNoSprites: [srcPath + '/img/**/*.{png,jpg,svg}', '!' + srcPath + '/img/sprite/**/*'],
    allSass: srcPath + '/sass/**/*.sass',
    html: srcPath + '/html/*.html',
    htmlIncludes: srcPath + '/html/includes',
    htmlRender: srcPath + '/html',
    icons: './../img/sprite',
    iconsPng: srcPath + '/img/sprite/png/*.png',
    iconsSvg: srcPath + '/img/sprite/svg/*.svg',
    img: srcPath + '/img',
    purgeContent: [
      destPath + '/*.html',
      destPath + '/js/bundle.js'
    ],
    sass: srcPath + '/sass/*.sass',
    sassGen: srcPath + '/sass/generated',
    ts: srcPath + '/ts/app.ts',
  }
}

module.exports = config
