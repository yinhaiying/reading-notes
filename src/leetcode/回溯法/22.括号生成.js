/*
数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。



*/
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  var arr = ["("];
  var path = [];
  var result = [];
  var leftCount = 0; // 用于记录(的个数
  var rightCount = 0;
  n = 2 * n;

  var dfs = function (n, n, arr, path, result) {
    for (var i = 0; i < arr.length; i++) {
      path.push(arr[i]);
      if (arr[i] === "(") {
        leftCount += 1;
      } else {
        rightCount += 1;
      }
      if (path.length === n) {
        result.push([...path].join(""));
      } else {
        var newArr;
        if (leftCount === n / 2) {
          newArr = [")"];
        } else if (leftCount === rightCount) {
          newArr = ["("]
        } else {
          newArr = ["(", ")"]
        }
        dfs(n, n, newArr, path, result);
      }
      if (path.pop() === "(") {
        leftCount -= 1;
      } else {
        rightCount -= 1;
      }
    }
    return result;
  }
  return dfs(n, n, arr, path, result)
};


var generateParenthesis = function (n) {
  var arr = ["("];
  var path = [];
  var result = [];
  var leftCount = 0; // 用于记录(的个数
  var rightCount = 0;

  var backTrack = function (arr, path) {
    for (var i = 0; i < arr.length; i++) {
      if (path.length === 2 * n) {
        result.push([...path].join(""));
        return;
      }
      // 作出选择
      path.push(arr[i]);
      if (arr[i] === "(") {
        leftCount += 1;
      } else {
        rightCount += 1;
      }

      // 进行下一层遍历
      var newArr;
      if (leftCount === n) {
        newArr = [")"];
      } else if (leftCount === rightCount) {
        newArr = ["("]
      } else {
        newArr = ["(", ")"]
      }
      backTrack(newArr, path, result);

      if (path.pop() === "(") {
        leftCount -= 1;
      } else {
        rightCount -= 1;
      }
    }
    return result;
  }
  return backTrack(arr, path, result)
};