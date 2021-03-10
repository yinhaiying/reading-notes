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

```js
初始化两个指针：
    left=0;right=0;
           right+=1 ;判断[left,right]有没有重复的，如果有记录下来当前的值str.substring(left,right)；
    left+1；// left必须只能加1，而不是等于end。比如可能存在这种var s4 = "dvdfcab";d它和第一个d重复了，但是从第二个v开始，都是不重复的。因此我们不能直接调到第二个d上。也就是说，实际上我们要遍历字符串的每个元素，然后滑动right，找到对应窗口中的最值问题。



```
