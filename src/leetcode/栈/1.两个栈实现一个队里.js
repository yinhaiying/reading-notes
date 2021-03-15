/*
使用两个栈实现一个队列

 */

class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(element) {
    this.stack1.push(element)
  }

  dequeue() {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }
    if (this.stack2.length > 0) {
      return this.stack2.pop();
    }
  }



}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);  // [1, 2, 3]

console.log(queue.dequeue());   // 1
console.log(queue.dequeue());   // 2
console.log(queue.dequeue());   // 3
