/*
输入: 1->2->2->1
输出: true

判断数组或者字符串是否为回文链表，那么比较简单，我们直接可以通过reverse来进行判断。
因此，方法一，我们可以直接遍历链表，然后将元素放入数组中，再判断是否为回文数组，这样的话
就简单很多了。但是，题目要求时间复杂度为o(n)，空间复杂度为O(1)，也就是说我们无法创建数组或者对象来
帮助我们处理。只能使用链表的自身来判断是否是回文了。

分析二：要判断一个东西是否为回文，我们需要拿到它前面的数和后面的数进行比较。比如1->2->3->3->2-1，
那么我们首先需要比较：
首位的1和末尾的1，
然后比较第2位置的2和倒数第二位置的2，
然后比较第3位置的3和倒数第三位置的3。
我们知道链表是没办法从后往前拿数据的，也就是说我们必须将前面的数据存储起来，在需要使用时弹出。
但是，由于不能增加空间复杂度，因此没办法使用栈或者队列之类的数据结构。那么还有其他方法能够帮助我们进行
存储吗？那就是递归。因此，这道题基本上可以肯定是用递归了。
*/
var isPalindrome = function (head) {
  if (head === null || head.next === null) {
    return true;
  }
  var prev = head;
  var current = head;  // 用于找到最后的节点
  while (current.next) {
    prev = current;
    current = current.next;
  }
  if (current.val !== head.val) {
    return false;
  } else {
    prev.next = null;
    return isPalindrome(head.next);
  }
  return true;
};
