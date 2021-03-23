var postorderTraversal = function (root) {
  let res = [];

  function traversal(root) {
    if (root !== null) {
      traversal(root.left);
      traversal(root.right);
      res.push(root.val);
    }
  }
  traversal(root);
  return res;
};