var longestPalindrome = function (s) {
    // 出现整数次
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (!obj[s[i]]) {
            obj[s[i]] = 1;
        } else {
            obj[s[i]] += 1;
        }
    }
    let arr = Object.values(obj);
    let remainIndex = 0;
    let result = arr.reduce((sum, currentValue) => {
        if (currentValue % 2 !== 0) {
            remainIndex += 1;
            return sum + currentValue - 1;
        } else {
            return sum + currentValue;
        }
    }, 0)
    return remainIndex > 0 ? result + 1 : result;
};