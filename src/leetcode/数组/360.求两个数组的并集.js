const union = function (nums1,nums2){
    return [...new Set([...nums1,...nums2])];
}


var nums1 = [1,2,3,4,5,2,3,4,5];
var nums2 = [2,3,4,5]

console.log(union(nums1,nums2));  // [1,2,3,4,5]