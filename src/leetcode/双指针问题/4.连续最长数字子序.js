/* 
// const str = '1224abc45612'
// 编写一个函数, 取到上面字符串中的连续最长数字子序, 如上字符串结果为: 456
*/

const str = 'a122345abc45612'
function longestNumberSubstring(str){
  let start = 0;
  let end = 0;
  let result = "";
  while(end < str.length){
    if (!isNumber(str[end])) {
      result = (end - start) > result.length ? str.slice(start,end):result;
      start = end + 1;
      end += 1;
    }else{
        // 前一个不是number
        if(!isNumber(str[end-1])){
          start = end;
          end +=1;
        }else{
           if(str[end] - str[end -1] == 1){
               end+=1;
           }else{
               result = (end - start) > result.length ? str.slice(start, end) : result;
               start = end;
               end += 1;
           }
        }
    }
  }

  return result;
}

function isNumber(value) {
  const re = /[0-9]/g;
  return re.test(value);
}

console.log( longestNumberSubstring(str))