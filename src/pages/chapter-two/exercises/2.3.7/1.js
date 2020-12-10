/* 
设计一个递归算法，删除不带头结点的单链表L中所有值为x的结点。


*/
const linkedList = require("./index");
const arr = [1, 2, 3, 1, 4, 2, 1, 5];
linkedList.createByTailInsert(arr);

const removeAllX = (current,x) => {
    if(current === null){
        return;
    }
    if(current.value === x){
        linkedList.removeEle(x);
        current = current.next;
        removeAllX(current, x)
    }else{
        current = current.next;
        removeAllX(current, x);
    }
}
// console.log(linkedList.toString());
// console.log(removeAllX(linkedList.head,5));
// console.log(linkedList.toString());

// 不使用递归
const deleteAllX = (x) => {
    if(linkedList.head === null){
        return false;
    }else if(linkedList.head.value === x){
        linkedList.head = linkedList.head.next;
    }
    let prev = linkedList.head;
    let current = linkedList.head.next;
    while(current !== null){
        if(current.value === x){
            prev.next = current.next;
            current = current.next;
        }else{
            prev = current;
            current = current.next;
        }
    }
}

console.log(linkedList.toString());
console.log(deleteAllX( 2));
console.log(linkedList.toString());
