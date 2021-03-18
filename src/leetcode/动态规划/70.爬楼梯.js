/* 
f(k) = f(k-1) + f(k-2)


*/
var climbStairs = function (n) {
    if(n == 1) return 1;
    if(n == 2) return 2;
  // 第一步：创建一个状态容器：
  var arr = [];
  // 第二步：初始化：
  arr[0] = 1;
  arr[1] = 2;
  // 状态转移方程，计算每一个状态
  for(let i = 2;i < n;i++){
      arr[i] = arr[i-1] + arr[i-2];
  }
  // 返回指定的状态
  return arr[n-1];
};