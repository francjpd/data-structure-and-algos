class Solution:
    def containsDuplicate(self, nums: List[int])-> bool:

        # add some edge cases first
        if len(nums) < 2:
            return False

        map = {}

        for num in nums:
            if num in map:
                return True
            map.add(num)

        return False

