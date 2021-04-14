/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) {
    return [];
  }
  let left = 0;
  let right = matrix[0].length - 1;

  let top = 0;
  let bottom = matrix.length - 1;
  let res = [];
  while (true) {
    // 向右运动
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    if (++top > bottom) {
      break;
    }
    // 向下运动
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right])
    }
    if (--right < left) {
      break;
    }
    // 向左运动
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i])
    }
    if (--bottom < top) {
      break;
    }
    // 向上运动
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left])
    }
    if (++left > right) {
      break;
    }
  }
  return res;
};
