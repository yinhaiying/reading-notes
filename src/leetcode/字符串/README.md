# 字符串

## 647. 回文字符串的个数
1. 首先我们需要知道如何去判断回文子串。也就是根据左右两边指针来移动，只要出现指针对应的字符不同的，那么他就不是回文子串。如果遍历到终止条件(left <= right)还没有出现不同的，那么就是回文子串。
2. 找到每个元素的所有字符串。
因此，暴力解法就是找到每个子串，然后进行判断。时间复杂度是O(n^3)。如下所示：
```js
var countSubstrings = function(s) {
  let result = [];
  for(let i = 0;i < s.length;i++){
      for(let j = i;j < s.length;j++){
        let left = i;
        let right = j;
        let isPalindrome = true;
        while (left <= right) {
            if (s[left] !== s[right]) {
                isPalindrome = false;
                break;
            }
            left++;
            right--;
        }
        // 判断是否遍历到达终点位置了
        if (isPalindrome){
            result.push(s.slice(i, j + 1));
        }
      }
  }
  return result.length;
};
```
事实上，我们可以充分利用回文的特性，也就是对称性。以每个字符为中心去找能够以它为中心形成回文的字符串。
这样的话我们就可以减少很多的子串的判断，比如第一个字符，以它为中心就只有两种可能：
1. 它单独一个字符形成子串
2. 它和它右侧的字符形成子串(由于左侧没有字符，因此它的子串长度是个偶数)
也就是说任何一个子串都会有一个中心，如果是一个奇数子串，那么它的中心就是中心位置，如果是一个偶数子串，那么它的中心就是中间两个位置。因此，一个元素它既可以是单独作为一个串的中心，也可以作为中心的其中一个元素。因此，我们需要分情况讨论。
最终的实现如下所示：
```js
var countSubstrings = function (s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;
        // 如果它为奇数个，那么就都从当前的元素开始，也就是说左右指针都指向当前元素
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
        left = i;
        right = i + 1;
        // 如果它为偶数个，那么左指针指向当前元素，右指针指向下一个元素
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }
    return count;
};
```

## 5. 最长回文子串
同理，所有的回文子串都可以使用上面这种方法来进行实现。
```js
var longestPalindrome = function(s) {
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
```