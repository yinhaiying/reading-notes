/*
双向链表：
由于单向链表只有一个指向后继结点的指针，因此不能逆向操作。当我们需要访问前驱结点时(插入和删除)时，
只能从头开始遍历(访问后继结点的时间复杂度是O(1)，访问前驱结点的时间复杂度是O(n))。因此，我们希望给
链表添加一个指向前驱结点的指针，这样的话，一个结点既有指向前驱结点的指针又有指向后继结点的指针，
这就是双向链表。

双向链表的常见操作：







*/






class Node {
  constructor(value){
      this.value = value;
      this.prev = null;
      this.next = null;
  }
}

class DoubleLinkedList{
    constructor(){
        
    }
}