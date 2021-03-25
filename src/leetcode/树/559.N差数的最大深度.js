var maxDepth = function (root) {
  if (root === null) {
    return 0;
  }
  let maxDepth = 1;
  function traverse(root, depth) {
    if (root) {
      if (maxDepth < depth) {
        maxDepth = depth;
      }
      for (let i = 0; i < root.children.length; i++) {
        traverse(root.children[i], depth + 1);
      }
    }
  }
  traverse(root, maxDepth);
  return maxDepth;
};
