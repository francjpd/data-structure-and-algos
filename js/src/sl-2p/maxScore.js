const maxScore = (cardPoints, k) => {
	const n = cardPoints.length;
	let currentSum = 0;
	for (let i = 0; i < k; i++) {
		currentSum += cardPoints[i];
	}
	if (n === k) return currentSum;

	let maxSum = currentSum;
	for (let i = 0; i < k; i++) {
		currentSum -= cardPoints[k - 1 - i];

		currentSum += cardPoints[n - 1 - i];

		maxSum = Math.max(maxSum, currentSum);
	}
	return maxSum;
};
console.log(maxScore([1, 2, 3, 4, 5, 6, 1], 3));
console.log(maxScore([2, 2, 2], 2));
console.log(maxScore([9, 7, 7, 9, 7, 7, 9], 7));
console.log(maxScore([100, 40, 17, 9, 73, 75], 3));
console.log(maxScore([1, 79, 80, 1, 1, 1, 200, 1], 3));
