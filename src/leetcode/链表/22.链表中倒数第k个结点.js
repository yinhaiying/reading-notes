var getKthFromEnd = function (head, k) {
  let slow = head;
  let fast = head;
  let index = 1;
  while (index <= k) {
    fast = fast.next;
    index += 1;
  }
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
