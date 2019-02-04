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


class ReturnData{
    constructor(isB, h){
        this.isB = isB;
        this.h = h;
    }
}

var processor = function(node){
    if(!node) return new ReturnData(true, 0);
    
    let left = processor(node.left);
    
    if(!left.isB) return new ReturnData(false, 0);
    
    let right = processor(node.right);
    
    if(!right.isB) return new ReturnData(false, 0);
    
    if(Math.abs(left.h - right.h) > 1) return new ReturnData(false, 0);
    
    return new ReturnData(true, Math.max(left.h, right.h) + 1);
}

var isBalanced = function(root){
    return processor(root).isB;
}