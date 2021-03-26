/*
给定一个二叉树，找出其最大深度。
二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
说明: 叶子节点是指没有子节点的节点。
    3
   / \
  9  20
    /  \
   15   7
最大深度为3：
*/

var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// 方法二：采用层序遍历的方法
var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  let queue = [root];
  let depth = 0;
  while (queue.length > 0) {
    let len = queue.length;
    while (len > 0) {
      let node = queue.shift();
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
      len--;
    }
    depth++;
  }
  return depth;
};
