from collections import deque

class Solution:
    def levelOrder(root):
        if not root:
            return []
        res = []
        queue = deque()
        queue.append(root)

        while queue:
            level = []
            n = len(queue)
            for i in range(n):
                current = queue.popleft()
                level.append(current.val)

                if current.left:
                    queue.append(current.left)
                if current.right:
                    queue.append(current.right)

            if level:
                res.append(level)
        return res
