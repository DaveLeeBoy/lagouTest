## 简答题
### 第一题
```
答：不是响应式的，要设置新增成员为响应式数据可以调用this.$set方法，接受三个参数。第一个为目标对象，第二个为新增成员属性，第三个为属性值
内部原理是，vue内部在初始化时会将data对象递归遍历data对象,对每一个属性调用object.defineProperty,在get内收集依赖，set中调用依赖中的更新方法，同时如果给data中的属性重新设置为对象时，会调用walk方法将其设置为响应式数据，$set的内部就是手动调用了内部的walk方法。

```
### 第二题
```
答:diff算法的核心是对比新旧节点的children，查找出差异更新dom
由于在dom中跨层级的情况比较少，且如果跨层级比较复杂度为O(n3),所以diff算法是同层比较,当比较完一个之后在依次比较下一级的节点
在进行同级别节点比较的时候，首先会对新老节点数组的开始和结束节点设置标记索引，遍历的过程中移动索引
在对开始和结束节点比较的时候，总共有四种情况
1、旧开始节点/新开始节点
2、旧结束节点/新结束节点
3、旧开始节点/新结束节点
4、旧结束节点/新开始节点
开始节点和结束节点比较，这下面两种情况类似
1、旧开始节点/新开始节点
2、旧结束节点/新结束节点
如果旧开始节点和新开始节点是相同的节点及（key和sel一样）
会调用patchvnode对比和更新节点
把旧开始和新开始索引往后移动
旧开始节点和新结束节点相同调用patchvnode对比和更新节点
把旧开始节点移动到右边更新索引
```
## 编程题
### 第一题

```
 答: /my-vue-router/src/vuerouter_history

```
### 第二题

```
 答:   
   // 处理 v-html 指令
    htmlUpdater (node, value, key) {
        node.innerHTML = value
        new Watcher(this.vm, key, newValue => {
            node.innerHTML = newValue
        })
    }
    // 处理 v-on 指令
    onUpdater (node, value, key, eventType) {
        node.addEventListener(eventType, value)
        new Watcher(this.vm, key, newValue => {
            node.removeEventListener(eventType, value)
            node.addEventListener(eventType, newValue)
        })
    }
```
### 第三题

```
 答: snabbdom-demo 目录下
```
