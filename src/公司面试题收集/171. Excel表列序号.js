var titleToNumber = function (columnTitle) {
    let str = columnTitle;
    let len = str.length;
    let index = len - 1;
    let sum = 0;
    while (index >= 0) {
        let item = str.charCodeAt(index) - 64; // 
        sum = sum + item * Math.pow(26, len - index - 1)
        index--;
    }
    return sum;
};