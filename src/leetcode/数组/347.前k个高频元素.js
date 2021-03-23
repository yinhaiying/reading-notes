/* 
给定一个非空的整数数组， 返回其中出现频率前 k 高的元素。
输入: nums = [1, 1, 1, 2, 2, 3], k = 2
输出: [1, 2]
*/

var nums = nums = [1, 2, 2, 4, 4, 2, 2, 3, 3, 3, ];
var topKFrequent = function (nums, k) {
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
  })
};

topKFrequent(nums,2)