/* 
以数组 intervals 表示若干个区间的集合， 其中单个区间为 intervals[i] = [starti, endi]。
请你合并所有重叠的区间， 并返回一个不重叠的区间数组， 该数组需恰好覆盖输入中的所有区间。
输入： intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18]
]
输出：[[1, 6], [8, 10], [15, 18]]
解释： 区间[1, 3] 和[2, 6] 重叠, 将它们合并为[1, 6].
*/

    var merge = function (intervals) {
        intervals.sort((a, b) => a[0] - b[0]); // [[2, 6], [1,9],[11, 13], [15, 18]]
        let results = [intervals[0]];
        for (let i = 1; i < intervals.length; i++) {
            let item = results[results.length - 1];
            if (intervals[i][0] > item[1]) {
                results.push(intervals[i]); // 这两个是不连续的
            } else {
                let min = Math.min(...item, ...intervals[i]);
                let max = Math.max(...item, ...intervals[i]);
                results[results.length - 1] = [min, max];
            }
        }
        return results;
    };