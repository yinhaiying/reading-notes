/* 
已知在一维数组A[m+n]中依次存放两个线性表(a1,a2,a3,a4..am)和(b1,b2,b3,b4,...bn)。
试编写一个函数，将数组中两个顺序表的位置互换。即将(b1,b2,b3,...bn)放在(a1,a2,a3,...am)的前面。
*/



const reverse1 = (arr,m,n) => {
    let result = [];
    for(let i = m; i< n;i++){
      result.push(arr[i]);
    }
    for(let j = 0;j < m;j++){
        result.push(arr[j]);
    }
    return result;
}

/* 
上面的方法虽然能够得到结果， 但是使用了额外的数组空间。 而且过于简单粗暴
实际上对于这种交换顺序的数组， 我们第一想法就是元素互相替换。 但是我们发现简单
的替换并不能实现效果， 因为每个部分的长度可能不一致， 如果替换后可能只替换了部分数据
最终没有实现我们想要的那种全部交换。 那有什么其他简便方法吗？
我们思考以下： 我们是不是可以先整体替换。 以[1, 2, 3, 4, 5, 12, 23, 34, 45, 56]为例
1. 第一次整体替换得到：[56,45,34,23,12,5,4,3,2,1];这样的化就实现了前后位置的颠倒
接下来就是把每部分捣打乱的顺序重新恢复回来，实际上就是两次局部地再次位置互换。
2. 局部交换位置:[12,23,34,45,56,  1,2,3,4,5]
最终就实现了我们想要的效果。
*/

let arr = [1, 2, 3, 4, 5,    12, 23, 34,45,56];
const reverse = (arr, m, n) => {
    let len = arr.length;
    let middle = parseInt(len/2)
    // 第一步：实现整体位置
    for(let i = 0;i < middle;i++){
        [arr[i], arr[len-i-1]] = [arr[len -i -1],arr[i]];
    }
    // 第二步：实现局部颠倒
    for(let j =0;j < parseInt(m/2);j++){
        [arr[j],arr[m-j-1]] = [arr[m-j-1],arr[j]];
    }
    for (let k = 0; k < parseInt(n / 2); k++) {
      [arr[m + k], arr[m + n - k - 1]] = [arr[m + n - k - 1], arr[m + k]]
    }
    return arr;
}

console.log(reverse(arr,5,5))