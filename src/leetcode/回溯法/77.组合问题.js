/*

给定两个整数 n 和 k，返回 1 ... n 中所有可能的 k 个数的组合。

示例:

输入: n = 4, k = 2
输出:
[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]
*/
// n 表示n个树，k表示返回的path的长度，比如12，23，长度为2，startIndex表示起始位置
function dfs(n, k, startIndex, path, result) {
  for (let i = startIndex; i < n + 1; i++) {
    path.push(i);
    if (path.length === k) {
      result.push([...path]);
    } else {
      dfs(n, k, i + 1, path, result);
    }
    path.pop();
  }
  return result;
}

console.log(dfs(4, 2, 1, [], []))
