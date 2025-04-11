class TrieNode {
  constructor() {
    this.children = {};
    this.endOfWord = false;
  }
}
var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (const letter of word) {
    if (!node.children[letter]) {
      node.children[letter] = new TrieNode();
    }
    node = node.children[letter];
  }
  node.endOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  const dfs = (index, node) => {
    // We have reachd the end of the word and need to validate if its endOfWord
    if (index === word.length) {
      return node.endOfWord;
    }

    const letter = word[index];
    if (letter === ".") {
      // This is very interesting as we need to iterate over every children if its a dot
      for (const anyChild in node.children) {
        if (dfs(index + 1, node.children[anyChild])) {
          return true;
        }
      }
      return false;
    }
    if (!node.children[letter]) {
      return false;
    }
    return dfs(index + 1, node.children[letter]);
  };
  return dfs(0, this.root);
};

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
