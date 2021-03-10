

/* 

给定一个数组:arr = [ 1,3,5,7,9,11,14,16,15];
查找target为16的值的索引
*/
var arr = [1, 3, 5, 7, 9, 11, 14, 16, 15];
function two_part(arr,target){
  let left = 0;
  let right = arr.length -1;
  let mid;
  while(left <=right){
      mid = Math.floor(((left + right) / 2));
      if(arr[mid] < target){
          left = mid +1;
      }else if(arr[mid] > target){
          right = mid -1;
      }else{
          return mid;
      }
  }
  return -1;
}

console.log(two_part(arr,16))