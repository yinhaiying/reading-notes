var kthSmallest = function (root, k) {
  // 二叉搜索树中序遍历是有序数组
  let result = [];
  function traverse(root) {
    if (root !== null) {
      traverse(root.left);
      result.push(root.val);
      traverse(root.right);
    }
  }
  traverse(root);
  return result[k - 1]
};
