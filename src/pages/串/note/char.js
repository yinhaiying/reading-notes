/*
在字符串中非常重要的操作就是关于子串的操作：
其中子串的定位操作通常指的是串的模式匹配，他求的是子串（常称模式串）
在主串中的位置。模式串在子串中不一定一定存在。

简单的模式匹配：又称之为暴力模式匹配：
*/

var s1 = "wangdao";
var s2 = "gda";
const index = (s1, s2) => {
  var k = 0; // 记录当前子串的起始位置
  var i = k;
  var j = 0;
  while (i <= s1.length - 1 && j <= s2.length - 1) {
    if (s1[i] !== s2[j]) {
      //只要有一个字符不相等，那么整个子串都不会相等，因此，直接进行下一个子串的比较
      k += 1;
      i = k;
      j = 0;
    } else {
      i += 1;
      j += 1;
    }
  }
  if (j >= s2.length) {
    // 表示s2遍历完了，所有的都相等，因此，k就是子串的位置
    return k;
  } else {
    return -1;
  }
}

console.log(index(s1, s2))
