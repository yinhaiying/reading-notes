/* 
循环单链表和单链表的一个重要区别是：最后一个结点的next不再指向Null
而是指向head。
参考文章：
https: //www.cnblogs.com/xbblogs/p/9897118.html
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    append(element) {
        const node = new Node(element);
        if (this.head === null) {
            this.head = node;
            node.next = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next;
            }
            current.next = node;
            node.next = this.head;
        }
        this.length += 1;
    }
    // 尾插法创建循环单链表
    createByTailInsert(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.append(arr[i]);
        }
    }
    headInsert(element) {
        const node = new Node(element);
        if (this.head === null) {
            this.head = node;
            node.next = this.head;
        } else {
            console.log("head:", this.head);
            let tail = this.getTail();
            node.next = this.head;
            this.head = node;
            tail.next = this.head;
            console.log("head:", this.head);
        }
        this.length += 1;
    }
    // 通过头插法创建链表
    createByHeadInsert(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.headInsert(arr[i]);
        }
    }
    // 获取最后一个结点
    getTail() {
        if (this.head === null) {
            return false;
        }
        let current = this.head;
        while (current.next !== this.head) {
            current = current.next;
        }
        return current;
    }
    insert(index, element) {
        if (index < 0 || index > this.length) {
            return false;
        }
        const node = new Node(element);
        if (this.head === null) {
            this.head = node;
            node.next = this.head;
        } else {
            const current = this.getElemByNum(index);
            node.next = current.next;
            current.next = node;
        }
        this.length += 1;
    }
    remove(index) {
        if (index < 0 || index > this.length) {
            return false;
        }
        const prev = this.getElemByNum(index - 1);
        const current = prev.next;
        // 如果删除的是最后一个元素，需要修改
        prev.next = current.next;
        current.next = null;
    }
    // 按照序号进行查找
    getElemByNum(index) {
        if (this.head === null) {
            return -1;
        }
        if (index > this.length) {
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
    // 根据值进行查找
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
    // 获取链表长度
    size() {
        return this.length;
    }
    toString() {
        console.log("toString方法开始执行")
        let str = "";
        if (this.head === null) {
            return null;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                str = str + current.value + "->";
                current = current.next;
            }
            str = str + current.value + "->" + this.head.value;
            str = str.slice(0, str.length);
        };
        return str;
    }
}

const circularLinkedList = new CircularLinkedList();
const arr = ["1", "2", "3", "4", "5"];
// 尾插法
// circularLinkedList.createByTailInsert(arr);
// console.log(circularLinkedList.toString());
// 头插法：
// circularLinkedList.headInsert("00");
// circularLinkedList.headInsert("11");
// circularLinkedList.headInsert("22");
circularLinkedList.createByHeadInsert(arr);
console.log(circularLinkedList.toString());
// 根据序号获取值
// console.log(circularLinkedList.getElemByNum(5));
// 根据值进行查找
// console.log(circularLinkedList.getElemByValue("4"))

// 在指定位置后面插入元素
// circularLinkedList.insert(3,"000");
// console.log(circularLinkedList.toString());

// 在指定位置后面删除元素
circularLinkedList.remove(4);
console.log(circularLinkedList.toString());