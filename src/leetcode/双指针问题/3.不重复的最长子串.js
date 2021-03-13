/*
给定一个字符串， 请你找出其中不含有重复字符的 最长子串 的长度。
输入: s = "abcabcbb"
输出: 3
解释: 因为无重复字符的最长子串是 "abc"，
所以其长度为 3。


输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，
所以其长度为 1。


abcbd:
一开始：start的为0。end的值为0，然后end值+1，end值+1，end值+1，发现b出现过了。
那么把start的值置为b出现的位置之后（因为在b出现的位置之前，再次遍历最终还会出现b重复）。



*/


var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let end = 0;
  let result = "";
  let item = "";
  for (let i = 0; i < s.length; i++) {
    let index = item.indexOf(s[i]);
    if (index === -1) {
      end += 1;
      item = s.slice(start, end);
    } else {
      result = item.length > result.length ? item : result;
      start = index + 1;
      item = s.slice(start, end);
    }
  }
  return result;
};
var s1 = "abcabcbb";
var s2 = "bbbbbb";
var s3 = "pwwkew";
var s4 = "dvdf"
// console.log(lengthOfLongestSubstring(s1));
// console.log(lengthOfLongestSubstring(s2));
// console.log(lengthOfLongestSubstring(s3));
console.log(lengthOfLongestSubstring(s4));
