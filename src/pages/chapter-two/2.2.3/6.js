/*
从有序顺序表中删除所有其值重复的元素，使得表中所有元素的值均不同


*/

const arr = [1, 2, 2, 2, 3, 3, 4, 4, 5, 5];
const arr1 = [1, 3, 3, 3, 3, 3, 11, 11, 15, 15];

// 有序
const removeRepeatEle1 = (arr) => {
  let i = 1;
  let k = 0;
  while (i < arr.length) {
    let w = 0;
    // 相等的话一直做重复的操作，因此放到while循环中
    while (arr[k] === arr[i]) {
      i += 1;
      w += 1;
    }
    //只有不等的时候才会做特殊的裁剪操作，因此放到外面。
    arr.splice(k, w);
    i = i - w + 1;
    k += 1;
  }
  return arr;
}

// 上面的方法存在问题，就是每次都是找到所有的重复元素进行切割，最终的时间复杂度是O(n2)，
// 实际上更好地方法是替换，将前面的始终保持有序，后面的非重复元素替换最后一个非重复的元素即可。
// 至于替换后后面的数组元素仍然是重复的，直接切割数组长度即可。
const removeRepeatEle = (arr) => {
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i += 1;
      arr[i] = arr[j]
    }
  };
  arr.length = i + 1;
  return arr;
}
console.log(removeRepeatEle(arr))   // [1,2,3,4,5]
console.log(removeRepeatEle(arr1))   // [1,2,3,4,5]
