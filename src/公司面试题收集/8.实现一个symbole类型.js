/* 
Symbol([description])
当调用Symbol的时候， 会采用以下步骤: 
1. 如果使用new 就会报错
2. 如果description为undefined， 让descString为undefined。
3. 如果description不是undefined。 那么让descString转化为string。
4. 如果报错就返回
5. 返回要给新的唯一的Symbol值，它的内部属性[[description]]的值为descString。
*/

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
         "__Name__":{
            value: generateName(descString),
         },

    })
    return symbol;
}

let syml1 = SymbolPolyfill("symbol1");;
let syml2 = SymbolPolyfill("symbol1");;
console.log(syml1);
console.log(syml2.toString());
console.log(syml1 === syml2);