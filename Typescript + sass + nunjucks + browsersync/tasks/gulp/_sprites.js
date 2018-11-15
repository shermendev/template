const gulp = require('gulp')

const cheerio = require('gulp-cheerio')
const cheerioNode = require('cheerio')
const consolidate = require('gulp-consolidate')
const merge = require('merge-stream')
const plumber = require('gulp-plumber')
const rename = require('gulp-rename')
const spritesmith = require('gulp.spritesmith')
const svgStore = require('gulp-svgstore')
const svgmin = require('gulp-svgmin')
const through2 = require('through2')

const config = require('./../_config')

function generateSpritePng() {
  const spriteData = gulp
    .src(config.src.sprite + '/png/*.png')
    .pipe(plumber({
      errorHandler: config.errorHandler
    }))
    .pipe(
      spritesmith({
        cssName: '_sprite-png.sass',
        imgName: 'sprite.png',
        imgPath: './../img/sprite.png'
      })
    )

  const imgStream = spriteData.img
    .pipe(plumber({
      errorHandler: config.errorHandler
    }))
    .pipe(gulp.dest(config.src.img))

  const cssStream = spriteData.css
    .pipe(plumber({
      errorHandler: config.errorHandler
    }))
    .pipe(gulp.dest(config.src.sassGenerated))

  return merge(imgStream, cssStream)
}

function generateSpriteSvg() {
  return gulp
    .src(config.src.sprite + '/svg/*.svg')
    .pipe(plumber({
      errorHandler: config.errorHandler
    }))
    .pipe(svgmin({
      js2svg: {
        pretty: true
      },
      plugins: [{
        removeDesc: true
      }, {
        cleanupIDs: true
      }, {
        mergePaths: false
      }]
    }))
    .pipe(rename({
      prefix: 'o-icon--'
    }))
    .pipe(svgStore({
      inlineSvg: false
    }))
    .pipe(through2.obj(function (file, encoding, cb) {
      const $ = cheerioNode.load(file.contents.toString(), {
        xmlMode: true
      })
      const data = $('svg > symbol').map(function () {
        const $this = $(this)
        const size = $this.attr('viewBox').split(' ').splice(2)
        const name = $this.attr('id')
        const ratio = size[0] / size[1]
        const fill = $this.find('[fill]:not([fill="currentColor"])').attr('fill')
        const stroke = $this.find('[stroke]').attr('stroke')
        return {
          fill: fill || 'initial',
          name: name,
          ratio: +ratio.toFixed(2),
          stroke: stroke || 'initial'
        }
      }).get()
      this.push(file)
      gulp.src(__dirname + '/sprites/_sprite-svg.scss')
        .pipe(consolidate('lodash', {
          symbols: data
        }))
        .pipe(gulp.dest(config.src.sassGenerated))
      cb()
    }))
    .pipe(cheerio({
      parserOptions: {
        xmlMode: true
      },
      run: function ($) {
        $('[fill]:not([fill="currentColor"])').removeAttr('fill')
        $('[stroke]').removeAttr('stroke')
      },
    }))
    .pipe(rename({
      basename: 'sprite'
    }))
    .pipe(gulp.dest(config.dest.img))
}

gulp.task('sprites', gulp.parallel(generateSpritePng, generateSpriteSvg))

gulp.task('sprites:watch', function () {
  gulp.watch(config.src.sprite + '/**/*.svg', generateSpriteSvg)
  gulp.watch(config.src.sprite + '/**/*.png', generateSpritePng)
})
