/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // 第一步：状态容器：
  var arr = new Array(m);
  for(let j = 0;j < arr.length;j++){
      arr[j] = new Array(n);
  }
  // 初始化
  arr[0][1] = 1;
  console.log(arr);
  for(let i =0;i < m;i++){
      arr[i][0] = 1;
  }
  for(let j =0;j < n;j++){
      arr[0][j] = 1;
  }
  // 状态转移方程:f(i,j) = f(i-1,j)+f(i,j-1)
  for(let i = 1;i < m;i++){
      for(let j = 1;j < n;j++){
          arr[i][j] = arr[i-1][j] + arr[i][j-1];
      }
  }
  return arr[m-1][n-1];
};

uniquePaths(2,2)