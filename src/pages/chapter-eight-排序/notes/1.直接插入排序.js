
// 最简单的插入排序
function insert(arr) {
  var result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let item = arr[i];
    for (let j = result.length - 1; j >= 0; j--) {
      if (item >= result[j]) {
        result.splice(j + 1, 0, item);
        break;
      }
    }
    if (item < result[0]) {
      result.unshift(item);
    }
  }
  return result;
}

// 使用交换位置来代替插入
function insert2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let item = arr[i];
    let temp = i;
    for (let j = i - 1; j >= 0; j--) {
      if (item > arr[j]) {
        break;
      } else {
        [arr[temp], arr[j]] = [arr[j], arr[temp]];
        temp = j;
      }
    }
  }
  return arr;
}


// 使用移动位置来代替插入
function insert3(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];  // 记录下这个元素
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (temp > arr[j]) {
        break;
      } else {
        arr[j + 1] = arr[j];
      }
    }
    arr[j + 1] = temp;
  }
  return arr;
}
var arr = [49, 38, 65, 97, 76, 13, 27, 49];
console.log(insert3(arr))
