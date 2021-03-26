/* 
求两个数组的交集：
nums1 = [1, 2, 2, 1], nums2 = [2, 2]
*/

var intersection = function (nums1, nums2) {
  let obj = {};
  for(let i = 0;i < nums1.length;i++){
      let item = nums1[i];
      if(!obj[item]){
          obj[item] = 1;
      }else{
          obj[item] += 1;
      }
  }
  let result = [];
  for(let j = 0;j < nums2.length;j++){
    let item = nums2[j];
    if (obj[item] >0 ) {
        result.push(item);
        obj[item] -=1;
    }
  }
  return result;
};





