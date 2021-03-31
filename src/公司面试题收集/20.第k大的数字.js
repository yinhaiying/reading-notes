/* 
编写一个方法，该方法接收两个参数，分别为k和一个无序的纯数字数组。该方法在执行后，会返回数组中第k大
的数字。特别注意，同数组中如果有两位数值一样大的数字，同数值数字排名并列。
如[3,1,3,2,5,4,5]中，第1大的数字是5，第2大的数字是4，第5大的数字是1？
*/

let arr = [3,1,3,2,5,4,5]
function fn(arr,k){
  arr = arr.sort((a,b) => a-b);
  arr = [...new Set(arr)];
  return arr[arr.length-k];
}
console.log( fn(arr,1))



// 冒泡排序：每次都能找到一个最大的值，因此只需要记录当前最大的值即可。
var findKthLargest = function (nums, k) {
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i; j++) {
      if (nums[j] >= nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
    if (i === k - 1) {
      console.log(nums)
      return nums[len - k];
    }
  }
};