#%% Bucket approach
def topKFrequent(self, nums , k ):
    map = {}
    for num in nums:
            map[num] = map.get(num,0) + 1

    max_freq = len(nums)
    buckets = [[] for _ in range(max_freq+1)]

    for num, freq in map.items():
        buckets[freq].append(num)

    result = []
    for freq in range(max_freq, 0 , -1):
        for num in buckets[freq]:
            result.append(num)
            if len(result) == k:
                return result

