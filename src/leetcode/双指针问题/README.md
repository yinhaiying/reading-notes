# 双指针问题
数组/列表/字符串中一般为左右指针，链表中一般为快慢指针。既然分左右，那么一般要求left <= right。


### 应用一：二分查找
给定一个数组:arr = [ 1,3,5,7,9,11,14,16,15];
查找target为16的值的索引。
```js
function two_part(arr,target){
  let left = 0;
  let right = arr.length -1;
  let mid;
  while(left <=right){
      mid = Math.floor(((left + right) / 2));
      if(arr[mid] < target){
          left = mid +1;
      }else if(arr[mid] > target){
          right = mid -1;
      }else{
          return mid;
      }
  }
  return -1;
}

```
像这种需要不断地在范围内进行查找的，通常都会设置左右两个指针，然后二分之后，修改其中一个指针。

### 应用二：两数之和
```js
function two_sum(arr,target){
  let left = 0;
  let right = arr.length -1;

  while(left < right){
      // 左值+右值大于target说明大了
      if (arr[left] + arr[right] > target) {
          // 大了，将右边的指针往左移动
          right -= 1;
      } else if (arr[left] + arr[right] < target) {
          left += 1;
      }else{
          return [left,right];
      }
  }
  return false;
}
```

### 应用三：不重复的子串
![寻找不重复的子串](./imgs/寻找不重复的最长子串.png)
寻找最长的子串，最好的方法就是不断地去查找某个区间之间的最长的子串，
然后不断扩大这个区间范围，直到扩充到最后。因此，我们的实现思路如下：
1. 定义两个变量start和end。start表示左区间，end表示右区间。
2. 移动右指针，扩大区间范围，观察[start,end]之间是否有重复。如果没有重复，继续往后移动。
3. 如果有重复。那么就记录当前[start,end]之间的长度，并与之前保留的最大长度进行比较，保留最大值。同时start移动到出现重复元素的第一个位置(只有重复元素之后的区间才可能不会再重复))。
4. 注意start移动时，只能往后移动不能往前移动
5. 注意最后返回的是区间之间的长度和当前记录的最大值之间的最大值。因为此时可能没有再出现重复，因此没有对最大值进行赋值。
```js
var lengthOfLongestSubstring = function (s) {
  let start = 0;
  let end = 0;
  let max = 0;
  let obj = {};
  while( end <= s.length-1){
      if (!(s[end] in obj)) {
          obj[s[end]] = end;
          end += 1;
      } else {
          max = Math.max(max, end - start);
          // start指针不能往后退，只能是当前一个和最新的中的最大值
          start = Math.max(obj[s[end]] + 1,start);
          obj[s[end]] = end;
          end += 1;
      }
  }
  return Math.max(max, end - start); // 返回最大值
};
```
