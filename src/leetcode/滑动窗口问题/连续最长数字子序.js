
/* 
function fn(str) {
    var result = "";
    let start = 0;
    let end = 0;
    let len = 0;
    for (let i = 0; i < str.length; i++) {
        // 先不考虑
        if (Number(str[i] && (str[i] - str[i - 1] === 1))) {
            end += 1;
        } else {
            if (end - start) {
                result = slice(start, end);
            }
            start = i + 1;
        }
    }
}

function isNumber(value) {
    return typeof value === "number"
}

*/

// const str = '12234abc45612'
// 编写一个函数, 取到上面字符串中的连续最长数字子序, 如上字符串结果为: 456

function fn(str){
    let start = 0;
    let end = 0;
    let result = "";
    let index = 0;
    while (!isNumber(str[index])) {
        index++;
    }
    for( i = index;i < str.length;i++){
      if ((isNumber(str[i]) && (str[i] - str[i - 1] == 1)) || (isNumber(str[i]) && !isNumber(str[i - 1]))) {
          end += 1 ;
      }else{
          result = (end-start) > result.length ? str.slice(start,end):result;
          if(isNumber(str[i])){
              start = i;
          }else{
              start = i+1;
          }
          end = i+1;
      }
    }
    return result;
}

const str = '1aa22f345abc456712'
let result = fn(str);
console.log("result:",result);

function isNumber(value){
    return /[0-9]/g.test(value);
}