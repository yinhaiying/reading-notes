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
  if (root === null || root === p || root === q) {
    return root;
  }
  let pqInLeft = lowestCommonAncestor(root.left, p, q);  // p,q至少有一个存在左子树上。
  let pqInRight = lowestCommonAncestor(root.right, p, q); // p,q至少有一个存在右子树上。
  if(pqInLeft === null){
    // 说明在左子树上没有找到p和q，那么它肯定在右子树上。
    return pqInRight;
  }
  if(pqInRight === null){
     // 说明在右子树上没有找到p和q，那么它肯定在左子树上。
    return pqInLeft;
  }
  return root;
};