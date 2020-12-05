/* 
对长度为n的顺序表L，编写一个时间复杂度为O(n)，空间复杂度为O(1)的算法，该算法删除线性表中
所有值为x的数据元素。
分析：需要查找顺序表中值为x的元素，因此我们肯定需要遍历这个顺序表，这时间复杂度就是O(n)了，
也就是说我们除了查找不能再进行其他的遍历操作了。既然不能直接删除这个元素(因为会导致后面的元素往前移动，从而时间复杂度增大)，
那么唯一地方法就是覆盖，也就是说我们只需要把不等于x的值覆盖点等于x的值，只要获取到那些不等于x的值的元素就行。
*/
const removeEle = (arr, n, x) => {
    let k = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] !== x) {
            arr[k] = arr[i];
            k += 1;
        }
    }
    console.log("修改length前的arr:", arr)
    arr.length = k;
    console.log("修改length后的arr:", arr)
    return arr;
}

let arr = [1,2,3,4,4,5,4,6];
console.log(removeEle(arr,8,4));