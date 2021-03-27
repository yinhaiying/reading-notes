



/* 
                          
16进制：0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f
其中，判断如果是10，就把它变成a。a的code码是97，因此使用String.forCharCode(i+87);  // i = 10


*/

  function getNums36() {
      var nums36 = [];
      for (var i = 0; i < 36; i++) {
          if (i >= 0 && i <= 9) {
              nums36.push(i);
          } else {
              nums36.push(String.fromCharCode(i + 87));
          }
      }
      return nums36;
  }
    //十进制数转成36进制
    function scale36(n) {
        var arr = [];
        var nums36 = getNums36();
        while (n) {
            var res = n % 36;
            //作为下标，对应的36进制数，转换成
            arr.unshift(nums36[res]);
            //去掉个位
            n = parseInt(n / 36);
        }
        return arr.join("");
    }
    console.log(scale36(68));