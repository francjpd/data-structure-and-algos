class Solution:
    def kthSmallestElement(self, root, k):
        cnt = 0
        res = root.val

        def dfs(node):
            nonlocal cnt, res
            if not node:
                return
            dfs(node.left)
            cnt += 1
            if cnt == k:
                res = node.val
                return
            dfs(node.right)

        dfs(root)
        return res
