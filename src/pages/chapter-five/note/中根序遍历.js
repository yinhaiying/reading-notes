/*
使用栈实现一个中根序队列
由于我们需要先遍历左子树，然后才能找根结点，但是一旦遍历左子树就没办法找到它的父亲结点也就是根结点了，
因为二叉树没有记录父亲结点，因此我们需要一个栈把父亲结点压进去，回来时能够弹出来。

*/



// 分析步骤一：使用栈来存储根结点
function traverseMidTree0(tree) {
  let stack = [];
  let current = tree;
  while (current) {
    stack.push(current);
    current = current.left;  //不断地将二叉树的所有左子树添加进去
  }
  if (stack.length > 0) {
    current = stack.pop();  // 弹出来的一定是根结点
    fn(current.val);
    current = current.right;//此时应该跟之前的操作一样，一直找左子树，也就是继续while循环。
    // 继续调用while循环
  }
}

// 分析步骤二：使用递归
function traverseMidTree0(tree) {
  let stack = [];
  let current = tree;
  function x() {
    while (current) {
      stack.push(current);
      current = current.left;  //不断地将二叉树的所有左子树添加进去
    }
    if (stack.length > 0) {
      current = stack.pop();  // 弹出来的一定是根结点
      fn(current.val);
      current = current.right;
      x();  // 如果可以使用递归的话
    }
  }
}
// 但是由于不能使用递归，因此我们如何去实现这种回去执行的操作了。事实上js中的while(true)  continue可以帮助
// 我们实现这种类似的功能，while(true)会一直执行，而continue是跳出当前循环，执行下一次循环。因此我们只需要改造
// 以下x函数即可。

// 分析步骤三：使用while(true)和continue实现goto功能
function traverseMidTree0(tree) {
  let stack = [];
  let current = tree;
  while (true) {
    while (current) {
      stack.push(current);
      current = current.left;  //不断地将二叉树的所有左子树添加进去
    }
    if (stack.length > 0) {
      current = stack.pop();  // 弹出来的一定是根结点
      fn(current.val);
      current = current.right;
      continue;
    }
  }
}


//  分析步骤四：如果栈是空的，表示没有根结点了，使用break跳出循环即可。

function traverseMidTree(tree) {
  let stack = [];
  let current = tree;
  while (tree) {

    // 每次找到最左边的结点
    while (current) {
      stack.push(current);
      current = current.left;  //不断地将二叉树的所有左子树添加进去
    }
    if (stack.length > 0) {
      current = stack.pop();  // 弹出来的一定是根结点
      fn(current.val);
      current = current.right;//此时应该去找跟结点的右子树
      // 接下来就需要去遍历最后一个结点的右子树。又是一个添加栈的过程。相当于回到while(current.left)
      continue;
    } else {
      break;
    }
  }
}


function fn(value) {
  console.log(value);
}


const node = (val, left, right) => {
  return {
    val,
    left,
    right
  }
}

const binaryTree = node(
  "A",
  node("B", node("D"), null),
  node("C",
    node("E", null, node("G")),
    node("F", node("H"), node("J")))
)
