class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        if len(s) != len(s):
            return False

        map ={}

        for char in s:
            map[char] = map.get(char,0) + 1

        for char in t:
            if char not in map:
                return False
            map[char] -= 1
            if map[char] == 0:
                del map[char]
        return  len(map) == 0
