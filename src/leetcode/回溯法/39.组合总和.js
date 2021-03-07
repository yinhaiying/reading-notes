/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  var k = target;
  var n = candidates.length;
  var path = [];
  var result = [];
  var sum = function (arr) {
    return arr.reduce((result, current) => result + current, 0);
  }
  var dfs = function (n, k, startIndex, path, result) {
    for (var i = startIndex; i < candidates.length; i++) {
      path.push(candidates[i]);
      var total = sum(path);
      if (total === target) {
        result.push([...path]);
      } else if (total < target) {
        dfs(n, k, i, path, result);
      }
      path.pop();
    }
    return result;
  }
  return dfs(n, k, 0, path, result);
};
