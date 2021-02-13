/*
二叉搜索树的实现：

1. 插入：不能随便插入，必须遵循二叉搜索树的规律。左边小，右边大。

*/

// 这里的key是值的是编号，而不是值
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(key) {
    // 1. 创建结点
    const newNode = new Node(key);
    const currentNode = this.root;
    // 2. 判断根结点是否有值
    if (!this.root) {
      this.root = newNode;
    } else {
      // while (currentNode) {
      //   if (newNode.key < currentNode.key) {
      //     currentNode = currentNode.left;
      //   } else if (newNode.key > currentNode.right) {
      //     currentNode = currentNode.right;
      //   }
      // }
      // currentNode = newNode;
      this.insertNode(this.root, newNode)
    }
  }
  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      //可能左节点不存在
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }
  preOrderTraversal(handler) {

    this.preOrderTraversalNode(this.root, handler);
  }
  preOrderTraversalNode(node, handler) {
    if (node !== null) {
      handler(node.key); // 输出根节点的key
      if (node.left) {
        this.preOrderTraversalNode(node.left, handler);
      }
      if (node.right) {
        this.preOrderTraversalNode(node.right, handler);
      }
    }
  }
}


const binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(11)
binarySearchTree.insert(7)
binarySearchTree.insert(15);
binarySearchTree.insert(5);
binarySearchTree.insert(3);
binarySearchTree.insert(9);
binarySearchTree.insert(8);
binarySearchTree.insert(10);
binarySearchTree.insert(13);
binarySearchTree.insert(12);
binarySearchTree.insert(14);
binarySearchTree.insert(20);
binarySearchTree.insert(18);
binarySearchTree.insert(25);
binarySearchTree.insert(6);

var result = "";

binarySearchTree.preOrderTraversal(function (key) {
  result += key + "->"
});
console.log(result)
