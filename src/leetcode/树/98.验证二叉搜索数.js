    let result = [];

    function traverse(root) {
        if (root) {
            traverse(root.left);
            result.push(root.val);
            traverse(root.right);
        }
    }
    traverse(root);
    // 如果是二叉搜索树，那么得到的一定是一个升序数组
    let flag = true;
    result.push(Infinity);
    for (let i = 0; i < result.length; i++) {
        if (result[i] > result[i + 1]) {
            flag = false;
        }
    }
    return flag;