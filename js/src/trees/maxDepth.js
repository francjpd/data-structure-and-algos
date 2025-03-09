/**
 ***
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */
class TreeNode {
	constructor(val = 0, left = null, right = null) {
		this.val = val;
		this.left = left;
		this.right = right;
	}
}

const root = new TreeNode(1, new TreeNode(2), new TreeNode(3));

console.log(root);

const maxDepth = (root) => {
	return countNodes(root, 0);
};
const countNodes = (root, counter) => {
	if (!root) return counter;
	const leftCounter = countNodes(root.left, counter + 1);
	const rightCounter = countNodes(root.right, counter + 1);
	return Math.max(leftCounter, rightCounter);
};

console.log(maxDepth(root));
