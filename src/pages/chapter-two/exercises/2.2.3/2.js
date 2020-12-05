/* 
设计一个高效算法，将顺序表L的所有元素逆置，要求算法的空间复杂度为O(1);
*/

const revertArr = (arr) => {
    if(arr.length <= 1){
        return arr;
    }
    let index = 0;
    while(index < arr.length/2){
        [arr[index], arr[arr.length - 1 - index]] = [arr[arr.length - 1 - index],arr[index]]
        index += 1;
    }
    return arr;
}
let arr = [1,2,3,4,5,6,7,8,9];
let arr1 = [1,2,3,4];

console.log(revertArr(arr));
console.log(revertArr(arr1));