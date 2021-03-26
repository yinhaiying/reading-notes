var detectCycle = function (head) {
  if (head === null || head.next === null) {
    return null;
  }
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      break;
    }
  }
  // 为了找到环的入口,需要再次进行运动，运动的规则是从头结点到环的入口和从相交界节点到环的的入口举例相等。
  if (!fast || !fast.next) return null;
  fast = head;
  while (fast && fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
};
