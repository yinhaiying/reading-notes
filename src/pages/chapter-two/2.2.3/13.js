/* 
给定一个含n(n>=1)个整数的数组，请设计要给在时间上尽可能高效的算法，找出数组中未出现的
最小的正整数。例如：{-5,3,2,3}中未出现的最小正整数是1；数组{1,2,3}中未出现的最小正整数是4。
。
*/

let arr = [-5, 2, 1, 4, 6, 8];
let arr1 = [1, 2, 3]
const findMinInt = (arr) => {
    // 获取当前数组上存在哪些元素，并记录最大的正整数
    let obj = {};
    let max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (!obj[arr[i]]) {
            obj[arr[i]] = 1;
        } else {
            obj[arr[i]] += 1;
        }
        // 找到最大值
        if(arr[i] >= max){
            max = arr[i];
        }
    }
    //遍历正整数元素
    for(let i = 1;i <= max;i++){
        if(!obj[i]){
            return i;
        }
    }
    return max + 1;
}

console.log(findMinInt(arr));
console.log(findMinInt(arr1));