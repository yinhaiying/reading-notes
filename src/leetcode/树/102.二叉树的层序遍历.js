/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null) {
        return [];
    }
    let results = [];
    let queue = [root];
    while (queue.length > 0) {
        let len = queue.length;
        let result = [];
        while(len--){
            let node = queue.shift();
            if (node.left) {
                queue.push(node.left);
            }
            if (node.right) {
                queue.push(node.right);
            }
            result.push(node.val);
        }
        results.push(result);
    }
    return results;
};