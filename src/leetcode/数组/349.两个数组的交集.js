/* 
求两个数组的交集：
nums1 = [1, 2, 2, 1], nums2 = [2, 2]
*/

var intersection = function (nums1, nums2) {
  let obj = {};
  for(let i = 0;i < nums1.length;i++){
      if(!obj[nums1[i]]){
          obj[nums1[i]] = true;
      }
  }
  let result = [];

  for(let j = 0;j < nums2.length;j++){
    let item = nums2[j];
    if (obj[item] && result.indexOf(item) === -1) {
        result.push(item);
    }
  }
  return result;
};


// 进一步优化
var intersection = function (nums1, nums2) {
    let obj = {};
    for (let i = 0; i < nums1.length; i++) {
        if (!obj[nums1[i]]) {
            obj[nums1[i]] = true;
        }
    }
    let result = [];

    for (let j = 0; j < nums2.length; j++) {
        let item = nums2[j];
        if (obj[item]) {
            result.push(item);
            obj[item] = false;// 已经添加过了就不再允许添加了。
        }
    }
    return result;
};


var intersection = function (nums1, nums2) {
    let s1 = new Set(nums1);
    let s2 = new Set(nums2);
    let result = [];
    if(s1.size < s2.size){
      return [...s1].filter((item) => s2.has(item));
    }else{
        return [...s2].filter((item) => s1.has(item));
    }
};