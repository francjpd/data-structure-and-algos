const nice = (nums, k) => {
	const lessThan = slidingWindow(nums, k - 1);
	const lessOrEqualThan = slidingWindow(nums, k);
	return lessOrEqualThan - lessThan;
};

const slidingWindow = (nums, k) => {
	if (k < 0) return 0;
	let odd = 0;
	let l = 0;
	let total = 0;
	for (let r = 0; r < nums.length; r++) {
		if (nums[r] % 2 !== 0) {
			odd++;
		}
		while (odd > k) {
			if (nums[l] % 2 !== 0) {
				odd--;
			}
			l++;
		}
		total += r - l + 1;
	}
	return total;
};
console.log(nice([2, 4, 6], 1)); // 0
console.log(nice([1, 1, 2, 1, 1], 3)); // 2
console.log(nice([2044, 96397, 50143], 1)); // 3
console.log(
	nice(
		[
			91473, 45388, 24720, 35841, 29648, 77363, 86290, 58032, 53752, 87188,
			34428, 85343, 19801, 73201,
		],
		4,
	),
); // 6
console.log(nice([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)); // 16
