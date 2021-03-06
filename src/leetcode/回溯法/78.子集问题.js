var subsets = function (nums) {
  var result = [[]];
  var path = [];
  var n = nums.length;
  var k = n;
  var dfs = function (n, k, startIndex, path, result) {
    for (var i = startIndex; i < nums.length; i++) {
      path.push(nums[i]);
      if (path.length === k) {
        result.push([...path]);
      } else {
        result.push([...path]);
        dfs(n, k, i + 1, path, result);
      }
      path.pop();
    }
    return result;
  }
  return dfs(n, k, 0, path, result)
};
