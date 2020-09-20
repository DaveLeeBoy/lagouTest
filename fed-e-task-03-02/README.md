## 简答题
### 第一题
```
答：1.首先进行Vue的初始化，初始化Vue的实例成员以及静态成员。
   2.当初始化结束之后，开始调用构造函数，在构造函数中调用this._init()，这个方法相当于我们整个Vue的入口。
   3.在_init()中调用this.$mount()，共有两个this.$mount()。
     第一个this.$mount()是entry-runtime-with-compiler.js入口文件，这个$mount()的核心作用是帮我们把模板编译成render函数，但它首先会判断一下当前是否传入了render选项，如果没有传入的话，它会去获取我们的template选项，如果template选项也没有的话，他会把el中的内容作为我们的模板，然后把模板编译成render函数，它是通过compileToFunctions()函数，帮我们把模板编译成render函数的,当把render函数编译好之后，它会把render函数存在我们的options.render中。
   4.接下来调用mountComponent(),mountComponent()是在src/core/instance/lifecycle.js中定义的，在mountComponent()中，首先会判断render选项，如果没有render，但是传入了模板，并且当前是开发环境的话会发送警告，警告运行时版本不支持编译器。接下来会触发beforeMount这个生命周期中的钩子函数，也就是开始挂载之前
   5.然后定义了updateComponent()，在这个方法中，定义了_render和_update，_render的作用是生成虚拟DOM，_update的作用是将虚拟DOM转换成真实DOM，并且挂载到页面上来。
   6.再接下来就是创建Watcher对象，在创建Watcher时，传递了updateComponent这个函数，这个函数最终是在Watcher内部调用的。在Watcher创建完之后还调用了get方法，在get方法中，会调用updateComponent()。
   7.然后触发了生命周期的钩子函数mounted,挂载结束，最终返回Vue实例。
```
### 第二题
```
答： 当一个Vue实例创建时，vue会遍历data选项的属性，用 Object.defineProperty 将它们转为getter/setter并且在内部追踪相关依赖，在属性被访问和修改时通知变化。 每个组件实例都有相应的watcher实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的setter被调用时，会通知watcher重新计算，从而致使它关联的组件得以更新。

```
### 第三题
```
答：以便它能够跟踪每个节点的身份，在进行比较的时候，会基于 key 的变化重新排列元素顺序。从而重用和重新排序现有元素，并且会移除 key 不存在的元素。方便让 vnode 在 diff 的过程中找到对应的节点，然后成功复用。好处是可以减少 dom 的操作，减少 diff 和渲染所需要的时间，提升了性能。同时能唯一的key能保证组件状态的正确性
```
### 第四题
```
答: 模版编译的三个很重要的过程分别是parse、optimize、generate,最终返回的是render函数;
parse将模版编译成ast语法树。
optimize将ast语法树的静态标记。对ast语法树进行优化，做静态标记的是为了后续的diff算法能跳过被静态标记的，方便后续优化diff算法
最后一步的generate生成render函数，返回的代码段字符串其实就是一个字符串拼接而成
```