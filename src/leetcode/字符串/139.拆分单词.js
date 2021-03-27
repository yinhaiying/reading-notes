/* 

给定一个非空字符串 s 和一个包含非空单词的列表 wordDict， 判定 s 是否可以被空格拆分为一个或多个在字典中出现的单词。


输入: s = "applepenapple", wordDict = ["apple", "pen"]
输出: true
解释: 返回 true 因为 "applepenapple"
可以被拆分成 "apple pen apple"。
注意你可以重复使用字典中的单词。

输入: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
输出: false

*/

let s = "applepenapple";
let wordDict = ["apple", "pen"];

// 这种实现方式有问题。
// var wordBreak = function (s, wordDict) {
//   let i = 0;
//   while(i < s.length){
//     let item = s.slice(0,i+1);
//     if(!wordDict.includes(item)){
//       i++;
//     }else{
//         s = s.slice(i+1);
//         console.log(s)
//         i=0;
//     }
//   }
//   console.log(s);
//   return s.length === 0;
// };



// 使用动态规划来实现
var wordBreak = function (s, wordDict) {
  let len = s.length;
  let dp = new Array(len);  // dp[i]字符串s中的前i个字符是否可以由字典中单词构成。
  dp[0] = true;
  for(let i =0;i < len;i++){
    for(let word of wordDict){
      let n = word.length;
      if(i + n < len){
        let str = s.slice(i,i+n);
        console.log("str:",str)
        // dp[i+n] = dp[i] + str[i] === word;
        if(dp[i] && str === word){
          dp[i+n] = true;
        }
      }
    }
  }
  console.log(dp)
  return dp[len-1]
};

console.log(wordBreak(s,wordDict))