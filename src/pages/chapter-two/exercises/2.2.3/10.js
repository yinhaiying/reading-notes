const transform = (arr, p) => {
    let n = arr.length - 1;
    reverse(arr, 0, n);
    reverse(arr, 0, n - p);
    reverse(arr, n - p + 1, n);
    return arr;
}
// 数组位置颠倒的方法 这个很重要
const reverse = (arr, start, end) => {
    if (start > end || end >= arr.length) {
        return;
    }
    let middle = parseInt((end + start) / 2);
    for (let i = 0; i <= middle - start; i++) {
        [arr[start + i], arr[end - i]] = [arr[end - i], arr[start + i]];
    }
    return arr;
}
let arr = [1, 3, 5, 7, 2, 4, 6, 8];
console.log(transform(arr, 5))