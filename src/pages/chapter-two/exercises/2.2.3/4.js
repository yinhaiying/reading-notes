/* 
从有序顺序表中，删除其值在给定值s与t之间的所有元素,如果s或者t不合理或者顺序表为空，
则显示出错误信息并退出。
*/


// 这里没有利用数组的有序性
const removeRange = (arr,s,t) => {
  if(s > t){
      throw new Error("给定的范围必须是合理的");
  }
  if(arr.length === 0){
      return false;
  }
  let k = 0;
  for (let i = 0;i < arr.length;i++){
    if(arr[i] < s || arr[i] > t){
        arr[k] = arr[i];
        console.log("k:",k)
        k += 1;
    }
  }
  arr.length = k;
  return arr;
}

let arr = [1, 2, 3, 4, 4, 4, 5, 6, 7, 8, 9, 10, 11];
let arr1 = [];
let arr2 = [1,2,3,8];
// console.log(removeRange(arr,4,9))
// console.log(removeRange(arr2,9,5))


// 利用数组的有序性

const removeSort = (arr,s,t) => {
    if(arr.length === 0 || s > t){
        return false;
    }
    let minIndex = 0;
    let maxIndex;
    for(let i = 0;i < arr.length;i++){
      if(arr[i] >= s ){
          minIndex = i;
          break;
      }
    }
    for(let i = 0;i < arr.length;i++){
      if(arr[i] > t ){
          maxIndex =  i;
          break;
      }
    };
    let diff = maxIndex -minIndex;
    for(let k = maxIndex; k < arr.length;k++){
        arr[minIndex] = arr[k];
        minIndex +=1;
    }
    arr.length = arr.length - diff;
    return arr;
}
console.log(removeSort(arr, 4, 9))