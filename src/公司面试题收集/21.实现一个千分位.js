/* 

实现一个千分位：
19, 351, 235.235767
*/

let num = 19351235.235767
function numFormat(nums){
  let [num1,num2] = nums.toString().split(".");
  // 19351235  
  let arr = num1.split("").reverse();
  let res = [];
  for(let i = 0;i < arr.length;i++){
      if(i%3 === 0 && i!== 0){
          res.push(",");
      }
      res.push(arr[i]);
  }
  res.reverse();
  console.log("res:", res)
  if (num2) {
      res = res.join("")+"."+num2;
  }else{
      res = res.join("");
  }
  console.log("res:",res)
  return res;
}

numFormat(num)