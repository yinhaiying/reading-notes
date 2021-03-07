


function quickSort1(arr) {
  if (arr.length <= 1) {
    return arr
  }
  var pivot = arr[0];
  var left = [];
  var right = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] <= pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [].concat(quickSort(left), pivot, quickSort(right))
}

// console.log(quickSort(arr))

function partition(arr, start, end) {
  let pivot = arr[end - 1];
  let i = start;
  let j = end - 1;  // j是大于pivot的起始位置
  while (i < j) {
    if (arr[i] > pivot) {
      j--;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    } else {
      i++;
    }
  }
  [arr[end - 1], arr[j]] = [arr[j], arr[end - 1]];  //将中心点进行交换
  return j;
}
var arr = [10, 50, 30, 90, 40, 80, 70];
var arr2 = [10, 50, 30, 90, 40, 80, 70];
let p = partition(arr, 0, 7)
let p2 = partition(arr2, 1, 3)
// console.log(p, arr);    // 4  [ 10, 30, 50, 40,70, 90, 80]
// console.log(p2, arr2);  // 1  [10, 30, 50, 90, 40, 80, 70]


function quickSort(arr, low = 0, high = arr.length) {  // [low,high)
  if (high - low <= 1) {
    return;
  }
  const p = partition(arr, low, high);  //
  quickSort(arr, low, p);
  quickSort(arr, p + 1, high);
}
var arr = [10, 50, 30, 90, 40, 80, 70];
quickSort(arr);
console.log(arr)
