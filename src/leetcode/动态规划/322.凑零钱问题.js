/* 
给定不同面额的硬币 coins 和一个总金额 amount。 编写一个函数来计算可以凑成总金额所需的最少的硬币个数。 如果没有任何一种硬币组合能组成总金额， 返回 - 1。

你可以认为每种硬币的数量是无限的
输入： coins = [1, 2, 5], amount = 11
输出： 3
解释： 11 = 5 + 5 + 1
*/



/* 
状态转移方程：
先确定状态：
dp[11]它可能的情况是：
1. 拿一枚面值位1的硬币 + 总金额位10的最优解法的硬币数。也就是dp[10] + 1。  这里的1表示只需要1这1枚硬币
2. 拿一枚面值为2的硬币 + 总金额为9的最优解法的硬币数。 也就是dp[9] + 1。 这里的1表示只需要2这1枚硬币
3. 拿一枚面值为5的硬币 + 总金额为6的最优解法的硬币数。 也就是dp[6] + 1。 这里的1表示只需要5这1枚硬币

dp[11] = Math.min(dp[10]+1,dp[])

*/
let coins = [1,2,5];
let amount = 11;
/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
    // 初始化状态容器
    let dp = new Array(amount + 1).fill(Infinity); // dp[i]表示总金额为i的时候的最优解法的硬币数
    // 初始化状态
    dp[0] = 0;
    // 状态转移方程
    for (let i = 1; i <= amount; i++) {
        // i表示总金额  假设总金额为1 ，coin为[2,3,4]，那么就肯定不行了
        // i表示总金额  假设总金额为1 ，coin为[2,3,4]，那么就肯定不行了
        for (let coin of coins) {
            if (i - coin >= 0) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    // 如果不存在就是-1。如果存在就直接返回
    return dp[amount] === Infinity ? -1 : dp[amount];
};