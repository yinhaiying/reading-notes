

let preOrderTraversal = function(root) {
  const res = [];
  function traversal(root){
      if(root !== null){
          res.push(root.val); // 访问根节点的值
          traversal(root.left);  // 遍历递归左子树
          traversal(root.right); // 遍历递归右子树
      }
  }
  traversal(root);
  return res;
}