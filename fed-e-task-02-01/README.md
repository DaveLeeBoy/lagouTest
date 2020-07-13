## 简答题
### 第一题
```
答：前端工程化是使用软件工程的技术和方法来进行前端的开发流程、技术、工具、经验等规范化、标准化，其主要目的为了提高效率和降低成本，即提高开发过程中的开发效率，减少不必要的重复工作时间。
在工程化之前会产生的问题：
1、如何高效的进行多人协作
2、如何保证项目的可维护性
3、如何降低项目生产的风险
工程化带来的价值：
1、JS的模块化 通过webpack和babel等工具将一些ES6特性进行转换打包统一兼容，避免了繁琐的个人操作，且容易出错
2、团队协作开发时，可以使用一些编码规范检查的工具，使得项目代码风格统一，质量得到保证
3、自动化构建很多的简单机械重复劳动脏活累活交给了工具去完成，提高了工作效率

```
### 第二题

```
答:
更深沉的意义在于，统一的脚手架提供了统一的项目风格，约定了代码规范，相同的组织架构，让我们更关注业务，而不必在项目基础设施上花费大量的时间，在公司内部的意义在于，即使人员变更了也能快速接手项目，同时脚手架也提供了自定义配置，也给开发带来很多的自由度。
实现地址:https://github.com/DaveLeeBoy/lagouTest/tree/master/fed-e-task-02-01/nodeTestCli一端移动，然后直接清理掉端边界以外的内存。
```
## 编程题
### 第一题 概述脚手架实现的过程，并使用 NodeJS 完成一个自定义的小型脚手架工具

```
 答:
 // 第一下载相应的依赖
 "devDependencies": {
    "@babel/core": "^7.10.4",
    "@babel/preset-env": "^7.10.4",
    "browser-sync": "^2.26.7",
    "del": "^5.1.0",
    "gulp": "^4.0.2",
    "gulp-babel": "^8.0.0",
    "gulp-clean-css": "^4.3.0",
    "gulp-htmlmin": "^5.0.1",
    "gulp-if": "^3.0.0",
    "gulp-imagemin": "^7.1.0",
    "gulp-load-plugins": "^2.0.3",
    "gulp-rename": "^2.0.0",
    "gulp-sass": "^4.1.0",
    "gulp-swig": "^0.9.1",
    "gulp-uglify": "^3.0.2",
    "gulp-useref": "^4.0.1",
    "sass": "^1.26.10"
  },
  // 定义好对应的任务
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
// 组合任务
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
// 对外暴露指令
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
 实现地址:https://github.com/DaveLeeBoy/lagouTest/tree/master/fed-e-task-02-01/nodeTestCli

```
### 第二题 尝试使用 Gulp 完成项目的自动化构建

```
答：实现地址：https://github.com/DaveLeeBoy/lagouTest/tree/master/fed-e-task-02-01/pages-boilerplate-gulp

```

### 第三题

```
实现地址: https://github.com/DaveLeeBoy/lagouTest/tree/master/fed-e-task-02-01/pages-boilerplate-grunt

```
