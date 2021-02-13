/*
448. 找到所有数组中消失的数字
给定一个范围在  1 ≤ a[i] ≤ n ( n = 数组大小 ) 的 整型数组，数组中的元素一些出现了两次，另一些只出现一次。

找到所有在 [1, n] 范围之间没有出现在数组中的数字。

您能在不使用额外空间且时间复杂度为O(n)的情况下完成这个任务吗? 你可以假定返回的数组不算在额外空间内。
输入:
[4,3,2,7,8,2,3,1]

输出:
[5,6]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 方法一，使用额外的空间：
var nums = [4, 3, 2, 7, 8, 2, 3, 1];
var findDisappearedNumbers = function (nums) {
  var obj = {};
  for (var i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = true;
    }
  }
  var result = [];
  var index = 1;
  while (index <= nums.length) {
    if (!obj[index]) {
      result.push(index)
    }
    index++;
  }
  return result;
};

// console.log(findDisappearedNumbers(nums))
// [4,3,2,7,8,2,3,1]
// 交换法：把每个正确的值，放到它应该在的位置，比如4应该放在3这个位置上，8应该放在7这个位置上
// 如果不在这个合适的位置上就进行交换。
// 如果有重复的，比如 [4,3,2,4,8,2,3,1]
var findDisappearedNumbers2 = function (nums) {
  var i = 0;
  while (i < nums.length) {
    if (nums[i] == i + 1) {
      i++;
      continue;
    }
    var idealIndex = nums[i] - 1;
    if (nums[i] == nums[idealIndex]) {
      i++;
      continue;
    }
    [nums[idealIndex], nums[i]] = [nums[i], nums[idealIndex]];
  }
  var result = []
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] - 1 !== i) {
      result.push(i + 1)
    }
  }
  return result
};
console.log(findDisappearedNumbers2(nums))
