
// const str = '1223abc45612';
// 编写一个函数, 取到上面字符串中的连续最长数字子序, 如上字符串结果为: 456


function isNumber(value) {
  return typeof value === "number"
}
function fn(str) {
  var result = "";
  let start = 0;
  let end = 0;
  let len = 0;
  for (let i = 0; i < str.length; i++) {
    // 先不考虑一开始不是
    if (Number(str[i] && (str[i] - str[i - 1] === 1))) {
      end += 1;
      result += str[i];
    } else {
      start = i + 1;
    }
  }
}
console.log(typeof 5)
