/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  // 初始化db容器
  let m = grid.length;
  let n = grid[0].length;
  let dp = new Array(m);
  for (let j = 0; j < m; j++) {
    dp[j] = new Array(n);
  }
  // 初始化db
  dp[0][0] = grid[0][0];
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }
  // 状态转移方程
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i][j - 1], dp[i - 1][j]) + grid[i][j];
    }
  }
  return dp[m - 1][n - 1]

};
