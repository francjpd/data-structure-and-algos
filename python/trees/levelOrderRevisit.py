from collections import deque
from typing import Optional
from python.trees.isBalanced import TreeNode


class Solution:
    def levelOrder(self, root:Optional[ TreeNode ]):
        if not root:
            return None

        response = []
        queue = deque([root])

        while queue:
            queueLen = len(queue)
            level = []
            for i in range(queueLen):
                current = queue.popleft()
                level.append(current.val)

                if current.left:
                   queue.append(current.left)
                if current.right:
                    queue.append(current.right)

            response.append(level)
        return response
