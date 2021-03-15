/*
删除最外层的括号：
输入："(()())(())"
输出："()()()"
解释：
输入字符串为 "(()())(())"，原语化分解得到 "(()())" + "(())"，
删除每个部分中的最外层括号后得到 "()()" + "()" = "()()()"。


*/
var MyStack = require("../../notes/Stack.js");
var S = "(()(()))";
var removeOuterParentheses = function (S) {
  var myStack = new MyStack();
  var str = "";
  var item;
  var firstPosition = 0;
  for (var i = 0; i < S.length; i++) {
    item = S[i];
    if (item === "(") {
      myStack.push(item);
    } else {
      myStack.pop();
      if (myStack.isEmpty()) {
        //说明匹配完毕
        var result = S.slice(firstPosition + 1, i)
        str += result;
        firstPosition = i + 1;
      }
    }
  }
  return str;
};

console.log(removeOuterParentheses(S));
