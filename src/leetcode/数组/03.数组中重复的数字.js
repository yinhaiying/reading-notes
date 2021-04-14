/*
找出数组中重复的数字。
在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

输入：
[2, 3, 1, 0, 2, 5, 3]
输出：2 或 3
*/

var findRepeatNumber = function (nums) {
  let index = 0;
  while (index < nums.length) {
    let item = nums[index];  // 每个位置的值
    if (item !== index) {
      if (item === nums[item]) {
        return item;
      } else {
        // 每个位置有对应的值,如果不在它所在的位置上，就交换
        [nums[index], nums[item]] = [nums[item], nums[index]];
      }
    } else {
      index++;
    }
  }
};
