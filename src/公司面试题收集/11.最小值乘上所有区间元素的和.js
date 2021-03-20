/* 
给一个数组， 定义X为某个区间的最小值乘上这个区间内所有元素的和， 求最大的X。 
如数组为3 1 6 4 5， 则最大的X = 4 * （6 + 4 + 5） = 60


*/

let arr = [3,1,6,4,5];
function calcMax(arr){
    let max = 0;
    for(let i = 0; i < arr.length;i++){
        for(let j = i+1;j < arr.length;j++){
          let partitionArr = arr.slice(i,j+1);
          let min = Math.min(...partitionArr);
          let sum = sums(partitionArr);
          let temp = min * sum;
          max = Math.max(max, temp);
        }
    }
    function sums(list){
      return list.reduce((result,currentValue) => {
        return result+= currentValue;
      },0)
    }
    return max;
}

console.log(calcMax(arr));