# 链表相关的算法

链表常见的算法主要有，翻转链表，判断链表是否有环，查找链表的第 k 个数等。

## 相交链表

### 方法一：添加标记法。

遍历第一个链表，然后给这个链表的每个字段一个标记，然后遍历第二个链表，查找是否有这个标记。

```js
var getIntersectionNode = function(headA, headB) {
  while (headA) {
    headA.flag = true;
    headA = headA.next;
  }
  while (headB) {
    if (headB.flag) {
      return headB;
    }
    headB = headB.next;
  }
  return null;
};
```

### 方法二：使用 map。

我们可以先遍历其中一个链表，然后将其链表的每个结点保存到 hash 中，由于每个结点都是一个引用地址，因此，不能使用对象 obj 这种数据结构，必须使用 map 这种数据接口。然后再遍历第二个链表，判断 map 中是否有值，如果有说明是相交的。

```js
var getIntersectionNode = function(headA, headB) {
  var hashMap = new Map();
  while (headA) {
    hashMap.set(headA, headA.val);
    headA = headA.next;
  }
  while (headB) {
    if (hashMap.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }
  return null;
};
```

### 方法三：使用 双指针法。

使用双指针的一个最重要的判断条件就是什么时候结束循环。一般是两种：

1. 某一个指针到达了最后
2. 两个指针重合了。这种情况需要考虑什么时候两个指针会重合。
   对于这道题，我们知道无法直接通过一个指针到达终点就结束循环，因为两个链表的长度不一致。因此，这里的终止循环条件是：
   两个指针重合了。两个链表只有同时遍历他们的总的长度的时候，才会出现重合。因此，我们在遍历完一个指针之后，需要把它移动到另外一个链表的表头

**如果链表长度一致：**

1. 如果不存在重合，那么他们最终都会在终点处重合即 p1 === p2 === null。
2. 如果存在重合，那么他们最终会在重合位置相交即 p1 = p2 === node。
   如下图所示：
   ![链表是否相交1](./imgs/链表是否相交1.png)
   **如果链表长度不一致：**

如果两个链表长度不一致，那么会导致一个链表遍历完了，另一个链表还没有遍历结束，这样的话，哪怕他们有交点，也直接错过了。我们必须让两个链表在同一时间到达同一位置，也就是说必须让两个链表遍历的长度是相同的。因此，我们可以考虑遍历两个链表的和的长度，比如一个链表的长度为 4，一个链表的长度为 3，那么我么可以考虑遍历长度为 7 的链表，这样的话如果有相交的话，他们一定会在他们的长度和的位置相交。实际上，也就是说我们每次遍历完一个之后就把指针移动另外一个链表的头部，再次进行遍历，直到两个指针相等为止，如果不存在交点，也会在 null 处相交。

1. 遍历两个链表的和的长度，如果有交点，则 p1 === p2 === node。
2. 如果没有交点，则 p1 === p2 === null。
   如下图所示：
   ![链表是否相交1](./imgs/链表是否相交2.png)
   综上所示，我们可以发现，我们只需要判断两个链表是否相等即可结束循环。

```js
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;

  let pA = headA,
    pB = headB;
  while (pA !== pB) {
    pA = pA === null ? headB : pA.next;
    pB = pB === null ? headA : pB.next;
  }
  return pA;
};
```
