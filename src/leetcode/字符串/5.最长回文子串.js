/* 
给你一个字符串 s， 找到 s 中最长的回文子串。

输入： s = "babad"
输出： "bab"
解释： "aba"
*/


var longestPalindrome = function (s) {
  let result= "";
  for(let i = 0;i < s.length;i++){
      let left = i;
      let right = i;
      let str1 = "";  // 用于保存最长奇数子序列
      // 奇数子序列
      while( left >= 0 && right <= s.length-1 && s[left] === s[right]){
        str1 = s.slice(left,right+1);
        left--;
        right++;
      }

      // 偶数子序列
      left = i;
      right = i+1;
      let str2 = ""; // 用于保存偶数最长子序列
        while (left >= 0 && right <= s.length - 1 && s[left] === s[right]) {
            str2 = s.slice(left, right + 1);
            left--;
            right++;
        }
      if(str1.length > str2.length && str1.length > result.length){
          result = str1;
      }
      if(str2.length > str1.length && str2.length > result.length){
          result = str2;
      }
  }
  return result;
};

let str = "babad";
console.log(longestPalindrome(str))