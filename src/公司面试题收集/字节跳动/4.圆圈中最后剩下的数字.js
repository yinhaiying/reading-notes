var lastRemaining = function (n, m) {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(i);
  }
  let current = -1;
  while (arr.length > 1) {
    current = current + m;
    if (current >= arr.length) {
      current = current % arr.length;
    }
    arr.splice(current, 1);
    current--;
  }
  return arr[0]
};
let n = 9;
let m = 13;

let result = lastRemaining(n, m);
