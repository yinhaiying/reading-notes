/*
 * @lc app=leetcode.cn id=215 lang=javascript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    function partition(arr, start, end) {
        let item = nums[end - 1]; // 选择最后一个作为基准点
        let i = start;
        let j = end - 1;
        while (i < j) {
            if (arr[i] > item) {
                j--;
                [arr[i], arr[j]] = [arr[j], arr[i]];
            } else {
                i++;
            }
        }
        [arr[j], arr[end - 1]] = [arr[end - 1], arr[j]];
        return j;
    }

    function quickSort(nums, start, end) {
        if (end - start <= 1) return;
        let pivot = partition(nums, start, end);
        quickSort(nums, start, pivot);
        quickSort(nums, pivot, end);
    }
    quickSort(nums, 0, nums.length);
    return nums[nums.length - k];
};
// @lc code=end
