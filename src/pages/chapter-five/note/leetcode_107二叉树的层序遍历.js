/*
给定一个二叉树，返回其节点值自底向上的层序遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）

例如：
给定二叉树 [3,9,20,null,null,15,7],

[
  [15,7],
  [9,20],
  [3]
]

分析：注意二叉树的层序遍历，依靠的是队列。每次将每一层的元素入队。然后遍历这一层元素。
每遍历一个就弹出一个，同时将弹出的这个结点的左右结点放入队列中。注意：由于队列中新增了
各种左右结点，这些结点不是在这一层应该遍历的数据。因此，遍历的范围在一开始就应该写死为len = arr.length;
因为如果使用arr.length动态长度，那么会导致遍历的不是这一层的数据。

*/

var levelOrderBottom = function (root) {
  if (root === null) {
    return []
  }
  var arr = [root];
  var result = [];
  // arr.length > 0长度不为0 ，说明有下一层。
  while (arr.length > 0) {
    let len = arr.length;  // 注意，这里必须记录下长度
    let itemResult = [];
    // 必须是len固定长度。len代表着这一层的结点个数。
    for (var i = 0; i < len; i++) {
      var pop = arr.shift();
      if (pop.left) {
        arr.push(pop.left);
      }
      if (pop.right) {
        arr.push(pop.right);
      }
      itemResult.push(pop.val);
    }
    result.push(itemResult);
  }
  // for(let i = 0;i < result.length/2;i++){
  //     [result[i],result[result.length-i -1]] = [result[result.length-i-1],result[i]]
  // }
  return result;

};
