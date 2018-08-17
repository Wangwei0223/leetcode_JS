/**
 * 101. 对称二叉树
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if(!root) return true;
    return helper(root.left, root.right);
};

var helper = function(left, right){
    if(!left && !right) return true;
    if (!left) return false;
    if (!right) return false;
    if (left.val !== right.val) return false;
    return helper(left.left, right.right) && helper(left.right, right.left);
}