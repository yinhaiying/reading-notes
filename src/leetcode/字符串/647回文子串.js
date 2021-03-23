

// 暴力破解法
var countSubstrings = function (s) {
  let result = [];
  for(let i = 0;i < s.length;i++){
      for(let j = i;j < s.length;j++){
        let left = i;
        let right = j;
        let isPalindrome = true;
        let isEven = (j - i + 1) % 2 === 0;  // 是否是偶数
        if(isEven){
            while (right - left >= 1) {
                if (s[left] !== s[right]) {
                    isPalindrome = false;
                    break;
                }
                left++;
                right--;
            }
            if (isPalindrome) {
                result.push(s.slice(i, j + 1));
            }
        }else{
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
  }
  return result;
};

