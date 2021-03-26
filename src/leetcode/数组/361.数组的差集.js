const difference = (nums1,nums2) => {
  let obj = {};
  let result = [];
  for(let i = 0;i < nums2.length;i++){
      obj[nums2[i]] = true;
  };
  for(let j = 0;j < nums1.length;j++){
    let item = nums1[j];  
    if(!obj[item]){
      console.log(item)
      result.push(item);
      // obj[item] = true;   判断是否重复
    }
  }
  return result;
}
var nums1 = [1,1,2,2,3,4,5];
var nums2 = [2,3,4];
console.log(difference(nums1,nums2));