/* 
从顺序表中删除具有最小值的元素(假设唯一),并由函数返回被删除元素的值。空出的位置由最后一个元素填补
若顺序表为空，则显示出错信息并退出运行。
*/

const findMin = (arr) => {
  if(arr.length === 0){
      return false;
  }
  let min = arr[0];
  let index = 1;
  // 找到数组中最小的元素
  for(let i = 1;i < arr.length;i++){
      if(min > arr[i]){
          min = arr[i];
          index = i;
      }
  }
  // 空出的位置由最后一个元素填充
  arr[index] = arr[arr.length - 1];
  console.log("index:", index)
  console.log(arr);
  return min;
}

let arr = [ 7,1,3,14,5,9,33,21,45];

console.log(findMin(arr));