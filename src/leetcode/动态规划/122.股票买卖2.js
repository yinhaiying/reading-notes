/**
 * @param {number[]} prices
 * @return {number}
 */
var arr = [7, 1, 2, 3, 5, 3, 6, 4, 9, 11];
var maxProfit = function (prices) {
  let max = 0;
  for(let i = 1;i < prices.length;i++){
      if(prices[i] > prices[i-1]){
          max = max + (prices[i] - prices[i-1]);
      }
  }
  return max;
};
console.log(maxProfit(arr))