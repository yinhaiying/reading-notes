## 


### 实现任意进制的转换
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

#### 实现一个Symbol类型
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