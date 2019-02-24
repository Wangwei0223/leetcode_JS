/**
 * 333. Largest BST Subtree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */


/*
    1. 来自左树
    2. 来自右树
    3. 左BST & 右BST, 且当前大于 左最大 当前小于 右最小
    
    需要的信息
    max
    min
    size
    head
*/



class Info{
    constructor(head, size, max, min){
        this.head = head;
        this.size = size;
        this.max = max;
        this.min = min;
    }
}

var largestBSTSubtree = function(root){
    let res = process(root);
    
    return res.size;
}

var process = function(root) {
    if(root === null){
        return new Info(root, 0, Number.MIN_VALUE, Number.MAX_VALUE);
    }
    
    let left_info = process(root.left);
    let right_info = process(root.right);
    let maxhead = null, maxsize = 0;
    
    // 左BST & 右BST, 且当前大于 左最大 当前小于 右最小
    let included = 0;
    if(left_info.head === root.left && right_info.head === root.right && left_info.max < root.val && root.val < right_info.min){
        included = left_info.size + 1 + right_info.size;
    }
    
    // 1. 来自左树 or 2. 来自右树
    maxhead = left_info.size > right_info.size ? left_info.head : right_info.head;
    maxsize = left_info.size > right_info.size ? left_info.size : right_info.size;
    maxsize = Math.max(maxsize, included);
    maxhead = maxsize === included ? root : maxhead;
    
    return new Info(maxhead, maxsize, Math.max(Math.max(left_info.max, right_info.max), root.val) , Math.min(Math.min(left_info.min, right_info.min), root.val));
    
};


/**
 * 543. Diameter of Binary Tree
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/*
    依次求以每个节点为树的最大距离, 套路同333
    1. 最大距离来自与我左树
    2. 最大距离来自与我右树
    3. 来自我左 + 我右 + 1 自己
*/


var ans = 0;

var diameterOfBinaryTree = function(root) {
    ans = 1;
    depth(root);
    return ans - 1;
};


var depth = function(root){
    if(!root) return 0;
    let left = depth(root.left);
    let right = depth(root.right);
    ans = Math.max(ans, left + right + 1);
    return Math.max(left, right) + 1;
}