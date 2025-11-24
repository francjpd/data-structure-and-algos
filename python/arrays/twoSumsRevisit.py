def twoSums(nums, target):
    map = {}

    for i, num in nums:
        op = target - num
        if op in map:
            return [i, map[op]]
        map[num] = i
    return []
