var addTwoNumbers = function (l1, l2) {
  let current = l1;
  let carry = 0;
  let temVal = 0;
  let num1, num2; //分别表示l1和l2每个结点的值
  let result = current;
  let prev = null;
  while (current) {
      num1 = l1 === null ? 0 : l1.val;
      num2 = l2 === null ? 0 : l2.val;
      temVal = (num1 + num2 + carry) % 10; // 18%10  8  8%10  8
      carry = Math.floor((num1 + num2 + carry) / 10);
      current.val = temVal;
      if (l1) {
          l1 = l1.next;
      }
      if (l2) {
          l2 = l2.next;
      }
      prev = current;
      current.next = l1 ? l1 : l2;
      current = current.next;
  }
  if (carry > 0) {
      prev.next = new ListNode(carry)
  }
  return result;
};

// 如果创建新的链表
var addTwoNumbers2 = function (l1, l2) {
    let carry = 0;
    let temVal = 0;
    let num1, num2; //分别表示l1和l2每个结点的值
    let result = new ListNode();
    let current = result;
    while (l1 || l2) {
        num1 = l1 === null ? 0 : l1.val;
        num2 = l2 === null ? 0 : l2.val;
        temVal = (num1 + num2 + carry) % 10; // 18%10  8  8%10  8
        carry = Math.floor((num1 + num2 + carry) / 10);
        let newNode = new ListNode(temVal);
        current.next = newNode;
        current = newNode;
        if (l1) {
            l1 = l1.next;
        }
        if (l2) {
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        current.next = new ListNode(carry)
    }
    return result.next;
};