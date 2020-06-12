### 第一题
```
答：
原理：当声明一个变量并将这个变量赋一个引用类型的值时,引用次数就为1,如果将相同的值又被赋予另一个变量,则引用次数记为2,如果包含这个值引用的变量又引用其它值,则减1.当这个值的引用次数变成0时,则说明无法访问这个值了,就会回收这个值所占用的内存.这样,当垃圾收集器下次运行时,就会自动释放那些引用次数为0的值所占用的内存
问题： 当出现循环引用的时候，即使程序执行完了，因为引用计数不为0，垃圾回收系统就不能自动释放他们所占的内存 

```
### 第二题

```
答:
过程：标记整理分标记和整理两个阶段，
 标记阶段：可以理解为之前的标记清除算法，标记清除分标记和清楚两个阶段，首先标记出所有需要回收的对象，在标记完成之后统一回收所有被标记的对象。
 整理阶段：因为标记清除可能会导致内存碎片化，导致内部不连续，首先标记出所有需要回收的对象，让所有存活的对象都向一端移动，然后直接清理掉端边界以外的内存。
问题：运行效率上有点差
```
### 第三题

```
 答:
 v8的新生代主要用于存放时间较短的对象，新生代内存是由两个相同的空间组成
 分别为from空间和to空间，新生代的垃圾回收过程中主要采用了Scavenge算法。
 Scavenge算法是一种典型的牺牲空间换取时间的算法，在这两个空间中，始终一个处于使用状态，一个处于闲置状态，我们程序中声明的对象首先会被分配到From空间，当进行垃圾回收时，如果From空间中尚有存活对象，则会被复制到to空间进行保存，非存活的对象会被自动回收，当复制完成后，From空间就会和To空间完成一次角色互换，To空间会变为新的From空间，原来的From空间则变为To空间。

```
### 第四题

```
答：因为v8老生代，因为配置较大，存活的对象多，导致标记、清除、整理带来的停顿更加严重。
增量标记可以更细粒度的拆分，让回收中的标记阶段和应用逻辑交替进行，v8引入这个方式后最大停顿减少到原本1/6

```

### 代码题一

```
1.

let isLastInStock = fp.flowRight(fp.prop('in_stock'),fp.last)
console.log(isLastInStock(cars)

2.

let getFirstCarName = fp.flowRight(fp.prop('name'), fp.first)
console.log(getFirstCarName(cars))

3.

let _average = function(xs){
    return fp.reduce(fp.add, 0, xs) / xs.length 
}
let averageDollarValue = fp.flowRight(_average, fp.map(car=>car.dollar_value))
console.log(averageDollarValue(cars))

4.

let _underscore = fp.replace(/\W+/g, '_')
let sanitizeNames = fp.map(fp.flowRight(_underscore, car=>car.name))
console.log(sanitizeNames(cars))

```
### 代码题二

```
1.

const fp = require('lodash/fp') 
const { Maybe, Container } = require('./support')

let maybe = Maybe.of([5, 6, 1])
let ex1 = maybe
    .map(fp.map(fp.add(1)))

2.

let xs = Container.of(['do', 'ray', 'me', 'fa', 'so', 'la', 'ti', 'do'])
let ex2 = xs
    .map(fp.first)
3.

let safeProp = fp.curry(function(x, o){
    return Maybe.of(o[x])
})
let user = {id: 2, name: 'Albert'}
let ex3 = safeProp('name', user)
    .map(fp.first)
console.log(ex3)

12.

let ex4 = n => Maybe.of(n)
    .map(parseInt)
    ._value
console.log(ex1(null))

```
