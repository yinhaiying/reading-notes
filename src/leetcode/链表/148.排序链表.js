
// 使用类似于冒泡排序的暴力破解法.
var sortList = function (head) {
  if(head == null){return head};
  let current = head;
  let len = 0;
  // 获取链表长度
  while(current){
    len +=1;
    current = current.next;
  }
  for(let i = 0;i < len -1;i++){
    current = head;
    while(current.next) {
        if (current.next.val < current.val){
            // 交换值
            let temp = current.val;
            current.val = current.next.val;
            current.next.val = temp;
        }
        current = current.next;
    }
  }
  return head;
};