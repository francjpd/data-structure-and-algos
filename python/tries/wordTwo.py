class TrieNode:
   def  __init__(self):
        self.children = {}
        self.word = False
class Words:
    def __init__(self):
       self.root = TrieNode()

    def addWords(self, word):
        node = self.root
        for letter in word:
            if letter not in node.children:
                node.children[letter] = TrieNode()
            node = node.children[letter]
        node.word = True

class Solution:
    def findWords(self, board, words):
        trieWords = Words()
        for word in words:
            trieWords.addWords(word)

        ROWS, COLS = len(board), len(board[0])
        res, visited = set(), set()

        def dfs(r,c,node,word):
            if ( r < 0 or c < 0
                or r >= ROWS or c >= COLS
                or (r, c) in visited
                or board[r][c] not in node.children):

                return
            visited.add((r,c))

            node = node.children(board[r][c])
            word += board[r][c]

            if (node.word):
                res.add(word)





