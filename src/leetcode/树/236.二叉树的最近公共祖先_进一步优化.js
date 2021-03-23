/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if(root === null || root === p || root === q){
      return root;
  }
  let left = lowestCommonAncestor(root.left,p,q);
  let right = lowestCommonAncestor(root.right,p,q);
  if(left && right){
      // 在根结点的两侧
      return root;
  }
  // 不在两侧，说明要么在左子树上要么在右子树上
  // 因此，left和right一定至少有一个为null
  return left ?left :right;
};


var lowestCommonAncestor1 = function (root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }

  let pqInLeft = find(root.left,p,q);
  let pqInRight = find(root.right,p,q);
  if(pqInLeft === null){
    // 说明在左子树上没有找到p和q，那么它肯定在右子树上。
    return lowestCommonAncestor(root.right,p,q);
  }
  if(pqInRight === null){
     // 说明在右子树上没有找到p和q，那么它肯定在左子树上。
    return lowestCommonAncestor(root.left,p,q);
  }
  return root;
  // 查找是否有结点是否在子树身上
  function find(root,nodep,nodeq){
    if(root === null || root === nodep || root === nodeq){
      return root;
    }
    let left = find(root.left, nodep, nodeq);
    let right = find(root.right, nodep,nodeq);
    return left ? left :right;
  }
};