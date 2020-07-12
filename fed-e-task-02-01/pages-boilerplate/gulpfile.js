// 实现这个项目的构建任务
const { src, dest, parallel, series, watch } = require('gulp')
const loadPlugins = require('gulp-load-plugins')
const plugins = loadPlugins()
const del = require('del')
const  browserSync = require('browser-sync')
 //创建一个服务
const bs = browserSync.create()

exports.test = done => {
  console.log('测试gulp')
  done()
}

const clean = () => {
  return del(['dist'])
}

const style = () => {
  return src('src/assets/styles/*.scss', { base: 'src'})
  .pipe(plugins.sass({outputStyle: 'expanded'}))
  .pipe(dest('dist'))
}

const script = () => {
  return src('src/assets/scripts/*.js', { base: 'src'})
    .pipe(plugins.babel({ presets: ['@babel/preset-env']}))
    .pipe(dest('dist'))
}

const page = () => {
  return src('src/*.html', {base: 'src'})
    .pipe(plugins.swig())
    .pipe(dest('dist'))
}
const image = () => {
  return src('src/assets/images/**', { base: 'src'})
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}
const fonts = () => {
  return src('src/assets/fonts/**', { base: 'src'})
    .pipe(plugins.imagemin())
    .pipe(dest('dist'))
}

const extra = () => {
  return src('public/**', { base: 'public'})
    .pipe(dest('dist'))
}

const serve = () => {
  watch('src/assets/styles/*.scss', style)
  watch('src/assets/scripts/*.js', script)
  watch('src/*.html', page)
  // watch('src/assets/images/**', image)
  // watch('src/assets/fonts/**', fonts)
  // watch('public/**', extra)
  watch(['src/assets/images/**', 'src/assets/fonts/**', 'public/**'], bs.reload)
  bs.init({
    notify: false,
    port: 3080,
    // files: 'dist/**',
    server: {
      baseDir: ['dist', 'src', 'public'],
      routes: {
        '/node_modules': 'node_modules'
      }
    }
  })
}
const useref = () => {
  return src('dist/*.html', { base: 'dist'})
    .pipe(plugins.useref({ searchPath: ['dist', '.']}))
    .pipe(dest('dist'))
}

// 执行编译任务
const compile = parallel(style, script, page)

// 执行buid
const build  = series(clean, parallel(compile, image, fonts, extra)) 

const develop = series(compile, serve)

module.exports = {
  compile,
  build,
  develop,
  useref,
  style,
  serve,
  extra,
  clean
}