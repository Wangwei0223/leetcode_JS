/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 * Leetcode 144 二叉树前序遍历 非递归
 */
var preorderTraversal = function(root) {
    if(!root) return [];
    let res = [], stack = [], node = root, cur;
    stack.push(node);
    while(stack.length > 0){
        cur = stack.pop();
        res.push(cur.val);
        if(cur.right){
            stack.push(cur.right);
        }
        if(cur.left){
            stack.push(cur.left);
        }
    }
    return res;
};

