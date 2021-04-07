// add(1)(2)(3)

function currify(fn,params =[]){
  return function(p){
    params.push(p);
    if(params.length === fn.length){
        return fn(...params);
    }else{
        return currify(fn,params);
    }
  }
}
// const currify = (fn, params = []) => {
//     return (p) => {
//         params.push(p);
//         // 一种情况是再次返回一个函数，还有一种情况是返回一个计算的结果
//         if (params.length === fn.length) { // fn.length是函数参数的个数。
//             return fn(...params);
//         } else {
//             return currify(fn, params);
//         }
//     }
// }

function _add(a,b,c){
  return a+b+c;
}
const add = currify(_add)
let result = add(1)(2)(3)
console.log(result);