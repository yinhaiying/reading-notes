/*
给定一个二叉树, 找到该树中两个指定节点的最近公共祖先。

百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”

例如，给定如下二叉树:  root = [3,5,1,6,2,0,8,null,null,7,4]


输入: root = [3,5,1,6,2,0,8,null,null,7,4], p = 5, q = 1
输出: 3
解释: 节点 5 和节点 1 的最近公共祖先是节点 3。

分析思路：公共祖先，存在以下几种情况
1. p和q分别在左右两侧，那么他们的公共祖先一定是根节点root。
2. p和q同时在左侧，那么只需要查找左侧结点即可。
3. p和q同时在右侧，那么只需要查找右侧结点即可。

因此，关键的核心就是要判断p和q结点在哪一侧，需要定义一个函数来判断。

*/


var lowestCommonAncestor = function (root, p, q) {
  if (root === null || root === p || root === q) {
    return root;
  }
  var find = function (root, node) {
    if (root === null || root === node) { return root };
    var left = find(root.left, node);
    var right = find(root.right, node);
    if (left === null) {
      return right;
    } else {
      return left;
    }
  }
  // 先找出p,q分别在哪个位置
  var pInLeft = find(root.left, p) !== null;
  var pInRight = !pInLeft;
  var qInLeft = find(root.left, q) !== null;;
  var qInRight = !qInLeft;
  if (pInLeft && qInLeft) {
    return lowestCommonAncestor(root.left, p, q)
  } else if (pInRight && qInRight) {
    return lowestCommonAncestor(root.right, p, q)
  } else {
    return root;
  }
};

// 但是上面的这种方法，太麻烦了，需要每次去找p是否在左侧，q是否在左侧。事实上我们可以可以同时
// 查找p和q是否在左侧pqInLeft，我们只需要返回查找到的值，如果有值，说明至少有一个在左侧。如果为null，
// 说明都在右侧，因此，只需要去右侧进行查找。



var lowestCommonAncestor = function (root, p, q) {
  var find = function (root, p, q) {
    if (root === null || root === p || root === q) { return root };
    var left = find(root.left, p, q);
    var right = find(root.right, p, q);
    return left ? left : right;
  }
  if (root === null || root === p || root === q) {
    return root;
  }
  // 先找出p,q分别在哪个位置
  var pqInLeft = find(root.left, p, q);
  var pqInRight = find(root.right, p, q);
  if (pqInLeft === null) {
    return lowestCommonAncestor(root.right, p, q)
  } else if (pqInRight === null) {
    return lowestCommonAncestor(root.left, p, q)
  } else {
    return root;
  }
};

// 再进一步优化：我们可以发现，存在非常多的重复的代码，find这个过程实际上就是lowestCommonAncestor
// 函数的功能


var lowestCommonAncestor = function (root, p, q) {
  // var find = function (root, p, q) {
  //   if (root === null || root === p || root === q) { return root };
  //   var left = find(root.left, p, q);
  //   var right = find(root.right, p, q);
  //   return left ? left : right;
  // }
  if (root === null || root === p || root === q) {
    return root;
  }
  // 先找出p,q分别在哪个位置
  // pqInLeft返回的就是先遍历到的左侧等于p或者q的值。
  var pqInLeft = lowestCommonAncestor(root.left, p, q);
  var pqInRight = lowestCommonAncestor(root.right, p, q);
  if (pqInLeft === null) {
    return pgInRight;
  } else if (pqInRight === null) {
    return pqInLeft;
  } else {
    return root;
  }
};
