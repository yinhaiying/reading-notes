var sortArrayByParityII = function (nums) {
    let i = 0; // 偶数指针
    let j = 1; // 奇数指针
    while (i < nums.length && j < nums.length) {
        if (nums[i] % 2 !== 0) { // 说明是奇数
            [nums[i], nums[j]] = [nums[j], nums[i]]; // 确保了j所指的一定是奇数
            j += 2;
            continue;
        }
        i += 2;
    }
    return nums;
};