/* 
有一个大小为10的数组， 里面的元素是从 1 到 10， 怎样随机从里面选择 1 个数呢？
*/


function getOneNum (arr){
  let len = arr.length;
  let index = Math.floor(Math.random()*len);  // 随机生成0~9的数字
  console.log(len,index)
  return arr[index];
}



/* 
有一个大小为10的数组， 里面的元素是从 1 到 10， 怎样随机从里面选择5个数呢？

*/
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function getNum(arr,k) {
    let result = [];
    let len = arr.length;
    while(result.length <k){
        let index = Math.floor(Math.random() * len); // 随机生成0~9的数字
        console.log("index:",index)
        let time = 0;
        while(result.indexOf(arr[index]) > -1){
            // 说明有这个数字，重新随机
            console.log(`重复数字出现了${time}次`)
            index = Math.floor(Math.random() * len);
            time++;
        }
        result.push(arr[index]);
    }
    return result
}
// console.log(getNum(arr, 5))

function generateRandomArr(arr){
    arr.sort(() => {
      return Math.random()-0.5;
    });
    return arr;
}


console.log(generateRandomArr(arr))