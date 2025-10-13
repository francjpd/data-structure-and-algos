from typing import List

def groupAnagrams(strs: List[str]) -> List[List[str]]:
    anagram_groups  = {}

    for word in strs:
        sorted_key = ''.join(sorted(word))

        if sorted_key in anagram_groups:
            anagram_groups[sorted_key].append(word)
        else:
           anagram_groups[sorted_key] = [word]

    return list(anagram_groups.values())

print(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']))

