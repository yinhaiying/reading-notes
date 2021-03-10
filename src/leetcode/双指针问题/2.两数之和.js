/* 
var arr = [1,3,6,7,9,10,14,15];寻找target为13的sum
有序数组的两数之和

*/

var arr = [1, 3, 6, 7, 9, 10, 14, 15];
var target = 13;
function two_sum(arr,target){
  let left = 0;
  let right = arr.length -1;

  while(left < right){
      if (arr[left] + arr[right] > target) {
          // 说明大了，将右边的指针往左移动
          right -= 1;
      } else if (arr[left] + arr[right] < target) {
          left += 1;
      }else{
          return [left,right];
      }
  }
  return false;
}

console.log(two_sum(arr,target))