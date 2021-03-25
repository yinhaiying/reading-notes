/*
还是使用递归的思想来实现层序遍历，我们可以递归每一层，只需要给每一层分配一个数组，然后将这一层的
数据都保存到这个数组中即可。
*/
var levelOrder = function (root) {
  let res = [];
  function traverse(root, depth) {
    if (root !== null) {
      if (!res[depth]) {
        res[depth] = [];
      }
      res[depth].push(root.val);
      traverse(root.left, depth + 1);
      traverse(root.right, depth + 1);
    }
  }
  traverse(root, 0)
  return res;
};
