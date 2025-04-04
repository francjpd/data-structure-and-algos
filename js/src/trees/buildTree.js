class TreeNode {
  constructor(val, l = null, r = null) {
    this.val = val;
    this.l = l;
    this.r = r;
  }
}
const buildTree = (preorder, inorder) => {
  if (!preorder.length || !inorder.length) {
    return null;
  }
  const root = new TreeNode(preorder[0]);
  const mid = inorder.indexOf(root.val);
  root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
  root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));
  return root;
};
