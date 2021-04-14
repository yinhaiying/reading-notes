var massage = function (nums) {
  // 状态转移方程 f(n) = Math.max(f(n-1),f(n-2)+nums[n])
  let len = nums.length;

  // 状态初始化
  if (nums.length <= 0) {
    return 0;
  } else if (nums.length === 1) {
    return nums[0]
  }
  // 状态容器和状态初始化
  let dp = [nums[0], Math.max(nums[0], nums[1])];

  // 转移方程
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return Math.max(dp[len - 1], dp[len - 2])
};
