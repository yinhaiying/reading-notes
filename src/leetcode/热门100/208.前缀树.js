/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = {};
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    let item = word[i];
    if (!node[item]) {
      node[item] = {};
    }
    node = node[item];
  }
  node.isWord = true;
};

/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;
  let i = 0;
  while (i < word.length) {
    let item = word[i];
    if (node[item]) {
      node = node[item]
    } else {
      node = null;
      break;
    }
    i++;
  }
  if (node && node.isWord) {
    return true;
  } else {
    return false;
  }
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  let i = 0;
  while (i < prefix.length) {
    let item = prefix[i];
    if (node[item]) {
      node = node[item]
    } else {
      node = null;
      break;
    }
    i++;
  }
  return node ? true : false;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
