const longRepeating = (s, k) => {
	return slidingWindow(s, k) - slidingWindow(s, k - 1);
};
const slidingWindow = (s, k) => {
	if (k < 0) return 0;
	let l = 0;
	let currentChar = s[0];
	let current = 1;
	let longest = 0;
	let maxChars = 0;
	for (let r = 1; r < s.length; r++) {
		if (currentChar !== s[r]) {
			maxChars++;
		}
		current++;
		while (maxChars > k && s[l] != current) {
			currentChar = s[l];
			maxChars = 0;
			current--;
		}
		longest += r - l + 1;
	}
	return longest;
};
//
// console.log(longRepeating("ABBA", 2));
// console.log(longRepeating("ABBB", 2));
// console.log(longRepeating("ABAB", 2));
console.log(longRepeating("ABAB", 0));
// console.log(longRepeating("ABBCAA", 1));
// console.log(longRepeating("AABABBA", 1));
// console.log(longRepeating("AABABBA", 1));
