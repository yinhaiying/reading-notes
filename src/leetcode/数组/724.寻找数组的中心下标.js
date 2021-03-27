var pivotIndex = function (nums) {
    let right = nums.reduce((a, b) => a + b, 0)
    let left = 0
    for (let i = 0; i < nums.length; i++) {
        if (left === right - nums[i]) return i
        left += nums[i]
        right -= nums[i]
    }
    return -1
};