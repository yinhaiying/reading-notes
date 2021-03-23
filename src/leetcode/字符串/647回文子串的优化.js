var countSubstrings1 = function (s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let left = i;
        let right = i;
        // 如果它为奇数个，那么就都从当前的元素开始，也就是说左右指针都指向当前元素
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
        left = i;
        right = i + 1;
        // 如果它为偶数个，那么左指针指向当前元素，右指针指向下一个元素
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;
            left--;
            right++;
        }
    }
    return count;

};