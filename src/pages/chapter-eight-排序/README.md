# 排序

## 插入排序

最简单的插入排序，使用了 O(n)的空间：

```js
function insert(arr) {
  var result = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    let item = arr[i];
    for (let j = result.length - 1; j >= 0; j--) {
      if (item >= result[j]) {
        result.splice(j + 1, 0, item);
        break;
      }
    }
    if (item < result[0]) {
      result.unshift(item);
    }
  }
  return result;
}
```

但是，我们可以看到这种方法过于粗暴了，实际上我们只需要每次和前一个有序的数据进行比较，如果小于它，说明要移动到这个数前面，在上面我们是直接通过暴力地使用 splice 进行插入，但是这样的话可能会插入许多次，因为还需要继续往前比较。那么有没有更妥的方法来进行插入了。
**插入的第一种替换方法：将两者进行位置交换，然后记录交换后的位置即可。**

```js
function insert2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let item = arr[i];
    let temp = i;
    for (let j = i - 1; j >= 0; j--) {
      if (item > arr[j]) {
        break;
      } else {
        [arr[temp], arr[j]] = [arr[j], arr[temp]];
        temp = j; // 核心是需要记录交换后的位置,以方便下次进行交换
      }
    }
  }
  return arr;
}
```

**插入的第二种替换方法：将要插入的元素记录下来，将当前有序的元素往后移动**
这种方法是将当前元素往后移动，然后留出一个空位，再进行下一个比较，如果下一个比他小，那么空位就是当前元素了，如果下一个比他小，那么下一个元素继续往后移动，占据空位，这样的话就不需要存储元素的位置了。
跟交换位置的实现思路差不多。

```js
function insert3(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]; // 记录下这个元素
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (temp > arr[j]) {
        break;
      } else {
        arr[j + 1] = arr[j];
      }
    }
    arr[j + 1] = temp; // 每次都是在空的位置进行操作
  }
  return arr;
}
```

空间复杂度：O(1)
最好的时间复杂度 O(n)
最坏的时间复杂度为 O(n^2)
平均时间复杂度为 O(n^2)
是一个稳定的算法，在值相等的情况下，不会进行位置的变换，因此是稳定的。

## 插入排序

### 实现两个有序数组的合并

实现两个有序数组的合并，通常的方法就是双指针法，这里有意思的一点是使用了一个无限大的数作为哨兵，这样避免了
长度不一致时的边界判断。

```js
function merge(arr, start, divide, end) {
  // 左右切割两个数组
  let left = arr.slice(start, divide);
  let right = arr.slice(divide, end);
  // 往数组最后一个添加一个无限大的数，当它循环结束的时候，有边数组中的数就会一直小于它，从而添加进去。
  left.push(Number.MAX_SAFE_INTEGER);
  right.push(Number.MAX_SAFE_INTEGER);
  // 左右指针
  let i = 0,
    j = 0,
    k = start; // k标记位置
  while (k < end) {
    //循环条件就只需要判断是否填充满数组了即可。
    arr[k] = left[i] < right[j] ? left[i++] : right[j++];
    k++;
  }
  return arr;
}
```

我们使用上面这个函数来进行测试：

```js
var A = [1, 3, 5, 2, 4, 6];
var B = [2, 4, 6, 1, 3, 5];
var C = [2, 1];

console.log(merge(A, 0, 3, 6)); // [1,2,3,4,5,6]    将整个数组的有序部分进行排列
console.log(merge(B, 1, 3, 5)); // [2,   1,3,4,6,  5]  将数组中间位置有序部分进行排列
console.log(merge(C, 0, 1, 2)); // [1,2]   两个元素进行排列
console.log(merge(D, 0, 0, 1)); // [1]  一个元素进行排列
```

从上面的测试中，我们可以看出，我们可以在数组的任意位置，对数组有序部分进行排序。这就是归并排序的最基础的思路：

1. 我们一开始将数组拆分到只剩一个元素，那么它肯定是有序的。
2. 然后将这些有序的数组一个一个地进行合并，一开始是一一合并，然后是二二合并，然后是四四合并，然后是八八合并。最终合并成原数组。

我们可以思考下为什么要使用这种先拆再合，还不如直接插入排序简单易懂，O(n^2)这么麻烦？
我们知道插入排序的时间复杂度是 O(n^2)，假设我们有 100 个元素，那么需要进行 100\*100 = 10000 次操作。

1. 我们先将它进行拆分成 50+50 两个数组 A1 和 A2，那么分别对应的操作就是 50*50 + 50*50 = 5000 次操作。
2. 第一步得到的是两个有序的数组 A1 和 A2，然后我们需要使用我们刚刚的合并函数将他们进行合并，我们可以发现合并的操作是 O(n)(只有一个 for 循环，slice 操作只是多个 n 相加)，也就是说这部分的操作次数是 50+50。
3. 两个部分合起来的操作次数就是：5000+100 = 5100 <10000。

从上面的分析我们可以知道，如果能够得到两个有序数组，那么只需要 O(n)的时间复杂就可以将他们合并成新的有序数组，这比原来使用 O(n^2)要快得多。而且得到两个有序数组我们还可以优化，不需要像之前一样，只是简单的分为一半，然后再插入排序，还是 O(n^2)的时间复杂度。而是不断地将其进行拆分，最终达到一个数组长度为一个的数组，然后对他们进行合并。

```js
function mergeSort(arr, start, end) {
  if (end - start < 2) {
    return; // 只剩一个元素，不需要再进行拆分了。
  }
  let mid = Math.ceil((start + end) / 2); // 右边
  mergeSort(arr, start, mid); //先排好左边
  mergeSort(arr, mid, end); // 然后排好右边
  merge(arr, start, mid, end); // 最后合并
}
```

## 排序时间复杂度分析

| 排序     | 时间复杂度 | 空间复杂度 |
| -------- | ---------- | ---------- |
| 冒泡排序 | O(n^2)     | O(1)       |
| 插入排序 | O(n^2)     | O(1)       |
| 归并排序 | O(nlogn)   |            |
