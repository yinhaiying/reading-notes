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

*/


var lengthOfLongestSubstring = function (s) {
    let start = 0;
    let end = 0;
    let result = "";
    for (let i = 0; i < s.length; i++) {
        if (result.indexOf(s[i]) === -1) {
            end += 1;
            result = result.length < (end - start) ? s.slice(start, end) : result;
        } else {
            result = result.length < (end - start - 1) ? s.slice(start, end) : result;
            start++;
            end = i + 1;
        }
    }
    console.log("result:",result)
    return result.length;
};
var s1 = "abcabcbb";
var s2 = "bbbbbb";
var s3 = "pwwkew";
var s4 = "dvdf"
// console.log(lengthOfLongestSubstring(s1));
// console.log(lengthOfLongestSubstring(s2));
console.log(lengthOfLongestSubstring(s3));
// console.log(lengthOfLongestSubstring(s4));