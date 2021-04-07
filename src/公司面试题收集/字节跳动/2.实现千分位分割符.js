var num = 19351235.235767;

function formatNum(num){
    let [num1,num2] = num.toString().split(".");
    // num1   19351235   19,351,235     532,153,91
    // num2    235767
    num1 = num1.split("").reverse();  // 532351235
    let arr = [];
    for(let i = 0;i < num1.length;i++){
        if(i % 3 === 0 && i !== 0){
            arr.push(",");
        }
        arr.push(num1[i]);
    }
    let result= arr.reverse().join("");;
    if(num2){
      result = result + "." + num2;
    }
    return result;
}

console.log(formatNum(num))