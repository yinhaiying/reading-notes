/* 
将一个给定字符串 s 根据给定的行数 numRows， 以从上往下、 从左到右进行 Z 字形排列。

比如输入字符串为 "PAYPALISHIRING"
行数为 3 时， 排列如下：

P A H N
A P L S I I G
Y I R
之后， 你的输出需要从左往右逐行读取， 产生出一个新的字符串， 比如： "PAHNAPLSIIGYIR"。

请你实现这个将字符串进行指定行数变换的函数：

string convert(string s, int numRows);
*/


/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  // 确定周期  
  let n = 2*numRows - 2;   // 周期
  if(n === 0) return s;
  // 确定行号
  let rowCount = 0;
  let arr = new Array(numRows).fill("");
  for (let i = 0; i < s.length; i++) {
    rowCount = (i % n) < numRows -1 ? i %n:n-(i%n);
    console.log(1111);
    console.log("rowCount:",rowCount)
    arr[rowCount] += s[i];
  }
  console.log(arr)
  return arr.join("");
};
let s = "A", numRows = 1;
console.log(convert(s,numRows))