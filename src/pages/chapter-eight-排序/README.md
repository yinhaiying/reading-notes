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
这种方法是将当前元素往后移动，先元素直接占据它前面元素的位置，这样的话就不需要存储元素的位置了。
跟交换位置的实现思路差不多。

```js
function insert3(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i]; // 记录下这个元素
    for (let j = i - 1; j >= 0; j--) {
      if (temp > arr[j]) {
        arr[j + 1] = temp;
        break;
      } else {
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}
```

空间复杂度：O(1)
最好的时间复杂度 O(n)
最坏的时间复杂度为 O(n^2)
平均时间复杂度为 O(n^2)
是一个稳定的算法，在值相等的情况下，不会进行位置的变换，因此是稳定的。
