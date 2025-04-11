class TrieNode:
    def __init__(self):
        self.children = {}
        self.word = False

def dfs(index,node,word):
    if index == len(word):
        return node.word
    letter = word[index]
    if letter == ".":
        for anyLetter in node.children:
            if dfs(index+1, node.children[anyLetter], word):
                return True
        return False
    if letter not in node.children:
        return False
    return dfs(index+1, node.children[letter], word)

class WordDictionary:

    def __init__(self):
        self.root = TrieNode()


    def addWord(self, word: str) -> None:
        node = self.root
        for letter in word:
            if letter not in node.children:
                node.children[letter] = TrieNode()
            node = node.children[letter]
        node.word = True

    def search(self, word: str) -> bool:
        return dfs(0, self.root, word)



# Your WordDictionary object will be instantiated and called as such:
# obj = WordDictionary()
# obj.addWord(word)
# param_2 = obj.search(word)
