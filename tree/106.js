/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 * 
 * 106. Construct Binary Tree from Inorder and Postorder Traversal
 * 
 * inorder = [9,3,15,20,7]
   postorder = [9,15,7,20,3]
 * 
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
    if(postorder.length === 0) return null;
    let root = new TreeNode(postorder[postorder.length - 1]);
    let idx = inorder.indexOf(postorder[postorder.length - 1]);
    
    let left_in = inorder.slice(0, idx);
    let right_in = inorder.slice(idx + 1, inorder.length);
    root.left = buildTree(left_in, postorder.slice(0, postorder.length - 1 - right_in.length));
    root.right = buildTree(right_in, postorder.slice(postorder.length - 1 - right_in.length, postorder.length - 1));
    return root;
};