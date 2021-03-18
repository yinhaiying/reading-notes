/* 
给定一个有序数组和一个指定元素，使用二分法查找这个元素首次出现的位置
*/

let arr = [1,2,2,4,4,4,6,7];
let target = 4;

function findIndex(arr,target){
    let left = 0;
    let right = arr.length-1;
    let mid = Math.floor((left+right)/2);
    let index = -1;
    while(left<=right){
        if(arr[mid] < target){
            left = mid +1;
        }else if(arr[mid] >target){
            right = mid -1;
        }else if(arr[mid] === target){
          index = mid;
          right = mid -1;
        }
        mid = Math.floor((left + right) / 2);
    }
    return index;
}
console.log( findIndex(arr,target))