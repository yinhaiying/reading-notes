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
  midOrderTraversal(handler) {
    this.midOrderTraversalNode(this.root, handler);
  }
  midOrderTraversalNode(node, handler) {
    if (node !== null) {
      if (node.left) {
        this.midOrderTraversalNode(node.left, handler);
      }
      handler(node.key); // 输出根节点的key
      if (node.right) {
        this.midOrderTraversalNode(node.right, handler);
      }
    }
  }
  postOrderTraversal(handler) {
    this.postOrderTraversalNode(this.root, handler);
  }
  postOrderTraversalNode(node, handler) {
    if (node !== null) {
      if (node.left) {
        this.postOrderTraversalNode(node.left, handler);
      }
      if (node.right) {
        this.postOrderTraversalNode(node.right, handler);
      }
      handler(node.key); // 输出根节点的key
    }
  }
  // 二叉搜索树的搜索
  min() {
    let node = this.root;
    while (node.left) {
      node = node.left;
    }
    return node.key;
  }
  max() {
    let node = this.root;
    while (node.right) {
      node = node.right;
    }
    return node.key;
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
console.log("result:先序遍历：", result);
result = "";
binarySearchTree.midOrderTraversal(function (key) {
  result += key + "->"
});
console.log("result:中序遍历：", result);
result = "";
binarySearchTree.postOrderTraversal(function (key) {
  result += key + "->"
});
console.log("result:后序遍历：", result);

console.log("result:最小值：", binarySearchTree.min());
console.log("result:最小值：", binarySearchTree.max());
