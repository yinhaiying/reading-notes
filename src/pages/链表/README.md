## 链表的一些算法技巧

### 判断一个链表是否有环：

方式一：标记法
给链表的每个结点添加一个标记，如果遍历时找到这个标记了，说明有环。

```js
var hasCycle = function(head) {
  while (head) {
    if (head.flag) {
      return true;
    }
    head.flag = true;
    head = head.next;
  }
  return false;
};
```

方式二：快慢指针法：
通过两个指针 slow 和 fast，一个走的快，一个走的慢，如果有环的话，总会重合。

```js
var hasCycle = function(head) {
  if (!head || !head.next) {
    return false;
  }
  var slow = head;
  var fast = head.next;
  while (slow && fast && fast.next) {
    if (slow === fast) {
      return true;
    }
    slow = slow.next; // 跑得慢的跑一步
    fast = fast.next.next; // 跑得快必须跑两步
  }
  return false;
};

``;
```

### 翻转链表

翻转链表的核心就是需要不断移动指针

1. 第一个结点会变成最后一个结点，指向 null。因此，需要一个 prev 指针初始化为 null
2. 需要一个 current 指针用于遍历下一个结点
3. 由于 current.next 会指向前一个指针，因此需要一个临时指针 temp 记录下来 current.next。

```js
var reverseList = function(head) {
  var prev = null;
  var current = head;
  var temp = head;
  while (current) {
    temp = current.next; // 用来记录指针
    current.next = prev;
    prev = current;
    current = temp;
  }
  return prev;
};
```

### 判断一个链表是否为回文链表

1. 方法一，转化为数组，然后通过数组来判断，但是需要占据额外的空间。
2. 方法二：使用递归。先找到最后一个和第一个进行判断，然后记录下来倒数第二个，递归和第二个进行判断。
   这种方法虽然不太好，但是为我们的解题提供了一种思路，可以通过这种查找到某一个结点，然后暴力破解。

```js
var isPalindrome = function(head) {
  if (head === null || head.next === null) {
    return true;
  }
  var prev = head;
  var current = head; // 用于找到最后的节点
  while (current.next) {
    prev = current;
    current = current.next;
  }
  if (current.val !== head.val) {
    return false;
  } else {
    prev.next = null;
    return isPalindrome(head.next); // 递归判断第二个和最后一个。
  }
  return true;
};
```

3. 方法三：使用一个栈，将所有结点添加到栈中，然后每次 pop 一个出来和当前链表的结点进行比较。
