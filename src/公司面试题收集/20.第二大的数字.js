let arr = [3, 2, 1, 5, 6,7,5, 4];
const findKthLargest = (arr) => {
    if(arr.length <2){
        return -1;
    }
    let maxValue = arr[0],
        secondMaxValue = arr[0];
    for(let i = 1;i < arr.length;i++){
        if(arr[i] >= maxValue){
            secondMaxValue  = maxValue;
            maxValue = arr[i];
        }else if(arr[i] < maxValue && arr[i] >=secondMaxValue){
            secondMaxValue = arr[i];
        }
    }
    return secondMaxValue;
}
console.log(findKthLargest(arr))