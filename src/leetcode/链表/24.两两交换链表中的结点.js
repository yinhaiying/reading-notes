var swapPairs = function (head) {
  if (head === null || head.next === null) {
    return head;
  }
  let slow = head;
  let fast = head.next;
  let dummy = new ListNode();
  dummy.next = fast;
  slow.next = fast.next;
  fast.next = slow;
  slow.next = swapPairs(slow.next);
  return dummy.next;
}
