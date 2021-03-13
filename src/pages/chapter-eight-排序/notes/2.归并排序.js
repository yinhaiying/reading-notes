



function merge(arr, start, divide, end) {
  // 左右切割两个数组
  let left = arr.slice(start, divide);
  let right = arr.slice(divide, end);
  // 往数组最后一个添加一个无限大的数，当它循环结束的时候，有边数组中的数就会一直小于它，从而添加进去。
  left.push(Number.MAX_SAFE_INTEGER);
  right.push(Number.MAX_SAFE_INTEGER);
  // 左右指针
  let i = 0, j = 0, k = start; // k从起始位置
  while (k < end) {   //循环条件就只需要判断是否填充满数组了即可。
    arr[k] = left[i] < right[j] ? left[i++] : right[j++];
    k++;
  }
  return arr;
}

var A = [1, 3, 5, 2, 4, 6];
var B = [2, 4, 6, 1, 3, 5];
var C = [2, 1]
var D = [1]
// console.log(merge(A, 0, 3, 6))  // [1,2,3,4,5,6]
// console.log(merge(B, 1, 3, 5))  // [2,   1,3,4,6,  5]
// console.log(merge(C, 0, 1, 2))  // [1,2]
// console.log(merge(D, 0, 0, 1))  // [1]


function mergeSort(arr, start, end) {
  if (end - start < 2) {
    return;// 只剩一个元素，不需要再进行拆分了。
  }
  let mid = Math.ceil((start + end) / 2);
  mergeSort(arr, start, mid);  // 合并左半部分成有序数组
  mergeSort(arr, mid, end);    // 合并右半部分成有序数组
  merge(arr, start, mid, end); //合并左右两个部分的数组
}

mergeSort(A, 0, A.length);
console.log(A)
