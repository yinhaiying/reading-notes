var longestCommonPrefix = function (strs) {
    if (strs.length <= 0) {
        return "";
    }
    // 找出最短的字符串
    let str = strs[0];
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < str) {
            str = strs[i];
        }
    }
    // str = flow;
    let len = str.length;
    while (len > 0) {
        let item = str.slice(0, len);
        let result = strs.every((word) => {
            return word.indexOf(item) == 0;
        })
        if (result) {
            return item;
        } else {
            len--;
        }
    }
    return "";
};