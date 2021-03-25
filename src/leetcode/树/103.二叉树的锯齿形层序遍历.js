var zigzagLevelOrder = function (root) {
  if (root == null) {
    return [];
  }
  let result = [];
  function traverse(root, depth) {
    if (root) {
      if (!result[depth]) {
        result[depth] = [];
      }
      if (depth % 2 === 0) {
        result[depth].push(root.val);
      } else {
        result[depth].unshift(root.val);
      }
      if (root.left) {
        traverse(root.left, depth + 1);
      }
      if (root.right) {
        traverse(root.right, depth + 1);
      }
    }
  }
  traverse(root, 0)
  return result;
};
