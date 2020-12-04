/*
将两个有序顺序表合并成一个新的有序顺序表，并由函数返回结果顺序表。
*/

const merge = (arr1, arr2) => {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length || j < arr2.length) {
    if (j >= arr2.length || arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i += 1;
    } else if (i >= arr1.length || arr1[i] >= arr2[j]) {
      result.push(arr2[j]);
      j += 1;
    }
  }
  return result;
}


let arr1 = [1, 3, 8, 11, 16, 19, 22];
let arr2 = [2, 5, 6, 7, 10, 28];
let arr3 = [1, 1, 1, 1];

console.log(merge(arr1, arr2));
console.log(merge(arr1, arr3));
console.log(merge(arr2, arr3));
