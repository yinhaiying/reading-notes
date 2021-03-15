/*
栈的最典型应用括号匹配：

(  (  (  (   )  )  )  )
1  2  3  4   4' 3' 2' 1'
我们可以发现，左括号中后写的左括号比如4最先闭合也就是4'最先出现。因此符合栈的后进先出的特点：
我们每次只需要碰到左括号压入栈中，碰到右括号弹出一个，看是不是左括号，如果是就匹配，如果不是，
那么肯定不匹配。
给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效
*/
// ([)])
var MyStack = require("../../notes/Stack.js");
function isValid(str) {
  // 如果为奇数，说明存在单身的左或者右括号，因此肯定不匹配。
  if (str.length % 2 !== 0) {
    return false;
  }
  var stack = new MyStack();
  var item;
  var peak;
  for (var i = 0; i < str.length; i++) {
    item = str[i];
    console.log("item:", item)
    if (item === ")") {
      peak = stack.peak();
      if (peak === "(") {
        stack.pop();
      } else {
        return false;
      }
    } else if (item === "]") {
      peak = stack.peak();
      if (peak === "[") {
        stack.pop();
      } else {
        return false;
      }
    } else if (item === "}") {
      peak = stack.peak();
      if (peak === "{") {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(item);
    }
  }
  if (stack.getSize() !== 0) {
    return false;
  }
  return true
}
var str = "()[]{}}";
console.log(isValid(str))
