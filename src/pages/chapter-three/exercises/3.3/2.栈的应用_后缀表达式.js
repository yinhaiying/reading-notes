/*
栈的应用之后缀表达式:
((15/(7-(1+1)))*3)
转化成后缀表达式：

    15711+-/3*211++-
计算方法是：不是计算符号的压入栈中，遇到计算符号的弹出两个栈顶元素，通过计算符号得到运算结果，然后压入栈中。
*/
// var str = "15711+-/3*";
var arr = [15, 7, 1, 1, "+", "-", "/", "3", "*"];
var MyStack = require("../../notes/Stack.js");
function calculate(arr) {
  var myStack = new MyStack();
  var item;
  var next;  // 后面的数
  var first; //前面的数字
  for (var i = 0; i < arr.length; i++) {
    item = arr[i];
    if (!isNaN(Number(item))) {
      myStack.push(item);
    } else {
      next = myStack.pop();
      first = myStack.pop();
      switch (item) {
        case "+":
          value = Number(first) + Number(next);
          break;
        case "-":
          value = Number(first) - Number(next);
          break;
        case "*":
          value = Number(first) * Number(next);
          break;
        case "/":
          value = Number(first) / Number(next);
          break;
        default:
          break;
      }
      myStack.push(value);
      console.log(myStack.toString())
    }
  }
  var peak = myStack.peak();
  // console.log(myStack.getSize())
  return peak;
}
var result = ((15 / (7 - (1 + 1))) * 3);

console.log(calculate(arr));
console.log(result)
