/*
将数组改成树形结构，子节点用children表示
即使打乱数组，你的程序也能正常运行.


*/
const array = [
  { id: 8, name: "前端开发部门", parent: 5 },
  { id: 9, name: "前端基础设施组", parent: 8 },
  { id: 10, name: "前端业务组", parent: 5 },
  { id: 4, name: "人事部", parent: 1 },
  { id: 5, name: "技术部", parent: 1 },
  { id: 6, name: "产品部", parent: 1 },
  { id: 7, name: "后端开发部门", parent: 5 },
  { id: 1, name: "CEO", parent: null },
  { id: 2, name: "运营部", parent: 1 },
  { id: 3, name: "财务部", parent: 1 },
]


function arrayToTree(arr) {
  let tree = {};
  let queue = [...arr];
  while (queue.length > 0) {
    const item = queue.shift();  // 出栈
    if (insert(tree, item)) {
      console.log(`插入成功${item.name}`)
    } else {
      console.log(`插入失败,将${item.name}放到队尾`);
      queue.push(item);
    }
  }
  return tree;
}

function createNode(item) {
  return {
    ...item,
    children: []
  }
}
function insert(tree, item) {
  if (item.parent === null) {
    const newNode = createNode(item);
    Object.assign(tree, newNode);
    return true;
  } else {
    const parentNode = findNodeById(tree, item.parent);
    if (parentNode) {
      const newNode = createNode(item);
      parentNode.children.push(newNode);
      return true;
    }
  }
}

function findNodeById(tree, id) {
  if (tree.id === id) {
    return tree;
  } else if (!tree.children) {
    return false;
  } else {
    for (let i = 0; i < tree.children.length; i++) {
      let parentNode = findNodeById(tree.children[i], id);
      if (parentNode) {
        return parentNode;
      }
    }
  }
}


console.log(arrayToTree(array))
