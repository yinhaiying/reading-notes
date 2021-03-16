/* 
实现两个大数相加
var a = 11199911111;
var b = 111999222;
*/

function addStrings(num1,num2){
    let result = [];
    let i = num1.length -1;
    let j = num2.length -1;
    let carry = 0;       // 进位
    let remainder = 0;  // 余数
    let item1 = 0;
    let item2 = 0;
    while( i >=0 || j>=0){
      item1 = num1[i] == undefined ? 0 :Number(num1[i]);
      item2 = num2[j] == undefined ? 0 :Number(num2[j]);
      remainder = (item1 +item2 + carry )% 10; // 余数  18/10  = 8
      result.unshift(remainder);
      carry = Math.floor((item1 + item2 + carry) / 10);
      i--;
      j--;
    }
    if(i<0&j<0&carry>0){
        result.unshift(carry);
    }
    return result.join("");
}