var checkPossibility = function (nums) {
    let count = 0;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            if (i - 1 >= 0 && nums[i - 1] > nums[i + 1]) {
                nums[i + 1] = nums[i];
            } else if (i - 1 >= 0 && nums[i - 1] < nums[i + 1]) {
                nums[i] = nums[i + 1];
            }
            count += 1;
            if (count > 1) {
                return false;
            }
        }
    }
    return true;
};