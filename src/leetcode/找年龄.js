var tree = {
  age: 100,
  name: 'a',
  child: [{
    age: 88,
    name: 'b'
  }, {
    age: 66,
    name: 'c',
    child: [{
      age: 0,
      name: 'd',
      child: [{ age: -1, name: 'e' }]
    }]
  }]
}
function howOld(name, tree) {
  if (tree.name === name) {
    return tree.age;
  } else if (!tree.child || tree.child.length === 0) {
    return null;
  }
  for (let i = 0; i < tree.child.length; i++) {
    let item = tree.child[i]
    let result = howOld(name, item);
    if (result) {
      return result;
    }
  }
  return null;
}
console.log(howOld('b', tree)) // 88
console.log(howOld('e', tree)) // -1
console.log(howOld('f', tree)) // null
