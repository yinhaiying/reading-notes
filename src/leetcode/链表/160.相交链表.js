/*
判断两个链表是否相交
*/

// 方法一：遍历第一个链表，然后给这个链表的每个字段一个标记，然后遍历第二个链表，查找是否有这个标记。
var getIntersectionNode = function (headA, headB) {
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
