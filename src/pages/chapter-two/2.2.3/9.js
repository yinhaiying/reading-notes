/* 
线性表(a1,a2,a3,...,an)中的元素递增有序且按照顺序存储与计算机内。要求设计一算法，完成用最少
时间在表中查找数值为x的元素，若找到则将其与后继元素位置相交换，若找不到则将其插入表中，并使得表中
元素仍然递增有序。


*/


const find = (arr,x) => {
    let minIndex = 0;
    for(let i = 0;i < arr.length;i++){
        if(arr[i] === x ){
            if (i + 1 < arr.length){
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                return arr;
            }else{
                return false;
            }
        }else if(arr[i] < x){
          minIndex = i;
        }
    }
    arr.length += 1;
    for(let i = arr.length -1;i>minIndex+1;i--){
      arr[i] = arr[i-1];
    }
    arr[minIndex+1] = x;
    return arr;
}

/* 
上面这种方法，通过遍历所有的元素来查找是否有与当前值相等的元素。实际上由于线性表是有序的。
我们可以通过折半查找，只在一部分进行查找。这样的化更加方便。




*/

const findByMiddle = (arr,value) => {
    let left = 0;
    let right = arr.length -1;
    let middle = left + parseInt((right - left) / 2);
    // 二分查找
    while(left <= right){
        if(arr[middle] < value){
            left = middle + 1;
        }else if(arr[middle] === value && middle !== arr.length-1){
            [arr[middle],arr[middle + 1]] = [arr[middle + 1],arr[middle]];
            return arr;
        }else if(arr[middle] > value){
            right = middle -1;
        };
        middle = left + parseInt((right - left)/2);
    }
    if(left > right){
        for( let i = arr.length - 1;i>=left;i--){
            arr[i+1] = arr[i];
        }
        arr[left] = value;
    }
    return arr;
    // 如果没有找到
    return arr;
} 

let arr = [1, 2, 3, 5, 5, 6, 7, 11, 16]
let value = 6;

console.log(findByMiddle(arr, 9))
