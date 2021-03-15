class Queue {
  constructor() {
    this.queue = new Array();
    this.size = 0;
  }
  enqueue(element) {
    this.queue.push(element);
    this.size += 1;
  }
  isEmpty() {
    return this.size === 0;
  }
  dequeue() {
    if (!this.isEmpty()) {
      this.size -= 1;
      return this.queue.shift();
    }
  }
  getHead() {
    return this.queue[0];
  }
  toString() {
    let str = 'Queue:head [';
    for (var i = 0; i < this.size; i++) {
      str += this.queue[i];
      if (i !== this.size - 1) {
        str += ', ';
      }
    }
    str += '] tail';
    return str;
  }
}

let queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.toString())
console.log(queue.getHead())
queue.dequeue();
console.log(queue.toString())
console.log(queue.getHead())
