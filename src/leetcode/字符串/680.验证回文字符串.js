/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    // 判断[l,r]是否是回文
    function isPalidrome(s, l, r) {
        while (l < r) {
            if (s[l] !== s[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        if (s[left] !== s[right]) {
            return isPalidrome(s, left + 1, right) || isPalidrome(s, left, right - 1);
        }
        left++;
        right--;
    }
    return true;
};

let str = "abc";
console.log(validPalindrome(str))