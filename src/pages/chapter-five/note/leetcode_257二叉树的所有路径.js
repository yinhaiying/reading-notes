/*
二叉树的所有路径：
给定一个二叉树，返回所有从根节点到叶子节点的路径。

说明: 叶子节点是指没有子节点的节点。
输入:

   1
 /   \
2     3
 \
  5

输出: ["1->2->5", "1->3"]

解释: 所有根节点到叶子节点的路径为: 1->2->5, 1->3


对于这种所有路径的题目，肯定是需要遍历整个二叉树的。其中有两个需要注意的地方：
1. 每次递归整个流程结束之后，也就是同时递归左侧和右侧之后，需要从pathArr中删除最后一个，也就是上一个路径

*/
var binaryTreePaths = function (root) {
  if (root === null) {
    return [];
  }
  var resultArr = [];
  var pathArr = [];
  var path = function path(node) {
    if (node === null) return;
    pathArr.push(node.val);
    if (node.left === null && node.right === null) {
      resultArr.push(pathArr.join("->"));
    } else {
      path(node.left);
      path(node.right);
    }
    // 这里必须删除一个
    pathArr.pop();
  }
  path(root);
  return resultArr;
};
