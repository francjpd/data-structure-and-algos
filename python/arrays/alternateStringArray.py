class Solution:
    def mergeAlternately(word1: str, word2: str) -> str:
        result = []
        n = max(len(word1), len(word2))
        for i in range(n):
            if len(word1) > i :
                result.append(word1[i])
            if len(word2) > i:
                result.append(word2[i])
        return ''.join(result)


print(Solution.mergeAlternately('abcd','pqr'))
