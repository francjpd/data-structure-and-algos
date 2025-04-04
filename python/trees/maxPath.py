from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def maxPathSum(self, root: Optional[TreeNode]) -> int:
        def dfs(node, maxVal):
            if not node:
                return [0, maxVal]
            leftSum, maxLeft = dfs(node.left, maxVal)
            rightSum, maxRight = dfs(node.right, maxVal)

            singlePath = max(node.val, node.val + leftSum, node.val + rightSum)

            splitPath = node.val + leftSum + rightSum

            newMax = max(maxLeft, maxRight, splitPath, singlePath)

            return [singlePath, newMax]

        _, result = dfs(root, root.val)
        return result
