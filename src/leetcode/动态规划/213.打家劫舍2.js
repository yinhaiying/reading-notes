

 var rob = function (nums) {
     if (nums.length === 1) {
         return nums[0];
     } else if (nums.length === 2) {
         return Math.max(nums[0], nums[1]);
     }
     let getMaxValues = function (nums) {
         let dp = [];
         // 初始化数据
         dp[0] = nums[0];
         dp[1] = Math.max(nums[0], nums[1]);
         for (let i = 2; i < nums.length; i++) {
             dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
         }
         return Math.max(...dp);
     }
     // 如果不偷窃第一个屋子
     let arr1 = JSON.parse(JSON.stringify(nums))
     arr1.shift();
     let result1 = getMaxValues(arr1);
     let arr2 = JSON.parse(JSON.stringify(nums))
     arr2.pop();
     let result2 = getMaxValues(arr2);
     return Math.max(result1, result2);
 };