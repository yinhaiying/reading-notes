var inorderTraversal = function (root) {
  let res = [];
  function traversal(root){
      if(root !== null){
          traversal(root.left);
          res.push(root.val);
          traversal(root.right);
      }
  }
  traversal(root);
  return res;
};