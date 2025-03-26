from collections import deque


class Solution:
    def rightSideViewBFS(self, root):
        if not root:
            return []
        result = []
        queue = deque([root])

        while queue:
            queueLen = len(queue)
            for i in range(queueLen):
                current = queue.popleft()
                if i == queueLen - 1:
                    result.append(current.val)

                if (current.left):
                    queue.append(current.left)
                if current.right:
                    queue.append(current.right)

        return result

    def rightSideViewDFS(self, root):
