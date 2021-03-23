# 数组中的topk问题

数组中的top K问题，也就是常见的最大的第几个数问题。一般有三种方法：
1. 排序，取第k个
2. 构造前k个最大元素小顶堆，取堆顶
3. 计数排序或者桶排序。但是他们都要求输入的数据必须是有确定范围的整数。




## 前k个高频数字
```js
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  let obj = {};
  for(let i = 0;i < nums.length;i++){
    if(obj[nums[i]]){
        obj[nums[i]]+=1;
    }else{
        obj[nums[i]] = 1;
    }
  }

  let arr = Object.entries(obj);
  arr.sort((a,b) => b[1] - a[1]);
  let result = [];
  arr.forEach((item,index) => {
    if(index <= k - 1){
      result.push(item[0]);
    }
  });
  return result;
};


```