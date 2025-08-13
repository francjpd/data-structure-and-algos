class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(t):
            return False
        h = {}
        for char in s:
            h[char] = h.get(char,0) + 1

        for char in t:
            if char not in h or h[char] == 0:
                return False
            h[char] -= 1
        return True

