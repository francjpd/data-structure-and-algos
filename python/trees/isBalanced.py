from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        def dfs(current):
            if not current:
                return [True, 0]

            left, right = dfs(current.left), dfs(current.right)
            isBalanced = right[0] and left[0] and abs(left[1] - right[1]) <= 1
            return [isBalanced, 1 + max(left[1], right[1])]

        return dfs(root)[0]
