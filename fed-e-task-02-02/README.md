## 简答题
### 第一题
```
答：Webpack 总体上是从入口文件开始，经过模块依赖加载、分析和打包三个流程完成项目的构建。在加载、分析和打包的三个过程中，可以针对性的做一些解决方案，达到按需加载的目的。
具体流程是webpack通过entry(入口)分析一个js文件开始构建一个依赖关系图，该图映射到了项目中每个模块，然后将这个依赖关系图输出到一个或者多个 bundle 中。而这个加工处理的过程，就用到了loader和plugin两个工具；loader是源代码的处理器，plugin解决的是 loader处理不了的事情。比如用loader处理css文件，url的引用，图片的转化base64等，而对于文件压缩和动态配置html则可以交给插件做处理。

```
### 第二题
```
答:loader主要是对不同资源做处理，将一些浏览器不支持或者有兼容问题的代码处理为浏览器可以支持的资源，如将ES6+转为ES5、Sass转为css等
开发思路
  通过module.exports导出一个函数
  该函数默认接受一个参数source(即要处理的资源文件)
  在函数体中处理资源(loader里配置响应的loader后)
  通过return返回最终打包后的结果(这里返回的结果需为字符串形式)
plugin主要是在webpack构建的不同阶段执行一些额外的工作，比如拷贝静态资源、清空打包后的文件夹等
开发思路
  通过钩子机制实现
  插件必须是一个函数或包含apply方法的对象
  在方法体内通过webpack提供的API获取资源做响应处理
  将处理完的资源通过webpack提供的方法返回该资源
```
## 编程题
### 第一题

```
 答: 安装开发所需的依赖
 "@babel/core": "^7.11.1",
    "@babel/preset-env": "^7.11.0",
    "babel-loader": "^8.1.0",
    "copy-webpack-plugin": "^6.0.3",
    "css-loader": "^4.2.0",
    "eslint": "^7.6.0",
    "eslint-loader": "^4.0.2",
    "eslint-plugin-vue": "^6.2.2",
    "file-loader": "^6.0.0",
    "html-webpack-plugin": "^4.3.0",
    "less": "^3.12.2",
    "less-loader": "^6.2.0",
    "style-loader": "^1.2.1",
    "url-loader": "^4.1.0",
    "vue-loader": "^15.9.3",
    "vue-loader-plugin": "^1.3.0",
    "vue-style-loader": "^4.1.2",
    "vue-template-compiler": "^2.6.11",
    "webpack": "^4.44.1",
    "webpack-cli": "^3.3.12",
    "webpack-dev-server": "^3.11.0",
    "webpack-merge": "^5.1.1"

    在webpack.common.js里配置开发和线上的共同配置
    在webpack的dev和prod中分别引入common的配置达到抽离公共配置的效果

```
