## 


### 1.实现任意进制的转换
#### 获取每个进制包含哪些数
首先要实现任意进制的转换，那么你就需要知道被转换进制一共有哪些值，比如：
二进制：0,1
八进制：0,1,2,3,4,5,6,7
十进制：0,1,2,3,4,5,6,7,8,9
十六进制：0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f
三十六进制：0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,i,j
我们可以发现，小于十进制的我们直接遍历10以内的数字即可，但是大于十进制的需要从a开始，因此我们需要根据序号得到a,b,c,d等字符。
```js
  function getnums(n) {
      var nums = [];
      for (var i = 0; i < n; i++) {
          if (i >= 0 && i <= 9) {
              nums.push(i);  // 小于10的直接添加到数组中
          } else {
              nums.push(String.fromCharCode(i + 87));  // 大于10的需要通过charCode得到字符
          }
      }
      return nums;
  }
```
通过上面的方法，我们可以得到任意进制的可以表示的数，比如36进制包括：
```js
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
```

#### 实现进制的转换
进制的转化就是用数不断地去整除对应的进制，比如十进制转换成2进制，就是不断地去除2，将得到的余数保存起来，每次都添加到数组前面(unshift)，最后通过join即可。以十进制转换成36进制为例：
```js
    function scale36(n) {
        var arr = [];
        var nums36 = getNums36();
        while (n) {
            var res = n % 36;
            //作为下标，对应的36进制数，转换成
            arr.unshift(nums36[res]);
            //去掉个位
            n = parseInt(n / 36);
        }
        return arr.join("");
    }
```

### 2. 实现一个Symbol类型
Symbol类型的初步实现
1. 调用Symbol生成的值是唯一的。这种唯一性通过对象来实现。每个对象都是一个引用类型的值。
```js
let SymbolPolyfill = function Symbol(description){
    if(new.target === Symbol){
        throw new Error("can not be invoked by new");
    }
    let descString = description === undefined ? undefined :description.toString();
    // 怎么保证它的唯一性了。实际上只需要保证每次创建的都是一个引用类型的值就可以了。
    // 毕竟每个引用类型的值都会创建一个堆内存。
    let symbol = Object.create(null);
    Object.defineProperty(symbol, "__Description__", {
            value:descString,
            writable:false,
            enumerable:false,
            configurable:false
    })
    return symbol;
}

```
2. 原生的Symbol 值可以显式转为字符串。
```js
Symbol("123").toString()  // 返回"Symbol(123)"
```
因此，我们的Symbol值也需要能够调用`toString`方法。因此，我们在原型上添加`toString()`，返回一个字符串;
```js
    let symbol = Object.create({
        toString:function(){
            return `Symbol(${this.__Description__})`
        }
    });
```

3. Symbol 值可以作为标识符，用于对象的属性名，可以保证不会出现同名的属性。
这里我们的实现与这条特性冲突了，因为对象作为属性会调用它的`toString`方法。
如下所示：
```js
let person = {"name":"海鹰"}
let obj2 = {};
obj2[person]= "你好"
console.log(obj2)  // { [object Object] : "你好"}
```
但是我们当前的toString方法返回的是统一的`Symbol(${this.__Description__})`，每次都是相同的，而不是唯一的。也就是说，我们需要在toString方法中返回一个唯一的标识。
实现唯一性，我们通常通过id来实现。每掉用一次id自增。
```js
    let generateName = (function(){
        var postfix = 0;  // 通过id来实现唯一性
        return function (descString) {
            postfix++;
            return '@@' + descString + '_' + postfix
        }
    })()
```
但是，这时候我们需要给自定义的Symbol增加Name属性了。对于多个属性的定义，不能使用`Object.defineProperty`，需要使用`Object.definedProperties`，
```js
let SymbolPolyfill = function Symbol(description){
    if(new.target === Symbol){
        throw new Error("can not be invoked by new");
    }
    let descString = description === undefined ? undefined :description.toString();
    // 怎么保证它的唯一性了。实际上只需要保证每次创建的都是一个引用类型的值就可以了。
    // 毕竟每个引用类型的值都会创建一个堆内存。
    let symbol = Object.create({
        toString:function(){
            return `Symbol(${this.__Name__})`
        }
    });
    let generateName = (function(){
        var postfix = 0;  // 通过id来实现唯一性
        return function (descString) {
            postfix++;
            return '@@' + descString + '_' + postfix
        }
    })()
    Object.defineProperties(symbol, {
         "__Description__":{
            value: descString,
         },
         // 新增属性
         "__Name__":{
            value: generateName(descString),
         },
    })
    return symbol;
}
```

