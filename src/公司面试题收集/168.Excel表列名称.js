/* 
    1 - > A
    2 - > B
    3 - > C
        ...
        26 - > Z
    27 - > AA
    28 - > AB
        ...
    关键是让原来余1的变成余0.因此可以让除数减少1。比如n=28，那么可以让n=27进行除法。
*/

var convertToTitle = function (n) {
    if (n <= 0) return "";
    let res = [];
    while (n) {
        n--;
        let remain = n % 26;
        res.unshift(String.fromCharCode(remain + 65));
        console.log(n);
        n = Math.floor(n / 26);
    }
    return res.join("");
};

console.log(convertToTitle(701))