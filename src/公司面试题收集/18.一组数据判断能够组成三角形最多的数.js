/* 
给定一个包含非负整数的数组， 你的任务是统计其中可以组成三角形三条边的三元组个数。

输入: [2, 2, 3, 4]
输出: 3
解释:
    有效的组合是:
    2, 3, 4(使用第一个 2)
2, 3, 4(使用第二个 2)
2, 2, 3

能够形成三角形的条件是：任意两边之和大于第三边

*/

var triangleNumber = function (nums) {
  let count = 0;
  for(let i = 0;i < nums.length;i++){
      for(let j = i+1;j < nums.length;j++){
          for(let k = j+1;k < nums.length;k++){
              if((nums[i] + nums[j] > nums[k]) && (nums[i] + nums[k] > nums[j]) && (nums[k] + nums[j] > nums[i])){
                  count+=1;
              }
          }
      }
  }
  return count;
};

function isTriangle(selft,a,b,c){
    if(a===0 || b == 0 || c===0){
        return false;
    }
    if(a+b > c && a+c >b && b+c > a){
        return true;
    }
    return false;
}


var triangleNumber = function (nums) {
    let count = 0;
    let len = nums.length;
    nums.sort((a, b) => a - b); // 
    for (let i = 0; i < len; i++) {
        let j = i + 1;
        let k = i + 2;
        while (nums[i] > 0 && j < len && k <= len) {
            // 当k等于len时，其实是需要改变j了。
            if (k < len && nums[i] + nums[j] > nums[k]) {
                k++;
            } else {
                count += k - j - 1;
                j++;
            }
        }
    }
    return count;
};
