  /* 
  判断一个数是否为质数：
  质数：只能被1和它本身整除，因此我们可以遍历从[2,n-1]，判断是否会被这中间的某一个值
  整除，如果有就不是质数。但是这样的话，实际上就会导致超时，因为每一个数都遍历了[2,n-1]次。
  
  事实上，质数有以下规则：

  
  */
  
  
  function isPrimse(n) {

      for (let i = 2; i <n; i++) {
          if (n % i === 0) {
              return false
          }
      }
      return true;
  }


  var countPrimes = function (n) {
      let arr = new Array(n).fill(true);
      let count = 0;
      for (let i = 2; i < n; i++) {
          if (arr[i]) {
              count += 1;
              // 为什么从i*i开始，因为在之前i*(i-1)，已经被(i-1)*i遍历过了。
              for (let j = i * i; j < n; j += i) {
                  arr[j] = false;
              }
          }
      }
      return count;
  };