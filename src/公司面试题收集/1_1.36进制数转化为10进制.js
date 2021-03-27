

let str = "1w";
function titleToNumber(str){

  let sum = 0;  // sum = sum + 1->36 * 36^(LEN-N-1)
  let len = str.length;
  let index = len - 1;
  while(index >= 0){
    let remain;
    if(Number(str[index]) < 10){
      remain = Number(str[index]);
    }else{
      remain = str.charCodeAt(index) - 87;
    }
    sum = sum + remain * Math.pow(36,len-index-1);
    index--;
  }
  console.log("sum:",sum)
  return sum;
}

titleToNumber(str)