/**
 * 110. 平衡二叉树
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
var isBalanced = function(root) {
    if(root === null) return true;
    if(Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) return false;
    else{
        return isBalanced(root.left) && isBalanced(root.right);
    }
};

var maxDepth = function(root){
    if(!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 * Leetcode 110 平衡二叉树
 */
var isBalanced = function(root) {
    if(!root) return true;
    if(Math.abs(maxDepth(root.left) - maxDepth(root.right)) > 1) return false;
    return isBalanced(root.left) && isBalanced(root.right);
};

var maxDepth = function(root){
    if(!root) return 0;
    return 1 + Math.max(maxDepth(root.left),maxDepth(root.right));
}