### 3.洗牌算法
[洗牌算法](https://zhuanlan.zhihu.com/p/60386034)

#### 从大小为100的数组里面随机选择一个数
**有一个大小为10的数组， 里面的元素是从 1 到 10， 怎样随机从里面选择 1 个数呢？**
分析：生成一个随机数，可能第一想法就是通过Math.random()得到一个0和1之间的随机数，
然后通过诚意*len得到`[0,10)`之间的随机数，然后向下取整，得到`[0,9]`之间的值。
```js
function getOneNum (arr){
  let len = arr.length;
  let index = Math.floor(Math.random()*len);  // 随机生成0~9的数字
  console.log(len,index)
  return arr[index];
}
```

**有一个大小为10的数组， 里面的元素是从 1 到 10，怎样随机从里面选择5个数呢？**
选择5个数我们第一想法就是随机50次，每次都是随机的，那么每次都能够找到一个数。但是这50次是不是可能会重复。
为了避免重复，我们使用一个容器保存这50个数，如果有重复就重新随机，没有就添加进去数组，最后返回数组。
1. 生成随机数
2. 用数组保存随机数得到的数字，同时确保每次取得数字不会重复
```js
function getNum(arr,k) {
    let result = [];
    let len = arr.length;
    while(result.length <k){
        let index = Math.floor(Math.random() * len); // 随机生成0~9的数字
        console.log("index:",index)
        let time = 0;
        while(result.indexOf(arr[index]) > -1){
            // 说明有这个数字，重新随机
            console.log(`重复数字出现了${time}次`)
            index = Math.floor(Math.random() * len);
            time++;
        }
        result.push(arr[index]);
    }
    return result
}
```
但是我们可以统计一下，随机数出现重复得次数：
```js
console.log(getNum(arr,5))
// index: 3
// index: 2
// index: 0
// index: 4
// index: 0
// 重复数字出现了0次
// 重复数字出现了1次
// 重复数字出现了2次
```
我们可以发现，随着数组中元素越来多，出现重复次数也就会越来越多。这样的话，越到后面要拿到一个没有出现过的数字需要的次数越来越多。比如从100中拿99个数字，一开始拿了98个，要拿到剩下的2个随机数字需要花费的次数就非常多了。因此，这种方法就存在一定的局限性。

很多人可能会想到，那么我是不是可以随机打乱这个数组，然后选择其中50个数字就行了。这个思路是正确的。但是关键是如何随机的打乱数组。可能大家的第一想法就是这个。
```js
function generateRandomArr(arr){
    arr.sort(() => {
      return Math.random()-0.5;
    });
    return arr;
}
```
这种方法看起来好像是随机的，每个元素都有50%的可能和其他元素进行交换。但是这实际上取决于`sort`使用的排序算法。比如它使用冒泡排序，那么就会出现第一个元素和第二个元素各有50%的几率进行交换，第二个和第三个有50%的几率交换，第三个和第四个能够有50%的几率交换，这样的话第一个和第四个还有50%的几率交换吗？很明显前面的数字和后面的数字交换的概率越来越小了。因此，它可能不是一种随机的交换。

**洗牌算法实现真正的随机交换**
最后一个数和前面任意 n-1 个数中的一个交换，然后倒数第二个数和前面任意 n-2 个数中的一个交换。。。依次下去就行了。
```js
function shuffle(arr){
    let i = arr.length;
    let j;
    while(i>0){
        // j可以是任意数
      j = Math.floor(Math.random()*i)  // 0,1,2,3,4  找到任意的一个元素
      console.log(j);
      i--;  // i-- 才是最后一个元素
      [arr[i], arr[j]] = [arr[j], arr[i]]; // 将这个元素和它进行交换
    }
    return arr;
}
```




