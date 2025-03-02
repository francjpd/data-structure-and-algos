const numberOfSubstring = (s) => {
	let result = 0;
	let l = 0;
	const map = new Map();

	for (let r = 0; r < s.length; r++) {
		map.set(s[r], (map.get(s[r]) || 0) + 1);

		while (map.size === 3) {
			result += s.length - r;
			console.log(result);
			map.set(s[l], map.get(s[l]) - 1);
			if (map.get(s[l]) === 0) {
				map.delete(s[l]);
			}
			l++;
		}
	}

	return result;
};

console.log(numberOfSubstring("abcabc")); // 10
console.log(numberOfSubstring("aaabc")); // 3
console.log(numberOfSubstring("abc")); // 1
console.log(numberOfSubstring("acbbcac")); // 11
