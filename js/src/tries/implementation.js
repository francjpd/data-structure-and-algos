class TrieNode {
  constructor(children = {}, endOfWord = false) {
    this.children = children;
    this.endOfWord = endOfWord;
  }
}
const Trie = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let node = this.root;
  for (const letter of word) {
    if (!node.children[letter]) {
      node.children[letter] = new TrieNode();
    }
    node = node.children[letter];
  }
  node.en;
};

/**
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  let node = this.root;
  for (const letter of word) {
    if (!node.children[letter]) {
      return false;
    }
    node = node.children[letter];
  }
  return node.endOfWord;
};

/**
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  let node = this.root;
  for (const letter of prefix) {
    if (!node.children[letter]) {
      return false;
    }
    node = node.children[letter];
  }
  return true;
};

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
