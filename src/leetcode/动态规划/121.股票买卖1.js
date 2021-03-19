
// 暴力破解法
// var maxProfit = function (prices) {
//   let max = 0;
//   for(let i = 0;i<prices.length;i++){
//       for(let j = i+1;j<prices.length;j++){
//           max = Math.max(max,prices[j]-prices[i]);
//       }
//   }
//   return max;
// };


// 快慢指针法一：
// var maxProfit = function (prices) {
//    let curMin = prices[0];
//    let curMax = 0;
//    for(let i = 1;i < prices.length;i++){
//        if(prices[i] <curMin){
//            curMin = prices[i];
//        }else{
//            curMax = Math.max(curMax,prices[i] - curMin);
//        }
//    }
//    return curMax;
// };


// 快慢指针法2:
var maxProfit = function (prices) {
    let i = 0;
    let j = i+1;
    let max = 0;
    while(j < prices.length){
        if(prices[i] > prices[j]){
            // 在j后面的值与j的差值一定比i更大，因此不需要遍历i了
            i = j;
            j = i+1;
        }else{
            max = Math.max(prices[j] - prices[i],max);
            j++;
        }
    }
    return max;
};
var arr = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(arr))