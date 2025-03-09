/**
 * The idea is to use a mathematical trick,
 * where we substracts the elements "Less than" from
 * the less than or equal, resulting  the "equal"
 *
 *
 * ie: Sorting apples:
 *
 * I want to get all the apples that are exactly 200gr
 * from [40, 80, 120, 180, 200]
 * Then, the idea would be to substract
 * The set less or equal than 200 from the set that contains
 * less than 180 which are : [40,80,120,180], meaning
 *
 * [40,80,120,180,200] - [40,80,120,180] = [200]
 *
 * */
const numSubarraysWithSum = (nums, goal) => {
	const lessThan = slidingWindow(nums, goal - 1);
	const lessOrEqualThan = slidingWindow(nums, goal);
	const equal = lessOrEqualThan - lessThan;
	return equal;
};

const slidingWindow = (nums, goal) => {
	if (goal < 0) return 0;
	let l = 0;
	let maxS = 0;
	let current = 0;
	for (let r = 0; r < nums.length; r++) {
		current += nums[r];
		while (current > goal) {
			current -= nums[l];
			l++;
		}
		maxS += r - l + 1;
	}
	return maxS;
};
console.log(numSubarraysWithSum([1, 0, 1, 0, 1], 2));
console.log(numSubarraysWithSum([0, 0, 0, 0, 0], 0));
