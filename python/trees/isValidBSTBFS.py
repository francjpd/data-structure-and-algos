from collections import deque


class Solution:
    def isValidBST(self, root):
        if not root:
            return True
        queue = deque([root, float("-inf"), float("inf")])
        while queue:
            current, low, high = queue.popLeft()
            if not low <= current.val <= high:
                return False
            if current.left:
                queue.append((current.left, low, current.val))
            if current.right:
                queue.append((current.right, current.val, high))
        return True
