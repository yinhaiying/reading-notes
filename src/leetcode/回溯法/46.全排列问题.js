/*
输入: [1,2,3]
输出:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
*/
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  var n = nums.length;
  var k = n;
  var path = [];
  var result = [];
  var diffArr = function (arr1, arr2) {
    return arr1.filter((item, index) => {
      return arr2.indexOf(item) === -1;
    })
  }
  var dfs = function (n, k, arr, path, result) {
    for (var i = 0; i < arr.length; i++) {
      path.push(arr[i]);
      if (path.length === k) {
        result.push([...path]);
      } else {
        var newArr = diffArr(arr, path)
        dfs(n, k, newArr, path, result)
      }
      path.pop();
    }
    return result;
  }
  return dfs(n, k, nums, path, result);
};



var permute = function (nums) {
  let path = []; // 路径保存数组
  let result = []; // 结果数组
  backtrack(nums, path)

  function backtrack(nums, path) {
    // 递归终止条件
    if (path.length === nums.length) {
      result.push([...path]);
    }
    for (let i = 0; i < nums.length; i++) {
      // 由于不能重复，因此需要剪枝
      if (path.includes(nums[i])) {
        continue;
      }
      // 做选择
      path.push(nums[i]);
      // 进入下一层决策树
      backtrack(nums, path);
      // 撤销选择
      path.pop();
    }
  }
  return result;
};


