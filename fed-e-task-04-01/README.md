## 简答题
### 第一题
```
答： 分三步 
  1. jsx 转换成 react 元素:
  .babel-react 会将jsx 调用 React.createElement,然后React.createElement会将jsx转换成 react element 
  2render （协调层）此阶段负责创建 Fiber 数据结构并为 Fiber 节点打标记，标记当前 Fiber 节点要进行的 DOM 操作。
   首先为每一个react 元素构建 fiber 对象 (workInProgress Fiber 树）创建 此 fiber 对象对应的 DOM 对象，为 fiber 对象添加 effectTag 属性（用来记录当前 Fiber 要执行的 DOM 操作），然后在render 结束后， fiber 会被保存到 fiberroot 中。
  3.commit 阶段 （渲染层）
   先获取到render 的结果， 在 fiberroot 中的 新构建的 workInProgress Fiber 树
   根据 fiber 中的 effectTag 属性进行相应的 DOM 操作
```
### 第二题
```
答： 因为递归耗内存，它使用 JavaScript 自身的执行栈，更新一旦开始，中途就无法中断。当VirtualDOM 树的层级很深时，virtualDOM 的比对就会长期占用 JavaScript 主线程，递归更新的时间就会超过16ms，由于 JavaScript 又是单线程的无法同时执行其他任务，所以在比对的过程中无法响应用户操作，无法即时执行元素动画，造成了页面卡顿的现
象。而React16架构可以分为三层：Scheduler，Reconciler，Renderer,与之前不同的是Reconciler和Renderer不再交替执行，而是当Scheduler将任务交给Reconciler后，Reconciler会为变化的虚拟DOM打上代表增/删/更新的标记，整个Scheduler与Reconciler的工作都在内存中进行。只有当所有组件都完成Reconciler的工作，才会统一交给Renderer。并且采用双缓存用作统一替换，用户也不会看到更新不完全的真实dom。它放弃了 JavaScript 递归的方式进行 virtualDOM 的比对，而是采用循环模拟递归。而且比对的过程是利用浏览器的空闲时间完成的，不会长期占用主线程，这就解决了 virtualDOM 比对造成页面卡顿的问题。
```
### 第三题
```
答：1. before mutation阶段（执行DOM操作前）:处理类组件的getSnapShotBeforeUpdate 生命周期函数处理DOM节点渲染/删除后的逻辑；
   调用getSnapshotBeforeUpdate生命周期钩子；调度useEffect。
   2.mutation阶段（执行DOM操作）:将 workInProgress Fiber 树变成 current Fiber 树
   3.layout（执行 DOM 操作后）：commitHookEffectList()阶段，调用类组件生命周期函数或者函数组件的钩子函数
```
### 第四题
```
答: 实现双缓存技术, 在内存中构建 DOM 结构以及 DOM 更新, 在 commit 阶段实现 DOM 的快速更新.
```