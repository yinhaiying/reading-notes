/* 
给定一个以字符串表示的非负整数 num， 移除这个数中的 k 位数字， 使得剩下的数字最小。

注意:
    num 的长度小于 10002 且≥ k。num 不会包含任何前导零。
    输入: num = "1432219", k = 3
    输出: "1219"
    解释: 移除掉三个数字 4, 3, 和 2 形成一个新的最小的数字 1219。
*/
/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
var removeKdigits = function (num, k) {
    let len = num.length;
    let remain = len - k; // 剩余数字的长度
    console.log("remain:", remain)
    if (remain === 0) {
        return "0"
    }
    let stack = [];
    let i = 0;
    while (i < len) {
        // 递增栈 14 2 弹出4
        if (stack.length >= 1) {
            let top = stack[stack.length - 1];
            let remainNumCount = len - i + stack.length - 1;
            if (num[i] < top && remainNumCount >= remain) {
                // 必须确保是栈中的长度
                stack.pop();
            } else {
                stack.push(num[i]);
                i++;
            }
        } else {
            stack.push(num[i]);
            i++;
        }
    }
    while(stack.length > remain){
        stack.pop();
    }
    let result = stack.join("").replace(/^0+/, "");
    return result === "" ? "0" : result;
};

var num = "1234567890";
var k = 9;
console.log(removeKdigits(num, k))