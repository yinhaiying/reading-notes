/**
 * @param {number[]} height
 * @return {number}
 */
var height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
var maxArea = function (height) {
  var max = 0;
  for (let i = 0; i < height.length; i++) {

  }
  return max;
};

// 双指针法
var maxArea = function (height) {
  let max = 0;
  let left = 0;
  let right = height.length - 1;
  while (left < right) {
    let area = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(max, area);
    if (height[left] <= height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
