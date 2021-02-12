/*
删除字符串中所有相邻的重复项
输入："abbaca"
输出："ca"
解释：
例如，在 "abbaca" 中，我们可以删除 "bb" 由于两字母相邻且相同，这是此时唯一可以执行删除操作的重复项。之后我们得到字符串 "aaca"，其中又只有 "aa" 可以执行重复项删除操作，所以最后的字符串为 "ca"。
*/
var MyStack = require("../../notes/Stack.js");
var S = "abbaca";

var removeDuplicates = function (S) {
  var myStack = new MyStack();
  myStack.push(S[0]);
  var peak;
  for (var i = 1; i < S.length; i++) {
    if (S[i] === myStack.peak()) {
      myStack.pop();
    } else {
      myStack.push(S[i])
    }
  };
  var str = "";
  console.log(myStack.toString())
  while (myStack.getSize() > 0) {
    str = myStack.pop() + str;
  }
  return str;
};
console.log(removeDuplicates(S))
