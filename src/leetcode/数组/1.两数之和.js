/*
两数之和：


*/

var nums = [1, 3, 2, 7, 9, 5];
var target = 11;
var twoSum = function (nums, target) {
  let p1 = 0;
  let p2;
  while (p1 < nums.length) {
    p2 = p1 + 1;
    while (p2 < nums.length) {
      if (target - nums[p1] === nums[p2]) {
        return [p1, p2];
      }
      p2++;
    }
    p1++;
  }
};

console.log(twoSum(nums, target))
