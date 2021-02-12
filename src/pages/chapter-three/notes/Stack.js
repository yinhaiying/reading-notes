
class Stack {
  constructor() {
    this.stack = new Array();
    this.size = 0;
  }
  push(element) {
    this.stack.push(element);
    this.size += 1;
  }
  pop() {
    if (!this.isEmpty()) {
      this.size -= 1;
      return this.stack.pop();
    }
  }
  isEmpty() {
    return this.size === 0;
  }
  peak() {
    return this.stack[this.size - 1];
  }
  getSize() {
    return this.size;
  }
  toString() {
    let str = 'Stack:[';
    for (var i = 0; i < this.size; i++) {
      str += this.stack[i];
      if (i !== this.size - 1) {
        str += ', ';
      }
    }
    str += '] top';
    return str;
  }
}


const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop(3);
stack.push(4);
stack.push(3);
// console.log(stack.peak());
// console.log(stack.toString())

module.exports = Stack;
