var lowestCommonAncestor = function (root, p, q) {

    // 如果根节点等于其中一个结点，那么根节点一定是最近公共祖先
  if(root === null || root === p || root === q){
      return root;
  }

  let pInLeft = findNode(root.left,p) !== null;
  let pInRight = !pInLeft;
  let qInLeft = findNode(root.left,q) !== null;
  let qInRight = !qInLeft;
  
  if(pInLeft && qInLeft){
      return lowestCommonAncestor(root.left,p,q);
  }
  if(pInRight && qInRight){
      return lowestCommonAncestor(root.right,p,q);
  }
  return root;
  function findNode(root,node){
      if(root === null || root === node){
          return root;
      }
      let left = findNode(root.left,node);
      let right = findNode(root.right,node);
      return left ? left :right;
  }
};