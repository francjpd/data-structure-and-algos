from typing import List

class Solution:
    def containsDuplicate(self, nums: List[int]) -> bool:
        if len(nums) < 2:
            return False
        m = {}
        for num in nums:
            if num in m:
                return True
            m[num] = num

        return False



