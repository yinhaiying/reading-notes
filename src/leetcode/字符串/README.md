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

## 139 拆分单词

### 分析
我们要进行拆分单词，可能最暴力的想法就是遍历每一个字符，看到字典中是否有这个字符，如果有就把它切割，更新s的值，然后继续遍历，直到s的长度为0，表示所有的都切割完了，那么就能够正常实现拆分。示例：

```js
 s = "applepenapple", wordDict = ["apple", "pen"]
```
1. 字符a在wordDict中没有出现i++，变成ap
2. 字符ap在wordDict中没有出现,i++ 变成app
3. 字符app在wordDict中没有出现,i++ 变成appl
4. 字符appl在wordDict中没有出现,i++ 变成apple
5. 字符apple在wordDict中出现，因此阶段s。s变成penapple。重新开始遍历。
代码实现：
```js
var wordBreak = function (s, wordDict) {
  let i = 0;
  while(i < s.length){
    let item = s.slice(0,i+1);
    if(!wordDict.includes(item)){
      i++;
    }else{
        s = s.slice(i+1);
        console.log(s)
        i=0;
    }
  }
  console.log(s);
  return s.length === 0;
};
```
上面这种方法存在一个问题，那就是如果字典中可能存在多个值满足要求，比如：
```js
s = "aaaaaaa", wordDict = ["aaa", "aaaa"]
```
按照我们上面的分析，切分如下：
1. aaa在wordDict中出现，进行切分
2. aaaa在wordDict中出现,满足要求，进行切分
3. 剩下a不满足要求，因此，最终无法进行切割。
但是，事实上它是可以被切割的，这就是因为每次都找的aaa,而没有使用aaaa。
因此，这种实现方法存在问题。

### 动态规划

## 459.重复的子字符串
>给定一个非空的字符串，判断它是否可以由它的一个子串重复多次构成。给定的字符串只含有小写英文字母，并且长度不超过10000。输入: "abab"
输出: True
解释: 可由子字符串 "ab" 重复两次构成。

### 分析
一个字符串能够由他的子字符串重复组成。那么如果我们以这个重复的子字符串进行切割，那么得到的
按理来说应该只有各个空的字符串。再使用set去重之后，那么得到的应该就只有一个空字符串。因此可以根据
这个空的字符串来判断。
```js
var repeatedSubstringPattern = function(s) {
    for(let i = 1;i < s.length;i++){
        let item = s.slice(0,i);
        let arr = s.split(item);
        let result = [...new Set(arr)];
        if(result===""){
            return true;
        }
    }
    return false;
};
```
### 进一步优化——减少遍历次数
我们可以发现，我们每次都是去字符串中取一个字串，一直取到最后一个元素。事实上我们需要遍历这么长吗？
一个字符串能够由他的子串重复组成，既然要重复，那么子串的长度最多只能到字符串长度的一半吧。超过一半，两边重复不相等不可能重复的。因此，我们首先可以减少遍历次数
```js
var repeatedSubstringPattern = function(s) {
    if(s.length <=1){
        return false;
    }
    let len = (s.length/2)
    for(let i = 0;i < len;i++){
        let item = s.slice(0,i+1);
        let arr = s.split(item);
        let result = [...new Set(arr)];
        if(result==""){
            return true;
        }
    }
    return false;
};
```
但是，我们发现在Leetcode中优化程度还是很低，事实上我们最大的消耗还是在切割字符串，分割成数组，然后使用set等。因此，我们要优化这部分。

### 进一步优化——使用拼接法
思考一下，以`abab`为例，如果ab是重复组成的，那么将ab切割拼接到最后面，得到的字符串应该和原来的字符串相同。这样的话我们只需要判断
```js
var repeatedSubstringPattern = function(s) {
    if(s.length <=1){
        return false;
    }
    let len = (s.length/2)
    for(let i = 0;i < len;i++){
        let item = s.slice(0,i+1);
        let newStr = s.slice(i+1)+s.slice(0,i+1);   // 将前面的每个可能重复的字符，拼接到最后面
        if(newStr === s){
            return true;
        }
    }
    return false;
};
```





## 总结：
1. 调用split(a)进行分割转成数组进行操作
2. 快慢指针。
