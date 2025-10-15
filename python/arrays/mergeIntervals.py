class Solution(object):
    def merge(self, intervals):
        if not intervals:
            return []

        intervals.sort(key=lambda x: x[0])

        prev = intervals[0]
        res = []

        for i in range(1, len(intervals)):
            curr = intervals[i]
            if curr[0] <= prev[1]:
                prev = [min(prev[0],curr[0]), max(prev[1],curr[1])]
            else:
                res.append(prev)
                prev = curr
        res.append(prev)
        return res


