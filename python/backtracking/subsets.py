class Solution:
    def subsets(self, nums):
        res, sub = [], []
        def dfs(index):
            if index == len(nums):
                res.append(sub.copy())

            sub.append(nums[index])
            dfs(index+1)

            sub.pop()
            dfs(index+1)

        dfs(0)
        return res


