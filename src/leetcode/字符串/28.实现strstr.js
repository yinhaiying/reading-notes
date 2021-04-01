/* 
给定一个 haystack 字符串和一个 needle 字符串， 在 haystack 字符串中找出 needle 字符串出现的第一个位置(从0开始)。 如果不存在， 则返回 - 1。
输入: haystack = "hello", needle = "ll"
输出: 2

*/

let haystack = "hello",
    needle = "ll";
var strStr = function (haystack, needle) {
    let i = 0;
    let j = 0;
    while(i < haystack.length && j < needle.length){
        if(haystack[i+j] === needle[j]){
          j++;
          // 按理来说i也需要++，需要记录初始的i，因此i不能动
        }else{
            j=0;
            i++;
        }
    }
    return j === needle.length ? i:-1;
};


console.log(strStr(haystack,needle))