

function countSort(arr) {
  let min = arr[0];
  let max = arr[0];   // 计数排序必须知道最大值
  let obj = {};
  let result = [];
  // 第一步：取值  n次操作
  for (let i = 0; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
    if (max < arr[i]) {
      max = arr[i];
    }
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]] += 1;
    }
  }
  // 第二步：填充数组  (max-min次操作，中间有些值不存在，有些值存在多个，但是无论如何加起来都只进行max-min次遍历)
  for (let i = min; i <= max; i++) {
    while (obj[i] >= 1) {
      result.push(i);
      obj[i] -= 1;
    }
  }
  return result;
}
var arr = [49, 38, 65, 97, 76, 13, 27, 49];
console.log(countSort(arr))
