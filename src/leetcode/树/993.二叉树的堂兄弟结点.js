/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    if (root === null) return false
    let queue = [root];
    let results = [];
    let depth = 0;
    while (queue.length > 0) {
        let len = queue.length;
        while (len > 0) {
            let item = queue.shift();
            results.push({
                value: item.val,
                parent: item.parent ? item.parent : null,
                depth: item.depth ? item.depth : 0
            })
            if (item.left) {
                item.left.parent = item;
                item.left.depth = depth + 1;
                queue.push(item.left);
            }
            if (item.right) {
                item.right.parent = item;
                item.right.depth = depth + 1;
                queue.push(item.right);
            }
            len--;
        }
        depth = depth + 1;
    }
    let [item1, item2] = results.filter((item) => {
        return item.value === x || item.value === y;
    })
    if (item1.depth === item2.depth && item1.parent !== item2.parent) {
        return true;
    } else {
        return false;
    }
};

// 进一步优化：
var isCousins = function (root, x, y) {
    if (root === null) {
        return false
    }
    let queue = [root] // 首先把 root 节点入队
    while (queue.length) {
        let len = queue.length // len 表示当前层的所有节点个数
        let array = []
        while (len) {
            let node = queue.shift() // 从队列里一个一个出队当前层的节点，直到推出 len 个
            if (node.val === x || node.val === y) {
                array.push(node)
            }
            if (node.left !== null) {
                node.left.parent = node.val // 记录子节点的父节点的值为 node.val
                queue.push(node.left) // 将左节点推进队列
            }
            if (node.right !== null) {
                node.right.parent = node.val // 记录子节点的父节点的值为 node.val
                queue.push(node.right) // 将右节点推进队列
            }
            len-- // 别忘了 len 要减一
        }
        if (array.length === 1) { // 如果该层只有一个元素，则一定不满足要求，直接返回flse
            return false
        } else if (array.length === 2) { // 如果该层拥有 x, y 两个元素
            // 父节点的值不同，返回 true,否则返回 false
            return array[0].parent !== array[1].parent ? true : false
        }
        // 其它情况继续迭代，直到所有节点迭代完毕为止
    }
    // 如果遍历结束都不满足，则直接返回 false
    return false
};