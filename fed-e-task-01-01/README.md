### 第一题
```
答：执行结果即输出结果是10。
因为执行a[6]()时，for循环已经执行完毕了，此时的i已经是10，而a[6]()内访问的i变量是全局的，就是当前i的值，所以结果为10，而且不管访问a数组中的那一个，输出结果都是10 

```
### 第二题
```
答：会保ReferenceError这个错误，不能在let定义前使用该变量。在ES6中，let, const 相对于之前的var没有了变量提升及增加了块级作用域的概念，即if语句内部会生成一个快级作用域，在let声明之前和块级作用域产生的这块区域是无法访问let声明的变量，也称暂时性死区，所以会报错
```
### 第三题
```
答：var arr = [12, 34,32, 89, 4]
let minNum = (arg) => Math.min(...arg);
minNum(arr)
```
### 第四题
```
答：三者的相同点
 1、都是定义变量的
三者的不同点
 1、var存在变量提升，而let,const不存在变量提升的问题
 2、let，const存在暂时性死区和es6引入了块级作用域概念
 3、let，var定义的变量可以修改，而const用于定义常量
```
### 第五题
```
答： 输出20；
根据this绑定是用谁调用就指向谁的特征，且内部的箭头函数中的this是指向最外层的obj,所以此时访问的是obj对象的属性啊，故输出20
```
### 第六题
```
答：1.使用Symbol来替代常量
   2.设置私有属性
   3.注册和获取全局Symbol
   4.iterator迭代器
```
### 第七题
```
答： 浅拷贝：对内存地址的复制，让目标对象指针和源对象指向同一片内存空间。注意：当内存销毁的时候，只想对象的指针，必须重新定义，才能够使用
深拷贝：深拷贝是指，拷贝对象的具体内容，二内存地址是自主分配的，拷贝结束之后俩个对象虽然存的值是一样的，但是内存地址不一样，俩个对象页互相不影响，互不干涉
```
### 第八题

```
答： 因为js是单线程的，一次只能处理一件事，这样当当前的任务计算量特别大，会造成后续的任务堵塞，为了解决这个问题，引入了异步编程的概念，当执行到异步任务时，会单独有个任务队列处理，当处理完之后，且主线程空闲下来时会拿到异步的处理结果，而EventLoop翻译成中文是事件循环，宏任务可以理解为在主线程上执行的，微任务由任务队列维护，当主线程空闲下来会执行当前当微任务，执行完后，通过Eventloop,执行下一个宏任务，常见当宏任务有：Script, settimmeout, setInterval
微任务为：promise.then
```
### 第九题
```
答：
  async function promiseLove (data) {
        return new Promise(resolve => {
          setTimeout(() => {
            resolve(data)
          }, 10)
        })
      },
  async function result() {
        const a = await promiseLove('hello')
        const b = await promiseLove('lagou')
        const c = await promiseLove('i love U')
        return a + b + c
  }
```
### 第十题
```
答：TypeScript：由Microsoft开发的面向对象语言，TypeScript是 JavaScript 的超集，包含了 JavaScript 的所有元素，在TypeScript中可以运行JavaScript代码。
 JavaScript 和 TypeScript不同点说明
    1.TypeScript可以运行JavaScript所有代码和编码方式
    2.使用TypeScript中一些新的概念，可使JavaScript开发变得容易和快捷
    3.TypeScript 加入一些新的概念(类) 使javascript实现一些复杂功能变得容易
    4.javascript 可以直接同Typescript一起运行，编译器会将Typescript代码转换为javascript
    5.Typescript中有静态类型,javascrip则没有
    6.TypeScript中每一个数据必须规定其数据类型，JavaScript不要求
    7.TypeScript为函数提供了缺省参数值。
    8.TypeScript中有模块的概念，可以封装数据 类 函数 声明等信息在模块里面
```
### 第十一题
```
任何事物都是有两面性的，我认为 TypeScript 的弊端在于：

1.有一定的学习成本，需要理解接口（Interfaces）、泛型（Generics）、类（Classes）、枚举类型（Enums）等前端工程师可能不是很熟悉的概念
2.短期可能会增加一些开发成本，毕竟要多写一些类型的定义，不过对于一个需要长期维护的项目，TypeScript 能够减少其维护成本
3.集成到构建流程需要一些工作量
4.可能和一些库结合的不是很完美
```