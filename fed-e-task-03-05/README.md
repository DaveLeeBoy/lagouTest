## 简答题
### 第一题
```
答：1.大幅提升运行时的性能，重写了虚拟Dom,跳过静态节点，只处理动态节点，静态节点渲染一次就不管了
   2.提升网络性能：tree-shaking机制，
   3.引入vite，提高开发效率
```
### 第二题
```
答： 在vue2.0中，在一个vue文件中我们会定义methods，computed，watch，data等属性，共同处理页面逻辑。
  缺点是一个功能往往需要在不同的vue配置项中定义属性和方法，比较分散，项目小还好，清晰明了，但是项目大了后，一个methods中可能包含20多个方法，你往往分不清哪个方法对应着哪个功能
  在vue3.0中的Composition API就是来解决这个问题的，代码是根据逻辑功能来组织，一个功能所定义的所有api会放在一起（更加的高内聚，低耦合），即时项目很大，功能很多，我们都能快速的定位到这个功能所用到的所有API，同时其他页面也更容易复用相同的逻辑，提高可读性和可维护性
```
### 第三题
```
答：Proxy 的优势如下:
    1.Proxy 可以直接监听对象而非属性；
    2.Proxy 可以直接监听数组的变化；
    3.Proxy 有多达 13 种拦截方法,不限于 apply、ownKeys、deleteProperty、has 等等是 Object.defineProperty 不具备的；
    4.Proxy 返回的是一个新对象,我们可以只操作新的对象达到目的,而 Object.defineProperty 只能遍历对象属性直接修改；
    5.Proxy 作为新标准将受到浏览器厂商重点持续的性能优化，也就是传说中的新标准的性能红利；
    Object.defineProperty 的优势如下:
Object.defineProperty的优点：
   兼容性好，支持 IE9，而 Proxy 的存在浏览器兼容性问题,而且无法用 polyfill 磨平，因此 Vue 的作者才声明需要等到下个大版本( 3.0 )才能用 Proxy 重写。
```
### 第四题
```
答: 1.会直接会找到带动态属性的节点，并且标明了它，这样在diff时会直接比对它的文本节点，节省了循环的时间
  2.直接把静态节点抽离出去了，他只会编译阶段创建一遍，之后直接复用对象，不需要再创建了。还有一些其他的优化，比如说可以 cache 绑定的 click 函数，SSR 渲染直接变字符串输出。
```
### 第五题
```
答: Vue3 使用 Proxy 对象重写响应式系统，这个系统主要有以下几个函数来组合完成的：
    1、reactive:
      接收一个参数，判断这参数是否是对象。不是对象则直接返回这个参数，不做响应式处理
      创建拦截器对象 handler, 设置 get/set/deleteProperty
      get
      收集依赖（track）
      返回当前 key 的值。
      如果当前 key 的值是对象，则为当前 key 的对象创建拦截器 handler, 设置 get/set/deleteProperty
      如果当前的 key 的值不是对象，则返回当前 key 的值
      set
      设置的新值和老值不相等时，更新为新值，并触发更新（trigger）
      deleteProperty
      当前对象有这个 key 的时候，删除这个 key 并触发更新（trigger）
      返回 Proxy 对象
    2、effect: 接收一个函数作为参数。作用是：访问响应式对象属性时去收集依赖
    3、track:
      接收两个参数：target 和 key
      如果没有 activeEffect，则说明没有创建 effect 依赖
      如果有 activeEffect，则去判断 WeakMap 集合中是否有 target 属性，
      WeakMap 集合中没有 target 属性，则 set(target, (depsMap = new Map()))
      WeakMap 集合中有 target 属性，则判断 target 属性的 map 值的 depsMap 中是否有 key 属性
      depsMap 中没有 key 属性，则 set(key, (dep = new Set()))
      depsMap 中有 key 属性，则添加这个 activeEffect
    4、trigger:
      判断 WeakMap 中是否有 target 属性
      WeakMap 中没有 target 属性，则没有 target 相应的依赖
      WeakMap 中有 target 属性，则判断 target 属性的 map 值中是否有 key 属性，有的话循环触发收集的 effect()
```