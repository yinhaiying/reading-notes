/* 
给定一个整数数组 nums， 找到一个具有最大和的连续子数组（ 子数组最少包含一个元素）， 返回其最大和。
输入： nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
输出： 6
解释： 连续子数组[4, -1, 2, 1] 的和最大， 为 6。

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
let arr = [-2, -1];
var maxSubArray = function (nums) {
    if (nums.length == 1) {
        return nums[0]
    }
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            let partitionArr = nums.slice(i, j + 1);
            let sum = getSum(partitionArr);
            console.log("sum:",sum)
            max = Math.max(sum, max);
        }
    }
    function getSum(arr) {
        return arr.reduce((result, currentValue) => {
            result += currentValue;
            return result;
        }, 0)
    }
    return max;
};


var maxSubArray2 = function (nums) {

    let max = -Infinity;
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            sum += arr[j];
            max = Math.max(sum, max);
        }
        sum=0;
    }
    return max;
};
console.log(maxSubArray2(arr));