/* 
将一个按照升序排列的有序数组，转化为一颗高度平衡二叉搜索树。
[-10,-3,0,5,9]

二叉搜索树的特点：
1. 左节点比根节点小，右节点比根节点大。
2. 为了确保平衡。我们只需要把中间的值作为根节点(由于是排好序的，因此左边的会比中间值小，右边的会比中间值大，且左右两边数量会相同)
如此反复，每次都把中间节点作为根节点，从而确保大小和左右两边数量基本一致。


*/


var sortedArrayToBST = function (nums) {
    function buildNode(nums, start, end) {
        if (end - start < 0) {
            return null;
        }
        let mid = Math.ceil((start + end) / 2); // 根节点
        let root = new TreeNode(nums[mid]);
        root.left = buildNode(nums, start, mid - 1);
        root.right = buildNode(nums, mid + 1, end);
        return root;
    }
    return buildNode(nums, 0, nums.length - 1);
};