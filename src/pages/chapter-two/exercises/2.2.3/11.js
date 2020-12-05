
/* 
求两个升序序列的中位数。
*/

/* 
1. 暴力破解法：将两个升序数组合并，由于数组的升序特点合并也不麻烦。然后找到中间的值即可。


*/

const findMid = (arr1,arr2) => {
  let midIndex = (arr1.length + arr2.length)/2;
  let left = 0;
  let right = 0;
  let result = [];
  while(left < arr1.length-1 && right < arr2.length-1){
    if(arr1[left] < arr2[right]){
        result.push(arr1[left]);
        left += 1;
    }else if(arr1[left] >= arr2[right]){
        result.push(arr2[right]);
        right += 1;
    }
  }
  while(left < arr1.length){
      result.push(arr1[left]);
      left +=1;
  }
  while(right < arr2.length){
      result.push(arr2[right]);
      right +=1;
  }
  return result[midIndex-1]
}


/* 
2. 利用中位数的特性：
  


*/

let arr1 = [11, 13, 15, 17, 19];
let arr2 = [2, 4, 6, 8, 10]
const searchMid = (arr1,arr2) => {
    let start1 = 0;
    let end1 = arr1.length - 1;
    let mid1;
    let start2 = 0;
    let end2 = arr2.length - 1;
    let mid2;
    while(start1 !== end1 || start2 !== end2){
        mid1 = parseInt((end1 + start1) / 2);
        mid2 = parseInt((end2 + start2) / 2);
        if(arr1[mid1] === arr2[mid2]){
            return arr1[mid1];
        }
        if(arr1[mid1] < arr2[mid2]){
            if((start1 + end1)%2 === 0){
                start1 = mid1;
                end2 = mid2;
            }else{
                start1 = mid1 + 1;
                end2 = mid2;
            }
        }else {
            if((start2 + end2) % 2 === 0){
                start2 = mid2;
                end1 = mid1;
            } else{
                start2 = mid2 + 1;
                end1 = mid1;
            }
        }
    }
    return arr1[start1] < arr2[start2] ? arr1[start1] : arr2[start2];
}
console.log(searchMid(arr1, arr2))