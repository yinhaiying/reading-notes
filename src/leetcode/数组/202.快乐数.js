/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let obj = {};
    while (true) {
        let arr = n.toString().split("");
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            let item = Number(arr[i]);
            sum += Math.pow(item, 2);
        }
        if (sum === 1) {
            return true;
        } else {
            if (obj[sum]) {
                return false;
            } else {
                obj[sum] = true;
                n = sum;
            }
        }
    }
};