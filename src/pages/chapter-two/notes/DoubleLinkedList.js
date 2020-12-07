/*
双向链表：
由于单向链表只有一个指向后继结点的指针，因此不能逆向操作。当我们需要访问前驱结点时(插入和删除)时，
只能从头开始遍历(访问后继结点的时间复杂度是O(1)，访问前驱结点的时间复杂度是O(n))。因此，我们希望给
链表添加一个指向前驱结点的指针，这样的话，一个结点既有指向前驱结点的指针又有指向后继结点的指针，
这就是双向链表。

双向链表的常见操作：
双链表中的按值查找和按位查找和单链表相同，但是双链表在插入和删除上的操作与单链表有着较大的不同。
这是因为链变化时，可以直接获取到前驱结点，不再需要进行一一遍历。也就是说需要注意对两个指针的修改。
append:向链表的尾部增加一个新的项






*/






class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class DoubleLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    // 在尾部插入元素
    append(element) {
        const node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
            node.prev = current;
        }
        this.length += 1;
    }
    // 在头部插入元素
    headInsert(element) {
        const node = new Node(element);
        if (this.head === null) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
        this.length += 1;
    }
    // 尾插法创建链表
    createByTailInsert(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.append(arr[i]);
        }
        return this.toString();
    }
    // 头插法创建链表
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
        if (index < this.length) {
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
    // 指定结点后面插入一个结点
    insert(p, element) {
        const node = new Node(element);
        node.next = p.next;
        if (p.next) {
            p.next.prev = node;
        }
        node.prev = p;
        p.next = node;
        p.next = null;
        p.prev = null;
        this.length += 1;
    }
    remove(p) {
        if (p.next === null) {
            return false;
        }
        const s = p.next;
        p.next = s.next;
        if (s.next) {
            s.next.prev = p;
        }
        s.next = null;
        s.prev = null;
        this.length -= 1;
    }
    // 获取链表长度
    size() {
        return this.length;
    }
    toString() {
        let str = "";
        let str2 = "";
        if (this.head === null) {
            return null;
        } else {
            let current = this.head;
            while (current.next) {
                // console.log("current之前:",current)
                str = str + current.value + "->";
                current = current.next;
                // console.log("current之后:", current)
            }
            str = str + current.value + "->";
            while (current.prev) {
                str2 += current.value + "->";
                current = current.prev;
            }
            str2 += current.value + "->";
            str = str.slice(0, str.length - 2);
            str2 = str2.slice(0, str2.length - 2);
        };
        return str + "," + str2;
    }
}

let arr = ["0", "1", "2", "3", "4"];
let doubleLinkedList = new DoubleLinkedList();
// doubleLinkedList.append("1");
// doubleLinkedList.append("2");
// doubleLinkedList.append("3");
// console.log(doubleLinkedList.toString());
// console.log("..................")
// 头部插入元素0
// doubleLinkedList.headInsert("0")
doubleLinkedList.createByTailInsert(arr)
// doubleLinkedList.createByHeadInsert(arr)
console.log(doubleLinkedList.toString());
// console.log(doubleLinkedList.getElemByValue("0"));
// console.log(doubleLinkedList.getElemByNum(1));
// let p = doubleLinkedList.getElemByNum(1);
let p = doubleLinkedList.getElemByNum(5);
// doubleLinkedList.insert(p, "111");
doubleLinkedList.remove(p);
console.log(doubleLinkedList.toString());
// console.log(doubleLinkedList.getElemByNum(5));