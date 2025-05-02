class Solution:
    def combinationSum(self,candidates,target):
        result = []
        def backtracking(index,curSum, sum):
            if sum == target:
                result.append(curSum.copy())
                return
            if sum > target or index >= len(candidates):
                return

            curSum.append(candidates[index])
            backtracking(index,curSum, sum +candidates[index])
            curSum.pop()
            backtracking(index+1,curSum, sum)

        backtracking(0,[],0)
        return result
