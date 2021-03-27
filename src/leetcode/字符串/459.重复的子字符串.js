var repeatedSubstringPattern = function (s) {
    for (let i = 1; i < s.length; i++) {
        let item = s.slice(0, i);
        let arr = s.split(item);
        let result = [...new Set(arr)];
        if (result === "") {
            return true;
        }
    }
    return false;
};