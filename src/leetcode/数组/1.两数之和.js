/*
两数之和：


*/
let nums = [2,3,4, 7, 11, 15], target = 9;
let twoSum = function (nums, target) {
  let obj = {};
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let item = target - nums[i];
    if (nums[i] in obj && i !== obj[nums[i]]) {
      return [i, obj[nums[i]]];
    } else {
      obj[item] = i;
    }
  }
};

console.log(twoSum(nums, target))
