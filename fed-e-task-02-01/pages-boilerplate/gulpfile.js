// 实现这个项目的构建任务
const { src, dest, parallel } = require('gulp')
const sass = require('gulp-sass')
const babel = require('gulp-babel')
const swig = require('gulp-swig')

exports.test = done => {
  console.log('测试gulp')
  done()
}
const style = () => {
  return src('src/assets/styles/*.scss', { base: 'src'})
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(dest('dist'))
}

const script = () => {
  return src('src/assets/scripts/*.js', { base: 'src'})
    .pipe(babel({ presets: ['@babel/preset-env']}))
    .pipe(dest('dist'))
}

const page = () => {
  return src('src/*.html', {base: 'src'})
    .pipe(swig())
    .pipe(dest('dist'))
}
// 执行编译任务
const compile = parallel(style, script, page)

const clean = () => {
  return console.log('执行啊啊啊')
}


module.exports = {
  style,
  compile,
  clean
}