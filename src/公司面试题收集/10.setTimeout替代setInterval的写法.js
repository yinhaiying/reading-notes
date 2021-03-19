



// let timer2 = setTimeout(() => {
//     console.log("setTimeout")
// }, 2000)

function _setInterval(fn,time){
  let timer = setTimeout(() => {
      clearInterval(timer);
      fn();
      _setInterval(fn,time);
  },time)
}

let fn = () => {
    console.log("setInterval")
}


// 如果不使用函数进行包裹，那就需要使用arguments.callee表示当前正在执行的函数。
setTimeout(function(){
   fn();
   setTimeout(arguments.callee,1000)
},1000)


// let timer1 = setInterval(fn, 2000)
// _setInterval(fn,2000)