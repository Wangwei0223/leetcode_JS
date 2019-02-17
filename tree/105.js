/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 105. Construct Binary Tree from Preorder and Inorder Traversal
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(preorder.length === 0) return null;
    let root = new TreeNode(preorder[0]);
    let in_idx = inorder.indexOf(preorder[0]);
    root.left = buildTree(preorder.slice(1, in_idx + 1), inorder.slice(0, in_idx));
    root.right = buildTree(preorder.slice(in_idx + 1), inorder.slice(in_idx + 1, inorder.length));
    return root;
};