function is(num){
    let temp = Math.floor(Math.pow(num, 0.5)) + 1;
    console.log("temp:", temp)
    for(let i = 2;i <= temp;i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}
let result = is(7);
console.log(result);