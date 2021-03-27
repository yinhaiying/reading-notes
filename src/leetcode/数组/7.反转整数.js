var reverse = function (x) {
    let res = 0;
    while (x) {
        let n = x % 10;
        res = res * 10 + n;
        if (res > Math.pow(2, 31) - 1 || res < Math.pow(-2, 31)) return 0;
        x = parseInt(x / 10);  // 这里只能使用parseInt。因为可能是负数，如果使用Math.floor会出问题。
    }
    return res;
};

var x = 123;
console.log(reverse(x))