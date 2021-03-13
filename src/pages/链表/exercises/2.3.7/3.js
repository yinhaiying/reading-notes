/* 
设L为带头结点的单链表，编写算法实现从尾到头反向输出每个结点的值。
备注：使用js实现，默认都是不带头结点

*/
const LinkedList = require("../../notes/LinkedList");
const linkedList = require("./index");
const arr = [1, 2,3];
linkedList.createByTailInsert(arr);
console.log(linkedList.toString());

let result = [];
const revertPrint = (L) => {
  if (L.next === null) {
      return false;
  }else{
    L = L.next;
    revertPrint(L);
  }
  result.push(L.value)
//   console.log("L:", L.value)
  
//   console.log(L.value)
}
revertPrint(linkedList.head)
console.log("result:",result);
