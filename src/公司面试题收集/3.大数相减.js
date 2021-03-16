/* 
1991 - 999;


*/

function fn(num1,num2){
    let i = num1.length -1;
    let j = num2.length -1;
    let item1 = 0;
    let item2 = 0;
    let carry = 0;
    let result = [];
    while(i >=0 || j>=0){
        item1 = num1[i] == undefined ? 0 :Number(num1[i]);
        item2 = num1[j] == undefined ? 0 :Number(num2[j]);
        if(item1 + carry -item2 > 0){
            result.unshift((item1-item2));
            carry = 0;
        }else if(item1 + carry -item2 < 0){
            result.unshift(item1+carry+10-item2);
            carry = -1;
        }
        i--;
        j--;
    }
    console.log(result)
    return result.join("");
}

console.log(fn("1991","999"))