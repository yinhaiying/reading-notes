var mergeTwoLists = function (l1, l2) {
  let newNode = new ListNode(-1);
  let current = newNode;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else if (l2.val < l1.val) {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }
  if (l1) {
    current.next = l1;
  }
  if (l2) {
    current.next = l2;
  }
  return newNode.next;
};
