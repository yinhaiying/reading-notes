/* 
单链表的实现：
功能：
1. 通过




*/
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    // 在尾部插入元素
    append(element) {
        let node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length += 1;
        return this.toString();
    }
    // 在头部插入元素
    headInsert(element) {
        let node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.length += 1;
        return this.toString();
    }
    // 通过尾插法创建链表
    createByTailInsert(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.append(arr[i]);
        }
        return this.toString();
    }
    // 通过头插法创建链表
    createByHeadInsert(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.headInsert(arr[i]);
        }
        return this.toString();
    }
    // 按照序号进行查找
    getElemByNum(index) {
        if (this.head === null) {
            return -1;
        }
        if(index > this.length){
            return false;
        }
        let i = 1;
        let current = this.head;
        while (i < index) {
            i += 1;
            current = current.next;
        }
        return current;
    }
    // 按照值进行查找
    getElemByValue(value) {
        if (this.head === null) {
            return -1;
        }
        let current = this.head;
        while (current.value !== value) {
            if (current.next) {
                current = current.next;
            } else {
                return -1;
            }
        }
        return current;
    }
    // 插入结点进行操作
    insert(index,element){
        let prev = this.getElemByNum(index-1);
        let node = new Node(element);
        if(prev !== -1){
          node.next = prev.next;
          prev.next = node;
        }
        this.length += 1;
        return this.toString();
    }
    // 删除一个结点
    remove(index){
      let prev = this.getElemByNum(index - 1);
      if(prev !== -1){
          let current = prev.next;
          prev.next = current.next;
          current.next = null;
      }
      this.length -= 1;
      return this.toString();
    }
    // 获取链表长度
    size(){
        return this.length;
    }

    toString() {
        let str = "";
        if (this.head === null) {
            return null;
        } else {
            let current = this.head;
            while (current.next) {
                str = str + current.value + "->";
                current = current.next;
            }
            str = str + current.value + "->";
            str = str.slice(0, str.length - 2);
        };
        return str;
    }

}

let linkedList = new LinkedList();

let arr = [1, 3, 5, 7, 9, 11,13,15];
console.log("尾插法生成一个链表", linkedList.createByTailInsert(arr), "链表长度：", linkedList.size());
// console.log(linkedList.append(11));
// console.log(linkedList.headInsert(3));
// console.log(linkedList.headInsert(4));
// console.log(linkedList.headInsert(5));
// console.log(linkedList.createByHeadInsert(arr))

// console.log(linkedList.getElemByNum(3))
// let result = linkedList.getElemByValue(3)
// console.log(result)
console.log("第4个位置插入111",linkedList.insert(4,1111),"链表长度：",linkedList.size())
console.log("删除第二个位置的元素", linkedList.remove(5), "链表长度：", linkedList.size())