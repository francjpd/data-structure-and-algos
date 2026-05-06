export const groupAnagrams = function (strs) {
	const anagrams = {};

	for (let i = 0; i < strs.length; i++) {
		const str = strs[i].split("");
		const sorted = str.sort().join("");
		if (anagrams[sorted]) {
			anagrams[sorted].push(strs[i]);
		} else {
			anagrams[sorted] = [strs[i]];
		}
	}

	return Object.values(anagrams).sort((a, b) => a.length - b.length);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
